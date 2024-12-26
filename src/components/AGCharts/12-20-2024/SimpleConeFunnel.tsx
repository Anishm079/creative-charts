import React, { useEffect } from "react";
import { AgChartOptions, AgCharts } from "ag-charts-community";

function getData() {
  return [
    { group: "INITIAL CONTACT", value: 20000 },
    { group: "LEAD ENGAGEMENT", value: 15000 },
    { group: "QUALIFIED LEADS", value: 10000 },
    { group: "NEGOTIATION", value: 6000 },
    { group: "DEALS CLOSED", value: 3000 },
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
          type: "cone-funnel",
          stageKey: "group",
          valueKey: "value",
          stageLabel: {
            placement: "after",
            fontFamily: "Architects Daughter",
          },
          fillOpacity: 0.2,
          strokeWidth: 1,
          lineDash: [5],
          label: {
            formatter: ({ value, datum }) =>
              datum.group === "INITIAL CONTACT" ? "" : value.toLocaleString(),
            spacing: 20,
            fontFamily: "Architects Daughter",
          },
        },
      ],
    };

    AgCharts.create(options);
  }, []);

  return <div id="myChart" style={{ width: "90dvw", height: "90dvh", background:"linear-gradient(to right, #ff6a00, #ee0979)" }}></div>;
};

export default ChartComponent;
