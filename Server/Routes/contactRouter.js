const express = require("express");
const router = express.Router();
const { Contactt } = require("../models/contactSchema");
const app = express();

/*router.get("/", (req,res)=>{
    console.log("connectss");
});
*/

router.post('/register', async (req, res) => {
    // console.log(req.body);
    const { name, number, email, description } = req.body

    if (!name || !email || !number) {
        res.status(404).send("Please fill all data");
    }

    try {
        const existingUser = await Contactt.findOne({ number: number });
        console.log(existingUser);

        if (existingUser) {
            res.status(404).send("This contact is already available");
        } else {
            const addContact = new Contactt(req.body);

            console.log("acti", addContact);

            const insertContact = await addContact.save();
            res.send(insertContact);
            console.log(insertContact);

        }


    }
    catch (error) {
        res.status(404).send(error);
    }
})
module.exports = router;


