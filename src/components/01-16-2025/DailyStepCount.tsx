import React, { useEffect } from "react";
import * as echarts from "echarts";

type EChartsOption = echarts.EChartsOption;

const data = [
  ["2016-01-01", 8918],
  ["2016-01-02", 1039],
  ["2016-01-03", 4595],
  ["2016-01-04", 9927],
  ["2016-01-05", 5916],
  ["2016-01-06", 1102],
  ["2016-01-07", 4360],
  ["2016-01-08", 1653],
  ["2016-01-09", 1342],
  ["2016-01-10", 7248],
  ["2016-01-11", 6697],
  ["2016-01-12", 6615],
  ["2016-01-13", 3911],
  ["2016-01-14", 3968],
  ["2016-01-15", 3179],
  ["2016-01-16", 25],
  ["2016-01-17", 4952],
  ["2016-01-18", 4945],
  ["2016-01-19", 8185],
  ["2016-01-20", 1327],
  ["2016-01-21", 5554],
  ["2016-01-22", 9866],
  ["2016-01-23", 6678],
  ["2016-01-24", 6127],
  ["2016-01-25", 896],
  ["2016-01-26", 1069],
  ["2016-01-27", 2702],
  ["2016-01-28", 8175],
  ["2016-01-29", 8357],
  ["2016-01-30", 6454],
  ["2016-01-31", 1003],
  ["2016-02-01", 1422],
  ["2016-02-02", 8182],
  ["2016-02-03", 2065],
  ["2016-02-04", 2006],
  ["2016-02-05", 8510],
  ["2016-02-06", 5597],
  ["2016-02-07", 6123],
  ["2016-02-08", 7925],
  ["2016-02-09", 1274],
  ["2016-02-10", 7909],
  ["2016-02-11", 9657],
  ["2016-02-12", 334],
  ["2016-02-13", 6097],
  ["2016-02-14", 7143],
  ["2016-02-15", 6741],
  ["2016-02-16", 7338],
  ["2016-02-17", 7003],
  ["2016-02-18", 3326],
  ["2016-02-19", 6933],
  ["2016-02-20", 4239],
  ["2016-02-21", 3068],
  ["2016-02-22", 3499],
  ["2016-02-23", 2271],
  ["2016-02-24", 7024],
  ["2016-02-25", 6947],
  ["2016-02-26", 7743],
  ["2016-02-27", 3230],
  ["2016-02-28", 4299],
  ["2016-02-29", 481],
  ["2016-03-01", 1712],
  ["2016-03-02", 3855],
  ["2016-03-03", 4661],
  ["2016-03-04", 3855],
  ["2016-03-05", 220],
  ["2016-03-06", 9088],
  ["2016-03-07", 8599],
  ["2016-03-08", 8874],
  ["2016-03-09", 9360],
  ["2016-03-10", 4929],
  ["2016-03-11", 7672],
  ["2016-03-12", 1356],
  ["2016-03-13", 4750],
  ["2016-03-14", 6358],
  ["2016-03-15", 6896],
  ["2016-03-16", 8725],
  ["2016-03-17", 6118],
  ["2016-03-18", 2414],
  ["2016-03-19", 7509],
  ["2016-03-20", 868],
  ["2016-03-21", 2712],
  ["2016-03-22", 4585],
  ["2016-03-23", 8176],
  ["2016-03-24", 1368],
  ["2016-03-25", 3446],
  ["2016-03-26", 3422],
  ["2016-03-27", 7696],
  ["2016-03-28", 1921],
  ["2016-03-29", 556],
  ["2016-03-30", 3289],
  ["2016-03-31", 663],
  ["2016-04-01", 639],
  ["2016-04-02", 6469],
  ["2016-04-03", 8942],
  ["2016-04-04", 2627],
  ["2016-04-05", 7782],
  ["2016-04-06", 5909],
  ["2016-04-07", 6974],
  ["2016-04-08", 7733],
  ["2016-04-09", 1377],
  ["2016-04-10", 8564],
  ["2016-04-11", 4998],
  ["2016-04-12", 632],
  ["2016-04-13", 7642],
  ["2016-04-14", 7667],
  ["2016-04-15", 6679],
  ["2016-04-16", 1795],
  ["2016-04-17", 1392],
  ["2016-04-18", 4670],
  ["2016-04-19", 1840],
  ["2016-04-20", 2013],
  ["2016-04-21", 2505],
  ["2016-04-22", 7326],
  ["2016-04-23", 3603],
  ["2016-04-24", 2519],
  ["2016-04-25", 6919],
  ["2016-04-26", 8472],
  ["2016-04-27", 5394],
  ["2016-04-28", 125],
  ["2016-04-29", 388],
  ["2016-04-30", 3968],
  ["2016-05-01", 7131],
  ["2016-05-02", 8182],
  ["2016-05-03", 3386],
  ["2016-05-04", 4786],
  ["2016-05-05", 6748],
  ["2016-05-06", 6636],
  ["2016-05-07", 603],
  ["2016-05-08", 8740],
  ["2016-05-09", 4104],
  ["2016-05-10", 9594],
  ["2016-05-11", 2294],
  ["2016-05-12", 7785],
  ["2016-05-13", 8179],
  ["2016-05-14", 5119],
  ["2016-05-15", 8302],
  ["2016-05-16", 6174],
  ["2016-05-17", 2630],
  ["2016-05-18", 5085],
  ["2016-05-19", 8533],
  ["2016-05-20", 5569],
  ["2016-05-21", 86],
  ["2016-05-22", 669],
  ["2016-05-23", 5550],
  ["2016-05-24", 3005],
  ["2016-05-25", 8069],
  ["2016-05-26", 398],
  ["2016-05-27", 6030],
  ["2016-05-28", 9536],
  ["2016-05-29", 1283],
  ["2016-05-30", 4601],
  ["2016-05-31", 619],
  ["2016-06-01", 1728],
  ["2016-06-02", 2224],
  ["2016-06-03", 7884],
  ["2016-06-04", 6085],
  ["2016-06-05", 5226],
  ["2016-06-06", 5577],
  ["2016-06-07", 6533],
  ["2016-06-08", 54],
  ["2016-06-09", 9354],
  ["2016-06-10", 801],
  ["2016-06-11", 8064],
  ["2016-06-12", 9508],
  ["2016-06-13", 1709],
  ["2016-06-14", 6967],
  ["2016-06-15", 9243],
  ["2016-06-16", 9809],
  ["2016-06-17", 3372],
  ["2016-06-18", 9220],
  ["2016-06-19", 7792],
  ["2016-06-20", 5098],
  ["2016-06-21", 3654],
  ["2016-06-22", 7044],
  ["2016-06-23", 2963],
  ["2016-06-24", 7950],
  ["2016-06-25", 1864],
  ["2016-06-26", 5537],
  ["2016-06-27", 5083],
  ["2016-06-28", 7985],
  ["2016-06-29", 3489],
  ["2016-06-30", 4462],
  ["2016-07-01", 2406],
  ["2016-07-02", 2472],
  ["2016-07-03", 1379],
  ["2016-07-04", 5843],
  ["2016-07-05", 1052],
  ["2016-07-06", 9801],
  ["2016-07-07", 9764],
  ["2016-07-08", 1641],
  ["2016-07-09", 2552],
  ["2016-07-10", 1047],
  ["2016-07-11", 3240],
  ["2016-07-12", 8317],
  ["2016-07-13", 3445],
  ["2016-07-14", 7449],
  ["2016-07-15", 7531],
  ["2016-07-16", 87],
  ["2016-07-17", 1841],
  ["2016-07-18", 5601],
  ["2016-07-19", 6143],
  ["2016-07-20", 730],
  ["2016-07-21", 406],
  ["2016-07-22", 9001],
  ["2016-07-23", 2468],
  ["2016-07-24", 200],
  ["2016-07-25", 7448],
  ["2016-07-26", 4015],
  ["2016-07-27", 4387],
  ["2016-07-28", 527],
  ["2016-07-29", 7129],
  ["2016-07-30", 2877],
  ["2016-07-31", 7483],
  ["2016-08-01", 44],
  ["2016-08-02", 6934],
  ["2016-08-03", 9861],
  ["2016-08-04", 6812],
  ["2016-08-05", 3071],
  ["2016-08-06", 4527],
  ["2016-08-07", 7097],
  ["2016-08-08", 9023],
  ["2016-08-09", 1605],
  ["2016-08-10", 7324],
  ["2016-08-11", 6367],
  ["2016-08-12", 3400],
  ["2016-08-13", 1301],
  ["2016-08-14", 8826],
  ["2016-08-15", 5679],
  ["2016-08-16", 9826],
  ["2016-08-17", 1399],
  ["2016-08-18", 1774],
  ["2016-08-19", 5043],
  ["2016-08-20", 1641],
  ["2016-08-21", 9547],
  ["2016-08-22", 2790],
  ["2016-08-23", 7429],
  ["2016-08-24", 4386],
  ["2016-08-25", 7341],
  ["2016-08-26", 5441],
  ["2016-08-27", 8505],
  ["2016-08-28", 1489],
  ["2016-08-29", 8206],
  ["2016-08-30", 8226],
  ["2016-08-31", 2129],
  ["2016-09-01", 1368],
  ["2016-09-02", 7122],
  ["2016-09-03", 6177],
  ["2016-09-04", 7091],
  ["2016-09-05", 6604],
  ["2016-09-06", 8351],
  ["2016-09-07", 2586],
  ["2016-09-08", 1160],
  ["2016-09-09", 2357],
  ["2016-09-10", 8992],
  ["2016-09-11", 7014],
  ["2016-09-12", 1699],
  ["2016-09-13", 1847],
  ["2016-09-14", 4901],
  ["2016-09-15", 4639],
  ["2016-09-16", 6912],
  ["2016-09-17", 6121],
  ["2016-09-18", 7516],
  ["2016-09-19", 3789],
  ["2016-09-20", 8550],
  ["2016-09-21", 9499],
  ["2016-09-22", 2781],
  ["2016-09-23", 4154],
  ["2016-09-24", 8993],
  ["2016-09-25", 6653],
  ["2016-09-26", 7152],
  ["2016-09-27", 9482],
  ["2016-09-28", 7119],
  ["2016-09-29", 961],
  ["2016-09-30", 141],
  ["2016-10-01", 9025],
  ["2016-10-02", 175],
  ["2016-10-03", 8630],
  ["2016-10-04", 5659],
  ["2016-10-05", 9456],
  ["2016-10-06", 1379],
  ["2016-10-07", 9028],
  ["2016-10-08", 7612],
  ["2016-10-09", 8662],
  ["2016-10-10", 1851],
  ["2016-10-11", 1086],
  ["2016-10-12", 3780],
  ["2016-10-13", 5701],
  ["2016-10-14", 2728],
  ["2016-10-15", 2408],
  ["2016-10-16", 4290],
  ["2016-10-17", 2832],
  ["2016-10-18", 2839],
  ["2016-10-19", 8685],
  ["2016-10-20", 1292],
  ["2016-10-21", 3504],
  ["2016-10-22", 886],
  ["2016-10-23", 7387],
  ["2016-10-24", 5959],
  ["2016-10-25", 7486],
  ["2016-10-26", 6487],
  ["2016-10-27", 887],
  ["2016-10-28", 395],
  ["2016-10-29", 4],
  ["2016-10-30", 4478],
  ["2016-10-31", 7671],
  ["2016-11-01", 6343],
  ["2016-11-02", 485],
  ["2016-11-03", 6424],
  ["2016-11-04", 2390],
  ["2016-11-05", 9214],
  ["2016-11-06", 8019],
  ["2016-11-07", 4693],
  ["2016-11-08", 6258],
  ["2016-11-09", 2024],
  ["2016-11-10", 6836],
  ["2016-11-11", 2051],
  ["2016-11-12", 5760],
  ["2016-11-13", 3418],
  ["2016-11-14", 4584],
  ["2016-11-15", 8547],
  ["2016-11-16", 5835],
  ["2016-11-17", 7893],
  ["2016-11-18", 1717],
  ["2016-11-19", 5132],
  ["2016-11-20", 9445],
  ["2016-11-21", 8601],
  ["2016-11-22", 1741],
  ["2016-11-23", 7163],
  ["2016-11-24", 8841],
  ["2016-11-25", 9117],
  ["2016-11-26", 5449],
  ["2016-11-27", 2096],
  ["2016-11-28", 5903],
  ["2016-11-29", 9094],
  ["2016-11-30", 5427],
  ["2016-12-01", 681],
  ["2016-12-02", 830],
  ["2016-12-03", 3953],
  ["2016-12-04", 5342],
  ["2016-12-05", 4679],
  ["2016-12-06", 4327],
  ["2016-12-07", 44],
  ["2016-12-08", 5515],
  ["2016-12-09", 8072],
  ["2016-12-10", 7910],
  ["2016-12-11", 8939],
  ["2016-12-12", 4703],
  ["2016-12-13", 1627],
  ["2016-12-14", 981],
  ["2016-12-15", 7004],
  ["2016-12-16", 3313],
  ["2016-12-17", 7255],
  ["2016-12-18", 4089],
  ["2016-12-19", 5310],
  ["2016-12-20", 6388],
  ["2016-12-21", 359],
  ["2016-12-22", 3453],
  ["2016-12-23", 8597],
  ["2016-12-24", 7179],
  ["2016-12-25", 4958],
  ["2016-12-26", 2557],
  ["2016-12-27", 3002],
  ["2016-12-28", 3457],
  ["2016-12-29", 9175],
  ["2016-12-30", 8188],
  ["2016-12-31", 453],
];

const GaugeChart: React.FC = () => {
  useEffect(() => {
    const chartDom = document.getElementById("main")!;
    const myChart = echarts.init(chartDom);

    const option: EChartsOption = {
      title: {
        top: 30,
        left: "center",
        text: "Daily Step Count",
      },
      tooltip: {},
      visualMap: {
        min: 0,
        max: 10000,
        type: "piecewise",
        orient: "horizontal",
        left: "center",
        top: 65,
      },
      calendar: {
        top: 120,
        left: 30,
        right: 30,
        cellSize: ["auto", 13],
        range: "2016",
        itemStyle: {
          borderWidth: 0.5,
        },
        yearLabel: { show: false },
      },
      series: {
        type: "heatmap",
        coordinateSystem: "calendar",
        data,
      },
    };

    option && myChart.setOption(option);
  }, []);

  return <div id="main" style={{ width: "100%", height: "100%" }}></div>;
};

export default GaugeChart;
