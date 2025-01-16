import './App.css'
// import ChartComponent from './components/AGCharts/01-03-2025/MultipleRangeBars'
// import ChartComponent from "./components/D3Charts/Reworks/01-04-2025/BoxPlot";
// import ChordChart from "./components/D3Charts/Reworks/01-04-2025/RadialClusterTree";
// import DailySalesAndWebsiteTrafficForAnECommerceCompany from './components/Recharts/01-08-2025/DailySalesAndWebsiteTrafficForAnECommerceCompany'
import ASchoolIsAnalyzingThePerformanceOfTwoStudents from './components/Recharts/01-08-2025/ASchoolIsAnalyzingThePerformanceOfTwoStudents'

function App() {

  return (
    <div style={{background:"linear-gradient(120deg, #fff30b, #a202ff, #c3ff00)",width:"100dvw",height:"100dvh",placeItems:"center",display:"grid" }}>
      <h2>A School Is Analyzing The Performance Of Two Students</h2>
      <ASchoolIsAnalyzingThePerformanceOfTwoStudents />
    </div>
  )
}

export default App
