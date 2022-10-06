const { DATABASE_URI } = require("./config");
const { MongoClient, ServerApiVersion } = require('mongodb');


async function connectDB() {
  const client = new MongoClient(DATABASE_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1
  });
  await client.connect(); // note: close MongoDB connection in controllers. Delete this note after building controller
  return client;
}

const MongoDB = await connectDB();

module.exports = MongoDB;
