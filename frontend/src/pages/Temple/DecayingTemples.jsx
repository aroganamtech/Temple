import React, { useState } from 'react';
import { 
  Box, Container, Typography, Grid, Card, CardMedia, 
  CardContent, Button, Stack, LinearProgress, Divider, Fade 
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import FoundationIcon from '@mui/icons-material/Foundation';
import HistoryIcon from '@mui/icons-material/History';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';

const DecayingTemples = () => {
  const [selectedTemple, setSelectedTemple] = useState(null);

  const data = [
    { 
      id: 1, 
      name: "Vengadampettai Venugopala", 
      location: "Cuddalore", 
      progress: 15, 
      image: "https://images.unsplash.com/photo-1590050752117-23a9d7fc2014?w=800", 
      summary: "A 16th-century Nayakar masterpiece with intricate carvings facing structural cracks.",
      history: "This temple was once the crown jewel of the Nayakar dynasty in the Cuddalore region. Built in the late 1500s, it features a 100-pillared hall where each pillar tells a story from the Bhagavata Purana. Due to persistent water logging and lack of maintenance, the granite foundation is shifting. The massive stone roof slabs are currently held up by temporary wooden supports. Restoration requires specialized heritage masonry to prevent a total collapse."
    },
    { 
      id: 2, 
      name: "Udayarpalayam Shiva", 
      location: "Ariyalur", 
      progress: 5, 
      image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800", 
      summary: "A Chola-era temple where the main Gopuram is tilting due to invasive vegetation.",
      history: "Commissioned during the peak of the Chola empire, this temple is a living library of stone inscriptions. These inscriptions detail the local tax laws and agricultural systems of the 11th century. Today, the 5-tier Gopuram is being slowly split apart by a massive Banyan tree. The roots have penetrated deep into the sanctum, threatening the main idol's structural safety."
    },
    { 
      id: 3, 
      name: "Puzhal Eri Muniswarar", 
      location: "Chennai", 
      progress: 2, 
      image: "https://images.unsplash.com/photo-1621259072059-e1f409549f50?w=800", 
      summary: "An ancient Pallava-style shrine almost buried under decades of silt and mud.",
      history: "This 9th-century temple is a rare example of the 'Gajaprishta' architecture (resembling an elephant's back). Located near the Puzhal reservoir, it has been submerged multiple times during heavy floods. Most of the outer walls are buried 3 feet deep in mud. The beautiful stone sculptures are covered in moss and require professional chemical cleaning to reveal the original Pallava artistry."
    },
    { 
      id: 4, 
      name: "Brahmadesam Kailasanathar", 
      location: "Ambasamudram", 
      progress: 40, 
      image: "https://images.unsplash.com/photo-1548013146-72479768bbaa?w=800", 
      summary: "A majestic temple where the musical pillar hall is currently unsafe for entry.",
      history: "Once a premier center for Vedic chanting, this temple is famous for its 'Musical Pillars' that produce different swaras when tapped. While the inner sanctum is preserved, the massive 'Vasantha Mandapam' is crumbling. The stone joints have widened, allowing rain to pour onto the 1000-year-old carvings. We are currently raising funds for 'Ashtabandhanam' (traditional herbal stone bonding)."
    },
    { 
      id: 5, 
      name: "Deepambalpuram Shrine", 
      location: "Thanjavur", 
      progress: 12, 
      image: "https://images.unsplash.com/photo-1600100397608-f09074aa9401?w=800", 
      summary: "A medieval granite structure where the sanctum roof leaks heavily during monsoon.",
      history: "This temple is a unique mix of Chola and Maratha styles. It features rare mural paintings on the inner ceiling that depict the life of local saints. However, the flat stone roof has developed major leaks. During every monsoon, the paintings are washed away by dripping water. Restoration involves removing the top soil layer of the roof and reapplying a traditional lime-brick-jelly waterproofing layer."
    },
    { 
      id: 6, 
      name: "Valayapatti Ancient Temple", 
      location: "Pudukkottai", 
      progress: 8, 
      image: "https://images.unsplash.com/photo-1621873264510-d009e5306ec4?w=800", 
      summary: "Famous for its sinking pillars. Urgent civil work is required for stabilization.",
      history: "Built on loose soil near a local pond, this temple's massive stone pillars are slowly sinking. The 'Mahamandapam' is noticeably tilted. Historically, this was a fortified temple used for protection during local wars. If the foundation is not shored up with concrete injection soon, the entire front hall will collapse within the next three years."
    },
    { 
      id: 7, 
      name: "Senthamangalam Fort Temple", 
      location: "Villupuram", 
      progress: 20, 
      image: "https://images.unsplash.com/photo-1632766329480-49635b7501a4?w=800", 
      summary: "A royal temple now abandoned and hidden within a ruined fortress.",
      history: "This temple was the private worship place for the Kadava kings. It is hidden deep within the ruins of the Senthamangalam fort. Because the location is remote, it has been targeted by idol thieves. Several minor deities have been stolen, and the remaining stone work is covered in thick jungle. We aim to clear the forest and provide 24/7 security for the site."
    },
    { 
      id: 8, 
      name: "Melakkadambur Chariot Site", 
      location: "Kattumannarkoil", 
      progress: 35, 
      image: "https://images.unsplash.com/photo-1630139191632-68937076e09e?w=800", 
      summary: "A unique chariot-shaped temple where the wheels are eroding rapidly.",
      history: "This is one of the few 'Karakkoil' (chariot-shaped) temples in existence. The entire base is carved like a horse-drawn carriage. Salinity in the air (due to proximity to the coast) is causing the delicate stone wheels to powder away. We need to apply a protective chemical coating and build a shelter to protect the carvings from direct sun and rain."
    },
    { 
      id: 9, 
      name: "Kilvalai Rock Art Shrine", 
      location: "Villupuram", 
      progress: 3, 
      image: "https://images.unsplash.com/photo-1624716443425-455ef1131100?w=800", 
      summary: "Prehistoric rock art and small shrines facing erosion and human vandalism.",
      history: "This site contains paintings dating back 3,000 years, alongside small shrines from the early Pandyan era. It is a critical link to Tamil Nadu's ancient past. Unfortunately, local trekkers often draw graffiti over these ancient paintings. We are working to install protective glass barriers and informative signage to educate visitors on the site's importance."
    },
    { 
      id: 10, 
      name: "Tirupattur Outer Shrines", 
      location: "Trichy", 
      progress: 55, 
      image: "https://images.unsplash.com/photo-1621259182978-f09e5f24d90d?w=800", 
      summary: "Main temple is active, but the historic sub-shrines are falling into decay.",
      history: "While the Brahmapureeswarar temple is well-known, its 12 sub-shrines representing the zodiac signs are in terrible condition. These smaller structures have no lighting, broken doors, and cracked floors. We are currently restoring the flooring using traditional polished granite to bring back the original 10th-century aesthetic."
    },
    { 
      id: 11, 
      name: "Sittannavasal Heritage", 
      location: "Pudukkottai", 
      progress: 42, 
      image: "https://images.unsplash.com/photo-1625032543167-93361110004e?w=800", 
      summary: "Ancient Jain murals fading due to moisture and lack of climate control.",
      history: "The Sittannavasal cave temple is world-famous for its frescoes. However, the increase in local temperature and humidity is causing the vegetable-dye colors to flake off the ceiling. We are working with international art restorers to implement a micro-climate control system to stabilize the environment inside the cave."
    },
    { 
      id: 12, 
      name: "Vodalur Vallalar Mandapam", 
      location: "Cuddalore", 
      progress: 18, 
      image: "https://images.unsplash.com/photo-1616422323292-6f296d888365?w=800", 
      summary: "The historic wooden structure is rotting and requires timber replacement.",
      history: "Unlike most Tamil temples, this site features significant wooden architecture from the 19th century. The intricate teak wood carvings of the ceiling are being destroyed by termites. Restoration involves treating the existing wood and carving new sections in the same style to replace the rotted beams."
    },
    { 
      id: 13, 
      name: "Kanchi Iravatanesvara", 
      location: "Kanchipuram", 
      progress: 48, 
      image: "https://images.unsplash.com/photo-1634704784915-aacf363b021f?w=800", 
      summary: "A Pallava-era sandstone temple powdering away due to urban pollution.",
      history: "This 8th-century temple is made of soft sandstone. Over the last 50 years, the smoke from nearby traffic and industries has reacted with the stone, turning it into powder. The fine facial features of the deities are disappearing. We are using specialized 'stone consolidants' to harden the surface and stop the erosion."
    },
    { 
      id: 14, 
      name: "Perambalur Chola Shrine", 
      location: "Perambalur", 
      progress: 14, 
      image: "https://images.unsplash.com/photo-1544085311-11a028a6a145?w=800", 
      summary: "An isolated temple with no lighting or flooring in the sanctum.",
      history: "Located in a dry, remote belt, this temple has been forgotten by most pilgrims. The sanctum sanctorum has a dirt floor, which leads to dampness and snakes entering the shrine. Our first priority is to lay proper stone flooring and install solar-powered lighting for the temple and its surrounding path."
    },
    { 
      id: 15, 
      name: "Namakkal Cave Walls", 
      location: "Namakkal", 
      progress: 60, 
      image: "https://images.unsplash.com/photo-1621259182978-f09e5f24d90d?w=800", 
      summary: "Bas-relief sculptures are at risk of bat droppings and moisture damage.",
      history: "The Narasimha cave temple features some of the finest rock-cut sculptures in India. However, the outer walls are constantly stained by bats nesting in the crevices. We are installing non-harmful bat deterrents and cleaning the stone to prevent permanent acidic staining of the carvings."
    }
  ];

  // --- VIEW 1: HISTORY VIEW ---
  if (selectedTemple) {
    return (
      <Fade in={true} timeout={600}>
        <Box sx={{ bgcolor: '#0B0B0B', minHeight: '100vh', py: 8, color: 'white' }}>
          <Container maxWidth="md">
            <Button 
              startIcon={<ArrowBackIcon />} 
              onClick={() => setSelectedTemple(null)}
              sx={{ color: '#D4AF37', mb: 4, fontWeight: 900, '&:hover': { bgcolor: 'rgba(212, 175, 55, 0.1)' } }}
            >
              Back to List
            </Button>
            
            <CardMedia 
              component="img" 
              image={selectedTemple.image} 
              sx={{ borderRadius: '24px', height: { xs: '250px', md: '450px' }, mb: 4, border: '2px solid #333', objectFit: 'cover' }} 
            />
            
            <Typography variant="h2" sx={{ color: '#D4AF37', fontWeight: 900, mb: 1, fontSize: { xs: '2.5rem', md: '3.5rem' } }}>
              {selectedTemple.name}
            </Typography>
            
            <Stack direction="row" spacing={1} sx={{ color: '#B0B0B0', mb: 4 }}>
              <FoundationIcon sx={{ color: '#D4AF37' }} />
              <Typography variant="h6">{selectedTemple.location}</Typography>
            </Stack>
            
            <Box sx={{ mb: 5, p: 3, bgcolor: '#121212', borderRadius: '15px', border: '1px solid #444' }}>
              <Typography variant="subtitle1" sx={{ color: '#D4AF37', fontWeight: 800, mb: 1 }}>RESTORATION PROGRESS: {selectedTemple.progress}%</Typography>
              <LinearProgress 
                variant="determinate" 
                value={selectedTemple.progress} 
                sx={{ height: 12, borderRadius: 10, bgcolor: '#222', '& .MuiLinearProgress-bar': { bgcolor: '#D4AF37' } }} 
              />
            </Box>

            <Typography variant="h4" sx={{ mb: 2, display: 'flex', alignItems: 'center', gap: 2, fontWeight: 700 }}>
              <HistoryIcon sx={{ color: '#D4AF37' }} /> Full History & Crisis
            </Typography>
            
            <Divider sx={{ bgcolor: '#333', mb: 3 }} />
            
            <Typography variant="body1" sx={{ lineHeight: 1.8, fontSize: '1.2rem', color: '#CCC', textAlign: 'justify', mb: 5 }}>
              {selectedTemple.history}
            </Typography>

            <Button 
              variant="contained" 
              startIcon={<VolunteerActivismIcon />}
              sx={{ bgcolor: '#D4AF37', color: 'black', fontWeight: 900, px: 6, py: 2, borderRadius: '12px', '&:hover': { bgcolor: '#F5C542' } }}
            >
              Donate to Save this Site
            </Button>
          </Container>
        </Box>
      </Fade>
    );
  }

  // --- VIEW 2: GRID VIEW ---
  return (
    <Box sx={{ bgcolor: '#0B0B0B', minHeight: '100vh', py: 8 }}>
      <Container>
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h3" sx={{ color: '#D4AF37', fontWeight: 900, mb: 2 }}>PRESERVE OUR LEGACY</Typography>
          <Typography variant="h6" sx={{ color: '#B0B0B0', fontWeight: 300 }}>Click any card to read the full history and restoration needs.</Typography>
        </Box>

        <Grid container spacing={4}>
          {data.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.id} sx={{ display: 'flex' }}>
              <Card 
                onClick={() => setSelectedTemple(item)}
                sx={{ 
                  bgcolor: '#1E1E1E', 
                  borderRadius: '20px', 
                  border: '1px solid #333',
                  display: 'flex',
                  flexDirection: 'column',
                  width: '100%',
                  cursor: 'pointer',
                  transition: '0.4s',
                  '&:hover': { transform: 'translateY(-10px)', borderColor: '#D4AF37' }
                }}
              >
                <CardMedia component="img" height="220" image={item.image} alt={item.name} />
                <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <Typography variant="h5" sx={{ color: 'white', fontWeight: 800, mb: 1 }}>{item.name}</Typography>
                  <Typography variant="body2" sx={{ color: '#B0B0B0', mb: 3, flexGrow: 1, minHeight: '60px' }}>
                    {item.summary}
                  </Typography>
                  
                  <Stack spacing={1} sx={{ mt: 'auto' }}>
                    <Stack direction="row" justifyContent="space-between">
                        <Typography variant="caption" sx={{ color: '#D4AF37', fontWeight: 800 }}>Restored</Typography>
                        <Typography variant="caption" sx={{ color: 'white' }}>{item.progress}%</Typography>
                    </Stack>
                    <LinearProgress variant="determinate" value={item.progress} sx={{ height: 6, borderRadius: 5, bgcolor: '#333', '& .MuiLinearProgress-bar': { bgcolor: '#D4AF37' } }} />
                    <Button fullWidth variant="outlined" sx={{ mt: 2, color: '#D4AF37', borderColor: '#444', fontWeight: 700 }}>Read History</Button>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default DecayingTemples;