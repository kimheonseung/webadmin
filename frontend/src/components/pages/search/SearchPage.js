import Layout from 'components/layout/Layout';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getResultJson } from 'scripts/common/Util';
import Pagination from 'components/paging/Pagination';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'components/pages/search/SearchPage.css';
import { drawGrid } from 'scripts/common/ToastGrid';

function SearchPage() {

    let toastGrid;

    const [columns, setColumns] = useState([
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
    ]);

    const [gridDataUrl, setGridDataUrl] = useState('http://localhost:8080/search/test');
    
    const [gridData, setGridData] = useState({
        end: 1,
        next: 1,
        page: 1,
        pageList: [1],
        prev: 1,
        rows: 20,
        size: 10,
        start: 1,
        total: 1,
        totalPageL: 1,
        voList: [],
    });

    const getGridData = (page) => {
        const queryString = '?page='+page;
        axios
            .get(gridDataUrl+queryString)
            .then((result) => {
                console.log(toastGrid);
                const json = getResultJson(result);
                setGridData(json);
                if(toastGrid) {
                    console.log('reset !');
                    toastGrid.resetData(json.voList);
                }
                else {
                    console.log('new !');
                    toastGrid = drawGrid('grid', columns, json.voList);
                }
                console.log(json);
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
        getGridData(1);
    }, []);

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
                                prev={gridData?.prev}
                                next={gridData?.next}
                                page={gridData?.page}
                                start={gridData?.start}
                                end={gridData?.end}
                                prevPage={gridData?.prevPage}
                                nextPage={gridData?.nextPage}
                                totalPage={gridData?.totalPage}
                                pageList={gridData?.pageList}
                                handleClick={getGridData} />
                        </div>
                    </form>
                </div>
            </Layout>
        </>
    )
}

export default SearchPage

