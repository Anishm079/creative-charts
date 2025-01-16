import * as React from "react";
import * as echarts from "echarts";

class FunnelChart extends React.Component {
  chartRef: React.RefObject<HTMLDivElement>;

  constructor(props: any) {
    super(props);
    this.chartRef = React.createRef();
  }

  componentDidMount() {
    const chartDom = this.chartRef.current;
    const myChart = echarts.init(chartDom as HTMLDivElement);
    const option = {
      title: {
        text: "Funnel Compare",
        subtext: "Fake Data",
        left: "left",
        top: "bottom",
      },
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c}%",
      },
      toolbox: {
        show: true,
        orient: "vertical",
        top: "center",
        feature: {
          dataView: { readOnly: false },
          restore: {},
          saveAsImage: {},
        },
      },
      legend: {
        orient: "vertical",
        left: "left",
        data: ["Prod A", "Prod B", "Prod C", "Prod D", "Prod E"],
      },
      series: [
        {
          name: "Funnel",
          type: "funnel",
          width: "40%",
          height: "45%",
          left: "5%",
          top: "50%",
          funnelAlign: "right",
          data: [
            { value: 150, name: "T-Shirts" },
            { value: 120, name: "Jeans" },
            { value: 75, name: "Jackets" },
            { value: 200, name: "Shoes" },
            { value: 180, name: "Hats" },
          ],
        },
        {
          name: "Pyramid",
          type: "funnel",
          width: "40%",
          height: "45%",
          left: "5%",
          top: "5%",
          sort: "ascending",
          funnelAlign: "right",
          data: [
            { value: 120, name: "Smartphones" },
            { value: 200, name: "Laptops" },
            { value: 50, name: "Tablets" },
            { value: 180, name: "Headphones" },
            { value: 250, name: "Smartwatches" },
          ],
        },
        {
          name: "Funnel",
          type: "funnel",
          width: "40%",
          height: "45%",
          left: "55%",
          top: "5%",
          funnelAlign: "left",
          data: [
            { value: 120, name: "T-Shirts" },
            { value: 80, name: "Jeans" },
            { value: 45, name: "Jackets" },
            { value: 150, name: "Shoes" },
            { value: 200, name: "Hats" },
          ],
        },
        {
          name: "Pyramid",
          type: "funnel",
          width: "40%",
          height: "45%",
          left: "55%",
          top: "50%",
          sort: "ascending",
          funnelAlign: "left",
          data: [
            { value: 90, name: "Smartphones" },
            { value: 150, name: "Laptops" },
            { value: 60, name: "Tablets" },
            { value: 200, name: "Headphones" },
            { value: 300, name: "Smartwatches" },
          ],
        },
      ],
    };

    option && myChart.setOption(option);
  }

  render() {
    return (
      <div
        id="main"
        ref={this.chartRef}
        style={{ width: "90%", height: "80%" }}
      ></div>
    );
  }
}

export default FunnelChart;
