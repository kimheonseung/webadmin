const express = require('express');
const router  = express.Router();

const UserController = require('./user-controller');

router.get('/list', UserController.getAll);

module.exports = router;