const express = require("express");
const fs = require('fs');

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    let data = fs.readFileSync('./db/thing-types.json');

    res.json(JSON.parse(data));
  } 
  
  catch (err) {
    console.log(err);
    return res.status(500).send("Server error");
  }
});

module.exports = router;
