/* paging */
const DEFAULT_PAGE       = 1;        /* current page */
const DEFAULT_SIZE       = 10;       /* page list size (1~10 ...) */
const DEFAULT_ROWS       = 20;       /* data per page */
const DEFAULT_OFFSET     = 0;        /* query offset */
const DEFAULT_TOTAL      = 0;        /* search result data count */
const DEFAULT_TOTAL_PAGE = 0;        /* total page */
const DEFAULT_START      = 1;        /* start page in page list */
const DEFAULT_END        = 1;        /* end page in page list */
const DEFAULT_PREV       = false;    /* existence of prev page list */
const DEFAULT_NEXT       = false;    /* existence of next page list */
const DEFAULT_PAGE_LIST  = [1];      /* page list */

const DEFAULT_PAGING_REQUEST = {
    page: DEFAULT_PAGE,
    size: DEFAULT_SIZE,
    rows: DEFAULT_ROWS,
    offset: DEFAULT_OFFSET,
    total: DEFAULT_TOTAL,
    totalPage: DEFAULT_TOTAL_PAGE,
    start: DEFAULT_START,
    end: DEFAULT_END,
    prev: DEFAULT_PREV,
    next: DEFAULT_NEXT,
    pageList: DEFAULT_PAGE_LIST,
}

const calculateOffset = (data) => {
    try {
        data.offset = (data.page - 1) * data.rows;    
    } catch (error) {}
}

exports.pagingRequest = (paging) => {
    paging = {
        ...DEFAULT_PAGING_REQUEST,
        ...paging,
    }
    calculateOffset(paging);
    return paging;
}

exports.pagingResponse = (paging) => {
    const page  = paging.page;
    const size  = paging.size;
    const rows  = paging.rows;
    const total = paging.total;

    const tempEnd = (Math.ceil(page / size)) * size;
    
    const totalPage = Math.ceil(total / rows);
    const start = tempEnd - (size - 1);
    const end = Math.min(tempEnd, totalPage);
    const prev = start > 1;
    const next = totalPage > tempEnd;

    const listSize = end % size == 0 ? size : end % size;

    const pageList = Array.from(new Array(listSize), (x, i) => (i + start));

    return {
        ...paging,
        totalPage: totalPage,
        start: start,
        end: end,
        prev: prev,
        next: next,
        pageList: pageList
    }
}