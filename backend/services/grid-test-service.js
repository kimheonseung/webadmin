const GridTestQuery = require('../queries/grid-test-query');
const { sequelize } = require('../models');

exports.findAll = async () => {
    try {
        const data = await sequelize.query(GridTestQuery.selectAll);
        return data;
    } catch (error) {
        console.log(err);
        return [[], []];
    }
}

exports.countAll = async (searchQuery) => {
    try {
        const data = await sequelize.query(GridTestQuery.selectCountAll(searchQuery));
        return data;
    } catch (error) {
        console.log(error);
        return [[], []];
    }
}

exports.findByPageSearch = async (paging, searchQuery) => {
    try {
        const data = await sequelize.query(GridTestQuery.selectByPageSearch(paging, searchQuery));
        return data;
    } catch (error) {
        console.log(error);
        return [[], []];
    }
}