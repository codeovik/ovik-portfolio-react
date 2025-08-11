import React, { useEffect, useRef } from "react";
import Navigation from './components/Navigation.jsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BgCursor from './components/BgCursor';
import Footer from './components/Footer';
import GoTop from './components/GoTop';
import Portfolio from './pages/Portfolio';
import PortfolioDetails from './pages/PortfolioDetails';
import ContactPage from './pages/ContactPage'
import AboutMe from './pages/AboutMe'
import Blog from './pages/Blog'
import BlogDetails from './pages/BlogDetails'
import Thanks from './pages/Thanks'
import NotFound from './pages/NotFound'
import Lenis from "@studio-freight/lenis";

function App() {
  // Smooth scrolling with Lenis
  const lenisRef = useRef();
  useEffect(() => {
    lenisRef.current = new Lenis({
      duration: 0.3,
      easing: (t) => t * (2 - t),
      smooth: true,
      // direction: 'vertical'
    });
    function raf(time) {
      lenisRef.current.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => {
      lenisRef.current.destroy();
    };
  }, []);

  return (
    <>
      <Router>
        
        <Navigation />
        <BgCursor />
        <GoTop />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:id" element={<PortfolioDetails />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/thanks" element={<Thanks />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </Router>
    </>
  )
}
export default App