import React, { useState, useEffect, useRef } from 'react';
import { 
  Box, Container, Grid, Typography, Button, IconButton, Badge, 
  Chip, Avatar, Card, CardMedia, CardContent, Divider, useMediaQuery, useTheme 
} from '@mui/material';
import { 
  NotificationsNone, CalendarToday, LocationOn, AccessTime, 
  Favorite, ChatBubbleOutline, ChevronRight, Language, Star, Home, Groups, VolunteerActivism
} from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import { styled, keyframes } from '@mui/system';

// --- STYLED COMPONENTS (Replacing your CSS variables) ---
const themeColors = {
  bg: '#1a1a1a',
  bg2: '#111111',
  gold: '#daa520',
  gold2: '#f5c842',
  cream: '#fdf6e3',
  border: 'rgba(218,165,32,0.2)',
  grad: 'linear-gradient(135deg, #b8860b, #daa520, #f5c842, #daa520, #b8860b)',
  grad2: 'linear-gradient(135deg, #daa520, #f5c842)',
};

const logoGlow = keyframes`
  0%, 100% { box-shadow: 0 0 20px rgba(218, 165, 32, 0.4); }
  50% { box-shadow: 0 0 40px rgba(218, 165, 32, 0.9); }
`;

const mandalaSpin = keyframes`
  to { transform: rotate(360deg); }
`;

const NavIcon = styled(Box)({
  width: 42, height: 42, borderRadius: '50%',
  background: themeColors.grad,
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  fontSize: 18, animation: `${logoGlow} 3s ease-in-out infinite`,
});

const GoldText = styled('span')({
  background: themeColors.grad,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
});

