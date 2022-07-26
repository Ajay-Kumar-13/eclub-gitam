const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email:String,
    registration:String,
    year:String,
});

const newUser = mongoose.model("User", userSchema);

module.exports = newUser;