import React, { useState, useEffect } from 'react';
import { Box, Typography, IconButton, Container, Stack, useMediaQuery, useTheme} from '@mui/material';
import { motion, AnimatePresence} from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowForward, ArrowBack, AutoAwesome, Storefront, CalendarMonth, MenuBook, Celebration,
  Sensors, Language, Groups, 
  RecordVoiceOver, Security, ViewInAr, Accessibility 
} from '@mui/icons-material';

// Assets
import temCarousel1 from '../../assets/tem-carou1.png';
import temCarousel2 from '../../assets/tem-carou2.png';
import temCarousel3 from '../../assets/tem-carou3.png';
import newtem from '../../assets/new-tem.jpg';
import newtem2 from '../../assets/new-tem2.jpg';
import newtem3 from '../../assets/new-tem3.jpg';

const SLIDES = [
  {
    id: 1,
    img: newtem,
    bg: temCarousel1
  },
  {
    id: 2,
    img: newtem2,
    bg: temCarousel2
  },
  {
    id: 3,
    img: newtem3,
    bg: temCarousel3
  }
];


  const services = [
    { title: "Vendor Service", icon: <Storefront />, desc: "Find verified temple vendors.", path:'/ventor'},
    { title: "Calendar", icon: <CalendarMonth />, desc: "Auspicious dates & timings.", path:'/calendar'},
    { title: "Blog", icon: <MenuBook />, desc: "Spiritual insights & news.", path:'/blogs' },
    { title: "Event", icon: <Celebration />, desc: "Upcoming temple festivals.", path:'/event' },
  ];


