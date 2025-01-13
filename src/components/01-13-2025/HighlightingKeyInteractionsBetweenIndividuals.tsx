import React from "react";
import { ResponsiveSankey } from "@nivo/sankey";

interface Node {
  id: string;
  [key: string]: any;
}

interface Link {
  source: string;
  target: string;
  value: number;
  [key: string]: any;
}

interface SankeyData {
  nodes: Node[];
  links: Link[];
}

const data: SankeyData = {
  nodes: [
    {
      id: "John",
      nodeColor: "hsl(271, 70%, 50%)",
    },
    {
      id: "Raoul",
      nodeColor: "hsl(160, 70%, 50%)",
    },
    {
      id: "Jane",
      nodeColor: "hsl(241, 70%, 50%)",
    },
    {
      id: "Marcel",
      nodeColor: "hsl(22, 70%, 50%)",
    },
    {
      id: "Ibrahim",
      nodeColor: "hsl(288, 70%, 50%)",
    },
    {
      id: "Junko",
      nodeColor: "hsl(319, 70%, 50%)",
    },
  ],
  links: [
    {
      source: "Junko",
      target: "Marcel",
      value: 88,
    },
    {
      source: "Junko",
      target: "John",
      value: 175,
    },
    {
      source: "Junko",
      target: "Raoul",
      value: 182,
    },
    {
      source: "Raoul",
      target: "Ibrahim",
      value: 62,
    },
    {
      source: "Raoul",
      target: "Marcel",
      value: 142,
    },
    {
      source: "Raoul",
      target: "Jane",
      value: 96,
    },
    {
      source: "Ibrahim",
      target: "Jane",
      value: 45,
    },
    {
      source: "Ibrahim",
      target: "John",
      value: 146,
    },
    {
      source: "John",
      target: "Marcel",
      value: 178,
    },
    {
      source: "John",
      target: "Jane",
      value: 76,
    },
  ],
};

const MyResponsiveSankey: React.FC = () => (
  <ResponsiveSankey
    data={data}
    margin={{ top: 40, right: 160, bottom: 40, left: 50 }}
    align="justify"
    colors={{ scheme: "category10" }}
    nodeOpacity={1}
    nodeHoverOthersOpacity={0.35}
    nodeThickness={18}
    nodeSpacing={24}
    nodeBorderWidth={0}
    nodeBorderColor={{
      from: "color",
      modifiers: [["darker", 0.8]],
    }}
    nodeBorderRadius={3}
    linkOpacity={0.5}
    linkHoverOthersOpacity={0.1}
    linkContract={3}
    enableLinkGradient={true}
    labelPosition="outside"
    labelOrientation="vertical"
    labelPadding={16}
    labelTextColor={{
      from: "color",
      modifiers: [["darker", 1]],
    }}
    legends={[
      {
        anchor: "bottom-right",
        direction: "column",
        translateX: 130,
        itemWidth: 100,
        itemHeight: 14,
        itemDirection: "right-to-left",
        itemsSpacing: 2,
        itemTextColor: "#999",
        symbolSize: 14,
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

export default MyResponsiveSankey;
