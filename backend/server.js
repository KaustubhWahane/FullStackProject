const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

const uri = "mongodb+srv://kaustubh:123kau456stubh@userdata.ki4cwfn.mongodb.net/?retryWrites=true&w=majority&appName=UserData";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    await client.close();
  }
}
run().catch(console.dir);

// Define your routes and other server logic here...

app.listen(PORT, () => {
  console.log(`Server be runnin' on port ${PORT}`);
});
