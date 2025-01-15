import * as echarts from 'echarts';

var app = {};

var chartDom = document.getElementById('main');
var myChart = echarts.init(chartDom);
var option;

var data =[] ;
option = {
  title: {
    text: 'WORLD COFFEE RESEARCH SENSORY LEXICON',
    subtext: 'Source: https://worldcoffeeresearch.org/work/sensory-lexicon/',
    textStyle: {
      fontSize: 14,
      align: 'center'
    },
    subtextStyle: {
      align: 'center'
    },
    sublink: 'https://worldcoffeeresearch.org/work/sensory-lexicon/'
  },
  series: {
    type: 'sunburst',
    data: data,
    radius: [0, '95%'],
    sort: undefined,
    emphasis: {
      focus: 'ancestor'
    },
    levels: [
      {},
      {
        r0: '15%',
        r: '35%',
        itemStyle: {
          borderWidth: 2
        },
        label: {
          rotate: 'tangential'
        }
      },
      {
        r0: '35%',
        r: '70%',
        label: {
          align: 'right'
        }
      },
      {
        r0: '70%',
        r: '72%',
        label: {
          position: 'outside',
          padding: 3,
          silent: false
        },
        itemStyle: {
          borderWidth: 3
        }
      }
    ]
  }
};

option && myChart.setOption(option);
