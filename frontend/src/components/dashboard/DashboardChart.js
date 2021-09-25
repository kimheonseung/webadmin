import React, { useEffect, useState } from 'react';
import { drawChart } from 'scripts/common/ToastChart';

function DashboardChart({id, chart}) {

    const generateCategories = (count) => {
        const categories = [];
        for(let i = 0 ; i < count ; ++i) {
            categories.push('c'+i);
        }
        return categories;
    }

    const generateSeries = (count) => {
        
        const data = [];
        for(let i = 0 ; i < count ; ++i) {
            data.push(Math.floor(Math.random() * 10) + 1);
        }

        const series = [{
            name: '# of data',
            data: data
        }];
        
        return series;
    }

    const convertChartData = (chart) => {
        const dataCount = chart?.dataCount;
        return {
            name: chart?.name,
            type: chart?.type,
            data: {
                categories: generateCategories(dataCount),
                series: generateSeries(dataCount)
            }
        }
    }

    const getChartData = () => {
        drawChart(id, convertChartData(chart));
    }

    useEffect(() => {
        getChartData();
    }, [chart]);

  return (
        <>
        </>
  );
}

export default DashboardChart;