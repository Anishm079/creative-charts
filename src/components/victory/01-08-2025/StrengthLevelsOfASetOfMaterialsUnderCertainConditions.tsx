import React from "react";
import {
  VictoryChart,
  VictoryPolarAxis,
  VictoryLine,
  VictoryTheme,
} from "victory";

function StrengthLevelsOfASetOfMaterialsUnderCertainConditions() {
  return (
    <>
      <h2 style={{color:"black"}} >strength levels of a set of materials under certain conditions</h2>
      <VictoryChart polar theme={VictoryTheme.clean} domain={{ y: [0, 10] }}>
        <VictoryPolarAxis
          dependentAxis
          style={{
            axis: { stroke: "none" },
          }}
          tickFormat={() => ""}
        />
        <VictoryPolarAxis
          tickValues={[0, Math.PI / 2, Math.PI, (3 * Math.PI) / 2]}
          tickFormat={["0°", "90°", "180°", "270°"]}
          labelPlacement="vertical"
        />
        {[5, 4, 3, 2, 1].map((val, i) => {
          return (
            <VictoryLine
              key={i}
              samples={100}
              style={{
                data: {
                  stroke: VictoryTheme.material.palette.qualitative[i],
                },
              }}
              y={(d) => val * (1 - Math.cos(d.x))}
            />
          );
        })}
      </VictoryChart>
    </>
  );
}

export default StrengthLevelsOfASetOfMaterialsUnderCertainConditions;
