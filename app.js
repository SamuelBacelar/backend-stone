const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
var cors = require('cors')

const app = express();
app.use(cors())
app.use(bodyParser.urlencoded({extended: true}));

require('./api/employeeAPI')(app)

app.listen(3002, function () {
    console.log("Server running on port 3002");
})