const express = require('express');
const router  = express.Router();

const DashboardInformationController = require('./dashboard-information-controller');
const SystemStatusController = require('./system-status-controller');

router.get('/dashboard-information/:dashboardId', DashboardInformationController.getByDashboardId);

router.get('/system-status/cpu', async (req, res, next) => {
    try {
        SystemStatusController.getCpuData()
        .then((cpu) => {
            console.log(cpu);
            res.json({'dataArray': [cpu]});
        })
        .catch ((error) => {
            console.log(error);
            res.json({'error': error});
        });
    } catch (error) {
        console.log(error);
        next();
    }
});

router.get('/system-status/ram', async (req, res, next) => {
    try {
        SystemStatusController.getRamData()
        .then((ram) => {
            res.json({'dataArray': [ram]});
        })
        .catch((error) => {
            console.log(error);
            res.json({'error': error});
        });
    } catch (error) {
        console.log(error);
        next();
    }
});

router.get('/system-status/process', async (req, res, next) => {
    try {
        SystemStatusController.getProcessData()
        .then((processArray) => {
            res.json({'dataArray': processArray});
        })
        .catch((error) => {
            console.log(error);
            res.json({'error': error});
        });
    } catch (error) {
        console.log(error);
        next();
    }
});

router.get('/system-status/disk', async (req, res, next) => {
    try {
        SystemStatusController.getDiskData()
        .then((diskArray) => {
            res.json({'dataArray': diskArray});
        })
        .catch((error) => {
            console.log(error);
            res.json({'error': error});
        });
    } catch (error) {
        console.log(error);
        next();
    }
});

router.get('/system-status/network', async (req, res, next) => {
    try {
        SystemStatusController.getNetworkData()
        .then((network) => {
            res.json({'dataArray': [network]});
        })
        .catch((error) => {
            console.log(error);
            res.json({'error': error});
        });
    } catch (error) {
        console.log(error);
        next();
    }
});

router.get('/system-status/network-connection', async (req, res, next) => {
    try {
        SystemStatusController.getNetworkConnectionData()
        .then((networkConnectionArray) => {
            res.json({'dataArray': networkConnectionArray});
        })
        .catch((error) => {
            console.log(error);
            res.json({'error': error});
        });
    } catch (error) {
        console.log(error);
        next();
    }
});

module.exports = router;