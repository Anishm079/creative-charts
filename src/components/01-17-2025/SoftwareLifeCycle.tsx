import * as echarts from 'echarts';
import React, { useEffect } from 'react';

const EnhancedGanttChart: React.FC = () => {
  useEffect(() => {
    const chartDom = document.getElementById('main') as HTMLElement;
    const myChart = echarts.init(chartDom);
    let option: echarts.EChartsOption;

    const data = [
      { name: 'Task 1', start: '2023-01-01', end: '2023-01-10', progress: 60, description: 'Design Phase' },
      { name: 'Task 2', start: '2023-01-05', end: '2023-01-15', progress: 45, description: 'Development Phase' },
      { name: 'Task 3', start: '2023-01-10', end: '2023-01-20', progress: 80, description: 'Testing Phase' },
      { name: 'Task 4', start: '2023-01-15', end: '2023-01-25', progress: 30, description: 'Deployment Phase' },
    ];

    const categories = data.map(task => task.name);
    const startDates = data.map(task => task.start);
    const endDates = data.map(task => task.end);
    const progresses = data.map(task => task.progress);

    option = {
      backgroundColor: '#f4f4f4',
      tooltip: {
        trigger: 'item',
        formatter: function (params) {
          const task = data[params.dataIndex];
          return `
            <b>${task.name}</b><br>
            <b>Description:</b> ${task.description}<br>
            <b>Start:</b> ${task.start}<br>
            <b>End:</b> ${task.end}<br>
            <b>Progress:</b> ${task.progress}%
          `;
        },
      },
      grid: {
        top: 80,
        bottom: 50,
      },
      xAxis: {
        type: 'time',
        boundaryGap: false,
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
      yAxis: {
        type: 'category',
        data: categories,
        axisLine: {
          lineStyle: {
            color: '#333',
          },
        },
        splitLine: {
          show: false,
        },
      },
      series: [
        {
          name: 'Tasks',
          type: 'custom',
          renderItem: function (params, api) {
            const categoryIndex = api.value(0);
            const start = api.coord([api.value(1), categoryIndex]);
            const end = api.coord([api.value(2), categoryIndex]);
            const width = end[0] - start[0];
            const height = api.size([0, 1])[1] * 0.8;

            const progressWidth = width * (api.value(3) / 100);

            return {
              type: 'group',
              children: [
                {
                  type: 'rect',
                  shape: {
                    x: start[0],
                    y: start[1] - height / 2,
                    width: width,
                    height: height,
                  },
                  style: {
                    fill: 'rgba(51, 204, 204, 0.5)',
                  },
                },
                {
                  type: 'rect',
                  shape: {
                    x: start[0],
                    y: start[1] - height / 2,
                    width: progressWidth,
                    height: height,
                  },
                  style: {
                    fill: 'rgba(51, 204, 204, 0.8)',
                  },
                },
                {
                  type: 'text',
                  style: {
                    text: `${api.value(3)}%`,
                    x: start[0] + progressWidth / 2,
                    y: start[1],
                    fill: '#fff',
                    textAlign: 'center',
                    textVerticalAlign: 'middle',
                  },
                },
                {
                  type: 'text',
                  style: {
                    text: `${api.value(0)}: ${api.value(4)}`,
                    x: start[0] + width / 2,
                    y: start[1] - height / 2 - 10,
                    fill: '#333',
                    textAlign: 'center',
                    textVerticalAlign: 'bottom',
                  },
                },
              ],
            };
          },
          dimensions: ['name', 'start', 'end', 'progress', 'description'],
          encode: {
            x: ['start', 'end'],
            y: 'name',
            tooltip: [0, 1, 2, 3, 4],
          },
          data: data.map(task => [task.name, task.start, task.end, task.progress, task.description]),
        },
      ],
    };

    option && myChart.setOption(option);

  }, []);

  return <div id="main" style={{ width: '800px', height: '600px' }}></div>;
};

export default EnhancedGanttChart;
