import React from 'react';
import { VictoryChart, VictoryPolarAxis, VictoryArea, VictoryTheme } from 'victory';

const Data = [
  { x: 1, y: 2 },
  { x: 2, y: 3 },
  { x: 3, y: 5 },
  { x: 4, y: 4 },
  { x: 5, y: 7 },
];

const PolarChartComponent: React.FC = () => {
  return (
    <VictoryChart polar domain={{ y: [0, 7] }} theme={VictoryTheme.clean}>
      <VictoryPolarAxis
        dependentAxis
        style={{ axis: { stroke: "none" } }}
        tickFormat={() => null}
      />
      <VictoryPolarAxis />
      <VictoryArea data={Data} />
    </VictoryChart>
  );
};

export default PolarChartComponent;
