import { ResponsiveRadar } from "@nivo/radar";

interface Data {
  taste: string;
  chardonay: number;
  carmenere: number;
  syrah: number;
}

const data: Data[] = [
  {
    taste: "fruity",
    chardonay: 33,
    carmenere: 111,
    syrah: 109,
  },
  {
    taste: "bitter",
    chardonay: 48,
    carmenere: 55,
    syrah: 79,
  },
  {
    taste: "heavy",
    chardonay: 80,
    carmenere: 61,
    syrah: 88,
  },
  {
    taste: "strong",
    chardonay: 38,
    carmenere: 98,
    syrah: 112,
  },
  {
    taste: "sunny",
    chardonay: 101,
    carmenere: 84,
    syrah: 35,
  },
];

const annotations = data.map((entry:Data, index) => ({
    type: 'circle',
    note: `${entry.taste}: Chard: ${entry.chardonay.toFixed(2)}, Carmenere: ${entry.carmenere.toFixed(2)}, Syrah: ${entry.syrah.toFixed(2)}`,
    x: (index + 1) * 100, // Adjust X position based on data index
    y: (index + 1) * 50, // Adjust Y position based on data index
    size: 12,
    color: '#000',
  }));

const MyResponsiveRadar = () => (
    
  <ResponsiveRadar
    data={data}
    keys={["chardonay", "carmenere", "syrah"]}
    indexBy="taste"
    valueFormat=">-.2f"
    margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
    borderColor={{ from: "color" }}
    gridLabelOffset={36}
    dotSize={10}
    dotColor={{ theme: "background" }}
    dotBorderWidth={2}
    dotLabel={"taste"}
    colors={{ scheme: "nivo" }}
    blendMode="multiply"
    motionConfig="wobbly"
    dotLabelYOffset={-12}
    annotations={annotations}
    // Add the values directly near each axis (gridLabel)
    // gridShape="circular"
    // Make sure we display each label next to its corresponding taste
    // gridLabel={({id,angle}) => {
        // console.log(node)
    //   return `${id}: ${Math.abs(angle)}`; // Format the value and display it next to the taste name
    // }}
    legends={[
      {
        anchor: "top-left",
        direction: "column",
        translateX: 250,
        translateY: 40,
        itemWidth: 80,
        itemHeight: 20,
        itemTextColor: "#000000",
        symbolSize: 12,
        symbolShape: "circle",
        effects: [
          {
            on: "hover",
            style: {
              itemTextColor: "#000",
            },
          },
        ],
      },
    ]}
  />
);

export default MyResponsiveRadar;
