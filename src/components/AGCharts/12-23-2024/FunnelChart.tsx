import React, { useEffect } from "react";
import { AgChartOptions, AgCharts } from "ag-charts-community";

interface iData {
  group: string;
  value: number;
}

function getData(): iData[] {
  return [
    { group: "Leads Generated", value: 10000 },
    { group: "Contacted", value: 8000 },
    { group: "Qualified Leads", value: 6000 },
    { group: "Proposal Sent", value: 4500 },
    { group: "Negotiation", value: 3000 },
    { group: "Closed Won", value: 1500 },
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
      title: {
        text: "Conversion Drop Off",
        fontFamily: "Architects Daughter",
      },
      series: [
        {
          type: "funnel",
          stageKey: "group",
          valueKey: "value",
          spacingRatio: 0.3,
          stageLabel: {
            enabled: false,
          },
          label: {
            formatter({ value }) {
              return value.toLocaleString();
            },
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
