import './App.css'
// import MyResponsiveStream from './components/01-13-2025/PerformanceMeasuresInAnEventForDifferentPersons'
import GaugeChart from './components/01-15-2025/VehicleSpeedMeter'
import "ag-charts-enterprise"

function App() {

  return (
    <div style={{background:"linear-gradient(to right, #592478,#284440)",width:"100dvw",height:"100dvh"}}>
      <h2 style={{color:"white"}}>speed meter</h2>
      <div style={{height:"90%",width:"100dvw",display:"flex",alignItems:"center",justifyContent:"center"}} >
        <GaugeChart />
      </div>
    </div>
  )
}

export default App
