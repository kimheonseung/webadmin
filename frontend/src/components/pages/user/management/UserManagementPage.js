import React, { useEffect, useState } from 'react';
import Layout from 'components/layout/Layout';
import axios from 'axios';
import GridLayout, { WidthProvider } from 'react-grid-layout';
import { drawGrid } from 'scripts/common/ToastGrid';
import ToastGrid from 'components/grid/ToastGrid';


function UserManagementPage() {

    const GridLayoutWidthProvided = WidthProvider(GridLayout);

    const [userList, setUserList] = useState([]);

    const w = 4;
    const h = 2;

    const gridLayout = [
        {
            x: 0,
            y: 0,
            w: w,
            h: h,
            i: '0',
            static: true,
        },
        {
            x: 4,
            y: 0,
            w: w,
            h: h,
            i: '1',
            static: true,
        },
        {
            x: 0,
            y: 2,
            w: 8,
            h: 2,
            i: '2',
            static: true,
        },
    ];

    const row = 6;
    const column = 8;
    const rowHeight = 200;

    const urlPrefix = 'http://localhost:8080/api/user';

    const columns = [
        {
            hidden: true,
            header: 'ID',
            name: 'id',
        },
        {
            header: '아이디',
            name: 'userId',
        },
        {
            header: '이름',
            name: 'name',
        },
        {
            header: '이메일',
            name: 'email',
        },
        {
            header: '부서',
            name: 'department',
            formatter: (data) => {
                const value = data.value;
                if(value)
                    return value.name;
                else
                    return '부서 없음';
            }
        },
    ]


    useEffect(() => {
        axios({
            method: 'GET',
            url: urlPrefix+'/list',
            headers: {[process.env.REACT_APP_TOKEN_HEADER]: localStorage.getItem(process.env.REACT_APP_TOKEN_KEY)}
        })
        .then((rs) => {
            const dataArray = rs.data.dataArray;
            setUserList(dataArray);
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);

  return (
      <>
        <Layout>
            <GridLayoutWidthProvided className="layout" layout={gridLayout} maxRows={row} rowHeight={rowHeight} cols={column}>
                <div className="t-chart-wrap" id="t-user-list" key={0}>
                    <ToastGrid columns={columns} dataArray={userList} />
                </div>
                <div className="t-chart-wrap" id="t-chart-wrap-disk" key={1}>
                    
                </div>
                <div className="t-chart-wrap"id="t-chart-wrap-network" key={2}>
                    
                </div>
            </GridLayoutWidthProvided>
        </Layout>
      </>
  );
}

export default UserManagementPage;