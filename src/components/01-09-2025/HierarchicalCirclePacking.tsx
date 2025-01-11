import React from 'react';
import { ResponsiveCirclePacking } from '@nivo/circle-packing';

interface DataNode {
  name: string;
  loc?: number;
  children?: DataNode[];
  color?:string;
}

const data: DataNode ={
    "name": "nivo",
    "color": "hsl(61, 70%, 50%)",
    "children": [
      {
        "name": "viz",
        "color": "hsl(253, 70%, 50%)",
        "children": [
          {
            "name": "stack",
            "color": "hsl(319, 70%, 50%)",
            "children": [
              {
                "name": "cchart",
                "color": "hsl(316, 70%, 50%)",
                "loc": 77519
              },
              {
                "name": "xAxis",
                "color": "hsl(318, 70%, 50%)",
                "loc": 114869
              },
              {
                "name": "yAxis",
                "color": "hsl(71, 70%, 50%)",
                "loc": 148870
              },
              {
                "name": "layers",
                "color": "hsl(34, 70%, 50%)",
                "loc": 148292
              }
            ]
          },
          {
            "name": "ppie",
            "color": "hsl(347, 70%, 50%)",
            "children": [
              {
                "name": "chart",
                "color": "hsl(75, 70%, 50%)",
                "children": [
                  {
                    "name": "pie",
                    "color": "hsl(341, 70%, 50%)",
                    "children": [
                      {
                        "name": "outline",
                        "color": "hsl(295, 70%, 50%)",
                        "loc": 157638
                      },
                      {
                        "name": "slices",
                        "color": "hsl(51, 70%, 50%)",
                        "loc": 97388
                      },
                      {
                        "name": "bbox",
                        "color": "hsl(78, 70%, 50%)",
                        "loc": 742
                      }
                    ]
                  },
                  {
                    "name": "donut",
                    "color": "hsl(176, 70%, 50%)",
                    "loc": 122927
                  },
                  {
                    "name": "gauge",
                    "color": "hsl(64, 70%, 50%)",
                    "loc": 112268
                  }
                ]
              },
              {
                "name": "legends",
                "color": "hsl(168, 70%, 50%)",
                "loc": 93568
              }
            ]
          }
        ]
      },
      {
        "name": "colors",
        "color": "hsl(69, 70%, 50%)",
        "children": [
          {
            "name": "rgb",
            "color": "hsl(325, 70%, 50%)",
            "loc": 140273
          },
          {
            "name": "hsl",
            "color": "hsl(5, 70%, 50%)",
            "loc": 24416
          }
        ]
      },
      {
        "name": "utils",
        "color": "hsl(343, 70%, 50%)",
        "children": [
          {
            "name": "randomize",
            "color": "hsl(228, 70%, 50%)",
            "loc": 142230
          },
          {
            "name": "resetClock",
            "color": "hsl(140, 70%, 50%)",
            "loc": 192080
          },
          {
            "name": "noop",
            "color": "hsl(93, 70%, 50%)",
            "loc": 25245
          },
          {
            "name": "tick",
            "color": "hsl(155, 70%, 50%)",
            "loc": 154894
          },
          {
            "name": "forceGC",
            "color": "hsl(343, 70%, 50%)",
            "loc": 137232
          },
          {
            "name": "stackTrace",
            "color": "hsl(71, 70%, 50%)",
            "loc": 178144
          },
          {
            "name": "dbg",
            "color": "hsl(268, 70%, 50%)",
            "loc": 150928
          }
        ]
      },
      {
        "name": "generators",
        "color": "hsl(223, 70%, 50%)",
        "children": [
          {
            "name": "address",
            "color": "hsl(55, 70%, 50%)",
            "loc": 63993
          },
          {
            "name": "city",
            "color": "hsl(172, 70%, 50%)",
            "loc": 58430
          },
          {
            "name": "animal",
            "color": "hsl(79, 70%, 50%)",
            "loc": 168516
          },
          {
            "name": "movie",
            "color": "hsl(192, 70%, 50%)",
            "loc": 182670
          },
          {
            "name": "user",
            "color": "hsl(160, 70%, 50%)",
            "loc": 70378
          }
        ]
      },
      {
        "name": "set",
        "color": "hsl(57, 70%, 50%)",
        "children": [
          {
            "name": "clone",
            "color": "hsl(103, 70%, 50%)",
            "loc": 110997
          },
          {
            "name": "intersect",
            "color": "hsl(42, 70%, 50%)",
            "loc": 121940
          },
          {
            "name": "merge",
            "color": "hsl(274, 70%, 50%)",
            "loc": 175579
          },
          {
            "name": "reverse",
            "color": "hsl(305, 70%, 50%)",
            "loc": 38538
          },
          {
            "name": "toArray",
            "color": "hsl(219, 70%, 50%)",
            "loc": 99691
          },
          {
            "name": "toObject",
            "color": "hsl(333, 70%, 50%)",
            "loc": 94559
          },
          {
            "name": "fromCSV",
            "color": "hsl(195, 70%, 50%)",
            "loc": 87936
          },
          {
            "name": "slice",
            "color": "hsl(126, 70%, 50%)",
            "loc": 49836
          },
          {
            "name": "append",
            "color": "hsl(51, 70%, 50%)",
            "loc": 108719
          },
          {
            "name": "prepend",
            "color": "hsl(272, 70%, 50%)",
            "loc": 137743
          },
          {
            "name": "shuffle",
            "color": "hsl(227, 70%, 50%)",
            "loc": 158022
          },
          {
            "name": "pick",
            "color": "hsl(289, 70%, 50%)",
            "loc": 34016
          },
          {
            "name": "plouc",
            "color": "hsl(141, 70%, 50%)",
            "loc": 48499
          }
        ]
      },
      {
        "name": "text",
        "color": "hsl(349, 70%, 50%)",
        "children": [
          {
            "name": "trim",
            "color": "hsl(116, 70%, 50%)",
            "loc": 20756
          },
          {
            "name": "slugify",
            "color": "hsl(45, 70%, 50%)",
            "loc": 146053
          },
          {
            "name": "snakeCase",
            "color": "hsl(32, 70%, 50%)",
            "loc": 12471
          },
          {
            "name": "camelCase",
            "color": "hsl(360, 70%, 50%)",
            "loc": 141310
          },
          {
            "name": "repeat",
            "color": "hsl(165, 70%, 50%)",
            "loc": 191760
          },
          {
            "name": "padLeft",
            "color": "hsl(267, 70%, 50%)",
            "loc": 175941
          },
          {
            "name": "padRight",
            "color": "hsl(232, 70%, 50%)",
            "loc": 81525
          },
          {
            "name": "sanitize",
            "color": "hsl(45, 70%, 50%)",
            "loc": 116126
          },
          {
            "name": "ploucify",
            "color": "hsl(82, 70%, 50%)",
            "loc": 96564
          }
        ]
      },
      {
        "name": "misc",
        "color": "hsl(156, 70%, 50%)",
        "children": [
          {
            "name": "greetings",
            "color": "hsl(218, 70%, 50%)",
            "children": [
              {
                "name": "hey",
                "color": "hsl(318, 70%, 50%)",
                "loc": 141218
              },
              {
                "name": "HOWDY",
                "color": "hsl(63, 70%, 50%)",
                "loc": 133018
              },
              {
                "name": "aloha",
                "color": "hsl(252, 70%, 50%)",
                "loc": 124172
              },
              {
                "name": "AHOY",
                "color": "hsl(50, 70%, 50%)",
                "loc": 150152
              }
            ]
          },
          {
            "name": "other",
            "color": "hsl(262, 70%, 50%)",
            "loc": 7991
          },
          {
            "name": "path",
            "color": "hsl(313, 70%, 50%)",
            "children": [
              {
                "name": "pathA",
                "color": "hsl(311, 70%, 50%)",
                "loc": 51067
              },
              {
                "name": "pathB",
                "color": "hsl(212, 70%, 50%)",
                "children": [
                  {
                    "name": "pathB1",
                    "color": "hsl(320, 70%, 50%)",
                    "loc": 19822
                  },
                  {
                    "name": "pathB2",
                    "color": "hsl(313, 70%, 50%)",
                    "loc": 42142
                  },
                  {
                    "name": "pathB3",
                    "color": "hsl(332, 70%, 50%)",
                    "loc": 54318
                  },
                  {
                    "name": "pathB4",
                    "color": "hsl(10, 70%, 50%)",
                    "loc": 36639
                  }
                ]
              },
              {
                "name": "pathC",
                "color": "hsl(116, 70%, 50%)",
                "children": [
                  {
                    "name": "pathC1",
                    "color": "hsl(193, 70%, 50%)",
                    "loc": 51048
                  },
                  {
                    "name": "pathC2",
                    "color": "hsl(324, 70%, 50%)",
                    "loc": 7135
                  },
                  {
                    "name": "pathC3",
                    "color": "hsl(295, 70%, 50%)",
                    "loc": 76718
                  },
                  {
                    "name": "pathC4",
                    "color": "hsl(174, 70%, 50%)",
                    "loc": 146216
                  },
                  {
                    "name": "pathC5",
                    "color": "hsl(332, 70%, 50%)",
                    "loc": 72969
                  },
                  {
                    "name": "pathC6",
                    "color": "hsl(53, 70%, 50%)",
                    "loc": 20721
                  },
                  {
                    "name": "pathC7",
                    "color": "hsl(31, 70%, 50%)",
                    "loc": 78743
                  },
                  {
                    "name": "pathC8",
                    "color": "hsl(158, 70%, 50%)",
                    "loc": 180217
                  },
                  {
                    "name": "pathC9",
                    "color": "hsl(277, 70%, 50%)",
                    "loc": 184592
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  };

const MyResponsiveCirclePacking: React.FC<Props> = () => (
  <ResponsiveCirclePacking
    data={data}
    margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
    id="name"
    value="loc"
    colors={{ scheme: 'nivo' }}
    childColor={{
      from: 'color',
      modifiers: [['brighter', 0.4]],
    }}
    padding={4}
    enableLabels={true}
    labelsFilter={(n) => 2 === n.node.depth}
    labelsSkipRadius={10}
    labelTextColor={{
      from: 'color',
      modifiers: [['darker', 2]],
    }}
    borderWidth={1}
    borderColor={{
      from: 'color',
      modifiers: [['darker', 0.5]],
    }}
    defs={[
      {
        id: 'lines',
        type: 'patternLines',
        background: 'none',
        color: 'inherit',
        rotation: -45,
        lineWidth: 5,
        spacing: 8,
      },
    ]}
    fill={[
      {
        match: {
          depth: 1,
        },
        id: 'lines',
      },
    ]}
  />
);

export default MyResponsiveCirclePacking;