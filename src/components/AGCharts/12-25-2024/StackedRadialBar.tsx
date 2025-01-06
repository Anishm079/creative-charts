import React, { useEffect } from "react";
import { AgChartOptions, AgCharts } from "ag-charts-community";

const ChartComponent: React.FC = () => {
  useEffect(() => {
    const options: AgChartOptions = {
      container: document.getElementById("myChart"),
      data: getData(),
      title: {
        text: "Revenue by Product Category",
        fontFamily: '"Dancing Script", serif',
      },
      background:{
        fill: "transparent"
      },
      subtitle: {
        text: "Millions USD",
        fontFamily: '"Dancing Script", serif',
      },
      series: [
        {
          type: "radial-bar",
          radiusKey: "quarter",
          angleKey: "software",
          angleName: "Software",
          stacked: true,
          strokeWidth: 1,
          fillOpacity: 0.6,
          label: {
            fontFamily: '"Dancing Script", serif',
          },
          secondaryLabel: {
            fontFamily: '"Dancing Script", serif',
          },
        },
        {
          type: "radial-bar",
          radiusKey: "quarter",
          angleKey: "hardware",
          angleName: "Hardware",
          stacked: true,
          strokeWidth: 1,
          fillOpacity: 0.6,
          label: {
            fontFamily: '"Dancing Script", serif',
          },
          secondaryLabel: {
            fontFamily: '"Dancing Script", serif',
          },
        },
        {
          type: "radial-bar",
          radiusKey: "quarter",
          angleKey: "services",
          angleName: "Services",
          stacked: true,
          strokeWidth: 1,
          fillOpacity: 0.6,
          label: {
            fontFamily: '"Dancing Script", serif',
          },
          secondaryLabel: {
            fontFamily: '"Dancing Script", serif',
          },
        },
      ],
      axes: [
        {
          type: "radius-category",
          innerRadiusRatio: 0.1,
          paddingInner: 0.5,
          label: {
            enabled: false,
            fontFamily: '"Dancing Script", serif',
          },
          gridLine: {
            enabled: false,
          },
        },
        {
          type: "angle-number",
          line: {
            enabled: false,
            fontFamily: '"Dancing Script", serif',
          },
          label: {
            enabled: false,
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
        background: "linear-gradient(45deg, #e0c3fc, #8ec5fc)",
      }}
    />
  );
};

export default ChartComponent;

function getData() {
  // Placeholder function for fetching data
  return [
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