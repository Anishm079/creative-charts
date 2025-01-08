import React from "react";
import {
  VictoryChart,
  VictoryLine,
  VictoryAxis,
  VictoryLabel,
  VictoryBrushLine,
  VictoryTheme
} from "victory";
import _ from "lodash";

const data = [
  { name: "Adrien", strength: 5, intelligence: 30, speed: 500, luck: 3 },
  { name: "Brice", strength: 1, intelligence: 13, speed: 550, luck: 2 },
  { name: "Casey", strength: 4, intelligence: 15, speed: 80, luck: 1 },
  { name: "Drew", strength: 3, intelligence: 25, speed: 600, luck: 5 },
  { name: "Erin", strength: 9, intelligence: 50, speed: 350, luck: 4 },
  { name: "Francis", strength: 2, intelligence: 40, speed: 200, luck: 2 },
];
const attributes = ["strength", "intelligence", "speed", "luck"];
const height = 500;
const width = 700;
const padding = { top: 100, left: 50, right: 50, bottom: 50 };

function getMaximumValues() {
  return attributes.map((attribute) => {
    return data.reduce(
      (memo, datum) => (datum[attribute] > memo ? datum[attribute] : memo),
      -Infinity
    );
  });
}

function normalizeData(maximumValues: number[]) {
  return data.map((datum) => ({
    name: datum.name,
    data: attributes.map((attribute, i) => ({
      x: attribute,
      y: datum[attribute] / maximumValues[i],
    })),
  }));
}

function PersonalityAnalysis() {
  const maximumValues = getMaximumValues();
  const datasets = normalizeData(maximumValues);

  const [state, setState] = React.useState({
    maximumValues,
    datasets,
    filters: {} as Record<string, [number, number] | undefined>,
    activeDatasets: [] as string[],
    isFiltered: false,
  });

  function addNewFilters(domain: [number, number], props: any) {
    const filters = state.filters || {};
    const extent = domain && Math.abs(domain[1] - domain[0]);
    const minVal = 1 / Number.MAX_SAFE_INTEGER;
    filters[props.name] = extent <= minVal ? undefined : domain;
    return filters;
  }

  function getActiveDatasets(filters: Record<string, [number, number] | undefined>) {
    const isActive = (dataset: typeof datasets[0]) => {
      return _.keys(filters).reduce((memo, name) => {
        if (!memo || !Array.isArray(filters[name])) {
          return memo;
        }
        const point = _.find(dataset.data, (d) => d.x === name);
        return (
          point &&
          Math.max(...filters[name]!) >= point.y &&
          Math.min(...filters[name]!) <= point.y
        );
      }, true);
    };

    return state.datasets
      .map((dataset) => (isActive(dataset) ? dataset.name : null))
      .filter(Boolean) as string[];
  }

  function onDomainChange(domain: [number, number], props: any) {
    const filters = addNewFilters(domain, props);
    const isFiltered = !_.isEmpty(_.values(filters).filter(Boolean));
    const activeDatasets = isFiltered ? getActiveDatasets(filters) : state.datasets.map((dataset) => dataset.name);

    setState((state) => ({
      ...state,
      activeDatasets,
      filters,
      isFiltered,
    }));
  }

  function isActive(dataset: typeof datasets[0]) {
    return !state.isFiltered || _.includes(state.activeDatasets, dataset.name);
  }

  function getAxisOffset(index: number) {
    const step = (width - padding.left - padding.right) / (attributes.length - 1);
    return step * index + padding.left;
  }

  return (
    <>
      <h2 style={{color:"black"}} >Personality analysis</h2>
      <VictoryChart domain={{ y: [0, 1.1] }} height={height} width={width} padding={padding} theme={VictoryTheme.material}>
        <VictoryAxis
          style={{
            tickLabels: { fontSize: 20 },
            axis: { stroke: "none" },
          }}
          tickLabelComponent={<VictoryLabel y={padding.top - 40} />}
        />
        {state.datasets.map((dataset) => (
          <VictoryLine
            key={dataset.name}
            name={dataset.name}
            data={dataset.data}
            groupComponent={<g />}
            style={{
              data: {
                opacity: isActive(dataset) ? 1 : 0.2,
              },
            }}
          />
        ))}
        {attributes.map((attribute, index) => (
          <VictoryAxis
            dependentAxis
            key={index}
            axisComponent={
              <VictoryBrushLine name={attribute} width={20} onBrushDomainChange={onDomainChange} />
            }
            offsetX={getAxisOffset(index)}
            style={{
              tickLabels: {
                fontSize: 15,
                padding: 15,
                pointerEvents: "none",
              },
            }}
            tickValues={[0.2, 0.4, 0.6, 0.8, 1]}
            tickFormat={(tick) => Math.round(tick * state.maximumValues[index])}
          />
        ))}
      </VictoryChart>
    </>
  );
}

export default PersonalityAnalysis;
