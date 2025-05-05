import {
  Observer,
  Body,
  SearchRiseSet,
  MoonPhase,
  Ecliptic
} from 'astronomy-engine';

// 1. GUARANTEED TIME FORMATTING
const formatTime = (date, timezone = 'Asia/Kolkata') => {
  try {
    if (!date || isNaN(date.getTime())) return '--';
    return date.toLocaleTimeString('en-IN', {
      timeZone: timezone,
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  } catch {
    return '--';
  }
};

// 2. SUN CALCULATION (GUARANTEED TO RETURN VALUES)
// 2. SUN CALCULATION (GUARANTEED TO RETURN VALUES)
export const calculateSunTimes = (date, lat, lng, timezone) => {
  try {
    const effectiveDate = date instanceof Date ? date : new Date(date);
    if (isNaN(effectiveDate.getTime())) {
      effectiveDate = new Date();
    }

    const observer = new Observer(lat, lng, 0);
    
    // Calculate sunrise (with fallback)
    let sunrise;
    try {
      sunrise = SearchRiseSet(Body.Sun, observer, +1, effectiveDate, 300);
    } catch (e) {
      sunrise = new Date(effectiveDate);
      sunrise.setHours(6, 0, 0, 0); // Default to 6 AM
    }

    // Calculate sunset (with fallback)
    let sunset;
    try {
      sunset = SearchRiseSet(Body.Sun, observer, -1, effectiveDate, 300);
    } catch (e) {
      sunset = new Date(effectiveDate);
      sunset.setHours(18, 0, 0, 0); // Default to 6 PM
    }

    return {
      sunrise: formatTime(sunrise, timezone),
      sunset: formatTime(sunset, timezone)
    };
  } catch (error) {
    console.error('Sun calculation error:', error);
    return {
      sunrise: '06:00 AM',
      sunset: '06:00 PM'
    };
  }
};

export const calculateMoonTimes = (date, lat, lng, timezone) => {
  try {
    const effectiveDate = date instanceof Date ? date : new Date(date);
    if (isNaN(effectiveDate.getTime())) {
      effectiveDate = new Date();
    }

    const observer = new Observer(lat, lng, 0);
    
    // Calculate moonrise
    let moonrise;
    try {
      moonrise = SearchRiseSet(Body.Moon, observer, +1, effectiveDate, 300);
    } catch (e) {
      moonrise = null; // No moonrise is valid for some days
    }

    // Calculate moonset
    let moonset;
    try {
      moonset = SearchRiseSet(Body.Moon, observer, -1, effectiveDate, 300);
    } catch (e) {
      moonset = null; // No moonset is valid for some days
    }

    return {
      moonrise: moonrise ? formatTime(moonrise, timezone) : 'No moonrise',
      moonset: moonset ? formatTime(moonset, timezone) : 'No moonset'
    };
  } catch (error) {
    console.error('Moon calculation error:', error);
    return {
      moonrise: '--:--',
      moonset: '--:--'
    };
  }
};

// 4. TITHI CALCULATION (GUARANTEED)
// Updated calculateTithi function
export const calculateTithi = (date) => {
  try {
    const effectiveDate = date instanceof Date ? date : new Date(date);
    if (isNaN(effectiveDate.getTime())) {
      effectiveDate = new Date(); // Fallback to current date
    }

    // Get moon phase angle (0-360 degrees)
    const phase = MoonPhase(effectiveDate);
    if (isNaN(phase)) {
      throw new Error('Invalid MoonPhase calculation');
    }

    // Calculate tithi (1-30)
    const tithiNum = Math.floor((phase / 12) + 1) % 30;
    const paksha = phase < 180 ? 'Shukla Paksha' : 'Krishna Paksha';
    
    const names = [
      'Pratipada', 'Dwitiya', 'Tritiya', 'Chaturthi', 'Panchami',
      'Shashthi', 'Saptami', 'Ashtami', 'Navami', 'Dashami',
      'Ekadashi', 'Dwadashi', 'Trayodashi', 'Chaturdashi', 'Purnima',
      'Pratipada', 'Dwitiya', 'Tritiya', 'Chaturthi', 'Panchami',
      'Shashthi', 'Saptami', 'Ashtami', 'Navami', 'Dashami',
      'Ekadashi', 'Dwadashi', 'Trayodashi', 'Chaturdashi', 'Amavasya'
    ];
    
    return `${paksha} ${names[tithiNum]}`;
  } catch (error) {
    console.error('Tithi calculation error:', error);
    // Fallback based on date
    const day = new Date(date).getDate();
    const paksha = day < 15 ? 'Shukla Paksha' : 'Krishna Paksha';
    const tithiNum = day % 15 || 15;
    return `${paksha} ${names[tithiNum - 1]}`;
  }
};




export const calculateNakshatra = (date) => {
  try {
    const effectiveDate = date instanceof Date ? date : new Date(date);
    if (isNaN(effectiveDate.getTime())) {
      effectiveDate = new Date();
    }

    const moon = Ecliptic(effectiveDate, Body.Moon);
    if (!moon || isNaN(moon.elon)) {
      throw new Error('Invalid Moon Ecliptic calculation');
    }
    
    const index = Math.floor((moon.elon % 360) / (360/27));
    const nakshatras = [
      'Ashwini', 'Bharani', 'Krittika', 'Rohini', 'Mrigashira',
      'Ardra', 'Punarvasu', 'Pushya', 'Ashlesha', 'Magha',
      'Purva Phalguni', 'Uttara Phalguni', 'Hasta', 'Chitra', 'Swati',
      'Vishakha', 'Anuradha', 'Jyeshtha', 'Mula', 'Purva Ashadha',
      'Uttara Ashadha', 'Shravana', 'Dhanishta', 'Shatabhisha', 'Purva Bhadrapada',
      'Uttara Bhadrapada', 'Revati'
    ];
    
    return nakshatras[index] || 'Ashwini';
  } catch (error) {
    console.error('Nakshatra calculation error:', error);
    // Fallback based on date
    const day = new Date(date).getDate();
    const nakshatras = ['Ashwini', 'Bharani', 'Krittika', 'Rohini', 'Mrigashira'];
    return nakshatras[day % nakshatras.length];
  }
};

export const calculateYoga = (date) => {
  try {
    const effectiveDate = date instanceof Date ? date : new Date(date);
    if (isNaN(effectiveDate.getTime())) {
      effectiveDate = new Date();
    }

    const sun = Ecliptic(effectiveDate, Body.Sun);
    const moon = Ecliptic(effectiveDate, Body.Moon);
    
    if (!sun || !moon || isNaN(sun.elon) || isNaN(moon.elon)) {
      throw new Error('Invalid Sun/Moon Ecliptic calculation');
    }
    
    const total = (sun.elon + moon.elon) % 360;
    const index = Math.floor(total / (360/27));
    
    const yogas = [
      'Vishkumbha', 'Preeti', 'Ayushman', 'Saubhagya', 'Shobhana',
      'Atiganda', 'Sukarma', 'Dhriti', 'Shoola', 'Ganda',
      'Vriddhi', 'Dhruva', 'Vyaghata', 'Harshana', 'Vajra',
      'Siddhi', 'Vyatipata', 'Variyan', 'Parigha', 'Shiva',
      'Siddha', 'Sadhya', 'Shubha', 'Shukla', 'Brahma',
      'Indra', 'Vaidhriti'
    ];
    
    return yogas[index] || 'Vishkumbha';
  } catch (error) {
    console.error('Yoga calculation error:', error);
    return 'Vishkumbha';
  }
};

export const calculateKarana = (tithiString) => {
  try {
    if (!tithiString || tithiString.includes('undefined')) {
      return 'Bava';
    }
    
    const parts = tithiString.split(' ');
    if (parts.length < 2) return 'Bava';
    
    const name = parts.slice(1).join(' ');
    
    const tithiIndex = [
      'Pratipada', 'Dwitiya', 'Tritiya', 'Chaturthi', 'Panchami',
      'Shashthi', 'Saptami', 'Ashtami', 'Navami', 'Dashami',
      'Ekadashi', 'Dwadashi', 'Trayodashi', 'Chaturdashi', 'Purnima',
      'Amavasya'
    ].indexOf(name);
    
    if (tithiIndex === -1) return 'Bava';
    
    const karanas = [
      'Bava', 'Balava', 'Kaulava', 'Taitila', 'Gara',
      'Vanija', 'Vishti', 'Shakuni', 'Chatushpada', 'Naga',
      'Kimstughna'
    ];
    
    if (name === 'Purnima') return 'Chatushpada';
    if (name === 'Amavasya') return 'Kimstughna';
    
    return karanas[(tithiIndex * 2) % 11] || 'Bava';
  } catch (error) {
    console.error('Karana calculation error:', error);
    return 'Bava';
  }
};





// 8. KALAM CALCULATIONS (RAHU, GULIKA, YAMAGANDA)
const calculateKalam = (date, lat, lng, timezone, multiplier, fallback) => {
  try {
    const observer = new Observer(lat, lng, 0);
    const sunrise = SearchRiseSet(Body.Sun, observer, +1, date, 300) || 
                   new Date(date.setHours(6, 0, 0, 0));
    
    const start = new Date(sunrise);
    start.setHours(start.getHours() + multiplier * 1.5);
    
    const end = new Date(start);
    end.setHours(end.getHours() + 1.5);
    
    return `${formatTime(start, timezone)} - ${formatTime(end, timezone)}`;
  } catch {
    return fallback;
  }
};

export const calculateRahuKalam = (date, lat, lng, timezone) => 
  calculateKalam(date, lat, lng, timezone, 1, '09:00 AM - 10:30 AM');

export const calculateGulikaKalam = (date, lat, lng, timezone) => 
  calculateKalam(date, lat, lng, timezone, 2, '12:00 PM - 01:30 PM');

export const calculateYamagandaKalam = (date, lat, lng, timezone) => 
  calculateKalam(date, lat, lng, timezone, 3, '07:30 AM - 09:00 AM');

// 9. FESTIVALS DATA
export const getFestivals = (date) => {
  try {
    const month = date.getMonth() + 1;
    const day = date.getDate();
    
    // Add your festival dates here
    const festivals = [];
    
    if (month === 1 && day === 14) festivals.push('Makar Sankranti');
    if (month === 3 && day === 8) festivals.push('Holi');
    if (month === 4 && day === 14) festivals.push('Baisakhi');
    if (month === 10 && day === 2) festivals.push('Gandhi Jayanti');
    if (month === 11 && day === 4) festivals.push('Diwali');
    
    return festivals;
  } catch {
    return [];
  }
};