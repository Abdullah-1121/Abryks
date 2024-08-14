import mongoose from 'mongoose';

 export const listIndexes = async () => {
  try {
    await mongoose.connect('your_mongodb_uri'); // Replace with your MongoDB URI
    const indexes = await mongoose.connection.db.collection('users').indexes(); // Replace with your collection's name
    console.log('Indexes:', indexes);
  } catch (error) {
    console.error('Error listing indexes:', error);
  } finally {
    await mongoose.disconnect();
  }
};


