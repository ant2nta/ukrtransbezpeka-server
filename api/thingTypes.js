const express = require("express");
const { MongoClient, ServerApiVersion } = require('mongodb');
const fs = require('fs');

const router = express.Router();

const uri = "mongodb+srv://ukrtransbezpeka:d6hj0F39FYkYks3W@cluster0.tbvdrzc.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

router.get("/", async (req, res) => {
  try {
    client.connect(err => {
      const collection = client.db("ukrtransbezpeka").collection("test");
      collection.insertOne(
        { id: 2, login: 'login2', name: 'name1', gender: 'male' },
        (err, result) => {
          console.log(result);
          if (err) {
            console.log('Unable insert user: ', err)
            throw err
          }
          client.close();
        }
      );
    });

    res.json({
      status: 200,
      message: "Successful",
    });
    // let data = fs.readFileSync('./db/thing-types.json');

    // res.json(JSON.parse(data));
  } 
  
  catch (err) {
    console.log(err);
    return res.status(500).send("Server error");
  }
});

module.exports = router;
