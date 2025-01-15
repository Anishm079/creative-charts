import React, { useEffect } from "react";
import * as echarts from "echarts";

const data = [{
    "name": "Global Energy Consumption",
    "children": [
      {
        "name": "North America",
        "value": 4500,
        "children": [
          {
            "name": "United States",
            "value": 2800,
            "children": [
              {
                "name": "California",
                "value": 500,
                "children": [
                  { "name": "Los Angeles", "value": 200 },
                  { "name": "San Francisco", "value": 150 },
                  { "name": "San Diego", "value": 150 }
                ]
              },
              {
                "name": "Texas",
                "value": 400,
                "children": [
                  { "name": "Houston", "value": 200 },
                  { "name": "Dallas", "value": 100 },
                  { "name": "Austin", "value": 100 }
                ]
              },
              {
                "name": "New York",
                "value": 300,
                "children": [
                  { "name": "New York City", "value": 200 },
                  { "name": "Buffalo", "value": 50 },
                  { "name": "Rochester", "value": 50 }
                ]
              }
            ]
          },
          {
            "name": "Canada",
            "value": 1200,
            "children": [
              {
                "name": "Ontario",
                "value": 500,
                "children": [
                  { "name": "Toronto", "value": 300 },
                  { "name": "Ottawa", "value": 100 },
                  { "name": "Hamilton", "value": 100 }
                ]
              },
              {
                "name": "Quebec",
                "value": 400,
                "children": [
                  { "name": "Montreal", "value": 250 },
                  { "name": "Quebec City", "value": 100 },
                  { "name": "Laval", "value": 50 }
                ]
              },
              {
                "name": "British Columbia",
                "value": 300,
                "children": [
                  { "name": "Vancouver", "value": 200 },
                  { "name": "Victoria", "value": 50 },
                  { "name": "Surrey", "value": 50 }
                ]
              }
            ]
          },
          {
            "name": "Mexico",
            "value": 500,
            "children": [
              {
                "name": "Mexico City",
                "value": 300,
                "children": [
                  { "name": "Cuauhtémoc", "value": 150 },
                  { "name": "Iztapalapa", "value": 100 },
                  { "name": "Coyoacán", "value": 50 }
                ]
              },
              {
                "name": "Guadalajara",
                "value": 100,
                "children": [
                  { "name": "Zapopan", "value": 50 },
                  { "name": "Tlaquepaque", "value": 30 },
                  { "name": "Tonalá", "value": 20 }
                ]
              },
              {
                "name": "Monterrey",
                "value": 100,
                "children": [
                  { "name": "San Pedro Garza García", "value": 50 },
                  { "name": "Santa Catarina", "value": 30 },
                  { "name": "Apodaca", "value": 20 }
                ]
              }
            ]
          }
        ]
      },
      {
        "name": "Europe",
        "value": 4200,
        "children": [
          {
            "name": "Germany",
            "value": 1800,
            "children": [
              {
                "name": "Bavaria",
                "value": 600,
                "children": [
                  { "name": "Munich", "value": 400 },
                  { "name": "Nuremberg", "value": 100 },
                  { "name": "Augsburg", "value": 100 }
                ]
              },
              {
                "name": "North Rhine-Westphalia",
                "value": 700,
                "children": [
                  { "name": "Cologne", "value": 300 },
                  { "name": "Düsseldorf", "value": 200 },
                  { "name": "Dortmund", "value": 200 }
                ]
              },
              {
                "name": "Baden-Württemberg",
                "value": 500,
                "children": [
                  { "name": "Stuttgart", "value": 300 },
                  { "name": "Karlsruhe", "value": 100 },
                  { "name": "Mannheim", "value": 100 }
                ]
              }
            ]
          },
          {
            "name": "United Kingdom",
            "value": 1200,
            "children": [
              {
                "name": "England",
                "value": 800,
                "children": [
                  { "name": "London", "value": 500 },
                  { "name": "Manchester", "value": 150 },
                  { "name": "Birmingham", "value": 150 }
                ]
              },
              {
                "name": "Scotland",
                "value": 300,
                "children": [
                  { "name": "Edinburgh", "value": 150 },
                  { "name": "Glasgow", "value": 100 },
                  { "name": "Aberdeen", "value": 50 }
                ]
              },
              {
                "name": "Wales",
                "value": 100,
                "children": [
                  { "name": "Cardiff", "value": 50 },
                  { "name": "Swansea", "value": 30 },
                  { "name": "Newport", "value": 20 }
                ]
              }
            ]
          },
          {
            "name": "France",
            "value": 800,
            "children": [
              {
                "name": "Île-de-France",
                "value": 400,
                "children": [
                  { "name": "Paris", "value": 300 },
                  { "name": "Versailles", "value": 50 },
                  { "name": "Boulogne-Billancourt", "value": 50 }
                ]
              },
              {
                "name": "Provence-Alpes-Côte d'Azur",
                "value": 300,
                "children": [
                  { "name": "Marseille", "value": 150 },
                  { "name": "Nice", "value": 100 },
                  { "name": "Toulon", "value": 50 }
                ]
              },
              {
                "name": "Occitanie",
                "value": 100,
                "children": [
                  { "name": "Toulouse", "value": 50 },
                  { "name": "Montpellier", "value": 30 },
                  { "name": "Nîmes", "value": 20 }
                ]
              }
            ]
          },
          {
            "name": "Italy",
            "value": 400,
            "children": [
              {
                "name": "Lombardy",
                "value": 200,
                "children": [
                  { "name": "Milan", "value": 150 },
                  { "name": "Bergamo", "value": 30 },
                  { "name": "Brescia", "value": 20 }
                ]
              },
              {
                "name": "Lazio",
                "value": 100,
                "children": [
                  { "name": "Rome", "value": 70 },
                  { "name": "Latina", "value": 20 },
                  { "name": "Viterbo", "value": 10 }
                ]
              },
              {
                "name": "Campania",
                "value": 100,
                "children": [
                  { "name": "Naples", "value": 60 },
                  { "name": "Salerno", "value": 30 },
                  { "name": "Avellino", "value": 10 }
                ]
              }
            ]
          }
        ]
      },
      {
        "name": "Asia",
        "value": 6000,
        "children": [
          {
            "name": "China",
            "value": 4000,
            "children": [
              {
                "name": "Beijing",
                "value": 1000,
                "children": [
                  { "name": "Chaoyang", "value": 500 },
                  { "name": "Haidian", "value": 300 },
                  { "name": "Dongcheng", "value": 200 }
                ]
              },
              {
                "name": "Shanghai",
                "value": 1000,
                "children": [
                  { "name": "Pudong", "value": 600 },
                  { "name": "Huangpu", "value": 200 },
                  { "name": "Jing'an", "value": 200 }
                ]
              },
              {
                "name": "Guangdong",
                "value": 2000,
                "children": [
                  { "name": "Guangzhou", "value": 1000 },
                  { "name": "Shenzhen", "value": 600 },
                  { "name": "Foshan", "value": 400 }
                ]
              }
            ]
          },
          {
            "name": "India",
            "value": 1500,
            "children": [
              {
                "name": "Maharashtra",
                "value": 600,
                "children": [
                  { "name": "Mumbai", "value": 400 },
                  { "name": "Pune", "value": 100 },
                  { "name": "Nagpur", "value": 100 }
                ]
              },
              {
                "name": "Karnataka",
                "value": 400,
                "children": [
                  { "name": "Bangalore", "value": 300 },
                  { "name": "Mysore", "value": 50 },
                  { "name": "Hubli", "value": 50 }
                ]
              },
              {
                "name": "Tamil Nadu",
                "value": 500,
                "children": [
                  { "name": "Chennai", "value": 300 },
                  { "name": "Coimbatore", "value": 100 },
                  { "name": "Madurai", "value": 100 }
                ]
              }
            ]
          },
          {
            "name": "Japan",
            "value": 500,
            "children": [
              {
                "name": "Tokyo",
                "value": 300,
                "children": [
                  { "name": "Shinjuku", "value": 150 },
                  { "name": "Shibuya", "value": 100 },
                  { "name": "Ikebukuro", "value": 50 }
                ]
              },
              {
                "name": "Osaka",
                "value": 200,
                "children": [
                  { "name": "Kita", "value": 100 },
                  { "name": "Naniwa", "value": 50 },
                  { "name": "Chuo", "value": 50 }
                ]
              }
            ]
          }
        ]
      },
      {
        "name": "South America",
        "value": 1500,
        "children": [
          {
            "name": "Brazil",
            "value": 1000,
            "children": [
              {
                "name": "São Paulo",
                "value": 500,
                "children": [
                  { "name": "Central Zone", "value": 200 },
                  { "name": "East Zone", "value": 200 },
                  { "name": "West Zone", "value": 100 }
                ]
              },
              {
                "name": "Rio de Janeiro",
                "value": 300,
                "children": [
                  { "name": "North Zone", "value": 150 },
                  { "name": "South Zone", "value": 100 },
                  { "name": "West Zone", "value": 50 }
                ]
              },
              {
                "name": "Belo Horizonte",
                "value": 200,
                "children": [
                  { "name": "North Zone", "value": 100 },
                  { "name": "South Zone", "value": 50 },
                  { "name": "East Zone", "value": 50 }
                ]
              }
            ]
          },
          {
            "name": "Argentina",
            "value": 300,
            "children": [
              {
                "name": "Buenos Aires",
                "value": 200,
                "children": [
                  { "name": "Autonomous City", "value": 100 },
                  { "name": "Province", "value": 100 }
                ]
              },
              {
                "name": "Córdoba",
                "value": 100,
                "children": [
                  { "name": "Central Zone", "value": 50 },
                  { "name": "North Zone", "value": 30 },
                  { "name": "South Zone", "value": 20 }
                ]
              }
            ]
          },
          {
            "name": "Colombia",
            "value": 200,
            "children": [
              {
                "name": "Bogotá",
                "value": 100,
                "children": [
                  { "name": "Central Zone", "value": 50 },
                  { "name": "North Zone", "value": 30 },
                  { "name": "South Zone", "value": 20 }
                ]
              },
              {
                "name": "Medellín",
                "value": 50,
                "children": [
                  { "name": "Central Zone", "value": 20 },
                  { "name": "North Zone", "value": 15 },
                  { "name": "South Zone", "value": 15 }
                ]
              },
              {
                "name": "Cali",
                "value": 50,
                "children": [
                  { "name": "Central Zone", "value": 20 },
                  { "name": "North Zone", "value": 15 },
                  { "name": "South Zone", "value": 15 }
                ]
              }
            ]
          }
        ]
      },
      {
        "name": "Africa",
        "value": 1000,
        "children": [
          {
            "name": "Nigeria",
            "value": 500,
            "children": [
              {
                "name": "Lagos",
                "value": 300,
                "children": [
                  { "name": "Island", "value": 150 },
                  { "name": "Mainland", "value": 100 },
                  { "name": "Ikeja", "value": 50 }
                ]
              },
              {
                "name": "Abuja",
                "value": 200,
                "children": [
                  { "name": "Central Area", "value": 100 },
                  { "name": "Garki", "value": 50 },
                  { "name": "Wuse", "value": 50 }
                ]
              }
            ]
          },
          {
            "name": "South Africa",
            "value": 300,
            "children": [
              {
                "name": "Gauteng",
                "value": 200,
                "children": [
                  { "name": "Johannesburg", "value": 150 },
                  { "name": "Pretoria", "value": 50 }
                ]
              },
              {
                "name": "Western Cape",
                "value": 100,
                "children": [
                  { "name": "Cape Town", "value": 100 }
                ]
              }
            ]
          },
          {
            "name": "Egypt",
            "value": 200,
            "children": [
              {
                "name": "Cairo",
                "value": 150,
                "children": [
                  { "name": "Central Cairo", "value": 50 },
                  { "name": "Giza", "value": 50 },
                  { "name": "Heliopolis", "value": 50 }
                ]
              },
              {
                "name": "Alexandria",
                "value": 50,
                "children": [
                  { "name": "Central Alexandria", "value": 25 },
                  { "name": "East Alexandria", "value": 15 },
                  { "name": "West Alexandria", "value": 10 }
                ]
              }
            ]
          }
        ]
      },
      {
        "name": "Oceania",
        "value": 800,
        "children": [
          {
            "name": "Australia",
            "value": 800,
            "children": [
              {
                "name": "New South Wales",
                "value": 300,
                "children": [
                  { "name": "Sydney", "value": 200 },
                  { "name": "Newcastle", "value": 50 },
                  { "name": "Wollongong", "value": 50 }
                ]
              },
              {
                "name": "Victoria",
                "value": 300,
                "children": [
                  { "name": "Melbourne", "value": 200 },
                  { "name": "Geelong", "value": 50 },
                  { "name": "Ballarat", "value": 50 }
                ]
              },
              {
                "name": "Queensland",
                "value": 200,
                "children": [
                  { "name": "Brisbane", "value": 100 },
                  { "name": "Gold Coast", "value": 50 },
                  { "name": "Cairns", "value": 50 }
                ]
              }
            ]
          }
        ]
      }
    ]
  }];

