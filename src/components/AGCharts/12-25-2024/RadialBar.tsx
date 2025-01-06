import React, { useEffect } from "react";
import { AgChartOptions, AgCharts } from "ag-charts-community";

const ChartComponent: React.FC = () => {
  useEffect(() => {
    const options: AgChartOptions = {
      container: document.getElementById("myChart"),
      data: getData(),
      background:{
        fill: "transparent"
      },
      title: {
        text: "Services Revenue",
        fontFamily: '"Dancing Script", serif',
      },
      subtitle: {
        text: "Millions USD",
        fontFamily: '"Dancing Script", serif',
      },
      series: [
        {
          type: "radial-bar",
          radiusKey: "quarter",
          angleKey: "services",
          angleName: "Services",
          stacked: true,
          fillOpacity: 0.8,
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
          innerRadiusRatio: 0,
          paddingOuter: 0.2,
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
          startAngle: 135,
          endAngle: 360,
          interval: {
            step: 0.2,
          },
          gridLine: {
            enabled: true,
          },
          label: {
            formatter: ({ value }) => value.toFixed(1),
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
        background: "linear-gradient(45deg, #56ab2f, #b263e0)",
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
      services: 3.24,
    },
    {
      quarter: `Q3'23`,
      software: 3.14,
      hardware: 2.84,
      services: 2.48,
    },
    {
      quarter: `Q4'23`,
      software: 2.48,
      hardware: 2.46,
      services: 2.21,
    },
  ];
}
