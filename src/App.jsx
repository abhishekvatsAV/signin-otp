import "./App.css";
import Signin from "./pages/Signin";
import { HashRouter, Route, Routes } from "react-router-dom";
import Success from "./pages/Success";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/success" element={<Success />} />
          <Route path="/" element={<Signin />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
