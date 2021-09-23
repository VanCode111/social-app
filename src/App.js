import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "./components";
import "./store";
function App() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;
