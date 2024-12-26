import React, { useEffect } from "react";
import { AgChartOptions, AgCharts } from "ag-charts-community";

function getData() {
  return {
    stores: [
      {
        store: "Selfridges",
        total: 4000000000,
      },
    ],
    departments: [
      { department: "Electronics", value: 15000000 },
      { department: "Clothing", value: 10000000 },
      { department: "Home", value: 15000000 },
    ],
    categories: [
      { category: "Smartphones", value: 4000000 },
      { category: "Laptops", value: 6000000 },
      { category: "Cameras", value: 5000000 },
      { category: "Men's", value: 3000000 },
      { category: "Women's", value: 5000000 },
      { category: "Children's", value: 2000000 },
      { category: "Furniture", value: 8000000 },
      { category: "Appliances", value: 6000000 },
      { category: "Decor", value: 1000000 },
    ],
  };
}

const ChartComponent: React.FC = () => {
  useEffect(() => {
    const data = getData();
    const numFormatter = new Intl.NumberFormat("en-US");
    const tooltip = {
      renderer: ({ datum, sectorLabelKey, calloutLabelKey, angleKey }) => ({
        data: [
          {
            label: datum[sectorLabelKey ?? calloutLabelKey],
            value: `${numFormatter.format(datum[angleKey] / 1000000)}M`,
            fontFamily: "Architects Daughter",
          },
        ],
      }),
    };

    const options: AgChartOptions = {
      container: document.getElementById("myChart"),
      title: {
        text: "Oxford Street Selfridges",
        fontFamily: "Architects Daughter",
      },
      background:{
        fill:"transparent"
      },
      subtitle: {
        text: "Total Product Value by Department",
        fontFamily: "Architects Daughter",
      },
      series: [
        {
          data: data["categories"],
          type: "donut",
          calloutLabelKey: "category",
          calloutLabel: {
            offset: 10,
            fontFamily: "Architects Daughter",
          },
          angleKey: "value",
          radiusKey: "value",
          outerRadiusRatio: 0.8,
          innerRadiusRatio: 0.6,
          fillOpacity: 0.4,
          tooltip,
        },
        {
          data: data["departments"],
          type: "donut",
          sectorLabelKey: "department",
          angleKey: "value",
          outerRadiusRatio: 0.6,
          innerRadiusRatio: 0.4,
          fillOpacity: 0.6,
          tooltip,
          sectorLabel: {
            fontFamily: "Architects Daughter",
          },
        },
        {
          data: data["stores"],
          type: "donut",
          sectorLabelKey: "store",
          angleKey: "total",
          outerRadiusRatio: 0.4,
          innerRadiusRatio: 0,
          tooltip: {
            renderer: ({ datum, angleKey }) => ({
              data: [
                {
                  label: `Total`,
                  value: `${numFormatter.format(
                    datum[angleKey] / 1000000000
                  )}B`,
                  fontFamily: "Architects Daughter",
                },
              ],
            }),
          },
        },
      ],
      legend: {
        enabled: false,
      },
    };

    AgCharts.create(options);
  }, []);

  return <div id="myChart" style={{ width: "90dvw", height: "90dvh", background:'linear-gradient(to right, #ff5f6d, #ffc3a0 )' }}></div>;
};

export default ChartComponent;
