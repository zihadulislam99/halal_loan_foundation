import { MongoClient, MongoClientOptions } from 'mongodb';

const uri: string = process.env.MONGODB_URI || '';
if (!uri) {
  throw new Error('Add Mongo URI to .env');
}

// You can still specify other options if needed
const options: MongoClientOptions = {}; 

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

// Extend the global type to include _mongoClientPromise
declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
