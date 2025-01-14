import React, { useEffect } from "react";
import { AgCharts } from "ag-charts-community";
import "ag-charts-enterprise";

const subjects = [
  "Math",
  "English",
  "Physics",
  "Chemistry",
  "Biology",
  "Computer Science",
];

const getData = (): any[] => {
  return [
    { subject: "Math", low: 80, high: 95 },
    { subject: "Math 2", low: 90, high: 98 },
    { subject: "English", low: 75, high: 90 },
    { subject: "English 2", low: 82, high: 95 },
    { subject: "Physics", low: 75, high: 90 },
    { subject: "Physics 2", low: 85, high: 96 },
    { subject: "Chemistry", low: 78, high: 92 },
    { subject: "Chemistry 2", low: 88, high: 98 },
    { subject: "Biology", low: 82, high: 94 },
    { subject: "Biology 2", low: 85, high: 97 },
    { subject: "Computer Science", low: 72, high: 88 },
    { subject: "Computer Science 2", low: 78, high: 92 },
  ];
};

const ChartComponent: React.FC = () => {
  useEffect(() => {
    const options = {
      container: document.getElementById("myChart"),
      title: {
        text: "Student Performance Over the Academic Year",
      },
      background:{
        fill: "transparent",
      },
      subtitle: {
        text: "Comparison of Low and High Scores by Subject",
      },
      footnote: {
        text: "The range of student scores in various subjects, including both the start and end of the academic year",
      },
      data: getData(),
      series: [
        {
          type: "range-bar",
          direction: "horizontal",
          xKey: "subject",
          xName: "Subject",
          yName: "Exam Results Range",
          yLowKey: "low",
          yHighKey: "high",
          yLowName: "Low",
          yHighName: "High",
          cornerRadius: 3,
          itemStyler: ({ datum, xKey }) => {
            const isSecondExam = datum[xKey].slice(-1) === "2";
            return {
              fillOpacity: isSecondExam ? 1 : 0.5,
            };
          },
        },
      ],
      axes: [
        {
          type: "category",
          position: "left",
          line: {
            enabled: false,
          },
          paddingInner: 0.7,
          paddingOuter: 0.3,
          label: {
            enabled: false,
          },
          crossLines: subjects.map((subject) => ({
            type: "range",
            range: [subject, `${subject} 2`],
            fillOpacity: 0,
            lineDash: [1, 2],
            strokeOpacity: 0.4,
            label: {
              text: subject,
              position: "inside",
              fontSize: 11,
            },
          })),
        },
        {
          type: "number",
          position: "top",
          gridLine: {
            enabled: false,
          },
        },
      ],
    };

    AgCharts.create(options);
  }, []);

  return <div id="myChart" style={{ width: "100dvw", height: "90dvh" }}></div>;
};

export default ChartComponent;