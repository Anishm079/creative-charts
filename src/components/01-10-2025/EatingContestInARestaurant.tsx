import React from "react";
import { ResponsiveMarimekko } from "@nivo/marimekko";

const data = [
  {
    statement: "it's good",
    participation: 21,
    stronglyAgree: 2,
    agree: 20,
    disagree: 25,
    stronglyDisagree: 28,
  },
  {
    statement: "it's sweet",
    participation: 3,
    stronglyAgree: 11,
    agree: 6,
    disagree: 0,
    stronglyDisagree: 10,
  },
  {
    statement: "it's spicy",
    participation: 3,
    stronglyAgree: 6,
    agree: 10,
    disagree: 2,
    stronglyDisagree: 22,
  },
  {
    statement: "worth eating",
    participation: 31,
    stronglyAgree: 23,
    agree: 16,
    disagree: 14,
    stronglyDisagree: 20,
  },
  {
    statement: "worth buying",
    participation: 28,
    stronglyAgree: 25,
    agree: 5,
    disagree: 29,
    stronglyDisagree: 2,
  },
];

const MyResponsiveMarimekko: React.FC<MyResponsiveMarimekkoProps> = () => (
  <ResponsiveMarimekko
    data={data}
    id="statement"
    value="participation"
    dimensions={[
      {
        id: "disagree strongly",
        value: "stronglyDisagree",
      },
      {
        id: "disagree",
        value: "disagree",
      },
      {
        id: "agree",
        value: "agree",
      },
      {
        id: "agree strongly",
        value: "stronglyAgree",
      },
    ]}
    innerPadding={9}
    axisTop={null}
    axisRight={{
      orient: "right",
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "",
      legendOffset: 0,
      truncateTickAt: 0,
    }}
    axisBottom={{
      orient: "bottom",
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "participation",
      legendOffset: 36,
      legendPosition: "middle",
      truncateTickAt: 0,
    }}
    axisLeft={{
      orient: "left",
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "opinions",
      legendOffset: -40,
      legendPosition: "middle",
      truncateTickAt: 0,
    }}
    margin={{ top: 40, right: 80, bottom: 100, left: 80 }}
    colors={{ scheme: "spectral" }}
    borderWidth={1}
    borderColor={{
      from: "color",
      modifiers: [["darker", 0.2]],
    }}
    defs={[
      {
        id: "lines",
        type: "patternLines",
        background: "rgba(0, 0, 0, 0)",
        color: "inherit",
        rotation: -45,
        lineWidth: 4,
        spacing: 8,
      },
    ]}
    fill={[
      {
        match: {
          id: "agree strongly",
        },
        id: "lines",
      },
      {
        match: {
          id: "disagree strongly",
        },
        id: "lines",
      },
    ]}
    legends={[
      {
        anchor: "bottom",
        direction: "row",
        justify: false,
        translateX: 0,
        translateY: 80,
        itemsSpacing: 0,
        itemWidth: 140,
        itemHeight: 18,
        itemTextColor: "#999",
        itemDirection: "right-to-left",
        itemOpacity: 1,
        symbolSize: 18,
        symbolShape: "square",
        effects: [
          {
            on: "hover",
            style: {
              itemTextColor: "#000",
            },
          },
        ],
      },
    ]}
  />
);

export default MyResponsiveMarimekko;
