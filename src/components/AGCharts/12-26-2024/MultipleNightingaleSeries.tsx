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
          radiusKey: "software",
          radiusName: "Software",
          label: {
            fontFamily: '"Dancing Script", serif',
          },
        },
        {
          type: "nightingale",
          angleKey: "quarter",
          radiusKey: "hardware",
          radiusName: "Hardware",
          fillOpacity: 0.5,
          label: {
            fontFamily: '"Dancing Script", serif',
          },
        },
        {
          type: "nightingale",
          angleKey: "quarter",
          radiusKey: "services",
          radiusName: "Services",
          fillOpacity: 0.3,
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
          crossLines: [
            {
              type: "range",
              range: [10, 12],
              strokeWidth: 0,
              fillOpacity: 0.05,
              label: {
                fontFamily: '"Dancing Script", serif',
              },
            },
            {
              type: "range",
              range: [8, 6],
              strokeWidth: 0,
              fillOpacity: 0.05,
              label: {
                fontFamily: '"Dancing Script", serif',
              },
            },
            {
              type: "range",
              range: [4, 2],
              strokeWidth: 0,
              fillOpacity: 0.05,
              label: {
                fontFamily: '"Dancing Script", serif',
              },
            },
          ],
        },
        {
          type: "angle-category",
          paddingInner: 0.4,
          line: {
            enabled: false,
            fontFamily: '"Dancing Script", serif',
          },
          label: {
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