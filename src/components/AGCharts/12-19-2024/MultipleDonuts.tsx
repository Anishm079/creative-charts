import React, { useEffect } from "react";
import { AgChartOptions, AgCharts } from "ag-charts-community";

function getData() {
  return {
    continents: [
      {
        continent: "Europe",
        value: 1120,
      },
      {
        continent: "Asia",
        value: 950,
      },
    ],
    countries: [
      { country: "Germany", value: 430, index: 0 },
      { country: "England", value: 370, index: 1 },
      { country: "Italy", value: 320, index: 2 },
      { country: "Singapore", value: 330, index: 3 },
      { country: "India", value: 290, index: 4 },
      { country: "Japan", value: 330, index: 5 },
    ],
    cities: [
      { city: "Berlin", value: 150, index: 0 },
      { city: "Munich", value: 100, index: 1 },
      { city: "Hamburg", value: 180, index: 2 },
      { city: "London", value: 120, index: 3 },
      { city: "Manchester", value: 90, index: 4 },
      { city: "Birmingham", value: 160, index: 5 },
      { city: "Rome", value: 130, index: 6 },
      { city: "Milan", value: 80, index: 7 },
      { city: "Venice", value: 110, index: 8 },
      { city: "Singapore City", value: 110, index: 9 },
      { city: "Jurong", value: 120, index: 10 },
      { city: "Woodlands", value: 100, index: 11 },
      { city: "Delhi", value: 90, index: 12 },
      { city: "Mumbai", value: 70, index: 13 },
      { city: "Bangalore", value: 130, index: 14 },
      { city: "Tokyo", value: 120, index: 15 },
      { city: "Osaka", value: 100, index: 16 },
      { city: "Kyoto", value: 110, index: 17 },
    ],
  };
}

const ChartComponent: React.FC = () => {
  useEffect(() => {
    const data = getData();
    const tooltip = {
      renderer({ datum, sectorLabelKey, angleKey }) {
        return {
          data: [
            {
              label: datum[sectorLabelKey],
              value: `${datum[angleKey]} Litres`,
              fontFamily: "Architects Daughter",
            },
          ],
        };
      },
    };

    const options: AgChartOptions = {
      container: document.getElementById("myChart"),
      title: {
        text: "Water Usage",
        fontFamily: "Architects Daughter",
      },
      background:{
        fill:"transparent"
      },
      subtitle: {
        text: "Daily Water Usage Per Person Per Day In Litres",
        fontFamily: "Architects Daughter",
      },
      series: [
        {
          data: data["countries"],
          type: "donut",
          angleKey: "value",
          sectorLabelKey: "country",
          outerRadiusRatio: 1,
          innerRadiusRatio: 0.6,
          cornerRadius: 4,
          fillOpacity: 0.9,
          tooltip,
          sectorLabel: {
            fontFamily: "Architects Daughter",
          },
        },
        {
          data: data["continents"],
          type: "donut",
          angleKey: "value",
          sectorLabelKey: "continent",
          outerRadiusRatio: 0.5,
          innerRadiusRatio: 0.1,
          cornerRadius: 4,
          tooltip,
          sectorLabel: {
            fontFamily: "Architects Daughter",
          },
        },
      ],
      legend: {
        enabled: false,
      },
    };

    AgCharts.create(options);
  }, []);

  return <div id="myChart" style={{ width: "90dvw", height: "90dvh", background:"linear-gradient(to bottom left,#6a82fb,#ffb347)" }}></div>;
};

export default ChartComponent;
