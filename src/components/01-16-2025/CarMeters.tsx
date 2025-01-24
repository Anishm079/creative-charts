import React, { useEffect } from 'react';
import * as echarts from 'echarts';

const EChartsComponent: React.FC = () => {
  useEffect(() => {
    const chartDom = document.getElementById('main')!;
    const myChart = echarts.init(chartDom);

    // Data for gauge readings (ensure these are correct for your chart)
    const option: echarts.EChartsOption = {
      backgroundColor: '#000',
      tooltip: {
        formatter: '{a} <br/>{b} : {c}%'
      },
      toolbox: {
        feature: {
          restore: {},
          saveAsImage: {}
        }
      },
      series: [
        {
          name: 'gauge 0',
          type: 'gauge',
          min: -200,
          max: 250,
          startAngle: -30,
          endAngle: -315,
          splitNumber: 9,
          radius: '50%', // Increased the radius to 50%
          center: ['21%', '55%'],
          axisLine: {
            lineStyle: {
              color: [[1, '#AE96A6']]
            }
          },
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: false
          },
          anchor: {},
          pointer: {
            show: true
          },
          detail: {
            show: true,
            formatter: '{value} km/h',
            fontSize: 18,
            color: '#fff',
          },
          title: {
            fontSize: 12,
            fontWeight: 800,
            fontFamily: 'Arial',
            color: '#fff',
            offsetCenter: [0, '-60%']
          },
          progress: {
            show: true,
            width: 3,
            itemStyle: {
              color: '#fff'
            }
          },
          data: [
            {
              value: 120,
              name: 'Start Speed'
            }
          ]
        },
        {
          name: 'gauge 1',
          type: 'gauge',
          min: 0,
          max: 250,
          startAngle: -140,
          endAngle: -305,
          splitNumber: 5,
          radius: '70%',
          center: ['80%', '55%'],
          axisLine: {
            lineStyle: {
              color: [[1, '#AE96A6']]
            }
          },
          splitLine: {
            distance: -7,
            length: 12,
            lineStyle: {
              color: '#fff',
              width: 4
            }
          },
          axisTick: {
            distance: -8,
            length: 8,
            lineStyle: {
              color: '#fff',
              width: 2
            }
          },
          axisLabel: {
            distance: 14,
            fontSize: 18,
            fontWeight: 800,
            fontFamily: 'Arial',
            color: '#fff'
          },
          anchor: {},
          pointer: {
            show: true,
            icon: 'path://M-36.5,23.9L-41,4.4c-0.1-0.4-0.4-0.7-0.7-0.7c-0.5-0.1-1.1,0.2-1.2,0.7l-4.5,19.5c0,0.1,0,0.1,0,0.2v92.3c0,0.6,0.4,1,1,1h9c0.6,0,1-0.4,1-1V24.1C-36.5,24-36.5,23.9-36.5,23.9z M-39.5,114.6h-5v-85h5V114.6z',
            width: 5,
            length: '40%',
            offsetCenter: [0, '-58%'],
            itemStyle: {
              color: '#f00',
              shadowColor: 'rgba(255, 0, 0)',
              shadowBlur: 5,
              shadowOffsetY: 2
            }
          },
          title: {
            color: '#fff',
            fontSize: 14,
            fontWeight: 800,
            fontFamily: 'Arial',
            offsetCenter: [0, 0]
          },
          detail: {
            show: true,
            formatter: '{value} km/h',
            fontSize: 16,
            color: '#fff',
          },
          data: [
            {
              value: 180,
              name: 'Current Speed'
            }
          ]
        },
        {
          name: 'gauge 2',
          type: 'gauge',
          min: 0,
          max: 8,
          z: 10,
          startAngle: 210,
          endAngle: -30,
          splitNumber: 8,
          radius: '90%', // Increased the radius to 60%
          center: ['50%', '50%'],
          axisLine: {
            show: true,
            lineStyle: {
              width: 0,
              color: [
                [0.825, '#fff'],
                [1, '#f00']
              ]
            }
          },
          splitLine: {
            distance: 20,
            length: 15,
            lineStyle: {
              color: 'auto',
              width: 4,
              shadowColor: 'rgba(255, 255, 255, 0.5)',
              shadowBlur: 15,
              shadowOffsetY: -10
            }
          },
          axisTick: {
            distance: 20,
            length: 8,
            lineStyle: {
              color: 'auto',
              width: 2,
              shadowColor: 'rgba(255, 255, 255)',
              shadowBlur: 10,
              shadowOffsetY: -10
            }
          },
          axisLabel: {
            distance: 10,
            fontSize: 35,
            fontWeight: 800,
            fontFamily: 'Arial',
            color: '#fff'
          },
          anchor: {},
          pointer: {
            show: true,
            icon: 'path://M-36.5,23.9L-41,4.4c-0.1-0.4-0.4-0.7-0.7-0.7c-0.5-0.1-1.1,0.2-1.2,0.7l-4.5,19.5c0,0.1,0,0.1,0,0.2v92.3c0,0.6,0.4,1,1,1h9c0.6,0,1-0.4,1-1V24.1C-36.5,24-36.5,23.9-36.5,23.9z M-39.5,114.6h-5v-85h5V114.6z',
            width: 10,
            offsetCenter: [0, '-10%'],
            length: '75%',
            itemStyle: {
              color: '#f00',
              shadowColor: 'rgba(255, 0, 0)',
              shadowBlur: 5,
              shadowOffsetY: 3
            }
          },
          title: {
            color: '#fff',
            fontSize: 12,
            fontWeight: 800,
            fontFamily: 'Arial',
            offsetCenter: [0, '-50%']
          },
          data: [
            {
              value: 6,
              name: 'Petrol Reading'
            }
          ],
          detail: {
            show: true,
            formatter: '{value} L',
            fontSize: 16,
            color: '#fff',
          }
        }
      ]
    };

    myChart.setOption(option);

    // Optional: Add window resize handling
    window.addEventListener('resize', () => {
      myChart.resize();
    });

    return () => {
      myChart.dispose();
      window.removeEventListener('resize', () => myChart.resize());
    };
  }, []);

  return <div id="main" style={{ width: '70%', height: '400px' }}></div>;
};

export default EChartsComponent;
