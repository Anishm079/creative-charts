import React, { useEffect } from "react";
import { AgCharts } from "ag-charts-react";

type PathType = {
  clear: () => void;
  moveTo: (x: number, y: number) => void;
  lineTo: (x: number, y: number) => void;
  closePath: () => void;
};

type LogoProps = {
  path: PathType;
};

const agChartsLogo: React.FC<LogoProps> = ({ path }) => {
  const pathData = [
    "M58,10l-17,0l-8,8l25,0l0,-8Z",
    "M43,30l0,-7.995l-14,0l-8.008,7.995l22.008,0Z",
    "M13,38.01l4,-4.01l14,0l0,8l-18,0l0,-3.99Z",
    "M41,10l-4,4l-26,0l0,-8l30,0l0,4Z",
    "M16,26l9,0l8,-8l-17,0l0,8Z",
    "M6,37.988l7,0.012l7.992,-8l-14.992,-0.047l-0,8.035Z",
  ];
  updatePath(pathData, path, 0.4, 12, 10);
  return null;
};

const npmLogo: React.FC<LogoProps> = ({ path }) => {
  const pathData = [
    "M5.8,21.75l7.86,0l0,-11.77l3.92,0l0,11.78l3.93,0l0,-15.7l-15.7,0l0,15.69",
  ];
  updatePath(pathData, path, 0.75, 5, 11);
  return null;
};

type DataType = {
  date: Date;
  numberOfVisits: number;
  npmDownloads: number;
};

const ChartComponent: React.FC = () => {
  const options = {
    container: document.getElementById("myChart"),
    title: {
      text: "AG Charts Popularity",
    },
    data: getData(),
    series: [
      {
        type: "scatter",
        xKey: "date",
        xName: "Date",
        yKey: "numberOfVisits",
        yName: "Daily Website Visits",
        shape: agChartsLogo,
        fillOpacity: 1,
      },
      {
        type: "scatter",
        xKey: "date",
        xName: "Date",
        yKey: "npmDownloads",
        yName: "NPM Downloads",
        shape: npmLogo,
        fillOpacity: 1,
      },
    ],
    axes: [
      {
        position: "right",
        type: "number",
        keys: ["numberOfVisits"],
        gridLine: {
          enabled: false,
        },
        label: {
          formatter: ({ value }) => `${value / 1000}K`,
          spacing: 15,
        },
        title: {
          text: "Website Visits",
        },
        crosshair: {
          label: {
            format: `s`,
          },
        },
      },
      {
        position: "left",
        type: "number",
        keys: ["npmDownloads"],
        title: {
          text: "NPM Downloads",
        },
        gridLine: {
          enabled: false,
        },
        label: {
          formatter: ({ value }) => `${value / 1000}K`,
          spacing: 15,
        },
        crosshair: {
          label: {
            format: `s`,
          },
        },
      },
      {
        position: "bottom",
        type: "time",
        gridLine: {
          enabled: true,
        },
        label: {
          format: "%b %y",
          spacing: 10,
        },
        tick: {
          size: 30,
        },
      },
    ],
    legend: {
      position: "top",
    },
  };
  return (
    <AgCharts
      options={options}
      style={{
        width: "100dvw",
        height: "100dvh",
      }}
    />
  );
};

function updatePath(
  pathData: string[],
  path: PathType,
  scale: number,
  xOffset: number,
  yOffset: number
) {
  path.clear();
  pathData.forEach((pathDatum) => {
    const parts = pathDatum.split("l");
    let startX =
      parseFloat(parts[0].substring(1).split(",")[0]) * scale - xOffset;
    let startY =
      parseFloat(parts[0].substring(1).split(",")[1]) * scale - yOffset;
    path.moveTo(startX, startY);

    for (let i = 1; i < parts.length; i++) {
      const coords = parts[i].split(",");
      const x = parseFloat(coords[0]) * scale;
      const y = parseFloat(coords[1]) * scale;
      path.lineTo(startX + x, startY + y);
      startX += x;
      startY += y;
    }
  });
  path.closePath();
}

