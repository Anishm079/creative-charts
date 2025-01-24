import * as echarts from 'echarts';
import React, { useEffect } from 'react';

const ComplexRangeChart: React.FC = () => {
  useEffect(() => {
    const chartDom = document.getElementById('main') as HTMLElement;
    const myChart = echarts.init(chartDom);
    let option: echarts.EChartsOption;

    const data1 = [
      [1, 20, 15, 30],
      [2, 32, 22, 38],
      [3, 33, 26, 40],
      [4, 44, 35, 50],
      [5, 58, 45, 65],
      [6, 70, 52, 75],
      [7, 80, 55, 90],
      [8, 90, 60, 100]
    ];
    
    const data2 = [
      [1, 10, 5, 15],
      [2, 12, 8, 18],
      [3, 13, 9, 19],
      [4, 24, 15, 30],
      [5, 38, 25, 45],
      [6, 50, 35, 55],
      [7, 60, 40, 70],
      [8, 70, 50, 80]
    ];

    option = {
      backgroundColor: '#f4f4f4',
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
          shadowStyle: {
            color: 'rgba(150,150,150,0.1)',
          },
        },
        formatter: function (params) {
          return params.map((param: any) => {
            const [low, open, close, high] = param.value;
            return `
              <b>${param.seriesName}</b><br>
              <b>Date:</b> ${param.axisValueLabel}<br>
              <b>Low:</b> ${low}<br>
              <b>Open:</b> ${open}<br>
              <b>Close:</b> ${close}<br>
              <b>High:</b> ${high}
            `;
          }).join('<br>');
        },
      },
      legend: {
        data: ['Series 1', 'Series 2'],
        top: '10%',
        left: 'center'
      },
      xAxis: {
        type: 'category',
        data: ['2023-01-01', '2023-02-01', '2023-03-01', '2023-04-01'],
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
          name: 'Series 1',
          type: 'candlestick',
          data: data1,
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
        {
          name: 'Series 2',
          type: 'candlestick',
          data: data2,
          itemStyle: {
            color: 'rgba(255,69,0,0.7)', // Gradient for positive range
            color0: 'rgba(0,255,0,0.7)', // Gradient for negative range
            borderColor: '#ff4500',
            borderColor0: '#00ff00',
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

  return <div id="main" style={{ width: '800px', height: '600px' }}></div>;
};

export default ComplexRangeChart;
