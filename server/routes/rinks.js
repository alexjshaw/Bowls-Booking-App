const express = require('express');
const router = express.Router();
const rinkController = require('../controllers/rink');

router.post('/', rinkController.createRink)

module.exports = router;
