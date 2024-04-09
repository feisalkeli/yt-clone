import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import VideoDetail from "./components/VideoDetail";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Structure from "./components/Structure";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigation />} />
        <Route path="/" element={<Structure />} />

        <Route path="videodetail/:id" element={<VideoDetail />} />
        <Route path="/" element={<Footer />} />
      </Routes>
    </Router>
  );
}

export default App;
