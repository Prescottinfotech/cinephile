const express = require("express");
const bycrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const router = express.Router();

require("../db/conn")
const User = require("../model/userSchema")


router.get("/", (req, res) => {

    res.send("hello from the server router js ")
})

router.post("/signup", async (req, res) => {
    const { fname, lname, email, password, cpassword, phone } = req.body
    if (!fname || !lname || !email || !password || !cpassword || !phone) {
        return res.status(422).json({ err: "please fill the field proper" })
    }
    try {

        const userExist = await User.findOne({ email: email })

        if (userExist) {
            res.status(422).json({ err: "emaill is already exits" })
        }
        else if (password != cpassword) {
            res.status(422).json({ err: "password is not matching" })
        }
        else {
            const user = new User({ fname, lname, email, password, cpassword, phone })

            await user.save();
            res.status(201).json({ message: "user register successfully" })
        }
    }
    catch (err) {
        console.log(err)
    }

})
router.post('/signin', async (req, res) => {
    // console.log(req.body);
    // res.json({message:"awesome"});

    try {
        let token;
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: "please fill the data" })
        }
        const userLogin = await User.findOne({ email: email })

        if (userLogin) {
            const isMatch = await bycrypt.compare(password, userLogin.password)
            
            token = await userLogin.generateAuthToken();
            console.log(token);

            if (!isMatch) {
                return res.status(400).json({ error: "invalid credintials pass" })
            }
            else {
                res.json({ message: "user signin sucessfully" })
            }
        }
        else {
            res.status(400).json({ error: "invalid credintials" })
        }

    }
    catch (err) {
        console.log(err);
    }

    
    // res.cookie('jwtoken',token,{
    //     expires : new Date(Date.now() +25892000000), 
    //     httpOnly : true
    // });

});
module.exports = router