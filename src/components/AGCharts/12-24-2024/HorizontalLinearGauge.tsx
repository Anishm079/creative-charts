import React, { useEffect } from "react";
import { AgGaugeOptions, AgCharts } from "ag-charts-community";

const ChartComponent: React.FC = () => {
  useEffect(() => {
    const performanceStages = [
      "VERY POOR",
      "POOR",
      "AVERAGE",
      "GOOD",
      "VERY GOOD",
      "EXCELLENT",
    ].flatMap((item) => ["", item]);

    const options: AgGaugeOptions = {
      type: "linear-gauge",
      container: document.getElementById("myChart"),
      direction: "horizontal",
      title: {
        text: "Performance Level",
        fontFamily: "Architects Daughter",
      },
      background:{
        fill:"transparent"
      },
      value: 55,
      segmentation: {
        interval: {
          count: 4,
        },
        spacing: 4,
      },
      scale: {
        min: 0,
        max: 100,
        interval: {
          step: 10,
        },
        label: {
          placement: "after",
          formatter: ({ index }) => {
            return `${performanceStages[index]}`;
          },
          fontFamily: "Architects Daughter",
        },
      },
      bar: {
        fillMode: "discrete",
      },
      targets: [
        {
          value: 80,
          text: "Target",
          placement: "before",
          shape: "circle",
          fillOpacity: 0.3,
          label: {
            fontFamily: "Architects Daughter",
          },
        },
      ],
      label: {
        fontSize: 14,
        placement: "inside-end",
        fontFamily: "Architects Daughter",
      },
    };

    AgCharts.createGauge(options);
  }, []);

  return <div id="myChart" style={{ width: "90dvw", height: "90dvh", background:"linear-gradient(45deg, #ff6b6b, #f7b7a3)" }}></div>;
};

export default ChartComponent;
