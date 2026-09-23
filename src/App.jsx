import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Register from './pages/Register';
import PastEvents from './pages/PastEvents';
import JoinUs from './pages/JoinUs';
import Collaborate from './pages/Collaborate';
import Contact from './pages/Contact';

// Scroll to top upon navigation
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="site-wrapper">
        <Header />
        <main id="main-content" tabIndex="-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/past-events" element={<PastEvents />} />
            <Route path="/past-events/:year" element={<PastEvents />} />
            <Route path="/join-us" element={<JoinUs />} />
            <Route path="/collaborate" element={<Collaborate />} />
            <Route path="/contact" element={<Contact />} />
            {/* Fallback to Home */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
