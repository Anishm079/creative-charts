import React from 'react';
import { VictoryChart, VictoryTheme, VictoryVoronoi, VictoryLine, VictoryScatter } from 'victory';

const data = [
  { x: 1, y: 2, context: 'Day 1: 2 Deer Sightings' },
  { x: 2, y: 3, context: 'Day 2: 3 Fox Sightings' },
  { x: 3, y: 5, context: 'Day 3: 5 Rabbit Sightings' },
  { x: 4, y: 4, context: 'Day 4: 4 Bear Sightings' },
  { x: 5, y: 7, context: 'Day 5: 7 Bird Sightings' },
];

const AnimalsObservedOverFiveDaysInAWildlifeSanctuary: React.FC = () => {
  return (
    <div style={{width:"100dvw",height:"100dvh"}}>
        <h2 style={{color:"#000",position:"absolute",width:"100%"}} >animals observed over five days in a wildlife sanctuary</h2>
        <VictoryChart
        domain={{ x: [0, 5], y: [0, 7] }}
        theme={VictoryTheme.clean}
        >
        <VictoryVoronoi
            data={data}
            size={50}
        />
        <VictoryLine data={data} />
        <VictoryScatter data={data} />
        </VictoryChart>
    </div>
  );
}

export default AnimalsObservedOverFiveDaysInAWildlifeSanctuary;
