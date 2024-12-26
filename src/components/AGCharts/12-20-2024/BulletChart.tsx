import React, { useEffect } from "react";
import { AgChartOptions, AgCharts } from "ag-charts-community";



const ChartComponent: React.FC = () => {
  useEffect(() => {
    const first: AgChartOptions = {
      type: "linear-gauge",
      container: document.getElementById("first"),
      title: {
        text: "Tech",
        fontFamily: "Architects Daughter",
      },
      background:{
        fill:"transparent"
      },
      value: 236,
      cornerRadius: 100,
      padding: {
        left: 0,
      },
      scale: {
        min: 0,
        max: 250,
      },
      bar: {
        fillMode: "discrete",
        thickness: 20,
      },
      segmentation: {
        enabled: true,
      },
      targets: [
        {
          value: 220,
          shape: "line",
          placement: "middle",
          rotation: 90,
          size: 40,
          stroke: "gray",
          strokeWidth: 2,
        },
      ],
      thickness: 30,
      width: 150,
      tooltip: {
        enabled: true,
        renderer: ({ value }) => ({
          title: "Tech",
          data: [
            { label: `Revenue 2020 YTD`, value: `${value}` },
            { label: `Target`, value: "250" },
          ],
        }),
      },
    };

    const second: AgChartOptions = {
      type: "linear-gauge",
      container: document.getElementById("second"),
      title: {
        text: "Energy",
        fontFamily: "Architects Daughter",
      },
      background:{
        fill:"transparent"
      },
      value: 225,
      cornerRadius: 100,
      scale: {
        min: 0,
        max: 250,
      },
      bar: {
        fillMode: "discrete",
        thickness: 20,
      },
      segmentation: {
        enabled: true,
      },
      targets: [
        {
          value: 220,
          shape: "line",
          placement: "middle",
          rotation: 90,
          size: 40,
          stroke: "gray",
          strokeWidth: 2,
        },
      ],
      thickness: 30,
      width: 150,
      tooltip: {
        enabled: true,
        renderer: ({ value }) => ({
          title: "Energy",
          data: [
            { label: `Revenue 2020 YTD`, value: `${value}` },
            { label: `Target`, value: "220" },
          ],
        }),
      },
    };

    const third: AgChartOptions = {
      type: "linear-gauge",
      container: document.getElementById("third"),
      title: {
        text: "Government",
        fontFamily: "Architects Daughter",
      },
      background:{
        fill:"transparent"
      },
      value: 205,
      cornerRadius: 100,
      scale: {
        min: 0,
        max: 250,
      },
      bar: {
        fillMode: "discrete",
        thickness: 20,
      },
      segmentation: {
        enabled: true,
      },
      targets: [
        {
          value: 215,
          shape: "line",
          placement: "middle",
          rotation: 90,
          size: 40,
          stroke: "gray",
          strokeWidth: 2,
        },
      ],
      thickness: 30,
      width: 150,
      tooltip: {
        enabled: true,
        renderer: ({ value }) => ({
          title: "Government",
          data: [
            { label: `Revenue 2020 YTD`, value: `${value}` },
            { label: `Target`, value: "215" },
          ],
        }),
      },
    };

    const fourth: AgChartOptions = {
      type: "linear-gauge",
      container: document.getElementById("fourth"),
      title: {
        text: "Travel",
        fontFamily: "Architects Daughter",
      },
      background:{
        fill:"transparent"
      },
      value: 123,
      cornerRadius: 100,
      scale: {
        min: 0,
        max: 250,
      },
      bar: {
        fillMode: "discrete",
        thickness: 20,
      },
      segmentation: {
        enabled: true,
      },
      targets: [
        {
          value: 220,
          shape: "line",
          placement: "middle",
          rotation: 90,
          size: 40,
          stroke: "gray",
          strokeWidth: 2,
        },
      ],
      thickness: 30,
      width: 150,
      tooltip: {
        enabled: true,
        renderer: ({ value }) => ({
          title: "Travel",
          data: [
            { label: `Revenue 2020 YTD`, value: `${value}` },
            { label: `Target`, value: "220" },
          ],
        }),
      },
    };

    const fifth: AgChartOptions = {
      type: "linear-gauge",
      container: document.getElementById("fifth"),
      title: {
        text: "Education",
        fontFamily: "Architects Daughter",
      },
      background:{
        fill:"transparent"
      },
        scale: {
          min: 0,
          max: 250,
        },
      value: 95,
      cornerRadius: 100,
      bar: {
        fillMode: "discrete",
        thickness: 20,
      },
      segmentation: {
        enabled: true,
      },
      targets: [
        {
          value: 120,
          shape: "line",
          placement: "middle",
          rotation: 90,
          size: 40,
          stroke: "gray",
          strokeWidth: 2,
        },
      ],
      thickness: 30,
      width: 150,
      tooltip: {
        enabled: true,
        renderer: ({ value }) => ({
          title: "Education",
          data: [
            { label: `Revenue 2020 YTD`, value: `${value}` },
            { label: `Target`, value: "120" },
          ],
        }),
      },
    };

    AgCharts.createGauge(first);
    AgCharts.createGauge(second);
    AgCharts.createGauge(third);
    AgCharts.createGauge(fourth);
    AgCharts.createGauge(fifth);
  }, []);

  return (
    <div style={{display:"flex", height:"90dvh",width:"90dvw", background:"linear-gradient(to right, #00b09b, #96c93d)"}}>
      <div id="first" style={{ width: "22.5dvw", height: "100%" , background:"transparent" }}></div>
      <div id="second" style={{ width: "22.5dvw", height: "100%" , background:"transparent" }}></div>
      <div id="third" style={{ width: "22.5dvw", height: "100%" , background:"transparent" }}></div>
      <div id="fourth" style={{ width: "22.5dvw", height: "100%" , background:"transparent" }}></div>
      <div id="fifth" style={{ width: "22.5dvw", height: "100%" , background:"transparent" }}></div>
    </div>
  );
};

export default ChartComponent;
