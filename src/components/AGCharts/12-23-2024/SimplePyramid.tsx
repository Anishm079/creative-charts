import React, { useEffect } from "react";
import { AgChartOptions, AgCharts } from "ag-charts-community";

interface iData    {
    group: string;
    adults: number,
    percentage: string,
    incomeBracket: string,
  }

function getData():iData[] {
  return [
    {
      group: "Top 1%",
      adults: 99_000_000,
      percentage: "1%",
      incomeBracket: "",
    },
    {
      group: "High Net Worth",
      adults: 200_000_000,
      percentage: "4%",
      incomeBracket: "$100,000 - $1,000,000 →",
    },
    {
      group: "Upper Middle Class",
      adults: 800_000_000,
      percentage: "16%",
      incomeBracket: "$50,000 - $100,000  →",
    },
    {
      group: "Lower Middle Class",
      adults: 2_300_000_000,
      percentage: "46%",
      incomeBracket: "$10,000 - $50,000  →",
    },
    {
      group: "Bottom 50%",
      adults: 1_950_000_000,
      percentage: "33%",
      incomeBracket: "Below $10,000  →",
    },
  ];
}

const ChartComponent: React.FC = () => {
  useEffect(() => {
    const options: AgChartOptions = {
      container: document.getElementById("myChart"),
      data: getData(),
      background:{
        fill:"transparent"
      },
      series: [
        {
          type: "pyramid",
          stageKey: "incomeBracket",
          valueKey: "adults",
          spacing: 4,
          fillOpacity: 1,
          aspectRatio: 1.2,
          label: {
            formatter: ({ value, datum }) =>
              datum.group === "Lower Middle Class" ||
              datum.group === "Bottom 50%"
                ? `${datum.percentage}\n${value.toLocaleString()}`
                : datum.group === "Upper Middle Class"
                ? `${datum.percentage}`
                : ``,
            fontFamily: "Architects Daughter",
          },
          stageLabel: {
            fontFamily: "Architects Daughter",
          },
        },
      ],
    };

    AgCharts.create(options);
  }, []);

  return <div id="myChart" style={{ width: "90dvw", height: "90dvh", background:"linear-gradient(135deg, #FFB6C1, #8A2BE2, #FFD700, #98FB98)" }}></div>;
};

export default ChartComponent;
