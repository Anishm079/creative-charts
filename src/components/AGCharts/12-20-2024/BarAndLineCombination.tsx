import React, { useEffect } from "react";
import { AgChartOptions, AgCharts } from "ag-charts-community";

function getData() {
  return [
    {
      year: "2018",
      phone: -0.09,
      desktop: -0.15,
      tv: -0.12,
      tablet: -0.09,
      radio: -0.05,
      billboard: -0.09,
    },
    {
      year: "2019",
      phone: -0.05,
      desktop: -0.07,
      tv: -0.11,
      tablet: -0.01,
      radio: -0.02,
      billboard: -0.04,
    },
    {
      year: "2020",
      phone: -0.06,
      desktop: -0.06,
      tv: -0.1,
      tablet: -0.04,
      radio: -0.04,
      billboard: -0.04,
    },
    {
      year: "2021",
      phone: 0,
      desktop: -0.03,
      tv: -0.05,
      tablet: 0.01,
      radio: -0.01,
      billboard: -0.01,
    },
    {
      year: "2022",
      phone: 0.01,
      desktop: -0.02,
      tv: -0.03,
      tablet: -0.02,
      radio: 0.02,
      billboard: 0,
    },
    {
      year: "2023",
      phone: 0.03,
      desktop: -0.03,
      tv: -0.01,
      tablet: -0.05,
      radio: 0.03,
      billboard: 0,
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
      title: {
        text: "Ad Campaign Impact",
        fontFamily: "Architects Daughter",
      },
      subtitle: {
        text: "Yearly Percentage Change in Advertisement Engagement",
        fontFamily: "Architects Daughter",
      },
      footnote: {
        text: "2018 to 2023",
        fontFamily: "Architects Daughter",
      },
      theme: {
        overrides: {
          line: {
            series: {
              marker: {
                enabled: false,
              },
              lineDash: [5, 8],
              label: {
                fontFamily: "Architects Daughter",
              },
            },
          },
          bar: {
            series: {
              fillOpacity: 0.9,
              label: {
                fontFamily: "Architects Daughter",
              },
            },
          },
        },
      },
      series: [
        {
          type: "bar",
          xKey: "year",
          yKey: "desktop",
          yName: "Desktop",
          label: {
            fontFamily: "Architects Daughter",
          },
        },
        {
          type: "bar",
          xKey: "year",
          yKey: "phone",
          yName: "Phone",
          label: {
            fontFamily: "Architects Daughter",
          },
        },
        {
          type: "line",
          xKey: "year",
          yKey: "tv",
          yName: "TV",
          label: {
            fontFamily: "Architects Daughter",
          },
        },
        {
          type: "line",
          xKey: "year",
          yKey: "tablet",
          yName: "Tablet",
          label: {
            fontFamily: "Architects Daughter",
          },
        },
        {
          type: "line",
          xKey: "year",
          yKey: "radio",
          yName: "Radio",
          label: {
            fontFamily: "Architects Daughter",
          },
        },
        {
          type: "line",
          xKey: "year",
          yKey: "billboard",
          yName: "Billboard",
          label: {
            fontFamily: "Architects Daughter",
          },
        },
      ],
      axes: [
        {
          type: "category",
          position: "top",
          paddingInner: 0.4,
          line: {
            enabled: false,
          },
          gridLine: {
            enabled: true,
          },
          label: {
            fontFamily: "Architects Daughter",
          },
        },
        {
          type: "number",
          position: "left",
          interval: { values: [0] },
          label: {
            enabled: false,
            fontFamily: "Architects Daughter",
          },
          gridLine: {
            width: 2,
          },
          crosshair: {
            enabled: false,
          },
        },
      ],
      legend: {
        item: {
          marker: {
            shape: "circle",
          },
          label: {
            fontFamily: "Architects Daughter",
          },
        },
      },
    };

    AgCharts.create(options);
  }, []);

  return <div id="myChart" style={{ width: "90dvw", height: "90dvh", background:"linear-gradient(to right, #00d2ff, #3a7bd5)" }}></div>;
};

export default ChartComponent;
