import React from "react";
import { VictoryChart, VictoryTheme, VictoryVoronoi } from "victory";

const App: React.FC = () => {
  return (
    <>
        <h2 style={{color:"black"}}>Animal Sightings In A Park Over Time</h2>
        <VictoryChart domain={{ x: [0, 5], y: [0, 7] }} theme={VictoryTheme.clean}>
        <VictoryVoronoi
            data={[
            { x: 1, y: 2, label: "Dogs" },
            { x: 2, y: 3, label: "Cats" },
            { x: 3, y: 5, label: "Snakes" },
            { x: 4, y: 4, label: "Rabbits" },
            { x: 5, y: 7, label: "Birds" },
            ]}
        />
        </VictoryChart>
    </>
  );
};

export default App;
