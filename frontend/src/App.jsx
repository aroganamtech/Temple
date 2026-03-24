import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
// import theme from './theme';
import theme from './pages/theme';

// Layout & Components
import Navbar from './components/common/Navbar';

// Pages - Direct mapping to your new folder structure
// import Home from './pages/Home/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Home from "./pages/Home/Home";
import AboutUs from "./pages/About/AboutUs";
// import ProductList from './pages/Product/ProductList';
import ProductList from './pages/Product/ProductDetails';
import Product from './pages/Product/Product';
// import QuickBooking from './pages/QuickBooking/PriestBooking';
import QuickBooking from './pages/QuickBooking/QuickBooking'
import TempleSearch from './pages/Temple/TempleSearch';
import ContactUs from './pages/Contact/ContactUs';
import Dashboard from './pages/Admin/Dashboard';
import DonationPage from './pages/Donate/DonationPage';
// import Login from './pages/Auth/Login';
import Login from "./pages/Auth/Login"
import DivineChatbot from "./pages/DivineChatbot";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/productlist" element={<ProductList />} />
          <Route path="/product" element={<Product />} />
          <Route path="/quickbooking" element={<QuickBooking />} />
          <Route path="/temple" element={<TempleSearch />} />
           <Route path="/contact" element={<ContactUs />} />
          {/* <Route path="/contact" element={<ContactUs />} /> */}
          {/* <Route path="/admin" element={<Dashboard />} /> */}
          {/* <Route path="/donate" element={<DonationPage />} /> */}
          {/* <Route path="/login" element={<Login />} /> */}
        </Routes>
          <>
      {/* Your Routes / Pages */}
      
      <DivineChatbot /> {/* 🔥 This makes it global */}
    </>
      </Router>
    </ThemeProvider>
  );
}

export default App;