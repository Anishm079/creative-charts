import React, { useEffect } from "react";
import { AgChartOptions, AgCharts } from "ag-charts-community";

const ChartComponent: React.FC = () => {
  useEffect(() => {
    const options: AgChartOptions = {
      container: document.getElementById("myChart"),
      data: getData(),
      background:{
        fill: "transparent"
      },
      series: [
        {
          type: "sunburst",
          labelKey: "name",
          secondaryLabelKey: "capacity",
          label: {
            minimumFontSize: 7,
            fontFamily: '"Dancing Script", serif',
          },
          secondaryLabel: {
            minimumFontSize: 5,
            fontFamily: '"Dancing Script", serif',
            formatter: ({ value }) =>
              value != null ? `${value.toFixed(0)} MW` : undefined,
          },
        },
      ],
      title: {
        text: "Offshore Wind Farms by Country.",
        fontFamily: '"Dancing Script", serif',
      },
      subtitle: {
        text: "Wind farms with at least 500 MW capacity.",
        fontFamily: '"Dancing Script", serif',
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
        background: "linear-gradient(45deg, #cbff50, #ff6347)",
      }}
    />
  );
};

export default ChartComponent;

function getData() {
  // Placeholder function for fetching data
  return [
    {
      name: "United Kingdom",
      children: [
        { name: "Hornsea Project Two", capacity: 1386 },
        { name: "Hornsea Project One", capacity: 1218 },
        { name: "Seagreen", capacity: 1075 },
        { name: "Moray East", capacity: 950 },
        { name: "Triton Knoll", capacity: 857 },
        { name: "East Anglia ONE", capacity: 714 },
        { name: "Walney Extension", capacity: 659 },
        { name: "London Array", capacity: 630 },
        { name: "Beatrice", capacity: 588 },
        { name: "Gwynt y Môr", capacity: 576 },
        { name: "Race Bank", capacity: 573 },
        { name: "Greater Gabbard", capacity: 504 },
      ],
    },
    {
      name: "China",
      children: [
        { name: "Jiangsu Qidong H1+H2", capacity: 503 },
        { name: "CGN Shanwei Jiazi I", capacity: 503 },
        { name: "Jieyang Shenquan II", capacity: 502 },
        { name: "Shandong Bozhong B2", capacity: 501.5 },
        { name: "Shandong Bozhong A", capacity: 501 },
        { name: "Huadian Yangjiang Qingzhou III", capacity: 500.6 },
        { name: "CGN Shanwei Houhu", capacity: 500.5 },
      ],
    },
    {
      name: "Germany",
      children: [{ name: "Gode Wind (phases 1+2)", capacity: 582 }],
    },
    {
      name: "Netherlands",
      children: [
        { name: "Borssele I & II", capacity: 752 },
        { name: "Borssele III & IV", capacity: 731.5 },
        { name: "Gemini Wind Farm", capacity: 600 },
      ],
    },
    {
      name: "Denmark",
      children: [{ name: "Kriegers Flak", capacity: 605 }],
    },
  ];
}
