import React, { useEffect } from "react";
import { AgChartOptions, AgCharts } from "ag-charts-community";

const ChartComponent: React.FC = () => {
  useEffect(() => {
    const options: AgChartOptions = {
      container: document.getElementById("myChart"),
      data: getData(),
      title: {
        text: "KPIs by Department",
        fontFamily: '"Dancing Script", serif',
      },
      background:{
        fill:"transparent"
      },
      series: [
        {
          type: "radar-area",
          angleKey: "department",
          radiusKey: "quality",
          radiusName: "Quality",
          strokeWidth: 1,
          fillOpacity: 0.1,
          label: {
            fontFamily: '"Dancing Script", serif',
          },
        },
        {
          type: "radar-area",
          angleKey: "department",
          radiusKey: "efficiency",
          radiusName: "Efficiency",
          strokeWidth: 1,
          fillOpacity: 0.1,
          label: {
            fontFamily: '"Dancing Script", serif',
          },
        },
        {
          type: "radar-area",
          angleKey: "department",
          radiusKey: "revenueGrowth",
          radiusName: "Revenue Growth",
          strokeWidth: 1,
          fillOpacity: 0.1,
          label: {
            fontFamily: '"Dancing Script", serif',
          },
        },
      ],
      axes: [
        {
          type: "angle-category",
          gridLine: {
            enabled: true,
            fontFamily: '"Dancing Script", serif',
          },
          line: {
            enabled: false,
            fontFamily: '"Dancing Script", serif',
          },
          label: {
            fontFamily: '"Dancing Script", serif',
          },
        },
        {
          type: "radius-number",
          gridLine: {
            enabled: false,
            fontFamily: '"Dancing Script", serif',
          },
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
      department: "Sales",
      quality: 40,
      efficiency: 75,
      revenueGrowth: 33,
    },
    {
      department: "Engineering",
      quality: 45,
      efficiency: 90,
      revenueGrowth: 52,
    },
    {
      department: "HR",
      quality: 80,
      efficiency: 60,
      revenueGrowth: 49,
    },
    {
      department: "Marketing",
      quality: 80,
      efficiency: 60,
      revenueGrowth: 25,
    },
    {
      department: "Finance",
      quality: 85,
      efficiency: 50,
      revenueGrowth: 38,
    },
  ];
}
