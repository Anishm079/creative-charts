import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

const SunburstChart: React.FC = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const chartDom = chartRef.current!;
    const myChart = echarts.init(chartDom);

    const colors = ['#FFAE57', '#FF7853', '#EA5151', '#CC3F57', '#9A2555'];
    const bgColor = '#2E2733';
    const itemStyle = {
      star5: { color: colors[0] },
      star4: { color: colors[1] },
      star3: { color: colors[2] },
      star2: { color: colors[3] },
    };
    const data = [
      {
          "name": "Fiction",
          "itemStyle": { "color": colors[1] },
          "children": [
              {
                  "name": "Novels",
                  "children": [
                      {
                          "name": "5☆",
                          "children": [
                              { "name": "Pain" },
                              { "name": "Mercy" },
                              { "name": "The Tenant Downstairs" }
                          ]
                      },
                      {
                          "name": "4☆",
                          "children": [
                              { "name": "The Empty Cross" },
                              { "name": "Silent Confession" },
                              { "name": "Childhood's End" }
                          ]
                      },
                      {
                          "name": "3☆",
                          "children": [
                              { "name": "Diary of a Madman" }
                          ]
                      }
                  ]
              },
              {
                  "name": "Others",
                  "children": [
                      {
                          "name": "5☆",
                          "children": [
                              { "name": "The Complete Short Stories of Nabokov" }
                          ]
                      },
                      {
                          "name": "4☆",
                          "children": [
                              { "name": "Requiem" },
                              { "name": "Life Puzzle Edition" }
                          ]
                      },
                      {
                          "name": "3☆",
                          "children": [
                              { "name": "Need You More than Love You" }
                          ]
                      }
                  ]
              }
          ]
      }
      // Additional data...
  ];

    for (let j = 0; j < data.length; ++j) {
      let level1 = data[j].children;
      for (let i = 0; i < level1.length; ++i) {
        let block = level1[i].children;
        let bookScore: any[] = [];
        let bookScoreId;
        for (let star = 0; star < block.length; ++star) {
          let style = (function (name) {
            switch (name) {
              case '5☆':
                bookScoreId = 0;
                return itemStyle.star5;
              case '4☆':
                bookScoreId = 1;
                return itemStyle.star4;
              case '3☆':
                bookScoreId = 2;
                return itemStyle.star3;
              case '2☆':
                bookScoreId = 3;
                return itemStyle.star2;
            }
          })(block[star].name);
          block[star].label = {
            color: style.color,
            downplay: { opacity: 0.5 },
          };
          if (block[star].children) {
            style = { opacity: 1, color: style.color };
            block[star].children.forEach(function (book) {
              book.value = 1;
              book.itemStyle = style;
              book.label = { color: style.color };
              let value = 1;
              if (bookScoreId === 0 || bookScoreId === 3) value = 5;
              if (bookScore[bookScoreId]) {
                bookScore[bookScoreId].value += value;
              } else {
                bookScore[bookScoreId] = { color: colors[bookScoreId], value: value };
              }
            });
          }
        }
        level1[i].itemStyle = { color: data[j].itemStyle.color };
      }
    }

    const option = {
      backgroundColor: bgColor,
      color: colors,
      series: [
        {
          type: 'sunburst',
          center: ['50%', '48%'],
          data: data,
          sort: function (a, b) {
            if (a.depth === 1) return b.getValue() - a.getValue();
            else return a.dataIndex - b.dataIndex;
          },
          label: { rotate: 'radial', color: bgColor},
          text:"Book Records",
          itemStyle: { borderColor: bgColor, borderWidth: 2 },
          levels: [
            {},
            { r0: 0, r: 40, label: { rotate: 0 } },
            { r0: 40, r: 105 },
            {
              r0: 115,
              r: 140,
              itemStyle: { shadowBlur: 2, shadowColor: colors[2], color: 'transparent' },
              label: { rotate: 'tangential', fontSize: 10, color: colors[0] },
            },
            {
              r0: 140,
              r: 145,
              itemStyle: { shadowBlur: 80, shadowColor: colors[0] },
              label: { position: 'outside', textShadowBlur: 5, textShadowColor: '#333' },
              downplay: { label: { opacity: 0.5 } },
            },
          ],
        },
      ],
    };

    myChart.setOption(option);

    return () => {
      myChart.dispose();
    };
  }, []);

  return (
    <div style={{position:"relative"}} >
      <h1 style={{position:"absolute",zIndex:100,width:"100%",marginTop:"10px"}} >Book Records Sunburst Chart</h1>
      <div ref={chartRef} style={{ width: "100dvw", height: "100dvh",zIndex:99 }}></div>
    </div>
  );
};

export default SunburstChart;
