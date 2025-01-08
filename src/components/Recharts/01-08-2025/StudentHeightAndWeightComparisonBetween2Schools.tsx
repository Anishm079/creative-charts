import React from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const school1 = [
  { x: 10, y: 30 },
  { x: 30, y: 200 },
  { x: 45, y: 100 },
  { x: 50, y: 400 },
  { x: 70, y: 150 },
  { x: 100, y: 250 },
];

const school2 = [
  { x: 30, y: 20 },
  { x: 50, y: 180 },
  { x: 75, y: 240 },
  { x: 100, y: 100 },
  { x: 120, y: 190 },
];

const school3 = [
  {
    x: 20,
    y: 40,
  },
  {
    x: 40,
    y: 220,
  },
  {
    x: 60,
    y: 120,
  },
  {
    x: 80,
    y: 420,
  },
  {
    x: 90,
    y: 180,
  },
  {
    x: 110,
    y: 280,
  },
];

const school4 = [
  {
    x: 25,
    y: 30,
  },
  {
    x: 55,
    y: 200,
  },
  {
    x: 85,
    y: 260,
  },
  {
    x: 105,
    y: 120,
  },
  {
    x: 125,
    y: 210,
  },
  {
    x: 135,
    y: 290,
  },
];

const StudentHeightAndWeightComparisonBetween2Schools: React.FC = () => {
  return (
    <>
      <h2 style={{ color: "black" }}>
        student height and weight comparison between 2 schools
      </h2>
      <ResponsiveContainer width="100%" height={400}>
        <ScatterChart
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid />
          <XAxis type="number" dataKey="x" name="stature" unit="cm" />
          <YAxis type="number" dataKey="y" name="weight" unit="kg" />
          <ZAxis type="number" range={[100]} />
          <Tooltip cursor={{ strokeDasharray: "3 3" }} />
          <Legend />
          <Scatter
            name="A school"
            data={school1}
            fill="#8884d8"
            line
            shape="cross"
          />
          <Scatter
            name="B school"
            data={school2}
            fill="#ff00ff"
            line
            shape="diamond"
          />
          <Scatter
            name="C school"
            data={school3}
            fill="#1500ff"
            line
            shape="star"
          />
          <Scatter
            name="D school"
            data={school4}
            fill="#ff0000"
            line
            shape="wye"
          />
        </ScatterChart>
      </ResponsiveContainer>
    </>
  );
};

export default StudentHeightAndWeightComparisonBetween2Schools;
