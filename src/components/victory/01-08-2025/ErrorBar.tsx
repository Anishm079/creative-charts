import React from "react";
import { VictoryChart, VictoryErrorBar, VictoryTheme } from "victory";

const MyChart: React.FC = () => {
  const data:{x:number;y:number;errorX:number;errorY:number}[] = [
    { x: 15, y: 35, errorX: 1, errorY: 3 },
    { x: 20, y: 42, errorX: 3, errorY: 2 },
    { x: 25, y: 30, errorX: 5, errorY: 5 },
    { x: 30, y: 35, errorX: 5, errorY: 3 },
    { x: 35, y: 22, errorX: 8, errorY: 2 },
  ];

  return (
    <div style={{position:"relative",width:"100dvw",height:"100dvh"}} >
      <h2 style={{color:"black",position:"absolute",width:"100%"}}>Error Bars are used to represent the variability or uncertainty in a set of data</h2>
      <VictoryChart domainPadding={15} theme={VictoryTheme.material}>
        <VictoryErrorBar data={data} />
      </VictoryChart>
    </div>
  );
};

export default MyChart;
