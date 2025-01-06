import React, { useEffect } from "react";
import { AgChartOptions, AgCharts } from "ag-charts-community";

const ChartComponent: React.FC = () => {
  useEffect(() => {
    const options: AgChartOptions = {
      container: document.getElementById("myChart"),
      data: getData(),
      title: {
        text: "Product Revenue",
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
          type: "radial-column",
          angleKey: "quarter",
          radiusKey: "product",
          fillOpacity: 0.8,
          label: {
            fontFamily: '"Dancing Script", serif',
          },
          tooltip: {
            renderer: (params) => {
              const [day, month] = params.datum.quarter.split(" ");
              const key = day === "1" ? `${month}` : `Mid-${month}`;
              return {
                heading: key,
              };
            },
          },
        },
      ],
      axes: [
        {
          type: "radius-number",
          innerRadiusRatio: 0.5,
          interval: { step: 0.5 },
          label: {
            enabled: false,
            fontFamily: '"Dancing Script", serif',
          },
        },
        {
          type: "angle-category",
          paddingInner: 0.4,
          label: {
            formatter: ({ value }) =>
              value.includes("1 ") ? value.substring(2) : "",
            spacing: 0,
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
        background: "linear-gradient(45deg, #ff94cc, #ff6f61, #5b2c6f)",
      }}
    />
  );
};

export default ChartComponent;

function getData() {
  // Placeholder function for fetching data
  return [
    {
      quarter: `1 Jan`,
      product: 4.14,
    },
    {
      quarter: `15 Jan`,
      product: 4.35,
    },
    {
      quarter: `1 Feb`,
      product: 4.34,
    },

    {
      quarter: `15 Feb`,
      product: 4.28,
    },
    {
      quarter: `1 Mar`,
      product: 4.56,
    },
    {
      quarter: `15 Mar`,
      product: 4.14,
    },
    {
      quarter: `1 Apr`,

      product: 3.14,
    },
    {
      quarter: `15 Apr`,
      product: 3.48,
    },
    {
      quarter: `1 May`,
      product: 3.68,
    },
    {
      quarter: `15 May`,
      product: 3.35,
    },
    {
      quarter: `1 Jun`,
      product: 2.84,
    },
    {
      quarter: `15 Jun`,
      product: 3.28,
    },
    {
      quarter: `1 Jul`,
      product: 2.46,
    },

    {
      quarter: `15 Jul`,
      product: 3.14,
    },
    {
      quarter: `1 Aug`,
      product: 2.13,
    },
    {
      quarter: `15 Aug`,
      product: 2.48,
    },
    {
      quarter: `1 Sep`,
      product: 2.91,
    },

    {
      quarter: `15 Sep`,
      product: 2.46,
    },
    {
      quarter: `1 Oct`,
      product: 2.04,
    },
    {
      quarter: `15 Oct`,
      product: 3.21,
    },
    {
      quarter: `1 Nov`,
      product: 2.18,
    },
    {
      quarter: `15 Nov`,
      product: 2.84,
    },
    {
      quarter: `1 Dec`,
      product: 2.61,
    },
    {
      quarter: `15 Dec`,
      product: 3.18,
    },
  ];
}
