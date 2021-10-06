import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { drawChart } from 'scripts/common/ToastChart';

function Ram({id, urlPrefix}) {

  const chartOption = {
    chart: {title: 'RAM'},
    series: {
      stack: {
        type: 'percent'
      }
    }
  }

  const chartTheme = {
    series: {
      colors: ['#ff8e7f', '#6ccad0'],
      areaOpacity: 0.7
    }
  }

  const parseToChartData = (data) => {
    const newRamData = {
      categories: ['RAM'],
      series: [
        {
          name: 'used',
          data: [data.used]
        },
        {
          name: 'available',
          data: [data.available]
        }
      ]
    };

    const chartData = {
      name: 'Ram',
      type: 'Bar',
      data: {
        categories: newRamData.categories,
        series: newRamData.series
      },
      option: chartOption,
      theme: chartTheme,
    }

    return chartData;
  }

  useEffect(() => {
    axios({
      method: 'GET',
      url: urlPrefix+'/ram',
      headers: {[process.env.REACT_APP_TOKEN_HEADER]: localStorage.getItem(process.env.REACT_APP_TOKEN_KEY)}
    })
    .then((rs) => {
      const data = rs.data.dataArray;

      if(data.length > 0) {
        const d = parseToChartData(data[0]);
        drawChart(id, d);
      }
    })
    .catch((err) => {
        console.log(err);
    });
  });

  return (
        <>
        </>
  );
}

export default Ram;