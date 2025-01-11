import React from "react";
import { ResponsiveBullet } from "@nivo/bullet";

interface BulletData {
  id: string;
  ranges: number[];
  measures: number[];
  markers: number[];
}

const data: BulletData[] = [
  {
    id: "temp.",
    ranges: [72, 20, 60, 0, 100],
    measures: [59],
    markers: [80],
  },
  {
    id: "power",
    ranges: [0.8532214774163132, 0.08856198722948709, 1.616886419806764, 0, 2],
    measures: [0.9095805648132326, 1.2848357978415472],
    markers: [1.3817347688280264],
  },
  {
    id: "volume",
    ranges: [24, 3, 12, 26, 13, 26, 0, 40],
    measures: [5],
    markers: [28],
  },
  {
    id: "cost",
    ranges: [210225, 15392, 467368, 0, 500000],
    measures: [102480, 190610],
    markers: [384234],
  },
  {
    id: "revenue",
    ranges: [0, 10, 1, 0, 11],
    measures: [10],
    markers: [7.765728173902356, 10.637194392123448],
  },
];

const MyResponsiveBullet: React.FC = () => (
  <ResponsiveBullet
    data={data}
    margin={{ top: 50, right: 90, bottom: 50, left: 90 }}
    spacing={46}
    titleAlign="start"
    titleOffsetX={-70}
    measureSize={0.2}
  />
);

export default MyResponsiveBullet;
