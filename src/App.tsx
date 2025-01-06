import './App.css'
// import ChartComponent from './components/AGCharts/01-03-2025/MultipleRangeBars'
// import ChartComponent from "./components/D3Charts/Reworks/01-04-2025/BoxPlot";
// import ChordChart from "./components/D3Charts/Reworks/01-04-2025/RadialClusterTree";
import Chart from "./components/D3Charts/Reworks/01-04-2025/CostPerGallon";
import "ag-charts-enterprise"

function App() {

  return (
    <div style={{background:"linear-gradient(120deg, #ff0008, #ff00ae, #ff001e)",width:"100dvw",height:"100dvh"}}>
      <Chart />
    </div>
  )
}

export default App
