import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalState";
import Dashboard from "./pages/Dashboard";
import PublicLayout from "./layouts/PublicLayout";
import Login from "./pages/Login";
import PrivateLayout from "./layouts/PrivateLayout";
import Home from "./pages/Home";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Routes>
          <Route element={<PublicLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Route>
          <Route element={<PrivateLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </Router>
    </GlobalProvider>
  );
}

export default App;
