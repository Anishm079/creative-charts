import React, { useEffect } from 'react';
import * as echarts from 'echarts';

type EChartsOption = echarts.EChartsOption;

const RadarChart: React.FC = () => {
  useEffect(() => {
    const chartDom = document.getElementById('main') as HTMLElement;
    const myChart = echarts.init(chartDom);

    const option: EChartsOption = {
      title: {
        text: 'Proportion of Browsers',
        top: 10,
        left: 800,
        textStyle: {
          color: 'white',
        },
      },
      tooltip: {
        trigger: 'item',
        textStyle: {
          color: 'white',
        },
      },
      legend: {
        type: 'scroll',
        bottom: 10,
        data:['2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025', '2026', '2027'],
        textStyle: {
          color: 'white',
        },
      },
      visualMap: {
        top: 'middle',
        right: 10,
        color: ['red', 'yellow'],
        calculable: true,
        textStyle: {
          color: 'white',
        },
      },
      radar: {
        indicator: [
          { text: 'IE8-', max: 400 },
          { text: 'IE9+', max: 400 },
          { text: 'Safari', max: 400 },
          { text: 'Firefox', max: 400 },
          { text: 'Chrome', max: 400 },
        ],
        name: {
          textStyle: {
            color: 'white',
          },
        },
      },
      series: Array.from({ length: 28 }, (_, i) => ({
        type: 'radar',
        symbol: 'none',
        lineStyle: {
          width: 1,
        },
        emphasis: {
          areaStyle: {
            color: 'rgba(0,250,0,0.3)',
          },
        },
        data: [
          {
            value: [
              (40 - i) * 10,
              (38 - i) * 4 + 60,
              i * 5 + 10,
              i * 9,
              (i * i) / 2,
            ],
            name: `${i + 2000}`,
          },
        ],
      })) as echarts.SeriesOption[],
    };

    myChart.setOption(option);

    return () => {
      myChart.dispose();
    };
  }, []);

  return <div id="main" style={{ width: '100%', height: '500px' }} />;
};

export default RadarChart;
