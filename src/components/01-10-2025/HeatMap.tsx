import React from 'react';
import { ResponsiveHeatMap } from '@nivo/heatmap';

const data: Array<{}>=[
        {
          "id": "Japan",
          "data": [
            {
              "x": "Train",
              "y": 63389
            },
            {
              "x": "Subway",
              "y": -23773
            },
            {
              "x": "Bus",
              "y": 92606
            },
            {
              "x": "Car",
              "y": 53284
            },
            {
              "x": "Boat",
              "y": -85147
            },
            {
              "x": "Moto",
              "y": -89872
            },
            {
              "x": "Moped",
              "y": 77754
            },
            {
              "x": "Bicycle",
              "y": 67033
            },
            {
              "x": "Others",
              "y": -56926
            }
          ]
        },
        {
          "id": "France",
          "data": [
            {
              "x": "Train",
              "y": -39610
            },
            {
              "x": "Subway",
              "y": -13477
            },
            {
              "x": "Bus",
              "y": -50984
            },
            {
              "x": "Car",
              "y": 63566
            },
            {
              "x": "Boat",
              "y": -53740
            },
            {
              "x": "Moto",
              "y": -33829
            },
            {
              "x": "Moped",
              "y": -41627
            },
            {
              "x": "Bicycle",
              "y": 75092
            },
            {
              "x": "Others",
              "y": -23026
            }
          ]
        },
        {
          "id": "US",
          "data": [
            {
              "x": "Train",
              "y": 97987
            },
            {
              "x": "Subway",
              "y": 39298
            },
            {
              "x": "Bus",
              "y": 11416
            },
            {
              "x": "Car",
              "y": 91217
            },
            {
              "x": "Boat",
              "y": -10728
            },
            {
              "x": "Moto",
              "y": 51203
            },
            {
              "x": "Moped",
              "y": 21758
            },
            {
              "x": "Bicycle",
              "y": -57553
            },
            {
              "x": "Others",
              "y": 7196
            }
          ]
        },
        {
          "id": "Germany",
          "data": [
            {
              "x": "Train",
              "y": -16503
            },
            {
              "x": "Subway",
              "y": -19318
            },
            {
              "x": "Bus",
              "y": -83460
            },
            {
              "x": "Car",
              "y": 19016
            },
            {
              "x": "Boat",
              "y": -64990
            },
            {
              "x": "Moto",
              "y": -35188
            },
            {
              "x": "Moped",
              "y": 41005
            },
            {
              "x": "Bicycle",
              "y": 21947
            },
            {
              "x": "Others",
              "y": 63234
            }
          ]
        },
        {
          "id": "Norway",
          "data": [
            {
              "x": "Train",
              "y": -44299
            },
            {
              "x": "Subway",
              "y": 13335
            },
            {
              "x": "Bus",
              "y": 89497
            },
            {
              "x": "Car",
              "y": 42620
            },
            {
              "x": "Boat",
              "y": 25104
            },
            {
              "x": "Moto",
              "y": -26112
            },
            {
              "x": "Moped",
              "y": -7906
            },
            {
              "x": "Bicycle",
              "y": -58052
            },
            {
              "x": "Others",
              "y": -47305
            }
          ]
        },
        {
          "id": "Iceland",
          "data": [
            {
              "x": "Train",
              "y": -73481
            },
            {
              "x": "Subway",
              "y": 18006
            },
            {
              "x": "Bus",
              "y": -27847
            },
            {
              "x": "Car",
              "y": -43545
            },
            {
              "x": "Boat",
              "y": -42202
            },
            {
              "x": "Moto",
              "y": -79356
            },
            {
              "x": "Moped",
              "y": 36258
            },
            {
              "x": "Bicycle",
              "y": -72739
            },
            {
              "x": "Others",
              "y": 52196
            }
          ]
        },
        {
          "id": "UK",
          "data": [
            {
              "x": "Train",
              "y": 6269
            },
            {
              "x": "Subway",
              "y": -94923
            },
            {
              "x": "Bus",
              "y": -4934
            },
            {
              "x": "Car",
              "y": -29705
            },
            {
              "x": "Boat",
              "y": -45409
            },
            {
              "x": "Moto",
              "y": -78177
            },
            {
              "x": "Moped",
              "y": 71233
            },
            {
              "x": "Bicycle",
              "y": 82944
            },
            {
              "x": "Others",
              "y": 66289
            }
          ]
        },
        {
          "id": "Vietnam",
          "data": [
            {
              "x": "Train",
              "y": 31089
            },
            {
              "x": "Subway",
              "y": 99671
            },
            {
              "x": "Bus",
              "y": 37025
            },
            {
              "x": "Car",
              "y": 99929
            },
            {
              "x": "Boat",
              "y": 83833
            },
            {
              "x": "Moto",
              "y": 53748
            },
            {
              "x": "Moped",
              "y": -46440
            },
            {
              "x": "Bicycle",
              "y": 22678
            },
            {
              "x": "Others",
              "y": 37514
            }
          ]
        }
      ];

const MyResponsiveHeatMap: React.FC = () => (
    <ResponsiveHeatMap
        data={data}
        margin={{ top: 60, right: 90, bottom: 60, left: 90 }}
        valueFormat=">-.2s"
        axisTop={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: -90,
            legend: '',
            legendOffset: 46,
            truncateTickAt: 0
        }}
        axisRight={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'country',
            legendPosition: 'middle',
            legendOffset: 70,
            truncateTickAt: 0
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'country',
            legendPosition: 'middle',
            legendOffset: -72,
            truncateTickAt: 0
        }}
        colors={{
            type: 'diverging',
            scheme: 'red_yellow_blue',
            divergeAt: 0.5,
            minValue: -100000,
            maxValue: 100000
        }}
        emptyColor="#555555"
        legends={[
            {
                anchor: 'bottom',
                translateX: 0,
                translateY: 30,
                length: 400,
                thickness: 8,
                direction: 'row',
                tickPosition: 'after',
                tickSize: 3,
                tickSpacing: 4,
                tickOverlap: false,
                tickFormat: '>-.2s',
                title: 'Value →',
                titleAlign: 'start',
                titleOffset: 4
            }
        ]}
    />
);

export default MyResponsiveHeatMap;
