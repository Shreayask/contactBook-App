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
        res.status(404).json("Please fill all data");
        alert("Please fill all data");
    }

    try {
        const existingUser = await Contactt.findOne({ number: number });
        console.log(existingUser);

        if (existingUser) {
            res.status(404).json("This contact is already available");
        } else {
            const addContact = new Contactt(req.body);
            console.log("acti", addContact);
            const insertContact = await addContact.save();
            res.send(insertContact);
            console.log(insertContact);

        }


    }
    catch (error) {
        res.status(404).json(error);
    }
})

//get userdata
router.get("/", async (req, res) => {
    try {
        const contactData = await Contactt.find({});
        const strigified = JSON.stringify(contactData);

        res.json({ data: contactData });
        console.log('datas', contactData);



    } catch (error) {
        res.status(404).json(error);
    }
})
module.exports = router;

// get contact deatail from id

router.get("/view/:id", async (req, res) => {
    try {
        const id = req.params.id;
        console.log('id', id);
        const ContactIdInfo = await Contactt.findOne({ _id: id })
        console.log(ContactIdInfo);
        res.status(200).json({
            data: ContactIdInfo
        })
    } catch (error) {
        res.status(404).json({ message: "Error" });
    }

})

router.patch("/edit/:id", async (req, res) => {
    try {
        console.log('id', req.params.id)
        const id = req.params.id;
        console.log("resbody", req.body)
        const updatedData = await Contactt.findByIdAndUpdate(id, req.body, {
            new: true
        });
        console.log('update', updatedData);
        res.status(200).json(updatedData);
    } catch (error) {
        res.status(404).json(error);
    }
})

//delet contact

router.delete("/delete/:id", async (req, res) => {
    try {
        console.log('id', req.params.id)
        const id = req.params.id;
        console.log("resbody", req.body)
        const deletedData = await Contactt.findByIdAndDelete({ _id: id });

        console.log('update', deletedData);
        res.status(200).json(deletedData);
    } catch (error) {
        res.status(404).json(error);
    }


})


