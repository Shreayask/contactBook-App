
require("dotenv").config();
const express = require("express");
const app = express();
const { connection } = require('./db/config');
const { Contactt } = require("./models/contactSchema");
require("./db/config");
const cors = require("cors");
const router = require("./Routes/contactRouter");

connection.once("open", function () {
    console.log("MongoDB database connection established successfully");
});

app.use(express.json());
app.use(cors());
app.use(router);
const port = 6000;


app.listen(port, () => {
    console.log(`Server is listening at port ${port}`);
});



