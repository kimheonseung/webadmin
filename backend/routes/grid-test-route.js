const express = require('express');
const router = express.Router();
const GridTestController = require('../controllers/grid-test-controller');

router.get('/', GridTestController.findAll);

module.exports = router;