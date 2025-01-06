import React, { useEffect } from "react";
import { AgChartOptions, AgCharts, } from "ag-charts-community";

const numberFormatOptions = {
  notation: "compact",
  compactDisplay: "short",
  style: "currency",
  currency: "GBP",
};

const getData = () => {
  return [
    {
      category: "Fresh Produce",
      sales2022: 1200000,
      sales2023: 1300000,
    },
    {
      category: "Dairy",
      sales2022: 900000,
      sales2023: 950000,
    },
    {
      category: "Bakery",
      sales2022: 800000,
      sales2023: 820000,
    },
    {
      category: "Meat and Poultry",
      sales2022: 1100000,
      sales2023: 1150000,
    },
    {
      category: "Frozen Foods",
      sales2022: 700000,
      sales2023: 750000,
    },
    {
      category: "Beverages",
      sales2022: 950000,
      sales2023: 1000000,
    },
    {
      category: "Household Essentials",
      sales2022: 610000,
      sales2023: 630000,
    },
  ];
};

const ChartComponent: React.FC = () => {
  useEffect(() => {
    const options: AgChartOptions = {
      container: document.getElementById("myChart"),
      title: {
        text: "Belsize Road Tesco Annual Sales",
        fontFamily: `"Architects Daughter", serif`,
      },
      background: {
        fill: "transparent",
      },
      subtitle: {
        text: "Total Sales In 2022 And 2023 For Different Product Categories",
        fontFamily: `"Architects Daughter", serif`,
      },
      footnote: {
        text: "Sales in Pound Sterling (£)",
        fontFamily: `"Architects Daughter", serif`,
      },
      seriesArea: {
        padding: {
          right: 20,
        },
      },
      data: getData(),
      series: [
        {
          type: "range-bar",
          direction: "horizontal",
          xKey: "category",
          xName: "Category",
          yName: "Annual Sales",
          yLowKey: "sales2022",
          yLowName: "Sales 2022",
          yHighKey: "sales2023",
          yHighName: "Sales 2023",
          label: {
            placement: "outside",
            color: "#000",
            formatter: ({ itemId, datum, yHighKey, yLowKey }) => {
              const increase = datum[yHighKey] - datum[yLowKey];
              return itemId === "high"
                ? `↑£${(increase / 1000).toFixed(1)}K`
                : "";
            },
            fontFamily: `"Architects Daughter", serif`,
          },
          itemStyler: ({ datum, yHighKey, yLowKey }) => ({
            fillOpacity: (datum[yHighKey] - datum[yLowKey]) / 100000,
          }),
          cornerRadius: 4,
          strokeWidth: 1,
          lineDash: [3, 5],
        },
      ],
      axes: [
        {
          type: "category",
          position: "left",
          paddingInner: 0.4,
          gridLine: {
            enabled: true,
          },
          label: {
            fontFamily: `"Architects Daughter", serif`,
            color: "#000",
          },
        },
        {
          type: "number",
          position: "top",
          gridLine: {
            enabled: false,
          },
          label: {
            fontFamily: `"Architects Daughter", serif`,
            color: "#000",
            formatter: ({ value }) =>
              Number(value).toLocaleString("en-GB", numberFormatOptions),
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
        background: "linear-gradient(120deg, #ffd194, #70e1f5)",
      }}
    />
  );
};

export default ChartComponent;
