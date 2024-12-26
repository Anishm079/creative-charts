import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import { AgCharts } from "ag-charts-community";
import "ag-charts-enterprise";

const getData = (): any[] => {
  // Your data fetching logic here
  return [
    {
      countryOfArrival: "Bulgaria",
      xKey: "department",
      min: 123,
      q1: 672,
      median: 1746,
      q3: 2418,
      max: 2714,
    },
    {
      countryOfArrival: "Cyprus",
      xKey: "department",
      min: 109,
      q1: 172,
      median: 210,
      q3: 340,
      max: 2013,
    },
    {
      countryOfArrival: "Spain",
      xKey: "department",
      min: 144,
      q1: 343,
      median: 408,
      q3: 709,
      max: 1214,
    },
    {
      countryOfArrival: "Greece",
      xKey: "department",
      min: 124,
      q1: 163,
      median: 215,
      q3: 437,
      max: 1098,
    },
    {
      countryOfArrival: "Italy",
      xKey: "department",
      min: 105,
      q1: 165,
      median: 385,
      q3: 855,
      max: 2346,
    },
  ];
};

const ChartComponent: React.FC = () => {
  useEffect(() => {
    const options = {
      container: document.getElementById("myChart"),
      title: {
        text: "Migration Flows to Europe",
      },
      subtitle: {
        text: "Quarterly Overview (April - June 2023)",
      },
      footnote: {
        text: "Source: UN International Organization for Migration",
      },
      data: getData(),
      series: [
        {
          type: "box-plot",
          xKey: "countryOfArrival",
          xName: "Country Of Arrival",
          yName: "Monthly Arrivals",
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
          cornerRadius: 8,
          strokeOpacity: 0,
          whisker: {
            strokeOpacity: 0.9,
          },
          cap: {
            lengthRatio: 0.8,
          },
        },
      ],
      axes: [
        {
          type: "category",
          position: "bottom",
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
          type: "number",
          position: "left",
          interval: { values: [105, 385, 2714] },
          line: {
            enabled: false,
          },
        },
      ],
    };

    AgCharts.create(options);
  }, []);

  return <div id="myChart" style={{ width: "90dvw", height: "90dvh" }}></div>;
};

export default ChartComponent;