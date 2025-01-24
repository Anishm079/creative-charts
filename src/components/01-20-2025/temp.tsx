import React, { useEffect } from 'react';
import * as echarts from 'echarts';

const PopulationPyramidRussia: React.FC = () => {
  useEffect(() => {
    const chartDom = document.getElementById('main')!;
    const myChart = echarts.init(chartDom);

    const option: echarts.EChartsOption = {
      title: {
        text: 'Russia Population Pyramid (2025 Estimate)',
        subtext: 'Data Source: United Nations Population Division',
        left: 'center',
        textStyle: {
          fontSize: 18,
          color: '#fff',
        },
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
        formatter: (params: any) => {
          const male = params[0].value;
          const female = -params[1].value;
          return `
            Age Group: ${params[0].name}<br/>
            Male: ${Math.abs(male)}M<br/>
            Female: ${Math.abs(female)}M
          `;
        },
      },
      legend: {
        top: 'bottom',
        data: ['Male', 'Female'],
        textStyle: {
          color: '#fff',
        },
      },
      grid: {
        top: '12%',
        bottom: '15%',
        left: '15%',
        right: '15%',
      },
      xAxis: [
        {
          type: 'value',
          name: 'Population (Millions)',
          min: -60,
          max: 60,
          axisLabel: {
            formatter: (value: number) => `${Math.abs(value)}M`,
            color: '#fff',
          },
        },
      ],
      yAxis: [
        {
          type: 'category',
          data: [
            '85+',
            '80-84',
            '75-79',
            '70-74',
            '65-69',
            '60-64',
            '55-59',
            '50-54',
            '45-49',
            '40-44',
            '35-39',
            '30-34',
            '25-29',
            '20-24',
            '15-19',
            '10-14',
            '5-9',
            '0-4',
          ],
          inverse: true,
          axisTick: {
            alignWithLabel: true,
          },
          axisLabel: {
            color: '#fff',
          },
        },
      ],
      series: [
        {
          name: 'Male',
          type: 'bar',
          stack: 'Population',
          itemStyle: {
            color: '#2a86d0',
            borderRadius: 10,
            opacity: 0.8,
          },
          emphasis: {
            itemStyle: {
              color: '#1a69b0',
            },
          },
          data: [
            -16.5, -19.3, -22.0, -24.2, -26.3, -28.5, -30.0, -31.0, -32.1, -33.0,
            -33.8, -34.5, -35.1, -35.7, -36.2, -36.5, -36.8,
          ],
        },
        {
          name: 'Female',
          type: 'bar',
          stack: 'Population',
          itemStyle: {
            color: '#e74c3c',
            borderRadius: 10,
            opacity: 0.8,
          },
          emphasis: {
            itemStyle: {
              color: '#c0392b',
            },
          },
          data: [
            15.0, 17.2, 19.5, 21.3, 23.1, 25.0, 26.5, 27.8, 29.0, 29.8, 30.6, 31.3,
            31.8, 32.3, 32.6, 32.9, 33.1,
          ],
        },
      ],
    };

    myChart.setOption(option);

    return () => {
      myChart.dispose();
    };
  }, []);

  return <div id="main" style={{ width: '70%', height: '600px', backgroundColor: '#2f4f4f' }} />;
};

export default PopulationPyramidRussia;
