import React, { useEffect, useState } from 'react';
import Layout from 'components/layout/Layout';
import axios from 'axios';
import GridLayout, { WidthProvider } from 'react-grid-layout';
import { faPlus, faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ToastGrid from 'components/grid/ToastGrid';
import './UserManagementPage.css';


function UserManagementPage() {

    const GridLayoutWidthProvided = WidthProvider(GridLayout);

    const [userList, setUserList] = useState([]);

    const buttonSize = "xs";

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
                    <div className="t-btn-3-wrap">
                        <button className="btn btn-secondary t-btn-3"><FontAwesomeIcon size={buttonSize} icon={faEdit} /></button>
                        <button className="btn btn-secondary t-btn-3 rm-1 lm-1 "><FontAwesomeIcon size={buttonSize} icon={faPlus} /></button>
                        <button className="btn btn-secondary t-btn-3"><FontAwesomeIcon size={buttonSize} icon={faTrash} /></button>
                    </div>
                    <ToastGrid cssId="user-grid" columns={columns} dataArray={userList} />
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