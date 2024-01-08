const mongoose = require("mongoose");


const poetrySchema = new mongoose.Schema({
    poetryTitle: {
        type: String,
        required: [true, "Please Enter Poetry's Title"]
    },
    poetryData: {
        type: String,
        required: [true, "Please Enter Poetry's Data"],
    }
});

module.exports = mongoose.model('Poetry',poetrySchema)