const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Poetry = require("../model/poetryModel");

exports.createPoetry = catchAsyncErrors(async (req, res) => {
    
    console.log(req.body);
    // const {poetryTitle, poetryData} = req.body;
    const createdPoetry = await Poetry.create(req.body);
    res.status(201).json({ success: true, createdPoetry });
});

exports.getAllPoetry = catchAsyncErrors(async (req, res) => {
    const getPoetry = await Poetry.find();
    res.status(200).json({ success: true, getPoetry });
});
