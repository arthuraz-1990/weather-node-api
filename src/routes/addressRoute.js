const express = require('express');

const router = express.Router();
const controller = require('../controllers/addressController');

router.get('/', controller.get);

module.exports = router;