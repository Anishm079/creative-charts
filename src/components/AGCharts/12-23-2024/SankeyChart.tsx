import React, { useEffect } from "react";
import { AgChartOptions, AgCharts } from "ag-charts-community";

const ChartComponent: React.FC = () => {
  useEffect(() => {
    const options: AgChartOptions = {
      container: document.getElementById("myChart"),
      title: {
        text: "Apple Earnings",
        fontFamily: "Architects Daughter",
      },
      background:{
        fill:"transparent"
      },
      subtitle: {
        text: "Q1 2022",
        fontFamily: "Architects Daughter",
      },
      data: [
        { from: "iPhone", to: "Products", usd: 45.6 },
        { from: "Mac", to: "Products", usd: 7.5 },
        { from: "iPad", to: "Products", usd: 5.5 },
        { from: "Wearables", to: "Products", usd: 7.9 },
        { from: "Products", to: "Revenue", usd: 66.5 },
        { from: "Services", to: "Revenue", usd: 23.8 },
        { from: "Revenue", to: "Costs", usd: 48.4 },
        { from: "Costs", to: "Product Costs", usd: 42.4 },
        { from: "Costs", to: "Service Costs", usd: 6.0 },
        { from: "Revenue", to: "Gross Profit", usd: 42.0 },
        { from: "Gross Profit", to: "Operating Profit", usd: 27.9 },
        { from: "Operating Profit", to: "Net Profit", usd: 23.5 },
        { from: "Operating Profit", to: "Other Income", usd: 0.2 },
        { from: "Operating Profit", to: "Tax", usd: 4.4 },
        { from: "Gross Profit", to: "Operating Expenses", usd: 14.4 },
        { from: "Operating Expenses", to: "R&D", usd: 7.9 },
        { from: "Operating Expenses", to: "SG&A", usd: 6.5 },
      ],
      series: [
        {
          type: "sankey",
          fromKey: "from",
          toKey: "to",
          sizeKey: "usd",
          sizeName: "USD (billions)",
          node: {
            alignment: "center",
            label: {
              fontFamily: "Architects Daughter",
            },
          },
          label: {
            fontFamily: "Architects Daughter",
          },
        },
      ],
    };

    AgCharts.create(options);
  }, []);

  return <div id="myChart" style={{ width: "90dvw", height: "90dvh", background:"linear-gradient(135deg, #a8e063, #56ab2f)" }}></div>;
};

export default ChartComponent;
