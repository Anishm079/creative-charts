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
    const option: echarts.EChartsOption = {
      series: [
        {
          type: 'gauge',
          center: ['25%', '40%'],
          startAngle: 180,
          endAngle: 0,
          min: 0,
          max: 50,
          splitNumber: 10,
          itemStyle: {
            color: '#87CEEB'
          },
          progress: {
            show: true,
            width: 15
          },
          pointer: {
            show: false
          },
          axisLine: {
            lineStyle: {
              width: 15,
              color: [[0.3, '#87CEEB'], [0.7, '#FFD700'], [1, '#32CD32']]
            }
          },
          axisTick: {
            distance: -20,
            splitNumber: 5,
            lineStyle: {
              width: 2,
              color: '#999'
            }
          },
          splitLine: {
            distance: -25,
            length: 10,
            lineStyle: {
              width: 3,
              color: '#999'
            }
          },
          axisLabel: {
            distance: -10,
            color: '#999',
            fontSize: 12
          },
          anchor: {
            show: false
          },
          title: {
            show: true,
            offsetCenter: [0, '40%'],
            fontSize: 12,
            formatter: 'Chicago',
            color: 'inherit'
          },
          detail: {
            valueAnimation: true,
            width: '60%',
            lineHeight: 20,
            borderRadius: 8,
            offsetCenter: [0, '-20%'],
            fontSize: 20,
            fontWeight: 'bolder',
            formatter: '{value} °C',
            color: 'inherit'
          },
          data: [
            {
              value: 22
            }
          ]
        },
        {
          type: 'gauge',
          center: ['75%', '40%'],
          startAngle: 180,
          endAngle: 0,
          min: 0,
          max: 50,
          splitNumber: 10,
          itemStyle: {
            color: '#32CD32'
          },
          progress: {
            show: true,
            width: 15
          },
          pointer: {
            show: false
          },
          axisLine: {
            lineStyle: {
              width: 15,
              color: [[0.3, '#32CD32'], [0.7, '#FFD700'], [1, '#32CD32']]
            }
          },
          axisTick: {
            distance: -20,
            splitNumber: 5,
            lineStyle: {
              width: 2,
              color: '#999'
            }
          },
          splitLine: {
            distance: -25,
            length: 10,
            lineStyle: {
              width: 3,
              color: '#999'
            }
          },
          axisLabel: {
            distance: -10,
            color: '#999',
            fontSize: 12
          },
          anchor: {
            show: false
          },
          title: {
            show: true,
            offsetCenter: [0, '40%'],
            fontSize: 12,
            formatter: 'Houston',
            color: 'inherit'
          },
          detail: {
            valueAnimation: true,
            width: '60%',
            lineHeight: 20,
            borderRadius: 8,
            offsetCenter: [0, '-20%'],
            fontSize: 20,
            fontWeight: 'bolder',
            formatter: '{value} °C',
            color: 'inherit'
          },
          data: [
            {
              value: 30
            }
          ]
        },
        {
          type: 'gauge',
          center: ['25%', '80%'],
          startAngle: 180,
          endAngle: 0,
          min: 0,
          max: 50,
          splitNumber: 10,
          itemStyle: {
            color: '#87CEEB'
          },
          progress: {
            show: true,
            width: 15
          },
          pointer: {
            show: false
          },
          axisLine: {
            lineStyle: {
              width: 15,
              color: [[0.3, '#87CEEB'], [0.7, '#FFD700'], [1, '#32CD32']]
            }
          },
          axisTick: {
            distance: -20,
            splitNumber: 5,
            lineStyle: {
              width: 2,
              color: '#999'
            }
          },
          splitLine: {
            distance: -25,
            length: 10,
            lineStyle: {
              width: 3,
              color: '#999'
            }
          },
          axisLabel: {
            distance: -10,
            color: '#999',
            fontSize: 12
          },
          anchor: {
            show: false
          },
          title: {
            show: true,
            offsetCenter: [0, '40%'],
            fontSize: 12,
            formatter: 'Chicago',
            color: 'inherit'
          },
          detail: {
            valueAnimation: true,
            width: '60%',
            lineHeight: 20,
            borderRadius: 8,
            offsetCenter: [0, '-20%'],
            fontSize: 20,
            fontWeight: 'bolder',
            formatter: '{value} °C',
            color: 'inherit'
          },
          data: [
            {
              value: 22
            }
          ]
        },
        {
          type: 'gauge',
          center: ['75%', '80%'],
          startAngle: 180,
          endAngle: 0,
          min: 0,
          max: 50,
          splitNumber: 10,
          itemStyle: {
            color: '#32CD32'
          },
          progress: {
            show: true,
            width: 15
          },
          pointer: {
            show: false
          },
          axisLine: {
            lineStyle: {
              width: 15,
              color: [[0.3, '#32CD32'], [0.7, '#FFD700'], [1, '#32CD32']]
            }
          },
          axisTick: {
            distance: -20,
            splitNumber: 5,
            lineStyle: {
              width: 2,
              color: '#999'
            }
          },
          splitLine: {
            distance: -25,
            length: 10,
            lineStyle: {
              width: 3,
              color: '#999'
            }
          },
          axisLabel: {
            distance: -10,
            color: '#999',
            fontSize: 12
          },
          anchor: {
            show: false
          },
          title: {
            show: true,
            offsetCenter: [0, '40%'],
            fontSize: 12,
            formatter: 'Houston',
            color: 'inherit'
          },
          detail: {
            valueAnimation: true,
            width: '60%',
            lineHeight: 20,
            borderRadius: 8,
            offsetCenter: [0, '-20%'],
            fontSize: 20,
            fontWeight: 'bolder',
            formatter: '{value} °C',
            color: 'inherit'
          },
          data: [
            {
              value: 30
            }
          ]
        }
      ]
    };

    option && myChart.setOption(option);
  }

  render() {
    return (
      <div style={{ width: '100%', height: '100%', marginTop: '20px', position: 'relative' }}>
        <div style={{ textAlign: 'center', marginBottom: '10px', zIndex: 10, position: 'absolute', left: '25%', top: '10%' }}>New York</div>
        <div style={{ textAlign: 'center', marginBottom: '10px', zIndex: 10, position: 'absolute', left: '75%', top: '10%' }}>Los Angeles</div>
        <div style={{ textAlign: 'center', marginBottom: '10px', zIndex: 10, position: 'absolute', left: '25%', top: '50%' }}>Chicago</div>
        <div style={{ textAlign: 'center', marginBottom: '10px', zIndex: 10, position: 'absolute', left: '75%', top: '50%' }}>Houston</div>
        <div id="main" ref={this.chartRef} style={{ width: '100%', height: '100%' }}></div>
      </div>
    );
  }
}

export default GaugeChart;
