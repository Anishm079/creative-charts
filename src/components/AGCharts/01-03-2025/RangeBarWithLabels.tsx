import React, { useEffect } from 'react';
import { AgChartOptions, AgCharts } from 'ag-charts-community';

const tooltip = {
  renderer: ({ datum, xKey, yLowKey, yHighKey, yLowName, yHighName }) => {
    return {
      heading: undefined,
      title: datum[xKey],
      data: [
        {
          label: yLowName,
          value: datum[yLowKey].toLocaleString("en-GB", {
            notation: "compact",
            compactDisplay: "short",
          }),
        },
        {
          label: yHighName,
          value: datum[yHighKey].toLocaleString("en-GB", {
            notation: "compact",
            compactDisplay: "short",
          }),
        },
      ],
    };
  },
};

const getData = () => {
    return [
        { department: "Finance", low: 75000, high: 110000 },
        { department: "Engineering", low: 75000, high: 125000 },
        { department: "Marketing", low: 55000, high: 75000 },
        { department: "Sales", low: 60000, high: 85000 },
        { department: "Legal", low: 70000, high: 100000 },
        { department: "Operations", low: 55000, high: 80000 },
        { department: "Research", low: 60000, high: 80000 },
        { department: "Development", low: 70000, high: 90000 },
      ];
};

const ChartComponent: React.FC = () => {
  const data = getData();

  useEffect(() => {
    const options: AgChartOptions = {
      container: document.getElementById("myChart"),
      data,
      background:{
        fill:"transparent"
      },
      title: {
        text: "Salary Ranges By Department",
        fontFamily: `"Architects Daughter", serif`,
        color: "#000",
      },
      subtitle: {
        fontFamily: `"Architects Daughter", serif`,
        color: "#000",
        text: "Low and High Salary Brackets Across Various Departments",
      },
      series: [
        {
          type: "range-bar",
          yName: "Salary Range",
          xKey: "department",
          xName: "Department",
          yLowKey: "low",
          yLowName: "Low",
          yHighKey: "high",
          yHighName: "High",
          cornerRadius: 5,
          itemStyler: ({ datum, yHighKey }) => {
            return {
              fillOpacity: getOpacity(datum[yHighKey], yHighKey, 0.4, 1),
            };
          },
          label: {
            fontFamily: `"Architects Daughter", serif`,
            color: "#000",
            placement: "outside",
            // color: "rgb(118,118,118)",
            formatter: ({ value }) => `£${value / 1000}K`,
          },
          tooltip,
        },
      ],
      axes: [
        {
          type: "category",
          position: "bottom",
          paddingInner: 0.5,
          label:{
            fontFamily: `"Architects Daughter", serif`,
            color: "#000",
          }
        },
        {
          type: "number",
          position: "right",
          label: {
            fontFamily: `"Architects Daughter", serif`,
            color: "#000",
            formatter: ({ value }) => Number(value).toLocaleString(),
          },
          gridLine: {
            style: [
              {
                stroke: "rgb(216,216,216)",
                lineDash: [2, 2],
              },
            ],
          },
        },
      ],
      seriesArea: {
        padding: {
          right: 25,
        },
      },
    };

    AgCharts.create(options);
  }, [data]);

  function getOpacity(value, key, minOpacity, maxOpacity) {
    const [min, max] = getDomain(key);
    let alpha = Math.round(((value - min) / (max - min)) * 10) / 10;
    return map(alpha, 0, 1, minOpacity, maxOpacity);
  }

  function getDomain(key) {
    const min = Math.min(...data.map((d) => d[key]));
    const max = Math.max(...data.map((d) => d[key]));
    return [min, max];
  }

  const map = (value, start1, end1, start2, end2) => {
    return ((value - start1) / (end1 - start1)) * (end2 - start2) + start2;
  };

  return (
    <div id="myChart" style={{ height: '100dvh', width: '100dvw', background: 'linear-gradient(135deg, #ff00cc, #333399)' }} />
  );
};

export default ChartComponent;
