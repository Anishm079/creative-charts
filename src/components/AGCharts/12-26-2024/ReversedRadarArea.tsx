import React, { useEffect } from "react";
import { AgChartOptions, AgCharts } from "ag-charts-community";

const ChartComponent: React.FC = () => {
  useEffect(() => {
    const options: AgChartOptions = {
      container: document.getElementById("myChart"),
      data: getData(),
      title: {
        text: "Efficiency KPI",
        fontFamily: '"Dancing Script", serif',
      },
      background:{
        fill:"transparent"
      },
      series: [
        {
          type: "radar-area",
          angleKey: "department",
          radiusKey: "efficiency",
          radiusName: "Efficiency",
          fillOpacity: 0.2,
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
            spacing: 5,
            fontFamily: '"Dancing Script", serif',
          },
        },
        {
          type: "radius-number",
          shape: "circle",
          positionAngle: 180,
          label: {
            rotation: 180,
            fontFamily: '"Dancing Script", serif',
          },
          reverse: true,
          gridLine: {
            enabled: false,
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
        background: "linear-gradient(45deg, #f7c3a1, #f7a875, #e0c887)",
      }}
    />
  );
};

export default ChartComponent;

function getData() {
  // Placeholder function for fetching data
  return [
    {
      department: "Development",
      efficiency: 75,
    },
    {
      department: "Sales",
      efficiency: 85,
    },
    {
      department: "Research",
      efficiency: 60,
    },
    {
      department: "Engineering",
      efficiency: 60,
    },
    {
      department: "HR",
      efficiency: 50,
    },
    {
      department: "Finance",
      efficiency: 45,
    },
    {
      department: "Marketing",
      efficiency: 35,
    },
    {
      department: "Operations",
      efficiency: 29,
    },
    {
      department: "Legal",
      efficiency: 37,
    },
  ];
}
