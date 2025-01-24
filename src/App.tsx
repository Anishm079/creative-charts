import "./App.css";
// import MyResponsiveStream from './components/01-13-2025/PerformanceMeasuresInAnEventForDifferentPersons'
import EChartsComponent from "./components/01-20-2025/temp";

function App() {
  return (
    <div
      style={{
        background: "linear-gradient(to right, #d15555,#7300ff)",
        width: "100dvw",
        height: "100dvh",
      }}
    >
      <h2 style={{ color: "#000" }}>global smartphone market share by manufacturer</h2>
      <div
        style={{
          height: "90%",
          width: "100dvw",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <EChartsComponent />
      </div>
    </div>
  );
}

export default App;
