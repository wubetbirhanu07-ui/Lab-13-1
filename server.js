import express from "express";
import { MongoClient } from "mongodb";
import 'dotenv/config'

const app = express();
const PORT = 3001;

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);

app.get("/", async (req, res) => {
  try {
    await client.connect();

    res.json({
      message: "Successfully connected to the database!"
    });

  } catch (error) {
    res.status(500).json({
      message: "Failed to connect to the database."
    });
  }
});

app.listen(PORT, () => {
  console.log('Listening on port: ' + PORT)
});