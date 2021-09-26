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

    const w = 2;
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
            x: 2,
            y: 0,
            w: w,
            h: h,
            i: '1',
            static: true,
        },
        {
            x: 4,
            y: 0,
            w: w,
            h: h,
            i: '2',
            static: true,
        },
        {
            x: 6,
            y: 0,
            w: w,
            h: h,
            i: '3',
            static: true,
        },
        {
            x: 8,
            y: 0,
            w: w,
            h: h,
            i: '4',
            static: true,
        },
    ];

    const row = 10;
    const column = 10;
    const rowHeight = 200;

    const systemStatusUrlPrefix = 'http://localhost:8080/api/system-status';

    const [ramData, setRamData] = useState([]);
    const [processData, setProcessData] = useState([]);
    const [diskData, setDiskData] = useState([]);
    const [networkData, setNetworkData] = useState([]);
    const [networkConnectionData, setNetworkConnectionData] = useState([]);

    useEffect(() => {
        axios
            .get(systemStatusUrlPrefix+'/ram')
            .then((rs) => {
                setRamData(rs.data.dataArray);
            })
            .catch((err) => {
                console.log(err);
            });

        axios
            .get(systemStatusUrlPrefix+'/process')
            .then((rs) => {
                setProcessData(rs.data.dataArray);
            })
            .catch((err) => {
                console.log(err);
            });

        axios
            .get(systemStatusUrlPrefix+'/disk')
            .then((rs) => {
                setDiskData(rs.data.dataArray);
            })
            .catch((err) => {
                console.log(err);
            });

        axios
            .get(systemStatusUrlPrefix+'/network')
            .then((rs) => {
                setNetworkData(rs.data.dataArray);
            })
            .catch((err) => {
                console.log(err);
            });

        axios
            .get(systemStatusUrlPrefix+'/network-connection')
            .then((rs) => {
                setNetworkConnectionData(rs.data.dataArray);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

  return (
      <>
        <Layout>
            <GridLayoutWidthProvided className="layout" layout={gridLayout} maxRows={row} rowHeight={rowHeight} cols={column}>
                <div className="t-chart-wrap" id={0} key={0}>
                    <Ram data={ramData} />
                </div>
                <div className="t-chart-wrap" id={1} key={1}>
                    <Disk data={diskData} />
                </div>
                <div className="t-chart-wrap" id={2} key={2}>
                    <Process data={processData} />
                </div>
                <div className="t-chart-wrap" id={3} key={3}>
                    <Network data={networkData} />
                </div>
                <div className="t-chart-wrap" id={4} key={4}>
                    <NetworkConnection data={networkConnectionData} />
                </div>
            </GridLayoutWidthProvided>
        </Layout>
      </>
  );
}

export default SystemStatusPage;