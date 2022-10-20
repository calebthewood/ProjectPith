const { DATABASE_URI } = require("./config");
const { MongoClient, ServerApiVersion } = require('mongodb');



const client = new MongoClient(DATABASE_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1
});

client.connect();

module.exports = client;