const ChartComponent: React.FC = () => {
  useEffect(() => {
    const chartDom = document.getElementById("main");
    if (!chartDom) return;

    const myChart = echarts.init(chartDom);
    let option: echarts.EChartsOption;

    const formatUtil = echarts.format;

    const getLevelOption = () => [
      {
        itemStyle: {
          borderWidth: 0,
          gapWidth: 5,
        },
      },
      {
        itemStyle: {
          gapWidth: 1,
        },
      },
      {
        colorSaturation: [0.35, 0.5],
        itemStyle: {
          gapWidth: 1,
          borderColorSaturation: 0.6,
        },
      },
    ];

    myChart.setOption(
      (option = {
        title: {
          text: "",
          left: "center",
        },
        tooltip: {
          formatter: (info: any) => {
            const value = info.value;
            const treePathInfo = info.treePathInfo;
            const treePath: string[] = [];
            for (let i = 1; i < treePathInfo.length; i++) {
              treePath.push(treePathInfo[i].name);
            }
            return [
              `<div class="tooltip-title">${formatUtil.encodeHTML(
                treePath.join("/")
              )}</div>`,
              `Energy Consumption: ${formatUtil.addCommas(value)} J`,
            ].join("");
          },
        },
        series: [
          {
            name: "Global Energy Consumption",
            type: "treemap",
            visibleMin: 300,
            label: {
              show: true,
              formatter: "{b}",
              fontFamily:`"Architects Daughter", serif` 
            },
            itemStyle: {
              borderColor: "#fff",
            },
            levels: getLevelOption(),
            data
          },
        ],
      })
    );

    option && myChart.setOption(option);
  }, []);

  return <div id="main" style={{ width: "100%", height: "100%" }}></div>;
};

export default ChartComponent;
