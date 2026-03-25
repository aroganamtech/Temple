import React, { useState } from 'react';
import { Box, Container, Typography, Grid, Button, IconButton, Fade, Dialog } from '@mui/material';
import { motion } from 'framer-motion';
import CloseIcon from '@mui/icons-material/Close';
import TrainIcon from '@mui/icons-material/DirectionsRailway';
import FlightIcon from '@mui/icons-material/FlightTakeoff';
import HotelIcon from '@mui/icons-material/Bed';
import GuideIcon from '@mui/icons-material/SelfImprovement';
import SchoolIcon from '@mui/icons-material/MenuBook';
import MapIcon from '@mui/icons-material/Explore';
import '../../style/pages/ventor/Ventor.scss';

const services = [
  { id: 1, title: 'Train Booking', sub: 'Sacred Path', icon: <TrainIcon fontSize="large" /> },
  { id: 2, title: 'Flight Booking', sub: 'Vayu Yatra', icon: <FlightIcon fontSize="large" /> },
  { id: 3, title: 'Room Booking', sub: 'Temple Stay', icon: <HotelIcon fontSize="large" /> },
  { id: 4, title: 'Temple Guides', sub: 'Soul Scholars', icon: <GuideIcon fontSize="large" /> },
  { id: 5, title: 'Training', sub: 'Dharma Wisdom', icon: <SchoolIcon fontSize="large" /> },
  { id: 6, title: 'Tour Packages', sub: 'Ananda Tours', icon: <MapIcon fontSize="large" /> },
];

const InnovativeVendorPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  return (
    <Box className="pavilion-container">
      <Container maxWidth="lg">
        {/* Minimalist Title Area */}
        <Box sx={{ py: 10, textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
            <Typography variant="h3" sx={{ fontFamily: 'Playfair Display', fontWeight: 300, color: '#D4AF37', mb: 2 }}>
              The Lotus Pavilion
            </Typography>
            <Box sx={{ width: '40px', height: '1px', bgcolor: '#D4AF37', mx: 'auto', mb: 2 }} />
            <Typography variant="body1" sx={{ color: '#8B7355', letterSpacing: 3, fontSize: '0.8rem', textTransform: 'uppercase' }}>
              Select your sacred service
            </Typography>
          </motion.div>
        </Box>

        {/* HEXAGONAL/PETAL GRID */}
        <Grid container spacing={6} justifyContent="center">
          {services.map((service, index) => (
            <Grid item key={service.id} xs={12} sm={6} md={4} className="petal-card-wrapper">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.8, ease: "easeOut" }}
              >
                <Box className="innovative-petal-card">
                  <Box className="card-content">
                    <Box className="icon-container">
                      {service.icon}
                    </Box>
                    <Typography variant="h6" sx={{ color: '#5D4E3A', fontWeight: 500 }}>
                      {service.title}
                    </Typography>
                    <Typography variant="caption" sx={{ color: '#D2B48C', fontStyle: 'italic', display: 'block', mt: 1 }}>
                      {service.sub}
                    </Typography>
                    <Button 
                      className="view-btn"
                      onClick={() => { setActiveItem(service); setOpenModal(true); }}
                    >
                      BEGIN
                    </Button>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* MODAL OVERLAY */}
      <Dialog
        fullScreen
        open={openModal}
        onClose={() => setOpenModal(false)}
        TransitionComponent={Fade}
        transitionDuration={700}
        PaperProps={{
          sx: { background: 'rgba(255, 253, 245, 0.98)', backdropFilter: 'blur(10px)' }
        }}
      >
        <Box sx={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
          <IconButton 
            onClick={() => setOpenModal(false)}
            sx={{ position: 'absolute', top: 30, right: 30, color: '#D4AF37' }}
          >
            <CloseIcon fontSize="large" />
          </IconButton>
          
          <Box sx={{ textAlign: 'center', p: 4 }}>
            <Typography variant="h4" color="#5D4E3A" sx={{ fontFamily: 'Playfair Display', mb: 4 }}>
              Register for {activeItem?.title}
            </Typography>
            {/* Simple Form Mockup */}
            <Box sx={{ width: '300px', mx: 'auto' }}>
                <Box sx={{ height: '1px', bgcolor: '#D4AF37', mb: 4 }} />
                <Typography variant="body2" color="#8B7355" sx={{ mb: 4 }}>
                  Our sacred guides will reach out to you shortly to finalize your {activeItem?.sub}.
                </Typography>
                <Button fullWidth className="view-btn" sx={{ py: 2 }} onClick={() => setOpenModal(false)}>
                    Confirm Interest
                </Button>
            </Box>
          </Box>
        </Box>
      </Dialog>
    </Box>
  );
};

export default InnovativeVendorPage;