import React, { useState, useEffect } from 'react';
import Layout from 'components/layout/Layout';
import GridLayout, { Responsive, WidthProvider } from 'react-grid-layout';
import ToastChart from 'components/ToastChart';

function DashboardPage() {

    const GridLayoutWidthProvided = WidthProvider(GridLayout);

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

    const [rowHeight, setRowHeight] = useState(200);
    const [cols, setCols] = useState(6);
    const [fixed, setStatic] = useState(true);
    const [layout, setLayout] = useState([
        {
            i: '0023', 
            x: 0, 
            y: 0, 
            w: 2, 
            h: 3, 
            static: fixed
        },
        {
            i: '2011', 
            x: 2, 
            y: 0, 
            w: 1, 
            h: 1, 
            static: fixed
        },
        {
            i: '2111', 
            x: 2, 
            y: 1, 
            w: 1, 
            h: 1, 
            static: fixed
        },
        {
            i: '2211', 
            x: 2, 
            y: 2, 
            w: 1, 
            h: 1, 
            static: fixed
        },
        {
            i: '3022', 
            x: 3, 
            y: 0, 
            w: 2, 
            h: 2, 
            static: fixed
        },
        {
            i: '3221', 
            x: 3, 
            y: 2, 
            w: 2, 
            h: 1, 
            static: fixed
        },
        {
            i: '6013', 
            x: 6, 
            y: 0, 
            w: 1, 
            h: 3, 
            static: fixed
        },
    ]);

    const [chartDataMap, setChartDataMap] = useState(
        {
            '0023': {
                name: 'Chart1', 
                type: 'Column', 
                data: {
                    categories: generateCategories(10), 
                    series: generateSeries(10)
                }
            },
            '2011': {
                name: 'Chart2', 
                type: 'Pie', 
                data: {
                    categories: generateCategories(2), 
                    series: generateSeries(2)
                }
            },
            '2111': {
                name: 'Chart3', 
                type: 'Pie', 
                data: {
                    categories: generateCategories(5), 
                    series: generateSeries(5)
                }
            },
            '2211': {
                name: 'Chart4', 
                type: 'Pie', 
                data: {
                    categories: generateCategories(3), 
                    series: generateSeries(3)
                }
            },
            '3022': {
                name: 'Chart5', 
                type: 'Bar', 
                data: {
                    categories: generateCategories(6), 
                    series: generateSeries(6)
                }
            },
            '3221': {
                name: 'Chart6', 
                type: 'LineArea', 
                data: {
                    categories: generateCategories(9), 
                    series: generateSeries(9)
                }
            },
            '6013': {
                name: 'Chart7', 
                type: 'Column', 
                data: {
                    categories: generateCategories(3), 
                    series: generateSeries(3)
                }
            }
        }
    );

  return (
      <>
        <Layout>
                <GridLayoutWidthProvided className="layout" layout={layout} maxRows={cols} rowHeight={rowHeight} /*width={width}*/ cols={cols}>
                    {
                        layout.map(item => {
                            const id = '' + item.x + item.y + item.w + item.h;
                            // const chartId = 'chart-'+id;
                            return <div className="t-chart-wrap" id={id} key={id}>
                                        <ToastChart id={id} chartData={chartDataMap[id]}></ToastChart>
                                    </div>
                        })
                    }
                    
                </GridLayoutWidthProvided>
        </Layout>
      </>
  );
}

export default DashboardPage;