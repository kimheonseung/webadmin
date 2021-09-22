const express = require('express');
const router  = express.Router();

const DashboardInformationController = require('../../controllers/monitoring/dashboard-information-controller');
const ChartController = require('../../controllers/monitoring/chart-controller');

router.get('/dashboard-information/:dashboardId', DashboardInformationController.getByDashboardId);
router.get('/chart/:chartId', ChartController.getByChartId);

module.exports = router;