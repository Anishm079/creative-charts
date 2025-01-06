import React, { useEffect } from "react";
import { AgChartOptions, AgCharts } from "ag-charts-community";

const ChartComponent: React.FC = () => {
  useEffect(() => {
    const options: AgChartOptions = {
      container: document.getElementById("myChart"),
      data: getData(),
      background:{
        fill: "transparent"
      },
      series: [
        {
          type: "sunburst",
          labelKey: "name",
          secondaryLabelKey: "size",
          sizeKey: "size",
          secondaryLabel: {
            formatter: ({ value }) =>
              value != null ? `${value.toFixed(0)} kb` : undefined,
            fontFamily: '"Dancing Script", serif',
          },
          tooltip: {
            renderer: ({ datum }) => ({
              data:
                datum?.size != null
                  ? [{ label: `Size`, value: `${datum.size.toFixed(0)} kb` }]
                  : undefined,
            }),
          },
        },
      ],
      title: {
        text: "Webpack dependencies",
        fontFamily: '"Dancing Script", serif',
      },
      subtitle: {
        text: "An overview of dependencies' sizes.",
        fontFamily: '"Dancing Script", serif',
      },
      fontFamily: '"Dancing Script", serif',
      backgroundColor: "transparent",
    };

    AgCharts.create(options);
  }, []);

  return (
    <div
      id="myChart"
      style={{
        height: "90dvh",
        width: "90dvw",
        fontFamily: '"Dancing Script", serif',
        background: "linear-gradient(45deg, #e0c3fc, #8ec5fc)",
      }}
    />
  );
};

export default ChartComponent;

function getData() {
  // Placeholder function for fetching data
  return [
    {
      name: "terser",
      children: [
        { name: "dist", children: [{ name: "bundle.min.js", size: 1912 }] },
        {
          name: "lib",
          children: [
            {
              name: "compress",
              children: [
                { name: "index.js", size: 280 },
                { name: "tighten-body.js", size: 120 },
              ],
            },
            { name: "parse.js", size: 248 },
            { name: "ast.js", size: 192 },
            { name: "output.js", size: 160 },
            { name: "mozilla-ast.js", size: 120 },
          ],
        },
        { name: "tools", children: [{ name: "domprops.js", size: 336 }] },
      ],
    },
    {
      name: "ajv",
      children: [
        {
          name: "dist",
          children: [
            { name: "ajv.bundle.js", size: 536 },
            { name: "ajv.min.js", size: 240 },
          ],
        },
      ],
    },
    {
      name: "source-map",
      children: [
        {
          name: "dist",
          children: [
            { name: "source-map.debug.js", size: 536 },
            { name: "source-map.js", size: 216 },
          ],
        },
      ],
    },
    { name: "neo-async", children: [{ name: "async.js", size: 464 }] },
    {
      name: "acorn",
      children: [{ name: "dist", children: [{ name: "acorn.js", size: 456 }] }],
    },
    {
      name: "electron-to-chromium",
      children: [
        { name: "full-versions.js", size: 136 },
        { name: "full-chromium-versions.js", size: 96 },
      ],
    },
    {
      name: "@webassemblyjs",
      children: [
        {
          name: "wasm-parser",
          children: [
            { name: "lib", children: [{ name: "decoder.js", size: 120 }] },
          ],
        },
        {
          name: "ast",
          children: [{ name: "lib", children: [{ name: "nodes.js", size: 88 }] }],
        },
      ],
    },
    {
      name: "source-map-support",
      children: [{ name: "browser-source-map-support.js", size: 112 }],
    },
    {
      name: "uri-js",
      children: [
        {
          name: "dist",
          children: [
            { name: "es5", children: [{ name: "uri.all.js", size: 112 }] },
          ],
        },
      ],
    },
    {
      name: "@xtuc",
      children: [
        {
          name: "long",
          children: [{ name: "src", children: [{ name: "long.js", size: 88 }] }],
        },
      ],
    },
  ];
}
