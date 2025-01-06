import React, { useEffect } from "react";
import { AgChartOptions, AgCharts } from "ag-charts-community";

const ChartComponent: React.FC = () => {
  useEffect(() => {
    const options: AgChartOptions = {
      container: document.getElementById("myChart"),
      data: getData(),
      title: {
        text: "Software & Hardware Revenues",
        fontFamily: '"Dancing Script", serif',
      },
      background:{
        fill:"transparent"
      },
      subtitle: {
        text: "Millions USD",
        fontFamily: '"Dancing Script", serif',
      },
      series: [
        {
          type: "radar-area",
          angleKey: "quarter",
          radiusKey: "software",
          radiusName: "Software",
          fillOpacity: 0.1,
          label: {
            enabled: true,
            fontFamily: '"Dancing Script", serif',
          },
          marker: {
            enabled: true,
          },
        },
        {
          type: "radar-area",
          angleKey: "quarter",
          radiusKey: "hardware",
          radiusName: "Hardware",
          fillOpacity: 0.3,
          label: {
            enabled: true,
            fontFamily: '"Dancing Script", serif',
          },
          marker: {
            enabled: true,
          },
        },
      ],
      axes: [
        {
          type: "radius-number",
          shape: "circle",
          interval: { step: 0.1 },
          label: {
            enabled: false,
            fontFamily: '"Dancing Script", serif',
          },
        },
        {
          type: "angle-category",
          line: {
            enabled: false,
            fontFamily: '"Dancing Script", serif',
          },
          label: {
            enabled: false,
            fontFamily: '"Dancing Script", serif',
          },
          gridLine: {
            enabled: true,
            fontFamily: '"Dancing Script", serif',
          },
        },
      ],
      fontFamily: '"Dancing Script", serif',
      backgroundColor: "transparent",
    };

    AgCharts.create(options);
  }, []);

  return (
    <div
      id="myChart"
      style={{
        height: "90dvh",
        width: "90dvw",
        fontFamily: '"Dancing Script", serif',
        background: "linear-gradient(45deg, #ff00b3, #00b3ff, #7a5fff)",
      }}
    />
  );
};

export default ChartComponent;

function getData() {
  // Placeholder function for fetching data
  return [
    {
      quarter: `Q1'22`,
      software: 4.35,
      hardware: 2.14,
      services: 3.91,
    },
    {
      quarter: `Q2'22`,
      software: 4.28,
      hardware: 3.13,
      services: 3.04,
    },
    {
      quarter: `Q3'22`,
      software: 4.14,
      hardware: 3.34,
      services: 3.18,
    },
    {
      quarter: `Q4'22`,
      software: 3.48,
      hardware: 3.56,
      services: 3.61,
    },
    {
      quarter: `Q1'23`,
      software: 3.35,
      hardware: 3.14,
      services: 3.91,
    },
    {
      quarter: `Q2'23`,
      software: 3.28,
      hardware: 3.13,
      services: 3.54,
    },
    {
      quarter: `Q3'23`,
      software: 3.14,
      hardware: 2.84,
      services: 3.18,
    },
    {
      quarter: `Q4'23`,
      software: 2.48,
      hardware: 2.46,
      services: 3.21,
    },
  ];
}
