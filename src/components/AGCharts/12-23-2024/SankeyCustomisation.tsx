import React, { useEffect } from "react";
import { AgChartOptions, AgCharts } from "ag-charts-community";

const ChartComponent: React.FC = () => {
  useEffect(() => {
    const options: AgChartOptions = {
      container: document.getElementById("myChart"),
      title: {
        text: "Combustion Engine Efficiency",
        fontFamily: "Architects Daughter",
      },
      background:{
        fill:"transparent"
      },
      data: [
        { from: "Chemical Energy", to: "Losses", conversion: 0.75 },
        { from: "Losses", to: "Exhaust Gas", conversion: 0.4 },
        { from: "Losses", to: "Coolant", conversion: 0.3 },
        { from: "Losses", to: "Friction", conversion: 0.05 },
        { from: "Chemical Energy", to: "Kinetic Energy", conversion: 0.25 },
      ],
      series: [
        {
          type: "sankey",
          fromKey: "from",
          toKey: "to",
          sizeKey: "conversion",
          sizeName: "Conversion",
          node: {
            width: 40,
            strokeWidth: 1,
            strokeOpacity: 0.6,
            label: {
              fontFamily: "Architects Daughter",
            },
          },
          link: {
            fill: "#888",
            fillOpacity: 0.1,
            stroke: "#888",
            strokeOpacity: 0.5,
            strokeWidth: 1,
            lineDash: [0.5, 1.5],
          },
          label: {
            fontWeight: "bold",
            color: "#888",
            fontFamily: "Architects Daughter",
          },
        },
      ],
    };

    AgCharts.create(options);
  }, []);

  return <div id="myChart" style={{ width: "90dvw", height: "90dvh", background:"linear-gradient(135deg, #97b2ba, #c9e2ff)" }}></div>;
};

export default ChartComponent;