const Home = () => {
  const navigate = useNavigate(); // 2. Initialize navigate hook
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const nextSlide = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % SLIDES.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 7000);
    return () => clearInterval(timer);
  }, [index]);

  const variants = {
    enter: (direction) => ({ x: direction > 0 ? 100 : -100, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (direction) => ({ x: direction < 0 ? 100 : -100, opacity: 0 })
  };

  return (
    <Box sx={{ bgcolor: '#0a0904', minHeight: '100vh', overflowX: 'hidden' }}>
      
      {/* SECTION 1: HERO CAROUSEL */}
      <Box sx={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}
          >
            <Box
              component={motion.div}
              animate={{ scale: [1.1, 1] }}
              transition={{ duration: 8 }}
              sx={{
                position: 'absolute', inset: 0,
                backgroundImage: `url(${SLIDES[index].bg})`,
                backgroundSize: 'cover', backgroundPosition: 'center',
                '&::after': {
                  content: '""', position: 'absolute', inset: 0,
                  // Updated to a Golden/Obsidian Gradient
                  background: 'linear-gradient(105deg, rgba(10,9,4,0.98) 0%, rgba(138,102,35,0.2) 100%)'
                }
              }}
            />
          </motion.div>
        </AnimatePresence>

        <Container maxWidth="xl" sx={{ height: '100%', position: 'relative', zIndex: 10 }}>
          <Stack direction="row" alignItems="center" height="100%" spacing={4}>
            <Box sx={{ width: { xs: '100%', md: '50%' } }}>
              <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
                <Typography sx={{ 
                  letterSpacing: 3, color: '#D4AF37', fontWeight: 800, fontSize: '0.75rem', mb: 2,
                  bgcolor: 'rgba(212,175,55,0.1)', display: 'inline-block', px: 2, py: 0.5, borderRadius: 10,
                  border: '1px solid rgba(212,175,55,0.3)'
                }}>
                  {SLIDES[index].tag}
                </Typography>
                
                <Typography variant="h1" sx={{ 
                  fontFamily: "'Playfair Display', serif", fontWeight: 900, 
                  color: '#fff', textShadow: '0 10px 30px rgba(0,0,0,0.5)',
                  fontSize: { xs: '3rem', md: '5.5rem' }, lineHeight: 1.1, mb: 2
                }}>
                  {SLIDES[index].title} <br />
                  <span style={{ 
                    background: 'linear-gradient(to right, #D4AF37, #FBF5B7, #D4AF37)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontStyle: 'italic' 
                  }}>
                    {SLIDES[index].accent}
                  </span>
                </Typography> 
              </motion.div>
            </Box>

            {!isMobile && (
              <Box sx={{ width: '50%', position: 'relative' }}>
                <motion.div
                  key={`dish-${index}`}
                  initial={{ scale: 0.8, rotate: -10, opacity: 0 }}
                  animate={{ scale: 1, rotate: 0, opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <Box sx={{ position: 'relative', width: 450, height: 450, mx: 'auto' }}>
                    {/* Golden Rotating Ring */}
                    <Box sx={{ 
                      position: 'absolute', inset: -20, 
                      border: '2px dashed rgba(212,175,55,0.4)', 
                      borderRadius: '50%', animation: 'spin 25s linear infinite' 
                    }} />
                    <img 
                      src={SLIDES[index].img} 
                      alt="Ritual" 
                      style={{ 
                        width: '100%', height: '100%', borderRadius: '50%', 
                        objectFit: 'cover', border: '8px solid rgba(212,175,55,0.1)',
                        boxShadow: '0 0 50px rgba(212,175,55,0.2)'
                      }} 
                    />
                  </Box>
                </motion.div>
              </Box>
            )}
          </Stack>
        </Container>

        <Stack direction="row" sx={{ position: 'absolute', bottom: 100, right: 60, zIndex: 20 }} spacing={2}>
          <IconButton onClick={prevSlide} sx={{ color: '#D4AF37', border: '1px solid rgba(212,175,55,0.3)' }}>
            <ArrowBack />
          </IconButton>
          <IconButton onClick={nextSlide} sx={{ bgcolor: 'rgba(212,175,55,1)', color: '#000', '&:hover': { bgcolor: '#FBF5B7' } }}>
            <ArrowForward />
          </IconButton>
        </Stack>

        <Box sx={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '4px', bgcolor: 'rgba(255,255,255,0.05)' }}>
          <motion.div
            key={`bar-${index}`}
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 7, ease: "linear" }}
            style={{ height: '100%', background: 'linear-gradient(90deg, #8A6623, #D4AF37, #FBF5B7)' }}
          />
        </Box>
      </Box>

      {/* SECTION 2: GOLDEN INNOVATIVE FEATURES */}
      <Box sx={{ 
      py: 15, 
      position: 'relative', 
      bgcolor: "#FFFFFF", // Changed to pure White
      borderTop: '1px solid #E0E0E0' 
    }}>
        <Container maxWidth="xl">
        <Typography variant="h3" sx={{ 
          color: '#1A1A1A', // Darker text for readability on white
          mb: 8, 
          fontWeight: 900, 
          textAlign: 'center', 
          fontFamily: "'Playfair Display', serif",
          letterSpacing: -1
        }}>
          Divine <span style={{ color: '#D4AF37' }}>Digital Ecosystem</span>
        </Typography>

        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', lg: '1fr 1fr 1fr 1fr' }, 
          gap: 4 
        }}>
          <FeatureCard icon={<AutoAwesome />} title="Sacred Hero" desc="Voice-AI search with interactive golden flame parallax." />
          <FeatureCard icon={<Sensors />} title="Crowd Pulse" desc="IoT wait-times for Rameswaram & Madurai Darshan." />
          <FeatureCard icon={<Language />} title="Celestial Map" desc="Vedic astrology alignments for TN's Navagraha temples." />
          <FeatureCard icon={<Groups />} title="Heritage DAO" desc="Decentralized voting for Chola fresco restorations." />
          <FeatureCard icon={<RecordVoiceOver />} title="Siddhar AI" desc="Tamil-speaking spiritual guide trained on Agamas." />
          <FeatureCard icon={<Security />} title="Sanctity Trace" desc="Blockchain verified Prasadam from temple to door." />
          <FeatureCard icon={<ViewInAr />} title="AR Abhishekam" desc="Immersive ritual pouring with haptic water physics." />
          <FeatureCard icon={<Accessibility />} title="Dharma Access" desc="Universal design for senior & disabled pilgrims." />
        </Box>
      </Container>
      </Box>


      {/* Our Services section */}

      <Box sx={{ py: 12, bgcolor: '#FFFFFF', mb:"200px"}}>
  <Container maxWidth="xl">
    {/* Section Heading */}
    <Typography 
      variant="h3" 
      sx={{ 
        textAlign: 'center', 
        color: '#1a1a1a', // Changed to dark for white background
        mb: "50px", 
        fontFamily: "'Playfair Display', serif",
        fontWeight: 900,
        position: 'relative'
      }}
    >
      Our <span style={{ color: '#D4AF37' }}>Services</span>
    </Typography>

    {/* Services Grid Wrapper */}
    <Box 
      sx={{ 
        display: 'grid', 
        gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', lg: '1fr 1fr 1fr 1fr' }, 
        gap: 4 
      }}
    >
      {services.map((service, idx) => (
        <motion.div
          key={idx}
          whileHover={{ y: -15 }} // Slightly more lift for a modern feel
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.1, ease: "easeOut" }}
        >
          {/* Individual Service Box - INNOVATIVE WHITE DESIGN */}
          <Box 
           onClick={() => service.path && navigate(service.path)}
            sx={{ 
              bgcolor: '#ffffff', 
              // Using a soft "spiritual" shadow instead of harsh borders
              boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
              border: '1px solid #f1f1f1',
              borderRadius: '30px', // More rounded for modern look
              p: 5,
              textAlign: 'center',
              height: '100%',
              cursor:"pointer",
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
              position: 'relative',
              overflow: 'hidden',
              '&::before': { // Innovative accent line
                content: '""',
                position: 'absolute',
                top: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '0%',
                height: '4px',
                bgcolor: '#D4AF37',
                transition: '0.4s'
              },
              '&:hover': {
                borderColor: 'rgba(212,175,55,0.3)',
                boxShadow: '0 20px 40px rgba(212,175,55,0.15)',
                '&::before': { width: '40%' }
              }
            }}
          >
            {/* Icon Container - Floating Glass Style */}
            <Box 
              sx={{ 
                width: 90, 
                height: 90, 
                borderRadius: '24px', // Squircle shape
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                bgcolor: 'rgba(212,175,55,0.05)', // Very soft gold tint
                color: '#D4AF37',
                mb: 3,
                transform: 'rotate(-5deg)', // Creative tilt
                transition: '0.4s',
                '& svg': { fontSize: 45 },
                '.MuiBox-root:hover &': {
                   transform: 'rotate(0deg) scale(1.1)',
                   bgcolor: 'rgba(212,175,55,0.12)'
                }
              }}
            >
              {service.icon}
            </Box>

            {/* Service Title */}
            <Typography 
              variant="h6" 
              sx={{ 
                color: '#2d2d2d', 
                fontWeight: 800, 
                letterSpacing: 0.5,
                fontSize: '1.2rem',
                mb: 1
              }}
            >
              {service.title}
            </Typography>

            {/* Subtext */}
            <Typography 
              sx={{ 
                color: '#757575', 
                fontSize: '0.9rem', 
                lineHeight: 1.6,
                px: 1
              }}
            >
              {service.desc}
            </Typography>

            {/* Subtle Decorative Element */}
            <Box 
              sx={{ 
                mt: 3, 
                width: 30, 
                height: 2, 
                bgcolor: '#D4AF37', 
                opacity: 0.3,
                borderRadius: 2 
              }} 
            />
          </Box>
        </motion.div>
      ))}
    </Box>
  </Container>
