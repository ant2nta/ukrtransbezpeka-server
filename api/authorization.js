const express = require("express");
const router = express.Router();

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://ukrtransbezpeka:d6hj0F39FYkYks3W@cluster0.tbvdrzc.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
const collection = client.db("ukrtransbezpeka").collection("users");

router.post("/", (req, res) => {
  try {
    let data = JSON.parse(JSON.stringify(req.body));

    client.connect(err => {
      collection.find({login: data.login}).toArray((err, result) => {
        if (!result.length) {
          res.status(401).send("login does not exist");
          client.close();
          return;
        }

        if (result[0].password !== data.password) {
          res.status(401).send("wrong password");
          client.close();
          return;
        }
        
        res.status(200).send("success");
        client.close();
        return;
      });
    });
  } 
  
  catch (err) {
    console.log(err);
    return res.status(500).send("Server error");
  }
});

module.exports = router;
