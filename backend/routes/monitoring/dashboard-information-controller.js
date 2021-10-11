const { Dashboard, Chart, DashboardLayout } = require('../../models');
const dataConverter = require('../../utils/data-convert-util');

exports.getByDashboardId = async (req, res, next) => {

    try {
        const { dashboardId } = req.params;
        await DashboardLayout.findAll({
            where: { dashboardId: dashboardId },
            include: [
                { model: Dashboard, required: true }, 
                { model: Chart, required: true },
            ]
        })
        .then(data => {
            res.json({
                'dataArray': dataConverter.convertDataToArray(data)
            })
        })
        .catch(err => {
            res.json({'error': err});
        });
    } catch (error) {
        console.log(error);
        res.json({'error': error});
    }
}