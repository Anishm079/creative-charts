import React, { useEffect } from "react";
import { AgChartOptions, AgCharts } from "ag-charts-community";

function getData() {
  return [
    // Carbohydrates
    {
      food: ["Carbohydrates", "Grains", "Rice"],
      calories: 130,
      protein: 2.7,
      fat: 0.3,
      carbohydrates: 28,
      fiber: 0.4,
      bloodSugarSpike: 73,
    },
    {
      food: ["Carbohydrates", "Grains", "Oats"],
      calories: 389,
      protein: 16.9,
      fat: 6.9,
      carbohydrates: 66,
      fiber: 10.6,
      bloodSugarSpike: 55,
    },
    {
      food: ["Carbohydrates", "Fruits", "Banana"],
      calories: 89,
      protein: 1.1,
      fat: 0.3,
      carbohydrates: 23,
      fiber: 2.6,
      bloodSugarSpike: 51,
    },
    {
      food: ["Carbohydrates", "Fruits", "Apple"],
      calories: 52,
      protein: 0.3,
      fat: 0.2,
      carbohydrates: 14,
      fiber: 2.4,
      bloodSugarSpike: 38,
    },
    {
      food: ["Carbohydrates", "Vegetables", "Potato"],
      calories: 77,
      protein: 2,
      fat: 0.1,
      carbohydrates: 17,
      fiber: 2.2,
      bloodSugarSpike: 78,
    },
    {
      food: ["Carbohydrates", "Vegetables", "Sweet Corn"],
      calories: 86,
      protein: 3.2,
      fat: 1.2,
      carbohydrates: 19,
      fiber: 2.7,
      bloodSugarSpike: 60,
    },
    {
      food: ["Carbohydrates", "Breads", "Whole Wheat Bread"],
      calories: 247,
      protein: 12,
      fat: 4.2,
      carbohydrates: 41,
      fiber: 6,
      bloodSugarSpike: 71,
    },
    {
      food: ["Carbohydrates", "Breads", "Bagel"],
      calories: 245,
      protein: 9.8,
      fat: 1.2,
      carbohydrates: 48,
      fiber: 2.1,
      bloodSugarSpike: 72,
    },

    // Proteins
    {
      food: ["Proteins", "Meats", "Chicken Breast"],
      calories: 165,
      protein: 31,
      fat: 3.6,
      carbohydrates: 0,
      fiber: 0,
      bloodSugarSpike: 5,
    },
    {
      food: ["Proteins", "Meats", "Beef Steak"],
      calories: 271,
      protein: 25,
      fat: 19,
      carbohydrates: 0,
      fiber: 0,
      bloodSugarSpike: 4,
    },
    {
      food: ["Proteins", "Dairy", "Greek Yogurt"],
      calories: 59,
      protein: 10,
      fat: 0.4,
      carbohydrates: 3.6,
      fiber: 0,
      bloodSugarSpike: 25,
    },
    {
      food: ["Proteins", "Dairy", "Cheddar Cheese"],
      calories: 402,
      protein: 25,
      fat: 33,
      carbohydrates: 1.3,
      fiber: 0,
      bloodSugarSpike: 3,
    },
    {
      food: ["Proteins", "Legumes", "Lentils"],
      calories: 116,
      protein: 9,
      fat: 0.4,
      carbohydrates: 20,
      fiber: 8,
      bloodSugarSpike: 32,
    },
    {
      food: ["Proteins", "Legumes", "Chickpeas"],
      calories: 164,
      protein: 8.9,
      fat: 2.6,
      carbohydrates: 27,
      fiber: 7.6,
      bloodSugarSpike: 28,
    },
    {
      food: ["Proteins", "Seafood", "Salmon"],
      calories: 208,
      protein: 20,
      fat: 13,
      carbohydrates: 0,
      fiber: 0,
      bloodSugarSpike: 3,
    },
    {
      food: ["Proteins", "Seafood", "Shrimp"],
      calories: 99,
      protein: 24,
      fat: 0.3,
      carbohydrates: 0.2,
      fiber: 0,
      bloodSugarSpike: 4,
    },

    // Fats
    {
      food: ["Fats", "Oils", "Olive Oil"],
      calories: 884,
      protein: 0,
      fat: 100,
      carbohydrates: 0,
      fiber: 0,
      bloodSugarSpike: 1,
    },
    {
      food: ["Fats", "Oils", "Coconut Oil"],
      calories: 862,
      protein: 0,
      fat: 100,
      carbohydrates: 0,
      fiber: 0,
      bloodSugarSpike: 1,
    },
    {
      food: ["Fats", "Nuts", "Almonds"],
      calories: 576,
      protein: 21,
      fat: 49,
      carbohydrates: 22,
      fiber: 12.5,
      bloodSugarSpike: 15,
    },
    {
      food: ["Fats", "Nuts", "Cashews"],
      calories: 553,
      protein: 18,
      fat: 44,
      carbohydrates: 30,
      fiber: 3.3,
      bloodSugarSpike: 22,
    },
    {
      food: ["Fats", "Vegetables", "Avocado"],
      calories: 160,
      protein: 2,
      fat: 15,
      carbohydrates: 9,
      fiber: 7,
      bloodSugarSpike: 10,
    },
  ];
}

