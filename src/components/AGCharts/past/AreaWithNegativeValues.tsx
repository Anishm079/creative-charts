import React, { useEffect } from 'react';
import { AgChartOptions, AgCharts } from 'ag-charts-community';

const ChartComponent: React.FC = () => {
  useEffect(() => {
    const options: AgChartOptions = {
      container: document.getElementById("myChart"),
      data: getData(),
      title: {
        text: "Changes in UK Energy Stock",
      },
      footnote: {
        text: "Source: Department for Business, Energy & Industrial Strategy",
      },
      series: [
        {
          type: "area",
          xKey: "quarter",
          yKey: "naturalGas",
          yName: "Natural gas",
        },
        {
          type: "area",
          xKey: "quarter",
          yKey: "coal",
          yName: "Coal",
        },
        {
          type: "area",
          xKey: "quarter",
          yKey: "primaryOil",
          yName: "Primary oil",
        },
        {
          type: "area",
          xKey: "quarter",
          yKey: "petroleum",
          yName: "Petroleum",
        },
        {
          type: "area",
          xKey: "quarter",
          yKey: "manufacturedFuels",
          yName: "Manufactured fuels",
        },
      ],
      axes: [
        {
          type: "category",
          position: "bottom",
        },
        {
          type: "number",
          position: "left",
          title: {
            text: "Thousand Tonnes of Oil Equivalent",
          },
        },
      ],
    };

    AgCharts.create(options);
  }, []);

  return <div id="myChart" style={{ height: '90vh', width: '90vw' }}></div>;
};

function getData() {
  return [
    {
      quarter: "Q1",
      coal: -666,
      manufacturedFuels: -14,
      primaryOil: -261,
      petroleum: -124,
      naturalGas: -1197,
    },
    {
      quarter: "Q2",
      coal: 208,
      manufacturedFuels: 71,
      primaryOil: 950,
      petroleum: -318,
      naturalGas: 906,
    },
    {
      quarter: "Q3",
      coal: 426,
      manufacturedFuels: 19,
      primaryOil: -845,
      petroleum: 166,
      naturalGas: 276,
    },
    {
      quarter: "Q4",
      coal: 158,
      manufacturedFuels: -29,
      primaryOil: -156,
      petroleum: -19,
      naturalGas: 672,
    },
  ];
}

export default ChartComponent;
