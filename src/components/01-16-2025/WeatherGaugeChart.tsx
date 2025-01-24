import React, { useEffect } from 'react';
import * as echarts from 'echarts';

const WeatherGaugeChart: React.FC = () => {
    useEffect(() => {
        const chartDom = document.getElementById('main')!;
        const myChart = echarts.init(chartDom);
        let option: echarts.EChartsOption;

        option = {
            title: {
                text: 'Weather Conditions',
                left: 'center',
                top: '10%'
            },
            legend: {
                show: false // Hide legends
            },
            series: [
                {
                    type: 'gauge',
                    startAngle: 180,
                    endAngle: 0,
                    center: ['50%', '75%'], 
                    radius: '100%',
                    min: 0,
                    max: 50,
                    splitNumber: 10,
                    axisLine: {
                        lineStyle: {
                            width: 20,
                            color: [
                                [0.2, '#58D9F9'],
                                [0.4, '#7CFFB2'],
                                [0.6, '#FDDD60'],
                                [0.8, '#FF6E76'],
                                [1, '#C23531']
                            ]
                        }
                    },
                    pointer: {
                        length: '80%',
                        width: 6,
                        itemStyle: {
                            color: 'auto'
                        }
                    },
                    axisTick: {
                        length: 15,
                        lineStyle: {
                            color: 'auto',
                            width: 2
                        }
                    },
                    splitLine: {
                        length: 25,
                        lineStyle: {
                            color: 'auto',
                            width: 5
                        }
                    },
                    axisLabel: {
                        color: '#000000',
                        fontSize: 15,
                        distance: -70,
                        formatter: function (value) {
                            return value + '°C';
                        }
                    },
                    title: {
                        offsetCenter: [0, '-40%'],
                        fontSize: 20
                    },
                    detail: {
                        fontSize: 30,
                        offsetCenter: [0, '-20%'],
                        valueAnimation: true,
                        formatter: function (value) {
                            return value + '°C';
                        },
                        color: 'inherit'
                    },
                    data: [
                        {
                            value: 25,
                            name: ''
                        }
                    ]
                },
                {
                    type: 'gauge',
                    startAngle: 180,
                    endAngle: 0,
                    center: ['50%', '75%'],
                    radius: '90%',
                    min: 0,
                    max: 50,
                    splitNumber: 10,
                    axisLine: {
                        lineStyle: {
                            width: 10,
                            color: [
                                [0.2, '#58D9F9'],
                                [0.4, '#7CFFB2'],
                                [0.6, '#FDDD60'],
                                [0.8, '#FF6E76'],
                                [1, '#C23531']
                            ]
                        }
                    },
                    pointer: {
                        length: '60%',
                        width: 6,
                        itemStyle: {
                            color: '#7CFFB2'
                        }
                    },
                    axisTick: {
                        length: 15,
                        lineStyle: {
                            color: 'auto',
                            width: 2
                        }
                    },
                    splitLine: {
                        length: 25,
                        lineStyle: {
                            color: 'auto',
                            width: 5
                        }
                    },
                    axisLabel: {
                        color: '#000000',
                        fontSize: 15,
                        distance: 0,
                        formatter: function (value) {
                            return value + '°C';
                        }
                    },
                    title: {
                        offsetCenter: [0, '-40%'],
                        fontSize: 20
                    },
                    detail: {
                        fontSize: 30,
                        offsetCenter: [0, '-20%'],
                        valueAnimation: true,
                        formatter: function (value) {
                            return value + '°C';
                        },
                        color: 'inherit'
                    },
                    data: [
                        {
                            value: 30,
                            name: ''
                        }
                    ]
                }
            ]
        };

        option && myChart.setOption(option);
    }, []);

    return <div id="main" style={{ width: '100%', height: '80%' }}></div>;
};

export default WeatherGaugeChart;
