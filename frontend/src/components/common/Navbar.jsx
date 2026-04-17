
import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  Stack,
  Container,
  Menu,
  MenuItem,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Collapse,
  Box,

} from '@mui/material';
import { Link, useLocation } from "react-router-dom";
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const Navbar = () => {
  const location = useLocation();
  

  // Desktop Dropdown States
  const [templeAnchor, setTempleAnchor] = useState(null);
  const [bookingAnchor, setBookingAnchor] = useState(null);

  // Mobile Drawer States
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileTempleOpen, setMobileTempleOpen] = useState(false);
  const [mobileBookingOpen, setMobileBookingOpen] = useState(false);


  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Product', path: '/product' },
    { label: 'Quick booking', path: '/quickbooking', isDropdown: true, type: 'booking' },
    { label: 'Temple', path: '/temple', isDropdown: true, type: 'temple' },
    { label: 'Contact Us', path: '/contact' },
    { label: 'Admin', path: '/admin' },
  ];

  const templeOptions = [
    { label: 'Gods', path: '/temple/gods' },
    { label: 'Dosham', path: '/temple/dosham' },
    { label: 'Decaying Temples', path: '/temple/decaying' },
    { label: 'Adiyargal', path: '/temple/adiyargal' },
  ];

  const bookingOptions = [
    { label: 'Iyer Booking', path: '/booking/iyer' },
    { label: 'Yatra Booking', path: '/booking/yatra' },
    { label: 'Room Booking', path: '/booking/room' },
    { label: 'Trainer Booking', path: '/booking/trainer' },
    { label: 'Guide Booking', path: '/booking/guide' },
    { label: 'For Rent', path: '/booking/rent' },
  ];

  const isActive = (path) => location.pathname === path;
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

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
        <Toolbar disableGutters sx={{ justifyContent: 'space-between', px: 2 }}>
          
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

          {/* 3. ACTION BUTTONS (Right) */}
          <Stack direction="row" spacing={2} alignItems="center">
            <Button
              component={Link}
              to="/donate"
              startIcon={<VolunteerActivismIcon sx={{ color: '#D4AF37', fontSize: '1.8rem !important' }} />}
              sx={{
                color: '#5D0E11',
                fontWeight: '800',
                fontSize: '1.1rem',
                textTransform: 'none',
                display: { xs: 'none', sm: 'flex' } // Hide on very small screens to save space
              }}
            >
              Donate Us
            </Button>

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
                '&:hover': { bgcolor: 'black', color: 'white' }
              }}
            >
              Login
            </Button>

            {/* Mobile Menu Button */}
            <IconButton
              onClick={handleDrawerToggle}
              sx={{ display: { md: 'none' }, color: 'black' }}
            >
              <MenuIcon />
            </IconButton>
          </Stack>
        </Toolbar>
      </Container>

      {/* MOBILE DRAWER */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{ '& .MuiDrawer-paper': { width: '280px' } }}
      >
        <List sx={{ pt: 2 }}>
          {navLinks.map((link) => {
            const isTemple = link.type === 'temple';
            const isOpen = isTemple ? mobileTempleOpen : mobileBookingOpen;
            const setOpen = isTemple ? setMobileTempleOpen : setMobileBookingOpen;
            const options = isTemple ? templeOptions : bookingOptions;

            return (
              <React.Fragment key={link.label}>
                <ListItem 
                  button 
                  component={link.isDropdown ? 'div' : Link}
                  to={link.isDropdown ? undefined : link.path}
                  onClick={link.isDropdown ? () => setOpen(!isOpen) : handleDrawerToggle}
                >
                  <ListItemText primary={link.label} primaryTypographyProps={{ fontWeight: 700 }} />
                  {link.isDropdown && (isOpen ? <ExpandLess /> : <ExpandMore />)}
                </ListItem>
                {link.isDropdown && (
                  <Collapse in={isOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {options.map((opt) => (
                        <ListItem button key={opt.label} component={Link} to={opt.path} onClick={handleDrawerToggle} sx={{ pl: 4 }}>
                          <ListItemText primary={opt.label} />
                        </ListItem>
                      ))}
                    </List>
                  </Collapse>
                )}
              </React.Fragment>
            );
          })}
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;