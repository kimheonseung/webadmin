import Chart from '@toast-ui/chart';
import '@toast-ui/chart/dist/toastui-chart.min.css';

const fontColor = 'rgb(136, 136, 136)';
const backgroundColor = 'rgb(30, 30, 45)';
const defaultTheme = {
    chart: {
        fontFamily: 'Verdana',
        backgroundColor: backgroundColor
    },
    title: {
        fontFamily: 'Comic Sans MS',
        fontSize: 25,
        fontWeight: 100,
        color: fontColor
    },
    xAxis: {
        title: {
            fontFamily: 'Impact',
            fontSize: 15,
            // fontWeight: 400,
            color: fontColor
        },
        label: {
            fontFamily: 'cursive',
            fontSize: 11,
            // fontWeight: 700,
            color: fontColor
        },
        width: 2,
        color: fontColor
    },
    yAxis: [
        {
            title: {
                fontFamily: 'Impact',
                fontSize: 17,
                // fontWeight: 400,
                color: fontColor
            },
            label: {
                fontFamily: 'cursive',
                fontSize: 11,
                // fontWeight: 700,
                color: fontColor
            },
            width: 2,
            color: fontColor
        },
        {
            title: {
                fontFamily: 'Comic Sans MS',
                fontSize: 13,
                // fontWeight: 600,
                color: fontColor
            },
            label: {
                fontFamily: 'cursive',
                fontSize: 11,
                // fontWeight: 700,
                color: fontColor
            },
            width: 2,
            color: fontColor
        }
    ],
    legend: {
        label: {
            fontFamily: 'cursive',
            fontSize: 15,
            fontWeight: 700,
            color: fontColor
        }
    },
    tooltip: {
        background: '#80CEE1',
        borderColor: '#3065AC',
        borderWidth: 10,
        borderRadius: 20,
        borderStyle: 'double',
        header: {
            fontSize: 15,
            fontWeight: 700,
            color: '#333333',
            fontFamily: 'monospace',
        },
        body: {
            fontSize: 11,
            fontWeight: 700,
            color: '#a66033',
            fontFamily: 'monospace',
        }
    },
    plot: {
        vertical: {
          lineColor: 'rgba(60, 80, 180, 0.3)',
          lineWidth: 5,
          dashSegments: [5, 20],
        },
        horizontal: {
          lineColor: 'rgba(0, 0, 0, 0)',
        },
        backgroundColor: 'rgba(30, 30, 45, 0.1)'
    },
    exportMenu: {
        button: {
            backgroundColor: backgroundColor,
            borderRadius: 5,
            borderWidth: 1,
            borderColor: '#000000',
            xIcon: {
                color: '#ffffff',
                lineWidth: 3,
            },
            dotIcon: {
                color: '#ffffff',
                width: 3,
                height: 3,
                gap: 3,
            },
        },
        panel: {
            borderColor: '#ff0000',
            borderWidth: 1,
            borderRadius: 5,
            header: {
                fontSize: 15,
                // fontFamily: 'fantasy',
                color: fontColor,
                // fontWeight: 700,
                backgroundColor: '#673ab7',
            },
            body: {
                fontSize: 12,
                // fontFamily: 'fantasy',
                color: fontColor,
                // fontWeight: '500',
                backgroundColor: '#000000',
            },
        },
    },
}

const barTheme = {
    series: {
        colors: ['#ff416d'],
        areaOpacity: 0.7,
    },
}

const lineTheme = {
    series: {
        colors: ['#ff416d'],
        /* not filled line chart */
        // line: {
        //     dot: {
        //       borderColor: '#009dff',
        //       borderWidth: 2,
        //       radius: 7,
        //     },
        // },
        area: {
            areaOpacity: 0.5,
        },
    },
}

