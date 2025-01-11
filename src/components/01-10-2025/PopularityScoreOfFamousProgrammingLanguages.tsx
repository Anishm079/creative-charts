import { ResponsivePie } from "@nivo/pie";

interface Data {
  id: string;
  label: string;
  value: number;
  color: string;
}

const data: Data[] = [
  {
    id: "python",
    label: "python",
    value: 232,
    color: "hsl(304, 70%, 50%)",
  },
  {
    id: "javascript",
    label: "javascript",
    value: 28,
    color: "hsl(335, 70%, 50%)",
  },
  {
    id: "erlang",
    label: "erlang",
    value: 193,
    color: "hsl(267, 70%, 50%)",
  },
  {
    id: "ruby",
    label: "ruby",
    value: 312,
    color: "hsl(217, 70%, 50%)",
  },
  {
    id: "rust",
    label: "rust",
    value: 24,
    color: "hsl(8, 70%, 50%)",
  },
];

const MyResponsivePie = () => (
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
    arcLinkLabelsTextColor="#333333"
    arcLinkLabelsThickness={2}
    arcLinkLabelsColor={{ from: "color" }}
    arcLabelsSkipAngle={10}
    arcLabelsTextColor={{
      from: "color",
      modifiers: [["darker", 45]],
    }}
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
        color: "rgba(0, 0, 0, 0.3)",
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
        anchor: "bottom",
        direction: "row",
        justify: false,
        translateX: 0,
        translateY: 56,
        itemsSpacing: 0,
        itemWidth: 100,
        itemHeight: 18,
        itemTextColor: "#000000",
        itemDirection: "left-to-right",
        itemOpacity: 1,
        symbolSize: 20,
        symbolShape: "circle",

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

export default MyResponsivePie;
