import React, { useEffect } from "react";
import { AgChartOptions, AgCharts } from "ag-charts-community";

const getData = (): Array<{ financials: string; amount: number }> => {
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
    const options: AgChartOptions = {
      container: document.getElementById("myChart"),
      data: getData(),
      title: {
        text: "UK Government Budget",
        fontFamily: `"Architects Daughter", serif`,
        color: "#000",
      },
      background: {
        fill: "transparent",
      },
      subtitle: {
        text: "All values in £ billions",
        fontFamily: `"Architects Daughter", serif`,
        color: "#000",
      },
      fontFamily: `"Architects Daughter", serif`,
      color: "#000",
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
              fontFamily: `"Architects Daughter", serif`,
              color: "#000",
            },
            {
              totalType: "subtotal",
              index: 10,
              axisLabel: "Total Spending",
              fontFamily: `"Architects Daughter", serif`,
              color: "#000",
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
                fontFamily: `"Architects Daughter", serif`,
                color: "#000",
              },
            },
            negative: {
              fillOpacity: 0.3,
              strokeWidth: 1,
              lineDash: [2],
              label: {
                formatter: ({ value }) =>
                  `${value < 0 ? "-" : "+"}${Math.abs(value).toFixed(0)}`,
                fontFamily: `"Architects Daughter", serif`,
                color: "#000",
              },
            },
            total: {
              fillOpacity: 0.3,
              label: {
                placement: "inside-center",
                formatter: ({ value }) =>
                  `${value < 0 ? "-" : "+"}£${Math.abs(value).toFixed(0)} bn`,
                fontFamily: `"Architects Daughter", serif`,
                color: "#000",
              },
            },
          },
        },
      ],
      axes: [
        {
          position: "left",
          label: {
            fontFamily: `"Architects Daughter", serif`,
            color: "#000",
          },
        },
        {
          position: "bottom",
          label: {
            fontFamily: `"Architects Daughter", serif`,
            color: "#000",
          },
        },
      ],
    };

    AgCharts.create(options);
  }, []);

  return (
    <div
      id="myChart"
      style={{
        height: "100dvh",
        width: "100dvw",
        background: "linear-gradient(75deg, #5b487d, #d76d77, #b57e59)",
      }}
    />
  );
};

export default ChartComponent;
