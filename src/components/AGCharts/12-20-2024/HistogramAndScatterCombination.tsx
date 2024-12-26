import React, { useEffect } from "react";
import { AgChartOptions, AgCharts } from "ag-charts-community";

function getData() {
  return [
    {
      "engine-size": 130,
      "highway-mpg": 27,
    },
    {
      "engine-size": 130,
      "highway-mpg": 27,
    },
    {
      "engine-size": 152,
      "highway-mpg": 26,
    },
    {
      "engine-size": 109,
      "highway-mpg": 30,
    },
    {
      "engine-size": 136,
      "highway-mpg": 22,
    },
    {
      "engine-size": 136,
      "highway-mpg": 25,
    },
    {
      "engine-size": 136,
      "highway-mpg": 25,
    },
    {
      "engine-size": 136,
      "highway-mpg": 25,
    },
    {
      "engine-size": 131,
      "highway-mpg": 20,
    },
    {
      "engine-size": 131,
      "highway-mpg": 22,
    },
    {
      "engine-size": 108,
      "highway-mpg": 29,
    },
    {
      "engine-size": 108,
      "highway-mpg": 29,
    },
    {
      "engine-size": 164,
      "highway-mpg": 28,
    },
    {
      "engine-size": 164,
      "highway-mpg": 28,
    },
    {
      "engine-size": 164,
      "highway-mpg": 25,
    },
    {
      "engine-size": 209,
      "highway-mpg": 22,
    },
    {
      "engine-size": 209,
      "highway-mpg": 22,
    },
    {
      "engine-size": 209,
      "highway-mpg": 20,
    },
    {
      "engine-size": 61,
      "highway-mpg": 53,
    },
    {
      "engine-size": 90,
      "highway-mpg": 43,
    },
    {
      "engine-size": 90,
      "highway-mpg": 43,
    },
    {
      "engine-size": 90,
      "highway-mpg": 41,
    },
    {
      "engine-size": 90,
      "highway-mpg": 38,
    },
    {
      "engine-size": 98,
      "highway-mpg": 30,
    },
    {
      "engine-size": 90,
      "highway-mpg": 38,
    },
    {
      "engine-size": 90,
      "highway-mpg": 38,
    },
    {
      "engine-size": 90,
      "highway-mpg": 38,
    },
    {
      "engine-size": 98,
      "highway-mpg": 30,
    },
    {
      "engine-size": 122,
      "highway-mpg": 30,
    },
    {
      "engine-size": 156,
      "highway-mpg": 24,
    },
    {
      "engine-size": 92,
      "highway-mpg": 54,
    },
    {
      "engine-size": 92,
      "highway-mpg": 38,
    },
    {
      "engine-size": 79,
      "highway-mpg": 42,
    },
    {
      "engine-size": 92,
      "highway-mpg": 34,
    },
    {
      "engine-size": 92,
      "highway-mpg": 34,
    },
    {
      "engine-size": 92,
      "highway-mpg": 34,
    },
    {
      "engine-size": 92,
      "highway-mpg": 34,
    },
    {
      "engine-size": 110,
      "highway-mpg": 33,
    },
    {
      "engine-size": 110,
      "highway-mpg": 33,
    },
    {
      "engine-size": 110,
      "highway-mpg": 33,
    },
    {
      "engine-size": 110,
      "highway-mpg": 33,
    },
    {
      "engine-size": 110,
      "highway-mpg": 28,
    },
    {
      "engine-size": 110,
      "highway-mpg": 31,
    },
    {
      "engine-size": 111,
      "highway-mpg": 29,
    },
    {
      "engine-size": 90,
      "highway-mpg": 43,
    },
    {
      "engine-size": 90,
      "highway-mpg": 43,
    },
    {
      "engine-size": 119,
      "highway-mpg": 29,
    },
    {
      "engine-size": 258,
      "highway-mpg": 19,
    },
    {
      "engine-size": 258,
      "highway-mpg": 19,
    },
    {
      "engine-size": 326,
      "highway-mpg": 17,
    },
    {
      "engine-size": 91,
      "highway-mpg": 31,
    },
    {
      "engine-size": 91,
      "highway-mpg": 38,
    },
    {
      "engine-size": 91,
      "highway-mpg": 38,
    },
    {
      "engine-size": 91,
      "highway-mpg": 38,
    },
    {
      "engine-size": 91,
      "highway-mpg": 38,
    },
    {
      "engine-size": 70,
      "highway-mpg": 23,
    },
    {
      "engine-size": 70,
      "highway-mpg": 23,
    },
    {
      "engine-size": 70,
      "highway-mpg": 23,
    },
    {
      "engine-size": 80,
      "highway-mpg": 23,
    },
    {
      "engine-size": 122,
      "highway-mpg": 32,
    },
    {
      "engine-size": 122,
      "highway-mpg": 32,
    },
    {
      "engine-size": 122,
      "highway-mpg": 32,
    },
    {
      "engine-size": 122,
      "highway-mpg": 32,
    },
    {
      "engine-size": 122,
      "highway-mpg": 42,
    },
    {
      "engine-size": 122,
      "highway-mpg": 32,
    },
    {
      "engine-size": 140,
      "highway-mpg": 27,
    },
    {
      "engine-size": 134,
      "highway-mpg": 39,
    },
    {
      "engine-size": 183,
      "highway-mpg": 25,
    },
    {
      "engine-size": 183,
      "highway-mpg": 25,
    },
    {
      "engine-size": 183,
      "highway-mpg": 25,
    },
    {
      "engine-size": 183,
      "highway-mpg": 25,
    },
    {
      "engine-size": 234,
      "highway-mpg": 18,
    },
    {
      "engine-size": 234,
      "highway-mpg": 18,
    },
    {
      "engine-size": 308,
      "highway-mpg": 16,
    },
    {
      "engine-size": 304,
      "highway-mpg": 16,
    },
    {
      "engine-size": 140,
      "highway-mpg": 24,
    },
    {
      "engine-size": 92,
      "highway-mpg": 41,
    },
    {
      "engine-size": 92,
      "highway-mpg": 38,
    },
    {
      "engine-size": 92,
      "highway-mpg": 38,
    },
    {
      "engine-size": 98,
      "highway-mpg": 30,
    },
    {
      "engine-size": 110,
      "highway-mpg": 30,
    },
    {
      "engine-size": 122,
      "highway-mpg": 32,
    },
    {
      "engine-size": 156,
      "highway-mpg": 24,
    },
    {
      "engine-size": 156,
      "highway-mpg": 24,
    },
    {
      "engine-size": 156,
      "highway-mpg": 24,
    },
    {
      "engine-size": 122,
      "highway-mpg": 32,
    },
    {
      "engine-size": 122,
      "highway-mpg": 32,
    },
    {
      "engine-size": 110,
      "highway-mpg": 30,
    },
    {
      "engine-size": 110,
      "highway-mpg": 30,
    },
    {
      "engine-size": 97,
      "highway-mpg": 37,
    },
    {
      "engine-size": 103,
      "highway-mpg": 50,
    },
    {
      "engine-size": 97,
      "highway-mpg": 37,
    },
    {
      "engine-size": 97,
      "highway-mpg": 37,
    },
    {
      "engine-size": 97,
      "highway-mpg": 37,
    },
    {
      "engine-size": 97,
      "highway-mpg": 37,
    },
    {
      "engine-size": 97,
      "highway-mpg": 37,
    },
    {
      "engine-size": 97,
      "highway-mpg": 37,
    },
    {
      "engine-size": 97,
      "highway-mpg": 37,
    },
    {
      "engine-size": 97,
      "highway-mpg": 37,
    },
    {
      "engine-size": 120,
      "highway-mpg": 34,
    },
    {
      "engine-size": 120,
      "highway-mpg": 34,
    },
    {
      "engine-size": 181,
      "highway-mpg": 22,
    },
    {
      "engine-size": 181,
      "highway-mpg": 22,
    },
    {
      "engine-size": 181,
      "highway-mpg": 25,
    },
    {
      "engine-size": 181,
      "highway-mpg": 25,
    },
    {
      "engine-size": 181,
      "highway-mpg": 23,
    },
    {
      "engine-size": 181,
      "highway-mpg": 25,
    },
    {
      "engine-size": 120,
      "highway-mpg": 24,
    },
    {
      "engine-size": 152,
      "highway-mpg": 33,
    },
    {
      "engine-size": 120,
      "highway-mpg": 24,
    },
    {
      "engine-size": 152,
      "highway-mpg": 25,
    },
    {
      "engine-size": 120,
      "highway-mpg": 24,
    },
    {
      "engine-size": 152,
      "highway-mpg": 33,
    },
    {
      "engine-size": 120,
      "highway-mpg": 24,
    },
    {
      "engine-size": 152,
      "highway-mpg": 25,
    },
    {
      "engine-size": 120,
      "highway-mpg": 24,
    },
    {
      "engine-size": 152,
      "highway-mpg": 33,
    },
    {
      "engine-size": 134,
      "highway-mpg": 24,
    },
    {
      "engine-size": 90,
      "highway-mpg": 41,
    },
    {
      "engine-size": 98,
      "highway-mpg": 30,
    },
    {
      "engine-size": 90,
      "highway-mpg": 38,
    },
    {
      "engine-size": 90,
      "highway-mpg": 38,
    },
    {
      "engine-size": 98,
      "highway-mpg": 38,
    },
    {
      "engine-size": 122,
      "highway-mpg": 30,
    },
    {
      "engine-size": 156,
      "highway-mpg": 24,
    },
    {
      "engine-size": 151,
      "highway-mpg": 27,
    },
    {
      "engine-size": 194,
      "highway-mpg": 25,
    },
    {
      "engine-size": 194,
      "highway-mpg": 25,
    },
    {
      "engine-size": 194,
      "highway-mpg": 25,
    },
    {
      "engine-size": 203,
      "highway-mpg": 28,
    },
    {
      "engine-size": 132,
      "highway-mpg": 31,
    },
    {
      "engine-size": 132,
      "highway-mpg": 31,
    },
    {
      "engine-size": 121,
      "highway-mpg": 28,
    },
    {
      "engine-size": 121,
      "highway-mpg": 28,
    },
    {
      "engine-size": 121,
      "highway-mpg": 28,
    },
    {
      "engine-size": 121,
      "highway-mpg": 28,
    },
    {
      "engine-size": 121,
      "highway-mpg": 26,
    },
    {
      "engine-size": 121,
      "highway-mpg": 26,
    },
    {
      "engine-size": 97,
      "highway-mpg": 36,
    },
    {
      "engine-size": 108,
      "highway-mpg": 31,
    },
    {
      "engine-size": 108,
      "highway-mpg": 31,
    },
    {
      "engine-size": 108,
      "highway-mpg": 37,
    },
    {
      "engine-size": 108,
      "highway-mpg": 33,
    },
    {
      "engine-size": 108,
      "highway-mpg": 32,
    },
    {
      "engine-size": 108,
      "highway-mpg": 25,
    },
    {
      "engine-size": 108,
      "highway-mpg": 29,
    },
    {
      "engine-size": 108,
      "highway-mpg": 32,
    },
    {
      "engine-size": 108,
      "highway-mpg": 31,
    },
    {
      "engine-size": 108,
      "highway-mpg": 29,
    },
    {
      "engine-size": 108,
      "highway-mpg": 23,
    },
    {
      "engine-size": 92,
      "highway-mpg": 39,
    },
    {
      "engine-size": 92,
      "highway-mpg": 38,
    },
    {
      "engine-size": 92,
      "highway-mpg": 38,
    },
    {
      "engine-size": 92,
      "highway-mpg": 37,
    },
    {
      "engine-size": 92,
      "highway-mpg": 32,
    },
    {
      "engine-size": 92,
      "highway-mpg": 32,
    },
    {
      "engine-size": 98,
      "highway-mpg": 37,
    },
    {
      "engine-size": 98,
      "highway-mpg": 37,
    },
    {
      "engine-size": 110,
      "highway-mpg": 36,
    },
    {
      "engine-size": 110,
      "highway-mpg": 47,
    },
    {
      "engine-size": 98,
      "highway-mpg": 47,
    },
    {
      "engine-size": 98,
      "highway-mpg": 34,
    },
    {
      "engine-size": 98,
      "highway-mpg": 34,
    },
    {
      "engine-size": 98,
      "highway-mpg": 34,
    },
    {
      "engine-size": 98,
      "highway-mpg": 34,
    },
    {
      "engine-size": 98,
      "highway-mpg": 29,
    },
    {
      "engine-size": 98,
      "highway-mpg": 29,
    },
    {
      "engine-size": 146,
      "highway-mpg": 30,
    },
    {
      "engine-size": 146,
      "highway-mpg": 30,
    },
    {
      "engine-size": 146,
      "highway-mpg": 30,
    },
    {
      "engine-size": 146,
      "highway-mpg": 30,
    },
    {
      "engine-size": 146,
      "highway-mpg": 30,
    },
    {
      "engine-size": 146,
      "highway-mpg": 30,
    },
    {
      "engine-size": 122,
      "highway-mpg": 34,
    },
    {
      "engine-size": 110,
      "highway-mpg": 33,
    },
    {
      "engine-size": 122,
      "highway-mpg": 32,
    },
    {
      "engine-size": 122,
      "highway-mpg": 32,
    },
    {
      "engine-size": 122,
      "highway-mpg": 32,
    },
    {
      "engine-size": 171,
      "highway-mpg": 24,
    },
    {
      "engine-size": 171,
      "highway-mpg": 24,
    },
    {
      "engine-size": 171,
      "highway-mpg": 24,
    },
    {
      "engine-size": 161,
      "highway-mpg": 24,
    },
    {
      "engine-size": 97,
      "highway-mpg": 46,
    },
    {
      "engine-size": 109,
      "highway-mpg": 34,
    },
    {
      "engine-size": 97,
      "highway-mpg": 46,
    },
    {
      "engine-size": 109,
      "highway-mpg": 34,
    },
    {
      "engine-size": 109,
      "highway-mpg": 34,
    },
    {
      "engine-size": 97,
      "highway-mpg": 42,
    },
    {
      "engine-size": 109,
      "highway-mpg": 32,
    },
    {
      "engine-size": 109,
      "highway-mpg": 29,
    },
    {
      "engine-size": 109,
      "highway-mpg": 29,
    },
    {
      "engine-size": 136,
      "highway-mpg": 24,
    },
    {
      "engine-size": 97,
      "highway-mpg": 38,
    },
    {
      "engine-size": 109,
      "highway-mpg": 31,
    },
    {
      "engine-size": 141,
      "highway-mpg": 28,
    },
    {
      "engine-size": 141,
      "highway-mpg": 28,
    },
    {
      "engine-size": 141,
      "highway-mpg": 28,
    },
    {
      "engine-size": 141,
      "highway-mpg": 28,
    },
    {
      "engine-size": 130,
      "highway-mpg": 22,
    },
    {
      "engine-size": 130,
      "highway-mpg": 22,
    },
    {
      "engine-size": 141,
      "highway-mpg": 28,
    },
    {
      "engine-size": 141,
      "highway-mpg": 25,
    },
    {
      "engine-size": 173,
      "highway-mpg": 23,
    },
    {
      "engine-size": 145,
      "highway-mpg": 27,
    },
    {
      "engine-size": 141,
      "highway-mpg": 25,
    },
  ];
}

