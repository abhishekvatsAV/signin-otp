import "./App.css";
import Signin from "./pages/Signin";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Success from "./pages/Success";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/success" element={<Success />} />
          <Route path="/" element={<Signin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