const pieTheme = {
    series: {
        dataLabels: {
            fontFamily: 'monaco',
            useSeriesColor: true,
            lineWidth: 2,
            textStrokeColor: '#ffffff',
            shadowColor: '#ffffff',
            shadowBlur: 4,
            callout: {
                lineWidth: 3,
                lineColor: '#f44336',
                useSeriesColor: false
            },
            pieSeriesName: {
                useSeriesColor: false,
                color: '#f44336',
                fontFamily: 'fantasy',
                fontSize: 13,
                textBubble: {
                    visible: true,
                    paddingX: 1,
                    paddingY: 1,
                    backgroundColor: 'rgba(158, 158, 158, 0.3)',
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    shadowBlur: 0,
                    shadowColor: 'rgba(0, 0, 0, 0)'
                }
            }
        }
    }
}

const defaultOption = (chartData) => {
    return {
        chart: {
            title: {
                align: 'center',
                text: chartData.name
            },
            width: 'auto',
            height: 'auto'
        },
        legend: {
            align: 'bottom',
            showCheckbox: false
        },
        usageStatistics: false,
        responsive: {
    
        },
        theme: {
            
        }
    };
}



const drawBarChart = (el, data, options) => {
    return Chart.barChart({
        el: el, 
        data: data, 
        options: options
    });
}

const drawColumnChart = (el, data, options) => {
    return Chart.columnChart({
        el: el, 
        data: data, 
        options: options
    });
}

const drawLineAreaChart = (el, data, options) => {
    return Chart.lineAreaChart({
        el: el, 
        data: data, 
        options: options
    });
}

const drawPieChart = (el, data, options) => {
    return Chart.pieChart({
        el: el, 
        data: data, 
        options: options
    });
}

export const drawChart = (id, chartData) => {
    const el = document.getElementById(id);
    const data = chartData.data;
    const chartType = chartData.type;

    switch (chartType) {
        case 'Bar':
            drawBarChart(el, data, {...defaultOption(chartData), theme: {...defaultTheme, ...barTheme}});
            break;
        case 'Column':
            drawColumnChart(el, data, {...defaultOption(chartData), theme: {...defaultTheme, ...barTheme}});
            break;
        case 'LineArea':
            drawLineAreaChart(el, 
                {
                    categories: data.categories,
                    series: {
                        /* not filled line chart */
                        line: [], 
                        area: data.series
                    }
                }, 
                {
                    ...defaultOption(chartData),
                    series: {
                        showDot: true,
                        /* not filled line chart */
                        // line: {
                        //     spline: true // curve line
                        // },
                        area: {
                            dataLabels: {
                                visible: true
                            }
                        }
                    },
                    theme: {
                        ...defaultTheme,
                        ...lineTheme
                    }
                }
            );
            break;
        case 'Area':
            
            break;
        case 'Pie':
            const seriesNames = data.categories;
            const seriesData = data.series[0].data;
            const processedData = [];
            for(let i = 0 ; i < seriesNames.length ; ++i) {
                processedData.push({
                    name: seriesNames[i],
                    data: seriesData[i]
                }) ;
            };
            drawPieChart(el, 
                {
                    categories: ['# of data'],
                    series: processedData
                },
                {
                    ...defaultOption(chartData),
                    legend: {
                        align: 'right',
                        showCheckbox: false
                    },
                    series: {
                        selectable: true,
                        radiusRange: {
                            inner: '40%',
                            outer: '100%'
                        },
                        dataLabels: {
                            visible: true,
                            anchor: 'inner',
                            pieSeriesName: {
                                visible: false,
                                anchor: 'inner'
                            }
                        }
                    },
                    theme: {
                        ...defaultTheme,
                        ...pieTheme
                    }
                }
            );
            break;
        case 'Buble':
            
            break;
        case 'Scatter':
            
            break;
        case 'Heatmap':
            
            break;
        case 'Treemap':
            
            break;
        case 'Radar':
            
            break;
        case 'BoxPlot':
            
            break;
        case 'RadialBar':
            
            break;
        case 'Gauge':
            
            break;
        case 'NestedPie':
            break;
    
        default:
            break;
    }
}