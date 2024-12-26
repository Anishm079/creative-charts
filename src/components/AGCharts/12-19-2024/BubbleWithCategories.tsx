import React, { useEffect } from "react";
import { AgChartOptions, AgCharts } from "ag-charts-community";

interface iData {
  hour: string;
  day: string;
  size: number;
}

const data: iData[] = [
  { hour: "12a", day: "Saturday", size: 5 },
  { hour: "1a", day: "Saturday", size: 1 },
  { hour: "2a", day: "Saturday", size: 0 },
  { hour: "3a", day: "Saturday", size: 0 },
  { hour: "4a", day: "Saturday", size: 0 },
  { hour: "5a", day: "Saturday", size: 0 },
  { hour: "6a", day: "Saturday", size: 0 },
  { hour: "7a", day: "Saturday", size: 0 },
  { hour: "8a", day: "Saturday", size: 0 },
  { hour: "9a", day: "Saturday", size: 0 },
  { hour: "10a", day: "Saturday", size: 0 },
  { hour: "11a", day: "Saturday", size: 2 },
  { hour: "12p", day: "Saturday", size: 4 },
  { hour: "1p", day: "Saturday", size: 1 },
  { hour: "2p", day: "Saturday", size: 1 },
  { hour: "3p", day: "Saturday", size: 3 },
  { hour: "4p", day: "Saturday", size: 4 },
  { hour: "5p", day: "Saturday", size: 6 },
  { hour: "6p", day: "Saturday", size: 4 },
  { hour: "7p", day: "Saturday", size: 4 },
  { hour: "8p", day: "Saturday", size: 3 },
  { hour: "9p", day: "Saturday", size: 3 },
  { hour: "10p", day: "Saturday", size: 2 },
  { hour: "11p", day: "Saturday", size: 5 },
  { hour: "12a", day: "Friday", size: 7 },
  { hour: "1a", day: "Friday", size: 0 },
  { hour: "2a", day: "Friday", size: 0 },
  { hour: "3a", day: "Friday", size: 0 },
  { hour: "4a", day: "Friday", size: 0 },
  { hour: "5a", day: "Friday", size: 0 },
  { hour: "6a", day: "Friday", size: 0 },
  { hour: "7a", day: "Friday", size: 0 },
  { hour: "8a", day: "Friday", size: 0 },
  { hour: "9a", day: "Friday", size: 0 },
  { hour: "10a", day: "Friday", size: 5 },
  { hour: "11a", day: "Friday", size: 2 },
  { hour: "12p", day: "Friday", size: 2 },
  { hour: "1p", day: "Friday", size: 6 },
  { hour: "2p", day: "Friday", size: 9 },
  { hour: "3p", day: "Friday", size: 11 },
  { hour: "4p", day: "Friday", size: 6 },
  { hour: "5p", day: "Friday", size: 7 },
  { hour: "6p", day: "Friday", size: 8 },
  { hour: "7p", day: "Friday", size: 12 },
  { hour: "8p", day: "Friday", size: 5 },
  { hour: "9p", day: "Friday", size: 5 },
  { hour: "10p", day: "Friday", size: 7 },
  { hour: "11p", day: "Friday", size: 2 },
  { hour: "12a", day: "Thursday", size: 1 },
  { hour: "1a", day: "Thursday", size: 1 },
  { hour: "2a", day: "Thursday", size: 0 },
  { hour: "3a", day: "Thursday", size: 0 },
  { hour: "4a", day: "Thursday", size: 0 },
  { hour: "5a", day: "Thursday", size: 0 },
  { hour: "6a", day: "Thursday", size: 0 },
  { hour: "7a", day: "Thursday", size: 0 },
  { hour: "8a", day: "Thursday", size: 0 },
  { hour: "9a", day: "Thursday", size: 0 },
  { hour: "10a", day: "Thursday", size: 3 },
  { hour: "11a", day: "Thursday", size: 2 },
  { hour: "12p", day: "Thursday", size: 1 },
  { hour: "1p", day: "Thursday", size: 9 },
  { hour: "2p", day: "Thursday", size: 8 },
  { hour: "3p", day: "Thursday", size: 10 },
  { hour: "4p", day: "Thursday", size: 6 },
  { hour: "5p", day: "Thursday", size: 5 },
  { hour: "6p", day: "Thursday", size: 5 },
  { hour: "7p", day: "Thursday", size: 5 },
  { hour: "8p", day: "Thursday", size: 7 },
  { hour: "9p", day: "Thursday", size: 4 },
  { hour: "10p", day: "Thursday", size: 2 },
  { hour: "11p", day: "Thursday", size: 4 },
  { hour: "12a", day: "Wednesday", size: 7 },
  { hour: "1a", day: "Wednesday", size: 3 },
  { hour: "2a", day: "Wednesday", size: 0 },
  { hour: "3a", day: "Wednesday", size: 0 },
  { hour: "4a", day: "Wednesday", size: 0 },
  { hour: "5a", day: "Wednesday", size: 0 },
  { hour: "6a", day: "Wednesday", size: 0 },
  { hour: "7a", day: "Wednesday", size: 0 },
  { hour: "8a", day: "Wednesday", size: 1 },
  { hour: "9a", day: "Wednesday", size: 0 },
  { hour: "10a", day: "Wednesday", size: 5 },
  { hour: "11a", day: "Wednesday", size: 4 },
  { hour: "12p", day: "Wednesday", size: 7 },
  { hour: "1p", day: "Wednesday", size: 14 },
  { hour: "2p", day: "Wednesday", size: 13 },
  { hour: "3p", day: "Wednesday", size: 12 },
  { hour: "4p", day: "Wednesday", size: 9 },
  { hour: "5p", day: "Wednesday", size: 5 },
  { hour: "6p", day: "Wednesday", size: 5 },
  { hour: "7p", day: "Wednesday", size: 10 },
  { hour: "8p", day: "Wednesday", size: 6 },
  { hour: "9p", day: "Wednesday", size: 4 },
  { hour: "10p", day: "Wednesday", size: 4 },
  { hour: "11p", day: "Wednesday", size: 1 },
  { hour: "12a", day: "Tuesday", size: 1 },
  { hour: "1a", day: "Tuesday", size: 3 },
  { hour: "2a", day: "Tuesday", size: 0 },
  { hour: "3a", day: "Tuesday", size: 0 },
  { hour: "4a", day: "Tuesday", size: 0 },
  { hour: "5a", day: "Tuesday", size: 1 },
  { hour: "6a", day: "Tuesday", size: 0 },
  { hour: "7a", day: "Tuesday", size: 0 },
  { hour: "8a", day: "Tuesday", size: 0 },
  { hour: "9a", day: "Tuesday", size: 2 },
  { hour: "10a", day: "Tuesday", size: 4 },
  { hour: "11a", day: "Tuesday", size: 4 },
  { hour: "12p", day: "Tuesday", size: 2 },
  { hour: "1p", day: "Tuesday", size: 4 },
  { hour: "2p", day: "Tuesday", size: 4 },
  { hour: "3p", day: "Tuesday", size: 14 },
  { hour: "4p", day: "Tuesday", size: 12 },
  { hour: "5p", day: "Tuesday", size: 1 },
  { hour: "6p", day: "Tuesday", size: 8 },
  { hour: "7p", day: "Tuesday", size: 5 },
  { hour: "8p", day: "Tuesday", size: 3 },
  { hour: "9p", day: "Tuesday", size: 7 },
  { hour: "10p", day: "Tuesday", size: 3 },
  { hour: "11p", day: "Tuesday", size: 0 },
  { hour: "12a", day: "Monday", size: 2 },
  { hour: "1a", day: "Monday", size: 1 },
  { hour: "2a", day: "Monday", size: 0 },
  { hour: "3a", day: "Monday", size: 3 },
  { hour: "4a", day: "Monday", size: 0 },
  { hour: "5a", day: "Monday", size: 0 },
  { hour: "6a", day: "Monday", size: 0 },
  { hour: "7a", day: "Monday", size: 0 },
  { hour: "8a", day: "Monday", size: 2 },
  { hour: "9a", day: "Monday", size: 0 },
  { hour: "10a", day: "Monday", size: 4 },
  { hour: "11a", day: "Monday", size: 1 },
  { hour: "12p", day: "Monday", size: 5 },
  { hour: "1p", day: "Monday", size: 10 },
  { hour: "2p", day: "Monday", size: 5 },
  { hour: "3p", day: "Monday", size: 7 },
  { hour: "4p", day: "Monday", size: 11 },
  { hour: "5p", day: "Monday", size: 6 },
  { hour: "6p", day: "Monday", size: 0 },
  { hour: "7p", day: "Monday", size: 5 },
  { hour: "8p", day: "Monday", size: 3 },
  { hour: "9p", day: "Monday", size: 4 },
  { hour: "10p", day: "Monday", size: 2 },
  { hour: "11p", day: "Monday", size: 0 },
  { hour: "12a", day: "Sunday", size: 1 },
  { hour: "1a", day: "Sunday", size: 0 },
  { hour: "2a", day: "Sunday", size: 0 },
  { hour: "3a", day: "Sunday", size: 0 },
  { hour: "4a", day: "Sunday", size: 0 },
  { hour: "5a", day: "Sunday", size: 0 },
  { hour: "6a", day: "Sunday", size: 0 },
  { hour: "7a", day: "Sunday", size: 0 },
  { hour: "8a", day: "Sunday", size: 0 },
  { hour: "9a", day: "Sunday", size: 0 },
  { hour: "10a", day: "Sunday", size: 1 },
  { hour: "11a", day: "Sunday", size: 0 },
  { hour: "12p", day: "Sunday", size: 2 },
  { hour: "1p", day: "Sunday", size: 1 },
  { hour: "2p", day: "Sunday", size: 3 },
  { hour: "3p", day: "Sunday", size: 4 },
  { hour: "4p", day: "Sunday", size: 0 },
  { hour: "5p", day: "Sunday", size: 0 },
  { hour: "6p", day: "Sunday", size: 0 },
  { hour: "7p", day: "Sunday", size: 0 },
  { hour: "8p", day: "Sunday", size: 1 },
  { hour: "9p", day: "Sunday", size: 2 },
  { hour: "10p", day: "Sunday", size: 2 },
  { hour: "11p", day: "Sunday", size: 6 },
];

