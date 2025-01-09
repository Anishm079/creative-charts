import React, { useEffect } from "react";
import { AgCharts } from "ag-charts-community";
import "ag-charts-enterprise";

const getData = (): any[] => {
  // Your data fetching logic here
  return [
    {
      financials: "Income Tax",
      amount: 185,
    },
    {
      financials: "VAT",
      amount: 145,
    },
    {
      financials: "NI",
      amount: 134,
    },
    {
      financials: "Corp Tax",
      amount: 55,
    },
    {
      financials: "Council Tax",
      amount: 34,
    },
    {
      financials: "Social Protection",
      amount: -252,
    },
    {
      financials: "Health",
      amount: -155,
    },
    {
      financials: "Education",
      amount: -112,
    },
    {
      financials: "Defence",
      amount: -65,
    },
    {
      financials: "Debt Interest",
      amount: -63,
    },
    {
      financials: "Housing",
      amount: -31,
    },
  ];
};

const ChartComponent: React.FC = () => {
  useEffect(() => {
    const options = {
      container: document.getElementById("myChart"),
      data: getData(),
      background:{
        fill:"transparent"
      },
      title: {
        text: "UK Government Budget",
      },
      subtitle: {
        text: "All values in £ billions",
      },
      series: [
        {
          type: "waterfall",
          direction: "horizontal",
          xKey: "financials",
          xName: "Financials",
          yKey: "amount",
          yName: "Amount",
          totals: [
            {
              totalType: "total",
              index: 4,
              axisLabel: "Total Budget",
            },
            {
              totalType: "subtotal",
              index: 10,
              axisLabel: "Total Spending",
            },
          ],
          line: {
            enabled: false,
          },
          item: {
            positive: {
              fillOpacity: 0.3,
              strokeWidth: 1,
              lineDash: [2],
              label: {
                formatter: ({ value }) =>
                  `${value < 0 ? "-" : "+"}${Math.abs(value).toFixed(0)}`,
              },
            },
            negative: {
              fillOpacity: 0.3,
              strokeWidth: 1,
              lineDash: [2],
              label: {
                formatter: ({ value }) =>
                  `${value < 0 ? "-" : "+"}${Math.abs(value).toFixed(0)}`,
              },
            },
            total: {
              fillOpacity: 0.3,
              label: {
                placement: "inside-center",
                formatter: ({ value }) =>
                  `${value < 0 ? "-" : "+"}£${Math.abs(value).toFixed(0)} bn`,
              },
            },
          },
        },
      ],
    };

    AgCharts.create(options);
  }, []);

  return <div id="myChart" style={{ width: "100dvw", height: "100dvh" }}></div>;
};

export default ChartComponent;
