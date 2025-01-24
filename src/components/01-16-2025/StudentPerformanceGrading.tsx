import * as React from "react";
import * as echarts from "echarts";

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
        value: 20,
        name: "Good",
        title: {
          offsetCenter: ["-40%", "80%"],
        },
        detail: {
          offsetCenter: ["-40%", "95%"],
        },
      },
      {
        value: 40,
        name: "Better",
        title: {
          offsetCenter: ["0%", "80%"],
        },
        detail: {
          offsetCenter: ["0%", "95%"],
        },
      },
      {
        value: 60,
        name: "Perfect",
        title: {
          offsetCenter: ["40%", "80%"],
        },
        detail: {
          offsetCenter: ["40%", "95%"],
        },
      },
    ];

    const option: echarts.EChartsOption = {
      series: [
        {
          type: "gauge",
          anchor: {
            show: true,
            showAbove: true,
            size: 18,
            itemStyle: {
              color: "#FAC858",
            },
          },
          pointer: {
            icon: "path://M2.9,0.7L2.9,0.7c1.4,0,2.6,1.2,2.6,2.6v115c0,1.4-1.2,2.6-2.6,2.6l0,0c-1.4,0-2.6-1.2-2.6-2.6V3.3C0.3,1.9,1.4,0.7,2.9,0.7z",
            width: 8,
            length: "80%",
            offsetCenter: [0, "8%"],
          },
          progress: {
            show: true,
            overlap: true,
            roundCap: true,
          },
          axisLine: {
            roundCap: true,
          },
          data: gaugeData,
          title: {
            fontSize: 14,
          },
          detail: {
            width: 40,
            height: 14,
            fontSize: 14,
            color: "#fff",
            backgroundColor: "inherit",
            borderRadius: 3,
            formatter: "{value}%",
          },
        },
      ],
    };
    gaugeData[0].value = 50;
    gaugeData[1].value = 75;
    gaugeData[2].value = 100;
    myChart.setOption({
      series: [
        {
          data: gaugeData,
        },
      ],
    });

    option && myChart.setOption(option);
  }

  render() {
    return (
      <div style={{ width: "100%", height: "100%", marginTop: "20px" }}>
        <div
          id="main"
          ref={this.chartRef}
          style={{ width: "100%", height: "100%" }}
        ></div>
      </div>
    );
  }
}

export default GaugeChart;
