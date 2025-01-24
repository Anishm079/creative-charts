import * as echarts from 'echarts';
import React, { useEffect } from 'react';

const CreativeTreeChart: React.FC = () => {
  useEffect(() => {
    const chartDom = document.getElementById('main') as HTMLElement;
    const myChart = echarts.init(chartDom);
    let option: echarts.EChartsOption;

    const data = {
        "name": "E-Commerce Inventory",
        "children": [
          {
            "name": "Electronics",
            "children": [
              {
                "name": "Smartphones",
                "children": [
                  {
                    "name": "Galaxy X",
                    "Stock Quantity": 120,
                    "Price": 999.99,
                    "Discount": "10%",
                    "Total Sales": 500000,
                    "Rating": 4.5
                  },
                  {
                    "name": "iPhone 12",
                    "Stock Quantity": 100,
                    "Price": 799.99,
                    "Discount": "5%",
                    "Total Sales": 600000,
                    "Rating": 4.7
                  }
                ]
              },
              {
                "name": "Laptops",
                "children": [
                  {
                    "name": "ProBook 15",
                    "Stock Quantity": 80,
                    "Price": 1299.99,
                    "Discount": "5%",
                    "Total Sales": 300000,
                    "Rating": 4.7
                  },
                  {
                    "name": "MacBook Air",
                    "Stock Quantity": 50,
                    "Price": 999.99,
                    "Discount": "10%",
                    "Total Sales": 200000,
                    "Rating": 4.6
                  }
                ]
              },
              {
                "name": "Accessories",
                "children": [
                  {
                    "name": "Wireless Earbuds \"SoundWave\"",
                    "Stock Quantity": 200,
                    "Price": 129.99,
                    "Discount": "15%",
                    "Total Sales": 150000,
                    "Rating": 4.3
                  },
                  {
                    "name": "Bluetooth Speaker",
                    "Stock Quantity": 150,
                    "Price": 69.99,
                    "Discount": "10%",
                    "Total Sales": 100000,
                    "Rating": 4.2
                  }
                ]
              }
            ]
          },
          {
            "name": "Clothing",
            "children": [
              {
                "name": "Men's Clothing",
                "children": [
                  {
                    "name": "T-Shirt \"Summer Breeze\"",
                    "Stock Quantity": 500,
                    "Price": 19.99,
                    "Discount": "20%",
                    "Total Sales": 75000,
                    "Rating": 4.6
                  },
                  {
                    "name": "Jeans \"Classic Fit\"",
                    "Stock Quantity": 300,
                    "Price": 39.99,
                    "Discount": "5%",
                    "Total Sales": 250000,
                    "Rating": 4.4
                  }
                ]
              },
              {
                "name": "Women's Clothing",
                "children": [
                  {
                    "name": "Dress \"Floral Charm\"",
                    "Stock Quantity": 150,
                    "Price": 49.99,
                    "Discount": "10%",
                    "Total Sales": 120000,
                    "Rating": 4.8
                  },
                  {
                    "name": "Blouse \"Luxe\"",
                    "Stock Quantity": 200,
                    "Price": 29.99,
                    "Discount": "15%",
                    "Total Sales": 150000,
                    "Rating": 4.5
                  }
                ]
              }
            ]
          },
          {
            "name": "Home Appliances",
            "children": [
              {
                "name": "Vacuum Cleaners",
                "children": [
                  {
                    "name": "Smart Vacuum \"CleanMaster\"",
                    "Stock Quantity": 60,
                    "Price": 349.99,
                    "Discount": "0%",
                    "Total Sales": 100000,
                    "Rating": 4.2
                  },
                  {
                    "name": "Robot Vacuum",
                    "Stock Quantity": 40,
                    "Price": 299.99,
                    "Discount": "10%",
                    "Total Sales": 80000,
                    "Rating": 4.6
                  }
                ]
              },
              {
                "name": "Air Purifiers",
                "children": [
                  {
                    "name": "PureAir Pro",
                    "Stock Quantity": 85,
                    "Price": 199.99,
                    "Discount": "15%",
                    "Total Sales": 140000,
                    "Rating": 4.5
                  },
                  {
                    "name": "Air Purifier \"Breathe Easy\"",
                    "Stock Quantity": 60,
                    "Price": 159.99,
                    "Discount": "5%",
                    "Total Sales": 120000,
                    "Rating": 4.3
                  }
                ]
              }
            ]
          }
        ]
      };

    option = {
      tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove'
      },
      series: [
        {
          type: 'tree',
          id: 0,
          name: 'Creative Tree',
          data: [data],
          top: '10%',
          left: '8%',
          bottom: '22%',
          right: '20%',
          symbol: 'circle', // changed symbol
          symbolSize: 10, // increased symbol size
          edgeShape: 'curve',
        //   edgeForkPosition: '50%',
          initialTreeDepth: 3,
          lineStyle: {
            width: 2,
            color: '#77bef7' // updated line color
          },
          label: {
            backgroundColor: '#fff',
            position: 'left',
            verticalAlign: 'middle',
            align: 'right',
            color: '#2f4554', // changed label color
            fontSize: 12 // increased font size
          },
          leaves: {
            label: {
              position: 'right',
              verticalAlign: 'middle',
              align: 'left',
              color: '#c23531', // changed leaves label color
              fontSize: 12 // increased font size
            }
          },
          emphasis: {
            focus: 'descendant',
            label: {
              fontWeight: 'bold', // emphasized label
              fontSize: 14 // increased emphasized label font size
            }
          },
          expandAndCollapse: true,
          animationDuration: 750,
          animationDurationUpdate: 1000, // updated animation duration
          animationEasing: 'elasticOut', // changed animation easing
          animationEasingUpdate: 'elasticOut' // changed animation easing update
        }
      ]
    };

    option && myChart.setOption(option);

  }, []);

  return <div id="main" style={{ width: '800px', height: '600px' }}></div>; // updated size
};

export default CreativeTreeChart;
