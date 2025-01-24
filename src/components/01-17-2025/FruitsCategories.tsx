import * as echarts from 'echarts';
import React, { useEffect } from 'react';

const ComplexTreemapChart: React.FC = () => {
  useEffect(() => {
    const chartDom = document.getElementById('main') as HTMLElement;
    const myChart = echarts.init(chartDom);
    let option: echarts.EChartsOption;

    const data = [
      {
        name: 'Fruits categories',
        children: [
          {
            name: 'Tropical',
            children: [
              {
                name: 'Citrus',
                children: [
                  { name: 'Orange', value: 30, description: 'Rich in vitamin C' },
                  { name: 'Lemon', value: 20, description: 'Used in cooking and drinks' },
                  { name: 'Lime', value: 10, description: 'Popular in tropical drinks' }
                ]
              },
              {
                name: 'Non-Citrus',
                children: [
                  { name: 'Banana', value: 40, description: 'High in potassium' },
                  { name: 'Mango', value: 25, description: 'Sweet and juicy' },
                  { name: 'Pineapple', value: 15, description: 'Tangy and sweet' }
                ]
              }
            ]
          },
          {
            name: 'Berries',
            children: [
              {
                name: 'Small Berries',
                children: [
                  { name: 'Strawberry', value: 35, description: 'Popular in desserts' },
                  { name: 'Blueberry', value: 30, description: 'High in antioxidants' },
                  { name: 'Raspberry', value: 15, description: 'Tart and sweet' }
                ]
              },
              {
                name: 'Large Berries',
                children: [
                  { name: 'Grapes', value: 45, description: 'Used for wine' },
                  { name: 'Blackberry', value: 20, description: 'Dark and juicy' },
                  { name: 'Goji Berry', value: 10, description: 'Superfood' }
                ]
              }
            ]
          },
          {
            name: 'Stone Fruits',
            children: [
              {
                name: 'Pitted',
                children: [
                  { name: 'Peach', value: 25, description: 'Sweet and juicy' },
                  { name: 'Cherry', value: 20, description: 'Tart and sweet' },
                  { name: 'Apricot', value: 15, description: 'Small and sweet' }
                ]
              },
              {
                name: 'Non-Pitted',
                children: [
                  { name: 'Apple', value: 50, description: 'Popular and versatile' },
                  { name: 'Pear', value: 30, description: 'Sweet and juicy' },
                  { name: 'Plum', value: 20, description: 'Juicy and tart' }
                ]
              }
            ]
          }
        ]
      }
    ];

    option = {
      backgroundColor: '#f4f4f4',
      tooltip: {
        trigger: 'item',
        formatter: function (params) {
          const { name, value, treePathInfo } = params;
          const description = treePathInfo[treePathInfo.length - 1].data.description;
          return `
            <b>${name}</b><br>
            <b>Value:</b> ${value}<br>
            <b>Description:</b> ${description}
          `;
        }
      },
      series: [
        {
          type: 'treemap',
          data: data,
          leafDepth: 3,
          label: {
            show: true,
            formatter: '{b}\n{c}%',
            color: '#fff',
            fontSize: 14,
            overflow: 'truncate',
            position: 'inside'
          },
          itemStyle: {
            borderColor: '#fff',
            borderWidth: 2,
            gapWidth: 2,
          },
          levels: [
            {
              color: ['#e91e63', '#f44336', '#ffeb3b', '#2196f3']
            },
            {
              color: ['#2196f3', '#f44336', '#ffeb3b', '#e91e63']
            },
            {
              color: ['#ff5722', '#4caf50', '#607d8b', '#9c27b0']
            }
          ],
          emphasis: {
            itemStyle: {
              borderColor: '#000',
              borderWidth: 3
            },
            label: {
              fontWeight: 'bold',
              fontSize: 16,
              color: '#000'
            }
          },
          animationDuration: 1000,
          animationEasing: 'elasticOut'
        }
      ]
    };

    option && myChart.setOption(option);

  }, []);

  return <div id="main" style={{ width: '800px', height: '600px' }}></div>;
};

export default ComplexTreemapChart;
