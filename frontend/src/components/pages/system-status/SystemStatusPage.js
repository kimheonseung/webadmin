import React, { useEffect, useState } from 'react';
import Layout from 'components/layout/Layout';
import axios from 'axios';
import Ram from 'components/system-status/Ram';
import NetworkConnection from 'components/system-status/NetworkConnection';
import Network from 'components/system-status/Network';
import Process from 'components/system-status/Process';
import Disk from 'components/system-status/Disk';
import SystemStatus from 'components/system-status/SystemStatus';
import GridLayout, { WidthProvider } from 'react-grid-layout';


function SystemStatusPage() {

    const GridLayoutWidthProvided = WidthProvider(GridLayout);

    const w = 3;
    const h = 1;

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
            x: 3,
            y: 0,
            w: w,
            h: h,
            i: '1',
            static: true,
        },
        {
            x: 6,
            y: 0,
            w: w,
            h: h,
            i: '2',
            static: true,
        },
        {
            x: 0,
            y: 1,
            w: 9,
            h: 3,
            i: '3',
            static: true,
        },
        // {
        //     x: 0,
        //     y: 2,
        //     w: 8,
        //     h: 2,
        //     i: '4',
        //     static: true,
        // },
    ];

    const row = 4;
    const column = 9;
    const rowHeight = 200;

    const systemStatusUrlPrefix = 'http://localhost:8080/api/monitoring/system-status';

    // const [networkData, setNetworkData] = useState([]);
    // const [networkConnectionData, setNetworkConnectionData] = useState([]);

    useEffect(() => {
        // axios
        //     .get(systemStatusUrlPrefix+'/network')
        //     .then((rs) => {
        //         setNetworkData(rs.data.dataArray);
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     });

        // axios
        //     .get(systemStatusUrlPrefix+'/network-connection')
        //     .then((rs) => {
        //         setNetworkConnectionData(rs.data.dataArray);
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     });
    }, []);

  return (
      <>
        <Layout>
            <GridLayoutWidthProvided className="layout" layout={gridLayout} maxRows={row} rowHeight={rowHeight} cols={column}>
                <div className="t-chart-wrap" id="t-chart-wrap-ram" key={0}>
                    <Ram id="t-chart-wrap-ram" urlPrefix={systemStatusUrlPrefix} />
                </div>
                <div className="t-chart-wrap" id="t-chart-wrap-disk" key={1}>
                    <Disk id="t-chart-wrap-disk" urlPrefix={systemStatusUrlPrefix} />
                </div>
                <div className="t-chart-wrap"id="t-chart-wrap-network" key={2}>
                    <Network id="t-chart-wrap-network" />
                </div>
                <div className="t-chart-wrap" id="t-chart-wrap-process" id={2} key={3}>
                    <Process id="t-chart-wrap-process" urlPrefix={systemStatusUrlPrefix} />
                </div>
                
                {/* <div className="t-chart-wrap" id="t-chart-wrap-network-connection" key={4}>
                    <NetworkConnection id="t-chart-wrap-network-connection" />
                </div> */}
            </GridLayoutWidthProvided>
        </Layout>
      </>
  );
}

export default SystemStatusPage;