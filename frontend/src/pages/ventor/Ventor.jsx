import React, { useState } from 'react';
import { Box, Container, Typography, IconButton, Fade, Dialog, Button } from '@mui/material';
import { motion } from 'framer-motion';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIcon from '@mui/icons-material/ArrowBackIosNew'; // Elegant back icon
import TrainIcon from '@mui/icons-material/DirectionsRailway';
import FlightIcon from '@mui/icons-material/FlightTakeoff';
import HotelIcon from '@mui/icons-material/Bed';
import GuideIcon from '@mui/icons-material/SelfImprovement';
import SchoolIcon from '@mui/icons-material/MenuBook';
import MapIcon from '@mui/icons-material/Explore';
import { useNavigate } from 'react-router-dom'; // 1. Import useNavigate
// import '../../style/pages/ventor/Ventor.scss';
import '../../style/pages/ventor/Ventor.scss';

const services = [
  { id: 1, title: 'Train Booking', sub: 'Sacred Path', icon: <TrainIcon />, delay: 0.1 },
  { id: 2, title: 'Flight Booking', sub: 'Vayu Yatra', icon: <FlightIcon />, delay: 0.2 },
  { id: 3, title: 'Room Booking', sub: 'Temple Stay', icon: <HotelIcon />, delay: 0.3 },
  { id: 4, title: 'Temple Guides', sub: 'Soul Scholars', icon: <GuideIcon />, delay: 0.4 },
  { id: 5, title: 'Training', sub: 'Dharma Wisdom', icon: <SchoolIcon />, delay: 0.5 },
  { id: 6, title: 'Tour Packages', sub: 'Ananda Tours', icon: <MapIcon />, delay: 0.6 },
];

const VentorPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const navigate = useNavigate(); // 2. Initialize navigate function

  const handleConfirm = () => {
    if (activeItem) {
      const storageData = {
        id: activeItem.id,
        title: activeItem.title,
        subTitle: activeItem.sub,
        timestamp: new Date().toISOString(),
        status: "Interest Confirmed"
      };

      console.log("Data Stored to Console:", storageData);
      setOpenModal(false);
    }
  };

  return (
    <Box className="lotus-root-container">
      <div className="ambient-blur-1" />
      <div className="ambient-blur-2" />

      {/* --- ADDED: MINIMALIST BACK BUTTON --- */}
      <Box sx={{ position: 'absolute', top: { xs: 20, md: 40 }, left: { xs: 15, md: 40 }, zIndex: 100 }}>
        <Button 
          onClick={() => navigate(-1)} // 3. This goes to the previous page
          startIcon={<ArrowBackIcon sx={{ fontSize: '0.9rem !important' }} />}
          sx={{ 
            color: '#D4AF37', 
            textTransform: 'none', 
            fontWeight: 600,
            fontFamily: 'Outfit',
            letterSpacing: 1.5,
            '&:hover': { background: 'transparent', opacity: 0.7 }
          }}
        >
          BACK
        </Button>
      </Box>

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 10 }}>
        <Box sx={{ py: 12, textAlign: 'center' }}>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 1.5 }}
          >
            <Typography variant="h2" className="lotus-main-title">
              The Lotus Pavilion
            </Typography>
            <div className="sacred-geometry-divider">
              <span className="dot" />
              <div className="line" />
              <span className="dot" />
            </div>
            <Typography className="sacred-subtitle">
              SELECT YOUR SACRED SERVICE
            </Typography>
          </motion.div>
        </Box>

        <Box className="petal-flow-grid">
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="petal-element"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -15, transition: { duration: 0.4 } }}
              viewport={{ once: true }}
              transition={{ delay: service.delay, duration: 0.8 }}
            >
              <div className="petal-glass-card" onClick={() => { setActiveItem(service); setOpenModal(true); }}>
                <div className="petal-inner-border" />
                
                <div className="petal-content">
                  <div className="icon-halo">
                    {service.icon}
                  </div>
                  <Typography variant="h5" className="service-name">
                    {service.title}
                  </Typography>
                  <Typography variant="body2" className="service-essence">
                    {service.sub}
                  </Typography>
                  
                  <button className="begin-path-btn">
                    <span>BEGIN PATH</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </Box>
      </Container>

      <Dialog
        fullScreen
        open={openModal}
        onClose={() => setOpenModal(false)}
        TransitionComponent={Fade}
        transitionDuration={600}
        PaperProps={{
          sx: { background: 'rgba(255, 254, 250, 0.98)', backdropFilter: 'blur(15px)' }
        }}
      >
        <Box className="sacred-modal-body">
          <IconButton 
            onClick={() => setOpenModal(false)}
            className="modal-close-trigger"
          >
            <CloseIcon fontSize="large" />
          </IconButton>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="modal-inner-content"
          >
            <Typography variant="h3" className="modal-title-gold">
              {activeItem?.title}
            </Typography>
            <div className="gold-separator" />
            <Typography variant="h6" className="modal-description">
              Our guides are preparing the {activeItem?.sub} journey for you.
            </Typography>
            <Button className="modal-confirm-btn" onClick={handleConfirm}>
              CONFIRM INTEREST
            </Button>
          </motion.div>
        </Box>
      </Dialog>
    </Box>
  );
};

export default VentorPage;