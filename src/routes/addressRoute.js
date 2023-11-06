const express = require('express');

const router = express.Router();
const controller = require('../controllers/addressController');

router.post('/', controller.get);

module.exports = router;