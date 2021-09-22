/* query */
const DEFAULT_FROM       = null;     /* (search range) from milis */
const DEFAULT_TO         = null;     /* (search range) to milis */
const DEFAULT_SORT_ORDER = 'DESC';   /* sort order */
const DEFAULT_SORT_INDEX = null;     /* sort index */
const DEFAULT_CONDITION  = []  /* search conditions */

const DEFAULT_SEARCH_QUERY_REQUEST = {
    from: DEFAULT_FROM,
    to: DEFAULT_TO,
    sortIndex: DEFAULT_SORT_INDEX,
    sortOrder: DEFAULT_SORT_ORDER,
    condition: DEFAULT_CONDITION,
}

exports.searchQueryRequest = (searchQuery) => {
    searchQuery = {
        ...DEFAULT_SEARCH_QUERY_REQUEST,
        ...searchQuery,
    }
    return searchQuery;
}