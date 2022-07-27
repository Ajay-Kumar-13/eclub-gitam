const mongoose = require("mongoose");

const querySchema = new mongoose.Schema({
    RegistrationNumber: String,
    Name: String,
    Query: String,
})

const Query = mongoose.model("Queries", querySchema);

module.exports = Query;