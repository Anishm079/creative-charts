import * as echarts from 'echarts';
import React, { useEffect } from 'react';

const MovieGenreStreamgraphChart: React.FC = () => {
  useEffect(() => {
    const chartDom = document.getElementById('main') as HTMLElement;
    const myChart = echarts.init(chartDom);
    let option: echarts.EChartsOption;

    const data = [
      { name: 'Action', data: [10, 12, 15, 18, 20, 23, 25, 22, 24, 26, 28, 30, 33, 35, 38, 40, 42, 45, 48, 50, 53] },
      { name: 'Adventure', data: [5, 8, 10, 12, 15, 18, 20, 22, 25, 28, 30, 33, 35, 38, 40, 42, 45, 48, 50, 53, 55] },
      { name: 'Comedy', data: [8, 10, 12, 15, 18, 20, 23, 25, 27, 30, 32, 35, 38, 40, 43, 45, 48, 50, 53, 55, 58] },
      { name: 'Drama', data: [12, 15, 18, 20, 22, 25, 27, 30, 32, 35, 38, 40, 43, 45, 48, 50, 53, 55, 58, 60, 63] },
      { name: 'Horror', data: [3, 5, 7, 10, 12, 15, 18, 20, 22, 25, 27, 30, 32, 35, 37, 40, 42, 45, 47, 50, 52] },
      { name: 'Sci-Fi', data: [5, 7, 10, 12, 15, 18, 20, 22, 25, 27, 30, 32, 35, 37, 40, 42, 45, 47, 50, 52, 55] }
    ];

    const years = Array.from({ length: 21 }, (_, i) => 2000 + i);

    option = {
      backgroundColor: '#2c343c',
      title: {
        text: 'Annual Movie Ticket Sales by Genre',
        left: 'center',
        textStyle: {
          color: '#ccc'
        }
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        }
      },
      legend: {
        data: data.map(genre => genre.name),
        top: '10%',
        left: 'center',
        textStyle: {
          color: '#ccc'
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
          data: years,
          axisLine: {
            lineStyle: {
              color: '#ccc'
            }
          }
        }
      ],
      yAxis: [
        {
          type: 'value',
          axisLine: {
            lineStyle: {
              color: '#ccc'
            }
          }
        }
      ],
      series: data.map(genre => ({
        name: genre.name,
        type: 'line',
        stack: 'total',
        smooth: true,
        areaStyle: {
          normal: {
            opacity: 0.6,
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                { offset: 0, color: '#c23531' },
                { offset: 1, color: '#2c343c' }
              ]
            }
          }
        },
        emphasis: {
          focus: 'series'
        },
        data: genre.data
      }))
    };

    option && myChart.setOption(option);

  }, []);

  return <div id="main" style={{ width: '800px', height: '600px' }}></div>;
};

export default MovieGenreStreamgraphChart;
