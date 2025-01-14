import React, { useEffect } from 'react';
import { AgChartOptions, AgCharts } from 'ag-charts-community';

const ChartComponent: React.FC = () => {
  useEffect(() => {
    const formatTime = (value: number) => {
      const hours = Math.floor(value);
      const minutes = Math.round((value % 1) * 60);
      return `${hours > 0 ? hours + "h" : ""} ${minutes}m`;
    };

    const options: AgChartOptions = {
      container: document.getElementById("myChart"),
      title: {
        text: "Eating Hours In A Day",
      },
      subtitle: {
        text: "Hours spent per day eating and drinking by age group",
      },
      footnote: {
        text: "Source: American Time Use Survey (2012-2022)",
      },
      series: Object.entries(getData()).map(([ageGroup, data]) => ({
        data,
        type: "line",
        xKey: "year",
        yKey: "estimate",
        yName: ageGroup,
        label: {
          enabled: true,
          formatter: ({ value }: { value: number }) =>
            `${Math.floor(value) * 60 + Math.round((value % 1) * 60)}m`,
        },
        marker: {
          size: 10,
        },
      })),
      axes: [
        {
          type: "category",
          position: "bottom",
          label: {
            enabled: false,
          },
          line: {
            enabled: false,
          },
          crosshair: {
            enabled: true,
          },
        },
        {
          type: "number",
          position: "left",
          title: {
            text: "Time",
          },
          interval: { step: 0.5 },
          gridLine: {
            enabled: false,
          },
          tick: {
            size: 20,
          },
          line: {
            enabled: true,
          },
          label: {
            formatter: ({ value }: { value: number }) => formatTime(value),
          },
          crossLines: [
            {
              type: "line",
              value: 0.75,
              strokeOpacity: 0.5,
              lineDash: [6, 4],
              label: {
                text: ">Year",
                fontSize: 13,
                padding: 0,
                position: "right",
              },
            },
          ],
        },
      ],
      seriesArea: {
        padding: {
          left: 10,
          bottom: 10,
        },
      },
    };

    AgCharts.create(options);
  }, []);

  return <div id="myChart" style={{ height: '90vh', width: '90vw' }}></div>;
};

function getData() {
  return {
    "45 to 54 years": [
      {
        year: "2012",
        estimate: 1.24,
        lowerEstimate: 1.2016,
        upperEstimate: 1.2784,
      },
      {
        year: "2013",
        estimate: 1.27,
        lowerEstimate: 1.2504,
        upperEstimate: 1.2896,
      },
      {
        year: "2014",
        estimate: 1.29,
        lowerEstimate: 1.2768,
        upperEstimate: 1.3032,
      },
      {
        year: "2015",
        estimate: 1.28,
        lowerEstimate: 1.2592,
        upperEstimate: 1.3008,
      },
      {
        year: "2016",
        estimate: 1.26,
        lowerEstimate: 1.2416,
        upperEstimate: 1.2784,
      },
      {
        year: "2017",
        estimate: 1.3,
        lowerEstimate: 1.2808,
        upperEstimate: 1.3192,
      },
      {
        year: "2018",
        estimate: 1.3,
        lowerEstimate: 1.2808,
        upperEstimate: 1.3192,
      },
      {
        year: "2019",
        estimate: 1.31,
        lowerEstimate: 1.2936,
        upperEstimate: 1.3264,
      },
      {
        year: "2020",
        estimate: 1.34,
        lowerEstimate: 1.3112,
        upperEstimate: 1.3688,
      },
      {
        year: "2021",
        estimate: 1.36,
        lowerEstimate: 1.3336,
        upperEstimate: 1.3864,
      },
      {
        year: "2022",
        estimate: 1.38,
        lowerEstimate: 1.3512,
        upperEstimate: 1.4088,
      },
    ],
    "55 to 64 years": [
      {
        year: "2012",
        estimate: 0.97,
        lowerEstimate: 0.9432,
        upperEstimate: 0.9968,
      },
      {
        year: "2013",
        estimate: 0.98,
        lowerEstimate: 0.9504,
        upperEstimate: 1.0096,
      },
      {
        year: "2014",
        estimate: 1.03,
        lowerEstimate: 1.0016,
        upperEstimate: 1.0584,
      },
      {
        year: "2015",
        estimate: 1.06,
        lowerEstimate: 1.0312,
        upperEstimate: 1.0888,
      },
      {
        year: "2016",
        estimate: 1.05,
        lowerEstimate: 1.0272,
        upperEstimate: 1.0728,
      },
      {
        year: "2017",
        estimate: 1.03,
        lowerEstimate: 1.0024,
        upperEstimate: 1.0576,
      },
      {
        year: "2018",
        estimate: 1.04,
        lowerEstimate: 1.0096,
        upperEstimate: 1.0704,
      },
      {
        year: "2019",
        estimate: 1.05,
        lowerEstimate: 1.022,
        upperEstimate: 1.078,
      },
      {
        year: "2020",
        estimate: 1.06,
        lowerEstimate: 1.0288,
        upperEstimate: 1.0912,
      },
      {
        year: "2021",
        estimate: 1.08,
        lowerEstimate: 1.0512,
        upperEstimate: 1.1088,
      },
      {
        year: "2022",
        estimate: 1.09,
        lowerEstimate: 1.0636,
        upperEstimate: 1.1164,
      },
    ],
    "65 years and over": [
      {
        year: "2012",
        estimate: 0.4,
        lowerEstimate: 0.368,
        upperEstimate: 0.432,
      },
      {
        year: "2013",
        estimate: 0.4,
        lowerEstimate: 0.372,
        upperEstimate: 0.428,
      },
      {
        year: "2014",
        estimate: 0.42,
        lowerEstimate: 0.3944,
        upperEstimate: 0.4456,
      },
      {
        year: "2015",
        estimate: 0.42,
        lowerEstimate: 0.3944,
        upperEstimate: 0.4456,
      },
      {
        year: "2016",
        estimate: 0.41,
        lowerEstimate: 0.3848,
        upperEstimate: 0.4352,
      },
      {
        year: "2017",
        estimate: 0.44,
        lowerEstimate: 0.4072,
        upperEstimate: 0.4728,
      },
      {
        year: "2018",
        estimate: 0.47,
        lowerEstimate: 0.4376,
        upperEstimate: 0.5024,
      },
      {
        year: "2019",
        estimate: 0.47,
        lowerEstimate: 0.4416,
        upperEstimate: 0.4984,
      },
      {
        year: "2020",
        estimate: 0.49,
        lowerEstimate: 0.4568,
        upperEstimate: 0.5232,
      },
      {
        year: "2021",
        estimate: 0.51,
        lowerEstimate: 0.4796,
        upperEstimate: 0.5404,
      },
      {
        year: "2022",
        estimate: 0.53,
        lowerEstimate: 0.4996,
        upperEstimate: 0.5604,
      },
    ],
  };
}

export default ChartComponent;
