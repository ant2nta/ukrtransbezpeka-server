const express = require("express");
const cors = require("cors");
const thingTypes = require("./api/thingTypes");
const addThing = require("./api/addThing");

const app = express();

app.use(cors());
app.use(express.json({ extended: false }));
app.use("/thingTypes", thingTypes);
app.use("/addThing", addThing);

const port = process.env.PORT || 8000;

app.listen(port, () => console.log('Server is running in port ' + port));