const days: Array<string> = [
  "Saturday",
  "Friday",
  "Thursday",
  "Wednesday",
  "Tuesday",
  "Monday",
  "Sunday",
];

const ChartComponent: React.FC = () => {
  useEffect(() => {
    const options: AgChartOptions = {
      container: document.getElementById("myChart"),
      title: {
        text: "Punch Card of Github",
        fontFamily: "Architects Daughter",
      },
      background: {
        fill: "transparent",
      },
      subtitle: {
        text: "Time Distribution of Commits",
        fontFamily: "Architects Daughter",
      },
      series: days.map((day) => ({
        data: data.filter((d) => d.day === day),
        type: "bubble",
        title: day,
        xKey: "hour",
        xName: "Time",
        yKey: "day",
        yName: "Day",
        sizeKey: "size",
        sizeName: "Commits",
        strokeWidth: 0,
        size: 0,
        maxSize: 40,
        label: {
          fontFamily: "Architects Daughter",
        },
      })),
      axes: [
        {
          position: "bottom",
          type: "category",
          label: {
            autoRotate: false,
            fontFamily: "Architects Daughter",
          },
          gridLine: {
            enabled: true,
          },
          line: {
            enabled: false,
          },
        },
        {
          position: "left",
          type: "category",
          label: {
            fontFamily: "Architects Daughter",
          },
          line: {
            enabled: false,
          },
        },
      ],
      seriesArea: {
        padding: {
          top: 20,
          right: 20,
          bottom: 20,
          left: 30,
        },
      },
    };

    AgCharts.create(options);
  }, []);

  return (
    <div
      id="myChart"
      style={{
        width: "90dvw",
        height: "90dvh",
        background: "linear-gradient(to right, #d9f49a, #feb47b)",
      }}
    ></div>
  );
};

export default ChartComponent;
