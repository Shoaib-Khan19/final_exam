const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());

app.use(express.json());


/*Poetry Routes*/ 
const poetry = require("./routes/poetryRoutes");
app.use('/api/v1',poetry);


module.exports = app