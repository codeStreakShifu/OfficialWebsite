import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import GraphicDesign from "./pages/services/GraphicDesign";
import Marketing from "./pages/services/Marketing";
import WebDevelopment from "./pages/services/WebDevelopment";
import BookPublishing from "./pages/services/BookPublishing";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import "./index.css"; // Import your global CSS file
import initAOS from "./utils/aos";
// import CustomCursor from "./components/CustomCursor";
import PrivacyPolicy from "./pages/policies/PrivacyPolicy";
import TermsOfService from "./pages/policies/TermsOfService";
import CookiePolicy from "./pages/policies/CookiePolicy";

function App() {
  useEffect(() => {
    initAOS();
  }, []);

  return (
    <Router>
      <div className="flex flex-col min-h-screen w-full overflow-x-hidden">
        {/* Removed cursor-none from main wrapper */}
        <div className="fixed inset-0 pointer-events-none z-[9999]">
          
        </div>
        <Header />
        <main className="flex-grow w-full">
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="services/graphic-design" element={<GraphicDesign />} />
            <Route path="services/marketing" element={<Marketing />} />
            <Route path="services/web-development" element={<WebDevelopment />} />
            <Route path="services/book-publishing" element={<BookPublishing />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="blog" element={<Blog />} />
            <Route path="contact" element={<Contact />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="terms" element={<TermsOfService />} />
            <Route path="cookies" element={<CookiePolicy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
