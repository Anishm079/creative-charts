import React from "react";
import { ResponsiveTree } from "@nivo/tree";

interface Node {
  name: string;
  color?: string;
  [key: string]: any;
}

interface Link {
  source: string;
  target: string;
  [key: string]: any;
}

interface TreeData {
  name: string;
  children?: TreeData[];
  [key: string]: any;
}

const data: TreeData = {
  name: "Store",
  color: "hsl(109, 70%, 50%)",
  children: [
    {
      name: "Products",
      color: "hsl(228, 70%, 50%)",
      children: [
        {
          name: "Electronics",
          color: "hsl(126, 70%, 50%)",
          children: [
            {
              name: "Smartphones",
              color: "hsl(48, 70%, 50%)",
              children: [
                {
                  name: "Brand A",
                  color: "hsl(234, 70%, 50%)",
                  loc: 79653,
                },
                {
                  name: "Brand B",
                  color: "hsl(49, 70%, 50%)",
                  loc: 185303,
                },
                {
                  name: "Accessories",
                  color: "hsl(32, 70%, 50%)",
                  loc: 155958,
                },
                {
                  name: "Chargers",
                  color: "hsl(18, 70%, 50%)",
                  loc: 165694,
                },
              ],
            },
            {
              name: "Laptops",
              color: "hsl(319, 70%, 50%)",
              children: [
                {
                  name: "Brand X",
                  color: "hsl(292, 70%, 50%)",
                  loc: 34468,
                },
                {
                  name: "Brand Y",
                  color: "hsl(142, 70%, 50%)",
                  loc: 53715,
                },
                {
                  name: "Laptop Accessories",
                  color: "hsl(199, 70%, 50%)",
                  loc: 53113,
                },
              ],
            },
            {
              name: "Headphones",
              color: "hsl(327, 70%, 50%)",
              children: [
                {
                  name: "Wireless",
                  color: "hsl(349, 70%, 50%)",
                  loc: 118765,
                },
                {
                  name: "Wired",
                  color: "hsl(203, 70%, 50%)",
                  loc: 166446,
                },
              ],
            },
          ],
        },
        {
          name: "Home Appliances",
          color: "hsl(237, 70%, 50%)",
          children: [
            {
              name: "Refrigerators",
              color: "hsl(147, 70%, 50%)",
              children: [
                {
                  name: "Brand X",
                  color: "hsl(13, 70%, 50%)",
                  loc: 120339,
                },
                {
                  name: "Brand Y",
                  color: "hsl(70, 70%, 50%)",
                  loc: 31163,
                },
              ],
            },
            {
              name: "Washing Machines",
              color: "hsl(132, 70%, 50%)",
              children: [
                {
                  name: "Front Load",
                  color: "hsl(173, 70%, 50%)",
                  loc: 69702,
                },
                {
                  name: "Top Load",
                  color: "hsl(175, 70%, 50%)",
                  loc: 198170,
                },
              ],
            },
            {
              name: "Microwaves",
              color: "hsl(250, 70%, 50%)",
              loc: 188980,
            },
            {
              name: "Air Conditioners",
              color: "hsl(50, 70%, 50%)",
              loc: 141780,
            },
            {
              name: "Vacuum Cleaners",
              color: "hsl(220, 70%, 50%)",
              loc: 62723,
            },
          ],
        },
        {
          name: "Furniture",
          color: "hsl(159, 70%, 50%)",
          children: [
            {
              name: "Sofas",
              color: "hsl(90, 70%, 50%)",
              loc: 193603,
            },
            {
              name: "Tables",
              color: "hsl(310, 70%, 50%)",
              loc: 104284,
            },
            {
              name: "Chairs",
              color: "hsl(149, 70%, 50%)",
              loc: 13478,
            },
            {
              name: "Beds",
              color: "hsl(260, 70%, 50%)",
              loc: 117035,
            },
            {
              name: "Cabinets",
              color: "hsl(252, 70%, 50%)",
              loc: 148624,
            },
          ],
        },
        {
          name: "Clothing",
          color: "hsl(282, 70%, 50%)",
          children: [
            {
              name: "Shirts",
              color: "hsl(220, 70%, 50%)",
              loc: 25294,
            },
            {
              name: "Pants",
              color: "hsl(186, 70%, 50%)",
              loc: 166593,
            },
            {
              name: "Jackets",
              color: "hsl(287, 70%, 50%)",
              loc: 134852,
            },
            {
              name: "Dresses",
              color: "hsl(28, 70%, 50%)",
              loc: 81750,
            },
            {
              name: "Shoes",
              color: "hsl(227, 70%, 50%)",
              loc: 86420,
            },
          ],
        },
      ],
    },
    {
      name: "Utilities",
      color: "hsl(23, 70%, 50%)",
      children: [
        {
          name: "Randomize",
          color: "hsl(221, 70%, 50%)",
          loc: 69702,
        },
        {
          name: "ResetClock",
          color: "hsl(53, 70%, 50%)",
          loc: 198170,
        },
        {
          name: "Noop",
          color: "hsl(70, 70%, 50%)",
          loc: 188980,
        },
        {
          name: "Tick",
          color: "hsl(132, 70%, 50%)",
          loc: 141780,
        },
        {
          name: "ForceGC",
          color: "hsl(173, 70%, 50%)",
          loc: 62723,
        },
        {
          name: "StackTrace",
          color: "hsl(350, 70%, 50%)",
          loc: 120339,
        },
        {
          name: "Debug",
          color: "hsl(257, 70%, 50%)",
          loc: 31163,
        },
      ],
    },
    {
      name: "Product Generators",
      color: "hsl(282, 70%, 50%)",
      children: [
        {
          name: "Address",
          color: "hsl(220, 70%, 50%)",
          loc: 140610,
        },
        {
          name: "City",
          color: "hsl(186, 70%, 50%)",
          loc: 182203,
        },
        {
          name: "Animal",
          color: "hsl(287, 70%, 50%)",
          loc: 6369,
        },
        {
          name: "Movie",
          color: "hsl(28, 70%, 50%)",
          loc: 93608,
        },
        {
          name: "User",
          color: "hsl(336, 70%, 50%)",
          loc: 145461,
        },
      ],
    },
    {
      name: "Product Set Operations",
      color: "hsl(159, 70%, 50%)",
      children: [
        {
          name: "Clone",
          color: "hsl(90, 70%, 50%)",
          loc: 104284,
        },
        {
          name: "Intersect",
          color: "hsl(310, 70%, 50%)",
          loc: 13478,
        },
        {
          name: "Merge",
          color: "hsl(149, 70%, 50%)",
          loc: 117035,
        },
        {
          name: "Reverse",
          color: "hsl(260, 70%, 50%)",
          loc: 148624,
        },
        {
          name: "ToArray",
          color: "hsl(252, 70%, 50%)",
          loc: 27628,
        },
        {
          name: "ToObject",
          color: "hsl(23, 70%, 50%)",
          loc: 131323,
        },
        {
          name: "FromCSV",
          color: "hsl(273, 70%, 50%)",
          loc: 81750,
        },
        {
          name: "Slice",
          color: "hsl(61, 70%, 50%)",
          loc: 86420,
        },
        {
          name: "Append",
          color: "hsl(3, 70%, 50%)",
          loc: 5444,
        },
        {
          name: "Prepend",
          color: "hsl(222, 70%, 50%)",
          loc: 152516,
        },
        {
          name: "Shuffle",
          color: "hsl(169, 70%, 50%)",
          loc: 25294,
        },
        {
          name: "Pick",
          color: "hsl(191, 70%, 50%)",
          loc: 166593,
        },
        {
          name: "Plouc",
          color: "hsl(40, 70%, 50%)",
          loc: 134852,
        },
      ],
    },
    {
      name: "Text Operations",
      color: "hsl(173, 70%, 50%)",
      children: [
        {
          name: "Trim",
          color: "hsl(59, 70%, 50%)",
          loc: 124775,
        },
        {
          name: "Slugify",
          color: "hsl(197, 70%, 50%)",
          loc: 142189,
        },
        {
          name: "SnakeCase",
          color: "hsl(53, 70%, 50%)",
          loc: 134687,
        },
        {
          name: "CamelCase",
          color: "hsl(125, 70%, 50%)",
          loc: 1923,
        },
        {
          name: "Repeat",
          color: "hsl(155, 70%, 50%)",
          loc: 134278,
        },
        {
          name: "PadLeft",
          color: "hsl(275, 70%, 50%)",
          loc: 79737,
        },
        {
          name: "PadRight",
          color: "hsl(6, 70%, 50%)",
          loc: 69711,
        },
        {
          name: "Sanitize",
          color: "hsl(197, 70%, 50%)",
          loc: 100322,
        },
        {
          name: "Ploucify",
          color: "hsl(242, 70%, 50%)",
          loc: 14701,
        },
      ],
    },
    {
      name: "Miscellaneous",
      color: "hsl(226, 70%, 50%)",
      children: [
        {
          name: "Greetings",
          color: "hsl(217, 70%, 50%)",
          children: [
            {
              name: "Hey",
              color: "hsl(296, 70%, 50%)",
              loc: 199746,
            },
            {
              name: "HOWDY",
              color: "hsl(15, 70%, 50%)",
              loc: 82568,
            },
            {
              name: "Aloha",
              color: "hsl(135, 70%, 50%)",
              loc: 142771,
            },
            {
              name: "AHOY",
              color: "hsl(317, 70%, 50%)",
              loc: 15001,
            },
          ],
        },
        {
          name: "Other",
          color: "hsl(196, 70%, 50%)",
          loc: 97348,
        },
        {
          name: "Paths",
          color: "hsl(0, 70%, 50%)",
          children: [
            {
              name: "Path A",
              color: "hsl(321, 70%, 50%)",
              loc: 66663,
            },
            {
              name: "Path B",
              color: "hsl(112, 70%, 50%)",
              children: [
                {
                  name: "Path B1",
                  color: "hsl(96, 70%, 50%)",
                  loc: 174323,
                },
                {
                  name: "Path B2",
                  color: "hsl(314, 70%, 50%)",
                  loc: 76615,
                },
                {
                  name: "Path B3",
                  color: "hsl(210, 70%, 50%)",
                  loc: 61257,
                },
                {
                  name: "Path B4",
                  color: "hsl(89, 70%, 50%)",
                  loc: 36704,
                },
              ],
            },
            {
              name: "Path C",
              color: "hsl(346, 70%, 50%)",
              children: [
                {
                  name: "Path C1",
                  color: "hsl(131, 70%, 50%)",
                  loc: 123042,
                },
                {
                  name: "Path C2",
                  color: "hsl(294, 70%, 50%)",
                  loc: 139412,
                },
                {
                  name: "Path C3",
                  color: "hsl(244, 70%, 50%)",
                  loc: 59581,
                },
                {
                  name: "Path C4",
                  color: "hsl(252, 70%, 50%)",
                  loc: 30043,
                },
                {
                  name: "Path C5",
                  color: "hsl(186, 70%, 50%)",
                  loc: 169655,
                },
                {
                  name: "Path C6",
                  color: "hsl(67, 70%, 50%)",
                  loc: 53867,
                },
                {
                  name: "Path C7",
                  color: "hsl(313, 70%, 50%)",
                  loc: 114649,
                },
                {
                  name: "Path C8",
                  color: "hsl(263, 70%, 50%)",
                  loc: 3821,
                },
                {
                  name: "Path C9",
                  color: "hsl(317, 70%, 50%)",
                  loc: 178955,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
const MyResponsiveTree: React.FC = () => (
  <ResponsiveTree
    data={data}
    identity="name"
    activeNodeSize={24}
    inactiveNodeSize={12}
    nodeColor={{ scheme: "tableau10" }}
    fixNodeColorAtDepth={1}
    linkThickness={2}
    activeLinkThickness={8}
    inactiveLinkThickness={2}
    linkColor={{
      from: "target.color",
      modifiers: [["opacity", 0.4]],
    }}
    margin={{ top: 90, right: 90, bottom: 90, left: 90 }}
    motionConfig="stiff"
    meshDetectionRadius={80}
  />
);

export default MyResponsiveTree;
