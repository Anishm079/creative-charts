import React, { useEffect } from 'react';
import * as echarts from 'echarts';

const SunburstChart: React.FC = () => {
  useEffect(() => {
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.height = '100vh';
    document.documentElement.style.height = '100vh';

    const chartDom = document.getElementById('main');
    if (chartDom) {
      const myChart = echarts.init(chartDom);
      const data = [
        {
          name: 'Grandpa',
          children: [
            {
              name: 'Uncle Leo',
              value: 15,
              children: [
                { name: 'Cousin Jack', value: 2 },
                {
                  name: 'Cousin Mary',
                  value: 5,
                  children: [{ name: 'Jackson', value: 2 }],
                },
                { name: 'Cousin Ben', value: 4 },
              ],
            },
            {
              name: 'Father',
              value: 10,
              children: [
                { name: 'Me', value: 5 },
                { name: 'Brother Peter', value: 1 },
              ],
            },
          ],
        },
        {
          name: 'Nancy',
          children: [
            {
              name: 'Uncle Nike',
              children: [
                { name: 'Cousin Betty', value: 1 },
                { name: 'Cousin Jenny', value: 2 },
              ],
            },
          ],
        },
      ];
      const option = {
        series: {
          type: 'sunburst',
          data: data,
          radius: ['0%', '90%'], // Adjusted radius to increase chart size
          center: ['50%', '50%'], // Ensure the chart is centered
          label: {
            rotate: 'radial',
          },
        },
      };
      myChart.setOption(option);
    }
  }, []);

  return <div id="main" style={{ width: '100vw', height: '100vh', display:"grid",placeItems:"center" }}></div>;
};

export default SunburstChart;
