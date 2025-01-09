import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import { AgCharts } from "ag-charts-community";
import "ag-charts-enterprise";

const getData = (): any[] => {
  // Your data fetching logic here
  return [
    {
      role: "Sales\nExecutive",
      min: 4001,
      q1: 5071,
      median: 6232,
      q3: 8620,
      max: 13872,
    },
    {
      role: "Research\nScientist",
      min: 1009,
      q1: 2389,
      median: 2889,
      q3: 3904,
      max: 5974,
    },
    {
      role: "Manufacturing\nDirector",
      min: 4011,
      q1: 5121,
      median: 6474,
      q3: 9547,
      max: 13973,
    },
    {
      role: "Manager",
      min: 12504,
      q1: 16437,
      median: 17465,
      q3: 19187,
      max: 19999,
    },
    {
      role: "Research\nDirector",
      min: 11031,
      q1: 13499,
      median: 16598,
      q3: 19038,
      max: 19973,
    },
    {
      role: "Human\nResources",
      min: 1555,
      q1: 2342,
      median: 3195,
      q3: 5985,
      max: 10725,
    },
  ];
};

const ChartComponent: React.FC = () => {
  useEffect(() => {
    const options = {
      container: document.getElementById("myChart"),
      title: {
        text: "HR Analytics",
      },
      background:{
        fill:"transparent"
      },
      subtitle: {
        text: "Salary Distribution by Role",
      },
      data: getData(),
      series: [
        {
          type: "box-plot",
          direction: "horizontal",
          yName: "Employee Salaries",
          xKey: "role",
          xName: "Role",
          minKey: "min",
          minName: "Min",
          q1Key: "q1",
          q1Name: "Q1",
          medianKey: "median",
          medianName: "Median",
          q3Key: "q3",
          q3Name: "Q3",
          maxKey: "max",
          maxName: "Max",
          strokeWidth: 1,
          cornerRadius: 3,
        },
      ],
      axes: [
        {
          position: "left",
          type: "category",
          paddingInner: 0.7,
          paddingOuter: 0.2,
          gridLine: {
            enabled: true,
          },
          line: {
            enabled: false,
          },
          label: {
            spacing: 10,
          },
        },
        {
          position: "bottom",
          type: "number",
          line: {
            enabled: false,
          },
          gridLine: {
            enabled: false,
          },
        },
      ],
    };
    AgCharts.create(options);
  }, []);

  return <div id="myChart" style={{ width: "100dvw", height: "100dvh", background:"linear-gradient(to right,purple,voilet)" }}></div>;
};

export default ChartComponent;