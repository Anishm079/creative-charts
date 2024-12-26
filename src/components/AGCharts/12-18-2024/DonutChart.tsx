import React, { useEffect } from "react";
import { AgChartOptions, AgCharts } from "ag-charts-community";

function getData() {
    return [
      { type: "House", count: 15349 },
      { type: "Bungalow", count: 1656 },
      { type: "Converted Maisonette", count: 2147 },
      { type: "Low Rise Flats", count: 4954 },
      { type: "Medium Rise Flats", count: 1887 },
      { type: "High Rise Flats", count: 820 },
      { type: "Dwelling", count: 610 },
      { type: "Other", count: 2147 },
    ];
  }

const ChartComponent: React.FC = () => {
  useEffect(() => {
    const data = getData();
    const numFormatter = new Intl.NumberFormat("en-US");
    const total = data.reduce((sum, d) => sum + d["count"], 0);

    const options: AgChartOptions = {
      container: document.getElementById("myChart"),
      data,
      title: {
        text: "Dwelling Fires (UK)",
        fontFamily: "Architects Daughter",
        color:"black",
      },
      background:{
        fill:"transparent"
      },
      footnote: {
        text: "Source: Home Office",
        fontFamily: "Architects Daughter",
      },
      series: [
        {
          type: "donut",
          calloutLabelKey: "type",
          angleKey: "count",
          sectorLabelKey: "count",
          calloutLabel: {
            enabled: false,
          },
          sectorLabel: {
            formatter: ({ datum, sectorLabelKey }) => {
              const value = datum[sectorLabelKey];
              return numFormatter.format(value);
            },
            fontFamily: "Architects Daughter",
          },
          title: {
            text: "Annual Count",
            fontFamily: "Architects Daughter",
          },
          innerRadiusRatio: 0.7,
          innerLabels: [
            {
              text: numFormatter.format(total),
              fontSize: 24,
              fontFamily: "Architects Daughter",
              color:"black"
            },
            {
              text: "Total",
              fontSize: 16,
              spacing: 10,
              color:"black",
              fontFamily: "Architects Daughter",
            },
          ],
          sectorSpacing: 3,
        },
      ],
      legend: {
        enabled: true,
        item: {
          label: {
            fontFamily: "Architects Daughter",color:"black",
          },
        },
      },
    };

    AgCharts.create(options);
  }, []);

  return <div id="myChart" style={{ width: "90dvw", height: "90dvh", background:"linear-gradient(to right,green,purple)" }}></div>;
};

export default ChartComponent;
