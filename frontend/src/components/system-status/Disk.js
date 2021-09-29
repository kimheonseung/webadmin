import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { drawChart } from 'scripts/common/ToastChart';

function Disk({id, urlPrefix}) {

  const chartOption = {
    chart: {title: 'Disk 사용 현황'},
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
    const newDiskData = {
      categories: [],
      series: []
    };

    const categories = [];
    const available = [];
    const used = [];
    data.forEach(disk => {
      const name = disk.name;
      const usedGB = disk.used;
      const availableGB = disk.available;

      categories.push(name);
      used.push(usedGB);
      available.push(availableGB);
    });

    newDiskData.categories = categories;
    newDiskData.series = [
      {
        name: 'used',
        data: used
      },
      {
        name: 'available',
        data: available
      }
    ];
    
    const chartData = {
      name: 'Disk',
      type: 'Bar',
      data: {
        categories: newDiskData.categories,
        series: newDiskData.series
      },
      option: chartOption,
      theme: chartTheme,
    }

    return chartData;
  }
  useEffect(() => {
    axios
    .get(urlPrefix+'/disk')
    .then((rs) => {
        const data = rs.data.dataArray;

        if(data.length > 0) {
          const d = parseToChartData(data);
          drawChart(id, d);
        }
    })
    .catch((err) => {
        console.log(err);
    });
    
  }, []);

  return (
        <>
        </>
  );
}

export default Disk;