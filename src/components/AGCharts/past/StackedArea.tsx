import React, { useEffect } from "react";
import { AgChartOptions, AgCharts } from "ag-charts-community";

const ChartComponent: React.FC = () => {
  useEffect(() => {
    const interpolation = { type: "smooth" };

    const options: AgChartOptions = {
      container: document.getElementById("myChart"),
      data: getData(),
      title: {
        text: "Science Museums Visitors",
      },
      footnote: {
        text: "Source: Department for Digital, Culture, Media & Sport",
      },
      series: [
        {
          type: "area",
          xKey: "date",
          stacked: true,
          yKey: "Science Museum",
          yName: "Science Museum",
          interpolation,
        },
        {
          type: "area",
          xKey: "date",
          stacked: true,
          yKey: "National Media Museum",
          yName: "National Media Museum",
          interpolation,
        },
        {
          type: "area",
          xKey: "date",
          stacked: true,
          yKey: "National Railway Museum",
          yName: "National Railway Museum",
          interpolation,
        },
        {
          type: "area",
          xKey: "date",
          stacked: true,
          yKey: "Locomotion",
          yName: "Locomotion",
          interpolation,
        },
        {
          type: "area",
          xKey: "date",
          yKey: "Museum of Science and Industry, Manchester",
          yName: "Museum of Science and Industry, Manchester",
          stacked: true,
          interpolation,
        },
        {
          type: "area",
          xKey: "date",
          yKey: "National Coal Mining Museum for England",
          yName: "National Coal Mining Museum for England",
          stacked: true,
          interpolation,
        },
      ],
      axes: [
        {
          type: "time",
          position: "bottom",
          label: {
            format: "%b",
          },
          nice: false,
          crossLines: [
            {
              type: "range",
              range: [new Date(2019, 5, 1), new Date(2019, 8, 1)],
              strokeWidth: 0,
              label: {
                text: "Peak Season\nJun - Sep",
                position: "inside-top",
              },
            },
          ],
        },
        {
          type: "number",
          position: "left",
          title: {
            text: "Total visitors",
          },
          label: {
            formatter: (params: { value: number }) => {
              return params.value / 1000 + "k";
            },
          },
        },
      ],
    };

    AgCharts.create(options);
  }, []);

  return <div id="myChart" style={{ height: "90vh", width: "90vw" }}></div>;
};

function getData() {
  return [
    {
      date: new Date(Date.UTC(2019, 0, 1)),
      "Science Museum": 237881,
      "National Media Museum": 32560,
      "National Railway Museum": 40148,
      Locomotion: 5967,
      "Museum of Science and Industry, Manchester": 35122,
      "National Coal Mining Museum for England": 4947,
    },
    {
      date: new Date(Date.UTC(2019, 1, 1)),
      "Science Museum": 272074,
      "National Media Museum": 49546,
      "National Railway Museum": 57824,
      Locomotion: 7659,
      "Museum of Science and Industry, Manchester": 52192,
      "National Coal Mining Museum for England": 7825,
    },
    {
      date: new Date(Date.UTC(2019, 2, 1)),
      "Science Museum": 285715,
      "National Media Museum": 35009,
      "National Railway Museum": 51892,
      Locomotion: 9856,
      "Museum of Science and Industry, Manchester": 42920,
      "National Coal Mining Museum for England": 6276,
    },
    {
      date: new Date(Date.UTC(2019, 3, 1)),
      "Science Museum": 314865,
      "National Media Museum": 36572,
      "National Railway Museum": 68999,
      Locomotion: 13746,
      "Museum of Science and Industry, Manchester": 47432,
      "National Coal Mining Museum for England": 12091,
    },
    {
      date: new Date(Date.UTC(2019, 4, 1)),
      "Science Museum": 229772,
      "National Media Museum": 30497,
      "National Railway Museum": 56119,
      Locomotion: 18445,
      "Museum of Science and Industry, Manchester": 44595,
      "National Coal Mining Museum for England": 11080,
    },
    {
      date: new Date(Date.UTC(2019, 5, 1)),
      "Science Museum": 241065,
      "National Media Museum": 29018,
      "National Railway Museum": 48814,
      Locomotion: 17326,
      "Museum of Science and Industry, Manchester": 41630,
      "National Coal Mining Museum for England": 8599,
    },
    {
      date: new Date(Date.UTC(2019, 6, 1)),
      "Science Museum": 354943,
      "National Media Museum": 47193,
      "National Railway Museum": 66416,
      Locomotion: 23121,
      "Museum of Science and Industry, Manchester": 64302,
      "National Coal Mining Museum for England": 10431,
    },
    {
      date: new Date(Date.UTC(2019, 7, 1)),
      "Science Museum": 363725,
      "National Media Museum": 51087,
      "National Railway Museum": 94972,
      Locomotion: 32138,
      "Museum of Science and Industry, Manchester": 68135,
      "National Coal Mining Museum for England": 20140,
    },
    {
      date: new Date(Date.UTC(2019, 8, 1)),
      "Science Museum": 196336,
      "National Media Museum": 29462,
      "National Railway Museum": 55506,
      Locomotion: 13825,
      "Museum of Science and Industry, Manchester": 39673,
      "National Coal Mining Museum for England": 8216,
    },
    {
      date: new Date(Date.UTC(2019, 9, 1)),
      "Science Museum": 312781,
      "National Media Museum": 42880,
      "National Railway Museum": 73100,
      Locomotion: 17296,
      "Museum of Science and Industry, Manchester": 51834,
      "National Coal Mining Museum for England": 8444,
    },
    {
      date: new Date(Date.UTC(2019, 10, 1)),
      "Science Museum": 254938,
      "National Media Museum": 29745,
      "National Railway Museum": 51243,
      Locomotion: 13826,
      "Museum of Science and Industry, Manchester": 35991,
      "National Coal Mining Museum for England": 5903,
    },
    {
      date: new Date(Date.UTC(2019, 11, 1)),
      "Science Museum": 237880,
      "National Media Museum": 26347,
      "National Railway Museum": 49346,
      Locomotion: 7492,
      "Museum of Science and Industry, Manchester": 32697,
      "National Coal Mining Museum for England": 6409,
    },
  ];
}

export default ChartComponent;
