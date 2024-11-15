const express = require('express');
const router = express.Router();
const controller = require('./controller')

router.get('/save', controller.save_country);
router.get('/get',controller.getCountries);
module.exports = router;
