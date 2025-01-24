import React, { useEffect } from 'react';
import * as echarts from 'echarts';

const GaugeChartComponent: React.FC = () => {
  useEffect(() => {
    const chartDom = document.getElementById('gaugeChart');
    if (chartDom) {
      const myChart = echarts.init(chartDom);

      const option = {
        title: {
          text: 'Temperature Gauge',
          subtext: 'Real-time temperature monitoring',
          left: 'center',
          top: '20px',
          textStyle: {
            fontSize: 24,
            fontWeight: 'bold',
            color: '#333',
          },
          subtextStyle: {
            fontSize: 16,
            color: '#666',
          },
        },
        tooltip: {
          formatter: '{a} <br/> {b}: {c}°C',
        },
        legend: {
          data: ['Cold', 'Normal', 'Hot'],
          bottom: '10px',
          left: 'center',
          textStyle: {
            rich: {
              a: {
                color: (name) => {
                    console.log(name)
                  const colorMap = {
                    'Cold': '#00bfff',
                    'Normal': '#32cd32',
                    'Hot': '#ff6347',
                  };
                  return colorMap[name];
                },
                fontSize: 16,
                fontWeight: 'bold',
              },
            },
          },
        },
        series: [
          {
            name: 'Temperature',
            type: 'gauge',
            radius: '80%',
            min: 0,
            max: 100,
            splitNumber: 5, // Number of intervals
            axisLine: {
              lineStyle: {
                width: 30,
                color: [
                  [0.25, '#00bfff'],  // Blue for Cold
                  [0.5, '#32cd32'],  // Green for Normal
                  [1, '#ff6347'],    // Red for Hot
                ],
                shadowColor: '#000', // Add shadow
                shadowBlur: 10,
              },
            },
            axisTick: {
              length: 15,
              lineStyle: {
                color: '#000000',
                width: 2,
              },
            },
            splitLine: {
              length: 25,
              lineStyle: {
                color: '#ffffff',
                width: 4,
                shadowColor: '#000', // Add shadow
                shadowBlur: 10,
              },
            },
            pointer: {
              width: 6,
              length: '80%',
              color: 'auto',
              shadowColor: '#000', // Add shadow
              shadowBlur: 5,
            },
            title: {
              fontSize: 18,
              color: '#000000',
            },
            detail: {
              formatter: '{value}°C',
              fontSize: 30,
              color: 'auto',
              fontWeight: 'bold',
            },
            axisLabel: {
              fontSize: 18, // Increase the font size of the labels
              color:"#000"
            },
            data: [
              {
                value: 15, // Example current temperature
                name: 'Current Temperature',
              },
            ],
          },
        ],
      };

      myChart.setOption(option);
    }

    // Cleanup the chart instance on component unmount
    return () => {
      if (chartDom) {
        echarts.dispose(chartDom);
      }
    };
  }, []);

  return (
    <div id="gaugeChart" style={{ width: '100%', height: '90%' }}></div>
  );
};

export default GaugeChartComponent;
