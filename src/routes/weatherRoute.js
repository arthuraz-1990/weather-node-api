const express = require('express');

const router = express.Router();
const controller = require('../controllers/weatherController');

router.post('/', controller.get);

module.exports = router;