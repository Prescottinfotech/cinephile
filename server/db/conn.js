const mongoose = require('mongoose');
const DB = process.env.DATABASE
mongoose.connect(DB).then(
    () => {
        console.log("database connect successfully")
    }
).catch(
    (err) => {
        console.log("database is not connect")
    }
)