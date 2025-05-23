import mongoose from 'mongoose';
require('dotenv').config();

const uri = process.env.MONGODB_URI;
if (!uri) {
  throw new Error('Please define the MONGODB_URI environment variable in .env.local');
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(uri, {
    }).then((mongoose) => mongoose);
  }
  cached.conn = await cached.promise;
  console.log('connection to DB Success');
  return cached.conn;
}

export default dbConnect;
