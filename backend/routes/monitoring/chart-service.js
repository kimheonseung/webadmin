const ChartQuery = require('./chart-query');
const { sequelize } = require('../../models');

exports.findByChartId = async (chartId) => {
    try {
        const data = await sequelize.query(ChartQuery.selectChartById(chartId));
        return data;
    } catch (error) {
        console.log(error);
        return [[], []];
    }
}