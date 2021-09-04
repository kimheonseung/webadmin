export const makePagination = (pagingInfo) => {
    const tagSelector = pagingInfo.tagSelector;
    const prev        = pagingInfo.prev;
    const next        = pagingInfo.next;
    const page        = pagingInfo.page;
    const start       = pagingInfo.start;
    const end         = pagingInfo.end;
    const prevPage    = start - 1;
    const nextPage    = end + 1;
    const totalPage   = pagingInfo.totalPage;
    selectedPage      = page;

    let pageUl = '';
    pageUl += '<ul class="pagination pagination-sm">';

    /* << 표시 */
    pageUl += '<li class="page-item'+(1 < start ? '' : ' disabled')+'">';
    pageUl += '    <a class="page-link" style="cursor: pointer;" data-page="'+1+'">';
    pageUl += '        <i class="fas fa-angle-double-left"></i>';
    pageUl += '    </a>';
    pageUl += '</li>';

    /* < 표시 */
    pageUl += '<li class="page-item'+(prev ? '' : ' disabled')+'">';
    pageUl += '    <a class="page-link" style="cursor: pointer;" data-page="'+prevPage+'">';
    pageUl += '        <i class="fas fa-angle-left"></i>';
    pageUl += '    </a>';
    pageUl += '</li>';

    /* 현재 페이지를 포함한 번호들 */
    for(let i = start ; i <= end ; ++i) {
        pageUl += '<li class="page-item'+(page === i ? ' active' : '')+'">';
        pageUl += '    <a class="page-link" style="cursor: pointer;" data-page="'+i+'">';
        pageUl += '        ' + i;
        pageUl += '    </a>';
        pageUl += '</li>';
    }

    /* > 표시 */
    pageUl += '<li class="page-item'+(next ? '' : ' disabled')+'">';
    pageUl += '    <a class="page-link" style="cursor: pointer;" data-page="'+nextPage+'">';
    pageUl += '        <i class="fas fa-angle-right"></i>';
    pageUl += '    </a>';
    pageUl += '</li>';

    /* >> 표시 */
    pageUl += '<li class="page-item'+(end < totalPage ? '' : ' disabled')+'">';
    pageUl += '    <a class="page-link" style="cursor: pointer;" data-page="'+totalPage+'">';
    pageUl += '        <i class="fas fa-angle-double-right"></i>';
    pageUl += '    </a>';
    pageUl += '</li>';

    pageUl += '</ul>';
    $(tagSelector).html(pageUl);
}