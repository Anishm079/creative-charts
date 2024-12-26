import React, { useEffect } from "react";
import { AgChartOptions, AgCharts } from "ag-charts-community";

function getData() {
  return [
    {
      department: "Development",
      quality: 40,
      efficiency: 35,
      customerSatisfaction: 57,
    },
    {
      department: "Sales",
      quality: 45,
      efficiency: 25,
      customerSatisfaction: 85,
    },
    {
      department: "Research",
      quality: 80,
      efficiency: 44,
      customerSatisfaction: 75,
    },
    {
      department: "Engineering",
      quality: 55,
      efficiency: 51,
      customerSatisfaction: 65,
    },
    {
      department: "HR",
      quality: 85,
      efficiency: 32,
      customerSatisfaction: 70,
    },
    {
      department: "Finance",
      quality: 85,
      efficiency: 28,
      customerSatisfaction: 70,
    },
    {
      department: "Marketing",
      quality: 81,
      efficiency: 50,
      customerSatisfaction: 70,
    },
    {
      department: "Operations",
      quality: 88,
      efficiency: 37,
      customerSatisfaction: 70,
    },
    {
      department: "Legal",
      quality: 69,
      efficiency: 41,
      customerSatisfaction: 78,
    },
  ];
}

const ChartComponent: React.FC = () => {
  useEffect(() => {
    const options: AgChartOptions = {
      container: document.getElementById("myChart"),
      data: getData(),
      background:{
        fill:"transparent"
      },
      title: {
        text: "Key Performance Indicators",
        fontFamily: "Architects Daughter",
      },
      series: [
        {
          type: "nightingale",
          angleKey: "department",
          radiusKey: "efficiency",
          radiusName: "Efficiency",
          label: {
            fontFamily: "Architects Daughter",
          },
        },
        {
          type: "radar-line",
          angleKey: "department",
          radiusKey: "customerSatisfaction",
          radiusName: "Customer Satisfaction",
          label: {
            fontFamily: "Architects Daughter",
          },
        },
        {
          type: "radar-area",
          angleKey: "department",
          radiusKey: "quality",
          radiusName: "Quality",
          fillOpacity: 0.2,
          strokeWidth: 0,
          label: {
            fontFamily: "Architects Daughter",
          },
        },
      ],
      axes: [
        {
          type: "angle-category",
          gridLine: {
            enabled: true,
          },
          line: {
            enabled: false,
          },
          label: {
            fontFamily: "Architects Daughter",
          },
        },
        {
          type: "radius-number",
          label: {
            fontFamily: "Architects Daughter",
          },
        },
      ],
    };

    AgCharts.create(options);
  }, []);

  return <div id="myChart" style={{ width: "90dvw", height: "90dvh", background:"linear-gradient(to right, #d8cf7d, #4caf50)" }}></div>;
};

export default ChartComponent;
