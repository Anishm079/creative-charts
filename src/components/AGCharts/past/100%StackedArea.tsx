import React, { useEffect } from 'react';
import { AgChartOptions, AgCharts } from 'ag-charts-community';

const ChartComponent: React.FC = () => {
  useEffect(() => {
    const interpolation = { type: "smooth" };

    const options: AgChartOptions = {
      container: document.getElementById("myChart"),
      data: getData(),
      title: {
        text: "UK Energy Sources",
      },
      footnote: {
        text: "Source: Department for Business, Energy & Industrial Strategy",
      },
      series: [
        {
          type: "area",
          xKey: "month",
          yKey: "coal",
          yName: "Coal",
          normalizedTo: 100,
          stacked: true,
          interpolation,
        },
        {
          type: "area",
          xKey: "month",
          yKey: "petroleum",
          yName: "Petroleum",
          normalizedTo: 100,
          stacked: true,
          interpolation,
        },
        {
          type: "area",
          xKey: "month",
          yKey: "naturalGas",
          yName: "Natural gas",
          normalizedTo: 100,
          stacked: true,
          interpolation,
        },
        {
          type: "area",
          xKey: "month",
          yKey: "bioenergyWaste",
          yName: "Bioenergy & waste",
          normalizedTo: 100,
          stacked: true,
          interpolation,
        },
        {
          type: "area",
          xKey: "month",
          yKey: "nuclear",
          yName: "Nuclear",
          normalizedTo: 100,
          stacked: true,
          interpolation,
        },
        {
          type: "area",
          xKey: "month",
          yKey: "windSolarHydro",
          yName: "Wind, solar & hydro",
          normalizedTo: 100,
          stacked: true,
          interpolation,
        },
        {
          type: "area",
          xKey: "month",
          yKey: "imported",
          yName: "Imported",
          normalizedTo: 100,
          stacked: true,
          interpolation,
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
          gridLine: {
            enabled: false,
          },
          label: {
            format: "#{.0f}%",
          },
          title: {
            text: "Normalized Percentage Energy",
          },
        },
      ],
      legend: {
        position: "top",
      },
    };

    AgCharts.create(options);
  }, []);

  return <div id="myChart" style={{ height: '90vh', width: '90vw' }}></div>;
};

function getData() {
  return [
    {
      month: "Jan",
      coal: 0.8,
      petroleum: 5.6,
      naturalGas: 9.4,
      bioenergyWaste: 1.6,
      nuclear: 1.2,
      windSolarHydro: 0.7,
      imported: 0.2,
    },
    {
      month: "Feb",
      coal: 1.1,
      petroleum: 5.6,
      naturalGas: 8.8,
      bioenergyWaste: 1.6,
      nuclear: 1.2,
      windSolarHydro: 0.5,
      imported: 0.1,
    },
    {
      month: "Mar",
      coal: 1.4,
      petroleum: 5.4,
      naturalGas: 9.0,
      bioenergyWaste: 1.6,
      nuclear: 1.2,
      windSolarHydro: 0.6,
      imported: 0.1,
    },
    {
      month: "Apr",
      coal: 0.6,
      petroleum: 5.9,
      naturalGas: 6.3,
      bioenergyWaste: 1.3,
      nuclear: 1.2,
      windSolarHydro: 0.5,
      imported: 0.1,
    },
    {
      month: "May",
      coal: 0.5,
      petroleum: 5.6,
      naturalGas: 4.5,
      bioenergyWaste: 1.3,
      nuclear: 1.2,
      windSolarHydro: 0.5,
      imported: 0.2,
    },
    {
      month: "Jun",
      coal: 0.5,
      petroleum: 5.8,
      naturalGas: 3.8,
      bioenergyWaste: 1.3,
      nuclear: 1.2,
      windSolarHydro: 0.4,
      imported: 0.1,
    },
    {
      month: "Jul",
      coal: 0.4,
      petroleum: 5.6,
      naturalGas: 3.9,
      bioenergyWaste: 1.3,
      nuclear: 1.2,
      windSolarHydro: 0.4,
      imported: 0.2,
    },
    {
      month: "Aug",
      coal: 0.4,
      petroleum: 5.9,
      naturalGas: 3.7,
      bioenergyWaste: 1.3,
      nuclear: 1.3,
      windSolarHydro: 0.4,
      imported: 0.1,
    },
    {
      month: "Sep",
      coal: 0.7,
      petroleum: 5.8,
      naturalGas: 4.1,
      bioenergyWaste: 1.3,
      nuclear: 1.2,
      windSolarHydro: 0.6,
      imported: 0.1,
    },
    {
      month: "Oct",
      coal: 0.6,
      petroleum: 5.5,
      naturalGas: 5.9,
      bioenergyWaste: 1.6,
      nuclear: 1.0,
      windSolarHydro: 0.6,
      imported: 0.1,
    },
    {
      month: "Nov",
      coal: 0.9,
      petroleum: 5.9,
      naturalGas: 7.3,
      bioenergyWaste: 1.6,
      nuclear: 1.0,
      windSolarHydro: 0.7,
      imported: 0.1,
    },
    {
      month: "Dec",
      coal: 0.7,
      petroleum: 5.8,
      naturalGas: 8.2,
      bioenergyWaste: 1.6,
      nuclear: 1.1,
      windSolarHydro: 0.6,
      imported: 0.1,
    },
  ];
}

export default ChartComponent;
