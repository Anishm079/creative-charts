import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

interface DataNode {
  name: string;
  value?: number;
  children?: DataNode[];
}

const data: DataNode = {
  name: "TechCorp",
  children: [
    {
      name: "Engineering",
      children: [
        {
          name: "Frontend Development",
          children: [
            { name: "React Team", value: 15 },
            { name: "Angular Team", value: 10 },
            { name: "UI/UX Designers", value: 8 },
          ],
        },
        {
          name: "Backend Development",
          children: [
            { name: "Node.js Team", value: 12 },
            { name: "Java Team", value: 18 },
            { name: "Database Engineers", value: 6 },
          ],
        },
        {
          name: "DevOps",
          children: [
            { name: "Cloud Engineers", value: 10 },
            { name: "Infrastructure Team", value: 8 },
          ],
        },
      ],
    },
    {
      name: "Product",
      children: [
        { name: "Product Managers", value: 12 },
        { name: "Business Analysts", value: 8 },
        {
          name: "Quality Assurance",
          children: [
            { name: "Manual Testing", value: 10 },
            { name: "Automation Testing", value: 7 },
          ],
        },
      ],
    },
    {
      name: "Sales",
      children: [
        { name: "Enterprise Sales", value: 20 },
        { name: "Mid-Market Sales", value: 15 },
        { name: "Customer Success Managers", value: 10 },
      ],
    },
    {
      name: "Marketing",
      children: [
        { name: "Content Marketing", value: 5 },
        { name: "SEO Specialists", value: 4 },
        { name: "Paid Media", value: 6 },
        { name: "Social Media", value: 3 },
      ],
    },
    {
      name: "HR",
      children: [
        { name: "Recruitment", value: 8 },
        { name: "Employee Engagement", value: 5 },
        { name: "Learning & Development", value: 3 },
      ],
    },
  ],
};
const PartitionChart: React.FC = () => {
  const ref = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    // Specify the chart’s dimensions.
    const width = 928;
    const height = 800;

    // Create the color scale.
    const color = d3.scaleOrdinal(
      d3.quantize(d3.interpolateRainbow, data.children?.length + 1 || 0)
    );

    // Compute the layout.
    const hierarchy = d3
      .hierarchy(data)
      .sum((d) => d.value || 0)
      .sort((a, b) => b.height - a.height || b.value! - a.value!);
    const root = d3
      .partition<DataNode>()
      .size([height, ((hierarchy.height + 1) * width) / 3])(hierarchy);

    // Create the SVG container.
    const svg = d3
      .select(ref.current)
      .attr("viewBox", `0 0 ${width} ${height}`)
      .attr("width", width)
      .attr("height", height)
      .style("max-width", "100%")
      .style("height", "auto")
      .style("font", "10px sans-serif")
      .style("color", "white"); // Change font color to white

    // Append cells.
    const cell = svg
      .selectAll("g")
      .data(root.descendants())
      .join("g")
      .attr("transform", (d) => `translate(${d.y0},${d.x0})`);

    const rect = cell
      .append("rect")
      .attr("width", (d) => d.y1 - d.y0 - 1)
      .attr("height", (d) => rectHeight(d))
      .attr("fill-opacity", 0.6)
      .attr("fill", (d) => {
        if (!d.depth) return "#ccc";
        let current = d;
        while (current.depth > 1) current = current.parent!;
        return color(current.data.name);
      })
      .style("cursor", "pointer")
      .on("click", clicked);

    const text = cell
      .append("text")
      .style("user-select", "none")
      .attr("pointer-events", "none")
      .attr("x", 4)
      .attr("y", 13)
      .attr("fill", "white") // Change font color to white
      .attr("fill-opacity", (d) => +labelVisible(d));

    text.append("tspan").text((d) => d.data.name);

    const format = d3.format(",d");
    const tspan = text
      .append("tspan")
      .attr("fill", "white") // Change font color to white
      .attr("fill-opacity", (d) => labelVisible(d) * 0.7)
      .text((d) => ` ${format(d.value)}`);

    cell.append("title").text(
      (d) =>
        `${d
          .ancestors()
          .map((d) => d.data.name)
          .reverse()
          .join("/")}\n${format(d.value)}`
    );

    // On click, change the focus and transitions it into view.
    let focus = root;
    function clicked(event: any, p: any) {
      focus = focus === p ? p.parent : p;

      root.each((d) => {
        d.target = {
          x0: ((d.x0 - p.x0) / (p.x1 - p.x0)) * height,
          x1: ((d.x1 - p.x0) / (p.x1 - p.x0)) * height,
          y0: d.y0 - p.y0,
          y1: d.y1 - p.y0,
        };
      });

      const t = cell
        .transition()
        .duration(750)
        .attr("transform", (d) => `translate(${d.target.y0},${d.target.x0})`);

      rect.transition(t).attr("height", (d) => rectHeight(d.target));
      text.transition(t).attr("fill-opacity", (d) => +labelVisible(d.target));
      tspan
        .transition(t)
        .attr("fill-opacity", (d) => labelVisible(d.target) * 0.7);
    }

    function rectHeight(d: any) {
      return d.x1 - d.x0 - Math.min(1, (d.x1 - d.x0) / 2);
    }

    function labelVisible(d: any) {
      return d.y1 <= width && d.y0 >= 0 && d.x1 - d.x0 > 16;
    }
  }, [data]);

  return <svg ref={ref}></svg>;
};

export default PartitionChart;
