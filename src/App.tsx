import './App.css'
import MyResponsiveRadar from './components/01-10-2025/WineAttributesBasedOnDifferentTasteProfiles'
import "ag-charts-enterprise"

function App() {

  return (
    <div style={{background:"linear-gradient(to left, #ff00ff,#ff6e6e,#ff0909)",width:"100dvw",height:"100dvh"}}>
      <h2>popularity score of famous programming languages</h2>
      <div style={{height:"80dvh",width:"100%"}} >
        <MyResponsiveRadar />
      </div>
    </div>
  )
}

export default App
