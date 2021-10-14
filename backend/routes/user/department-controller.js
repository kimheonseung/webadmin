const { Department } = require('../../models');
const dataConverter = require('../../utils/data-convert-util');

exports.getAll = async (req, res, next) => {
    try {
        await Department.findAll({
            include: [
                { model: Department },
            ],
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