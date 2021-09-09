import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getResultJson } from 'scripts/common/Util';
import { drawChart } from 'scripts/common/ToastChart';

function DashboardChart({id, chartId}) {

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

    const chartUrlPrefix = 'http://localhost:8080/api/chart/';

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

    const getChartData = (chartId) => {
        axios
            .get(chartUrlPrefix+chartId)
            .then((result) => {
                const chart = getResultJson(result);
                drawChart(id, convertChartData(chart));

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
        getChartData(chartId);
    }, [chartId]);

  return (
        <>
        </>
  );
}

export default DashboardChart;