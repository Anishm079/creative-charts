import * as d3 from "d3";
import React,{useEffect} from "react"

interface Data{ carat: number, price: number };


const ChartComponent: React.FC = () => {
  useEffect(() => {
    const width = 928;
    const height = 600;
    const marginTop = 20;
    const marginRight = 20;
    const marginBottom = 30;
    const marginLeft = 40;

    const n = width / 40;
    const bins = d3.bin()
      .thresholds(n)
      .value((d: { carat: number }) => d.carat)(diamonds)
      .map(bin => {
        bin.sort((a, b) => a.price - b.price);
        const values = bin.map(d => d.price);
        const min = values[0];
        const max = values[values.length - 1];
        const q1 = d3.quantile(values, 0.25)!;
        const q2 = d3.quantile(values, 0.50)!;
        const q3 = d3.quantile(values, 0.75)!;
        const iqr = q3 - q1;
        const r0 = Math.max(min, q1 - iqr * 1.5);
        const r1 = Math.min(max, q3 + iqr * 1.5);
        (bin as any).quartiles = [q1, q2, q3];
        (bin as any).range = [r0, r1];
        (bin as any).outliers = bin.filter(v => v.price < r0 || v.price > r1);
        return bin;
      });

    const x = d3.scaleLinear()
      .domain([d3.min(bins, d => d.x0)!, d3.max(bins, d => d.x1)!])
      .rangeRound([marginLeft, width - marginRight]);

    const y = d3.scaleLinear()
      .domain([d3.min(bins, d => (d as any).range[0])!, d3.max(bins, d => (d as any).range[1])!]).nice()
      .range([height - marginBottom, marginTop]);

    const svg = d3.select('#myChart')
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", `0 0 ${width} ${height}`)
      .attr("style", "max-width: 100%; height: auto; font: 10px sans-serif;")
      .attr("text-anchor", "middle");

    const g = svg.append("g")
      .selectAll("g")
      .data(bins)
      .join("g");

    g.append("path")
      .attr("stroke", "currentColor")
      .attr("d", d => `
        M${x((d.x0 + d.x1) / 2)},${y((d as any).range[1])}
        V${y((d as any).range[0])}
      `);

    g.append("path")
      .attr("fill", "#ddd")
      .attr("d", d => `
        M${x(d.x0) + 1},${y((d as any).quartiles[2])}
        H${x(d.x1)}
        V${y((d as any).quartiles[0])}
        H${x(d.x0) + 1}
        Z
      `);

    g.append("path")
      .attr("stroke", "currentColor")
      .attr("stroke-width", 2)
      .attr("d", d => `
        M${x(d.x0) + 1},${y((d as any).quartiles[1])}
        H${x(d.x1)}
      `);

    g.append("g")
      .attr("fill", "currentColor")
      .attr("fill-opacity", 0.2)
      .attr("stroke", "none")
      .attr("transform", d => `translate(${x((d.x0 + d.x1) / 2)},0)`)
      .selectAll("circle")
      .data(d => (d as any).outliers)
      .join("circle")
      .attr("r", 2)
      .attr("cx", () => (Math.random() - 0.5) * 4)
      .attr("cy", d => y(d.price));

    svg.append("g")
      .attr("transform", `translate(0,${height - marginBottom})`)
      .call(d3.axisBottom(x).ticks(n).tickSizeOuter(0));

    svg.append("g")
      .attr("transform", `translate(${marginLeft},0)`)
      .call(d3.axisLeft(y).ticks(null, "s"))
      .call(g => g.select(".domain").remove());

    return () => {
      d3.select('#myChart').selectAll('*').remove();
    };
  }, []);

  return (
    <div id="myChart" />
  );
};

export default ChartComponent;