import React from 'react';
import { VictoryChart, VictoryStack, VictoryArea, VictoryTheme } from 'victory';

const MyChart: React.FC = () => {
  return (
    <VictoryChart theme={VictoryTheme.clean}>
      <VictoryStack colorScale="qualitative">
        <VictoryArea
          data={[
            { x: 1, y: 2 },
            { x: 2, y: 3 },
            { x: 3, y: 5 },
            { x: 4, y: 4 },
            { x: 5, y: 7 },
          ]}
        />
        <VictoryArea
          data={[
            { x: 1, y: 1 },
            { x: 2, y: 4 },
            { x: 3, y: 5 },
            { x: 4, y: 7 },
            { x: 5, y: 5 },
          ]}
        />
        <VictoryArea
          data={[
            { x: 1, y: 3 },
            { x: 2, y: 2 },
            { x: 3, y: 6 },
            { x: 4, y: 2 },
            { x: 5, y: 6 },
          ]}
        />
        <VictoryArea
          data={[
            { x: 1, y: 2 },
            { x: 2, y: 3 },
            { x: 3, y: 3 },
            { x: 4, y: 4 },
            { x: 5, y: 7 },
          ]}
        />
      </VictoryStack>
    </VictoryChart>
  );
};

export default MyChart;
