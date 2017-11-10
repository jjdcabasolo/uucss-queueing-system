'use strict'

const express = require('express');
const router = express.Router();
let controller = require("./controller");


router.get('/helloWorld', controller.printSample);
router.get('/addMessage', controller.addMessage);
router.get('/enqueue', controller.enqueue);


module.exports = router;