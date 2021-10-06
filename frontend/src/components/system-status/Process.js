import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { drawGrid } from 'scripts/common/ToastGrid';

function Process({id, urlPrefix}) {

  const columns = [
    {
      header: 'PID',
      name: 'pid',
    },
    {
      header: 'PID',
      name: 'parentPid',
    },
    {
      header: 'CPU',
      name: 'cpuPercent',
    },
    {
      header: 'MEM',
      name: 'memoryPercent',
    },
    {
      header: 'NAME',
      name: 'name',
    },
    {
      header: 'START AT',
      name: 'startAt',
    },
  ]

  useEffect(() => {
    axios({
      method: 'GET',
      url: urlPrefix+'/process',
      headers: {[process.env.REACT_APP_TOKEN_HEADER]: localStorage.getItem(process.env.REACT_APP_TOKEN_KEY)}
    })
    .then((rs) => {
      const data = rs.data.dataArray;
      drawGrid('grid', columns, data);
      console.log(data);
    })
    .catch((err) => {
        console.log(err);
    });
  })
  return (
        <>
          <div id="grid" className="t-grid"></div>
        </>
  );
}

export default Process;