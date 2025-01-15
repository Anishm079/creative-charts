import React, { useEffect } from "react";
import * as echarts from "echarts";

const data = {
  name: "university's organizational structure",
  children: [
    {
      name: "Engineering",
      children: [
        {
          name: "Computer Science",
          children: [
            {
              name: "Artificial Intelligence",
              students: 120,
            },
            {
              name: "Software Engineering",
              students: 200,
            },
            {
              name: "Cybersecurity",
              students: 150,
            },
            {
              name: "Data Science",
              students: 180,
            },
          ],
        },
        {
          name: "Electrical Engineering",
          color: "hsl(347, 70%, 50%)",
          children: [
            {
              name: "Communications",
              color: "hsl(75, 70%, 50%)",
              students: 100,
            },
            {
              name: "Power Systems",
              color: "hsl(176, 70%, 50%)",
              students: 80,
            },
            {
              name: "Control Systems",
              color: "hsl(64, 70%, 50%)",
              students: 90,
            },
          ],
        },
      ],
    },
    {
      name: "Business",
      color: "hsl(69, 70%, 50%)",
      children: [
        {
          name: "Management",
          color: "hsl(325, 70%, 50%)",
          children: [
            {
              name: "Human Resources",
              color: "hsl(5, 70%, 50%)",
              students: 120,
            },
            {
              name: "Marketing",
              color: "hsl(343, 70%, 50%)",
              students: 140,
            },
          ],
        },
        {
          name: "Finance",
          color: "hsl(223, 70%, 50%)",
          children: [
            {
              name: "Investment Banking",
              color: "hsl(55, 70%, 50%)",
              students: 100,
            },
            {
              name: "Corporate Finance",
              color: "hsl(172, 70%, 50%)",
              students: 90,
            },
            {
              name: "Financial Planning",
              color: "hsl(79, 70%, 50%)",
              students: 110,
            },
          ],
        },
      ],
    },
    {
      name: "Arts and Humanities",
      color: "hsl(57, 70%, 50%)",
      children: [
        {
          name: "History",
          color: "hsl(103, 70%, 50%)",
          children: [
            {
              name: "Ancient History",
              color: "hsl(42, 70%, 50%)",
              students: 60,
            },
            {
              name: "Modern History",
              color: "hsl(274, 70%, 50%)",
              students: 80,
            },
          ],
        },
        {
          name: "Literature",
          color: "hsl(305, 70%, 50%)",
          children: [
            {
              name: "English Literature",
              color: "hsl(219, 70%, 50%)",
              students: 120,
            },
            {
              name: "Comparative Literature",
              color: "hsl(333, 70%, 50%)",
              students: 70,
            },
          ],
        },
      ],
    },
  ],
};
const TreeChartComponent: React.FC = () => {
  useEffect(() => {
    const chartDom = document.getElementById("main");
    if (!chartDom) return;

    const myChart = echarts.init(chartDom);
    let option: echarts.EChartsOption;
    myChart.setOption(
      (option = {
        tooltip: {
          trigger: "item",
          triggerOn: "mousemove",
        },
        series: [
          {
            type: "tree",
            data: [data],
            symbol: 'circle', // Ensure all nodes are rendered as circles
            symbolSize: 10, // Set symbol size for all nodes
            label: {
              position: "left",
              verticalAlign: "middle",
              align: "right",
              fontSize: 12, // Increase font size for better visibility
            },
            leaves: {
              label: {
                position: "right",
                verticalAlign: "middle",
                align: "left",
                fontSize: 12, // Increase font size for better visibility
              },
            },
            emphasis: {
              focus: "descendant",
            },
            expandAndCollapse: true,
            animationDuration: 550,
            animationDurationUpdate: 750,
            initialTreeDepth: -1, // Ensure all nodes are expanded initially
            orient: 'RL', // Change the direction of the tree to top-bottom
            lineStyle: {
              width: 2,
              curveness: 0.5,
              cap:"square",
              miterLimit: 12,
            },
            layout: 'radial', // Use orthogonal layout to increase distance
          },
        ],
      })
    );

    option && myChart.setOption(option);
  }, []);

  return <div id="main" style={{ width: "800px", height: "800px" }}></div>;
};

export default TreeChartComponent;
