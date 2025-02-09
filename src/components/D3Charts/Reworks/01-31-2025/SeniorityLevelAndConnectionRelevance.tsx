import { ResponsiveNetwork } from '@nivo/network';

interface Node {
    id: string;
    size: number;
    color: string;
    [key: string]: any;
}

interface Link {
    source: string;
    target: string;
    distance: number;
    [key: string]: any;
}

interface NetworkData {
    nodes: Node[];
    links: Link[];
}

const data: NetworkData = {
    "nodes": [
        {
            "id": "CEO",
            "height": 2,
            "size": 60,
            "color": "rgb(244, 117, 96)"
        },
        {
            "id": "Finance Department",
            "height": 1,
            "size": 45,
            "color": "rgb(97, 205, 187)"
        },
        {
            "id": "HR Department",
            "height": 1,
            "size": 45,
            "color": "rgb(97, 205, 187)"
        },
        {
            "id": "IT Department",
            "height": 1,
            "size": 45,
            "color": "rgb(97, 205, 187)"
        },
        {
            "id": "Finance - John",
            "height": 0,
            "size": 30,
            "color": "rgb(232, 193, 160)"
        },
        {
            "id": "Finance - Alice",
            "height": 0,
            "size": 30,
            "color": "rgb(232, 193, 160)"
        },
        {
            "id": "HR - Mark",
            "height": 0,
            "size": 30,
            "color": "rgb(232, 193, 160)"
        },
        {
            "id": "IT - Sarah",
            "height": 0,
            "size": 30,
            "color": "rgb(232, 193, 160)"
        }
    ],
    "links": [
        {
            "source": "CEO",
            "target": "Finance Department",
            "distance": 120
        },
        {
            "source": "CEO",
            "target": "HR Department",
            "distance": 120
        },
        {
            "source": "CEO",
            "target": "IT Department",
            "distance": 120
        },
        {
            "source": "Finance Department",
            "target": "Finance - John",
            "distance": 90
        },
        {
            "source": "Finance Department",
            "target": "Finance - Alice",
            "distance": 90
        },
        {
            "source": "HR Department",
            "target": "HR - Mark",
            "distance": 90
        },
        {
            "source": "IT Department",
            "target": "IT - Sarah",
            "distance": 90
        }
    ]
};

const CustomNode = ({ node }: { node: Node }) => (
    <g transform={`translate(${node.x},${node.y})`}>
        <circle
            r={node.size / 2}
            fill={node.color}
            stroke={node.borderColor}
            strokeWidth={node.borderWidth}
        />
        <text
            textAnchor="middle"
            y={-node.size / 2 - 10}
            style={{
                fill: 'black',
                fontSize: 12,
                fontWeight: 'bold',
                pointerEvents: 'none',
            }}
        >
            {node.id} ({node.size})
        </text>
    </g>
);

const MyResponsiveNetwork: React.FC = () => (
    <div style={{ width: '100vw', height: '100vh' }}>
        <ResponsiveNetwork
            data={data}
            margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
            repulsivity={50}
            linkDistance={(link: Link) => link.distance}
            centeringStrength={0.3}
            nodeSize={(node: Node) => node.size}
            activeNodeSize={(node: Node) => 1.5 * node.size}
            nodeColor={(node: Node) => node.color}
            nodeBorderWidth={1}
            nodeBorderColor={{
                from: 'color',
                modifiers: [['darker', 0.8]],
            }}
            linkThickness={(link) => 2 + 2 * link.target.data.height}
            linkBlendMode="multiply"
            motionConfig="wobbly"
            nodeComponent={CustomNode} // Use custom node component
        />
    </div>
);

export default MyResponsiveNetwork;
