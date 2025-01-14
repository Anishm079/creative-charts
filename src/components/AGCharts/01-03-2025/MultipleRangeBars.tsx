import React, { useEffect } from "react";
import { AgChartOptions, AgCharts } from "ag-charts-community";

const getData = () => {
  return {
    Europe: [
      {
        month: "Jan",
        lowTemperature: 5,
        highTemperature: 15,
      },
      {
        month: "Feb",
        lowTemperature: 8,
        highTemperature: 18,
      },
      {
        month: "Mar",
        lowTemperature: 10,
        highTemperature: 20,
      },
      {
        month: "Apr",
        lowTemperature: 12,
        highTemperature: 25,
      },
      {
        month: "May",
        lowTemperature: 16,
        highTemperature: 30,
      },
      {
        month: "Jun",
        lowTemperature: 20,
        highTemperature: 35,
      },
      {
        month: "Jul",
        lowTemperature: 23,
        highTemperature: 38,
      },
      {
        month: "Aug",
        lowTemperature: 22,
        highTemperature: 35,
      },
      {
        month: "Sep",
        lowTemperature: 18,
        highTemperature: 30,
      },
      {
        month: "Oct",
        lowTemperature: 12,
        highTemperature: 25,
      },
      {
        month: "Nov",
        lowTemperature: 8,
        highTemperature: 20,
      },
      {
        month: "Dec",
        lowTemperature: 5,
        highTemperature: 15,
      },
    ],
    Asia: [
      {
        month: "Jan",
        lowTemperature: 25,
        highTemperature: 30,
      },
      {
        month: "Feb",
        lowTemperature: 25,
        highTemperature: 29,
      },
      {
        month: "Mar",
        lowTemperature: 26,
        highTemperature: 30,
      },
      {
        month: "Apr",
        lowTemperature: 26,
        highTemperature: 29,
      },
      {
        month: "May",
        lowTemperature: 27,
        highTemperature: 30,
      },
      {
        month: "Jun",
        lowTemperature: 26,
        highTemperature: 29,
      },
      {
        month: "Jul",
        lowTemperature: 26,
        highTemperature: 29,
      },
      {
        month: "Aug",
        lowTemperature: 26,
        highTemperature: 28,
      },
      {
        month: "Sep",
        lowTemperature: 26,
        highTemperature: 28,
      },
      {
        month: "Oct",
        lowTemperature: 26,
        highTemperature: 28,
      },
      {
        month: "Nov",
        lowTemperature: 26,
        highTemperature: 30,
      },
      {
        month: "Dec",
        lowTemperature: 26,
        highTemperature: 30,
      },
    ],
    "North America": [
      {
        month: "Jan",
        lowTemperature: 10,
        highTemperature: 20,
      },
      {
        month: "Feb",
        lowTemperature: 12,
        highTemperature: 25,
      },
      {
        month: "Mar",
        lowTemperature: 15,
        highTemperature: 28,
      },
      {
        month: "Apr",
        lowTemperature: 18,
        highTemperature: 32,
      },
      {
        month: "May",
        lowTemperature: 22,
        highTemperature: 35,
      },
      {
        month: "Jun",
        lowTemperature: 25,
        highTemperature: 40,
      },
      {
        month: "Jul",
        lowTemperature: 28,
        highTemperature: 42,
      },
      {
        month: "Aug",
        lowTemperature: 26,
        highTemperature: 40,
      },
      {
        month: "Sep",
        lowTemperature: 20,
        highTemperature: 35,
      },
      {
        month: "Oct",
        lowTemperature: 15,
        highTemperature: 30,
      },
      {
        month: "Nov",
        lowTemperature: 10,
        highTemperature: 25,
      },
      {
        month: "Dec",
        lowTemperature: 8,
        highTemperature: 20,
      },
    ],
    Africa: [
      {
        month: "Jan",
        lowTemperature: 14,
        highTemperature: 27,
      },
      {
        month: "Feb",
        lowTemperature: 14,
        highTemperature: 27,
      },
      {
        month: "Mar",
        lowTemperature: 14,
        highTemperature: 26,
      },
      {
        month: "Apr",
        lowTemperature: 16,
        highTemperature: 22,
      },
      {
        month: "May",
        lowTemperature: 12,
        highTemperature: 21,
      },
      {
        month: "Jun",
        lowTemperature: 10,
        highTemperature: 22,
      },
      {
        month: "Jul",
        lowTemperature: 9,
        highTemperature: 22,
      },
      {
        month: "Aug",
        lowTemperature: 10,
        highTemperature: 23,
      },
      {
        month: "Sep",
        lowTemperature: 12,
        highTemperature: 25,
      },
      {
        month: "Oct",
        lowTemperature: 14,
        highTemperature: 27,
      },
      {
        month: "Nov",
        lowTemperature: 14,
        highTemperature: 30,
      },
      {
        month: "Dec",
        lowTemperature: 14,
        highTemperature: 28,
      },
    ],
    "South America": [
      {
        month: "Jan",
        lowTemperature: 15,
        highTemperature: 25,
      },
      {
        month: "Feb",
        lowTemperature: 18,
        highTemperature: 28,
      },
      {
        month: "Mar",
        lowTemperature: 20,
        highTemperature: 30,
      },
      {
        month: "Apr",
        lowTemperature: 22,
        highTemperature: 32,
      },
      {
        month: "May",
        lowTemperature: 25,
        highTemperature: 35,
      },
      {
        month: "Jun",
        lowTemperature: 28,
        highTemperature: 38,
      },
      {
        month: "Jul",
        lowTemperature: 26,
        highTemperature: 36,
      },
      {
        month: "Aug",
        lowTemperature: 24,
        highTemperature: 34,
      },
      {
        month: "Sep",
        lowTemperature: 22,
        highTemperature: 32,
      },
      {
        month: "Oct",
        lowTemperature: 20,
        highTemperature: 30,
      },
      {
        month: "Nov",
        lowTemperature: 18,
        highTemperature: 28,
      },
      {
        month: "Dec",
        lowTemperature: 15,
        highTemperature: 25,
      },
    ],
    Australia: [
      {
        month: "Jan",
        lowTemperature: 19,
        highTemperature: 26,
      },
      {
        month: "Feb",
        lowTemperature: 19,
        highTemperature: 26,
      },
      {
        month: "Mar",
        lowTemperature: 15,
        highTemperature: 25,
      },
      {
        month: "Apr",
        lowTemperature: 15,
        highTemperature: 23,
      },
      {
        month: "May",
        lowTemperature: 12,
        highTemperature: 20,
      },
      {
        month: "Jun",
        lowTemperature: 10,
        highTemperature: 18,
      },
      {
        month: "Jul",
        lowTemperature: 8,
        highTemperature: 17,
      },
      {
        month: "Aug",
        lowTemperature: 9,
        highTemperature: 18,
      },
      {
        month: "Sep",
        lowTemperature: 12,
        highTemperature: 20,
      },
      {
        month: "Oct",
        lowTemperature: 14,
        highTemperature: 22,
      },
      {
        month: "Nov",
        lowTemperature: 16,
        highTemperature: 24,
      },
      {
        month: "Dec",
        lowTemperature: 18,
        highTemperature: 26,
      },
    ],
  };
};

