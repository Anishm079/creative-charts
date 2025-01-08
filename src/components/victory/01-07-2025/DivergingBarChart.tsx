import React from "react";
import {
  VictoryChart,
  VictoryStack,
  VictoryBar,
  VictoryAxis,
  VictoryLabel,
  VictoryLegend,
  VictoryTheme,
} from "victory";

const dataA = [
  { x: "Television", y: 38 },
  { x: "Smartwatch", y: 37 },
  { x: "Fitness Monitor", y: 25 },
  { x: "Tablet", y: 19 },
  { x: "Camera", y: 15 },
  { x: "Laptop", y: 13 },
  { x: "Phone", y: 12 },
];

const dataB = [
  { x: "Television", y: 38 },
  { x: "Smartwatch", y: 37 },
  { x: "Fitness Monitor", y: 25 },
  { x: "Tablet", y: 19 },
  { x: "Camera", y: 15 },
  { x: "Laptop", y: 13 },
  { x: "Phone", y: 12 },
];

const width = 400;
const height = 300;

const ChartComponent: React.FC = () => {
  return (
    <VictoryChart
      horizontal
      height={height}
      width={width}
      padding={{ top: 100, bottom: 30, left: 50, right: 50 }}
      theme={VictoryTheme.material}
    >
      <VictoryLegend
        x={90}
        y={20}
        orientation="horizontal"
        gutter={20}
        data={[{ name: "Ages 18-20" }, { name: "Ages 21-24" }]}
      />
      <VictoryStack style={{ data: { width: 12 }, labels: { fontSize: 12 } }}>
        <VictoryBar
          data={dataA}
          y={(data) => -Math.abs(data.y)}
          labels={({ datum }) => `${Math.abs(datum.y)}%`}
        />
        <VictoryBar
          data={dataB}
          labels={({ datum }) => `${Math.abs(datum.y)}%`}
        />
      </VictoryStack>
      <VictoryAxis
        style={{
          axis: { stroke: "transparent" },
          ticks: { stroke: "transparent" },
          tickLabels: { fontSize: 12, fill: "black" },
        }}
        tickLabelComponent={<VictoryLabel x={width / 2} textAnchor="middle" />}
        tickValues={dataA.map((point) => point.x).reverse()}
      />
    </VictoryChart>
  );
};

export default ChartComponent;
