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
          progress: {
            show: true,
            width: 18
          },
          axisLine: {
            lineStyle: {
              width: 18
            }
          },
          color:"#a418ca",
          
          axisTick: {
            show: false
          },
          splitLine: {
            length: 15,
            lineStyle: {
              width: 2,
              color: '#ea7373'
            }
          },
          axisLabel: {
            distance: 25,
            color: '#ea7373',
            fontSize: 20
          },
          anchor: {
            show: true,
            showAbove: true,
            size: 25,
            itemStyle: {
              borderWidth: 10
            }
          },
          title: {
            show: false
          },
          detail: {
            valueAnimation: true,
            fontSize: 80,
            offsetCenter: [0, '70%'],
            color: '#ffffff'
          },
          data: [
            {
              value: 70
            }
          ]
        }
      ]
    };

    option && myChart.setOption(option);
  }

  render() {
    return <div id="main" ref={this.chartRef} style={{ width: '90%', height: '80%' }}></div>;
  }
}

export default GaugeChart;
