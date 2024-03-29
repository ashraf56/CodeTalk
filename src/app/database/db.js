
import { MongoClient } from 'mongodb';

const uri =process.env.DB_URL; 

let cachedClient = null;
let cachedDb = null;
const OPTIONS = {

  useNewUrlParser: true,

  useUnifiedTopology: true,

};
export async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  const client = await MongoClient.connect(uri, OPTIONS);
  const db = client.db('Codetalk'); 

  cachedClient = client;
  cachedDb = db;

  return { client, db };
}