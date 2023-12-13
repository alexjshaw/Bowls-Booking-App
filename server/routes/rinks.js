const express = require('express');
const router = express.Router();
const rinkController = require('../controllers/rink');

router.post('/', rinkController.createRink)
router.get('/byClub/:clubId', rinkController.getRinksByClub);

module.exports = router;