// --- DATA ---
const EVENTS = [
  { id: 1, img: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600', badge: 'Festival', deity: '🔱', title: 'Maha Shivaratri', tags: ['Shiva Pooja', 'All Night'], date: 'Feb 26', time: '6:00 PM', location: 'Chidambaram', prana: '150' },
  { id: 2, img: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600', badge: 'Pooja', deity: '🪷', title: 'Saraswati Puja', tags: ['Learning', 'Blessings'], date: 'Mar 2', time: '8:00 AM', location: 'Mylapore', prana: '80' },
  { id: 3, img: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600', badge: 'Satsang', deity: '📿', title: 'Vedic Discourse', tags: ['Wisdom', 'Meditation'], date: 'Mar 8', time: '5:00 PM', location: 'Virtual', prana: '60' },
  { id: 4, img: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600', badge: 'Seva', deity: '🌸', title: 'Annadanam Seva', tags: ['Community', 'Food'], date: 'Mar 15', time: '9:00 AM', location: 'Tirupati', prana: '200' },
];

const EventsPage = () => {
  const [filter, setFilter] = useState('all');
  const [timeLeft, setTimeLeft] = useState({ d: '00', h: '00', m: '00', s: '00' });
  const canvasRef = useRef(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // 1. Particle Logic
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let W = window.innerWidth, H = window.innerHeight;
    canvas.width = W; canvas.height = H;
    let pts = Array.from({ length: 100 }, () => ({
      x: Math.random() * W, y: Math.random() * H, r: Math.random() * 2 + 0.3,
      vx: (Math.random() - 0.5) * 0.3, vy: -(Math.random() * 0.5 + 0.1),
      a: Math.random() * 0.8, gold: Math.random() > 0.5
    }));

    const animate = () => {
      ctx.clearRect(0, 0, W, H);
      pts.forEach(p => {
        p.y += p.vy; p.a -= 0.002;
        if (p.a <= 0) { p.y = H; p.a = Math.random(); p.x = Math.random() * W; }
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(218, 165, 32, ${p.a})`; ctx.fill();
      });
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  // 2. Countdown Logic
  useEffect(() => {
    const timer = setInterval(() => {
      const diff = new Date('2025-02-26T18:00:00') - new Date();
      if (diff > 0) {
        setTimeLeft({
          d: Math.floor(diff / 86400000).toString().padStart(2, '0'),
          h: Math.floor((diff % 86400000) / 3600000).toString().padStart(2, '0'),
          m: Math.floor((diff % 3600000) / 60000).toString().padStart(2, '0'),
          s: Math.floor((diff % 60000) / 1000).toString().padStart(2, '0'),
        });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const filteredEvents = filter === 'all' ? EVENTS : EVENTS.filter(e => e.badge === filter);

  return (
    <Box sx={{ bgcolor: themeColors.bg, color: themeColors.cream, minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>
      
      {/* --- NAVBAR --- */}
      <Box component="nav" sx={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '15px 5vw', bgcolor: 'rgba(17,17,17,0.85)', backdropFilter: 'blur(20px)', borderBottom: `1px solid ${themeColors.border}` }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <NavIcon>🕉</NavIcon>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Typography sx={{ fontFamily: 'Cinzel', fontWeight: 700, color: themeColors.gold2, fontSize: 16, letterSpacing: 1 }}>Darshan Journey</Typography>
            <Typography variant="caption" sx={{ color: 'rgba(218,165,32,0.5)', letterSpacing: 2 }}>SACRED PLATFORM</Typography>
          </Box>
        </Box>
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3 }}>
          {['Home', 'Events', 'Calendar', 'Seva'].map(item => (
            <Typography key={item} sx={{ fontFamily: 'Cinzel', fontSize: 12, cursor: 'pointer', '&:hover': { color: themeColors.gold2 } }}>{item}</Typography>
          ))}
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <IconButton sx={{ border: `1px solid ${themeColors.border}`, color: themeColors.gold2 }}>
            <Badge badgeContent={3} color="warning"><NotificationsNone /></Badge>
          </IconButton>
          {!isMobile && <Button variant="contained" sx={{ background: themeColors.grad2, color: '#111', borderRadius: 50, fontFamily: 'Cinzel', fontWeight: 700, px: 3 }}>Join Darshan</Button>}
        </Box>
      </Box>

      {/* --- HERO SECTION --- */}
      <Box sx={{ height: '100vh', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, zIndex: 1 }} />
        
        {/* Mandala Animation */}
        <Box sx={{ position: 'absolute', width: '600px', height: '600px', border: '1px solid rgba(218,165,32,0.1)', borderRadius: '50%', animation: `${mandalaSpin} 60s linear infinite`, zIndex: 0 }} />

        <Container component={motion.div} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} sx={{ position: 'relative', zIndex: 5, textAlign: 'center' }}>
          <Chip label="MAHA SHIVARATRI 2025 — LIVE NOW" sx={{ bgcolor: 'rgba(218,165,32,0.1)', color: themeColors.gold2, border: `1px solid ${themeColors.gold}`, fontFamily: 'Cinzel', mb: 3 }} />
          <Typography variant={isMobile ? "h3" : "h1"} sx={{ fontFamily: 'Cinzel', fontWeight: 900, mb: 2 }}>
            Enter the <br /> <GoldText>Divine Gateway</GoldText>
          </Typography>
          
          {/* Countdown */}
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, my: 4 }}>
            {[{ v: timeLeft.d, l: 'Days' }, { v: timeLeft.h, l: 'Hrs' }, { v: timeLeft.m, l: 'Min' }, { v: timeLeft.s, l: 'Sec' }].map(unit => (
              <Box key={unit.l} sx={{ p: 2, bgcolor: 'rgba(218,165,32,0.07)', border: `1px solid ${themeColors.border}`, borderRadius: 2, minWidth: 70 }}>
                <Typography variant="h4" sx={{ color: themeColors.gold2, fontFamily: 'Cinzel', fontWeight: 900 }}>{unit.v}</Typography>
                <Typography variant="caption">{unit.l}</Typography>
              </Box>
            ))}
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
            <Button variant="contained" sx={{ background: themeColors.grad, color: '#111', borderRadius: 10, px: 4, py: 1.5 }}>🙏 Join Darshan</Button>
            <Button variant="outlined" sx={{ borderColor: themeColors.gold, color: themeColors.gold2, borderRadius: 10, px: 4 }}>View All</Button>
          </Box>
        </Container>
      </Box>

      {/* --- STATS BAR --- */}
      <Box sx={{ bgcolor: 'rgba(218,165,32,0.06)', borderY: `1px solid ${themeColors.border}`, py: 4 }}>
        <Container>
          <Grid container spacing={4} textAlign="center">
            {[{ l: 'Devotees', v: '1.2M+', i: <Groups /> }, { l: 'Events', v: '340+', i: <Star /> }, { l: 'Partner Temples', v: '85', i: <Home /> }].map(stat => (
              <Grid item xs={12} sm={4} key={stat.l} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2 }}>
                <Box sx={{ color: themeColors.gold2 }}>{stat.i}</Box>
                <Box>
                  <Typography variant="h5" sx={{ fontFamily: 'Cinzel', fontWeight: 700, color: themeColors.gold2 }}>{stat.v}</Typography>
                  <Typography variant="caption" sx={{ letterSpacing: 1 }}>{stat.l}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* --- EVENTS SECTION --- */}
      <Container sx={{ py: 10 }}>
        <Box textAlign="center" mb={6}>
          <Typography variant="overline" sx={{ color: themeColors.gold, letterSpacing: 3 }}>🪷 SACRED GATHERINGS</Typography>
          <Typography variant="h3" sx={{ fontFamily: 'Cinzel', fontWeight: 900 }}>Upcoming <GoldText>Temple Events</GoldText></Typography>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 1, mb: 6 }}>
          {['all', 'Festival', 'Satsang', 'Seva', 'Pooja'].map(cat => (
            <Chip key={cat} label={cat.toUpperCase()} onClick={() => setFilter(cat)} 
            sx={{ 
              bgcolor: filter === cat ? themeColors.gold2 : 'transparent',
              color: filter === cat ? '#111' : themeColors.cream,
              border: `1px solid ${themeColors.border}`,
              cursor: 'pointer',
              '&:hover': { bgcolor: themeColors.gold }
            }} />
          ))}
        </Box>

        <Grid container spacing={3}>
          <AnimatePresence>
            {filteredEvents.map(event => (
              <Grid item xs={12} sm={6} md={3} key={event.id} component={motion.div} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <Card sx={{ bgcolor: 'rgba(255,255,255,0.04)', borderRadius: 4, border: `1px solid ${themeColors.border}`, height: '100%' }}>
                  <Box sx={{ position: 'relative' }}>
                    <CardMedia component="img" height="180" image={event.img} />
                    <Chip label={event.badge} sx={{ position: 'absolute', top: 10, left: 10, bgcolor: themeColors.grad2, color: '#111', fontWeight: 700, fontSize: 10 }} />
                  </Box>
                  <CardContent sx={{ color: themeColors.cream }}>
                    <Typography variant="h5" sx={{ mb: 1 }}>{event.deity}</Typography>
                    <Typography sx={{ fontFamily: 'Cinzel', fontWeight: 700, mb: 2 }}>{event.title}</Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1, opacity: 0.6 }}>
                      <CalendarToday fontSize="small" /> <Typography variant="caption">{event.date}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, opacity: 0.6 }}>
                      <LocationOn fontSize="small" /> <Typography variant="caption">{event.location}</Typography>
                    </Box>
                    <Button fullWidth variant="contained" sx={{ mt: 3, bgcolor: themeColors.gold2, color: '#111', borderRadius: 10, fontWeight: 700 }}>RSVP / Join</Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </AnimatePresence>
        </Grid>
      </Container>

      {/* --- FOOTER --- */}
      <Box sx={{ bgcolor: themeColors.bg2, borderTop: `1px solid ${themeColors.border}`, py: 8 }}>
        <Container>
          <Grid container spacing={5}>
            <Grid item xs={12} md={4}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                <NavIcon>🕉</NavIcon>
                <Typography sx={{ fontFamily: 'Cinzel', color: themeColors.gold2, fontWeight: 700 }}>Darshan Journey</Typography>
              </Box>
              <Typography variant="body2" sx={{ opacity: 0.6 }}>Connecting millions to sacred temple experiences and spiritual journeys globally.</Typography>
            </Grid>
            <Grid item xs={12} md={8}>
              <Grid container spacing={2}>
                {['Explore', 'Community', 'Support'].map(title => (
                  <Grid item xs={4} key={title}>
                    <Typography sx={{ color: themeColors.gold2, fontFamily: 'Cinzel', mb: 2, fontSize: 14 }}>{title}</Typography>
                    <Typography variant="caption" sx={{ display: 'block', mb: 1, opacity: 0.6 }}>Link Item</Typography>
                    <Typography variant="caption" sx={{ display: 'block', mb: 1, opacity: 0.6 }}>Link Item</Typography>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
          <Divider sx={{ my: 4, borderColor: 'rgba(218,165,32,0.1)' }} />
          <Typography variant="caption" sx={{ opacity: 0.3 }}>© 2026 Darshan Journey. All rights reserved. 🕉 Om Namah Shivaya</Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default EventsPage;