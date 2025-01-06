import React, { useEffect } from "react";
import { AgChartOptions, AgCharts } from "ag-charts-community";

const ChartComponent: React.FC = () => {
  useEffect(() => {
    const options: AgChartOptions = {
      container: document.getElementById("myChart"),
      data: getData(),
      background: {
        fill: "transparent",
      },      
      series: [
        {
          type: "treemap",
          labelKey: "name",
          group: {
            strokeWidth: 0,
            fillOpacity: 0.5,
            fill:"transparent",
          },
        },
      ],
      title: {
        text: "Organisation Chart",
        fontFamily: '"Dancing Script", serif',
      },
      fontFamily: '"Dancing Script", serif',
      backgroundColor: "transparent",
    };

    AgCharts.create(options);
  }, []);

  return (
    <div
      id="myChart"
      style={{
        height: "90dvh",
        width: "90dvw",
        background: "linear-gradient(45deg, #1e2a78, #000000)",
      }}
    />
  );
};

export default ChartComponent;

function getData() {
  // Placeholder function for fetching data
  return [
    {
      name: "Mariah Vaughan",
      children: [
        {
          name: "Bushra Thomas",
          children: [
            { name: "Cyrus Henderson", children: [] },
            { name: "Dora Jordan", children: [] },
            { name: "Skyla Downs", children: [] },
            { name: "Elissa O'Sullivan", children: [] },
          ],
        },
        {
          name: "Craig Roman",
          children: [
            { name: "Martin Reid", children: [] },
            { name: "Joanna Key", children: [] },
          ],
        },
        {
          name: "Vincent Patterson",
          children: [
            { name: "Franklin Hernandez", children: [] },
            { name: "Lilian Zuniga", children: [] },
            { name: "Eliza Schneider", children: [] },
          ],
        },
        { name: "Caspar Mueller", children: [] },
        { name: "Annika Kim", children: [] },
        {
          name: "Aiza Jarvis",
          children: [
            { name: "Katerina Marshall", children: [] },
            {
              name: "Nannie Massey",
              children: [
                { name: "Abel Espinoza", children: [] },
                { name: "Rose Mckay", children: [] },
                { name: "Sana Winters", children: [] },
              ],
            },
          ],
        },
        {
          name: "Alan Burgess",
          children: [{ name: "Jaxon Jefferson", children: [] }],
        },
        { name: "Jay Suarez", children: [] },
      ],
    },
    {
      name: "Nathanael Villa",
      children: [
        { name: "Saira Sparks", children: [] },
        { name: "Stella Wyatt", children: [] },
        {
          name: "Carly O'Connor",
          children: [{ name: "Ieuan Charles", children: [] }],
        },
        { name: "Ariana Morales", children: [] },
      ],
    },
  ];
}
