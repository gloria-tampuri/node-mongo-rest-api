
import { MongoClient, ServerApiVersion } from 'mongodb';

// atlas online connection string
// const uri = "mongodb+srv://tanitampuri:T@niG2208@practice.efkwppd.mongodb.net/?retryWrites=true&w=majority";

const uri = "mongodb://localhost:27017"

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

export async function connectToDatabase() {
  let clientPromise;
  try {
    // Connect the client to the server	(optional starting in v4.7)
    clientPromise = await client.connect();
    return clientPromise
  } catch (err) {
    console.log(err);
  }
  return clientPromise
}


