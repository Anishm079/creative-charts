import './App.css'
import MyResponsiveTreeMap from './components/01-13-2025/InventoryOverview2'
import "ag-charts-enterprise"

function App() {

  return (
    <div style={{background:"linear-gradient(to right, #fbff00,#ff0000)",width:"100dvw",height:"100dvh"}}>
      <h2>Inventory Overview: Products, Utilities, and Operations</h2>
      <div style={{height:"80dvh",width:"100%"}} >
        <MyResponsiveTreeMap />
      </div>
    </div>
  )
}

export default App
