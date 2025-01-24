import * as React from 'react';
import * as echarts from 'echarts';

class GaugeChart extends React.Component {
  chartRef: React.RefObject<HTMLDivElement>;

  constructor(props: any) {
    super(props);
    this.chartRef = React.createRef();
  }

  componentDidMount() {
    const chartDom = this.chartRef.current as HTMLDivElement;
    const myChart = echarts.init(chartDom);

    const gaugeData = [
      {
        value: 85,
        name: 'Better',
        title: {
          offsetCenter: ['0%', '-30%']
        },
        detail: {
          valueAnimation: true,
          offsetCenter: ['0%', '-20%']
        }
      },
      {
        value: 75,
        name: 'Good',
        title: {
          offsetCenter: ['0%', '0%']
        },
        detail: {
          valueAnimation: true,
          offsetCenter: ['0%', '10%']
        }
      },
      {
        value: 60,
        name: 'Commonly',
        title: {
          offsetCenter: ['0%', '30%']
        },
        detail: {
          valueAnimation: true,
          offsetCenter: ['0%', '40%']
        }
      }
    ];

    const option: echarts.EChartsOption = {
      series: [
        {
          type: 'gauge',
          startAngle: 90,
          endAngle: -270,
          pointer: {
            show: true,
            length: '70%',
            width: 5,
            itemStyle: {
              color: '#FF8C00'
            }
          },
          progress: {
            show: true,
            overlap: true,
            roundCap: true,
            clip: false,
            itemStyle: {
              borderWidth: 1,
              borderColor: '#464646'
            },
            width: 20  // Adjusted width for a bolder look
          },
          axisLine: {
            lineStyle: {
              width: 20,  // Adjusted width for a bolder look
              color: [
                [0.3, '#FF4500'],
                [0.7, '#FFD700'],
                [1, '#32CD32']
              ]
            }
          },
          splitLine: {
            show: true,
            distance: -20,
            length: 15,
            lineStyle: {
              width: 4,
              color: '#999'
            }
          },
          axisTick: {
            show: true,
            distance: -15,
            length: 8,
            lineStyle: {
              color: '#999',
              width: 2
            }
          },
          axisLabel: {
            show: true,
            distance: 25,
            fontSize: 12,
            color: '#000000'
          },
          data: gaugeData,
          title: {
            fontSize: 25,
            color: '#000000',
            overflow: 'breakAll',
            align: 'left',
            position:"right",
            lineHeight: 20,
            rotate: 10,
          },
          detail: {
            width: 50,
            height: 14,
            fontSize: 16,
            color: '#000',
            borderColor: '#333',
            borderRadius: 20,
            borderWidth: 1,
            formatter: '{value}%',
            backgroundColor: 'rgba(0, 0, 0, 0.1)'
          }
        }
      ]
    };

    option && myChart.setOption(option);
  }

  render() {
    return (
      <div style={{ width: '100%', height: '100%', marginTop: '20px' }}>
        <div id="main" ref={this.chartRef} style={{ width: '100%', height: '100%' }}></div>
      </div>
    );
  }
}

export default GaugeChart;
