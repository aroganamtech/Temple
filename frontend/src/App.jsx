import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './pages/theme';

// Layout & Components
import Navbar from './components/common/Navbar';

// Core Pages
import Home from "./pages/Home/Home";
import AboutUs from "./pages/About/AboutUs";
import ProductDetails from './pages/Product/ProductDetails';
import Product from './pages/Product/Product';
import QuickBooking from './pages/QuickBooking/QuickBooking';
import TempleSearch from './pages/Temple/TempleSearch';
import ContactUs from './pages/Contact/ContactUs';
import Dashboard from './pages/Admin/Dashboard';
import DonationPage from './pages/Donate/DonationPage';
import Login from "./pages/Auth/Login";

// --- Dropdown Pages for Temple Module ---
// Ensure these files exist in your 'pages/Temple/' folder
import Gods from './pages/Temple/Gods';
import Dosham from './pages/Temple/Dosham';
import DecayingTemples from './pages/Temple/DecayingTemples';
import Adiyargal from './pages/Temple/Adiyargal';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        {/* Navbar is outside Routes so it shows on every page */}
        <Navbar /> 
        
        <Routes>
          {/* Main Navigation */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/productlist" element={<ProductDetails />} />
          <Route path="/product" element={<Product />} />
          <Route path="/quickbooking" element={<QuickBooking />} />
          <Route path="/temple" element={<TempleSearch />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/donate" element={<DonationPage />} />
          <Route path="/login" element={<Login />} />

          {/* --- TEMPLE DROPDOWN ROUTES --- */}
          {/* These paths MUST match your Navbar links exactly */}
          <Route path="/temple/gods" element={<Gods />} />
          <Route path="/temple/dosham" element={<Dosham />} />
          <Route path="/temple/decaying" element={<DecayingTemples />} />
          <Route path="/temple/adiyargal" element={<Adiyargal />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;