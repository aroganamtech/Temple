import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './pages/theme';

// Layout & Components
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';

// Core Pages
import Home from "./pages/Home/Home";
import AboutUs from "./pages/About/AboutUs";
import ProductDetails from './pages/Product/ProductDetails';
import Product from './pages/Product/Product';
import QuickBooking from './pages/QuickBooking/QuickBooking';

import Calendar from './pages/Calendar/Calendar';
import Blogs from './pages/Blogs/Blogs';
import EventsPage from './pages/Event/Event';
import Dosham from './pages/Temple/Dosham'
import DecayingTemples from './pages/Temple/DecayingTemples';
import Gods from './pages/Temple/Gods';
import ContactUs from './pages/Contact/ContactUs';
import Dashboard from './pages/Admin/Dashboard';
import DonationPage from './pages/Donate/DonationPage';
<<<<<<< HEAD

import Login from "./pages/Auth/Login";
=======
// import Login from './pages/Auth/LoginPage';
import LoginPage from './pages/Auth/LoginPage';
>>>>>>> Gokul-branch-DJ
import YatraBooking from './pages/QuickBooking/YatraBooking';
import DivineChatbot from './pages/DivineChatbot';
import VentorPage from './pages/ventor/Ventor';
import TempleSearch from './pages/Temple/TempleSearch'
import Adiyargal from './pages/Temple/Adiyargal';
// import VendorCard from './components/common/VentorCard';
import ventorCard from './components/common/VendorCard'
import VentorCard from './components/common/VendorCard';

<<<<<<< HEAD

// import Login from './pages/Auth/Login';
import DivineChatbot from "./pages/DivineChatbot";

=======
>>>>>>> Gokul-branch-DJ
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

<<<<<<< HEAD
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/donate" element={<DonationPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/booking/yatra" element={<YatraBooking />} />
=======
          <Route path='/ventor' element={<VentorPage />} />
          <Route path='/calendar' element={<Calendar />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/event' element={<EventsPage />} />

          {/* temple section */}
          <Route path='/dhosam' element={<Dosham />} />
          <Route path='/adiyargal' element={<Adiyargal />} />
          <Route path='/decaying' element={<DecayingTemples />} />
          <Route path='/gods' element={<Gods />} />
          <Route path='/temple' element={<TempleSearch />} />

          <Route path='/ventor' element={<VentorPage />} />
          <Route path='ventorCard' element={<VentorCard />} />

          {/* <Route path="/contact" element={<ContactUs />} /> */}
          {/* <Route path="/admin" element={<Dashboard />} /> */}
          {/* <Route path="/donate" element={<DonationPage />} /> */}
          {/* <Route path="/login" element={<Login />} /> */}

          {/* Auth & Admin */}
          <Route path='/contact' element={<ContactUs />} />
          <Route path='/admin' element={<Dashboard />} />
          <Route path='/donate' element={<DonationPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/booking/yatra' element={<YatraBooking />} />
>>>>>>> Gokul-branch-DJ

          {/* --- TEMPLE DROPDOWN ROUTES --- */}
          {/* These paths MUST match your Navbar links exactly */}
          <Route path="/temple/gods" element={<Gods />} />
          <Route path="/temple/dosham" element={<Dosham />} />
          <Route path="/temple/decaying" element={<DecayingTemples />} />
          <Route path="/temple/adiyargal" element={<Adiyargal />} />

<<<<<<< HEAD
         
          {/* <Route path="/contact" element={<ContactUs />} /> */}
          {/* <Route path="/admin" element={<Dashboard />} /> */}
          {/* <Route path="/donate" element={<DonationPage />} /> */}
          {/* <Route path="/login" element={<Login />} /> */}

=======
>>>>>>> Gokul-branch-DJ
        </Routes>
        <DivineChatbot />
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;