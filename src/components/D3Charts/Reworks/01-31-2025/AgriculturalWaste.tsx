import * as d3 from "d3";
import {
  sankey as d3Sankey,
  sankeyLinkHorizontal,
  sankeyLeft,
  SankeyNodeMinimal,
  SankeyLinkMinimal,
} from "d3-sankey";
import React from "react";

// Extend the minimal types to include your custom properties
interface Node extends SankeyNodeMinimal {
  name: string;
  category?: string;
  // value is added by the sankey layout.
  value?: number;
}

interface Link extends SankeyLinkMinimal {
  // After layout, source and target become Node objects.
  source: Node;
  target: Node;
  value: number;
  width?: number;
  uid?: string;
}

// Note: our input data uses strings for source/target,
// but the sankey generator will convert them to Node objects.
const data: {
  nodes: Node[];
  links: { source: string; target: string; value: number }[];
} = {
  nodes: [
    { name: "Agricultural 'waste'", category: "Agricultural" },
    { name: "Bio-conversion", category: "Bio-conversion" },
    { name: "Liquid", category: "Liquid" },
    { name: "Losses", category: "Losses" },
    { name: "Solid", category: "Solid" },
    { name: "Gas", category: "Gas" },
    { name: "Biofuel imports", category: "Biofuel" },
    { name: "Biomass imports", category: "Biomass" },
    { name: "Coal imports", category: "Coal" },
    { name: "Coal", category: "Coal" },
    { name: "Coal reserves", category: "Coal" },
    { name: "District heating", category: "District" },
    { name: "Industry", category: "Industry" },
    { name: "Heating and cooling - commercial", category: "Heating" },
    { name: "Heating and cooling - homes", category: "Heating" },
    { name: "Electricity grid", category: "Electricity" },
    { name: "Over generation / exports", category: "Over" },
    { name: "H2 conversion", category: "H2" },
    { name: "Road transport", category: "Road" },
    { name: "Agriculture", category: "Agriculture" },
    { name: "Rail transport", category: "Rail" },
    { name: "Lighting & appliances - commercial", category: "Lighting" },
    { name: "Lighting & appliances - homes", category: "Lighting" },
    { name: "Gas imports", category: "Gas" },
    { name: "Ngas", category: "Ngas" },
    { name: "Gas reserves", category: "Gas" },
    { name: "Thermal generation", category: "Thermal" },
    { name: "Geothermal", category: "Geothermal" },
    { name: "H2", category: "H2" },
    { name: "Hydro", category: "Hydro" },
    { name: "International shipping", category: "International" },
    { name: "Domestic aviation", category: "Domestic" },
    { name: "International aviation", category: "International" },
    { name: "National navigation", category: "National" },
    { name: "Marine algae", category: "Marine" },
    { name: "Nuclear", category: "Nuclear" },
    { name: "Oil imports", category: "Oil" },
    { name: "Oil", category: "Oil" },
    { name: "Oil reserves", category: "Oil" },
    { name: "Other waste", category: "Other" },
    { name: "Pumped heat", category: "Pumped" },
    { name: "Solar PV", category: "Solar" },
    { name: "Solar Thermal", category: "Solar" },
    { name: "Solar", category: "Solar" },
    { name: "Tidal", category: "Tidal" },
    { name: "UK land based bioenergy", category: "UK" },
    { name: "Wave", category: "Wave" },
    { name: "Wind", category: "Wind" },
  ],
  links: [
    { source: "Agricultural 'waste'", target: "Bio-conversion", value: 124.729 },
    { source: "Bio-conversion", target: "Liquid", value: 0.597 },
    { source: "Bio-conversion", target: "Losses", value: 26.862 },
    { source: "Bio-conversion", target: "Solid", value: 280.322 },
    { source: "Bio-conversion", target: "Gas", value: 81.144 },
    { source: "Biofuel imports", target: "Liquid", value: 35 },
    { source: "Biomass imports", target: "Solid", value: 35 },
    { source: "Coal imports", target: "Coal", value: 11.606 },
    { source: "Coal reserves", target: "Coal", value: 63.965 },
    { source: "Coal", target: "Solid", value: 75.571 },
    { source: "District heating", target: "Industry", value: 10.639 },
    { source: "District heating", target: "Heating and cooling - commercial", value: 22.505 },
    { source: "District heating", target: "Heating and cooling - homes", value: 46.184 },
    { source: "Electricity grid", target: "Over generation / exports", value: 104.453 },
    { source: "Electricity grid", target: "Heating and cooling - homes", value: 113.726 },
    { source: "Electricity grid", target: "H2 conversion", value: 27.14 },
    { source: "Electricity grid", target: "Industry", value: 342.165 },
    { source: "Electricity grid", target: "Road transport", value: 37.797 },
    { source: "Electricity grid", target: "Agriculture", value: 4.412 },
    { source: "Electricity grid", target: "Heating and cooling - commercial", value: 40.858 },
    { source: "Electricity grid", target: "Losses", value: 56.691 },
    { source: "Electricity grid", target: "Rail transport", value: 7.863 },
    { source: "Electricity grid", target: "Lighting & appliances - commercial", value: 90.008 },
    { source: "Electricity grid", target: "Lighting & appliances - homes", value: 93.494 },
    { source: "Gas imports", target: "Ngas", value: 40.719 },
    { source: "Gas reserves", target: "Ngas", value: 82.233 },
    { source: "Gas", target: "Heating and cooling - commercial", value: 0.129 },
    { source: "Gas", target: "Losses", value: 1.401 },
    { source: "Gas", target: "Thermal generation", value: 151.891 },
    { source: "Gas", target: "Agriculture", value: 2.096 },
    { source: "Gas", target: "Industry", value: 48.58 },
    { source: "Geothermal", target: "Electricity grid", value: 7.013 },
    { source: "H2 conversion", target: "H2", value: 20.897 },
    { source: "H2 conversion", target: "Losses", value: 6.242 },
    { source: "H2", target: "Road transport", value: 20.897 },
    { source: "Hydro", target: "Electricity grid", value: 6.995 },
    { source: "Liquid", target: "Industry", value: 121.066 },
    { source: "Liquid", target: "International shipping", value: 128.69 },
    { source: "Liquid", target: "Road transport", value: 135.835 },
    { source: "Liquid", target: "Domestic aviation", value: 14.458 },
    { source: "Liquid", target: "International aviation", value: 206.267 },
    { source: "Liquid", target: "Agriculture", value: 3.64 },
    { source: "Liquid", target: "National navigation", value: 33.218 },
    { source: "Liquid", target: "Rail transport", value: 4.413 },
    { source: "Marine algae", target: "Bio-conversion", value: 4.375 },
    { source: "Ngas", target: "Gas", value: 122.952 },
    { source: "Nuclear", target: "Thermal generation", value: 839.978 },
    { source: "Oil imports", target: "Oil", value: 504.287 },
    { source: "Oil reserves", target: "Oil", value: 107.703 },
    { source: "Oil", target: "Liquid", value: 611.99 },
    { source: "Other waste", target: "Solid", value: 56.587 },
    { source: "Other waste", target: "Bio-conversion", value: 77.81 },
    { source: "Pumped heat", target: "Heating and cooling - homes", value: 193.026 },
    { source: "Pumped heat", target: "Heating and cooling - commercial", value: 70.672 },
    { source: "Solar PV", target: "Electricity grid", value: 59.901 },
    { source: "Solar Thermal", target: "Heating and cooling - homes", value: 19.263 },
    { source: "Solar", target: "Solar Thermal", value: 19.263 },
    { source: "Solar", target: "Solar PV", value: 59.901 },
    { source: "Solid", target: "Agriculture", value: 0.882 },
    { source: "Solid", target: "Thermal generation", value: 400.12 },
    { source: "Solid", target: "Industry", value: 46.477 },
    { source: "Thermal generation", target: "Electricity grid", value: 525.531 },
    { source: "Thermal generation", target: "Losses", value: 787.129 },
    { source: "Thermal generation", target: "District heating", value: 79.329 },
    { source: "Tidal", target: "Electricity grid", value: 9.452 },
    { source: "UK land based bioenergy", target: "Bio-conversion", value: 182.01 },
    { source: "Wave", target: "Electricity grid", value: 19.013 },
    { source: "Wind", target: "Electricity grid", value: 289.366 },
  ],
};

