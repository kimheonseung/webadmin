const DashboardInformationQuery = require('./dashboard-information-query');
const { sequelize } = require('../../models');

exports.findByDashboardId = async (dashboardId) => {
    try {
        const data = await sequelize.query(DashboardInformationQuery.selectByDashboardId(dashboardId));
        return data;
    } catch (error) {
        console.log(error);
        return [[], []];
    }
}