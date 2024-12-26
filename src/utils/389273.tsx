import React, { useEffect } from "react";
import { AgCharts } from "ag-charts-community";
import "ag-charts-enterprise";

function getData() {
  return {
    "United States": [
      {
        product: "Timber",
        exportAmount: 10_000_000,
        importAmount: 20_000_000,
      },
      {
        product: "Cotton",
        exportAmount: 10_000_000,
        importAmount: 20_000_000,
      },
      {
        product: "Steel",
        exportAmount: 15_000_000,
        importAmount: 25_000_000,
      },
      {
        product: "Electronics",
        exportAmount: 18_000_000,
        importAmount: 28_000_000,
      },
      {
        product: "Pharmaceuticals",
        exportAmount: 12_000_000,
        importAmount: 22_000_000,
      },
      {
        product: "Automobiles",
        exportAmount: 32_000_000,
        importAmount: 10_000_000,
      },
    ],
    China: [
      {
        product: "Timber",
        exportAmount: 8_000_000,
        importAmount: 16_000_000,
      },
      {
        product: "Cotton",
        exportAmount: 8_000_000,
        importAmount: 16_000_000,
      },
      {
        product: "Steel",
        exportAmount: 12_000_000,
        importAmount: 22_000_000,
      },
      {
        product: "Electronics",
        exportAmount: 15_000_000,
        importAmount: 25_000_000,
      },
      {
        product: "Pharmaceuticals",
        exportAmount: 10_000_000,
        importAmount: 20_000_000,
      },
      {
        product: "Automobiles",
        exportAmount: 18_000_000,
        importAmount: 28_000_000,
      },
    ],
    India: [
      {
        product: "Timber",
        exportAmount: 5_000_000,
        importAmount: 10_000_000,
      },
      {
        product: "Cotton",
        exportAmount: 7_000_000,
        importAmount: 14_000_000,
      },
      {
        product: "Steel",
        exportAmount: 8_000_000,
        importAmount: 18_000_000,
      },
      {
        product: "Electronics",
        exportAmount: 12_000_000,
        importAmount: 22_000_000,
      },
      {
        product: "Pharmaceuticals",
        exportAmount: 9_000_000,
        importAmount: 19_000_000,
      },
      {
        product: "Automobiles",
        exportAmount: 15_000_000,
        importAmount: 25_000_000,
      },
    ],
    Brazil: [
      {
        product: "Timber",
        exportAmount: 3_000_000,
        importAmount: 8_000_000,
      },
      {
        product: "Cotton",
        exportAmount: 6_000_000,
        importAmount: 12_000_000,
      },
      {
        product: "Steel",
        exportAmount: 10_000_000,
        importAmount: 16_000_000,
      },
      {
        product: "Electronics",
        exportAmount: 9_000_000,
        importAmount: 19_000_000,
      },
      {
        product: "Pharmaceuticals",
        exportAmount: 5_000_000,
        importAmount: 15_000_000,
      },
      {
        product: "Automobiles",
        exportAmount: 14_000_000,
        importAmount: 24_000_000,
      },
    ],
    "United Kingdom": [
      {
        product: "Timber",
        exportAmount: 6_000_000,
        importAmount: 14_000_000,
      },
      {
        product: "Cotton",
        exportAmount: 9_000_000,
        importAmount: 18_000_000,
      },
      {
        product: "Steel",
        exportAmount: 11_000_000,
        importAmount: 20_000_000,
      },
      {
        product: "Electronics",
        exportAmount: 14_000_000,
        importAmount: 25_000_000,
      },
      {
        product: "Pharmaceuticals",
        exportAmount: 10_000_000,
        importAmount: 22_000_000,
      },
      {
        product: "Automobiles",
        exportAmount: 16_000_000,
        importAmount: 28_000_000,
      },
    ],
  };
}

const ChartComponent: React.FC = () => {
  useEffect(() => {
    const options = {
      container: document.getElementById("myChart"),
      title: {
        text: "Product Export and Import Amounts by Country",
      },
      subtitle: {
        text: "Trade Activities Across Selected Products",
        spacing: 30,
      },
      footnote: {
        text: "2023 import and amounts in USD based on international trade records",
        spacing: 30,
      },
      series: Object.entries(getData()).map(([country, data]) => ({
        data,
        type: "range-bar",
        direction: "horizontal",
        xKey: "product",
        xName: "Product",
        yLowKey: "exportAmount",
        yHighKey: "importAmount",
        yLowName: "Lowest Cost",
        yHighName: "Highest Cost",
        yName: country,
        cornerRadius: 2,
      })),
      axes: [
        {
          type: "category",
          position: "right",
          groupPaddingInner: 0.2,
          paddingInner: 0.5,
          paddingOuter: 0.8,
          line: {
            enabled: false,
          },
          gridLine: {
            enabled: true,
          },
        },
        {
          type: "number",
          position: "top",
          nice: false,
          min: 0,
          max: 35000000,
          interval: { values: [3000000, 32000000] },
          label: {
            formatter: ({ value }) => `${value / 1000000}M`,
          },
        },
      ],
    };

    AgCharts.create(options);
  }, []);

  return <div id="myChart" style={{ width: "100dvw", height: "90dvh" }}></div>;
};

export default ChartComponent;