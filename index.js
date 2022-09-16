const express = require("express");
const cors = require("cors");
const thingTypes = require("./api/thingTypes");
const addThing = require("./api/addThing");
const addOfficial = require("./api/addOfficial");
const addLogs = require("./api/addLogs");
const authorization = require("./api/authorization");
const getThings = require("./api/getThings");
const getOfficials = require("./api/getOfficials");
const getUnits = require("./api/getUnits");
const getLogs = require("./api/getLogs");

const app = express();
console.clear();

app.use(cors());
app.use(express.json({ extended: false }));
app.use("/thingTypes", thingTypes);
app.use("/addThing", addThing);
app.use("/addOfficial", addOfficial);
app.use("/addLogs", addLogs);
app.use("/login", authorization);
app.use("/getThings", getThings);
app.use("/getOfficials", getOfficials);
app.use("/getUnits", getUnits);
app.use("/getLogs", getLogs);

const port = process.env.PORT || 8000;

app.listen(port, () => console.log('Server is running in port ' + port));
