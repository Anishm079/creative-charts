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
      type: "radial-gauge",
      container: document.getElementById("myChart"),
      background: {
        fill: "transparent",
      },
      value: 89,
      segmentation: {
        interval: {
          count: 4,
        },
        spacing: 4,
      },
      innerRadiusRatio: 0.7,
      scale: {
        min: 0,
        max: 100,
        interval: {
          step: 10,
        },
        label: {
          formatter: ({ index }) => {
            return `${performanceStages[index]}`;
          },
          fontFamily: "Architects Daughter",
        },
      },
      bar: {
        fillMode: "discrete",
      },
      label: {
        fontSize: 20,
        fontFamily: "Architects Daughter",
      },
      secondaryLabel: {
        text: "Grid Performance",
        fontFamily: "Architects Daughter",
      },
    };

    AgCharts.createGauge(options);
  }, []);

  return (
    <div
      id="myChart"
      style={{
        width: "90dvw",
        height: "90dvh",
        background:
          "linear-gradient(135deg,  #F08080, #E6E6FA, #FFDAB9, #87CEFA,  #98FB98, #FFE4E1, #FAFAD2, #BA55D3,  #B0E0E6, #D8BFD8)",
      }}
    ></div>
  );
};

export default ChartComponent;
