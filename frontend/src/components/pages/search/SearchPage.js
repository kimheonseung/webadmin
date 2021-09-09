import Layout from 'components/layout/Layout';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getResultJson } from 'scripts/common/Util';
import Pagination from 'components/paging/Pagination';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'components/pages/search/SearchPage.css';
import { drawGrid } from 'scripts/common/ToastGrid';

function SearchPage() {

    const gridDataUrl = 'http://localhost:8080/api/gridtest';
    const columns = [
        {
            header: "컬럼1",
            name: "col1"
        },
        {
            header: "컬럼2",
            name: "col2"
        },
        {
            header: "컬럼3",
            name: "col3"
        },
    ];

    const [toastGrid, setToastGrid] = useState(null);
    const [page, setPage] = useState(1);
    const [pagingInfo, setPagingInfo] = useState({
        prev: false,
        next: false,
        page: 1,
        start: 1,
        end: 1,
        totalPage: 1,
        pageList: [1],
    });
    // const [searchCondition, setSearchCondition] = useState({});


    const handlePageClick = (number) => {
        setPage(number);
    }

    const getPagingInfo = (gridData) => {
        return {
            prev: gridData?.prev,
            next: gridData?.next,
            page: gridData?.page,
            start: gridData?.start,
            end: gridData?.end,
            totalPage: gridData?.totalPage,
            pageList: gridData?.pageList,
        }
    }

    const getGridData = (page) => {
        const queryString = '?page='+page;
        axios
            .get(gridDataUrl+queryString)
            .then((result) => {
                const json = getResultJson(result);
                const voList = json?.voList;
                console.log(json);
                setPagingInfo(getPagingInfo(json));

                if(toastGrid) {
                    console.log('reset !');
                    toastGrid.resetData(voList);
                }
                else {
                    console.log('new !');
                    setToastGrid(drawGrid('grid', columns, voList));
                }
            })
            .catch((e) => {
                console.log('catch !');
                console.log(e);
            })
            .finally(() => {
                console.log('finally !');
            });
    }

    useEffect(() => {
        getGridData(page);
    }, [page]);

    return (
        <>
            <Layout>
                <div id="container">
                    <form id="searchForm">
                        <div id="gridSearch">
                            <label htmlFor="searchInput">검색어 </label><input type="text" id="searchInput" placeholder="keyword" />
                            <button id="searchBtn">icon</button>
                        </div>
                        <div id="gridWrap">
                            <div id="grid" className="t-grid"></div>
                        </div>
                        <div id="gridPaging">
                            <Pagination 
                                prev={pagingInfo?.prev}
                                next={pagingInfo?.next}
                                page={pagingInfo?.page}
                                start={pagingInfo?.start}
                                end={pagingInfo?.end}
                                totalPage={pagingInfo?.totalPage}
                                pageList={pagingInfo?.pageList}
                                handleClick={handlePageClick} />
                        </div>
                    </form>
                </div>
            </Layout>
        </>
    )
}

export default SearchPage

