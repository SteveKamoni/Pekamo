import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import InfoTabs from './components/InfoTabs';
import AboutSection from "./components/AboutSection";
import LearnMore from './pages/LearnMore';
import FooterSection from './components/FooterSection'


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<InfoTabs />}>
          <Route path="about" element={<AboutSection />} />
        </Route>
        <Route path='/learn-more' element={<LearnMore/>} />
      </Routes>
      <FooterSection/>
    </BrowserRouter>
  );
}

export default App;
