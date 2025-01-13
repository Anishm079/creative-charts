import React, { useEffect } from "react";
import { AgChartOptions, AgCharts, AgPath } from "ag-charts-community";

function getData() {
  return [
    {
      location: ["Europe", "United Kingdom", "London"],
      startups: 5400,
      techCompanies: 1200,
      funding: 8500,
      employees: 280000,
      researchInstitutions: 300,
      incubators: 150,
      accelerators: 80,
      ventureCapitalFunds: 200,
      coWorkingSpaces: 250,
      patents: 1200,
      innovationHubs: 100,
      universityCollaborations: 50,
    },
    {
      location: ["Europe", "United Kingdom", "Manchester"],
      startups: 2100,
      techCompanies: 500,
      funding: 2300,
      employees: 90000,
      researchInstitutions: 100,
      incubators: 40,
      accelerators: 20,
      ventureCapitalFunds: 60,
      coWorkingSpaces: 80,
      patents: 400,
      innovationHubs: 30,
      universityCollaborations: 20,
    },
    {
      location: ["Europe", "Germany", "Berlin"],
      startups: 4800,
      techCompanies: 1100,
      funding: 9200,
      employees: 310000,
      researchInstitutions: 250,
      incubators: 120,
      accelerators: 60,
      ventureCapitalFunds: 180,
      coWorkingSpaces: 200,
      patents: 900,
      innovationHubs: 75,
      universityCollaborations: 60,
    },
    {
      location: ["Asia", "China", "Beijing"],
      startups: 8900,
      techCompanies: 3100,
      funding: 15000,
      employees: 580000,
      researchInstitutions: 400,
      incubators: 250,
      accelerators: 150,
      ventureCapitalFunds: 350,
      coWorkingSpaces: 300,
      patents: 1800,
      innovationHubs: 120,
      universityCollaborations: 100,
    },
    {
      location: ["Asia", "China", "Shanghai"],
      startups: 7200,
      techCompanies: 2800,
      funding: 12700,
      employees: 490000,
      researchInstitutions: 350,
      incubators: 220,
      accelerators: 130,
      ventureCapitalFunds: 300,
      coWorkingSpaces: 280,
      patents: 1600,
      innovationHubs: 100,
      universityCollaborations: 90,
    },
    {
      location: ["Asia", "Japan", "Tokyo"],
      startups: 6200,
      techCompanies: 1500,
      funding: 8700,
      employees: 400000,
      researchInstitutions: 220,
      incubators: 110,
      accelerators: 60,
      ventureCapitalFunds: 150,
      coWorkingSpaces: 150,
      patents: 800,
      innovationHubs: 60,
      universityCollaborations: 50,
    },
    {
      location: ["North America", "United States", "San Francisco"],
      startups: 12500,
      techCompanies: 3400,
      funding: 43000,
      employees: 900000,
      researchInstitutions: 500,
      incubators: 300,
      accelerators: 200,
      ventureCapitalFunds: 580,
      coWorkingSpaces: 450,
      patents: 3200,
      innovationHubs: 200,
      universityCollaborations: 250,
    },
    {
      location: ["North America", "United States", "New York"],
      startups: 7800,
      techCompanies: 2600,
      funding: 19000,
      employees: 620000,
      researchInstitutions: 380,
      incubators: 180,
      accelerators: 120,
      ventureCapitalFunds: 400,
      coWorkingSpaces: 300,
      patents: 2500,
      innovationHubs: 120,
      universityCollaborations: 180,
    },
    {
      location: ["North America", "Canada", "Toronto"],
      startups: 3100,
      techCompanies: 800,
      funding: 4500,
      employees: 140000,
      researchInstitutions: 150,
      incubators: 50,
      accelerators: 30,
      ventureCapitalFunds: 80,
      coWorkingSpaces: 90,
      patents: 700,
      innovationHubs: 40,
      universityCollaborations: 60,
    },
    {
      location: ["South America", "Brazil", "São Paulo"],
      startups: 2800,
      techCompanies: 900,
      funding: 3200,
      employees: 110000,
      researchInstitutions: 120,
      incubators: 40,
      accelerators: 25,
      ventureCapitalFunds: 70,
      coWorkingSpaces: 70,
      patents: 500,
      innovationHubs: 30,
      universityCollaborations: 40,
    },
    {
      location: ["Africa", "South Africa", "Cape Town"],
      startups: 1600,
      techCompanies: 400,
      funding: 1200,
      employees: 70000,
      researchInstitutions: 80,
      incubators: 15,
      accelerators: 10,
      ventureCapitalFunds: 30,
      coWorkingSpaces: 40,
      patents: 200,
      innovationHubs: 15,
      universityCollaborations: 10,
    },
    {
      location: ["Oceania", "Australia", "Sydney"],
      startups: 3400,
      techCompanies: 900,
      funding: 5400,
      employees: 150000,
      researchInstitutions: 200,
      incubators: 60,
      accelerators: 40,
      ventureCapitalFunds: 120,
      coWorkingSpaces: 120,
      patents: 700,
      innovationHubs: 50,
      universityCollaborations: 80,
    },
    {
      location: ["Oceania", "New Zealand", "Auckland"],
      startups: 1200,
      techCompanies: 300,
      funding: 1500,
      employees: 50000,
      researchInstitutions: 90,
      incubators: 25,
      accelerators: 15,
      ventureCapitalFunds: 40,
      coWorkingSpaces: 30,
      patents: 300,
      innovationHubs: 10,
      universityCollaborations: 20,
    },
  ];
}

