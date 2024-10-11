import "./App.css";
import Header from "./components/Header";
import "./App.css";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="hidden flex-col md:flex">
      <Header />
      <Dashboard />
    </div>
  );
}

export default App;
