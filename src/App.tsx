import './App.css'
// import MyResponsiveStream from './components/01-13-2025/PerformanceMeasuresInAnEventForDifferentPersons'
import MyResponsiveRadialBar from './components/01-23-2025/temp'
import "ag-charts-enterprise"

function App() {

  return (
    <div style={{background:"linear-gradient(to right, #ff0000,#bfff00)",width:"100dvw",height:"100dvh"}}>
      <h2 style={{color:"white"}} >types of plants sold in a nursery</h2>
      <div style={{height:"90dvh",width:"100dvw",display:"flex",alignItems:"center",justifyContent:"center"}} >
        <MyResponsiveRadialBar />
      </div>
    </div>
  )
}

export default App
