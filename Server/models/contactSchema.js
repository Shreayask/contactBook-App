const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let contact = new Schema({
    name: {
        type: String
    },
    number: {
        type: Number
    },
    email: {
        type: String
    },
    description: {
        type: String
    }
}, { collection: "Contacts" }

)

const Contacts = mongoose.model('Contacts', contact);

module.exports = { Contacts }