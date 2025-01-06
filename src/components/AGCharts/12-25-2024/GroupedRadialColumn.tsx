import React, { useEffect } from "react";
import { AgChartOptions, AgCharts } from "ag-charts-community";

const ChartComponent: React.FC = () => {
  useEffect(() => {
    const options: AgChartOptions = {
      container: document.getElementById("myChart"),
      data: getData(),
      title: {
        text: "Revenue by Product Category",
        fontFamily: '"Dancing Script", serif',
      },
      background:{
        fill: "transparent"
      },
      subtitle: {
        text: "Millions USD",
        fontFamily: '"Dancing Script", serif',
      },
      series: [
        {
          type: "radial-column",
          angleKey: "quarter",
          radiusKey: "software",
          radiusName: "Software",
          strokeWidth: 1,
          fillOpacity: 0.6,
          label: {
            fontFamily: '"Dancing Script", serif',
          },
        },
        {
          type: "radial-column",
          angleKey: "quarter",
          radiusKey: "hardware",
          radiusName: "Hardware",
          strokeWidth: 1,
          fillOpacity: 0.6,
          label: {
            fontFamily: '"Dancing Script", serif',
          },
        },
        {
          type: "radial-column",
          angleKey: "quarter",
          radiusKey: "services",
          radiusName: "Services",
          strokeWidth: 1,
          fillOpacity: 0.6,
          label: {
            fontFamily: '"Dancing Script", serif',
          },
        },
      ],
      axes: [
        {
          type: "radius-number",
          innerRadiusRatio: 0.4,
          label: {
            enabled: false,
            fontFamily: '"Dancing Script", serif',
          },
        },
        {
          type: "angle-category",
          groupPaddingInner: 0.3,
          paddingInner: 0.3,
          label: {
            fontFamily: '"Dancing Script", serif',
          },
        },
      ],
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
        background: "linear-gradient(60deg, #ff9a00, #f13c20, #ff3838, #ffbc00)",
      }}
    />
  );
};

export default ChartComponent;

function getData() {
  // Placeholder function for fetching data
  return 
  ;
}
