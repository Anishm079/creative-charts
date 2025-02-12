import React, { useRef, useEffect } from "react";
import * as d3 from "d3";
import { hexbin as d3Hexbin } from "d3-hexbin";

// CSV data representing taxi pickup coordinates in a fictional downtown area
const parsedData = [
  {"x":195,"y":305},
  {"x":205,"y":300},
  {"x":198,"y":310},
  {"x":202,"y":295},
  {"x":210,"y":300},
  {"x":190,"y":298},
  {"x":200,"y":305},
  {"x":207,"y":293},
  {"x":193,"y":307},
  {"x":204,"y":299},
  {"x":197,"y":302},
  {"x":203,"y":308},
  {"x":196,"y":297},
  {"x":208,"y":304},
  {"x":199,"y":300},
  {"x":201,"y":306},
  {"x":205,"y":310},
  {"x":192,"y":295},
  {"x":206,"y":303},
  {"x":200,"y":299},
  {"x":194,"y":303},
  {"x":206,"y":298},
  {"x":198,"y":305},
  {"x":202,"y":300},
  {"x":209,"y":307},
  {"x":191,"y":300},
  {"x":200,"y":292},
  {"x":207,"y":297},
  {"x":193,"y":304},
  {"x":204,"y":312},
  {"x":197,"y":308},
  {"x":203,"y":294},
  {"x":196,"y":306},
  {"x":208,"y":299},
  {"x":199,"y":304},
  {"x":201,"y":292},
  {"x":205,"y":297},
  {"x":192,"y":302},
  {"x":206,"y":308},
  {"x":200,"y":311},
  {"x":595,"y":205},
  {"x":605,"y":200},
  {"x":598,"y":210},
  {"x":602,"y":195},
  {"x":610,"y":200},
  {"x":590,"y":198},
  {"x":600,"y":205},
  {"x":607,"y":193},
  {"x":593,"y":207},
  {"x":604,"y":199},
  {"x":597,"y":202},
  {"x":603,"y":208},
  {"x":596,"y":197},
  {"x":608,"y":204},
  {"x":599,"y":200},
  {"x":601,"y":206},
  {"x":605,"y":210},
  {"x":592,"y":195},
  {"x":606,"y":203},
  {"x":600,"y":199},
  {"x":594,"y":203},
  {"x":606,"y":197},
  {"x":598,"y":206},
  {"x":602,"y":200},
  {"x":609,"y":207},
  {"x":591,"y":202},
  {"x":600,"y":210},
  {"x":607,"y":196},
  {"x":593,"y":205},
  {"x":604,"y":201},
  {"x":597,"y":208},
  {"x":603,"y":195},
  {"x":596,"y":202},
  {"x":608,"y":200},
  {"x":599,"y":207},
  {"x":601,"y":195},
  {"x":605,"y":204},
  {"x":592,"y":202},
  {"x":606,"y":208},
  {"x":600,"y":197},
  {"x":395,"y":455},
  {"x":405,"y":450},
  {"x":398,"y":460},
  {"x":402,"y":445},
  {"x":410,"y":450},
  {"x":390,"y":448},
  {"x":400,"y":455},
  {"x":407,"y":443},
  {"x":393,"y":457},
  {"x":404,"y":449},
  {"x":397,"y":452},
  {"x":403,"y":458},
  {"x":396,"y":447},
  {"x":408,"y":454},
  {"x":399,"y":450},
  {"x":401,"y":456},
  {"x":405,"y":460},
  {"x":392,"y":445},
  {"x":406,"y":453},
  {"x":400,"y":449},
  {"x":394,"y":452},
  {"x":406,"y":447},
  {"x":398,"y":455},
  {"x":402,"y":450},
  {"x":409,"y":457},
  {"x":391,"y":449},
  {"x":400,"y":460},
  {"x":407,"y":442},
  {"x":393,"y":454},
  {"x":404,"y":456},
  {"x":397,"y":459},
  {"x":403,"y":444},
  {"x":396,"y":451},
  {"x":408,"y":458},
  {"x":399,"y":453},
  {"x":401,"y":447},
  {"x":405,"y":455},
  {"x":392,"y":451},
  {"x":406,"y":457},
  {"x":400,"y":452}
];

