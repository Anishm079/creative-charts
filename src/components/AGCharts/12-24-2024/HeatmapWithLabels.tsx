import React, { useEffect } from "react";
import { AgChartOptions, AgCharts } from "ag-charts-community";

const formatNumber = (value: number, dp: number) => `£${value.toFixed(dp)}m`;

const ChartComponent: React.FC = () => {
  useEffect(() => {
    const options: AgChartOptions = {
      container: document.getElementById("myChart"),
      data: getData(),
      title: {
        text: "Revenue per Quarter",
        fontFamily: '"Dancing Script", serif',
      },
      background:{
        fill:"transparent"
      },
      subtitle: {
        text: "£ million",
        fontFamily: '"Dancing Script", serif',
      },
      series: [
        {
          type: "heatmap",
          xKey: "month",
          xName: "Month",
          yKey: "year",
          yName: "Year",
          colorKey: "revenue",
          colorName: "Revenue",
          label: {
            color: "white",
            fontFamily: '"Dancing Script", serif',
            formatter: ({ value }) => formatNumber(value, 1),
          },
        },
      ],
      axes: [
        {
          position: "right",
          type: "category",
          tick: {
            size: 20,
          },
          label: {
            fontFamily: '"Dancing Script", serif',
          },
        },
        {
          position: "bottom",
          type: "category",
          label: {
            enabled: false,
            fontFamily: '"Dancing Script", serif',
          },
          line: {
            enabled: false,
          },
        },
      ],
      gradientLegend: {
        scale: {
          label: {
            fontFamily: '"Dancing Script", serif',
            formatter: ({ value }) => formatNumber(Number(value), 0),
          },
        },
      },
      fontFamily: '"Dancing Script", serif',
      backgroundColor: "transparent",
    };

    AgCharts.create(options);
  }, []);

  return (
    <div
      id="myChart"
      style={{
        height: "90dvh",
        width: "90dvw",
        fontFamily: '"Dancing Script", serif',
        background: "linear-gradient(45deg, #00bcd4, #8e44ad)",
      }}
    />
  );
};

export default ChartComponent;

function getData() {
  // Placeholder function for fetching data
  return [    {      year: "2020",      month: "Q1",      revenue: 5.7,    },    {      year: "2020",      month: "Q2",      revenue: 4.3,    },    {      year: "2020",      month: "Q3",      revenue: 4.7,    },    {      year: "2020",      month: "Q4",      revenue: 6.7,    },    {      year: "2021",      month: "Q1",      revenue: 5.8,    },    {      year: "2021",      month: "Q2",      revenue: 4.5,    },    {      year: "2021",      month: "Q3",      revenue: 4.6,    },    {      year: "2021",      month: "Q4",      revenue: 7.5,    },    {      year: "2022",      month: "Q1",      revenue: 5.2,    },    {      year: "2022",      month: "Q2",      revenue: 5.2,    },    {      year: "2022",      month: "Q3",      revenue: 4.2,    },    {      year: "2022",      month: "Q4",      revenue: 7.2,    },    {      year: "2023",      month: "Q1",      revenue: 5.8,    },    {      year: "2023",      month: "Q2",      revenue: 5.5,    },    {      year: "2023",      month: "Q3",      revenue: 5.4,    },    {      year: "2023",      month: "Q4",      revenue: 8.1,    },  ];
}
