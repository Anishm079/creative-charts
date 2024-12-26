import React, { useEffect } from "react";
import { AgChartOptions, AgCharts } from "ag-charts-community";

const ChartComponent: React.FC = () => {
  useEffect(() => {
    const numberFormatter = new Intl.NumberFormat("en-US", { useGrouping: true });

    const options: AgChartOptions = {
      container: document.getElementById("myChart"),
      title: {
        text: "Technologies Developers Want to Learn",
        fontFamily: "Architects Daughter",
      },
      background:{
        fill:"transparent"
      },
      subtitle: {
        text: "StackOverflow Survey Results",
        fontFamily: "Architects Daughter",
      },
      data: [
        { from: "Angular", to: "Angular", frequency: 6363 },
        { from: "Angular", to: "Node.js", frequency: 4915 },
        { from: "Angular", to: "React", frequency: 4482 },
        { from: "Express", to: "Express", frequency: 7511 },
        { from: "Express", to: "Next.js", frequency: 5823 },
        { from: "Express", to: "Node.js", frequency: 9028 },
        { from: "Express", to: "React", frequency: 7374 },
        { from: "Next.js", to: "Next.js", frequency: 7896 },
        { from: "Next.js", to: "Node.js", frequency: 6626 },
        { from: "Next.js", to: "React", frequency: 7280 },
        { from: "Node.js", to: "Angular", frequency: 4650 },
        { from: "Node.js", to: "Express", frequency: 7547 },
        { from: "Node.js", to: "Next.js", frequency: 9783 },
        { from: "Node.js", to: "Node.js", frequency: 19793 },
        { from: "Node.js", to: "React", frequency: 14208 },
        { from: "Node.js", to: "Svelte", frequency: 6037 },
        { from: "Node.js", to: "Vue.js", frequency: 6735 },
        { from: "React", to: "Express", frequency: 6103 },
        { from: "React", to: "Next.js", frequency: 10825 },
        { from: "React", to: "Node.js", frequency: 13323 },
        { from: "React", to: "React", frequency: 18534 },
        { from: "React", to: "Svelte", frequency: 5696 },
        { from: "React", to: "Vue.js", frequency: 5139 },
        { from: "Vue.js", to: "Node.js", frequency: 4923 },
        { from: "Vue.js", to: "Vue.js", frequency: 6804 },
        { from: "jQuery", to: "Node.js", frequency: 6385 },
        { from: "jQuery", to: "React", frequency: 6126 },
        { from: "jQuery", to: "jQuery", frequency: 5192 },
      ],
      series: [
        {
          type: "chord",
          fromKey: "from",
          toKey: "to",
          sizeKey: "frequency",
          tooltip: {
            renderer: ({ datum, fromKey, toKey, sizeKey }) =>
              datum != null
                ? {
                    title: `${numberFormatter.format(datum[sizeKey])} ${datum[fromKey]} developers want to learn ${datum[toKey]}`,
                    data: [],
                  }
                : { data: [] },
          },
          label: {
            fontFamily: "Architects Daughter",
          },
        },
      ],
    };

    AgCharts.create(options);
  }, []);

  return <div id="myChart" style={{ width: "90dvw", height: "90dvh", background:"linear-gradient(135deg, #FFB6C1, #8A2BE2, #FFD700, #98FB98)" }}></div>;
};

export default ChartComponent;
