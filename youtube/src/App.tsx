import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import VideoDetail from "./components/VideoDetail";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Root from "./components/Root";

function App() {
  return (
    <Router>
      <Navigation /> {/* Navigation shown across all pages */}
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="videodetail/:id" element={<VideoDetail />} />
      </Routes>
      <Footer /> {/* Footer shown across all pages */}
    </Router>
  );
}

export default App;
