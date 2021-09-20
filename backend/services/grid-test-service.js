const GridTestQuery = require('../queries/grid-test-query');
const { sequelize } = require('../models');

exports.findAll = async () => {
    try {
        const data = await sequelize.query(GridTestQuery.selectAll);
        return data;
    } catch (error) {
        console.log(err);
        return null;
    }
}