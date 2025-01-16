import * as React from 'react';
import * as echarts from 'echarts';

class FunnelChart extends React.Component {
  chartRef: React.RefObject<HTMLDivElement>;

  constructor(props: any) {
    super(props);
    this.chartRef = React.createRef();
  }

  componentDidMount() {
    const chartDom = this.chartRef.current as HTMLDivElement;
    const myChart = echarts.init(chartDom);
    const option: echarts.EChartsOption = {
      title: {
        text: 'Funnel'
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c}%'
      },
      toolbox: {
        feature: {
          dataView: { readOnly: false },
          restore: {},
          saveAsImage: {}
        }
      },
      legend: {
        data: ['Show', 'Click', 'Visit', 'Inquiry', 'Order'],
        borderColor:"#fff",
        textStyle:{
          color: '#fff'
        }
      },
      series: [
        {
          name: 'Expected',
          type: 'funnel',
          left: '10%',
          width: '80%',
          label: {
            formatter: '{b}Expected',
            borderColor:"#000",
            color:"#fff"
          },
          labelLine: {
            show: false
          },
          itemStyle: {
            opacity: 0.7
          },
          emphasis: {
            label: {
              position: 'inside',
              formatter: '{b}Expected: {c}%'
            }
          },
          data: [
            { value: 60, name: 'Visit' },
            { value: 40, name: 'Inquiry' },
            { value: 20, name: 'Order' },
            { value: 80, name: 'Click' },
            { value: 100, name: 'Show' }
          ]
        },
        {
          name: 'Actual',
          type: 'funnel',
          left: '10%',
          width: '80%',
          maxSize: '80%',
          label: {
            position: 'inside',
            formatter: '{c}%',
            color: '#ffffff'
          },
          itemStyle: {
            opacity: 0.5,
            borderColor: '#000000',
            borderWidth: 2
          },
          emphasis: {
            label: {
              position: 'inside',
              formatter: '{b}Actual: {c}%'
            }
          },
          data: [
            { value: 30, name: 'Visit' },
            { value: 10, name: 'Inquiry' },
            { value: 5, name: 'Order' },
            { value: 50, name: 'Click' },
            { value: 80, name: 'Show' }
          ],
          z: 100
        }
      ]
    };

    option && myChart.setOption(option);
  }

  render() {
    return <div id="main" ref={this.chartRef} style={{ width: '90%', height: '80%' }}></div>;
  }
}

export default FunnelChart;
