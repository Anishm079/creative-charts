import React from "react";
import { ResponsiveLine } from "@nivo/line";

const data: Array<{
  id: string;
  data: Array<{
    x: string | number | Date;
    y: string | number | Date;
  }>;
}> = [
  {
    id: "japan",
    color: "hsl(17, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 284,
      },
      {
        x: "helicopter",
        y: 117,
      },
      {
        x: "boat",
        y: 102,
      },
      {
        x: "train",
        y: 72,
      },
      {
        x: "subway",
        y: 27,
      },
      {
        x: "bus",
        y: 130,
      },
      {
        x: "car",
        y: 127,
      },
      {
        x: "moto",
        y: 81,
      },
      {
        x: "bicycle",
        y: 193,
      },
      {
        x: "horse",
        y: 68,
      },
      {
        x: "skateboard",
        y: 7,
      },
      {
        x: "others",
        y: 136,
      },
    ],
  },
  {
    id: "france",
    color: "hsl(55, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 177,
      },
      {
        x: "helicopter",
        y: 174,
      },
      {
        x: "boat",
        y: 161,
      },
      {
        x: "train",
        y: 220,
      },
      {
        x: "subway",
        y: 213,
      },
      {
        x: "bus",
        y: 158,
      },
      {
        x: "car",
        y: 215,
      },
      {
        x: "moto",
        y: 75,
      },
      {
        x: "bicycle",
        y: 273,
      },
      {
        x: "horse",
        y: 53,
      },
      {
        x: "skateboard",
        y: 20,
      },
      {
        x: "others",
        y: 175,
      },
    ],
  },
  {
    id: "us",
    color: "hsl(108, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 41,
      },
      {
        x: "helicopter",
        y: 29,
      },
      {
        x: "boat",
        y: 271,
      },
      {
        x: "train",
        y: 215,
      },
      {
        x: "subway",
        y: 110,
      },
      {
        x: "bus",
        y: 125,
      },
      {
        x: "car",
        y: 105,
      },
      {
        x: "moto",
        y: 107,
      },
      {
        x: "bicycle",
        y: 231,
      },
      {
        x: "horse",
        y: 119,
      },
      {
        x: "skateboard",
        y: 234,
      },
      {
        x: "others",
        y: 37,
      },
    ],
  },
  {
    id: "germany",
    color: "hsl(287, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 65,
      },
      {
        x: "helicopter",
        y: 192,
      },
      {
        x: "boat",
        y: 90,
      },
      {
        x: "train",
        y: 180,
      },
      {
        x: "subway",
        y: 158,
      },
      {
        x: "bus",
        y: 140,
      },
      {
        x: "car",
        y: 262,
      },
      {
        x: "moto",
        y: 16,
      },
      {
        x: "bicycle",
        y: 191,
      },
      {
        x: "horse",
        y: 77,
      },
      {
        x: "skateboard",
        y: 260,
      },
      {
        x: "others",
        y: 251,
      },
    ],
  },
  {
    id: "norway",
    color: "hsl(34, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 6,
      },
      {
        x: "helicopter",
        y: 287,
      },
      {
        x: "boat",
        y: 239,
      },
      {
        x: "train",
        y: 111,
      },
      {
        x: "subway",
        y: 182,
      },
      {
        x: "bus",
        y: 156,
      },
      {
        x: "car",
        y: 230,
      },
      {
        x: "moto",
        y: 179,
      },
      {
        x: "bicycle",
        y: 11,
      },
      {
        x: "horse",
        y: 223,
      },
      {
        x: "skateboard",
        y: 196,
      },
      {
        x: "others",
        y: 132,
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
