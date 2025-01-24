import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

const PieChart: React.FC = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const myChart = echarts.init(chartRef.current);

    const option = {
      title: {
        text: "Weekly Temperature Fluctuations",
        left: "center",
        textStyle: {
          color: "#fff",
          fontSize: 22,
          fontWeight: "bold",
        },
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross",
          label: {
            backgroundColor: "#6a7985",
          },
        },
        formatter: "{b}<br/>Min: {c0}°C, Max: {c1}°C",
      },
      legend: {
        data: ["Min Temperature", "Max Temperature"],
        top: "10%",
        left: "center",
        textStyle: {
          color: "#fff",
        },
      },
      grid: {
        left: "5%",
        right: "5%",
        bottom: "10%",
        top: "20%",
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        axisLine: {
          lineStyle: {
            color: "#fff",
            width: 2,
          },
        },
        axisLabel: {
          textStyle: {
            color: "#fff",
          },
        },
      },
      yAxis: {
        type: "value",
        min: -10,
        max: 40,
        axisLine: {
          lineStyle: {
            color: "#fff",
            width: 2,
          },
        },
        axisLabel: {
          formatter: "{value}°C",
          textStyle: {
            color: "#fff",
          },
        },
      },
      series: [
        {
          name: "Min Temperature",
          type: "line",
          data: [-3, 0, 3, 4, 2, 5, 6],
          smooth: true,
          lineStyle: {
            width: 4,
            color: "url(#gradientMin)",
            type: "solid",
          },
          areaStyle: {
            color: "rgba(75, 139, 249, 0.6)",
          },
          emphasis: {
            lineStyle: {
              width: 5,
            },
          },
        },
        {
          name: "Max Temperature",
          type: "line",
          data: [10, 15, 20, 25, 18, 30, 35],
          smooth: true,
          lineStyle: {
            width: 4,
            color: "url(#gradientMax)",
            type: "solid",
          },
          areaStyle: {
            color: "rgba(255, 127, 14, 0.6)",
          },
          emphasis: {
            lineStyle: {
              width: 5,
            },
          },
        },
      ],
      graphic: [
        {
          type: "rect",
          left: "center",
          top: "center",
          shape: {
            width: "90%",
            height: "90%",
          },
          style: {
            fill: "rgba(0, 0, 0, 0.3)",
          },
        },
      ],
      animationDuration: 1500,
      animationEasing: "elasticOut",
      animationEasingUpdate: "elasticOut",
      animationDurationUpdate: 1500,
    };

    const gradientMin = new echarts.graphic.LinearGradient(0, 0, 0, 1, [
      { offset: 0, color: "#4b8bf9" },
      { offset: 1, color: "#1a75ff" },
    ]);

    const gradientMax = new echarts.graphic.LinearGradient(0, 0, 0, 1, [
      { offset: 0, color: "#ff7700" },
      { offset: 1, color: "#ff4c00" },
    ]);

    // Apply gradient definitions
    echarts.registerTheme("gradientTheme", {
      color: [gradientMin, gradientMax],
    });
    myChart.setOption(option);

    // Cleanup on component unmount
    return () => {
      myChart.dispose();
    };
  }, []);

  return <div ref={chartRef} style={{ width: "50%", height: "500px" }} />;
};

export default PieChart;
