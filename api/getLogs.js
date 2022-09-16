const express = require("express");
const router = express.Router();

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://ukrtransbezpeka:d6hj0F39FYkYks3W@cluster0.tbvdrzc.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
const collection = client.db("ukrtransbezpeka").collection("logs");

router.get("/", (req, res) => {
  try {
    client.connect(err => {
      collection.find().toArray((err, result) => {
        res.json(result);
        client.close();
      });
    });
  } 
  
  catch (err) {
    console.log(err);
    return res.status(500).send("Server error");
  }
});

module.exports = router;
