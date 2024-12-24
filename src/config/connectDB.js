import mongoose from 'mongoose';
require('dotenv').config();

const uri = 'mongodb+srv://dash75549:AZu7gLlMr1bEVFf6@cluster0.hpyp8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
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
