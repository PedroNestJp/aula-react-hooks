import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DogGallery from "./pages/DogGallery";
import About from "./pages/About";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dogs" element={<DogGallery />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
