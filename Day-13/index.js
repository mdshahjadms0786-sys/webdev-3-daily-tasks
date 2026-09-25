const { MongoClient } = require("mongodb");

const client = new MongoClient(
  "mongodb://mdshahjadms0786_db_user:mdshahjad1234@ac-wedpe7r-shard-00-00.byvkwyu.mongodb.net:27017,ac-wedpe7r-shard-00-01.byvkwyu.mongodb.net:27017,ac-wedpe7r-shard-00-02.byvkwyu.mongodb.net:27017/?ssl=true&replicaSet=atlas-46goln-shard-0&authSource=admin&appName=Cluster0"
);

async function connectToMongoDB() {
  try {
    await client.connect();
    console.log("You successfully connected to MongoDB!");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
  }
}

connectToMongoDB();
