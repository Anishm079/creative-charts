import './App.css'
// import ChartComponent from './components/AGCharts/01-03-2025/MultipleRangeBars'
// import Chart from "./components/D3Charts/Reworks/01-09-2025/IcelandicPopulationByAge";
// import ChartComponent from "./components/AGCharts/past/PlayersMarketValue.tsx"
// import ChartComponent from "./components/AGCharts/12-20-2024/GroupedCategoryAxisCombination.tsx"
// import ChordChart from "./components/D3Charts/Reworks/01-04-2025/RadialClusterTree";
import PartitionChart from "./components/D3Charts/Reworks/01-31-2025/AgriculturalWaste";
import "ag-charts-enterprise"

function App() {

  return (
    <div style={{background:"linear-gradient(120deg, #51ff00, #ffee00)",width:"100dvw",height:"100dvh"}}>
      <h2>Agricultural Waste (Sankey Chart)</h2>
      <PartitionChart />
    </div>
  )
}

export default App
