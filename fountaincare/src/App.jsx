import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Programs from './Components/Programs/Programs';
import Services from './Components/Pages/Services';
import Blog from './Components/Pages/Blog';
import Contact from './Components/Pages/Contact';
import Footer from './Components/Footer/Footer';
import About from './Components/Pages/About';
import Admin from './Components/AdminPage/Admin';
import AdminLogin from './Components/AdminPage/AdminLogin';
import ProtectedRoute from './Components/ProtectedRoute';

const App = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <>
      <Navbar />
      {isHomePage && <Hero />} {/* Only render Hero on the homepage */}
      <Routes>
        <Route path="/" element={<Programs />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />

        {/* Admin login route */}
        <Route path="/admin-login" element={<AdminLogin />} />

        {/* Protected route for admin page */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
