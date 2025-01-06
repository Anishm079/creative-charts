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
          type: "radar-line",
          angleKey: "department",
          radiusKey: "quality",
          radiusName: "Quality",
          lineDash: [4],
          strokeWidth: 1,
          label: {
            fontFamily: '"Dancing Script", serif',
          },
        },
        {
          type: "radar-line",
          angleKey: "department",
          radiusKey: "efficiency",
          radiusName: "Efficiency",
          lineDash: [4],
          strokeWidth: 1,
          label: {
            fontFamily: '"Dancing Script", serif',
          },
        },
        {
          type: "radar-line",
          angleKey: "department",
          radiusKey: "customerSatisfaction",
          radiusName: "Customer Satisfaction",
          strokeWidth: 1,
          marker: {
            enabled: false,
          },
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
          label: {
            fontFamily: '"Dancing Script", serif',
          },
        },
        {
          type: "radius-number",
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
      department: "Sales",
      quality: 40,
      efficiency: 75,
      customerSatisfaction: 90,
    },
    {
      department: "Engineering",
      quality: 45,
      efficiency: 90,
      customerSatisfaction: 85,
    },
    {
      department: "HR",
      quality: 80,
      efficiency: 60,
      customerSatisfaction: 75,
    },
    {
      department: "Marketing",
      quality: 80,
      efficiency: 60,
      customerSatisfaction: 65,
    },
    {
      department: "Finance",
      quality: 85,
      efficiency: 50,
      customerSatisfaction: 70,
    },
  ];
}
