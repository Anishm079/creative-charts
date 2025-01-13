import './App.css'
// import ChartComponent from './components/AGCharts/01-03-2025/MultipleRangeBars'
// import Chart from "./components/D3Charts/Reworks/01-09-2025/IcelandicPopulationByAge";
import MyResponsiveECharts from "./components/AGCharts/past/QuarterlySalesPerformance.tsx"
// import ChartComponent from "./components/AGCharts/12-20-2024/GroupedCategoryAxisCombination.tsx"
// import ChordChart from "./components/D3Charts/Reworks/01-04-2025/RadialClusterTree";
// import Chart from "./components/D3Charts/Reworks/01-04-2025/CostPerGallon";
import "ag-charts-enterprise"

function App() {

  return (
    <div style={{background:"linear-gradient(120deg, #59ff00, #ffff00, #ffc081)",width:"100dvw",height:"100dvh"}}>
      <MyResponsiveECharts />
    </div>
  )
}

export default App
