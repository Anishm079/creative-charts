import React, { useEffect } from 'react';
import { AgChartOptions, AgCharts } from 'ag-charts-community';

const ChartComponent: React.FC = () => {
  useEffect(() => {
    const options: AgChartOptions = {
      container: document.getElementById("myChart"),
      data: getData(),
      title: {
        text: "Subscription Revenue By Industry",
      },
      subtitle: {
        text: "Q4 Net New Subscription Revenue In Millions",
      },
      theme: {
        overrides: {
          area: {
            series: {
              strokeWidth: 2,
            },
          },
        },
      },
      series: [
        {
          type: "area",
          xKey: "industry",
          yKey: "targetRevenue",
          yName: "Target",
        },
        {
          type: "area",
          xKey: "industry",
          yKey: "actualRevenue",
          yName: "Actual",
          marker: {
            shape: "circle",
            itemStyler: ({ datum, xKey }: { datum: any; xKey: string }) => {
              const industries = ["Technology", "Healthcare", "Energy"];
              return {
                size: industries.includes(datum[xKey]) ? 9 : 0,
              };
            },
          },
        },
      ],
      axes: [
        {
          type: "category",
          position: "bottom",
          label: {
            rotation: -90,
          },
          crossLines: [
            {
              type: "line",
              value: "Technology",
              lineDash: [5, 6],
              strokeOpacity: 0.6,
              label: {
                text: "Tech ^12.8%\n___________",
              },
            },
            {
              type: "line",
              value: "Healthcare",
              lineDash: [5, 6],
              strokeOpacity: 0.6,
              label: {
                text: "Healthcare ^1.0%\n_______________",
              },
            },
            {
              type: "line",
              value: "Energy",
              lineDash: [5, 6],
              strokeOpacity: 0.6,
              label: {
                text: "Energy ^0.5%\n____________",
              },
            },
          ],
        },
        {
          type: "number",
          position: "left",
          gridLine: {
            enabled: false,
          },
          label: {
            enabled: false,
          },
          crosshair: {
            enabled: false,
          },
        },
      ],
      legend: {
        position: "top",
      },
    };

    AgCharts.create(options);
  }, []);

  return <div id="myChart" style={{ height: '90vh', width: '90vw' }}></div>;
};

function getData() {
  return [
    {
      industry: "Transport",
      targetRevenue: 5110000,
      actualRevenue: 3300000,
    },
    {
      industry: "Government",
      targetRevenue: 4540000,
      actualRevenue: 1820000,
    },
    {
      industry: "Technology",
      targetRevenue: 304000,
      actualRevenue: 4220000,
    },
    {
      industry: "Retail",
      targetRevenue: 1830000,
      actualRevenue: 680000,
    },
    {
      industry: "Energy",
      targetRevenue: 1230000,
      actualRevenue: 1850000,
    },
    {
      industry: "Entertainment",
      targetRevenue: 1840000,
      actualRevenue: 300000,
    },
    {
      industry: "Finance",
      targetRevenue: 1750000,
      actualRevenue: 990000,
    },
    {
      industry: "Healthcare",
      targetRevenue: 1340000,
      actualRevenue: 2650000,
    },
    {
      industry: "Education",
      targetRevenue: 1220000,
      actualRevenue: 640000,
    },
  ];
}

export default ChartComponent;
