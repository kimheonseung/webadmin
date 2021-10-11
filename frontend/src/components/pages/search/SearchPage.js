import Layout from 'components/layout/Layout';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'components/pages/search/SearchPage.css';
import ToastGrid from 'components/grid/ToastGrid';

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

    const [searchList, setSearchList] = useState([]);
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


    const handlePagingClick = (number) => {
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
        axios({
            method: 'GET',
            url: gridDataUrl+queryString,
            headers: {[process.env.REACT_APP_TOKEN_HEADER]: localStorage.getItem(process.env.REACT_APP_TOKEN_KEY)}
        })
        .then((rs) => {
            const paging      = rs.data.paging;
            const dataArray   = rs.data.dataArray;
            const searchQuery = rs.data.searchQuery;
            console.log(paging);
            setPagingInfo(getPagingInfo(paging));
            setSearchList(dataArray);
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
                        <ToastGrid columns={columns} dataArray={searchList} pagingInfo={pagingInfo} handlePagingClick={handlePagingClick} />
                    </form>
                </div>
            </Layout>
        </>
    )
}

export default SearchPage

