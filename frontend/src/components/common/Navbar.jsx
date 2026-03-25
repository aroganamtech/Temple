import React from 'react';
import { 
  AppBar, 
  Toolbar, 
  Button, 
  Stack, 
//   Box, 
  Container, 
//   Typography 
} from '@mui/material';
// import { Link, useLocation } from 'react-router-dom';
import { Link, useLocation } from "react-router-dom";
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';

const Navbar = () => {
  const location = useLocation();

  // Navigation links mapping exactly to your App.jsx routes [cite: 16, 44]
  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Product', path: '/product' },
    { label: 'Quick booking', path: '/quickbooking' },
    { label: 'Temple', path: '/temple' },
    { label: 'Contact Us', path: '/contact' },
    { label: 'Admin', path: '/admin' },
  ];

  // Logic to determine if a link is active for bold styling
  const isActive = (path) => location.pathname === path;

  return (
    <AppBar 
      position="sticky" 
      sx={{ 
        bgcolor: 'white', 
        boxShadow: '0px 2px 4px rgba(0,0,0,0.05)', 
        borderBottom: '1px solid #f0f0f0' 
      }}
    >
      <Container maxWidth="xl">
        <Toolbar sx={{ justifyContent: 'space-between', py: 0.5 }}>
          
          {/* Main Navigation Links Section */}
          <Stack direction="row" spacing={0.5}>

            {/* <h1 className="headerNav__logo">
            <img
              className="headerNav__imgDiv"
              style={{ width: "240px", height: "80px", marginLeft: "20px" }}
              src={temple}
              alt="Temple Logo"
            />
          </h1> */}
            {navLinks.map((link) => (
              <Button
                key={link.label}
                component={Link}
                to={link.path}
                sx={{
                  color: 'black',
                  fontWeight: isActive(link.path) ? '800' : '700', // Bold for active page
                  fontSize: '0.95rem',
                  textTransform: 'none',
                  px: 2,
                  borderRadius: 0,
                  borderBottom: isActive(link.path) ? '2px solid #FF9933' : '2px solid transparent',
                  '&:hover': {
                    bgcolor: 'transparent',
                    color: '#FF9933', // Saffron hover color
                  }
                }}
              >
                {link.label}
              </Button>
            ))}
          </Stack>

          {/* Action Area (Donate & Login) based on your Navbar image model */}
          <Stack direction="row" spacing={3} alignItems="center">
            
            {/* Donate Us Section  */}
            <Button
              component={Link}
              to="/donate"
              startIcon={
                <VolunteerActivismIcon 
                  sx={{ 
                    color: '#D4AF37', // Gold coin color from your model image
                    fontSize: '1.8rem !important' 
                  }} 
                />
              }
              sx={{
                color: '#5D0E11', // Deep maroon text color from your model image
                fontWeight: '800',
                fontSize: '1.1rem',
                textTransform: 'none',
                '&:hover': { bgcolor: 'transparent', opacity: 0.8 }
              }}
            >
              Donate Us
            </Button>

            {/* Login Section [cite: 43] */}
            <Button
              component={Link}
              to="/login"
              sx={{
                color: 'black',
                fontWeight: '800',
                fontSize: '1rem',
                textTransform: 'none',
                border: '1.5px solid black',
                borderRadius: '8px',
                px: 3,
                py: 0.5,
                '&:hover': { 
                  bgcolor: 'black', 
                  color: 'white' 
                }
              }}
            >
              Login
            </Button>
            
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;