const express = require('express');
const router = express.Router();
const clubController = require('../controllers/club');

router.post('/', clubController.createClub);
router.patch('/:clubId', clubController.updateClub)
router.get('/', clubController.getClubs)

module.exports = router;
