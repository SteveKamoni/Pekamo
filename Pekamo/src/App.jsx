import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import FooterSection from "./components/FooterSection";
import AnimatedRoutes from "./AnimatedRoutes";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <AnimatedRoutes />
      <FooterSection />
    </BrowserRouter>
  );
}
