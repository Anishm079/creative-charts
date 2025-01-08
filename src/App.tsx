import './App.css'
// import ChartComponent from './components/AGCharts/12-26-2024/Nightingale'
import RadialChart from "./components/D3Charts/Reworks/01-08-2025/RadialChart";
// import Chart from './components/D3Charts/Reworks/01-07-2025/Collapsibletree'
import "ag-charts-enterprise"
// import DigitalMarketingScenarioForAWebsite from './components/Recharts/01-08-2025/DigitalMarketingScenarioForAWebsite'

function App() {

  return (
    <div style={{background:"linear-gradient(120deg, #ff1e00, #00ffe1, #04ff00)",width:"100dvw",height:"100dvh"}}>
      <RadialChart />
    </div>
  )
}

export default App
