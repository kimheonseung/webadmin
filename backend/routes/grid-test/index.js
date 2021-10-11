const express = require('express');
const router  = express.Router();

const getRequestMiddleware   = require('../../middlewares/search-middleware').getRequestMiddleware;
const postRequestMiddleware  = require('../../middlewares/search-middleware').postRequestMiddleware;
const GridTestController     = require('./grid-test-controller');

router.get('/**', getRequestMiddleware);
router.get('/', GridTestController.getByPageSearch);

router.post('/**', postRequestMiddleware);
router.post('/', GridTestController.getByPageSearch);

module.exports = router;