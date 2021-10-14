const express = require('express');
const router  = express.Router();

const UserController = require('./user-controller');
const DepartmentController = require('./department-controller');

router.get('/user-list', UserController.getAll);

router.get('/department-list', DepartmentController.getAll);

module.exports = router;