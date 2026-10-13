const { MongoClient } = require("mongodb");

// MongoDB Atlas connection string
const uri =
  "mongodb://mdshahjadms0786_db_user:mdshahjad1234@ac-wedpe7r-shard-00-00.byvkwyu.mongodb.net:27017,ac-wedpe7r-shard-00-01.byvkwyu.mongodb.net:27017,ac-wedpe7r-shard-00-02.byvkwyu.mongodb.net:27017/?ssl=true&replicaSet=atlas-46goln-shard-0&authSource=admin&appName=Cluster0";

// Create a new MongoClient instance
const client = new MongoClient(uri);

// Function to connect to MongoDB Atlas
async function connectToMongoDB() {
  try {
    // Connect to the MongoDB Atlas cluster
    await client.connect();

    // Ping the database to confirm connection is successful
    await client.db("admin").command({ ping: 1 });

    console.log("✅ You successfully connected to MongoDB!");
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message);
  } finally {
    // Close the connection after the operation
    await client.close();
  }
}

// Call the function
connectToMongoDB();

