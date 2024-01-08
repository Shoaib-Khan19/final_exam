const express = require('express');

const {createPoetry,getAllPoetry} = require('../controller/poetryController');


const router = express.Router();

router.post('/createPoetry', createPoetry);

//Receiving all data from User server 

router.get('/getAllPoetry',getAllPoetry)

//Receiving single Blog by Id from User server 
// router.get("/singleUser/:useremail", singleUser);


module.exports = router