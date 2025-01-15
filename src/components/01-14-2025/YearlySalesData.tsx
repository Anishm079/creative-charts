import React from "react";
import { ResponsiveBump } from "@nivo/bump";

interface DataPoint {
  id: string;
  data: {
    x: number | string;
    y: number;
  }[];
}

const data: DataPoint[] = [
  {
    id: "Electronics",
    data: [
      { x: "2000", y: 1 },
      { x: "2001", y: 5 },
      { x: "2002", y: 9 },
      { x: "2003", y: 7 },
      { x: "2004", y: 12 },
    ],
  },
  {
    id: "Furniture",
    data: [
      { x: "2000", y: 11 },
      { x: "2001", y: 1 },
      { x: "2002", y: 5 },
      { x: "2003", y: 11 },
      { x: "2004", y: 8 },
    ],
  },
  {
    id: "Clothing",
    data: [
      { x: "2000", y: 10 },
      { x: "2001", y: 9 },
      { x: "2002", y: 10 },
      { x: "2003", y: 5 },
      { x: "2004", y: 11 },
    ],
  },
  {
    id: "Groceries",
    data: [
      { x: "2000", y: 3 },
      { x: "2001", y: 8 },
      { x: "2002", y: 3 },
      { x: "2003", y: 1 },
      { x: "2004", y: 1 },
    ],
  },
  {
    id: "Books",
    data: [
      { x: "2000", y: 8 },
      { x: "2001", y: 11 },
      { x: "2002", y: 1 },
      { x: "2003", y: 2 },
      { x: "2004", y: 6 },
    ],
  },
  {
    id: "Toys",
    data: [
      { x: "2000", y: 2 },
      { x: "2001", y: 2 },
      { x: "2002", y: 11 },
      { x: "2003", y: 9 },
      { x: "2004", y: 4 },
    ],
  },
  {
    id: "Beauty",
    data: [
      { x: "2000", y: 12 },
      { x: "2001", y: 3 },
      { x: "2002", y: 4 },
      { x: "2003", y: 10 },
      { x: "2004", y: 7 },
    ],
  },
  {
    id: "Automobiles",
    data: [
      { x: "2000", y: 6 },
      { x: "2001", y: 12 },
      { x: "2002", y: 7 },
      { x: "2003", y: 12 },
      { x: "2004", y: 9 },
    ],
  },
  {
    id: "Home Appliances",
    data: [
      { x: "2000", y: 4 },
      { x: "2001", y: 7 },
      { x: "2002", y: 12 },
      { x: "2003", y: 3 },
      { x: "2004", y: 3 },
    ],
  },
  {
    id: "Gardening",
    data: [
      { x: "2000", y: 5 },
      { x: "2001", y: 4 },
      { x: "2002", y: 2 },
      { x: "2003", y: 8 },
      { x: "2004", y: 2 },
    ],
  },
  {
    id: "Stationery",
    data: [
      { x: "2000", y: 7 },
      { x: "2001", y: 6 },
      { x: "2002", y: 6 },
      { x: "2003", y: 6 },
      { x: "2004", y: 10 },
    ],
  },
  {
    id: "Sports Equipment",
    data: [
      { x: "2000", y: 9 },
      { x: "2001", y: 10 },
      { x: "2002", y: 8 },
      { x: "2003", y: 4 },
      { x: "2004", y: 5 },
    ],
  },
];


const MyResponsiveBump: React.FC = () => (
  <ResponsiveBump
    data={data}
    colors={{ scheme: "spectral" }}
    lineWidth={3}
    xScale={{ type: "point" }}
    yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: false, reverse: false }}
    activeLineWidth={6}
    inactiveLineWidth={3}
    inactiveOpacity={0.15}
    pointSize={10}
    activePointSize={16}
    inactivePointSize={0}
    pointColor={{ theme: "background" }}
    pointBorderWidth={3}
    activePointBorderWidth={3}
    pointBorderColor={{ from: "serie.color" }}
    axisTop={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "",
      legendPosition: "middle",
      legendOffset: -36,
      truncateTickAt: 0,
    }}
    axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "year",
      legendPosition: "middle",
      legendOffset: 32,
      truncateTickAt: 0,
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "sales",
      legendPosition: "middle",
      legendOffset: -40,
      truncateTickAt: 0,
    }}
    margin={{ top: 40, right: 100, bottom: 40, left: 60 }}
    theme={{
        axis: {
          legend: {
            text: {
              fontSize: '1.2em'
            }
          },
          ticks: {
            text: {
              fontSize: '1em'
            }
          }
        }
      }}
  />
);

export default MyResponsiveBump;