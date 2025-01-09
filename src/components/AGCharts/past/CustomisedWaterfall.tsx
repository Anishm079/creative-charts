import React, { useEffect } from "react";
import { AgCharts } from "ag-charts-community";
import "ag-charts-enterprise";

const month = new Intl.DateTimeFormat("en-GB", {
  month: "short",
});

const day = new Intl.DateTimeFormat("en-GB", {
  day: "2-digit",
});

const numberFormatter = new Intl.NumberFormat(undefined, {
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
});

const getData = (): any[] => {
  // Your data fetching logic here
  return [
    {
      date: new Date("2023-10-17"),
      closePrice: 7675.21,
      percentageChange: 0.58,
    },
    {
      date: new Date("2023-10-18"),
      closePrice: 7588.0,
      percentageChange: -1.14,
    },
    {
      date: new Date("2023-10-19"),
      closePrice: 7499.53,
      percentageChange: -1.17,
    },
    {
      date: new Date("2023-10-20"),
      closePrice: 7402.14,
      percentageChange: -1.3,
    },
    {
      date: new Date("2023-10-23"),
      closePrice: 7374.83,
      percentageChange: -0.37,
    },
    {
      date: new Date("2023-10-24"),
      closePrice: 7389.7,
      percentageChange: 0.2,
    },
    {
      date: new Date("2023-10-25"),
      closePrice: 7414.34,
      percentageChange: 0.33,
    },
    {
      date: new Date("2023-10-26"),
      closePrice: 7354.57,
      percentageChange: -0.81,
    },
    {
      date: new Date("2023-10-27"),
      closePrice: 7291.28,
      percentageChange: -0.86,
    },
    {
      date: new Date("2023-10-30"),
      closePrice: 7327.39,
      percentageChange: 0.5,
    },
    {
      date: new Date("2023-10-31"),
      closePrice: 7321.72,
      percentageChange: -0.08,
    },
  ];
};

const ChartComponent: React.FC = () => {
  useEffect(() => {
    const options = {
      container: document.getElementById("myChart"),
      data: getData(),
      title: {
        text: "FTSE 100 Index",
      },
      background:{
        fill:"transparent"
      },
      subtitle: {
        text: "October (2023)",
      },
      footnote: {
        text: "Net Variation: -4.12%",
      },
      series: [
        {
          type: "waterfall",
          xKey: "date",
          xName: "Date",
          yKey: "percentageChange",
          yName: "Change",
          line: {
            lineDash: [2],
            strokeOpacity: 0.5,
          },
          totals: [
            {
              totalType: "total",
              index: 10,
              axisLabel: "Net\nVariation",
            },
          ],
          item: {
            positive: {
              name: "+",
              label: {
                formatter: ({ value }) => `↑${value}`,
              },
              fillOpacity: 0.7,
              strokeWidth: 1,
            },
            negative: {
              name: "-",
              label: {
                formatter: ({ value }) => `↓${value}`,
              },
              fillOpacity: 0.7,
              strokeWidth: 1,
            },
            total: {
              label: {
                placement: "inside-center",
                fontSize: 11,
                formatter: ({ value }) => `↓${Math.abs(value)}`,
              },
              fillOpacity: 0.3,
            },
          },
        },
      ],
      axes: [
        {
          position: "right",
          type: "number",
          label: {
            spacing: 20,
            formatter: ({ value }) => `${value}%`,
          },
          crosshair: {
            label: {
              renderer: ({ value }) =>
                `<div style="padding: 0 7px; border-radius: 2px; line-height: 1.7em; background-color: rgb(71,71,71); color: rgb(255, 255, 255);">${numberFormatter.format(value)}%</div>`,
            },
          },
        },
        {
          position: "bottom",
          type: "category",
          line: {
            enabled: false,
          },
          label: {
            autoRotate: false,
            spacing: 20,
            formatter: ({ value }) =>
              `${
                value === "Net\nVariation"
                  ? value
                  : new Date(value).toLocaleString("en-US", {
                      month: "short",
                      day: "numeric",
                    })
              }`,
          },
        },
      ],
    };

    AgCharts.create(options);
  }, []);

  return <div id="myChart" style={{ width: "100dvw", height: "100dvh", background:"linear-gradient(to right,#89dbfc, #b167ff)" }}></div>;
};

export default ChartComponent;