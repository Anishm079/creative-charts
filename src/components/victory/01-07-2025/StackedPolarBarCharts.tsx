import React, { useState } from 'react';
import { VictoryChart, VictoryPolarAxis, VictoryBar, VictoryStack, VictoryLabel, VictoryTheme } from 'victory';
import _ from 'lodash';

const directions = {
  0: "E",
  45: "NE",
  90: "N",
  135: "NW",
  180: "W",
  225: "SW",
  270: "S",
  315: "SE",
};

const orange = {
  base: "#2D7FF9",
  highlight: "#2750AE",
};

const red = {
  base: "#8B46FF",
  highlight: "#6B1CB0",
};

const innerRadius = 30;

const CompassCenter = (props: { origin: { x: number, y: number } }) => {
  const { origin } = props;
  const circleStyle = {
    stroke: red.base,
    strokeWidth: 2,
    fill: orange.base,
  };

  return (
    <g>
      <circle cx={origin.x} cy={origin.y} r={innerRadius} style={circleStyle} />
    </g>
  );
};

const CenterLabel = (props: { datum: any, active: boolean, color: { base: string, highlight: string } }) => {
  const { datum, active, color } = props;
  const text = [`${directions[datum._x]}`, `${Math.round(datum._y1)} mph`];
  const baseStyle = {
    fill: color.highlight,
    textAnchor: "middle",
  };
  const style = [
    { ...baseStyle, fontSize: 18, fontWeight: "bold" },
    { ...baseStyle, fontSize: 12 },
  ];

  return active ? (
    <VictoryLabel text={text} style={style} x={75} y={75} renderInPortal />
  ) : null;
};

const getWindData = () => {
  return [
    { windSpeed: 4, windGust: 9, windBearing: 0 },
    { windSpeed: 21, windGust: 26, windBearing: 45 },
    { windSpeed: 21, windGust: 24, windBearing: 90 },
    { windSpeed: 4, windGust: 7, windBearing: 135 },
    { windSpeed: 4, windGust: 10, windBearing: 180 },
    { windSpeed: 21, windGust: 31, windBearing: 225 },
    { windSpeed: 4, windGust: 6, windBearing: 270 },
    { windSpeed: 21, windGust: 25, windBearing: 315 }
  ];  
};

const ChartComponent: React.FC = () => {
  const [state, setState] = useState({ wind: getWindData() });

  return (
    <VictoryChart
      polar
      animate={{ duration: 500, onLoad: { duration: 500 } }}
      theme={VictoryTheme.clean}
      innerRadius={innerRadius}
      domainPadding={{ y: 10 }}
      events={[
        {
          childName: "all",
          target: "data",
          eventHandlers: {
            onMouseOver: () => [
              { target: "labels", mutation: () => ({ active: true }) },
              { target: "data", mutation: () => ({ active: true }) },
            ],
            onMouseOut: () => [
              { target: "labels", mutation: () => ({ active: false }) },
              { target: "data", mutation: () => ({ active: false }) },
            ],
          },
        },
      ]}
    >
      <VictoryPolarAxis
        dependentAxis
        labelPlacement="vertical"
        style={{ axis: { stroke: "none" } }}
        tickFormat={() => ""}
      />
      <VictoryPolarAxis
        labelPlacement="parallel"
        tickValues={_.keys(directions).map((k) => +k)}
        tickFormat={_.values(directions)}
      />
      <VictoryStack>
        <VictoryBar
          style={{ data: { fill: ({ active }) => (active ? orange.highlight : orange.base), width: 40 } }}
          data={state.wind}
          x="windBearing"
          y="windSpeed"
          labels={() => ""}
          labelComponent={<CenterLabel color={orange} />}
        />
        <VictoryBar
          style={{ data: { fill: ({ active }) => (active ? red.highlight : red.base), width: 40 } }}
          data={state.wind}
          x="windBearing"
          y={(d: any) => d.windGust - d.windSpeed}
          labels={() => ""}
          labelComponent={<CenterLabel color={red} />}
        />
      </VictoryStack>
      <CompassCenter origin={{ x: 75, y: 75 }} />
    </VictoryChart>
  );
};

export default ChartComponent;