const ChartComponent: React.FC = () => {
  useEffect(() => {
    const data = getData();

    const bar = ({ x, y, path, size }:{ x:number, y:number, path:AgPath, size:number }) => {
      const halfSize = size / 2;
      path.rect(x - halfSize / 2, y - halfSize, halfSize, size);
    };

    const options: AgChartOptions = {
      container: document.getElementById("myChart"),
      data,
      background:{
        fill:"transparent"
      },
      title: {
        text: "The Technology Industry",
        fontFamily: "Architects Daughter",
        color:"#000"
      },
      padding: {
        left: 40,
        right: 40,
      },
      theme: {
        overrides: {
          common: {
            legend: {
              item: {
                marker: {
                  shape: bar,
                  strokeWidth: 0,
                },
                line: {
                  strokeWidth: 0,
                },
                label: {
                  color:"#000",
                  fontFamily: "Architects Daughter",
                },
              },
            },
            axes: {
              "grouped-category": {
                groupPaddingInner: 0,
                paddingInner: 0.4,
                label: {
                  color:"#000",
                  fontFamily: "Architects Daughter",
                },
              },
              number: {
                gridLine: {
                  enabled: false,
                },
                label: {
                  enabled: false,
                },
              },
            },
          },
          bar: {
            series: {
              fillOpacity: 0.4,
              label: {
                color:"#000",
                fontFamily: "Architects Daughter",
              },
            },
          },
          line: {
            series: {
              marker: {
                shape: bar,
                size: 10,
              },
              label: {
                color:"#000",
                fontFamily: "Architects Daughter",
              },
            },
          },
        },
      },
      series: [
        {
          type: "line",
          xKey: "location",
          xName: "Location",
          yKey: "startups",
          yName: "Startups",
          label: {
            color:"#000",
            fontFamily: "Architects Daughter",
          },
        },
        {
          type: "line",
          xKey: "location",
          xName: "Location",
          yKey: "techCompanies",
          yName: "Tech Companies",
          label: {
            color:"#000",
            fontFamily: "Architects Daughter",
          },
        },
        {
          type: "bar",
          xKey: "location",
          xName: "Location",
          yKey: "funding",
          yName: "Funding",
          fillOpacity: 1,
          label: {
            color:"#000",
            fontFamily: "Architects Daughter",
          },
        },
        {
          type: "bar",
          xKey: "location",
          xName: "Location",
          yKey: "employees",
          yName: "Employees",
          fillOpacity: 1,
          label: {
            color:"#000",
            fontFamily: "Architects Daughter",
          },
        },
        {
          type: "bar",
          xKey: "location",
          xName: "Location",
          yKey: "researchInstitutions",
          yName: "Research Institutions",
          label: {
            color:"#000",
            fontFamily: "Architects Daughter",
          },
        },
        {
          type: "bar",
          xKey: "location",
          xName: "Location",
          yKey: "ventureCapitalFunds",
          yName: "Venture Capital Funds",
          label: {
            color:"#000",
            fontFamily: "Architects Daughter",
          },
        },
        {
          type: "bar",
          xKey: "location",
          xName: "Location",
          yKey: "incubators",
          yName: "Incubators",
          label: {
            color:"#000",
            fontFamily: "Architects Daughter",
          },
        },
        {
          type: "bar",
          xKey: "location",
          xName: "Location",
          yKey: "coWorkingSpaces",
          yName: "Co-working Spaces",
          label: {
            color:"#000",
            fontFamily: "Architects Daughter",
          },
        },
        {
          type: "bar",
          xKey: "location",
          xName: "Location",
          yKey: "innovationHubs",
          yName: "Innovation Hubs",
          label: {
            color:"#000",
            fontFamily: "Architects Daughter",
          },
        },
        {
          type: "bar",
          xKey: "location",
          xName: "Location",
          yKey: "accelerators",
          yName: "Accelerators",
          label: {
            color:"#000",
            fontFamily: "Architects Daughter",
          },
        },
      ],
      axes: [
        {
          position: "left",
          type: "number",
          keys: ["startups", "techCompanies"],
          label: {
            color:"#000",
            fontFamily: "Architects Daughter",
          },
        },
        {
          position: "left",
          type: "number",
          keys: ["employees"],
          label: {
            color:"#000",
            fontFamily: "Architects Daughter",
          },
        },
        {
          position: "left",
          type: "number",
          keys: ["funding"],
          title: {
            color:"#000",
            text: "Number of Employees & Funding",
            fontFamily: "Architects Daughter",
          },
        },
        {
          position: "right",
          type: "number",
          keys: [
            "researchInstitutions",
            "incubators",
            "accelerators",
            "ventureCapitalFunds",
            "coWorkingSpaces",
            "innovationHubs",
          ],
          title: {
            color:"#000",
            text: "Number of Institutions",
            fontFamily: "Architects Daughter",
          },
        },
        {
          position: "top",
          type: "grouped-category",
          label: {
            fontFamily: "Architects Daughter",
          },
        },
      ],
    };

    AgCharts.create(options);
  }, []);

  return <div id="myChart" style={{ width: "100dvw", height: "100dvh", background:"linear-gradient(to right, #9b59d4, #785ab3)" }}></div>;
};

export default ChartComponent;
