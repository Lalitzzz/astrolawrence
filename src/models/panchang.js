// import mongoose from 'mongoose';

// const panchangSchema = new mongoose.Schema({
//   date: { type: Date, required: true, unique: true },
//   tithi: { type: String, required: true },
//   nakshatra: { type: String, required: true },
//   yoga: { type: String, required: true },
//   karana: { type: String, required: true },
//   sunrise: { type: String, required: true },
//   sunset: { type: String, required: true },
//   moonrise: { type: String, required: true },
//   moonset: { type: String, required: true },
//   rahuKalam: { type: String, required: true },
//   gulikaKalam: { type: String, required: true },
//   yamagandaKalam: { type: String, required: true },
//   festivals: [{ type: String }],
//   location: {
//     place: { type: String, required: true },
//     latitude: { type: Number, required: true },
//     longitude: { type: Number, required: true },
//     timezone: { type: String, required: true }
//   }
// }, { timestamps: true });

// export default mongoose.models.Panchang || mongoose.model('Panchang', panchangSchema);



import mongoose from 'mongoose';

const panchangSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  tithi: { type: String, required: true },
  nakshatra: { type: String, required: true },
  yoga: { type: String, required: true },
  karana: { type: String, required: true },
  sunrise: { type: String, required: true },
  sunset: { type: String, required: true },
  moonrise: { type: String, required: true },
  moonset: { type: String, required: true },
  rahuKalam: { type: String, required: true },
  gulikaKalam: { type: String, required: true },
  yamagandaKalam: { type: String, required: true },
  festivals: { type: [String], required: true },
  location: {
    place: { type: String, required: true },
    latitude: { type: String, required: false }, // Make optional
    longitude: { type: String, required: false }, // Make optional
    timezone: { type: String, required: false } // Make optional or provide default
  }
}, { timestamps: true });

// Add index for faster queries
panchangSchema.index({ date: 1, 'location.place': 1 });

const Panchang = mongoose.models.Panchang || mongoose.model('Panchang', panchangSchema);

export default Panchang;