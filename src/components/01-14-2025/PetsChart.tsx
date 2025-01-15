import { ResponsiveWaffle } from '@nivo/waffle';

const data: any[] = [
    {
      "id": "cats",
      "label": "Cats(5.6500468099522845)",
      "value": 5.6500468099522845
    },
    {
      "id": "dogs",
      "label": "Dogs(25.845104073256355)",
      "value": 25.845104073256355
    },
    {
      "id": "rabbits",
      "label": "Rabits(26.979315811268048)",
      "value": 26.979315811268048
    }
  ];

const MyResponsiveWaffle: React.FC = () => (
    <ResponsiveWaffle
        data={data}
        total={100}
        rows={18}
        columns={14}
        padding={1}
        valueFormat=".2f"
        margin={{ top: 10, right: 10, bottom: 10, left: 120 }}
        colors={{ scheme: 'nivo' }}
        borderRadius={3}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.3
                ]
            ]
        }}
        motionStagger={2}
        legends={[
            {
                anchor: 'top-left',
                direction: 'column',
                justify: false,
                translateX: 400,
                translateY: 0,
                itemsSpacing: 4,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: 'left-to-right',
                itemOpacity: 1,
                itemTextColor: '#000000',
                symbolSize: 20,
                data: data.map(lbl => ({
                    id: lbl.id,
                    label: `${lbl.label}: ${lbl.value}`
                })),
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000',
                            itemBackground: '#f7fafb'
                        }
                    }
                ]
            }
        ]}
    />
);

export default MyResponsiveWaffle;
