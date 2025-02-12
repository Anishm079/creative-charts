import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import { AgCharts } from "ag-charts-community";
import "ag-charts-enterprise";

const formatter = new Intl.DateTimeFormat("en-GB", {
  month: "short",
  year: "2-digit",
});

const getData = (): any[] => {
  // Your data fetching logic here
  return [
    {
      Date: new Date("2020-01-01"),
      "All property types": 118.15,
      "Detached houses": 120.0,
      "Semi-detached houses": 122.94,
      "Terraced houses": 121.85,
      "Flats and maisonettes": 115.12,
    },
    {
      Date: new Date("2020-02-01"),
      "All property types": 117.78,
      "Detached houses": 122.84,
      "Semi-detached houses": 123.87,
      "Terraced houses": 122.6,
      "Flats and maisonettes": 113.59,
    },
    {
      Date: new Date("2020-03-01"),
      "All property types": 119.8,
      "Detached houses": 123.45,
      "Semi-detached houses": 125.37,
      "Terraced houses": 123.61,
      "Flats and maisonettes": 116.36,
    },
    {
      Date: new Date("2020-04-01"),
      "All property types": 118.2,
      "Detached houses": 123.99,
      "Semi-detached houses": 124.05,
      "Terraced houses": 122.92,
      "Flats and maisonettes": 114.06,
    },
    {
      Date: new Date("2020-05-01"),
      "All property types": 117.47,
      "Detached houses": 122.13,
      "Semi-detached houses": 123.34,
      "Terraced houses": 121.68,
      "Flats and maisonettes": 113.66,
    },
    {
      Date: new Date("2020-06-01"),
      "All property types": 119.14,
      "Detached houses": 121.99,
      "Semi-detached houses": 125.66,
      "Terraced houses": 124.82,
      "Flats and maisonettes": 114.62,
    },
    {
      Date: new Date("2020-07-01"),
      "All property types": 120.1,
      "Detached houses": 123.78,
      "Semi-detached houses": 126.12,
      "Terraced houses": 124.97,
      "Flats and maisonettes": 116.03,
    },
    {
      Date: new Date("2020-08-01"),
      "All property types": 121.49,
      "Detached houses": 126.15,
      "Semi-detached houses": 128.53,
      "Terraced houses": 127.48,
      "Flats and maisonettes": 116.53,
    },
    {
      Date: new Date("2020-09-01"),
      "All property types": 122.43,
      "Detached houses": 126.59,
      "Semi-detached houses": 129.15,
      "Terraced houses": 128.58,
      "Flats and maisonettes": 117.52,
    },
    {
      Date: new Date("2020-10-01"),
      "All property types": 120.69,
      "Detached houses": 126.35,
      "Semi-detached houses": 128.29,
      "Terraced houses": 127.81,
      "Flats and maisonettes": 114.97,
    },
    {
      Date: new Date("2020-11-01"),
      "All property types": 122.76,
      "Detached houses": 129.06,
      "Semi-detached houses": 130.6,
      "Terraced houses": 129.93,
      "Flats and maisonettes": 116.9,
    },
    {
      Date: new Date("2020-11-01"),
      "All property types": 122.67,
      "Detached houses": 128.78,
      "Semi-detached houses": 131.16,
      "Terraced houses": 130.31,
      "Flats and maisonettes": 116.44,
    },
    {
      Date: new Date("2021-01-01"),
      "All property types": 123.9,
      "Detached houses": 129.7,
      "Semi-detached houses": 131.8,
      "Terraced houses": 130.88,
      "Flats and maisonettes": 118.15,
    },
    {
      Date: new Date("2021-02-01"),
      "All property types": 121.73,
      "Detached houses": 128.65,
      "Semi-detached houses": 130.34,
      "Terraced houses": 129.2,
      "Flats and maisonettes": 115.41,
    },
    {
      Date: new Date("2021-03-01"),
      "All property types": 124.08,
      "Detached houses": 130.22,
      "Semi-detached houses": 132.52,
      "Terraced houses": 131.62,
      "Flats and maisonettes": 117.87,
    },
    {
      Date: new Date("2021-04-01"),
      "All property types": 121.94,
      "Detached houses": 130.24,
      "Semi-detached houses": 130.88,
      "Terraced houses": 129.23,
      "Flats and maisonettes": 115.49,
    },
    {
      Date: new Date("2021-05-01"),
      "All property types": 120.74,
      "Detached houses": 130.99,
      "Semi-detached houses": 131.35,
      "Terraced houses": 128.53,
      "Flats and maisonettes": 113.4,
    },
    {
      Date: new Date("2021-06-01"),
      "All property types": 125.61,
      "Detached houses": 133.91,
      "Semi-detached houses": 135.58,
      "Terraced houses": 135.33,
      "Flats and maisonettes": 117.68,
    },
    {
      Date: new Date("2021-07-01"),
      "All property types": 123.61,
      "Detached houses": 134.2,
      "Semi-detached houses": 131.69,
      "Terraced houses": 129.03,
      "Flats and maisonettes": 118.15,
    },
    {
      Date: new Date("2021-08-01"),
      "All property types": 126.67,
      "Detached houses": 139.46,
      "Semi-detached houses": 138.09,
      "Terraced houses": 135.36,
      "Flats and maisonettes": 118.46,
    },
    {
      Date: new Date("2021-09-01"),
      "All property types": 126.39,
      "Detached houses": 137.92,
      "Semi-detached houses": 138.12,
      "Terraced houses": 135.65,
      "Flats and maisonettes": 117.93,
    },
    {
      Date: new Date("2021-10-01"),
      "All property types": 126.03,
      "Detached houses": 141.95,
      "Semi-detached houses": 138.78,
      "Terraced houses": 134.32,
      "Flats and maisonettes": 117.39,
    },
    {
      Date: new Date("2021-11-01"),
      "All property types": 126.62,
      "Detached houses": 140.59,
      "Semi-detached houses": 139.24,
      "Terraced houses": 134.74,
      "Flats and maisonettes": 118.27,
    },
    {
      Date: new Date("2021-11-01"),
      "All property types": 126.38,
      "Detached houses": 139.54,
      "Semi-detached houses": 139.13,
      "Terraced houses": 136.01,
      "Flats and maisonettes": 117.32,
    },
    {
      Date: new Date("2022-01-01"),
      "All property types": 128.39,
      "Detached houses": 140.43,
      "Semi-detached houses": 140.67,
      "Terraced houses": 137.22,
      "Flats and maisonettes": 119.96,
    },
    {
      Date: new Date("2022-02-01"),
      "All property types": 128.33,
      "Detached houses": 141.05,
      "Semi-detached houses": 140.29,
      "Terraced houses": 136.44,
      "Flats and maisonettes": 120.37,
    },
    {
      Date: new Date("2022-03-01"),
      "All property types": 127.99,
      "Detached houses": 142.52,
      "Semi-detached houses": 141.31,
      "Terraced houses": 137.25,
      "Flats and maisonettes": 118.69,
    },
    {
      Date: new Date("2022-04-01"),
      "All property types": 129.4,
      "Detached houses": 143.9,
      "Semi-detached houses": 142.4,
      "Terraced houses": 139.7,
      "Flats and maisonettes": 119.6,
    },
    {
      Date: new Date("2022-05-01"),
      "All property types": 129.5,
      "Detached houses": 144.4,
      "Semi-detached houses": 143.8,
      "Terraced houses": 139.7,
      "Flats and maisonettes": 119.2,
    },
    {
      Date: new Date("2022-06-01"),
      "All property types": 131.9,
      "Detached houses": 145.2,
      "Semi-detached houses": 145.6,
      "Terraced houses": 142.9,
      "Flats and maisonettes": 121.5,
    },
    {
      Date: new Date("2022-07-01"),
      "All property types": 133.7,
      "Detached houses": 146.1,
      "Semi-detached houses": 147.2,
      "Terraced houses": 145.2,
      "Flats and maisonettes": 123.3,
    },
    {
      Date: new Date("2022-08-01"),
      "All property types": 134.8,
      "Detached houses": 149.1,
      "Semi-detached houses": 149.3,
      "Terraced houses": 146.7,
      "Flats and maisonettes": 123.8,
    },
    {
      Date: new Date("2022-09-01"),
      "All property types": 134.9,
      "Detached houses": 149.5,
      "Semi-detached houses": 149.9,
      "Terraced houses": 146.7,
      "Flats and maisonettes": 123.7,
    },
    {
      Date: new Date("2022-10-01"),
      "All property types": 132.7,
      "Detached houses": 147.0,
      "Semi-detached houses": 147.9,
      "Terraced houses": 144.6,
      "Flats and maisonettes": 121.4,
    },
    {
      Date: new Date("2022-11-01"),
      "All property types": 133.6,
      "Detached houses": 148.4,
      "Semi-detached houses": 148.2,
      "Terraced houses": 144.9,
      "Flats and maisonettes": 122.7,
    },
    {
      Date: new Date("2022-11-01"),
      "All property types": 132.9,
      "Detached houses": 146.5,
      "Semi-detached houses": 147.8,
      "Terraced houses": 144.1,
      "Flats and maisonettes": 122.2,
    },
    {
      Date: new Date("2023-01-01"),
      "All property types": 133.2,
      "Detached houses": 147.1,
      "Semi-detached houses": 147.7,
      "Terraced houses": 143.8,
      "Flats and maisonettes": 122.9,
    },
  ];
};

