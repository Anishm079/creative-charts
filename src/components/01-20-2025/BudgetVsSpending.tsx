import React, { useEffect } from 'react';
import * as echarts from 'echarts';

const RadarChart: React.FC = () => {
  useEffect(() => {
    const chartDom = document.getElementById('main') as HTMLElement;
    const myChart = echarts.init(chartDom);

    const option: echarts.EChartsOption = {
      title: {
        text: 'Budget vs spending',
        textAlign:"center"
      },
      legend: {
        data: ['Allocated Budget', 'Actual Spending'],
      },
      radar: {
        // shape: 'circle',
        indicator: [
          { name: 'Sales (Max: 6500)', max: 6500 },
          { name: 'Administration (Max: 16000)', max: 16000 },
          { name: 'Information Technology (Max: 30000)', max: 30000 },
          { name: 'Customer Support (Max: 38000)', max: 38000 },
          { name: 'Development (Max: 52000)', max: 52000 },
          { name: 'Marketing (Max: 25000)', max: 25000 },
        ],
        axisLabel: {
          show: true,
        //   formatter: (value: number) => `${value}`,
          color: '#ffffff',
          fontSize: 14
        }
      },
      series: [
        {
          name: 'Budget vs spending',
          type: 'radar',
          data: [
            {
              value: [4200, 3000, 20000, 35000, 50000, 18000],
              name: 'Allocated Budget',
            },
            {
              value: [5000, 14000, 28000, 26000, 42000, 21000],
              name: 'Actual Spending',
            },
          ],
        },
      ],
    };

    myChart.setOption(option);

    return () => {
      myChart.dispose();
    };
  }, []);

  return <div id="main" style={{ width: '100%', height: '80%' }} />;
};

export default RadarChart;
