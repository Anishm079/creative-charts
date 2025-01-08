import React from 'react';
import { VictoryChart, VictoryGroup, VictoryLine, VictoryScatter, VictoryErrorBar, VictoryTheme } from 'victory';

const medicalData = [
  { treatment: 10, response1: 250, response2: 300, errorresponse1: 0.1, errorresponse2: 0.1 },
  { treatment: 15, response1: 350, response2: 500, errorresponse1: 0.1, errorresponse2: 0.08 },
  { treatment: 20, response1: 420, response2: 640, errorresponse1: 0.05, errorresponse2: 0.1 },
  { treatment: 25, response1: 300, response2: 450, errorresponse1: 0.1, errorresponse2: 0.1 },
  { treatment: 30, response1: 350, response2: 500, errorresponse1: 0.1, errorresponse2: 0.1 },
  { treatment: 35, response1: 220, response2: 350, errorresponse1: 0.15, errorresponse2: 0.05 },
  { treatment: 40, response1: 250, response2: 290, errorresponse1: 0.1, errorresponse2: 0.1 },
];

const segments = ["response1", "response2"];
const colors = { 
  response1: VictoryTheme.material.palette.qualitative[1],
  response2: VictoryTheme.material.palette.qualitative[4],
};

const MedicalStudyChart: React.FC = () => {
    return (
        <>
            <h2 style={{color:"black",position:"absolute",width:"100%"}} >Results of a medical study</h2>
            <VictoryChart
            theme={VictoryTheme.material}
            >
            {segments.map((y) => (
                <VictoryGroup>
                <VictoryLine
                    data={medicalData}
                    y={y}
                    style={{
                    data: {
                        stroke: colors[y],
                    },
                    }}
                    interpolation="natural"
                />
        
                <VictoryScatter
                    data={medicalData}
                    y={y}
                    style={{
                    data: {
                        fill: colors[y],
                    },
                    }}
                />
        
                <VictoryErrorBar
                    data={medicalData}
                    y={y}
                    errorY={(datum) =>
                    datum[y] * datum[`error${y}`]
                    }
                    style={{
                    data: {
                        stroke: colors[y],
                    },
                    }}
                />
                </VictoryGroup>
            ))}
            </VictoryChart>
        </>
      );
};

export default MedicalStudyChart;
