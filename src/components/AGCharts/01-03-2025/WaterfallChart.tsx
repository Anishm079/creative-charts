import React, { useEffect } from 'react';
import { AgChartOptions, AgCharts } from 'ag-charts-community';

const formatter = new Intl.NumberFormat(undefined, {
  minimumFractionDigits: 1,
  maximumFractionDigits: 1,
});

const getData = () => {
  return [
    {
      player: "Zidane\nIqbal",
      age: 20,
      marketValue: 1.0,
      nationality: "Iraq",
      joined: "FC Utrecht",
      fee: 1.0,
      date: new Date(2023, 6, 1),
    },
    {
      player: "Mason\nMount",
      age: 24,
      marketValue: 60.0,
      nationality: "England",
      left: "Chelsea FC",
      fee: -64.2,
      date: new Date(2023, 6, 5),
    },
    {
      player: "André\nOnana",
      age: 27,
      marketValue: 35.0,
      nationality: "Cameroon",
      left: "Inter Milan",
      fee: -50.2,
      date: new Date(2023, 6, 20),
    },
    {
      player: "Alex\nTelles",
      age: 30,
      marketValue: 7.5,
      nationality: "Brazil",
      joined: "Al-Nassr FC",
      fee: 4.6,
      date: new Date(2023, 6, 23),
    },
    {
      player: "Anthony\nElanga",
      age: 21,
      marketValue: 18.0,
      nationality: "Sweden",
      joined: "Nottingham Forest",
      fee: 17.5,
      date: new Date(2023, 6, 25),
    },
    {
      player: "Rasmus\nHøjlund",
      age: 20,
      marketValue: 45.0,
      nationality: "Denmark",
      left: "Atalanta BC",
      fee: -75.0,
      date: new Date(2023, 7, 5),
    },
    {
      player: "Fred",
      age: 30,
      marketValue: 20.0,
      nationality: "Brazil",
      joined: "Fenerbahce",
      fee: 9.74,
      date: new Date(2023, 7, 11),
    },
    {
      player: "Matej\nKovar",
      age: 23,
      marketValue: 1.8,
      nationality: "Czech Republic",
      joined: "Bayer 04 Leverkusen",
      fee: 5.0,
      date: new Date(2023, 7, 15),
    },
    {
      player: "Dean\nHenderson",
      age: 26,
      marketValue: 18.0,
      nationality: "England",
      joined: "Crystal Palace",
      fee: 17.5,
      date: new Date(2023, 7, 31),
    },
    {
      player: "Sofyan\nAmrabat",
      age: 27,
      marketValue: 30.0,
      nationality: "Morocco",
      left: "ACF Fiorentina",
      fee: -9.0,
      date: new Date(2023, 8, 1),
    },
    {
      player: "Altay\nBayındır",
      age: 25,
      marketValue: 11.0,
      nationality: "Turkey",
      left: "Fenerbahce",
      fee: -5.0,
      date: new Date(2023, 8, 1),
    },
  ];
};

const ChartComponent: React.FC = () => {
  useEffect(() => {
    const options: AgChartOptions = {
      container: document.getElementById("myChart"),
      data: getData(),
      title: {
        text: "Manchester United Transfers",
        fontFamily:`"Architects Daughter", serif`,
        color:"#000"
      },
      background:{
        fill:"transparent"
      },
      subtitle: {
        text: "Outgoing Sales & Incoming Signings from Season 2023-2024",
        fontFamily:`"Architects Daughter", serif`,
        color:"#000"
      },
      footnote: {
        text: "Arrivals: 17, Departures: 11",
        fontFamily:`"Architects Daughter", serif`,
        color:"#000"
      },
      series: [
        {
          type: "waterfall",
          xKey: "player",
          xName: "Player",
          yKey: "fee",
          yName: "Fee",
          item: {
            positive: {
              name: "Outs",
              itemStyler: ({ datum, yKey }) => ({
                fillOpacity: Math.max(0.5, datum[yKey] / 17.5),
              }),
              label: {
                formatter: ({ value }) => `£${value}M`,
                fontFamily:`"Architects Daughter", serif`,
                color:"#000"
              },
            },
            negative: {
              name: "Ins",
              itemStyler: ({ datum, yKey }) => ({
                fillOpacity: Math.max(0.5, Math.abs(datum[yKey]) / 75),
              }),
              label: {
                formatter: ({ value }) => `-£${Math.abs(value)}M`,
                fontFamily:`"Architects Daughter", serif`,
                color:"#000"
              },
            },
          },
        },
      ],
      axes: [
        {
          type: "number",
          position: "left",
          interval: { values: [0, -148.1] },
          label: {
            formatter: ({ value }) => `-£${formatter.format(Math.abs(value))}M`,
            fontFamily:`"Architects Daughter", serif`,
            color:"#000"
          },
        },
        {
          type: "category",
          position: "top",
          gridLine: { enabled: true },
          label:{
            fontFamily:`"Architects Daughter", serif`,
            color:"#000"
          }
        },
      ],
      legend: {
        position: "top",
      },
    };

    AgCharts.create(options);
  }, []);

  return (
    <div id="myChart" style={{ height: '100dvh', width: '100dvw', background: 'linear-gradient(75deg, #3a1c71, #d76d77, #fb2e2e)' }} />
  );
};

export default ChartComponent;
