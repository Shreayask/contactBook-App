
require("dotenv").config();
const express = require("express");
const app = express();
const { connection } = require('./db/config');
const { Contacts } = require("./models/contactSchema");

app.use(express.json());

connection.once("open", function () {
    console.log("MongoDB database connection established successfully");
});
const port = 6000;
app.listen(port, () => {
    console.log(`Server is listening at port ${port}`);
});



