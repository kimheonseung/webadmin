import React, { useEffect, useState } from 'react';
import Layout from 'components/layout/Layout';
import GridLayout, { WidthProvider } from 'react-grid-layout';
import axios from 'axios';
import { getResultJson } from 'scripts/common/Util';
import DashboardChart from 'components/dashboard/DashboardChart';

function DashboardPage() {

    const GridLayoutWidthProvided = WidthProvider(GridLayout);

    const [dashboardId, setDashboardId] = useState('DBD0000000000000');
    const [layout, setLayout] = useState([]);
    const [row, setRow] = useState(6);
    const [column, setColumn] = useState(6);

    const rowHeight = 200;
    const dashboardInformationUrlPrefix = 'http://localhost:8080/api/monitoring/dashboard-information/';
    const fixed = true;

    const setRowColumn = (dashboardInformationArray) => {
        if(dashboardInformationArray?.length > 0) {
            const firstItem = dashboardInformationArray[0];
            setRow(firstItem?.dashboard.row);
            setColumn(firstItem?.dashboard.column);
        }
    }

    const convertLayout = (dashboardInformationArray) => {
        const result = [];
        dashboardInformationArray.forEach(dashboardInformation => {
            result.push({
                x: dashboardInformation?.x,
                y: dashboardInformation?.y,
                w: dashboardInformation?.w,
                h: dashboardInformation?.h,
                i: ''+dashboardInformation?.x+dashboardInformation?.y+dashboardInformation?.w+dashboardInformation?.h,
                chart: dashboardInformation?.chart,
                static: fixed
            });
        });
        return result;
    }

    const drawLayout = (dashboardId) => {
        axios({
            method: 'GET',
            url: dashboardInformationUrlPrefix+dashboardId,
            headers: {[process.env.REACT_APP_TOKEN_HEADER]: localStorage.getItem(process.env.REACT_APP_TOKEN_KEY)}
        })
        .then((rs) => {
            const dashboardInformationArray = rs.data.dataArray;
            // console.log(dashboardInformationArray);
            setRowColumn(dashboardInformationArray);
            setLayout(convertLayout(dashboardInformationArray));
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
        drawLayout(dashboardId);
    }, [dashboardId]);

  return (
      <>
        <Layout>
                <div id="info" className="t-text"> INFO </div>
                <GridLayoutWidthProvided className="layout" layout={layout} maxRows={row} rowHeight={rowHeight} cols={column}>
                    {
                        layout.map(item => {
                            const id = item.i;
                            const chart = item.chart;
                            return <div className="t-chart-wrap" id={id} key={id}>
                                <DashboardChart id={id} chart={chart}></DashboardChart>
                            </div>
                        })
                    }
                </GridLayoutWidthProvided>
        </Layout>
      </>
  );
}

export default DashboardPage;