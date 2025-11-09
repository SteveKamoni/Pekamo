import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import InfoTabs from './components/InfoTabs';
import AboutSection from "./components/AboutSection";
// import VisionSection from './components/VisionSection/VisionSection';
// import MissionSection from './components/MissionSection/MissionSection';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<InfoTabs />}>
          <Route path="about" element={<AboutSection />} />
          {/* <Route path="vision" element={<VisionSection />} />
           <Route path="mission" element={<MissionSection />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
