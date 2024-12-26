import React, { useEffect } from "react";
import { AgCharts } from "ag-charts-community";
import "ag-charts-enterprise";

const getData = (): {[key:string]:any[]} => {
  // Your data fetching logic here
  return {
    "Jan - Mar 2023": [
      {
        countryOfArrival: "Bulgaria",
        xKey: "department",
        min: 350,
        q1: 694,
        median: 945,
        q3: 1197,
        max: 1257,
      },
      {
        countryOfArrival: "Cyprus",
        xKey: "department",
        min: 117,
        q1: 204,
        median: 266,
        q3: 447,
        max: 681,
      },
      {
        countryOfArrival: "Spain",
        xKey: "department",
        min: 150,
        q1: 407,
        median: 518,
        q3: 717,
        max: 1555,
      },
      {
        countryOfArrival: "Greece",
        xKey: "department",
        min: 68,
        q1: 101,
        median: 161,
        q3: 171,
        max: 188,
      },
      {
        countryOfArrival: "Italy",
        xKey: "department",
        min: 132,
        q1: 320,
        median: 1141,
        q3: 1461,
        max: 2366,
      },
    ],
    "April - June 2023": [
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
    ],
  };
};

const shared = {
  xKey: "countryOfArrival",
  xName: "Country Of Arrival",
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
    strokeOpacity: 1,
  },
  cap: {
    lengthRatio: 0,
  },
};

const ChartComponent: React.FC = () => {
  useEffect(() => {
    const data = getData();
    const options = {
      container: document.getElementById("myChart"),
      title: {
        text: "Europe — Mixed Migration Flows",
      },
      subtitle: {
        text: "Quarterly Overview",
      },
      footnote: {
        text: "Source: UN International Organization for Migration",
      },
      padding: {
        left: 50,
      },
      series: [
        {
          type: "box-plot",
          data: data["Jan - Mar 2023"],
          yName: "Jan - Mar 2023",
          ...shared,
        },
        {
          type: "box-plot",
          data: data["April - June 2023"],
          yName: "April - June 2023",
          ...shared,
        },
      ],
      axes: [
        {
          position: "bottom",
          type: "category",
          paddingInner: 0.5,
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
          position: "left",
          type: "number",
          line: {
            enabled: false,
          },
          label: {
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
