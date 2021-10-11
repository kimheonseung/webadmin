const { WebUser, Department, Dashboard, NetworkMap } = require('../../models');
const dataConverter = require('../../utils/data-convert-util');

exports.getAll = async (req, res, next) => {
    try {
        await WebUser.findAll({
            include: [
                { model: Department },
                { model: Dashboard },
                { model: NetworkMap },
            ],
            attributes: {exclude: ['password', 'departmentCode', 'networkMapId', 'dashboardId']}
        })
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