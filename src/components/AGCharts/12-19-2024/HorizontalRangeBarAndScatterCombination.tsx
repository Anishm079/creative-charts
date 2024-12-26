import React, { useEffect } from "react";
import { AgChartOptions, AgCharts } from "ag-charts-community";

function getData() {
  return [
    {
      smartphone: "Apple iPhone",
      lowCost: 188,
      highCost: 501,
      lowRetail: 599,
      highRetail: 1449,
      profitMargin: 68.6,
    },
    {
      smartphone: "Google Pixel",
      lowCost: 285.75,
      highCost: 485.5,
      lowRetail: 699,
      highRetail: 899,
      profitMargin: 54.6,
    },
    {
      smartphone: "Samsung Galaxy",
      lowCost: 213,
      highCost: 670,
      lowRetail: 549,
      highRetail: 1799,
      profitMargin: 59.2,
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
        text: "Smartphone Production Cost Vs Retail Price",
        fontFamily: "Architects Daughter",
      },
      subtitle: {
        text: "Production cost range vs retail price range of top-selling phone brands on the market in 2023",
        spacing: 30,
        fontFamily: "Architects Daughter",
      },
      footnote: {
        text: "Costs include essential components like core processors, display, memory, and camera module but exclude marketing, research, distribution, staff, accessories, packaging, and software.",
        spacing: 30,
        fontFamily: "Architects Daughter",
      },
      series: [
        {
          type: "range-bar",
          direction: "horizontal",
          xKey: "smartphone",
          xName: "Smartphone",
          yLowKey: "lowCost",
          yHighKey: "highCost",
          yLowName: "Lowest Cost",
          yHighName: "Highest Cost",
          yName: "Production Cost Range",
          cornerRadius: 2,
          label: {
            fontFamily: "Architects Daughter",
          },
        },
        {
          type: "range-bar",
          direction: "horizontal",
          xKey: "smartphone",
          xName: "Smartphone",
          yLowKey: "lowRetail",
          yHighKey: "highRetail",
          yLowName: "Lowest Price",
          yHighName: "Highest Price",
          yName: "Retail Price Range",
          cornerRadius: 2,
          label: {
            fontFamily: "Architects Daughter",
          },
        },
        {
          type: "bubble",
          yKey: "smartphone",
          xKey: "profitMargin",
          xName: "Profit Margin",
          yName: "Profit Margin %",
          sizeKey: "profitMargin",
          labelKey: "profitMargin",
          label: {
            formatter: ({ value }) => `${Number(value).toFixed(0)}%`,
            fontFamily: "Architects Daughter",
          },
        },
      ],
      axes: [
        {
          type: "category",
          position: "left",
          keys: ["smartphone"],
          groupPaddingInner: 0,
          paddingInner: 0.9,
          paddingOuter: 0.8,
          label: {
            fontFamily: "Architects Daughter",
          },
        },
        {
          type: "number",
          position: "top",
          keys: ["profitMargin"],
          label: {
            formatter: ({ value }) => `${Math.round(value)}%`,
            fontFamily: "Architects Daughter",
          },
        },
        {
          type: "number",
          position: "bottom",
          keys: ["lowRetail", "highRetail", "lowCost", "highCost"],
          label: {
            formatter: ({ value }) =>
              `${Number(value).toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
                maximumFractionDigits: 0,
              })}`,
            fontFamily: "Architects Daughter",
          },
        },
      ],
    };

    AgCharts.create(options);
  }, []);

  return <div id="myChart" style={{ width: "90dvw", height: "90dvh", background:"linear-gradient(to right, #9672b6, #744dc2)" }}></div>;
};

export default ChartComponent;
