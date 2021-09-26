const express = require('express');
const router  = express.Router();
const SystemStatusController = require('../../controllers/system-status/system-status-controller');

// router.get('/cpu', async (req, res, next) => {
//     try {
//         cpuData();
//         res.json({result: true});
//     } catch (error) {
//         console.log(error);
//         next();
//     }
// });

router.get('/ram', async (req, res, next) => {
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

router.get('/process', async (req, res, next) => {
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

router.get('/disk', async (req, res, next) => {
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

router.get('/network', async (req, res, next) => {
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

router.get('/network-connection', async (req, res, next) => {
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