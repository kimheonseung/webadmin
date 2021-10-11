const GridTestService = require('./grid-test-service');
const pagingUtil      = require('../../utils/paging-util');

exports.findAll = async (req, res, next) => {
    try {
        let rows = await GridTestService.findAll();
        return res.json(rows[0]);
    } catch (error) {
        return res.status(500).json(err);
    }
}

exports.getByPageSearch = async (req, res, next) => {
    try {
        const paging = req.body.paging;
        const searchQuery = req.body.searchQuery;

        let searchPromise = await GridTestService.findByPageSearch(paging, searchQuery);
        let countPromise  = await GridTestService.countAll(searchQuery);

        const data = searchPromise[0];
        const totalCount = countPromise[0][0].total;

        req.body.paging.total = totalCount;
        res.json({
            'dataArray': data,
            'paging': pagingUtil.pagingResponse(paging),
            'searchQuery': searchQuery,
        });
    } catch (error) {
        console.error(error);
        console.error('Error while setup response json');
        res.json({'Error': error});
    }
}