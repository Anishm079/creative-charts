import React from 'react';
import { VictoryChart, VictoryBoxPlot, VictoryTheme } from 'victory';

const BoxPlotComponent: React.FC = () => {
  return (
    <VictoryChart domainPadding={20} theme={VictoryTheme.material}>
      <VictoryBoxPlot
        labels
        labelOrientation="right"
        boxWidth={10}
        data={[
          { x: 1, y: ["2", "3", "5", "8"] },
          { x: 2, y: ["1", "3", "5", "8"] },
          { x: 3, y: ["2", "5", "7", "9"] },
          { x: 4, y: ["4", "6", "7", "9"] },
          { x: 5, y: ["1", "2", "4", "5"] },
          { x: 6, y: ["1", "2", "6", "8"] },
        ]}
      />
    </VictoryChart>
  );
};

export default BoxPlotComponent;
