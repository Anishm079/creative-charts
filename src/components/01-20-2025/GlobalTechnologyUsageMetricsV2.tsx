import React, { useEffect } from 'react';
import * as echarts from 'echarts';

type EChartsOption = echarts.EChartsOption;

const CustomizedRadarChart: React.FC = () => {
  useEffect(() => {
    const chartDom = document.getElementById('main') as HTMLElement;
    const myChart = echarts.init(chartDom);

    const option: EChartsOption = {
      color: ['#67F9D8', '#FFE434', '#56A3F1', '#FF917C'],
      title: {
        text: 'Global Technology Usage Metrics',
        left: 800,
      },
      legend: {
        top: 20,
      },
      radar: [
        {
          indicator: [
            { text: 'Cloud Adoption (max 100%)', max: 100 },
            { text: 'AI Integration (max 100%)', max: 100 },
            { text: 'IoT Deployment (max 100%)', max: 100 },
            { text: 'Cybersecurity Preparedness (max 100%)', max: 100 },
            { text: 'Remote Work Enablement (max 100%)', max: 100 },
          ],
          center: ['50%', '50%'],
          radius: 120,
          startAngle: 90,
          splitNumber: 4,
          shape: 'circle',
          axisName: {
            formatter: '【{value}】',
            color: '#428BD4',
          },
          splitArea: {
            areaStyle: {
              color: ['#77EADF', '#26C3BE', '#64AFE9', '#428BD4'],
              shadowColor: 'rgba(0, 0, 0, 0.2)',
              shadowBlur: 10,
            },
          },
          axisLine: {
            lineStyle: {
              color: 'rgba(211, 253, 250, 0.8)',
            },
          },
          splitLine: {
            lineStyle: {
              color: 'rgba(211, 253, 250, 0.8)',
            },
          },
        },
      ],
      series: [
        {
          type: 'radar',
          emphasis: {
            lineStyle: {
              width: 4,
            },
          },
          data: [
            {
              value: [85, 70, 60, 90, 75],
              name: 'Region A (Americas)',
            },
            {
              value: [70, 60, 50, 85, 65],
              name: 'Region B (Europe)',
              areaStyle: {
                color: 'rgba(255, 228, 52, 0.6)',
              },
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

export default CustomizedRadarChart;
