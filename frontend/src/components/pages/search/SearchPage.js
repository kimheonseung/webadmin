import Layout from 'components/layout/Layout';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Grid from 'tui-grid';
import { getResultJson } from 'scripts/common/Util';

function SearchPage() {

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

    useEffect(() => {
        axios
            .get('http://localhost:8080/search/test')
            .then((result) => {
                const json = getResultJson(result);
                console.log(json);
            })
            .catch((e) => {
                console.log('catch !');
                console.log(e);
            })
            .finally(() => {
                console.log('finally !');
            })
    });

    return (
        <>
            <Layout>
                <div id="container">
                    <form id="searchForm">
                        <div id="gridSearch">
                            <label htmlFor="searchInput">검색어 </label><input type="text" id="searchInput" placeholder="keyword" />
                            <button id="searchBtn">icon</button>
                        </div>
                        <div id="grid"></div>
                        <div id="gridPaging"></div>
                    </form>
                </div>
            </Layout>
        </>
    )
}

export default SearchPage

