const pagingUtil      = require('../utils/paging-util');
const searchQueryUtil = require('../utils/search-query-util');

exports.getRequestMiddleware = (req, res, next) => {
    console.log(req.query);
    let paging = {};
    if(req.query.page)
        paging.page = parseInt(req.query.page);
    
    req.body.paging = pagingUtil.pagingRequest(paging);
    req.body.searchQuery = searchQueryUtil.searchQueryRequest({});
    next();
}

exports.postRequestMiddleware = (req, res, next) => {
    try {
        /* call by reference ? */
        req.body.paging      = pagingUtil.pagingRequest(req.body.paging);
        req.body.searchQuery = searchQueryUtil.searchQueryRequest(req.body.searchQuery);
    } catch (error) {
        console.error(error);
        console.log('Error while parse request body');
    }
    next();
}