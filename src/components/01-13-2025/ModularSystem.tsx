import React from "react";
import { ResponsiveSunburst } from "@nivo/sunburst";

interface DataItem {
  name: string;
  loc?: number;
  color: string;
  children?: DataItem[];
}

const data: DataItem = {
  name: "nivo",
  color: "hsl(294, 70%, 50%)",
  children: [
    {
      name: "viz",
      color: "hsl(211, 70%, 50%)",
      children: [
        {
          name: "stack",
          color: "hsl(168, 70%, 50%)",
          children: [
            {
              name: "cchart",
              color: "hsl(179, 70%, 50%)",
              loc: 88458,
            },
            {
              name: "xAxis",
              color: "hsl(228, 70%, 50%)",
              loc: 102102,
            },
            {
              name: "yAxis",
              color: "hsl(260, 70%, 50%)",
              loc: 15758,
            },
            {
              name: "layers",
              color: "hsl(145, 70%, 50%)",
              loc: 107934,
            },
          ],
        },
        {
          name: "ppie",
          color: "hsl(117, 70%, 50%)",
          children: [
            {
              name: "chart",
              color: "hsl(33, 70%, 50%)",
              children: [
                {
                  name: "pie",
                  color: "hsl(117, 70%, 50%)",
                  children: [
                    {
                      name: "outline",
                      color: "hsl(85, 70%, 50%)",
                      loc: 175597,
                    },
                    {
                      name: "slices",
                      color: "hsl(97, 70%, 50%)",
                      loc: 55388,
                    },
                    {
                      name: "bbox",
                      color: "hsl(183, 70%, 50%)",
                      loc: 16219,
                    },
                  ],
                },
                {
                  name: "donut",
                  color: "hsl(309, 70%, 50%)",
                  loc: 153501,
                },
                {
                  name: "gauge",
                  color: "hsl(146, 70%, 50%)",
                  loc: 139828,
                },
              ],
            },
            {
              name: "legends",
              color: "hsl(45, 70%, 50%)",
              loc: 192866,
            },
          ],
        },
      ],
    },
    {
      name: "colors",
      color: "hsl(34, 70%, 50%)",
      children: [
        {
          name: "rgb",
          color: "hsl(102, 70%, 50%)",
          loc: 114646,
        },
        {
          name: "hsl",
          color: "hsl(169, 70%, 50%)",
          loc: 164492,
        },
      ],
    },
    {
      name: "utils",
      color: "hsl(353, 70%, 50%)",
      children: [
        {
          name: "randomize",
          color: "hsl(0, 70%, 50%)",
          loc: 99703,
        },
        {
          name: "resetClock",
          color: "hsl(228, 70%, 50%)",
          loc: 106966,
        },
        {
          name: "noop",
          color: "hsl(141, 70%, 50%)",
          loc: 181007,
        },
        {
          name: "tick",
          color: "hsl(127, 70%, 50%)",
          loc: 125629,
        },
        {
          name: "forceGC",
          color: "hsl(316, 70%, 50%)",
          loc: 32429,
        },
        {
          name: "stackTrace",
          color: "hsl(92, 70%, 50%)",
          loc: 89911,
        },
        {
          name: "dbg",
          color: "hsl(145, 70%, 50%)",
          loc: 69606,
        },
      ],
    },
    {
      name: "generators",
      color: "hsl(121, 70%, 50%)",
      children: [
        {
          name: "address",
          color: "hsl(279, 70%, 50%)",
          loc: 104223,
        },
        {
          name: "city",
          color: "hsl(44, 70%, 50%)",
          loc: 88366,
        },
        {
          name: "animal",
          color: "hsl(350, 70%, 50%)",
          loc: 131642,
        },
        {
          name: "movie",
          color: "hsl(26, 70%, 50%)",
          loc: 55741,
        },
        {
          name: "user",
          color: "hsl(292, 70%, 50%)",
          loc: 99560,
        },
      ],
    },
    {
      name: "set",
      color: "hsl(150, 70%, 50%)",
      children: [
        {
          name: "clone",
          color: "hsl(316, 70%, 50%)",
          loc: 42541,
        },
        {
          name: "intersect",
          color: "hsl(348, 70%, 50%)",
          loc: 78518,
        },
        {
          name: "merge",
          color: "hsl(72, 70%, 50%)",
          loc: 118235,
        },
        {
          name: "reverse",
          color: "hsl(47, 70%, 50%)",
          loc: 139847,
        },
        {
          name: "toArray",
          color: "hsl(207, 70%, 50%)",
          loc: 105658,
        },
        {
          name: "toObject",
          color: "hsl(163, 70%, 50%)",
          loc: 10061,
        },
        {
          name: "fromCSV",
          color: "hsl(146, 70%, 50%)",
          loc: 156031,
        },
        {
          name: "slice",
          color: "hsl(25, 70%, 50%)",
          loc: 37944,
        },
        {
          name: "append",
          color: "hsl(184, 70%, 50%)",
          loc: 111207,
        },
        {
          name: "prepend",
          color: "hsl(29, 70%, 50%)",
          loc: 100022,
        },
        {
          name: "shuffle",
          color: "hsl(217, 70%, 50%)",
          loc: 179118,
        },
        {
          name: "pick",
          color: "hsl(195, 70%, 50%)",
          loc: 166624,
        },
        {
          name: "plouc",
          color: "hsl(273, 70%, 50%)",
          loc: 69963,
        },
      ],
    },
    {
      name: "text",
      color: "hsl(148, 70%, 50%)",
      children: [
        {
          name: "trim",
          color: "hsl(299, 70%, 50%)",
          loc: 185199,
        },
        {
          name: "slugify",
          color: "hsl(1, 70%, 50%)",
          loc: 183829,
        },
        {
          name: "snakeCase",
          color: "hsl(354, 70%, 50%)",
          loc: 125643,
        },
        {
          name: "camelCase",
          color: "hsl(114, 70%, 50%)",
          loc: 130087,
        },
        {
          name: "repeat",
          color: "hsl(300, 70%, 50%)",
          loc: 156905,
        },
        {
          name: "padLeft",
          color: "hsl(19, 70%, 50%)",
          loc: 93009,
        },
        {
          name: "padRight",
          color: "hsl(249, 70%, 50%)",
          loc: 167409,
        },
        {
          name: "sanitize",
          color: "hsl(20, 70%, 50%)",
          loc: 156169,
        },
        {
          name: "ploucify",
          color: "hsl(12, 70%, 50%)",
          loc: 667,
        },
      ],
    },
    {
      name: "misc",
      color: "hsl(89, 70%, 50%)",
      children: [
        {
          name: "greetings",
          color: "hsl(220, 70%, 50%)",
          children: [
            {
              name: "hey",
              color: "hsl(87, 70%, 50%)",
              loc: 121952,
            },
            {
              name: "HOWDY",
              color: "hsl(161, 70%, 50%)",
              loc: 133636,
            },
            {
              name: "aloha",
              color: "hsl(63, 70%, 50%)",
              loc: 140345,
            },
            {
              name: "AHOY",
              color: "hsl(302, 70%, 50%)",
              loc: 79659,
            },
          ],
        },
        {
          name: "other",
          color: "hsl(186, 70%, 50%)",
          loc: 127226,
        },
        {
          name: "path",
          color: "hsl(318, 70%, 50%)",
          children: [
            {
              name: "pathA",
              color: "hsl(179, 70%, 50%)",
              loc: 64115,
            },
            {
              name: "pathB",
              color: "hsl(61, 70%, 50%)",
              children: [
                {
                  name: "pathB1",
                  color: "hsl(169, 70%, 50%)",
                  loc: 177265,
                },
                {
                  name: "pathB2",
                  color: "hsl(78, 70%, 50%)",
                  loc: 69125,
                },
                {
                  name: "pathB3",
                  color: "hsl(354, 70%, 50%)",
                  loc: 117741,
                },
                {
                  name: "pathB4",
                  color: "hsl(128, 70%, 50%)",
                  loc: 112555,
                },
              ],
            },
            {
              name: "pathC",
              color: "hsl(275, 70%, 50%)",
              children: [
                {
                  name: "pathC1",
                  color: "hsl(330, 70%, 50%)",
                  loc: 174649,
                },
                {
                  name: "pathC2",
                  color: "hsl(193, 70%, 50%)",
                  loc: 157246,
                },
                {
                  name: "pathC3",
                  color: "hsl(301, 70%, 50%)",
                  loc: 7126,
                },
                {
                  name: "pathC4",
                  color: "hsl(322, 70%, 50%)",
                  loc: 11077,
                },
                {
                  name: "pathC5",
                  color: "hsl(9, 70%, 50%)",
                  loc: 183944,
                },
                {
                  name: "pathC6",
                  color: "hsl(77, 70%, 50%)",
                  loc: 31174,
                },
                {
                  name: "pathC7",
                  color: "hsl(146, 70%, 50%)",
                  loc: 127875,
                },
                {
                  name: "pathC8",
                  color: "hsl(347, 70%, 50%)",
                  loc: 105746,
                },
                {
                  name: "pathC9",
                  color: "hsl(73, 70%, 50%)",
                  loc: 195825,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

const MyResponsiveSunburst: React.FC = () => (
  <ResponsiveSunburst
    data={data}
    margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
    id="name"
    value="loc"
    cornerRadius={2}
    borderColor={{ theme: "background" }}
    colors={{ scheme: "nivo" }}
    childColor={{
      from: "color",
      modifiers: [["brighter", 0.1]],
    }}
    enableArcLabels={true}
    arcLabelsSkipAngle={10}
    arcLabelsTextColor={{
      from: "color",
      modifiers: [["darker", 1.4]],
    }}
  />
);

export default MyResponsiveSunburst;
