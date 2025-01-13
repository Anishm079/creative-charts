import React, { useEffect } from 'react';
import * as echarts from 'echarts';

interface Data {
    Q1: {
        Sales: number,
        ExpectedSales: number,
        SaleDeviation: number,
        Returns: number,
        Discounts: number,
    },
    Q2: {
        Sales: number,
        ExpectedSales: number,
        SaleDeviation: number,
        Returns: number,
        Discounts: number,
    },
    Q3: {
        Sales: number,
        ExpectedSales: number,
        SaleDeviation: number,
        Returns: number,
        Discounts: number,
    },
    Q4: {
        Sales: number,
        ExpectedSales: number,
        SaleDeviation: number,
        Returns: number,
        Discounts: number,
    }
}

const data: Data = {
    "Q1": {
        "Sales": 36700.1234,
        "ExpectedSales": 25000.5678,
        "SaleDeviation": 11700.9876,
        "Returns": 7290.4567,
        "Discounts": 2750.7890
    },
    "Q2": {
        "Sales": 32500.2345,
        "ExpectedSales": 28000.6789,
        "SaleDeviation": 4500.2345,
        "Returns": 8550.1234,
        "Discounts": 3800.4567
    },
    "Q3": {
        "Sales": 42200.5678,
        "ExpectedSales": 32000.1234,
        "SaleDeviation": 10200.2345,
        "Returns": 9960.6789,
        "Discounts": 4600.7890
    },
    "Q4": {
        "Sales": 66000.9876,
        "ExpectedSales": 36000.3456,
        "SaleDeviation": 30000.5678,
        "Returns": 11010.2345,
        "Discounts": 5600.1234
    }
};

const MyResponsiveECharts: React.FC = () => {
    useEffect(() => {
        const chartDom = document.getElementById('chart') as HTMLDivElement;
        const chart = echarts.init(chartDom);

        const option: echarts.EChartsOption = {
            title: {
                text: "Quarterly Sales Performance",
                textStyle: {
                    fontSize: "1rem",
                    fontWeight: "lighter",
                    color: "gray",
                    fontFamily: "Sonsie One"
                },
                left: 'center',
                top: '10%',
                padding: [10, 0, 20, 0]
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            legend: {
                data: ['Sales', 'Expected Sales', 'Returns', 'Discounts', 'Sales Deviation']
            },
            xAxis: {
                type: 'category',
                name: 'Quarter',
                nameLocation: 'middle',
                nameTextStyle: {
                    fontSize: "1.25rem",
                    fontWeight: "bolder",
                    fontFamily: "Sonsie One"
                },
                nameGap: 30,
                data: ['Q1', 'Q2', 'Q3', 'Q4']
            },
            yAxis: {
                name: 'Amount (in USD)',
                nameLocation: 'middle',
                nameTextStyle: {
                    fontSize: "1.25rem",
                    fontWeight: "bolder",
                    fontFamily: "Sonsie One"
                },
                nameGap: 70,
                type: 'value'
            },
            series: [
                {
                    name: 'Sales',
                    type: 'bar',
                    stack: 'total',
                    emphasis: {
                        focus: 'series'
                    },
                    data: [data.Q1.Sales, data.Q2.Sales, data.Q3.Sales, data.Q4.Sales],
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            { offset: 0, color: '#83bff6' },
                            { offset: 1, color: '#188df0' }
                        ]),
                        borderColor: '#fff',
                        borderWidth: 1,
                        shadowBlur: 10,
                        shadowColor: 'rgba(0, 0, 0, 0.5)',
                        shadowOffsetX: 5,
                        shadowOffsetY: 5
                    },
                },
                {
                    name: 'Expected Sales',
                    type: 'bar',
                    stack: 'total',
                    emphasis: {
                        focus: 'series'
                    },
                    data: [data.Q1.ExpectedSales, data.Q2.ExpectedSales, data.Q3.ExpectedSales, data.Q4.ExpectedSales]
                },
                {
                    name: 'Returns',
                    type: 'bar',
                    stack: 'total',
                    emphasis: {
                        focus: 'series'
                    },
                    data: [data.Q1.Returns, data.Q2.Returns, data.Q3.Returns, data.Q4.Returns]
                },
                {
                    name: 'Discounts',
                    type: 'bar',
                    stack: 'total',
                    emphasis: {
                        focus: 'series'
                    },
                    data: [data.Q1.Discounts, data.Q2.Discounts, data.Q3.Discounts, data.Q4.Discounts]
                },
                {
                    name: 'Sales Deviation',
                    type: 'line',
                    data: [data.Q1.SaleDeviation, data.Q2.SaleDeviation, data.Q3.SaleDeviation, data.Q4.SaleDeviation],
                    lineStyle: { color: "red", type: "solid" }
                }
            ]
        };
        chart.setOption(option);

        return () => {
            chart.dispose();
        };
    }, []);

    return <div id="chart" style={{ width: '100%', height: '100%' }} />;
}

export default MyResponsiveECharts;
