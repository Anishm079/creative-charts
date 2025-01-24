import * as echarts from 'echarts';
import React, { useEffect } from 'react';

const CreativeTreemapChart: React.FC = () => {
  useEffect(() => {
    const chartDom = document.getElementById('main') as HTMLElement;
    const myChart = echarts.init(chartDom);
    let option: echarts.EChartsOption;

    const data = [
      {
        name: 'Tech Companies',
        children: [
          {
            name: 'Hardware',
            children: [
              { name: 'Apple', value: 40, description: 'Leading in innovation and design' },
              { name: 'Samsung', value: 30, description: 'Known for its wide range of products' },
              { name: 'Dell', value: 20, description: 'Specializes in PCs and servers' },
              { name: 'HP', value: 10, description: 'Focuses on personal and enterprise solutions' }
            ]
          },
          {
            name: 'Software',
            children: [
              { name: 'Microsoft', value: 50, description: 'Dominates the OS and productivity software market' },
              { name: 'Adobe', value: 25, description: 'Leading in creative software solutions' },
              { name: 'SAP', value: 15, description: 'Specializes in enterprise software' },
              { name: 'Oracle', value: 10, description: 'Renowned for its database management systems' }
            ]
          },
          {
            name: 'Internet Services',
            children: [
              { name: 'Google', value: 60, description: 'Leader in search and advertising' },
              { name: 'Facebook', value: 20, description: 'Dominates social media' },
              { name: 'Amazon', value: 15, description: 'E-commerce giant with a strong cloud computing presence' },
              { name: 'Netflix', value: 5, description: 'Popular streaming service' }
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
          leafDepth: 2,
          label: {
            show: true,
            formatter: '{b}\n{c}%',
            color: '#fff', // Enhanced label color contrast
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
              color: ['#e91e63', '#f44336', '#ffeb3b', '#2196f3'] // Gradient color for levels
            },
            {
              color: ['#2196f3', '#f44336', '#ffeb3b', '#e91e63']
            }
          ],
          emphasis: {
            itemStyle: {
              borderColor: '#000',
              borderWidth: 3
            },
            label: {
              fontWeight: 'bold', // Enhanced label visibility
              fontSize: 16,
              color: '#000' // Enhanced emphasis color
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

export default CreativeTreemapChart;
