

import dbConnect from '@/lib/dbConnect';
import Panchang from '@/models/panchang';
import { NextResponse } from 'next/server';
import { 
  calculateSunTimes, 
  calculateMoonTimes, 
  calculateTithi, 
  calculateNakshatra, 
  calculateYoga,
  calculateKarana,
  calculateRahuKalam,
  calculateGulikaKalam,
  calculateYamagandaKalam,
  getFestivals
} from '@/lib/panchangCalculations';

const cityDatabase = {
  'New Delhi': { lat: 28.6139, lng: 77.2090, tz: 'Asia/Kolkata' },
  // Add all other cities...
};

const getPanchangData = async (date, place) => {
  const city = cityDatabase[place] || cityDatabase['New Delhi'];
  
  const [
    sunTimes,
    moonTimes,
    tithi,
    nakshatra,
    yoga,
    festivals
  ] = await Promise.all([
    calculateSunTimes(date, city.lat, city.lng, city.tz),
    calculateMoonTimes(date, city.lat, city.lng, city.tz),
    calculateTithi(date),
    calculateNakshatra(date),
    calculateYoga(date),
    getFestivals(date)
  ]);

  return {
    date,
    tithi,
    nakshatra,
    yoga,
    karana: calculateKarana(tithi),
    sunrise: sunTimes.sunrise,
    sunset: sunTimes.sunset,
    moonrise: moonTimes.moonrise,
    moonset: moonTimes.moonset,
    location: {
      place,
      latitude: city.lat,
      longitude: city.lng,
      timezone: city.tz
    },
    festivals,
    rahuKalam: calculateRahuKalam(date, city.lat, city.lng, city.tz),
    gulikaKalam: calculateGulikaKalam(date, city.lat, city.lng, city.tz),
    yamagandaKalam: calculateYamagandaKalam(date, city.lat, city.lng, city.tz)
  };
};

export async function GET(request) {
  try {
    await dbConnect();
    
    const { searchParams } = new URL(request.url);
    const dateParam = searchParams.get('date');
    const place = searchParams.get('place') || 'New Delhi';

    // Validate place
    if (!cityDatabase[place]) {
      return NextResponse.json(
        { error: 'Location not supported' },
        { status: 400 }
      );
    }

    // Validate and normalize date
    let date;
    try {
      date = dateParam ? new Date(dateParam) : new Date();
      if (isNaN(date.getTime())) throw new Error('Invalid date');
      
      // Normalize date to start of day in local time
      date = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    } catch (error) {
      console.error('Date parsing error:', error);
      date = new Date(); // Fallback to current date
    }

    // Try cache first
    const cached = await Panchang.findOne({
      date: { $gte: new Date(date.setHours(0, 0, 0, 0)), $lt: new Date(date.setHours(23, 59, 59, 999)) },
      'location.place': place
    }).lean();

    if (cached) {
      console.log('Returning cached panchang data');
      return NextResponse.json(cached);
    }

    // Calculate fresh data
    console.log('Calculating fresh panchang data for', date, place);
    const panchangData = await getPanchangData(date, place);

    // Save to DB
    await Panchang.findOneAndUpdate(
      { date, 'location.place': place },
      panchangData,
      { upsert: true, new: true }
    );

    return NextResponse.json(panchangData);
  } catch (error) {
    console.error('Panchang API error:', error);
    
    // Return basic data even on error
    const fallback = await getPanchangData(new Date(), 'New Delhi');
    return NextResponse.json(fallback, { 
      status: 500,
      headers: {
        'Cache-Control': 'no-store'
      }
    });
  }
}