const linkColor: string = "source-target";

const SankeyChart: React.FC = () => {
  const width = 928;
  const height = 600;
  const format = d3.format(",.0f");

  const svgRef = React.useRef<SVGSVGElement>(null);

  React.useEffect(() => {
    if (!svgRef.current) return;

    // Set up the SVG container
    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", `0 0 ${width} ${height}`)
      .attr("style", "max-width: 100%; height: auto; font: 10px sans-serif; color: white;");

    // Create a sankey generator with the imported sankeyLeft for node alignment.
    const sankeyGenerator = d3Sankey<Node, Link>()
      .nodeId((d) => d.name)
      .nodeAlign(sankeyLeft)
      .nodeWidth(15)
      .nodePadding(10)
      .extent([
        [1, 5],
        [width - 1, height - 5],
      ]);

    // Our input data uses strings for link source/target.
    // The sankey layout will match these strings with the node names.
    const graph = {
      nodes: data.nodes.map((d) => ({ ...d })),
      links: data.links.map((d) => ({ ...d })) as Link[],
    };

    const { nodes, links } = sankeyGenerator(graph);

    // Set up a color scale
    const color = d3.scaleOrdinal<string, string>(d3.schemeCategory10);

    // Add node rectangles
    const nodeGroup = svg
      .append("g")
      .attr("stroke", "#000")
      .selectAll("rect")
      .data(nodes)
      .join("rect")
      .attr("x", (d) => d.x0!)
      .attr("y", (d) => d.y0!)
      .attr("height", (d) => d.y1! - d.y0!)
      .attr("width", (d) => d.x1! - d.x0!)
      .attr("fill", (d) => color(d.category || "default"));

    nodeGroup
      .append("title")
      .text((d) => `${d.name}\n${format(d.value || 0)} TWh`)
      .attr("fill", "white");

    // Add links
    const linkGroup = svg
      .append("g")
      .attr("fill", "none")
      .attr("stroke-opacity", 0.5)
      .selectAll("g")
      .data(links)
      .join("g")
      .style("mix-blend-mode", "multiply");

    // If using source-target gradients, create a gradient for each link.
    if (linkColor === "source-target") {
      linkGroup.each(function (d) {
        const grad = d3
          .select(this)
          .append("linearGradient")
          .attr("id", () => {
            d.uid = `link-${Math.random().toString(36).substr(2, 9)}`;
            return d.uid;
          })
          .attr("gradientUnits", "userSpaceOnUse")
          .attr("x1", d.source.x1!)
          .attr("x2", d.target.x0!);

        grad
          .append("stop")
          .attr("offset", "0%")
          .attr("stop-color", color(d.source.category || "default"));

        grad
          .append("stop")
          .attr("offset", "100%")
          .attr("stop-color", color(d.target.category || "default"));
      });
    }

    // Add the link paths
    linkGroup
      .append("path")
      .attr("d", sankeyLinkHorizontal())
      .attr("stroke", (d) =>
        linkColor === "source-target"
          ? `url(#${d.uid})`
          : linkColor === "source"
          ? color(d.source.category || "default")
          : linkColor === "target"
          ? color(d.target.category || "default")
          : linkColor
      )
      .attr("stroke-width", (d) => Math.max(1, d.width || 1));

    linkGroup
      .append("title")
      .text(
        (d) =>
          `${d.source.name} → ${d.target.name}\n${format(d.value)} TWh`
      )
      .attr("fill", "white");

    // Add node labels
    svg
      .append("g")
      .selectAll("text")
      .data(nodes)
      .join("text")
      .attr("x", (d) => (d.x0! < width / 2 ? d.x1! + 6 : d.x0! - 6))
      .attr("y", (d) => (d.y1! + d.y0!) / 2)
      .attr("dy", "0.35em")
      .attr("text-anchor", (d) => (d.x0! < width / 2 ? "start" : "end"))
      .text((d) => d.name)
      .attr("fill", "white");
  }, [format]);

  return <svg ref={svgRef} />;
};

export default SankeyChart;
