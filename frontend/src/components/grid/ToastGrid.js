import Pagination from 'components/paging/Pagination';
import React, { useEffect, useState } from 'react';
import { drawGrid } from 'scripts/common/ToastGrid';

function ToastGrid({cssId, columns, dataArray, pagingInfo, handlePagingClick}) {

    const [grid, setGrid] = useState(null);
    // const [dataArray, setDataArray] = useState([]);
    const defaultPagingInfo = {
        prev: false,
        next: false,
        page: 1,
        start: 1,
        end: 1,
        totalPage: 1,
        pageList: [1],
    };

    useEffect(() => {
        // setDataArray(data);
        // setGrid(drawGrid('grid', columns, dataArray));
        if(grid)
            grid.resetData(dataArray);
        else
            setGrid(drawGrid(cssId+'-grid', columns, dataArray));
    }, [dataArray]);

    return (
        <>
            <div className="gridWrap" id={cssId}>
                <div id={cssId+'-grid'} className="t-grid"></div>
            </div>
            <div className="gridPaging" >
                {/* <div id="left" /> */}
                {
                    pagingInfo ?
                    <Pagination 
                        prev={pagingInfo?.prev}
                        next={pagingInfo?.next}
                        page={pagingInfo?.page}
                        start={pagingInfo?.start}
                        end={pagingInfo?.end}
                        totalPage={pagingInfo?.totalPage}
                        pageList={pagingInfo?.pageList}
                        handleClick={handlePagingClick} />
                    :
                    <Pagination 
                        prev={defaultPagingInfo.prev}
                        next={defaultPagingInfo.next}
                        page={defaultPagingInfo.page}
                        start={defaultPagingInfo.start}
                        end={defaultPagingInfo.end}
                        totalPage={defaultPagingInfo.totalPage}
                        pageList={defaultPagingInfo.pageList}
                        handleClick={() => console.log()} />
                }
                {/* <div id="right" /> */}
            </div>
        </>
    );
}

export default ToastGrid;