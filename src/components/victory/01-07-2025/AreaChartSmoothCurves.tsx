import React, { useState, useEffect } from 'react';
import { VictoryChart, VictoryStack, VictoryArea, VictoryTheme } from 'victory';
import _ from 'lodash';

const ChartComponent: React.FC = () => {
  const [data, setData] = useState(getData());

  useEffect(() => {
    const interval = setInterval(() => {
      setData(getData());
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <VictoryChart theme={VictoryTheme.material}>
      <VictoryStack colorScale="blue">
        {data.map((dataSet, i) => (
          <VictoryArea
            key={i}
            data={dataSet}
            interpolation="basis"
            animate={{ duration: 1000 }}
          />
        ))}
      </VictoryStack>
    </VictoryChart>
  );
};

const getData = () => {
  return [
    [
      { x: 1, y: 1 },
      { x: 2, y: 8 },
      { x: 3, y: 2 },
      { x: 4, y: 4 },
      { x: 5, y: 14 }
    ],
    [
      { x: 1, y: 1 },
      { x: 2, y: 10 },
      { x: 3, y: 3 },
      { x: 4, y: 5 },
      { x: 5, y: 10 }
    ],
    [
      { x: 1, y: 3 },
      { x: 2, y: 1 },
      { x: 3, y: 5 },
      { x: 4, y: 4 },
      { x: 5, y: 3 }
    ],
    [
      { x: 1, y: 1 },
      { x: 2, y: 4 },
      { x: 3, y: 2 },
      { x: 4, y: 8 },
      { x: 5, y: 5 }
    ],
    [
      { x: 1, y: 4 },
      { x: 2, y: 3 },
      { x: 3, y: 8 },
      { x: 4, y: 3 },
      { x: 5, y: 4 }
    ],
    [
      { x: 1, y: 2 },
      { x: 2, y: 6 },
      { x: 3, y: 7 },
      { x: 4, y: 6 },
      { x: 5, y: 7 }
    ],
    [
      { x: 1, y: 2 },
      { x: 2, y: 1 },
      { x: 3, y: 2 },
      { x: 4, y: 4 },
      { x: 5, y: 2 }
    ]
  ];
};

export default ChartComponent;
