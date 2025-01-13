import React from "react";
import { ResponsiveTimeRange } from "@nivo/calendar";

const data: {
  day: string;
  value: number;
}[] = [
  {
    value: 186,
    day: "2018-04-03",
  },
  {
    value: 277,
    day: "2018-05-30",
  },
  {
    value: 313,
    day: "2018-06-21",
  },
  {
    value: 202,
    day: "2018-06-18",
  },
  {
    value: 36,
    day: "2018-06-13",
  },
  {
    value: 90,
    day: "2018-06-07",
  },
  {
    value: 81,
    day: "2018-06-17",
  },
  {
    value: 256,
    day: "2018-05-16",
  },
  {
    value: 33,
    day: "2018-07-07",
  },
  {
    value: 28,
    day: "2018-05-29",
  },
  {
    value: 287,
    day: "2018-05-18",
  },
  {
    value: 277,
    day: "2018-06-11",
  },
  {
    value: 10,
    day: "2018-08-08",
  },
  {
    value: 132,
    day: "2018-05-21",
  },
  {
    value: 317,
    day: "2018-05-14",
  },
  {
    value: 47,
    day: "2018-07-04",
  },
  {
    value: 170,
    day: "2018-05-23",
  },
  {
    value: 319,
    day: "2018-04-19",
  },
  {
    value: 294,
    day: "2018-06-09",
  },
  {
    value: 382,
    day: "2018-07-03",
  },
  {
    value: 101,
    day: "2018-04-04",
  },
  {
    value: 122,
    day: "2018-04-12",
  },
  {
    value: 145,
    day: "2018-07-25",
  },
  {
    value: 122,
    day: "2018-06-25",
  },
  {
    value: 290,
    day: "2018-05-12",
  },
  {
    value: 41,
    day: "2018-07-11",
  },
  {
    value: 75,
    day: "2018-05-10",
  },
  {
    value: 147,
    day: "2018-04-25",
  },
  {
    value: 321,
    day: "2018-07-24",
  },
  {
    value: 325,
    day: "2018-05-01",
  },
  {
    value: 308,
    day: "2018-04-01",
  },
  {
    value: 215,
    day: "2018-06-16",
  },
  {
    value: 179,
    day: "2018-04-11",
  },
  {
    value: 261,
    day: "2018-04-26",
  },
  {
    value: 295,
    day: "2018-04-08",
  },
  {
    value: 132,
    day: "2018-07-31",
  },
  {
    value: 229,
    day: "2018-04-14",
  },
  {
    value: 242,
    day: "2018-05-28",
  },
  {
    value: 299,
    day: "2018-07-10",
  },
  {
    value: 292,
    day: "2018-08-06",
  },
  {
    value: 304,
    day: "2018-07-27",
  },
  {
    value: 106,
    day: "2018-07-13",
  },
  {
    value: 120,
    day: "2018-06-30",
  },
  {
    value: 175,
    day: "2018-07-18",
  },
  {
    value: 364,
    day: "2018-05-11",
  },
  {
    value: 189,
    day: "2018-04-02",
  },
  {
    value: 35,
    day: "2018-07-06",
  },
  {
    value: 268,
    day: "2018-05-27",
  },
  {
    value: 234,
    day: "2018-07-28",
  },
  {
    value: 285,
    day: "2018-06-27",
  },
  {
    value: 54,
    day: "2018-04-30",
  },
  {
    value: 238,
    day: "2018-06-29",
  },
  {
    value: 208,
    day: "2018-04-07",
  },
  {
    value: 222,
    day: "2018-05-15",
  },
  {
    value: 39,
    day: "2018-04-05",
  },
  {
    value: 234,
    day: "2018-04-18",
  },
  {
    value: 163,
    day: "2018-08-11",
  },
  {
    value: 243,
    day: "2018-06-12",
  },
  {
    value: 396,
    day: "2018-08-01",
  },
  {
    value: 166,
    day: "2018-05-17",
  },
  {
    value: 154,
    day: "2018-08-07",
  },
  {
    value: 191,
    day: "2018-06-26",
  },
  {
    value: 322,
    day: "2018-06-15",
  },
  {
    value: 116,
    day: "2018-04-28",
  },
  {
    value: 36,
    day: "2018-05-25",
  },
  {
    value: 215,
    day: "2018-06-24",
  },
  {
    value: 14,
    day: "2018-07-30",
  },
  {
    value: 334,
    day: "2018-07-09",
  },
  {
    value: 220,
    day: "2018-05-20",
  },
  {
    value: 68,
    day: "2018-06-10",
  },
  {
    value: 276,
    day: "2018-07-19",
  },
  {
    value: 87,
    day: "2018-07-01",
  },
  {
    value: 144,
    day: "2018-08-03",
  },
  {
    value: 90,
    day: "2018-07-14",
  },
  {
    value: 287,
    day: "2018-06-01",
  },
  {
    value: 325,
    day: "2018-07-12",
  },
  {
    value: 178,
    day: "2018-08-02",
  },
  {
    value: 50,
    day: "2018-08-04",
  },
  {
    value: 172,
    day: "2018-07-16",
  },
  {
    value: 397,
    day: "2018-04-17",
  },
];

const MyResponsiveTimeRange: React.FC = () => (
  <ResponsiveTimeRange
    data={data}
    from="2018-04-01"
    to="2018-08-12"
    emptyColor="#e6e6e6"
    colors={["#61cdbb", "#97e3d5", "#e8c1a0", "#f47560"]}
    margin={{ top: 40, right: 40, bottom: 100, left: 40 }}
    dayBorderWidth={2}
    dayBorderColor="#000000"
    legends={[
      {
        anchor: "bottom-right",
        direction: "row",
        justify: false,
        itemCount: 4,
        itemWidth: 42,
        itemHeight: 36,
        itemsSpacing: 14,
        itemDirection: "right-to-left",
        translateX: -60,
        translateY: -60,
        symbolSize: 20,
        itemTextColor: "#000000",
      },
    ]}
  />
);

export default MyResponsiveTimeRange;