</Box>

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        body { margin: 0; padding: 0;}
      `}</style>
    </Box>
  );
};

// Golden Feature Card
const FeatureCard = ({ icon, title, desc }) => (
  <Box
    component={motion.div}
    whileHover={{ y: -12 }}
    transition={{ type: "spring", stiffness: 300 }}
    sx={{
      p: 4,
      height: '100%',
      bgcolor: '#FFFFFF',
      borderRadius: '24px',
      border: '1px solid #F0F0F0',
      boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
      transition: 'all 0.3s ease-in-out',
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'column',
      '&:hover': {
        borderColor: '#D4AF37', // Golden border
        boxShadow: '0 20px 40px rgba(212, 175, 55, 0.12)',
        '& .icon-bg': {
          bgcolor: 'rgba(212, 175, 55, 0.15)',
          transform: 'scale(1.1)',
        }
      }
    }}
  >
    {/* Icon Wrapper */}
    <Box
      className="icon-bg"
      sx={{
        width: 60,
        height: 60,
        borderRadius: '16px',
        bgcolor: 'rgba(212, 175, 55, 0.08)',
        color: '#D4AF37',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        mb: 3,
        transition: '0.4s ease',
        '& svg': { fontSize: 32 }
      }}
    >
      {icon}
    </Box>

    <Typography
      variant="h6"
      sx={{
        color: '#1A1A1A',
        fontWeight: 800,
        mb: 1.5,
        fontFamily: "'Playfair Display', serif",
        fontSize: '1.2rem'
      }}
    >
      {title}
    </Typography>

    <Typography
      variant="body2"
      sx={{
        color: '#666666',
        lineHeight: 1.7,
        fontSize: '0.9rem',
        flexGrow: 1
      }}
    >
      {desc}
    </Typography>

    {/* Divine Underline */}
    <Box sx={{ width: 40, height: 3, bgcolor: '#D4AF37', mt: 3, borderRadius: 2, opacity: 0.4 }} />
  </Box>
);

export default Home;