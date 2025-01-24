import * as echarts from 'echarts';
import React, { useEffect } from 'react';

const TemperatureStreamgraphChart: React.FC = () => {
  useEffect(() => {
    const chartDom = document.getElementById('main') as HTMLElement;
    const myChart = echarts.init(chartDom);
    let option: echarts.EChartsOption;

    const data = [
      { name: 'New York', data: [-1, 1, 5, 12, 18, 23, 26, 25, 21, 14, 8, 2] },
      { name: 'London', data: [4, 5, 7, 9, 12, 15, 17, 17, 14, 10, 7, 5] },
      { name: 'Tokyo', data: [6, 7, 10, 15, 19, 22, 26, 27, 23, 18, 13, 8] },
      { name: 'Sydney', data: [23, 23, 21, 18, 15, 12, 11, 12, 15, 18, 20, 22] },
      { name: 'Moscow', data: [-10, -8, -2, 7, 14, 18, 20, 19, 13, 6, -1, -7] }
    ];

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    option = {
      backgroundColor: '#1f1f1f',
      title: {
        text: 'Monthly Average Temperatures in Different Cities',
        left: 'center',
        textStyle: {
          color: '#fff'
        }
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#333'
          }
        }
      },
      legend: {
        data: data.map(city => city.name),
        top: '10%',
        left: 'center',
        textStyle: {
          color: '#fff'
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: months,
          axisLine: {
            lineStyle: {
              color: '#fff'
            }
          }
        }
      ],
      yAxis: [
        {
          type: 'value',
          axisLine: {
            lineStyle: {
              color: '#fff'
            }
          }
        }
      ],
      series: data.map(city => ({
        name: city.name,
        type: 'line',
        stack: 'total',
        smooth: true,
        lineStyle: {
          width: 2
        },
        areaStyle: {
          normal: {
            opacity: 0.8,
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                { offset: 0, color: '#ff7f50' },
                { offset: 1, color: '#1f1f1f' }
              ]
            }
          }
        },
        emphasis: {
          focus: 'series'
        },
        data: city.data
      }))
    };

    option && myChart.setOption(option);

  }, []);

  return <div id="main" style={{ width: '800px', height: '600px' }}></div>;
};

export default TemperatureStreamgraphChart;
