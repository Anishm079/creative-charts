import React, { useEffect, useState } from 'react';
import * as echarts from 'echarts';

const CPUGaugeChart: React.FC = () => {
    const [currentCpuUsage, setCurrentCpuUsage] = useState(0);
    const totalCpuUsage = 100; // Assuming the total CPU usage is 100%

    useEffect(() => {
        const chartDom = document.getElementById('main')!;
        const myChart = echarts.init(chartDom);
        let option: echarts.EChartsOption;

        option = {
            title: {
                text: 'Server CPU Usage',
                left: 'center',
                top: '10%'
            },
            series: [
                {
                    type: 'gauge',
                    startAngle: 180,
                    endAngle: 0,
                    center: ['50%', '75%'],
                    radius: '90%',
                    min: 0,
                    max: totalCpuUsage,
                    splitNumber: 10,
                    axisLine: {
                        lineStyle: {
                            width: 100,
                            color: [
                                [0.3, '#50C878'], // Green for low usage
                                [0.7, '#FFD700'], // Yellow for moderate usage
                                [1, '#FF4500'] // Red for high usage
                            ]
                        }
                    },
                    pointer: {
                        length: '50%',
                        width: 15,
                        itemStyle: {
                            color: 'auto'
                        }
                    },
                    axisTick: {
                        length: 12,
                        lineStyle: {
                            color: 'auto',
                            width: 2
                        }
                    },
                    splitLine: {
                        length: 20,
                        lineStyle: {
                            color: 'auto',
                            width: 5
                        }
                    },
                    axisLabel: {
                        color: '#000',
                        fontSize: 15,
                        distance: -60,
                        formatter: function (value) {
                            return value + '%';
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
                            return value + '%';
                        },
                        color: 'inherit'
                    },
                    data: [
                        {
                            value: currentCpuUsage,
                            name: 'CPU Usage'
                        }
                    ]
                }
            ]
        };

        option && myChart.setOption(option);

        const updateCpuUsage = () => {
            const newCpuUsage = Math.random() * totalCpuUsage;
            setCurrentCpuUsage(newCpuUsage);
            myChart.setOption({
                series: [
                    {
                        data: [{ value: newCpuUsage, name: 'CPU Usage' }]
                    }
                ]
            });
        };

        const intervalId = setInterval(updateCpuUsage, 2000);

        return () => {
            clearInterval(intervalId);
        };
    }, [currentCpuUsage]);

    return (
            <div id="main" style={{ width: '100%', height: '80%' }}></div>
        // <div>
        //     <div style={{ textAlign: 'center', marginTop: '20px' }}>
        //         <p>Total CPU Usage: {totalCpuUsage}%</p>
        //         <p>Current CPU Usage: {currentCpuUsage.toFixed(2)}%</p>
        //     </div>
        // </div>
    );
};

export default CPUGaugeChart;