const ChartComponent: React.FC = () => {
  useEffect(() => {
    const data = getData();

    const options: AgChartOptions = {
      container: document.getElementById("myChart"),
      data,
      background:{
        fill:"transparent"
      },
      title: {
        text: "Food Nutrients and Blood Sugar Impact",
        fontFamily: "Architects Daughter",
      },
      subtitle: {
        text: "Detailed Profile per 100g Serving",
        fontFamily: "Architects Daughter",
      },
      theme: {
        overrides: {
          common: {
            legend: {
              position: "top",
              label: {
                fontFamily: "Architects Daughter",
              },
            },
            axes: {
              "grouped-category": {
                groupPaddingInner: 0,
                paddingInner: 0.3,
                line: {
                  width: 2,
                },
                gridLine: {
                  enabled: false,
                },
                label: {
                  fontFamily: "Architects Daughter",
                },
              },
              number: {
                label: {
                  formatter: ({ value }) => value.toLocaleString(),
                  fontFamily: "Architects Daughter",
                },
                line: {
                  enabled: true,
                },
                tick: {
                  enabled: true,
                },
              },
            },
          },
          line: {
            series: {
              marker: {
                enabled: false,
              },
              label: {
                fontFamily: "Architects Daughter",
              },
            },
          },
          area: {
            series: {
              fillOpacity: 0.4,
              marker: {
                fillOpacity: 0.4,
                size: 0,
                shape: "triangle",
                label: {
                  fontFamily: "Architects Daughter",
                },
              },
            },
          },
        },
      },
      padding: {
        left: 10,
        right: 10,
      },
      series: [
        {
          type: "area",
          xKey: "food",
          xName: "Food",
          yKey: "calories",
          yName: "Calories",
          label: {
            fontFamily: "Architects Daughter",
          },
        },
        {
          type: "line",
          xKey: "food",
          xName: "Food",
          yKey: "bloodSugarSpike",
          yName: "Blood Sugar Spike",
          interpolation: {
            type: "smooth",
          },
          label: {
            fontFamily: "Architects Daughter",
          },
        },
        {
          type: "bar",
          xKey: "food",
          xName: "Food",
          yKey: "protein",
          yName: "Protein",
          label: {
            fontFamily: "Architects Daughter",
          },
        },
        {
          type: "bar",
          xKey: "food",
          xName: "Food",
          yKey: "fat",
          yName: "Fat",
          label: {
            fontFamily: "Architects Daughter",
          },
        },
        {
          type: "bar",
          xKey: "food",
          xName: "Food",
          yKey: "carbohydrates",
          yName: "Carbohydrates",
          label: {
            fontFamily: "Architects Daughter",
          },
        },
        {
          type: "bar",
          xKey: "food",
          xName: "Food",
          yKey: "fiber",
          yName: "Fiber",
          label: {
            fontFamily: "Architects Daughter",
          },
        },
      ],
      axes: [
        {
          position: "left",
          type: "number",
          keys: ["bloodSugarSpike"],
          thickness: 40,
          title: {
            text: "Sugar Spike",
            spacing: 0,
            fontFamily: "Architects Daughter",
          },
          interval: {
            values: [0, 20, 60, 80],
          },
          label: {
            fontFamily: "Architects Daughter",
          },
        },
        {
          position: "left",
          type: "number",
          keys: ["calories"],
          label: {
            formatter: ({ value }) => `${value} kcal`,
            fontFamily: "Architects Daughter",
          },
          thickness: 75,
        },
        {
          position: "right",
          type: "number",
          keys: ["protein", "fat", "carbohydrates", "fiber"],
          label: {
            formatter: ({ value }) => `${value}g`,
            fontFamily: "Architects Daughter",
          },
        },
        {
          position: "bottom",
          type: "grouped-category",
          label: {
            fontSize: 10,
            fontFamily: "Architects Daughter",
          },
          depthOptions: [
            { tick: { enabled: false } },
            { tick: { enabled: false } },
          ],
        },
      ],
    };

    AgCharts.create(options);
  }, []);

  return <div id="myChart" style={{ width: "100dvw", height: "100dvh", background:"linear-gradient(to right, #d2a4e4, #8e5ddc)" }}></div>;
};

export default ChartComponent;
