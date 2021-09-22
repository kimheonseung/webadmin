const DashboardInformationService = require('../../services/monitoring/dashboard-information-service');

exports.getByDashboardId = async (req, res, next) => {
    try {
        const { dashboardId } = req.params;
        let rows = await DashboardInformationService.findByDashboardId(dashboardId);
        return res.json({
            'dataArray': rows[0],
        });
    } catch (error) {
        return res.status(500).json(err);
    }
}