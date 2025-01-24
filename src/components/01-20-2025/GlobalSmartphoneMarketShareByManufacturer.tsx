import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

const PieChart: React.FC = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const myChart = echarts.init(chartRef.current);

    const option: echarts.EChartsOption = {
      backgroundColor: '#2c343c',
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
      },
      legend: {
        data: [
          'Android',
          'iOS',
          'Other OS',
          'Samsung',
          'Xiaomi',
          'Oppo',
          'Vivo',
          'Apple',
          'Nokia',
          'Blackberry',
          'Others'
        ],
        bottom: 0,
        textStyle: {
          color: 'white',
        },
      },
      series: [
        {
          name: 'Operating System',
          type: 'pie',
          selectedMode: 'single',
          radius: [0, '30%'],
          label: {
            position: 'inner',
            fontSize: 12,
            color: 'white',
          },
          labelLine: {
            show: false
          },
          itemStyle: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2,
          },
          data: [
            { value: 72, name: 'Android' },
            { value: 27, name: 'iOS', selected: true },
            { value: 1, name: 'Other OS' }
          ]
        },
        {
          name: 'Manufacturers',
          type: 'pie',
          radius: ['45%', '60%'],
          labelLine: {
            length: 15,
            length2: 10,
            smooth: true
          },
          label: {
            formatter: '{b}: {c} ({d}%)',
            backgroundColor: '#F6F8FC',
            borderColor: '#8C8D8E',
            borderWidth: 1,
            borderRadius: 4,
            padding: [4, 6],
            color: '#000',
          },
          itemStyle: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2,
          },
          data: [
            { value: 22, name: 'Samsung' },
            { value: 15, name: 'Xiaomi' },
            { value: 12, name: 'Oppo' },
            { value: 8, name: 'Vivo' },
            { value: 15, name: 'Others' },
            { value: 27, name: 'Apple' },
            { value: 0.5, name: 'Nokia' },
            { value: 0.3, name: 'Blackberry' },
            { value: 0.2, name: 'Others' }
          ]
        }
      ]
    };

    myChart.setOption(option);

    // Cleanup on component unmount
    return () => {
      myChart.dispose();
    };
  }, []);

  return <div ref={chartRef} style={{ width: '50%', height: '500px' }} />;
};

export default PieChart;
