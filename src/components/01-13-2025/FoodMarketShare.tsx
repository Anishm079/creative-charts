import React from "react";
import { ResponsiveRadialBar } from "@nivo/radial-bar";

interface DataItem {
  id: string;
  data: Array<{ x: string; y: number }>;
}

const data: DataItem[] = [
  {
    id: "Supermarket",
    data: [
      {
        x: "Vegetables",
        y: 229,
      },
      {
        x: "Fruits",
        y: 73,
      },
      {
        x: "Meat",
        y: 110,
      },
    ],
  },
  {
    id: "Combini",
    data: [
      {
        x: "Vegetables",
        y: 196,
      },
      {
        x: "Fruits",
        y: 132,
      },
      {
        x: "Meat",
        y: 72,
      },
    ],
  },
  {
    id: "Online",
    data: [
      {
        x: "Vegetables",
        y: 171,
      },
      {
        x: "Fruits",
        y: 191,
      },
      {
        x: "Meat",
        y: 245,
      },
    ],
  },
];

const CustomLabelLayer = ({ bars }) => {
  return bars.map((bar) => (
    <text
      key={bar.key}
      x={bar.x}
      y={bar.y}
      textAnchor="middle"
      dominantBaseline="central"
      style={{
        fill: "#000000",
        fontSize: 24,
        fontWeight: "bold",
      }}
    >
      {bar.data.value}
    </text>
  ));
};

const MyResponsiveRadialBar: React.FC = () => (
  <ResponsiveRadialBar
    data={data}
    valueFormat=">-.2f"
    padding={0.4}
    cornerRadius={2}
    margin={{ top: 40, right: 120, bottom: 40, left: 40 }}
    radialAxisStart={{ tickSize: 5, tickPadding: 5, tickRotation: 0 }}
    circularAxisOuter={{ tickSize: 5, tickPadding: 12, tickRotation: 0 }}
    labelsSkipAngle={10}
    labelsTextColor="#000000"
    labelsRadiusOffset={0.5}
    label={(d) => `${d.value}`}
    labelComponent={<CustomLabelLayer />}
    legends={[
      {
        anchor: "right",
        direction: "column",
        justify: false,
        translateX: -180,
        translateY: 0,
        itemsSpacing: 6,
        itemDirection: "left-to-right",
        itemWidth: 100,
        itemHeight: 18,
        itemTextColor: "#000000",
      },
    ]}
  />
);

export default MyResponsiveRadialBar;
