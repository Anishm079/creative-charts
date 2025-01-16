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
      tooltip: {
        formatter: '{a} <br/>{b} : {c}%'
      },
      color:"#fff",
      legend:{
        data:["Pressure"],
        textStyle:{
          color:"#fff"
        }
      },
      series: [
        {
          name: 'Pressure',
          type: 'gauge',
          detail: {
            formatter: '{value}',
            color:"#fff",
          },
          itemStyle:{
            color:"#fff"
          },
          color:"#fff",
          axisLabel:{
            color:"#fff"
          },
          data: [
            {
              value: 50,
              name: 'SCORE'
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
