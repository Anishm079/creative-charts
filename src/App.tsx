import './App.css'
// import MyResponsiveStream from './components/01-13-2025/PerformanceMeasuresInAnEventForDifferentPersons'
import MyResponsiveRadialBar from './components/01-13-2025/FoodMarketShare'
import "ag-charts-enterprise"

function App() {

  return (
    <div style={{background:"linear-gradient(to right, #a200ff,#00ffdd)",width:"100dvw",height:"100dvh"}}>
      <h2 style={{color:"white"}} >Food Market Share</h2>
      <div style={{height:"90dvh",width:"100dvw",display:"flex",alignItems:"center",justifyContent:"center"}} >
        <MyResponsiveRadialBar />
      </div>
    </div>
  )
}

export default App
