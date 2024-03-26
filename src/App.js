import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/search" element={<Search/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