const ChartComponent: React.FC = () => {
  useEffect(() => {
    const data = getData();

    const options: AgChartOptions = {
      container: document.getElementById("myChart"),
      data,
      title: {
        text: "Vehicle Fuel Efficiency",
        fontSize: 18,
        fontFamily: "Architects Daughter",
      },
      background:{
        fill:"transparent"
      },
      subtitle: {
        text: "USA 1987",
        fontFamily: "Architects Daughter",
        color:"#000"
      },
      series: [
        {
          type: "histogram",
          xKey: "engine-size",
          xName: "Engine Size",
          yKey: "highway-mpg",
          yName: "Highway MPG",
          aggregation: "mean",
          strokeWidth: 2,
          strokeOpacity: 0,
          cornerRadius: 6,
        },
        {
          type: "scatter",
          xKey: "engine-size",
          xName: "Engine Size",
          yKey: "highway-mpg",
          yName: "Highway MPG",
          strokeWidth: 0,
          fillOpacity: 1,
        },
      ],
      axes: [
        {
          position: "bottom",
          type: "number",
          nice: false,
          gridLine: {
            style: [
              {
                stroke: "rgb(0, 0, 0)",
                lineDash: [2],
              },
            ],
          },
          title: {
            enabled: true,
            text: "Engine Size",
            fontFamily: "Architects Daughter",
            color:"#000"
          },
          crosshair: {
            enabled: false,
          },
          label: {
            fontFamily: "Architects Daughter",
            color:"#000"
          },
        },
        {
          position: "left",
          type: "number",
          nice: false,
          gridLine: {
            style: [
              {
                stroke: "rgb(0, 0, 0)",
                lineDash: [2],
              },
            ],
          },
          label: {
            enabled: false,
            fontFamily: "Architects Daughter",
          },
          crosshair: {
            enabled: false,
          },
        },
      ],
      legend: {
        enabled: false,
      },
    };

    AgCharts.create(options);
  }, []);

  return <div id="myChart" style={{ width: "90dvw", height: "90dvh", background:"linear-gradient(to right, #9c27b0, #4caf50)" }}></div>;
};

export default ChartComponent;
