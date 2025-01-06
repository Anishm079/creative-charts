import React from "react";
import { AgChartOptions, AgCharts } from "ag-charts-community";

const ChartComponent: React.FC = () => {
  const options: AgChartOptions = {
    container: document.getElementById("myChart"),
    title: {
      text: "FRIENDS & ACQUAINTANCES",
    },
    background: {
      fill: "transparent",
    },
    animation: { enabled: false },
    series: Object.entries(getData()).map(([relationship, data]) => ({
      data,
      type: "radar-line",
      angleKey: "recognitionTime",
      angleName: "Recognition Time",
      radiusKey: "closeness",
      radiusName: relationship
        .split(" ")
        .map((word) => `${word[0].toUpperCase()}${word.substring(1)}`)
        .join(" "),
      strokeWidth: 0,
      marker: {
        strokeWidth: 1,
        fillOpacity: 0.1,
      },
    })),
    axes: [
      {
        type: "angle-number",
        label: {
          spacing: 0,
        },
        line: {
          enabled: false,
        },
      },
      {
        type: "radius-number",
        shape: "circle",
        reverse: true,
        label: {
          enabled: false,
        },
        interval: {
          step: 0.4,
        },
      },
    ],
    legend: {
      enabled: false,
    },
  };

  React.useEffect(() => {
    AgCharts.create(options);
  }, []);

  return (
    <div
      id="myChart"
      style={{
        height: "90dvh",
        width: "90dvw",
        fontFamily: '"Dancing Script", serif', 
        background: "linear-gradient(135deg, #ff5f6d, #ffc3a0, #6a82fb)",
      }}
    /> 
  );
};

