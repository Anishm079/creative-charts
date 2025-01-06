import React, { useEffect } from "react";
import { AgChartOptions, AgCharts } from "ag-charts-community";

const ChartComponent: React.FC = () => {
  useEffect(() => {
    const options: AgChartOptions = {
      container: document.getElementById("myChart"),
      data: getData(),
      title: {
        text: "Software Revenue",
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
          fillOpacity: 0.8,
          label: {
            fontFamily: '"Dancing Script", serif',
          },
        },
      ],
      axes: [
        {
          type: "radius-number",
          interval: { values: [1, 3, 5] },
          reverse: true,
          gridLine: {
            width: 2,
          },
          positionAngle: 90,
          label: {
            rotation: -90,
            spacing: 12,
            formatter: ({ value }) => `$${value}M`,
            fontFamily: '"Dancing Script", serif',
          },
          line: {
            enabled: true,
          },
        },
        {
          type: "angle-category",
          paddingInner: 0.1,
          gridLine: {
            enabled: true,
          },
          tick: {
            enabled: true,
          },
          label: {
            spacing: 5,
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
      quarter: "Jan",
      software: 4.35,
    },
    {
      quarter: "Feb",
      software: 4.28,
    },
    {
      quarter: "Mar",
      software: 4.14,
    },
    {
      quarter: "Apr",
      software: 3.48,
    },
    {
      quarter: "May",
      software: 3.35,
    },
    {
      quarter: "Jun",
      software: 3.28,
    },
    {
      quarter: "Jul",
      software: 3.14,
    },
    {
      quarter: "Aug",
      software: 2.48,
    },
    {
      quarter: "Sep",
      software: 2.46,
    },
    {
      quarter: "Oct",
      software: 3.21,
    },
    {
      quarter: "Nov",
      software: 2.84,
    },
    {
      quarter: "Dec",
      software: 3.18,
    },
  ];
}
