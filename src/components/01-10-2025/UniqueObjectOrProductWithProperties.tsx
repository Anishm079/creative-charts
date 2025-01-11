import { ResponsiveParallelCoordinates } from '@nivo/parallel-coordinates'

interface Data {
    temp: number
    cost: number
    weight: number
    volume: number
    id:string
}

const data: Data[] = [
    {
      "id": "Industrial machine or equipment",
      "temp": 20.33,
      "cost": 7268,
      "weight": 136,
      "volume": 4.35
    },
    {
      "id": "High-tech equipment or machinery",
      "temp": 17.13,
      "cost": 15503,
      "weight": 19,
      "volume": 6.75
    },
    {
      "id": "Refrigerated shipping container",
      "temp": 11.52,
      "cost": 29813,
      "weight": 136,
      "volume": 2.90
    },
    {
      "id": "High-performance industrial tool",
      "temp": 11.88,
      "cost": 15012,
      "weight": 116,
      "volume": 0.34
    },
    {
      "id": "Power transformer or machinery",
      "temp": 12.27,
      "cost": 28625,
      "weight": 196,
      "volume": 1.04
    },
    {
      "id": "Refrigerated storage unit",
      "temp": -1.67,
      "cost": 18785,
      "weight": 220,
      "volume": 6.54
    },
    {
      "id": "Industrial freezer unit",
      "temp": -9.76,
      "cost": 366,
      "weight": 279,
      "volume": 0.86
    },
    {
      "id": "Heavy-duty appliance",
      "temp": 15.98,
      "cost": 8954,
      "weight": 199,
      "volume": 4.23
    },
    {
      "id": "Refrigerated transport container",
      "temp": -0.29,
      "cost": 38645,
      "weight": 128,
      "volume": 5.96
    },
    {
      "id": "Cooling system or ventilation",
      "temp": 23.41,
      "cost": 36526,
      "weight": 157,
      "volume": 6.76
    }
  ]
  ;

const MyResponsiveParallelCoordinates = () => (
    <ResponsiveParallelCoordinates
        data={data}
        variables={[
            {
                id: 'temp',
                label: 'temperature',
                value: 'temp',
                min: 'auto',
                max: 'auto',
                ticksPosition: 'before',
                legendPosition: 'start',
                legendOffset: 20
            },
            {
                id: 'cost',
                value: 'cost',
                min: 0,
                max: 'auto',
                ticksPosition: 'before',
                legendPosition: 'start',
                legendOffset: 20
            },
            {
                id: 'weight',
                value: 'weight',
                min: 'auto',
                max: 'auto',
                legendPosition: 'start',
                legendOffset: -20
            },
            {
                id: 'volume',
                value: 'volume',
                min: 0,
                max: 'auto',
                legendPosition: 'start',
                legendOffset: -20
            }
        ]}
        margin={{ top: 50, right: 120, bottom: 50, left: 60 }}
        lineWidth={5}
        legends={[
            {
                anchor: 'bottom',
                direction: 'row',
                justify: false,
                translateX: 50,
                translateY: 50,
                itemsSpacing: 2,
                itemWidth: 180,
                itemHeight: 40,
                itemDirection: 'top-to-bottom',
                itemOpacity: 0.85,
                symbolSize: 20,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
)

export default MyResponsiveParallelCoordinates
