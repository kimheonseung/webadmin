const { Chart } = require('../../models');
const dataConverter = require('../../utils/data-convert-util');

exports.getByChartId = async (req, res, next) => {
    try {
        const { chartId } = req.params;
        await Chart.findByPk(chartId)
        .then(data => {
            res.json({
                'dataArray': dataConverter.convertDataToArray(data)
            });
        })
        .catch(err => {
            res.json({'error': err});
        });
    } catch (error) {
        console.log(error);
        res.json({'error': error});
    }
}