function getData() {
  return [
    {
      date: new Date("02 Jan 2020"),
      numberOfVisits: 9220,
      pages: 154141,
      hits: 360962,
      bandwidth: 5.33,
      npmDownloads: 34516,
    },
    {
      date: new Date("03 Feb 2020"),
      numberOfVisits: 12393,
      pages: 215514,
      hits: 496148,
      bandwidth: 7.97,
      npmDownloads: 51140,
    },
    {
      date: new Date("02 Mar 2020"),
      numberOfVisits: 12719,
      pages: 225558,
      hits: 519504,
      bandwidth: 9.2,
      npmDownloads: 109219,
    },
    {
      date: new Date("01 Apr 2020"),
      numberOfVisits: 13556,
      pages: 193851,
      hits: 458965,
      bandwidth: 7.93,
      npmDownloads: 112557,
    },
    {
      date: new Date("01 May 2020"),
      numberOfVisits: 9509,
      pages: 114507,
      hits: 291721,
      bandwidth: 5.17,
      npmDownloads: 85795,
    },
    {
      date: new Date("01 Jun 2020"),
      numberOfVisits: 12784,
      pages: 175157,
      hits: 423439,
      bandwidth: 6.62,
      npmDownloads: 55888,
    },
    {
      date: new Date("01 Jul 2020"),
      numberOfVisits: 13601,
      pages: 181967,
      hits: 451437,
      bandwidth: 14.01,
      npmDownloads: 62902,
    },
    {
      date: new Date("03 Aug 2020"),
      numberOfVisits: 12721,
      pages: 209578,
      hits: 488291,
      bandwidth: 7.72,
      npmDownloads: 59211,
    },
    {
      date: new Date("01 Sep 2020"),
      numberOfVisits: 14680,
      pages: 201006,
      hits: 500001,
      bandwidth: 7.31,
      npmDownloads: 65229,
    },
    {
      date: new Date("01 Oct 2020"),
      numberOfVisits: 13583,
      pages: 188815,
      hits: 457082,
      bandwidth: 8.4,
      npmDownloads: 72629,
    },
    {
      date: new Date("02 Nov 2020"),
      numberOfVisits: 14020,
      pages: 192688,
      hits: 489773,
      bandwidth: 7.1,
      npmDownloads: 71309,
    },
    {
      date: new Date("01 Dec 2020"),
      numberOfVisits: 15012,
      pages: 204967,
      hits: 509149,
      bandwidth: 7.81,
      npmDownloads: 78319,
    },
    {
      date: new Date("04 Jan 2021"),
      numberOfVisits: 12381,
      pages: 162542,
      hits: 409275,
      bandwidth: 6.44,
      npmDownloads: 63662,
    },
    {
      date: new Date("03 Feb 2021"),
      numberOfVisits: 17366,
      pages: 493518,
      hits: 766781,
      bandwidth: 22.6,
      npmDownloads: 83660,
    },
    {
      date: new Date("03 Mar 2021"),
      numberOfVisits: 17616,
      pages: 592889,
      hits: 1089596,
      bandwidth: 16.99,
      npmDownloads: 89847,
    },
    {
      date: new Date("01 Apr 2021"),
      numberOfVisits: 15625,
      pages: 514563,
      hits: 946708,
      bandwidth: 12.84,
      npmDownloads: 95669,
    },
    {
      date: new Date("01 May 2021"),
      numberOfVisits: 14503,
      pages: 113555,
      hits: 230240,
      bandwidth: 3.79,
      npmDownloads: 98724,
    },
    {
      date: new Date("02 Jun 2021"),
      numberOfVisits: 18082,
      pages: 598282,
      hits: 1088913,
      bandwidth: 13.87,
      npmDownloads: 73640,
    },
    {
      date: new Date("01 Jul 2021"),
      numberOfVisits: 17185,
      pages: 567044,
      hits: 1028300,
      bandwidth: 14.37,
      npmDownloads: 115345,
    },
    {
      date: new Date("01 Aug 2021"),
      numberOfVisits: 17193,
      pages: 111417,
      hits: 217798,
      bandwidth: 7.37,
      npmDownloads: 92787,
    },
    {
      date: new Date("01 Sep 2021"),
      numberOfVisits: 17224,
      pages: 570184,
      hits: 1043086,
      bandwidth: 15.44,
      npmDownloads: 96740,
    },
    {
      date: new Date("01 Oct 2021"),
      numberOfVisits: 15752,
      pages: 491231,
      hits: 943605,
      bandwidth: 22.55,
      npmDownloads: 123812,
    },
    {
      date: new Date("03 Nov 2021"),
      numberOfVisits: 17596,
      pages: 566068,
      hits: 1072259,
      bandwidth: 17.45,
      npmDownloads: 94898,
    },
    {
      date: new Date("01 Dec 2021"),
      numberOfVisits: 19421,
      pages: 617027,
      hits: 1142606,
      bandwidth: 17.63,
      npmDownloads: 143220,
    },
    {
      date: new Date("01 Jan 2022"),
      numberOfVisits: 13950,
      pages: 70376,
      hits: 144649,
      bandwidth: 2.31,
      npmDownloads: 60877,
    },
    {
      date: new Date("01 Feb 2022"),
      numberOfVisits: 18879,
      pages: 596942,
      hits: 1116111,
      bandwidth: 17.72,
      npmDownloads: 21706,
    },
    {
      date: new Date("01 Mar 2022"),
      numberOfVisits: 19422,
      pages: 620764,
      hits: 1148820,
      bandwidth: 18.77,
      npmDownloads: 21319,
    },
    {
      date: new Date("01 Apr 2022"),
      numberOfVisits: 18978,
      pages: 614782,
      hits: 1135325,
      bandwidth: 18.93,
      npmDownloads: 148221,
    },
    {
      date: new Date("01 May 2022"),
      numberOfVisits: 16439,
      pages: 125450,
      hits: 242010,
      bandwidth: 4.7,
      npmDownloads: 130235,
    },
    {
      date: new Date("01 Jun 2022"),
      numberOfVisits: 22243,
      pages: 759691,
      hits: 1400324,
      bandwidth: 28.09,
      npmDownloads: 120002,
    },
    {
      date: new Date("01 Jul 2022"),
      numberOfVisits: 18512,
      pages: 621122,
      hits: 1144369,
      bandwidth: 23.49,
      npmDownloads: 158809,
    },
    {
      date: new Date("01 Aug 2022"),
      numberOfVisits: 23018,
      pages: 830513,
      hits: 1497682,
      bandwidth: 29.04,
      npmDownloads: 19302,
    },
    {
      date: new Date("01 Sep 2022"),
      numberOfVisits: 24323,
      pages: 892194,
      hits: 1657732,
      bandwidth: 272.38,
      npmDownloads: 175210,
    },
    {
      date: new Date("01 Oct 2022"),
      numberOfVisits: 23825,
      pages: 148570,
      hits: 314399,
      bandwidth: 42.21,
      npmDownloads: 187547,
    },
  ];
}
export default ChartComponent;
