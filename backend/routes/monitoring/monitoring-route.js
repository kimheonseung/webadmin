const express = require('express');
const router  = express.Router();

const DashboardInformationController = require('../../controllers/monitoring/dashboard-information-controller');

router.get('/dashboard-information/:dashboardId', DashboardInformationController.getByDashboardId);

module.exports = router;