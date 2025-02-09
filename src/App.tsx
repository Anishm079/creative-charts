import './App.css'
// import ChartComponent from './components/AGCharts/01-03-2025/MultipleRangeBars'
// import Chart from "./components/D3Charts/Reworks/01-09-2025/IcelandicPopulationByAge";
// import ChartComponent from "./components/AGCharts/past/PlayersMarketValue.tsx"
// import ChartComponent from "./components/AGCharts/12-20-2024/GroupedCategoryAxisCombination.tsx"
// import ChordChart from "./components/D3Charts/Reworks/01-04-2025/RadialClusterTree";
import Chart from "./components/D3Charts/Reworks/01-31-2025/CIrclePacking";
import "ag-charts-enterprise"

function App() {

  return (
    <div style={{background:"linear-gradient(120deg, #ff00f7, #a8ff7f, #81ffff)",width:"100dvw",height:"100dvh"}}>
      <Chart />
    </div>
  )
}

export default App
