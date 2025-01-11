import React from "react";
import { ComputedNode, ResponsiveNetwork } from "@nivo/network";

interface iData {
  nodes: Array<{
    id: string;
    size: number;
    height:number;
    color: string;
  }>;
  links: Array<{
    source: string;
    target: string;
    distance: number;
  }>;
}

const data:iData = {
    "nodes": [
      {
        "id": "Node 1",
        "height": 1,
        "size": 24,
        "color": "rgb(97, 205, 187)"
      },
      {
        "id": "Node 2",
        "height": 1,
        "size": 24,
        "color": "rgb(97, 205, 187)"
      },
      {
        "id": "Node 3",
        "height": 1,
        "size": 24,
        "color": "rgb(97, 205, 187)"
      },
      {
        "id": "Node 4",
        "height": 1,
        "size": 24,
        "color": "rgb(97, 205, 187)"
      },
      {
        "id": "Node 5",
        "height": 1,
        "size": 24,
        "color": "rgb(97, 205, 187)"
      },
      {
        "id": "Node 0",
        "height": 2,
        "size": 32,
        "color": "rgb(244, 117, 96)"
      },
      {
        "id": "Node 1.0",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 1.1",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 1.2",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 2.0",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 2.1",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 2.2",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 2.3",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 2.4",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 2.5",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 2.6",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 2.7",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 3.0",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 3.1",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 3.2",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 3.3",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 3.4",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 4.0",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 4.1",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 4.2",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 4.3",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 4.4",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 4.5",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 4.6",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 4.7",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 5.0",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 5.1",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 5.2",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 5.3",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 5.4",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 5.5",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      }
    ],
    "links": [
      {
        "source": "Node 0",
        "target": "Node 1",
        "distance": 80
      },
      {
        "source": "Node 1",
        "target": "Node 1.0",
        "distance": 50
      },
      {
        "source": "Node 1",
        "target": "Node 1.1",
        "distance": 50
      },
      {
        "source": "Node 1",
        "target": "Node 1.2",
        "distance": 50
      },
      {
        "source": "Node 0",
        "target": "Node 2",
        "distance": 80
      },
      {
        "source": "Node 2",
        "target": "Node 2.0",
        "distance": 50
      },
      {
        "source": "Node 2",
        "target": "Node 2.1",
        "distance": 50
      },
      {
        "source": "Node 2",
        "target": "Node 2.2",
        "distance": 50
      },
      {
        "source": "Node 2",
        "target": "Node 2.3",
        "distance": 50
      },
      {
        "source": "Node 2",
        "target": "Node 2.4",
        "distance": 50
      },
      {
        "source": "Node 2",
        "target": "Node 2.5",
        "distance": 50
      },
      {
        "source": "Node 2",
        "target": "Node 2.6",
        "distance": 50
      },
      {
        "source": "Node 2",
        "target": "Node 2.7",
        "distance": 50
      },
      {
        "source": "Node 0",
        "target": "Node 3",
        "distance": 80
      },
      {
        "source": "Node 3",
        "target": "Node 2",
        "distance": 80
      },
      {
        "source": "Node 3",
        "target": "Node 3.0",
        "distance": 50
      },
      {
        "source": "Node 3",
        "target": "Node 3.1",
        "distance": 50
      },
      {
        "source": "Node 3",
        "target": "Node 3.2",
        "distance": 50
      },
      {
        "source": "Node 3",
        "target": "Node 3.3",
        "distance": 50
      },
      {
        "source": "Node 3",
        "target": "Node 3.4",
        "distance": 50
      },
      {
        "source": "Node 0",
        "target": "Node 4",
        "distance": 80
      },
      {
        "source": "Node 4",
        "target": "Node 4.0",
        "distance": 50
      },
      {
        "source": "Node 4",
        "target": "Node 4.1",
        "distance": 50
      },
      {
        "source": "Node 4",
        "target": "Node 4.2",
        "distance": 50
      },
      {
        "source": "Node 4",
        "target": "Node 4.3",
        "distance": 50
      },
      {
        "source": "Node 4",
        "target": "Node 4.4",
        "distance": 50
      },
      {
        "source": "Node 4",
        "target": "Node 4.5",
        "distance": 50
      },
      {
        "source": "Node 4",
        "target": "Node 4.6",
        "distance": 50
      },
      {
        "source": "Node 4",
        "target": "Node 4.7",
        "distance": 50
      },
      {
        "source": "Node 0",
        "target": "Node 5",
        "distance": 80
      },
      {
        "source": "Node 5",
        "target": "Node 5.0",
        "distance": 50
      },
      {
        "source": "Node 5",
        "target": "Node 5.1",
        "distance": 50
      },
      {
        "source": "Node 5",
        "target": "Node 5.2",
        "distance": 50
      },
      {
        "source": "Node 5",
        "target": "Node 5.3",
        "distance": 50
      },
      {
        "source": "Node 5",
        "target": "Node 5.4",
        "distance": 50
      },
      {
        "source": "Node 5",
        "target": "Node 5.5",
        "distance": 50
      }
    ]
  }
  interface CustomNodeProps { node: ComputedNode<{ id: string; size: number; color: string }>; }
const CustomNode = ({ node }: CustomNodeProps) => ( <g transform={`translate(${node.x},${node.y})`}> <circle r={node.size / 2} fill={node.color} stroke={node.borderColor} strokeWidth={node.borderWidth} /> <text x={0} y={0} textAnchor="middle" dominantBaseline="central" style={{ fontSize: 10, fill: '#000' }} > {node.data.id} ({node.data.size}) </text> </g> );
const MyResponsiveNetwork: React.FC = () => (
  <ResponsiveNetwork
    data={data}
    margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
    linkDistance={(e) => e.distance}
    centeringStrength={0.3}
    repulsivity={6}
    nodeSize={(n) => n.size}
    activeNodeSize={(n) => 1.5 * n.size}
    nodeColor={(e) => e.color}
    nodeBorderWidth={1}
    nodeBorderColor={{
      from: "color",
      modifiers: [["darker", 0.8]],
    }}
    linkThickness={(n) => 2 + 2 * n.target.data.height}
    linkBlendMode="multiply"
    motionConfig="wobbly"
    nodeTooltip={({node}) =>{
        return ( <div> <strong>{node.data.id}</strong> <br /> Size: {node.data.size} </div> )
    }}
    nodeComponent={CustomNode}
  />
);

export default MyResponsiveNetwork;
