const mongoose = require('mongoose');
require('dotenv').config({ path: '.env.local' });

async function testConnection() {
  try {
    console.log('Connecting to MongoDB...');
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: 'astrologer-web'
    });
    console.log('✅ MongoDB Connection Successful');
    
    const collections = await mongoose.connection.db.listCollections().toArray();
    console.log('Collections:', collections.map(c => c.name));
    
    process.exit(0);
  } catch (error) {
    console.error('Connection failed:', error);
    process.exit(1);
  }
}

testConnection();