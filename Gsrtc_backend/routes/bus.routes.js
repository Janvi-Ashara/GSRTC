const express = require('express')
const busController = require('./../controller/bus.controller')

const router = express.Router();

router.get('/buses',busController.index);
router.post('/bus',busController.store);

module.exports=router;