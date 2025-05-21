const express = require('express')
const router = express.Router()
const jobController = require('../controllers/jobpostion-controllers');


router.get('', jobController.getAllposition);

module.exports = router;