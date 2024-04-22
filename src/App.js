import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import MovieInfo from "./pages/MovieInfo";
import Login from "./pages/Login";



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/login" exact element={<Login/>} />
        <Route path="/" exact element={<Home/>} />
        <Route path="/search" element={<Search />} />
        <Route path="/search/:id" element={<MovieInfo/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