const getData = () => {
    return {acquaintances: [{ name: "Person 1", closeness: 7.842109745783259, recognitionTime: 38 },{ name: "Person 2", closeness: 7.95685818873415, recognitionTime: 124 },{name: "Person 3",closeness: 7.696326908171657,recognitionTime: 376,},{ name: "Person 4", closeness: 9.787172048960631, recognitionTime: 96 },{name: "Person 5",closeness: 6.112358467331057,recognitionTime: 305,},{ name: "Person 6", closeness: 9.32642510707059, recognitionTime: 380 },{name: "Person 8",closeness: 7.416800585002122,recognitionTime: 340,},{name: "Person 9",closeness: 7.683990911747775,recognitionTime: 135,},{name: "Person 10",closeness: 9.926669489867527,recognitionTime: 394,},{name: "Person 597",closeness: 7.069722193359662,recognitionTime: 259,},{name: "Person 607",closeness: 9.847351060789082,recognitionTime: 312,},{name: "Person 608",closeness: 7.7825423552189426,recognitionTime: 216,},{name: "Person 610",closeness: 8.941141036687506,recognitionTime: 149,},{name: "Person 611",closeness: 6.525023344942135,recognitionTime: 276,},{name: "Person 612",closeness: 7.514845821079615,recognitionTime: 168,},{name: "Person 613",closeness: 6.613526903879269,recognitionTime: 230,},{name: "Person 614",closeness: 7.455087619039262,recognitionTime: 121,},{name: "Person 615",closeness: 7.314492830892224,recognitionTime: 204,},{name: "Person 617",closeness: 7.111794688273763,recognitionTime: 204,},{name: "Person 618",closeness: 9.260351219430206,recognitionTime: 390,},{name: "Person 619",closeness: 6.538277646712057,recognitionTime: 228,},{name: "Person 620",closeness: 7.118233658587216,recognitionTime: 321,},{name: "Person 621",closeness: 8.188904774203504,recognitionTime: 254,},{name: "Person 622",closeness: 8.28136813034029,recognitionTime: 71,},{name: "Person 624",closeness: 7.019460911648234,recognitionTime: 183,},{name: "Person 625",closeness: 8.133140438878268,recognitionTime: 117,},{name: "Person 626",closeness: 6.6505856108707375,recognitionTime: 104,},{name: "Person 627",closeness: 9.090191689941358,recognitionTime: 195,},{name: "Person 628",closeness: 6.189460614126391,recognitionTime: 169,},{name: "Person 629",closeness: 6.472482439476031,recognitionTime: 378,},{name: "Person 631",closeness: 8.067817425241127,recognitionTime: 68,},{name: "Person 632",closeness: 7.811831884136782,recognitionTime: 105,},{name: "Person 633",closeness: 6.569528141912086,recognitionTime: 161,},{name: "Person 634",closeness: 8.863518216382497,recognitionTime: 397,},{name: "Person 635",closeness: 8.349857269544732,recognitionTime: 310,},{name: "Person 636",closeness: 6.627333388812317,recognitionTime: 219,},{name: "Person 638",closeness: 6.59003417390926,recognitionTime: 89,},{name: "Person 639",closeness: 8.70583614719811,recognitionTime: 331,},{name: "Person 640",closeness: 9.075726385692978,recognitionTime: 92,},{name: "Person 641",closeness: 7.082845955230792,recognitionTime: 236,},{name: "Person 642",closeness: 9.457835702937642,recognitionTime: 383,},{name: "Person 643",closeness: 9.300488940033135,recognitionTime: 380,},{name: "Person 645",closeness: 6.122541487322802,recognitionTime: 173,},{name: "Person 646",closeness: 8.653383137761445,recognitionTime: 356,},{name: "Person 647",closeness: 7.776786439217044,recognitionTime: 142,},{name: "Person 648",closeness: 6.189445091017285,recognitionTime: 313,},{name: "Person 649",closeness: 6.590015831397831,recognitionTime: 245,},{name: "Person 650",closeness: 6.398930373172167,recognitionTime: 356,},{name: "Person 652",closeness: 7.89426045492217,recognitionTime: 257,},{name: "Person 653",closeness: 6.393651851641024,recognitionTime: 266,},{name: "Person 654",closeness: 9.027798865854626,recognitionTime: 144,},{name: "Person 655",closeness: 8.845583996851474,recognitionTime: 77,},{name: "Person 656",closeness: 7.109145048125805,recognitionTime: 243,},{name: "Person 657",closeness: 8.51867841971847,recognitionTime: 14,},{name: "Person 659",closeness: 7.845168547063746,recognitionTime: 342,},{name: "Person 660",closeness: 8.9335279891602,recognitionTime: 122,},{name: "Person 661",closeness: 7.995328684083674,recognitionTime: 307,},{name: "Person 662",closeness: 6.2673400263293155,recognitionTime: 319,},{name: "Person 663",closeness: 8.199703368304913,recognitionTime: 209,},{name: "Person 664",closeness: 8.935773228788292,recognitionTime: 98,},{name: "Person 666",closeness: 8.14123543018496,recognitionTime: 173,},{name: "Person 667",closeness: 9.581625467620249,recognitionTime: 240,},{name: "Person 668",closeness: 7.032202360265564,recognitionTime: 315,},{name: "Person 669",closeness: 9.789463745837658,recognitionTime: 379,},{name: "Person 670",closeness: 6.583738873280512,recognitionTime: 251,},{name: "Person 671",closeness: 8.071615698593417,recognitionTime: 14,},{name: "Person 673",closeness: 8.440569773377597,recognitionTime: 260,},{name: "Person 674",closeness: 6.243948559193866,recognitionTime: 337,},{name: "Person 675",closeness: 8.544764737496436,recognitionTime: 353,},{name: "Person 676",closeness: 6.981298681896571,recognitionTime: 56,},{name: "Person 677",closeness: 8.320622709240054,recognitionTime: 394,},{name: "Person 678",closeness: 6.945473351899211,recognitionTime: 274,},{name: "Person 680",closeness: 7.261568131176556,recognitionTime: 286,},{name: "Person 681",closeness: 9.822514569652775,recognitionTime: 116,},{name: "Person 682",closeness: 6.61616067855198,recognitionTime: 230,},{name: "Person 683",closeness: 7.3404492754820945,recognitionTime: 210,},{name: "Person 684",closeness: 6.453299906241893,recognitionTime: 294,},{name: "Person 685",closeness: 7.338128067859225,recognitionTime: 220,},{name: "Person 687",closeness: 9.221513770954566,recognitionTime: 28,},{name: "Person 688",closeness: 8.169785183978755,recognitionTime: 207,},{name: "Person 689",closeness: 7.222705483459636,recognitionTime: 122,},{name: "Person 690",closeness: 9.841366271997074,recognitionTime: 341,},{name: "Person 691",closeness: 9.288585658691694,recognitionTime: 114,},{name: "Person 692",closeness: 6.435086490458103,recognitionTime: 221,},{name: "Person 694",closeness: 6.842498375212057,recognitionTime: 146,},{name: "Person 695",closeness: 8.670391922074923,recognitionTime: 129,},{name: "Person 696",closeness: 8.596186336589607,recognitionTime: 37,},{name: "Person 697",closeness: 6.253788772899067,recognitionTime: 388,},{name: "Person 698",closeness: 9.802409224056898,recognitionTime: 2,},{name: "Person 699",closeness: 7.354116268883903,recognitionTime: 183,},],friends: [{name: "Person 7",closeness: 3.9202641806899416,recognitionTime: 258,},{name: "Person 14",closeness: 2.292362830936807,recognitionTime: 28,},{name: "Person 21",closeness: 4.395127812791592,recognitionTime: 257,},{name: "Person 28",closeness: 2.2353809137211424,recognitionTime: 65,},{name: "Person 35",closeness: 5.311827386583203,recognitionTime: 159,},{name: "Person 42",closeness: 4.627379072722593,recognitionTime: 210,},{name: "Person 49",closeness: 5.2761929902713955,recognitionTime: 58,},{name: "Person 56",closeness: 3.7983532993171547,recognitionTime: 113,},{name: "Person 63",closeness: 3.1422119828335413,recognitionTime: 388,},{name: "Person 70",closeness: 4.532817705734941,recognitionTime: 260,},{name: "Person 77",closeness: 2.7578454414371762,recognitionTime: 89,},{name: "Person 84",closeness: 4.073251948527606,recognitionTime: 300,},{name: "Person 91",closeness: 2.342276441059405,recognitionTime: 281,},{name: "Person 98",closeness: 3.735284687973058,recognitionTime: 193,},{name: "Person 105",closeness: 3.057771109203032,recognitionTime: 85,},{name: "Person 112",closeness: 4.0691429698385715,recognitionTime: 124,},{name: "Person 119",closeness: 4.037982658064011,recognitionTime: 71,},{name: "Person 126",closeness: 2.729953916908668,recognitionTime: 267,},{name: "Person 133",closeness: 4.001913434621239,recognitionTime: 101,},{name: "Person 140",closeness: 5.3978516351494665,recognitionTime: 46,},{name: "Person 147",closeness: 5.357248961801431,recognitionTime: 184,},{name: "Person 154",closeness: 3.4589110948969246,recognitionTime: 251,},{name: "Person 161",closeness: 3.0897268111649208,recognitionTime: 158,},{name: "Person 168",closeness: 4.293135372110265,recognitionTime: 77,},{name: "Person 175",closeness: 2.172121545439614,recognitionTime: 268,},{name: "Person 182",closeness: 3.336863741052687,recognitionTime: 289,},{name: "Person 189",closeness: 4.268846061565186,recognitionTime: 150,},{name: "Person 196",closeness: 2.592216845923353,recognitionTime: 273,},{name: "Person 203",closeness: 2.2555887674667545,recognitionTime: 368,},{name: "Person 210",closeness: 3.3951402244140185,recognitionTime: 159,},{name: "Person 217",closeness: 2.9427472189886874,recognitionTime: 300,},{name: "Person 224",closeness: 4.95278570362667,recognitionTime: 93,},{name: "Person 231",closeness: 5.684790563036275,recognitionTime: 382,},{name: "Person 238",closeness: 3.538708538880708,recognitionTime: 81,},{name: "Person 245",closeness: 3.8087663313666553,recognitionTime: 323,},{name: "Person 252",closeness: 4.883459870185179,recognitionTime: 25,},{name: "Person 259",closeness: 2.2221577898334806,recognitionTime: 95,},{name: "Person 266",closeness: 4.42099968511765,recognitionTime: 30,},{name: "Person 273",closeness: 5.640789853358954,recognitionTime: 104,},{name: "Person 280",closeness: 2.181315640512783,recognitionTime: 241,},{name: "Person 287",closeness: 3.265415610345851,recognitionTime: 305,},{name: "Person 294",closeness: 2.169996733334389,recognitionTime: 203,},{name: "Person 301",closeness: 3.477208013217875,recognitionTime: 198,},{name: "Person 308",closeness: 2.8197617410515807,recognitionTime: 314,},{name: "Person 315",closeness: 3.8517344864825427,recognitionTime: 332,},{name: "Person 322",closeness: 4.440950964635949,recognitionTime: 109,},{name: "Person 329",closeness: 3.9360574037855516,recognitionTime: 254,},{name: "Person 336",closeness: 3.636089544561938,recognitionTime: 155,},{name: "Person 343",closeness: 5.9710108180302175,recognitionTime: 382,},{name: "Person 350",closeness: 3.9498967578943924,recognitionTime: 209,},{name: "Person 693",closeness: 3.8955907404936454,recognitionTime: 365,},{name: "Person 700",closeness: 3.8929093015794836,recognitionTime: 123,},],};
};

export default ChartComponent;