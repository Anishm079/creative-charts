import React, { useEffect } from "react";
import { AgChartOptions, AgCharts } from "ag-charts-community";

const formatter = new Intl.NumberFormat("en-US", {
  useGrouping: true,
  maximumFractionDigits: 0,
});

const ChartComponent: React.FC = () => {
  useEffect(() => {
    const options: AgChartOptions = {
      container: document.getElementById("myChart"),
      data: getData(),
      series: [
        {
          type: "treemap",
          labelKey: "name",
          secondaryLabelKey: "gdp",
          sizeKey: "gdp",
          tile: {
            label: {
              minimumFontSize: 9,
              fontFamily: '"Dancing Script", serif',
              background:"transparent"
            },
            secondaryLabel: {
              minimumFontSize: 6,
              fontFamily: '"Dancing Script", serif',
              background:"transparent",
              formatter: ({ value }) =>
                value != null ? `$${formatter.format(value)} B` : undefined,
            },
            padding: 6,
          },
        },
      ],
      title: {
        text: "Countries by GDP",
        fontFamily: '"Dancing Script", serif',
      },
      background:{
        fill:"transparent"
      },
    };

    AgCharts.create(options);
  }, []);

  return (
    <div
      id="myChart"
      style={{
        height: "90dvh",
        width: "90dvw",
        fontFamily: '"Dancing Script", serif',
        backgroundColor: "linear-gradient(135deg, #7f00ff, #e100ff)",
      }}
    />
  );
};

export default ChartComponent;

function getData() {
  // Placeholder function for fetching data
  return [    {      name: "Americas",      children: [        { name: "United States", gdp: 26950 },        { name: "Brazil", gdp: 2127 },        { name: "Canada", gdp: 2118 },        { name: "Mexico", gdp: 1811 },      ],    },    {      name: "Asia",      children: [        { name: "China", gdp: 17701 },        { name: "Japan", gdp: 4231 },        { name: "India", gdp: 3732 },        { name: "South Korea", gdp: 1709 },        { name: "Indonesia", gdp: 1417 },        { name: "Saudi Arabia", gdp: 1069 },      ],    },    {      name: "Europe",      children: [        { name: "Germany", gdp: 4430 },        { name: "United Kingdom", gdp: 3332 },        { name: "France", gdp: 3049 },        { name: "Italy", gdp: 2186 },        { name: "Russia", gdp: 1862 },        { name: "Spain", gdp: 1582 },        { name: "Turkey", gdp: 1155 },        { name: "Netherlands", gdp: 1093 },        { name: "Switzerland", gdp: 906 },      ],    },  ];
}
