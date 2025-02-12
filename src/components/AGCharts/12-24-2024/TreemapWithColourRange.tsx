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
          type: "treemap",
          labelKey: "name",
          secondaryLabelKey: "change",
          sizeName: "Valuation",
          sizeKey: "valuation",
          colorName: "Change",
          colorKey: "change",
          group: {
            label: {
              formatter({ value }) {
                return value.toUpperCase();
              },
              fontFamily: '"Dancing Script", serif',
            },
          },
          tile: {
            label: {
              overflowStrategy: "hide",
              fontFamily: '"Dancing Script", serif',
            },
            fill: "transparent",
            secondaryLabel: {
              overflowStrategy: "hide",
              fontFamily: '"Dancing Script", serif',
              formatter(params) {
                return params.value.toFixed(2) + "%";
              },
            },
            strokeWidth: 0,
            gap: 1,
          },
        },
      ],
      gradientLegend: {
        scale: {
          label: {
            formatter: ({ value }) => `${Number(value).toFixed(0)}%`,
            fontFamily: '"Dancing Script", serif',
          },
        },
      },
      title: {
        text: "S&P 500 index stocks categorized by sectors and industries",
        fontFamily: '"Dancing Script", serif',
      },
      subtitle: {
        text: "Area represents market cap.\nColour represents change from previous day.",
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
  return  [
    {
      name: "Security Software & Services",
      children: [
        {
          name: "SYMC",
          description: "Symantec Corporation",
          color: "#6fc562",
          valuation: 320,
          change: 4.51,
        },
      ],
      change: -0.99,
    },
    {
      name: "Processing Systems & Products",
      children: [
        {
          name: "MSCI",
          description: "MSCI Inc.",
          color: "#9e8650",
          valuation: 297,
          change: -0.38,
        },
      ],
      change: -2.27,
    },
    {
      name: "Healthcare Information Services",
      children: [
        {
          name: "CERN",
          description: "Cerner Corporation",
          color: "#c15843",
          valuation: 432,
          change: -3.98,
        },
      ],
      change: -3.67,
    },
    {
      name: "Technical & System Software",
      children: [
        {
          name: "ADSK",
          description: "Autodesk, Inc.",
          color: "#bc5f45",
          valuation: 704,
          change: -3.47,
        },
      ],
      change: -1.06,
    },
    {
      name: "Information & Delivery Services",
      children: [
        {
          name: "NLSN",
          description: "Nielsen Holdings plc",
          color: "#6bca64",
          valuation: 255,
          change: 4.94,
        },
        {
          name: "BR",
          description: "Broadridge Financial Solutions, Inc.",
          color: "#6dc763",
          valuation: 300,
          change: 4.71,
        },
      ],
      change: 0.14,
    },
    {
      name: "Internet Software & Services",
      children: [
        {
          name: "EQIX",
          description: "Equinix, Inc. (REIT)",
          color: "#7cb35d",
          valuation: 850,
          change: 3.13,
        },
      ],
      change: -1.18,
    },
    {
      name: "Diversified Computer Systems",
      children: [
        {
          name: "HPQ",
          description: "HP Inc.",
          color: "#75bc60",
          valuation: 910,
          change: 3.86,
        },
      ],
      change: 1.65,
    },
    {
      name: "Scientific & Technical Instruments",
      children: [
        {
          name: "FLIR",
          description: "FLIR Systems, Inc.",
          color: "#be5c44",
          valuation: 210,
          change: -3.69,
        },
        {
          name: "GRMN",
          description: "Garmin Ltd.",
          color: "#ac744b",
          valuation: 315,
          change: -1.79,
        },
        {
          name: "FTV",
          description: "Fortive Corporation",
          color: "#a47e4e",
          valuation: 700,
          change: -1.01,
        },
      ],
      change: -0.01,
    },
    {
      name: "Data Storage Devices",
      children: [
        {
          name: "STX",
          description: "Seagate Technology plc",
          color: "#b06e49",
          valuation: 273,
          change: -2.23,
        },
        {
          name: "NTAP",
          description: "NetApp, Inc.",
          color: "#b56847",
          valuation: 378,
          change: -2.74,
        },
        {
          name: "WDC",
          description: "Western Digital Corporation",
          color: "#9e8750",
          valuation: 399,
          change: -0.35,
        },
      ],
      change: 1.59,
    },
    {
      name: "Semiconductor- Memory Chips",
      children: [
        {
          name: "MU",
          description: "Micron Technology, Inc.",
          color: "#6cc963",
          valuation: 1100,
          change: 4.82,
        },
      ],
      change: 4.72,
    },
    {
      name: "Diversified Communication Services",
      children: [
        {
          name: "SBAC",
          description: "SBA Communications Corporation",
          color: "#bd5d44",
          valuation: 350,
          change: -3.57,
        },
        {
          name: "CCI",
          description: "Crown Castle International Corp. (REIT)",
          color: "#c35542",
          valuation: 900,
          change: -4.18,
        },
      ],
      change: -4.35,
    },
    {
      name: "Semiconductor - Integrated Circuits",
      children: [
        {
          name: "SWKS",
          description: "Skyworks Solutions, Inc.",
          color: "#a1824f",
          valuation: 350,
          change: -0.7,
        },
        {
          name: "XLNX",
          description: "Xilinx, Inc.",
          color: "#c65241",
          valuation: 350,
          change: -4.47,
        },
        {
          name: "ADI",
          description: "Analog Devices, Inc.",
          color: "#c75141",
          valuation: 700,
          change: -4.56,
        },
      ],
      change: -3.56,
    },
    {
      name: "Diversified Electronics",
      children: [
        {
          name: "GLW",
          description: "Corning Incorporated",
          color: "#89a258",
          valuation: 560,
          change: 1.79,
        },
        {
          name: "APH",
          description: "Amphenol Corporation",
          color: "#ae724a",
          valuation: 560,
          change: -1.96,
        },
        {
          name: "TEL",
          description: "TE Connectivity Ltd.",
          color: "#c75040",
          valuation: 644,
          change: -4.6,
        },
      ],
      change: -1.87,
    },
    {
      name: "Multimedia & Graphics Software",
      children: [
        {
          name: "TTWO",
          description: "Take-Two Interactive Software, Inc.",
          color: "#919755",
          valuation: 330,
          change: 0.95,
        },
        {
          name: "EA",
          description: "Electronic Arts Inc.",
          color: "#7ab65e",
          valuation: 1050,
          change: 3.37,
        },
        {
          name: "ATVI",
          description: "Activision Blizzard, Inc.",
          color: "#988e52",
          valuation: 1426,
          change: 0.24,
        },
      ],
      change: 2.28,
    },
    {
      name: "Semiconductor Equipment & Materials",
      children: [
        {
          name: "SNPS",
          description: "Synopsys, Inc.",
          color: "#85a85a",
          valuation: 323,
          change: 2.25,
        },
        {
          name: "KLAC",
          description: "KLA-Tencor Corporation",
          color: "#8d9d57",
          valuation: 432,
          change: 1.44,
        },
        {
          name: "LRCX",
          description: "Lam Research Corporation",
          color: "#969153",
          valuation: 665,
          change: 0.44,
        },
        {
          name: "AMAT",
          description: "Applied Materials, Inc.",
          color: "#be5c44",
          valuation: 1196,
          change: -3.65,
        },
      ],
      change: -4.39,
    },
    {
      name: "Semiconductor - Specialized",
      children: [
        {
          name: "NVDA",
          description: "NVIDIA Corporation",
          color: "#7db15d",
          valuation: 3700,
          change: 2.99,
        },
      ],
      change: -0.49,
    },
    {
      name: "Information Technology Services",
      children: [
        {
          name: "FIS",
          description: "Fidelity National Information Services, Inc.",
          color: "#c94d40",
          valuation: 899,
          change: -4.82,
        },
        {
          name: "CTSH",
          description: "Cognizant Technology Solutions Corporation",
          color: "#959354",
          valuation: 1260,
          change: 0.59,
        },
        {
          name: "ACN",
          description: "Accenture plc",
          color: "#81ad5b",
          valuation: 2814,
          change: 2.65,
        },
        {
          name: "IBM",
          description: "International Business Machines Corporation",
          color: "#7cb35d",
          valuation: 3388,
          change: 3.13,
        },
      ],
      change: -3.48,
    },
    {
      name: "Communication Equipment",
      children: [
        {
          name: "JNPR",
          description: "Juniper Networks, Inc.",
          color: "#b16d49",
          valuation: 266,
          change: -2.35,
        },
        {
          name: "HRS",
          description: "Harris Corporation",
          color: "#88a459",
          valuation: 494,
          change: 1.92,
        },
        {
          name: "MSI",
          description: "Motorola Solutions, Inc.",
          color: "#6acb64",
          valuation: 504,
          change: 4.99,
        },
        {
          name: "HPE",
          description: "Hewlett Packard Enterprise Company",
          color: "#c65241",
          valuation: 616,
          change: -4.46,
        },
        {
          name: "QCOM",
          description: "QUALCOMM Incorporated",
          color: "#a8794c",
          valuation: 2491,
          change: -1.39,
        },
        {
          name: "CSCO",
          description: "Cisco Systems, Inc.",
          color: "#a9784c",
          valuation: 5208,
          change: -1.47,
        },
      ],
      change: -2.82,
    },
    {
      name: "Telecom Services - Domestic",
      children: [
        {
          name: "CTL",
          description: "CenturyLink, Inc.",
          color: "#998e52",
          valuation: 531,
          change: 0.2,
        },
        {
          name: "VZ",
          description: "Verizon Communications Inc.",
          color: "#bc5e45",
          valuation: 5640,
          change: -3.49,
        },
        {
          name: "T",
          description: "AT&T Inc.",
          color: "#76bb5f",
          valuation: 6077,
          change: 3.74,
        },
      ],
      change: -4.69,
    },
    {
      name: "Semiconductor - Broad Line",
      children: [
        {
          name: "QRVO",
          description: "Qorvo, Inc.",
          color: "#ad724a",
          valuation: 225,
          change: -1.93,
        },
        {
          name: "MCHP",
          description: "Microchip Technology Incorporated",
          color: "#a2814f",
          valuation: 585,
          change: -0.81,
        },
        {
          name: "AVGO",
          description: "Broadcom Inc.",
          color: "#7bb45d",
          valuation: 2538,
          change: 3.22,
        },
        {
          name: "TXN",
          description: "Texas Instruments Incorporated",
          color: "#7ab65e",
          valuation: 2914,
          change: 3.33,
        },
        {
          name: "INTC",
          description: "Intel Corporation",
          color: "#909955",
          valuation: 6666,
          change: 1.07,
        },
      ],
      change: -3.37,
    },
    {
      name: "Application Software",
      children: [
        {
          name: "CDNS",
          description: "Cadence Design Systems, Inc.",
          color: "#a47e4e",
          valuation: 345,
          change: -1.02,
        },
        {
          name: "ANSS",
          description: "ANSYS, Inc.",
          color: "#b86446",
          valuation: 391,
          change: -3.05,
        },
        {
          name: "RHT",
          description: "Red Hat, Inc.",
          color: "#c75040",
          valuation: 672,
          change: -4.61,
        },
        {
          name: "INTU",
          description: "Intuit Inc.",
          color: "#76bc60",
          valuation: 1408,
          change: 3.81,
        },
        {
          name: "CRM",
          description: "salesforce.com, inc.",
          color: "#aa764c",
          valuation: 2760,
          change: -1.61,
        },
        {
          name: "ADBE",
          description: "Adobe Systems Incorporated",
          color: "#71c261",
          valuation: 3312,
          change: 4.27,
        },
        {
          name: "ORCL",
          description: "Oracle Corporation",
          color: "#86a659",
          valuation: 5050,
          change: 2.13,
        },
      ],
      change: 0.98,
    },
    {
      name: "Business Software & Services",
      children: [
        {
          name: "IRM",
          description: "Iron Mountain Incorporated",
          color: "#b86446",
          valuation: 338,
          change: -3.07,
        },
        {
          name: "FFIV",
          description: "F5 Networks, Inc.",
          color: "#b46948",
          valuation: 286,
          change: -2.67,
        },
        {
          name: "CTXS",
          description: "Citrix Systems, Inc.",
          color: "#79b75e",
          valuation: 416,
          change: 3.47,
        },
        {
          name: "CA",
          description: "CA, Inc.",
          color: "#9e8650",
          valuation: 494,
          change: -0.38,
        },
        {
          name: "ADP",
          description: "Automatic Data Processing, Inc.",
          color: "#81ad5b",
          valuation: 1612,
          change: 2.68,
        },
        {
          name: "MSFT",
          description: "Microsoft Corporation",
          color: "#80ae5b",
          valuation: 22748,
          change: 2.7,
        },
      ],
      change: -4.96,
    },
    {
      name: "Internet Information Providers",
      children: [
        {
          name: "TRIP",
          description: "TripAdvisor, Inc.",
          color: "#82ac5b",
          valuation: 330,
          change: 2.56,
        },
        {
          name: "AKAM",
          description: "Akamai Technologies, Inc.",
          color: "#c55241",
          valuation: 352,
          change: -4.42,
        },
        {
          name: "VRSN",
          description: "VeriSign, Inc.",
          color: "#7ab65e",
          valuation: 528,
          change: 3.36,
        },
        {
          name: "TWTR",
          description: "Twitter, Inc.",
          color: "#aa774c",
          valuation: 880,
          change: -1.59,
        },
        {
          name: "FB",
          description: "Facebook, Inc.",
          color: "#aa764c",
          valuation: 17385,
          change: -1.61,
        },
        {
          name: "GOOGL",
          description: "Alphabet Inc.",
          color: "#bb6145",
          valuation: 24395,
          change: -3.32,
        },
      ],
      change: 1.76,
    },
  ];
}
