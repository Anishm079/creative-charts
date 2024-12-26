import React, { useEffect } from "react";
import { AgChartOptions, AgCharts } from "ag-charts-community";

function getFoodIndustryData() {
  return [
    {
      franchiseName: "Greggs",
      numberOfFranchises: 2400,
      growthRate: 11,
      licenseFee: 35000,
    },
    {
      franchiseName: "Pure",
      numberOfFranchises: 200,
      growthRate: 15,
      licenseFee: 40000,
    },
    {
      franchiseName: "Nando's",
      numberOfFranchises: 350,
      growthRate: 6,
      licenseFee: 100000,
    },
    {
      franchiseName: "Wagamama",
      numberOfFranchises: 250,
      growthRate: 4,
      licenseFee: 55000,
    },
    {
      franchiseName: "PizzaExpress",
      numberOfFranchises: 300,
      growthRate: 2,
      licenseFee: 90000,
    },
    {
      franchiseName: "Subway",
      numberOfFranchises: 2500,
      growthRate: 1.5,
      licenseFee: 50000,
    },
    {
      franchiseName: "Wasabi",
      numberOfFranchises: 500,
      growthRate: 18,
      licenseFee: 30000,
    },
  ];
}

function getCoffeeIndustryData() {
  return [
    {
      franchiseName: "Starbucks",
      numberOfFranchises: 28000,
      growthRate: 18,
      licenseFee: 260000,
    },
    {
      franchiseName: "Costa",
      numberOfFranchises: 3880,
      growthRate: 12,
      licenseFee: 250000,
    },
    {
      franchiseName: "The Roasting Plant",
      numberOfFranchises: 4500,
      growthRate: 24,
      licenseFee: 80000,
    },
    {
      franchiseName: "Pret",
      numberOfFranchises: 4000,
      growthRate: 16,
      licenseFee: 150000,
    },
    {
      franchiseName: "Black Sheep Coffee",
      numberOfFranchises: 134,
      growthRate: 22,
      licenseFee: 50000,
    },
    {
      franchiseName: "DUNKIN' DONUTS",
      numberOfFranchises: 12000,
      growthRate: 7,
      licenseFee: 150000,
    },
    {
      franchiseName: "KRISPY KREME DONUT CORP",
      numberOfFranchises: 1059,
      growthRate: 2,
      licenseFee: 200000,
    },
  ];
}

const ChartComponent: React.FC = () => {
  useEffect(() => {
    const options: AgChartOptions = {
      container: document.getElementById("myChart"),
      title: {
        text: "The Food & Coffee Industries",
        fontFamily: "Architects Daughter",
      },
      subtitle: {
        text: "Growth Rate Versus Number of Franchises",
        fontFamily: "Architects Daughter",
      },
      footnote: {
        text: "Comparative Analysis of UK Food and Coffee Franchises",
        fontFamily: "Architects Daughter",
      },
      series: [
        {
          type: "bubble",
          data: getFoodIndustryData(),
          xKey: "numberOfFranchises",
          xName: "Number of Franchises",
          yKey: "growthRate",
          yName: "Food Industry Growth Rate",
          sizeKey: "licenseFee",
          sizeName: "License Fee",
          labelKey: "franchiseName",
          labelName: "Franchise",
          maxSize: 90,
          itemStyler: ({ datum }) => ({ fillOpacity: datum.growthRate / 18 }),
          label: {
            enabled: true,
            fontFamily: "Architects Daughter",
          },
        },
        {
          type: "bubble",
          data: getCoffeeIndustryData(),
          xKey: "numberOfFranchises",
          xName: "Number of Franchises",
          yKey: "growthRate",
          yName: "Coffee Industry Growth Rate",
          sizeKey: "licenseFee",
          sizeName: "License Fee",
          labelKey: "franchiseName",
          labelName: "Franchise",
          maxSize: 90,
          itemStyler: ({ datum }) => ({ fillOpacity: datum.growthRate / 24 }),
          label: {
            enabled: true,
            fontFamily: "Architects Daughter",
          },
        },
      ],
      axes: [
        {
          position: "bottom",
          type: "number",
          nice: false,
          min: -11000,
          max: 50000,
          title: {
            text: "Number Of Franchises →",
            fontFamily: "Architects Daughter",
          },
          crossLines: [
            {
              type: "line",
              value: 0,
              strokeWidth: 2,
              strokeOpacity: 0.5,
              label: {
                text: "^",
                position: "top",
                fontSize: 14,
                padding: 0,
                fontFamily: "Architects Daughter",
              },
            },
          ],
        },
        {
          position: "left",
          type: "number",
          title: {
            text: "Franchise Growth Rate",
            fontFamily: "Architects Daughter",
          },
          nice: false,
        },
      ],
    };

    AgCharts.create(options);
  }, []);

  return <div id="myChart" style={{ width: "90dvw", height: "90dvh" }}></div>;
};

export default ChartComponent;
