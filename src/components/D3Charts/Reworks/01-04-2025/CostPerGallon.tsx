import * as d3 from "d3";
import React, { useRef, useEffect } from "react";

interface Data {
  miles: number;
  gas: number;
  traffic: number;
  congestion: number;
  emissions: number;
  year: number;
  side: string;
};

const driving: Data[] = [
    { "side": "left", "year": 2001, "miles": 9000, "gas": 2.5, "traffic": 60, "congestion": 40, "emissions": 50 },
    { "side": "bottom", "year": 2002, "miles": 8500, "gas": 3.0, "traffic": 55, "congestion": 38, "emissions": 52 },
    { "side": "right", "year": 2003, "miles": 9200, "gas": 2.8, "traffic": 70, "congestion": 45, "emissions": 48 },
    { "side": "top", "year": 2004, "miles": 8700, "gas": 3.2, "traffic": 65, "congestion": 50, "emissions": 55 },
    { "side": "left", "year": 2005, "miles": 9300, "gas": 2.6, "traffic": 80, "congestion": 42, "emissions": 49 },
    { "side": "bottom", "year": 2006, "miles": 8800, "gas": 3.1, "traffic": 75, "congestion": 47, "emissions": 60 },
    { "side": "right", "year": 2007, "miles": 9500, "gas": 2.9, "traffic": 72, "congestion": 40, "emissions": 53 },
    { "side": "top", "year": 2008, "miles": 8900, "gas": 3.4, "traffic": 68, "congestion": 55, "emissions": 50 },
    { "side": "left", "year": 2009, "miles": 9600, "gas": 2.7, "traffic": 60, "congestion": 44, "emissions": 58 },
    { "side": "bottom", "year": 2010, "miles": 9100, "gas": 3.3, "traffic": 74, "congestion": 52, "emissions": 63 },
  ];    

