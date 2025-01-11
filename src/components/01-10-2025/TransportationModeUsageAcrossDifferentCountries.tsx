import React from "react";
import { ResponsiveLine } from "@nivo/line";

interface DataPoint {
  id: string;
  data: {
    x: string;
    y: number;
  }[];
}

const data: DataPoint[] = [
  {
    id: "japan",
    color: "hsl(145, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 287,
      },
      {
        x: "helicopter",
        y: 79,
      },
      {
        x: "boat",
        y: 162,
      },
      {
        x: "train",
        y: 188,
      },
      {
        x: "subway",
        y: 63,
      },
      {
        x: "bus",
        y: 33,
      },
      {
        x: "car",
        y: 85,
      },
      {
        x: "moto",
        y: 145,
      },
      {
        x: "bicycle",
        y: 136,
      },
      {
        x: "horse",
        y: 169,
      },
      {
        x: "skateboard",
        y: 291,
      },
      {
        x: "others",
        y: 3,
      },
    ],
  },
  {
    id: "france",
    color: "hsl(236, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 127,
      },
      {
        x: "helicopter",
        y: 54,
      },
      {
        x: "boat",
        y: 110,
      },
      {
        x: "train",
        y: 45,
      },
      {
        x: "subway",
        y: 43,
      },
      {
        x: "bus",
        y: 261,
      },
      {
        x: "car",
        y: 291,
      },
      {
        x: "moto",
        y: 95,
      },
      {
        x: "bicycle",
        y: 270,
      },
      {
        x: "horse",
        y: 240,
      },
      {
        x: "skateboard",
        y: 110,
      },
      {
        x: "others",
        y: 265,
      },
    ],
  },
  {
    id: "us",
    color: "hsl(201, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 296,
      },
      {
        x: "helicopter",
        y: 168,
      },
      {
        x: "boat",
        y: 296,
      },
      {
        x: "train",
        y: 84,
      },
      {
        x: "subway",
        y: 152,
      },
      {
        x: "bus",
        y: 92,
      },
      {
        x: "car",
        y: 144,
      },
      {
        x: "moto",
        y: 293,
      },
      {
        x: "bicycle",
        y: 253,
      },
      {
        x: "horse",
        y: 167,
      },
      {
        x: "skateboard",
        y: 172,
      },
      {
        x: "others",
        y: 92,
      },
    ],
  },
  {
    id: "germany",
    color: "hsl(103, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 218,
      },
      {
        x: "helicopter",
        y: 32,
      },
      {
        x: "boat",
        y: 141,
      },
      {
        x: "train",
        y: 122,
      },
      {
        x: "subway",
        y: 163,
      },
      {
        x: "bus",
        y: 167,
      },
      {
        x: "car",
        y: 52,
      },
      {
        x: "moto",
        y: 239,
      },
      {
        x: "bicycle",
        y: 27,
      },
      {
        x: "horse",
        y: 289,
      },
      {
        x: "skateboard",
        y: 293,
      },
      {
        x: "others",
        y: 191,
      },
    ],
  },
  {
    id: "norway",
    color: "hsl(170, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 27,
      },
      {
        x: "helicopter",
        y: 44,
      },
      {
        x: "boat",
        y: 9,
      },
      {
        x: "train",
        y: 215,
      },
      {
        x: "subway",
        y: 278,
      },
      {
        x: "bus",
        y: 110,
      },
      {
        x: "car",
        y: 180,
      },
      {
        x: "moto",
        y: 237,
      },
      {
        x: "bicycle",
        y: 221,
      },
      {
        x: "horse",
        y: 206,
      },
      {
        x: "skateboard",
        y: 173,
      },
      {
        x: "others",
        y: 76,
      },
    ],
  },
];

const MyResponsiveLine: React.FC = () => (
  <ResponsiveLine
    data={data}
    margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
    xScale={{ type: "point" }}
    yScale={{
      type: "linear",
      min: "auto",
      max: "auto",
      stacked: true,
      reverse: false,
    }}
    yFormat=" >-.2f"
    axisTop={null}
    axisRight={null}
    axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "transportation",
      legendOffset: 36,
      legendPosition: "middle",
      truncateTickAt: 0,
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "count",
      legendOffset: -40,
      legendPosition: "middle",
      truncateTickAt: 0,
    }}
    pointSize={10}
    pointColor={{ theme: "background" }}
    pointBorderWidth={2}
    pointBorderColor={{ from: "serieColor" }}
    pointLabel="data.yFormatted"
    pointLabelYOffset={-12}
    enableTouchCrosshair={true}
    useMesh={true}
    legends={[
      {
        anchor: "bottom-right",
        direction: "column",
        justify: false,
        translateX: 100,
        translateY: 0,
        itemsSpacing: 0,
        itemDirection: "left-to-right",
        itemWidth: 80,
        itemHeight: 20,
        itemOpacity: 0.75,
        symbolSize: 12,
        symbolShape: "circle",
        symbolBorderColor: "rgba(0, 0, 0, .5)",
        effects: [
          {
            on: "hover",
            style: {
              itemBackground: "rgba(0, 0, 0, .03)",
              itemOpacity: 1,
            },
          },
        ],
      },
    ]}
  />
);

export default MyResponsiveLine;
