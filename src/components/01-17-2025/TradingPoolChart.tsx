import * as echarts from 'echarts';
import React, { useEffect } from 'react';

const CreativeRangeChart: React.FC = () => {
  useEffect(() => {
    const chartDom = document.getElementById('main') as HTMLElement;
    const myChart = echarts.init(chartDom);
    let option: echarts.EChartsOption;

    const data = [
      [12, 124, 57, 122],
      [22, 138, 98, 177],
      [33, 145, 91, 160],
      [44, 168, 107, 172],
      [55, 174, 125, 193],
      [66, 198, 112, 168],
      [77, 190, 123, 190],
      [88, 178, 115, 178],
      [99, 195, 131, 199],
    ];

    option = {
      backgroundColor: 'transparent',
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
          shadowStyle: {
            color: 'rgba(150,150,150,0.1)',
          },
        },
        formatter: function (params) {
          const [low, open, close, high] = params[0].value;
          return `
            <b>Date:</b> ${params[0].axisValueLabel}<br>
            <b>Low:</b> ${low}<br>
            <b>Open:</b> ${open}<br>
            <b>Close:</b> ${close}<br>
            <b>High:</b> ${high}
          `;
        },
      },
      xAxis: {
        type: 'category',
        data: ['2023-01-01', '2023-02-01', '2023-03-01', '2023-04-01', '2023-05-01', '2023-06-01', '2023-07-01', '2023-08-01', '2023-09-01'],
        axisLine: {
          lineStyle: {
            color: '#333',
          },
        },
      },
      yAxis: {
        type: 'value',
        axisLine: {
          lineStyle: {
            color: '#333',
          },
        },
        splitLine: {
          lineStyle: {
            type: 'dashed',
            color: '#aaa',
          },
        },
      },
      series: [
        {
          type: 'candlestick',
          data: data,
          itemStyle: {
            color: 'rgba(51,204,204,0.7)', // Gradient for positive range
            color0: 'rgba(204,51,204,0.7)', // Gradient for negative range
            borderColor: '#33cccc',
            borderColor0: '#cc33cc',
          },
          markPoint: {
            symbol: 'diamond',
            symbolSize: 10,
            itemStyle: {
              color: '#333',
            },
            label: {
              show: true,
              formatter: '{b}\n{c}',
              position: 'top',
            },
            data: [
              { name: 'Highest', type: 'max', valueDim: 'highest' },
              { name: 'Lowest', type: 'min', valueDim: 'lowest' },
            ],
          },
          markLine: {
            data: [
              { name: 'Average', type: 'average', valueDim: 'close' },
            ],
            lineStyle: {
              type: 'dashed',
            },
          },
        },
      ],
    };

    option && myChart.setOption(option);

  }, []);

  return <div id="main" style={{ width: '100%', height: '80%' }}></div>;
};

export default CreativeRangeChart;
