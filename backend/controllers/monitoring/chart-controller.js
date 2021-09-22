const ChartService = require('../../services/monitoring/chart-service');

exports.getByChartId = async (req, res, next) => {
    try {
        const { chartId } = req.params;
        let rows = await ChartService.findByChartId(chartId);
        return res.json({
            'dataArray': rows[0],
        });
    } catch (error) {
        return res.status(500).json(err);
    }
}