const TaxiPickupHexbinChart: React.FC = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    // 1. Define overall dimensions and margins.
    const width = 800;
    const height = 600;
    const margin = { top: 40, right: 20, bottom: 40, left: 20 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    // 2. Create the SVG container.
    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", `0 0 ${width} ${height}`)
      .style("background", "red") // Changed background color to red
      .style("font", "12px sans-serif");

    // Clear any previous content.
    svg.selectAll("*").remove();

    // 3. Add a chart title.
    svg
      .append("text")
      .attr("x", width / 2)
      .attr("y", margin.top / 2)
      .attr("text-anchor", "middle")
      .attr("fill", "white") // Changed text color to white
      .style("font-size", "18px")
      .style("font-weight", "bold")
      .text("Taxi Pickup Density");

    // 4. Add a drop shadow filter for a subtle 3D effect.
    const defs = svg.append("defs");
    const filter = defs
      .append("filter")
      .attr("id", "drop-shadow")
      .attr("height", "130%");
    filter
      .append("feGaussianBlur")
      .attr("in", "SourceAlpha")
      .attr("stdDeviation", 3)
      .attr("result", "blur");
    filter
      .append("feOffset")
      .attr("in", "blur")
      .attr("dx", 2)
      .attr("dy", 2)
      .attr("result", "offsetBlur");
    const feMerge = filter.append("feMerge");
    feMerge.append("feMergeNode").attr("in", "offsetBlur");
    feMerge.append("feMergeNode").attr("in", "SourceGraphic");

    // 5. Parse the CSV data.
    // const parsedData = d3.csvParse(csvData.trim(), (d) => ({
    //   x: +d.x,
    //   y: +d.y,
    // }));

    // 6. Convert the parsed data to an array of [x, y] tuples.
    //    The CSV coordinates are relative to the full canvas, so we shift them into our inner area.
    const points: [number, number][] = parsedData.map((d) => [
      d.x - margin.left,
      d.y - margin.top,
    ]);

    // 7. Create the hexbin generator.
    const hexbin = d3Hexbin()
      .radius(20) // Controls hexagon size.
      .extent([
        [0, 0],
        [innerWidth, innerHeight],
      ]);

    // 8. Compute the hexagonal bins.
    const bins = hexbin(points);

    // 9. Set up a sequential color scale (using YlOrRd for a warm look).
    const maxBinCount = d3.max(bins, (d) => d.length) || 1;
    const color = d3.scaleSequential(d3.interpolateYlOrRd).domain([0, maxBinCount]);

    // 10. Create a group for the hexagons.
    const g = svg
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // 11. Render the hexagons with a fade-in transition and drop shadow.
    g.selectAll("path")
      .data(bins)
      .join("path")
      .attr("d", hexbin.hexagon())
      .attr("transform", (d) => `translate(${d.x}, ${d.y})`)
      .attr("fill", (d) => color(d.length))
      .attr("stroke", "#fff")
      .attr("stroke-width", 1)
      .attr("filter", "url(#drop-shadow)")
      .style("opacity", 0)
      .transition()
      .duration(800)
      .style("opacity", 1)
      .selection() // Ensure transition applies before appending title.
      .append("title")
      .text((d) => `Pickup Count: ${d.length}`);

    // 12. Add a simple legend to interpret the color scale.
    const legendWidth = 200,
      legendHeight = 10;
    const legendGroup = svg
      .append("g")
      .attr(
        "transform",
        `translate(${width - legendWidth - margin.right}, ${height - margin.bottom + 5})`
      );

    // Create a linear gradient for the legend.
    const legendGradientId = "legend-gradient";
    const legendDefs = svg.append("defs");
    const legendGradient = legendDefs
      .append("linearGradient")
      .attr("id", legendGradientId)
      .attr("x1", "0%")
      .attr("x2", "100%")
      .attr("y1", "0%")
      .attr("y2", "0%");
    legendGradient
      .selectAll("stop")
      .data(d3.range(0, 1.01, 0.01))
      .enter()
      .append("stop")
      .attr("offset", (d) => `${d * 100}%`)
      .attr("stop-color", (d) => color(d * maxBinCount));

    // Draw the legend rectangle.
    legendGroup
      .append("rect")
      .attr("width", legendWidth)
      .attr("height", legendHeight)
      .style("fill", `url(#${legendGradientId})`)
      .style("stroke", "#ccc")
      .style("stroke-width", 0.5);

    // Add a legend axis.
    const legendScale = d3.scaleLinear().domain([0, maxBinCount]).range([0, legendWidth]);
    const legendAxis = d3
      .axisBottom(legendScale)
      .ticks(5)
      .tickSizeOuter(0)
      .tickSize(legendHeight);
    legendGroup
      .append("g")
      .attr("transform", `translate(0,0)`)
      .call(legendAxis)
      .select(".domain")
      .remove();
    legendGroup.selectAll("text").attr("fill", "white"); // Changed legend text color to white
    legendGroup.selectAll("line").attr("stroke", "white"); // Changed legend axis line color to white

    // Add x-axis label
    svg
      .append("text")
      .attr("x", width / 2)
      .attr("y", height - margin.bottom / 2)
      .attr("text-anchor", "middle")
      .attr("fill", "white")
      .style("font-size", "14px")
      .text("lat");

    // Add y-axis label
    svg
      .append("text")
      .attr("transform", "rotate(-90)")
      .attr("x", -height / 2)
      .attr("y", margin.left / 2)
      .attr("text-anchor", "middle")
      .attr("fill", "white")
      .style("font-size", "14px")
      .text("lng");

    // Ensure all text elements are white
    svg.selectAll("text").attr("fill", "white"); // Ensure all text elements are white
  }, []);

  return <svg ref={svgRef} />;
};

export default TaxiPickupHexbinChart;
