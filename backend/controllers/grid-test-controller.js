const GridTestService = require('../services/grid-test-service');

exports.findAll = async (req, res, next) => {
    try {
        let rows = await GridTestService.findAll();
        return res.json(rows);
    } catch (error) {
        return res.status(500).json(err);
    }
}