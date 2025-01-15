import React from "react";
import { ResponsiveCirclePacking } from "@nivo/circle-packing";

interface DataNode {
  name: string;
  employees?: number;
  children?: DataNode[];
  color?: string;
}

const data: DataNode = {
  name: "Company Structure",
  color: "hsl(253, 70%, 50%)",
  children: [
    {
      name: "IT Department",
      color: "hsl(253, 70%, 50%)",
      children: [
        {
          name: "Software Development",
          color: "hsl(319, 70%, 50%)",
          children: [
            {
              name: "Frontend Team",
              color: "hsl(316, 70%, 50%)",
              employees: 15,
            },
            {
              name: "Backend Team",
              color: "hsl(318, 70%, 50%)",
              employees: 20,
            },
            {
              name: "Fullstack Team",
              color: "hsl(71, 70%, 50%)",
              employees: 10,
            },
            {
              name: "DevOps Team",
              color: "hsl(34, 70%, 50%)",
              employees: 8,
            },
          ],
        },
        {
          name: "QA and Testing",
          color: "hsl(347, 70%, 50%)",
          children: [
            {
              name: "Manual Testing",
              color: "hsl(75, 70%, 50%)",
              children: [
                {
                  name: "Frontend Testing",
                  color: "hsl(341, 70%, 50%)",
                  employees: 5,
                },
                {
                  name: "Backend Testing",
                  color: "hsl(51, 70%, 50%)",
                  employees: 7,
                },
                {
                  name: "Fullstack Testing",
                  color: "hsl(78, 70%, 50%)",
                  employees: 3,
                },
              ],
            },
            {
              name: "Automated Testing",
              color: "hsl(176, 70%, 50%)",
              employees: 12,
            },
            {
              name: "Performance Testing",
              color: "hsl(64, 70%, 50%)",
              employees: 9,
            },
          ],
        },
      ],
    },
    {
      name: "HR Department",
      color: "hsl(69, 70%, 50%)",
      children: [
        {
          name: "Recruitment",
          color: "hsl(325, 70%, 50%)",
          employees: 14,
        },
        {
          name: "Employee Relations",
          color: "hsl(5, 70%, 50%)",
          employees: 7,
        },
      ],
    },
    {
      name: "Finance Department",
      color: "hsl(343, 70%, 50%)",
      children: [
        {
          name: "Accounts Payable",
          color: "hsl(228, 70%, 50%)",
          employees: 6,
        },
        {
          name: "Accounts Receivable",
          color: "hsl(140, 70%, 50%)",
          employees: 5,
        },
        {
          name: "Payroll",
          color: "hsl(93, 70%, 50%)",
          employees: 4,
        },
        {
          name: "Tax Compliance",
          color: "hsl(155, 70%, 50%)",
          employees: 3,
        },
        {
          name: "Financial Reporting",
          color: "hsl(343, 70%, 50%)",
          employees: 8,
        },
        {
          name: "Budgeting",
          color: "hsl(71, 70%, 50%)",
          employees: 5,
        },
        {
          name: "Audit",
          color: "hsl(268, 70%, 50%)",
          employees: 4,
        },
      ],
    },
    {
      name: "Marketing Department",
      color: "hsl(223, 70%, 50%)",
      children: [
        {
          name: "Digital Marketing",
          color: "hsl(55, 70%, 50%)",
          employees: 10,
        },
        {
          name: "Content Marketing",
          color: "hsl(172, 70%, 50%)",
          employees: 8,
        },
        {
          name: "SEO/SEM",
          color: "hsl(79, 70%, 50%)",
          employees: 6,
        },
        {
          name: "Social Media",
          color: "hsl(192, 70%, 50%)",
          employees: 9,
        },
        {
          name: "Events",
          color: "hsl(160, 70%, 50%)",
          employees: 5,
        },
      ],
    },
    {
      name: "Sales Department",
      color: "hsl(57, 70%, 50%)",
      children: [
        {
          name: "Inside Sales",
          color: "hsl(103, 70%, 50%)",
          employees: 12,
        },
        {
          name: "Field Sales",
          color: "hsl(42, 70%, 50%)",
          employees: 15,
        },
        {
          name: "Sales Operations",
          color: "hsl(274, 70%, 50%)",
          employees: 7,
        },
        {
          name: "Sales Enablement",
          color: "hsl(305, 70%, 50%)",
          employees: 8,
        },
        {
          name: "Channel Sales",
          color: "hsl(219, 70%, 50%)",
          employees: 6,
        },
        {
          name: "Account Management",
          color: "hsl(333, 70%, 50%)",
          employees: 9,
        },
      ],
    },
    {
      name: "Customer Support",
      color: "hsl(349, 70%, 50%)",
      children: [
        {
          name: "Technical Support",
          color: "hsl(116, 70%, 50%)",
          employees: 25,
        },
        {
          name: "Customer Service",
          color: "hsl(45, 70%, 50%)",
          employees: 20,
        },
        {
          name: "Help Desk",
          color: "hsl(32, 70%, 50%)",
          employees: 15,
        },
        {
          name: "Field Support",
          color: "hsl(360, 70%, 50%)",
          employees: 10,
        },
      ],
    },
    {
      name: "Operations",
      color: "hsl(156, 70%, 50%)",
      children: [
        {
          name: "Supply Chain Management",
          color: "hsl(218, 70%, 50%)",
          children: [
            {
              name: "Procurement",
              color: "hsl(318, 70%, 50%)",
              employees: 10,
            },
            {
              name: "Inventory Management",
              color: "hsl(63, 70%, 50%)",
              employees: 12,
            },
            {
              name: "Logistics",
              color: "hsl(252, 70%, 50%)",
              employees: 15,
            },
            {
              name: "Distribution",
              color: "hsl(50, 70%, 50%)",
              employees: 8,
            },
          ],
        },
        {
          name: "Facilities Management",
          color: "hsl(262, 70%, 50%)",
          employees: 10,
        },
      ],
    },
  ],
};
const MyResponsiveCirclePacking: React.FC = () => (
  <ResponsiveCirclePacking
    data={data}
    margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
    id="name"
    value="employees"
    colors={{ scheme: "nivo" }}
    childColor={{
      from: "color",
      modifiers: [["brighter", 0.4]],
    }}
    padding={4}
    enableLabels={true}
    labelsFilter={(n) => 2 === n.node.depth}
    labelsSkipRadius={10}
    labelTextColor={{
      from: "color",
      modifiers: [["darker", 2]],
    }}
    borderWidth={1}
    borderColor={{
      from: "color",
      modifiers: [["darker", 0.5]],
    }}
    defs={[
      {
        id: "lines",
        type: "patternLines",
        background: "none",
        color: "inherit",
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
        id: "lines",
      },
    ]}
  />
);

export default MyResponsiveCirclePacking;
