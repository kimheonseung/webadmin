exports.selectChartById = (id) => {
    return `SELECT ID AS id, TEST AS test, NAME as name, TYPE AS type, DATA_COUNT AS dataCount FROM CHART WHERE ID = ${id}`;
}