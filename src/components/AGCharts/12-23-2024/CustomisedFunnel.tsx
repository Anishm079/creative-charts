import React, { useEffect } from "react";
import { AgChartOptions, AgCharts } from "ag-charts-community";

interface iData{
    group:string;
    value:number
}

function getData():iData[] {
  return [
    { group: "Website Visitors", value: 15000 },
    { group: "Sign-Ups", value: 12000 },
    { group: "Product Trials", value: 7000 },
    { group: "Qualified Leads", value: 4000 },
    { group: "Purchases", value: 1200 },
  ];
}

const ChartComponent: React.FC = () => {
  useEffect(() => {
    const data = getData();

    const options: AgChartOptions = {
      container: document.getElementById("myChart"),
      data,
      title: {
        text: "CUSTOMER JOURNEY",
        spacing: 20,
        fontFamily: "Architects Daughter",
      },
      background:{
        fill:"transparent"
      },
      series: [
        {
          type: "funnel",
          stageKey: "group",
          valueKey: "value",
          direction: "horizontal",
          dropOff: {
            enabled: false,
          },
          spacingRatio: 0,
          strokeWidth: 10,
          strokeOpacity: 0,
          itemStyler: ({ datum, valueKey, stroke }) => ({
            fill: stroke,
            fillOpacity: getOpacity(datum[valueKey], valueKey, 0.4, 1),
          }),
          label: {
            formatter({ value }) {
              return value.toLocaleString();
            },
            fontFamily: "Architects Daughter",
          },
          stageLabel: {
            placement: "before",
            fontFamily: "Architects Daughter",
          },
        },
      ],
    };

    function getOpacity(value:number, key:string, minOpacity:number, maxOpacity:number) {
      const [min, max] = getDomain(key as "value");
      let alpha = Math.round(((value - min) / (max - min)) * 10) / 10;
      return map(alpha, 0, 1, minOpacity, maxOpacity);
    }

    function getDomain(key: "value") {
      const min = Math.min(...data.map((d:iData) => d[key]));
      const max = Math.max(...data.map((d:iData) => d[key]));
      return [min, max];
    }

    const map = (value:number, start1:number, end1:number, start2:number, end2:number) => {
      return ((value - start1) / (end1 - start1)) * (end2 - start2) + start2;
    };

    AgCharts.create(options);
  }, []);

  return <div id="myChart" style={{ width: "90dvw", height: "90dvh", background:"linear-gradient(135deg, #F08080, #E6E6FA, #FFDAB9, #87CEFA, #98FB98, #FFE4E1, #FAFAD2, #BA55D3, #B0E0E6, #D8BFD8)" }}></div>;
};

export default ChartComponent;
