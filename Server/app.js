
require("dotenv").config();
const express = require("express");
const app = express();
const { connection } = require('./db/config');
const { Contacts } = require("./models/contactSchema");
require("./db/config");
const cors = require("cors");

app.use(express.json());
app.use(cors());

const port = 6000;


app.listen(port, () => {
    console.log(`Server is listening at port ${port}`);
});