const ChartComponent: React.FC = () => {
  const data = getData();

  useEffect(() => {
    const options: AgChartOptions = {
      container: document.getElementById("myChart"),
      background:{
        fill:"transparent"
      },
      title: {
        text: "Average Temperatures By Continent",
      },
      series: Object.entries(data).map(([continent, temperatures]) => ({
        data: temperatures,
        type: "range-bar",
        xKey: "month",
        xName: "Month",
        yName: continent,
        yLowKey: "lowTemperature",
        yHighKey: "highTemperature",
        yLowName: "Lowest",
        yHighName: "Highest",
        cornerRadius: 2,
      })),
      axes: [
        {
          type: "category",
          position: "bottom",
          paddingInner: 0.5,
          groupPaddingInner: 0,
          gridLine: {
            enabled: true,
          },
          line: {
            enabled: false,
          },
          tick: {
            size: 15,
          },
        },
        {
          type: "number",
          position: "right",
          gridLine: {
            enabled: false,
          },
          label: {
            spacing: 15,
            formatter: ({ value }) => `${value} ℃`,
          },
          crossLines: [
            {
              type: "line",
              value: 42,
              lineDash: [5, 7],
              strokeOpacity: 0.5,
              label: {
                text: "42 ℃",
              },
            },
            {
              type: "line",
              value: 5,
              lineDash: [5, 7],
              strokeOpacity: 0.5,
              label: {
                text: "5 ℃",
                position: "bottom",
              },
            },
          ],
        },
      ],
    };

    AgCharts.create(options);
  }, [data]);

  return (
    <div
      id="myChart"
      style={{ height: "100dvh", width: "100dvw", background: "linear-gradient(90deg, #70cfea, #78aef0)" }}
    />
  );
};

export default ChartComponent;
