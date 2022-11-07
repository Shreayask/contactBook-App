var MongoClient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017/Contacts";
const mongoose = require("mongoose");

mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true }).then(
    () => console.log("connection started")).catch((error) =>
        console.log(error.message));
const connection = mongoose.connection;


module.exports = { connection }