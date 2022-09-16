const express = require("express");
const router = express.Router();

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://ukrtransbezpeka:d6hj0F39FYkYks3W@cluster0.tbvdrzc.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
const collection = client.db("ukrtransbezpeka").collection("officials");

router.post("/", (req, res) => {
  try {
    let newData = JSON.parse(JSON.stringify(req.body));
    console.log(newData);

    client.connect(err => {
      collection.insertOne(newData, function(err, result){
        if(err){ 
            return console.log(err);
        }
        console.log('added new user');
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
