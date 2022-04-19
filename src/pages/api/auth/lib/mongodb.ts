// This approach is taken from https://github.com/vercel/next.js/tree/canary/examples/with-mongodb
import { MongoClient, MongoClientOptions } from 'mongodb'

const url = process.env.DATABASE_URL
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true
} as MongoClientOptions

let client
let clientPromise

if (!process.env.DATABASE_URL) {
  throw new Error('Please add your Mongo URL to .env.local')
}

if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    client = new MongoClient(url, options)
    global._mongoClientPromise = client.connect()
  }
  clientPromise = global._mongoClientPromise
} else {
  client = new MongoClient(url, options)
  clientPromise = client.connect()
}

export default clientPromise