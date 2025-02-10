import { ResponsivePie } from "@nivo/pie";
import React from "react";

interface PieDatum {
  id: string;
  value: number;
  [key: string]: any;
}

const data: PieDatum[] = [
  {
    id: "solar",
    label: "Solar",
    value: 320,
    color: "hsl(50, 70%, 50%)",
  },
  {
    id: "wind",
    label: "Wind",
    value: 450,
    color: "hsl(180, 70%, 50%)",
  },
  {
    id: "hydro",
    label: "Hydro",
    value: 610,
    color: "hsl(220, 70%, 50%)",
  },
  {
    id: "geothermal",
    label: "Geothermal",
    value: 140,
    color: "hsl(310, 70%, 50%)",
  },
  {
    id: "biomass",
    label: "Biomass",
    value: 280,
    color: "hsl(100, 70%, 50%)",
  },
];
const MyResponsivePie: React.FC = () => (
  <ResponsivePie
    data={data}
    margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
    innerRadius={0.5}
    padAngle={0.7}
    cornerRadius={3}
    activeOuterRadiusOffset={8}
    borderWidth={1}
    borderColor={{
      from: "color",
      modifiers: [["darker", 0.2]],
    }}
    arcLinkLabelsSkipAngle={10}
    arcLinkLabelsTextColor="#ffffff"
    arcLinkLabelsThickness={6}
    arcLinkLabelsColor={{ from: "color" }}
    arcLinkLabelsTextOffset={10}
    arcLinkLabelsTextSize={24} // Increase font size
    arcLinkLabelsTextWeight={600}
    arcLabelsSkipAngle={10}
    arcLabelsTextColor="#ffffff"
    arcLabelsTextSize={20} // Increase font size
    arcLabelsTextWeight={600}
    defs={[
      {
        id: "dots",
        type: "patternDots",
        background: "inherit",
        color: "rgba(255, 255, 255, 0.3)",
        size: 4,
        padding: 1,
        stagger: true,
      },
      {
        id: "lines",
        type: "patternLines",
        background: "inherit",
        color: "rgba(255, 255, 255, 0.3)",
        rotation: -45,
        lineWidth: 6,
        spacing: 10,
      },
    ]}
    fill={[
      {
        match: {
          id: "ruby",
        },
        id: "dots",
      },
      {
        match: {
          id: "c",
        },
        id: "dots",
      },
      {
        match: {
          id: "go",
        },
        id: "dots",
      },
      {
        match: {
          id: "python",
        },
        id: "dots",
      },
      {
        match: {
          id: "scala",
        },
        id: "lines",
      },
      {
        match: {
          id: "lisp",
        },
        id: "lines",
      },
      {
        match: {
          id: "elixir",
        },
        id: "lines",
      },
      {
        match: {
          id: "javascript",
        },
        id: "lines",
      },
    ]}
    legends={[
      {
        anchor: "bottom" as const,
        direction: "row" as const,
        justify: false,
        translateX: 0,
        translateY: 56,
        itemsSpacing: 0,
        itemWidth: 140, // Increase item width
        itemHeight: 24, // Increase item height
        itemTextColor: "#ffffff",
        itemDirection: "left-to-right" as const,
        itemOpacity: 1,
        symbolSize: 18,
        symbolShape: "circle" as const,
        effects: [
          {
            on: "hover",
            style: {
              itemTextColor: "#ffffff",
            },
          },
        ],
      },
    ]}
  />
);

export default MyResponsivePie;
