import React from "react";
import { ResponsiveStream } from "@nivo/stream";

interface DataItem {
  [key: string]: number;
}

const data: DataItem[] = [
  {
    Raoul: 194,
    Josiane: 34,
    Marcel: 20,
    René: 196,
    Paul: 43,
    Jacques: 68,
  },
  {
    Raoul: 172,
    Josiane: 12,
    Marcel: 192,
    René: 106,
    Paul: 110,
    Jacques: 46,
  },
  {
    Raoul: 32,
    Josiane: 43,
    Marcel: 58,
    René: 21,
    Paul: 30,
    Jacques: 92,
  },
  {
    Raoul: 39,
    Josiane: 182,
    Marcel: 196,
    René: 17,
    Paul: 133,
    Jacques: 191,
  },
  {
    Raoul: 63,
    Josiane: 13,
    Marcel: 40,
    René: 48,
    Paul: 44,
    Jacques: 32,
  },
  {
    Raoul: 169,
    Josiane: 90,
    Marcel: 38,
    René: 150,
    Paul: 104,
    Jacques: 157,
  },
  {
    Raoul: 145,
    Josiane: 50,
    Marcel: 150,
    René: 89,
    Paul: 109,
    Jacques: 15,
  },
  {
    Raoul: 125,
    Josiane: 53,
    Marcel: 179,
    René: 88,
    Paul: 184,
    Jacques: 12,
  },
  {
    Raoul: 183,
    Josiane: 38,
    Marcel: 183,
    René: 41,
    Paul: 158,
    Jacques: 168,
  },
];

const MyResponsiveStream: React.FC = () => (
  <ResponsiveStream
    data={data}
    keys={["Raoul", "Josiane", "Marcel", "René", "Paul", "Jacques"]}
    margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
    axisTop={null}
    axisRight={null}
    axisBottom={{
      orient: "bottom",
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "",
      legendOffset: 36,
      truncateTickAt: 0,
    }}
    axisLeft={{
      orient: "left",
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "",
      legendOffset: -40,
      truncateTickAt: 0,
    }}
    enableGridX={true}
    enableGridY={false}
    offsetType="silhouette"
    colors={{ scheme: "nivo" }}
    fillOpacity={0.85}
    borderColor={{ theme: "background" }}
    defs={[
      {
        id: "dots",
        type: "patternDots",
        background: "inherit",
        color: "#2c998f",
        size: 4,
        padding: 2,
        stagger: true,
      },
      {
        id: "squares",
        type: "patternSquares",
        background: "inherit",
        color: "#e4c912",
        size: 6,
        padding: 2,
        stagger: true,
      },
    ]}
    fill={[
      {
        match: {
          id: "Paul",
        },
        id: "dots",
      },
      {
        match: {
          id: "Marcel",
        },
        id: "squares",
      },
    ]}
    dotSize={8}
    dotColor={{ from: "color" }}
    dotBorderWidth={2}
    dotBorderColor={{
      from: "color",
      modifiers: [["darker", 0.7]],
    }}
    legends={[
      {
        anchor: "bottom-right",
        direction: "column",
        translateX: 100,
        itemWidth: 80,
        itemHeight: 20,
        itemTextColor: "#000000",
        symbolSize: 12,
        symbolShape: "circle",
        effects: [
          {
            on: "hover",
            style: {
              itemTextColor: "#000000",
            },
          },
        ],
      },
    ]}
  />
);

export default MyResponsiveStream;