const Chart: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!driving || driving.length === 0) return;

    const svgElement = d3.select(svgRef.current);

    const width = 928;
    const height = 720;
    const marginTop = 20;
    const marginRight = 30;
    const marginBottom = 30;
    const marginLeft = 40;

    const x = d3.scaleLinear()
      .domain(d3.extent(driving, d => d.miles) as [number, number]).nice()
      .range([marginLeft, width - marginRight]);

    const y = d3.scaleLinear()
      .domain(d3.extent(driving, d => d.gas) as [number, number]).nice()
      .range([height - marginBottom, marginTop]);

    const yTraffic = d3.scaleLinear()
      .domain(d3.extent(driving, d => d.traffic) as [number, number]).nice()
      .range([height - marginBottom, marginTop]);

    const yCongestion = d3.scaleLinear()
      .domain(d3.extent(driving, d => d.congestion) as [number, number]).nice()
      .range([height - marginBottom, marginTop]);

    const yEmissions = d3.scaleLinear()
      .domain(d3.extent(driving, d => d.emissions) as [number, number]).nice()
      .range([height - marginBottom, marginTop]);

    const line = d3.line<Data>()
      .curve(d3.curveCatmullRom)
      .x(d => x(d.miles))
      .y(d => y(d.gas));

    const lineTraffic = d3.line<Data>()
      .curve(d3.curveCatmullRom)
      .x(d => x(d.miles))
      .y(d => yTraffic(d.traffic));

    const lineCongestion = d3.line<Data>()
      .curve(d3.curveCatmullRom)
      .x(d => x(d.miles))
      .y(d => yCongestion(d.congestion));

    const lineEmissions = d3.line<Data>()
      .curve(d3.curveCatmullRom)
      .x(d => x(d.miles))
      .y(d => yEmissions(d.emissions));

    svgElement.attr("width", width)
      .attr("height", height)
      .attr("viewBox", `0 0 ${width} ${height}`)
      .attr("style", "max-width: 100%; height: auto;");

    svgElement.append("g")
      .attr("transform", `translate(0,${height - marginBottom})`)
      .call(d3.axisBottom(x).ticks(width / 80))
      .call(g => g.select(".domain").remove())
      .call(g => g.selectAll(".tick line").clone()
        .attr("y2", -height)
        .attr("stroke-opacity", 0.1))
      .call(g => g.append("text")
        .attr("x", width - 4)
        .attr("y", -4)
        .attr("font-weight", "bold")
        .attr("text-anchor", "end")
        .attr("fill", "currentColor")
        .text("Miles per person per year"));

    svgElement.append("g")
      .attr("transform", `translate(${marginLeft},0)`)
      .call(d3.axisLeft(y).ticks(null, "$.2f"))
      .call(g => g.select(".domain").remove())
      .call(g => g.selectAll(".tick line").clone()
        .attr("x2", width)
        .attr("stroke-opacity", 0.1))
      .call(g => g.select(".tick:last-of-type text").clone()
        .attr("x", 4)
        .attr("text-anchor", "start")
        .attr("font-weight", "bold")
        .text("Cost per gallon"));

    // Create the path elements
    const path = svgElement.append("path")
      .datum(driving)
      .attr("fill", "none")
      .attr("stroke", "black")
      .attr("stroke-width", 2.5)
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round")
      .attr("d", line);

    const pathTraffic = svgElement.append("path")
      .datum(driving)
      .attr("fill", "none")
      .attr("stroke", "red")
      .attr("stroke-width", 2.5)
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round")
      .attr("d", lineTraffic);

    const pathCongestion = svgElement.append("path")
      .datum(driving)
      .attr("fill", "none")
      .attr("stroke", "green")
      .attr("stroke-width", 2.5)
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round")
      .attr("d", lineCongestion);

    const pathEmissions = svgElement.append("path")
      .datum(driving)
      .attr("fill", "none")
      .attr("stroke", "blue")
      .attr("stroke-width", 2.5)
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round")
      .attr("d", lineEmissions);

    const l = length(path.node());
    const lTraffic = length(pathTraffic.node());
    const lCongestion = length(pathCongestion.node());
    const lEmissions = length(pathEmissions.node());

    path.attr("stroke-dasharray", `0,${l}`)
      .transition()
      .duration(5000)
      .ease(d3.easeLinear)
      .attr("stroke-dasharray", `${l},${l}`);

    pathTraffic.attr("stroke-dasharray", `0,${lTraffic}`)
      .transition()
      .duration(5000)
      .ease(d3.easeLinear)
      .attr("stroke-dasharray", `${lTraffic},${lTraffic}`);

    pathCongestion.attr("stroke-dasharray", `0,${lCongestion}`)
      .transition()
      .duration(5000)
      .ease(d3.easeLinear)
      .attr("stroke-dasharray", `${lCongestion},${lCongestion}`);

    pathEmissions.attr("stroke-dasharray", `0,${lEmissions}`)
      .transition()
      .duration(5000)
      .ease(d3.easeLinear)
      .attr("stroke-dasharray", `${lEmissions},${lEmissions}`);

    svgElement.append("g")
      .attr("fill", "white")
      .attr("stroke", "black")
      .attr("stroke-width", 2)
      .selectAll("circle")
      .data(driving)
      .join("circle")
      .attr("cx", d => x(d.miles))
      .attr("cy", d => y(d.gas))
      .attr("r", 3);

    const label = svgElement.append("g")
      .attr("font-family", "sans-serif")
      .attr("font-size", 10)
      .selectAll("text")
      .data(driving)
      .join("text")
      .attr("transform", d => `translate(${x(d.miles)},${y(d.gas)})`)
      .attr("fill-opacity", 0)
      .text(d => d.year)
      .attr("stroke", "white")
      .attr("paint-order", "stroke")
      .attr("fill", "currentColor")
      .each(function (d) {
        const t = d3.select(this);
        switch (d.side) {
          case "top": t.attr("text-anchor", "middle").attr("dy", "-0.7em"); break;
          case "right": t.attr("dx", "0.5em").attr("dy", "0.32em").attr("text-anchor", "start"); break;
          case "bottom": t.attr("text-anchor", "middle").attr("dy", "1.4em"); break;
          case "left": t.attr("dx", "-0.5em").attr("dy", "0.32em").attr("text-anchor", "end"); break;
        }
      });
      label.transition()
      .delay((d, i) => length(path.node()) / l * (5000 - 125))
      .attr("fill-opacity", 1);

  }, []);

  return <svg ref={svgRef}></svg>;
};

export default Chart;

function length(path: d3.Line<Data> | null) {
  return path ? path.length : 0;
}
