const express = require("express");
const fs = require('fs');

const router = express.Router();

router.post("/", (req, res) => {
  try {
    var data = fs.readFileSync("./db/things.json");
    var myObject = JSON.parse(data);
      
    let newData = JSON.parse(JSON.stringify(req.body));
      
    myObject.push({
      id: myObject[myObject.length - 1].id + 1,
      ...newData
    });
      
    var newData2 = JSON.stringify(myObject);
    fs.writeFile("./db/things.json", newData2, (err) => {
      if (err) throw err;
      console.log("New data added");
    });
  } 
  
  catch (err) {
    console.log(err);
    return res.status(500).send("Server error");
  }
});

module.exports = router;