const ChartComponent: React.FC = () => {
  useEffect(() => {
    const options = {
      container: document.getElementById("myChart"),
      data: getData(),
      title: {
        text: "House Price Index In London",
      },
      background:{
        fill:"transparent"
      },
      subtitle: {
        text: "Price Indices of Flats and Terraced Houses from 2020 to 2023",
        spacing: 45,
      },
      footnote: {
        text: "Source: UK Gov Land Registry",
      },
      series: [
        {
          type: "range-area",
          xKey: "Date",
          yLowKey: "Flats and maisonettes",
          yHighKey: "Terraced houses",
          fillOpacity: 0.2,
          label: {
            formatter: ({ value }) => `${value === 113.4 ? value : ""}`,
          },
        },
        {
          type: "range-area",
          xKey: "Date",
          yLowKey: "Terraced houses",
          yHighKey: "Semi-detached houses",
          fillOpacity: 0.2,
          label: {
            formatter: ({ value }) => `${value === 149.9 ? value : ""}`,
          },
        },
      ],
      axes: [
        {
          type: "number",
          position: "right",
          gridLine: {
            enabled: false,
          },
          nice: false,
          min: 100,
          max: 160,
        },
        {
          type: "time",
          position: "bottom",
          nice: false,
          label: {
            format: `%b %y`,
          },
          tick: {
            size: 14,
          },
          gridLine: {
            enabled: true,
          },
        },
      ],
      legend: {
        enabled: false,
      },
    };

    AgCharts.create(options);
  }, []);

  return <div id="myChart" style={{ width: "90dvw", height: "90dvh" }}></div>;
};

export default ChartComponent;
