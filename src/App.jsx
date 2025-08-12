import React, { useEffect, useRef } from "react";
import Navigation from './components/Navigation.jsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BackgroundCursor from './components/BackgroundCursor';
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
import CursorFollower from './components/CursorFollower'

function App() {
  return (
    <>
      <Router>
        
        <Navigation />
        <BackgroundCursor />
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

        <CursorFollower />
        <Footer />
      </Router>
    </>
  )
}
export default App