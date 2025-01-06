import React, { useEffect } from "react";
import { AgChartOptions, AgCharts } from "ag-charts-community";

const ChartComponent: React.FC = () => {
  useEffect(() => {
    const options: AgChartOptions = {
      container: document.getElementById("myChart"),
      data: getData(),
      title: {
        text: "Hardware Revenue",
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
          type: "nightingale",
          angleKey: "quarter",
          radiusKey: "hardware",
          radiusName: "Hardware",
          fillOpacity: 0.8,
          label: {
            fontFamily: '"Dancing Script", serif',
          },
        },
      ],
      axes: [
        {
          type: "radius-number",
          label: {
            enabled: false,
            fontFamily: '"Dancing Script", serif',
          },
        },
        {
          type: "angle-category",
          gridLine: {
            enabled: true,
            fontFamily: '"Dancing Script", serif',
          },
          label: {
            spacing: 0,
            fontFamily: '"Dancing Script", serif',
          },
          line: {
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
        background: "linear-gradient(90deg, #ff9a8b, #ff6a00, #a1c4fd)",
      }}
    />
  );
};

export default ChartComponent;

function getData() {
  // Placeholder function for fetching data
  return [
    {
      quarter: `Jan`,
      hardware: 4.14,
    },
    {
      quarter: `Feb`,
      hardware: 4.34,
    },
    {
      quarter: `Mar`,
      hardware: 4.56,
    },
    {
      quarter: `Apr`,

      hardware: 3.14,
    },
    {
      quarter: `May`,
      hardware: 3.68,
    },
    {
      quarter: `Jun`,
      hardware: 2.84,
    },
    {
      quarter: `Jul`,
      hardware: 2.46,
    },
    {
      quarter: `Aug`,
      hardware: 2.13,
    },
    {
      quarter: `Sep`,
      hardware: 2.91,
    },
    {
      quarter: `Oct`,
      hardware: 2.04,
    },
    {
      quarter: `Nov`,
      hardware: 2.18,
    },
    {
      quarter: `Dec`,
      hardware: 2.61,
    },
  ];
}
