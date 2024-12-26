import React, { useEffect } from "react";
import { AgGaugeOptions, AgCharts } from "ag-charts-community";

const ChartComponent: React.FC = () => {
  useEffect(() => {
    const options: AgGaugeOptions = {
      type: "linear-gauge",
      container: document.getElementById("myChart"),
      theme: {
        overrides: {
          "linear-gauge": {
            targets: {
              placement: "before",
              size: 10,
              fillOpacity: 0,
              shape: "circle",
              strokeWidth: 2,
              stroke: "orange",
            },
          },
        },
      },
      title: {
        text: "Assessment of Chemical Concentration Levels",
        fontFamily: "Architects Daughter",
        spacing: 50,
      },
      background:{
        fill:"transparent"
      },
      value: 84,
      segmentation: {
        interval: {
          count: 2,
        },
        spacing: 4,
      },
      cornerRadius: 50,
      scale: {
        min: 0,
        max: 100,
        interval: {
          step: 33,
        },
        label: {
          enabled: false,
        },
      },
      bar: {
        fillMode: "discrete",
        strokeWidth: 1,
        strokeOpacity: 0.2,
        fillOpacity: 0.7,
      },
      targets: [
        {
          value: 20,
          text: "Low 0-20 mol/L",
          label: {
            fontFamily: "Architects Daughter",
          },
        },
        {
          value: 33,
          text: "Suboptimal Concentration 21-33 mol/L",
          label: {
            fontFamily: "Architects Daughter",
          },
        },
        {
          value: 65,
          text: "Operational Range 34-65 mol/L",
          label: {
            fontFamily: "Architects Daughter",
          },
        },
        {
          value: 80,
          text: "Optimal 66-80 mol/L",
          stroke: "green",
          label: {
            fontFamily: "Architects Daughter",
          },
        },
        {
          value: 89,
          text: "Threshold Limit >80 mol/L",
          stroke: "red",
          placement: "after",
          shape: "line",
          size: 20,
          label: {
            fontFamily: "Architects Daughter",
          },
        },
      ],
      label: {
        enabled: false,
      },
    };

    AgCharts.createGauge(options);
  }, []);

  return <div id="myChart" style={{ width: "90dvw", height: "90dvh", background:"linear-gradient(to right, #9d50bb, #6e48aa)" }}></div>;
};

export default ChartComponent;
