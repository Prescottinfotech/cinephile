const express = require("express")
const app = express()
const mongoose = require('mongoose');
const dotenv = require("dotenv")

dotenv.config({ path: "./config.env" })
const PORT = process.env.PORT;
require("./db/conn")

const User = require("./model/userSchema")

app.use(express.json())
app.use(require("./router/auth"))

app.get("/main", (req, res) => {
    res.send("hello from the main page")
})

app.get("/signup", (req, res) => {
    res.send("hello from the signup page")
})

app.get("/signin", (req, res) => {
    res.send("hello from the signin page")
})

app.listen(PORT, () => {
    console.log(`the server is running port no ${PORT}`)
})