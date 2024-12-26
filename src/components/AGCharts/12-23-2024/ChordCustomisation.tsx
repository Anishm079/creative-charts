import React, { useEffect } from "react";
import { AgChartOptions, AgCharts } from "ag-charts-community";

const ChartComponent: React.FC = () => {
  useEffect(() => {
    const numberFormatter = new Intl.NumberFormat("en-US", { useGrouping: true });

    const options: AgChartOptions = {
      container: document.getElementById("myChart"),
      title: {
        text: "Busiest Flights",
        fontFamily: "Architects Daughter",
      },
      background:{
        fill:"transparent"
      },
      data: [
        { from: "HKG", to: "TPE", passengers: 7566000 },
        { from: "CAI", to: "JED", passengers: 5145000 },
        { from: "DXB", to: "LHR", passengers: 3192195 },
        { from: "LHR", to: "JFK", passengers: 3078693 },
        { from: "SIN", to: "CGK", passengers: 3064213 },
        { from: "BKK", to: "HKG", passengers: 2789792 },
        { from: "KUL", to: "SIN", passengers: 2755411 },
        { from: "JFK", to: "CDG", passengers: 2636491 },
        { from: "LHR", to: "DXB", passengers: 2338127 },
        { from: "LAX", to: "LHR", passengers: 1645002 },
      ],
      series: [
        {
          type: "chord",
          fromKey: "from",
          toKey: "to",
          sizeKey: "passengers",
          sizeName: "Passengers",
          node: {
            width: 40,
            strokeWidth: 1,
            label: {
              fontFamily: "Architects Daughter",
            },
          },
          link: {
            fill: "#888",
            fillOpacity: 0.225,
            stroke: "#888",
            strokeOpacity: 0.55,
            strokeWidth: 1,
          },
          label: {
            fontWeight: "bold",
            color: "#888",
            spacing: 10,
            fontFamily: "Architects Daughter",
          },
        },
      ],
    };

    AgCharts.create(options);
  }, []);

  return <div id="myChart" style={{ width: "90dvw", height: "90dvh", background:"linear-gradient(135deg, #F08080, #E6E6FA, #FFDAB9, #87CEFA, #98FB98, #FFE4E1, #FAFAD2, #BA55D3, #B0E0E6, #D8BFD8)" }}></div>;
};

export default ChartComponent;
