import "./App.css";
import "./App.css";
import Header from "./components/Header";
import { GlobalProvider } from "./context/GlobalState";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <GlobalProvider>
      <div className="hidden flex-col md:flex">
        <Header />
        <Dashboard />
      </div>
    </GlobalProvider>
  );
}

export default App;
