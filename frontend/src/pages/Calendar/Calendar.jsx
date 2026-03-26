import React, { useState } from 'react';
import { Box, Container, Typography, Button, Stack, Paper, Grid, IconButton } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useNavigate } from 'react-router-dom'; // For Back Button
import '../../style/pages/calendar/Calendar.scss';

const CalendarPage = () => {
  const [view, setView] = useState('month'); 
  const navigate = useNavigate();
  const currentMonth = "March 2026";

  const daysList = [
    { date: "25-03-2026", day: "Wednesday" },
    { date: "26-03-2026", day: "Thursday", active: true },
    { date: "27-03-2026", day: "Friday" },
  ];

  return (
    <Box className="calendar-root">
      {/* --- BACK BUTTON --- */}
      <Box className="back-btn-container">
        <Button 
          onClick={() => navigate(-1)} 
          startIcon={<ArrowBackIosNewIcon sx={{ fontSize: '0.9rem !important' }} />}
          className="back-btn"
        >
          Back
        </Button>
      </Box>

      <Container maxWidth="lg">
        <Box className="calendar-header">
          <Typography variant="h3" className="serif-title text-center">Divine Calendar</Typography>
          <Typography className="subtitle text-center">PLAN YOUR SACRED JOURNEY</Typography>
          
          <Stack direction="row" justifyContent="center" spacing={0} className="toggle-container">
            <Button 
              className={`toggle-btn ${view === 'month' ? 'active' : ''}`}
              onClick={() => setView('month')}
            >
              Month
            </Button>
            <Button 
              className={`toggle-btn ${view === 'date' ? 'active' : ''}`}
              onClick={() => setView('date')}
            >
              Date
            </Button>
          </Stack>
        </Box>

        <AnimatePresence mode="wait">
          {view === 'month' ? (
            <motion.div
              key="month"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <Paper elevation={0} className="calendar-paper">
                <Box className="month-nav">
                  <IconButton><ArrowBackIosNewIcon /></IconButton>
                  <Typography variant="h5" className="month-name">{currentMonth}</Typography>
                  <IconButton><ArrowForwardIosIcon /></IconButton>
                </Box>
                
                <Grid container className="calendar-grid">
                  {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(d => (
                    <Grid item xs={1.71} key={d} className="grid-header">{d}</Grid>
                  ))}
                  {Array.from({ length: 31 }).map((_, i) => (
                    <Grid item xs={1.71} key={i} className="grid-cell">
                      <div className={`cell-content ${i + 1 === 26 ? 'today' : ''}`}>
                        {i + 1}
                      </div>
                    </Grid>
                  ))}
                </Grid>
              </Paper>
            </motion.div>
          ) : (
            <motion.div
              key="date"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
            >
              <Box className="date-scroll-view">
                {daysList.map((item, idx) => (
                  <Paper 
                    key={idx} 
                    className={`date-card ${item.active ? 'active-card' : ''}`}
                    elevation={0}
                  >
                    <Typography className="card-date">{item.date}</Typography>
                    <Typography className="card-day">{item.day}</Typography>
                  </Paper>
                ))}
              </Box>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </Box>
  );
};

export default CalendarPage;