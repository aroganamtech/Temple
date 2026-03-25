import React, { useState } from 'react';
import { 
  Box, Container, Typography, Grid, CardMedia, CardContent, 
  Button, Stack, LinearProgress, Dialog, DialogTitle, 
  DialogContent, DialogActions, IconButton, Chip, TextField, InputAdornment, Paper,
  useTheme, useMediaQuery
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import EngineeringIcon from '@mui/icons-material/Engineering';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const DecayingTemples = () => {
  const [selectedTemple, setSelectedTemple] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [flippedCardId, setFlippedCardId] = useState(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleToggleFlip = (id) => {
    if (isMobile) {
      setFlippedCardId(flippedCardId === id ? null : id);
    }
  };

  const templeData = [
    { id: 1, name: "Vengadampettai Venugopala", location: "Cuddalore", progress: 15, urgency: "Critical", year: "1550 AD", condition: "Severe Settlement", image: "https://www.vsvstemple.com/9.png", cause: "Hydrological pressure at the granite base causing a 3-degree structural tilt.", solution: "Micro-piling and chemical grout injection to stabilize subsoil.", history: "A masterpiece of Nayakar architecture featuring unique stone carvings of the Dasavatara.", roadmap: ["Geotechnical Soil Test", "Foundation Realignment", "Stone Stitching"] },
    { id: 2, name: "Udayarpalayam Shiva", location: "Ariyalur", progress: 5, urgency: "Critical", year: "1620 AD", condition: "Vegetation Strangled", image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEixHcm0za47A4oxHzCQoIWAKs11hIlxVR0Pc3MZ_N7YHX2C-WR75B-NkJO74IgOo3aPfnmsU53-_Uhhz1DsRmS2g0wXU9apvNFCdeVHSbNOc06Cd8C_YEsZyMU6Ch3MB4Mf-e5gsDMdf8oo/s1600/Temple_Tangore_1.jpg", cause: "Aggressive Banyan root systems have displaced 40% of the Gopuram's structural masonry.", solution: "Manual bio-extraction followed by traditional Lime-Surkhi mortar restoration.", history: "Commissioned by the Udayarpalayam Zamins, it houses a rare monolithic Nandi.", roadmap: ["Bio-growth clearing", "Structural Grouting", "Lime Plastering"] },
    { id: 3, name: "Puzhal Eri Muniswarar", location: "Chennai", progress: 2, urgency: "Critical", year: "9th Century", condition: "Silt Submerged", image: "https://images.unsplash.com/photo-1621259072059-e1f409549f50?w=800", cause: "Repeated reservoir flooding has buried the adisthana (base) under 4 feet of clay silt.", solution: "Controlled manual excavation and desilting with non-acidic stone cleaners.", history: "An early Pallava shrine reflecting the transition from rock-cut to structural temples.", roadmap: ["Archaeological Excavation", "Silt Removal", "Stone Surface Protection"] },
    { id: 4, name: "Brahmadesam Kailasanathar", location: "Ambasamudram", progress: 40, urgency: "Moderate", year: "10th Century", condition: "Roof Leakage", image: "https://images.unsplash.com/photo-1548013146-72479768bbaa?w=800", cause: "Cracked terrace slabs allowing acidic rainwater to erode the 'Musical Pillars'.", solution: "Application of traditional Ashtabandhanam paste for water-tight sealing.", history: "Famous for pillars that produce different swaras (musical notes) when tapped.", roadmap: ["Roof Waterproofing", "Pillar Enclosure", "Surface Hardening"] },
    { id: 5, name: "Deepambalpuram Shrine", location: "Thanjavur", progress: 12, urgency: "High", year: "11th Century", condition: "Mural Erosion", image: "https://images.unsplash.com/photo-1600100397608-f09074aa9401?w=800", cause: "High humidity and ammonia from bat guano destroying Chola-era vegetable-dye murals.", solution: "Installation of organic pest deterrents and UV-filtered ventilation systems.", history: "One of the few remaining sites with authentic 11th-century secular paintings.", roadmap: ["Guano Removal", "Mural Consolidation", "Climate Control Setup"] },
    { id: 6, name: "Valayapatti Ancient", location: "Pudukkottai", progress: 8, urgency: "Critical", year: "13th Century", condition: "Pillar Displacement", image: "https://images.unsplash.com/photo-1621873264510-d009e5306ec4?w=800", cause: "Seepage into the Mahamandapam has caused the main support pillars to slide outwards.", solution: "Hydraulic jacking and insertion of stainless steel tension rods.", history: "A remote Pandyan outpost showcasing transitional Dravidian style.", roadmap: ["Structural Mapping", "Hydraulic Alignment", "Steel Reinforcement"] },
    { id: 7, name: "Senthamangalam Fort", location: "Villupuram", progress: 20, urgency: "High", year: "1250 AD", condition: "Encroached", image: "https://images.unsplash.com/photo-1632766329480-49635b7501a4?w=800", cause: "Dense forest overgrowth and lack of physical boundary leading to stone theft.", solution: "Site clearing and solar-powered smart surveillance integration.", history: "The capital fort of the Kadava king Kopperunjinga, holding vital inscriptions.", roadmap: ["Forest Clearance", "Fencing", "CCTV Monitoring"] },
    { id: 8, name: "Melakkadambur Chariot", location: "Kattumannarkoil", progress: 35, urgency: "Moderate", year: "1110 AD", condition: "Salt Weathering", image: "https://images.unsplash.com/photo-1630139191632-68937076e09e?w=800", cause: "Proximity to the coast is causing sea-salt crystallization inside the stone pores.", solution: "Pulp treatment (paper-mache method) to draw out salts and protective coating.", history: "The first temple built in the shape of a horse-drawn chariot (Karakkoil).", roadmap: ["Salt Desalination", "Stone Consolidation", "Water-repellent Shield"] },
    { id: 9, name: "Kilvalai Rock Art", location: "Villupuram", progress: 3, urgency: "Critical", year: "1000 BC", condition: "Vandalism", image: "https://images.unsplash.com/photo-1624716443425-455ef1131100?w=800", cause: "Modern graffiti and human contact are erasing 3,000-year-old ochre paintings.", solution: "Laminated glass barrier installation and high-resolution digital archiving.", history: "Prehistoric rock art depicting community hunts and celestial symbols.", roadmap: ["Cleaning Graffiti", "Protective Glazing", "Educational Signage"] },
    { id: 10, name: "Tirupattur Outer Shrines", location: "Trichy", progress: 55, urgency: "Moderate", year: "800 AD", condition: "Floor Collapse", image: "https://images.unsplash.com/photo-1621259072059-e1f409549f50?w=800", cause: "Hollow spaces beneath the floor are attracting reptile nesting and soil erosion.", solution: "Traditional river-sand filling and granite slab relaying.", history: "Ancient shrines dedicated to the 12 Jyotirlingas, predating the main complex.", roadmap: ["Debris Clearance", "Sand Infusion", "Granite Relaying"] },
    { id: 11, name: "Sittannavasal Cave", location: "Pudukkottai", progress: 42, urgency: "High", year: "7th Century", condition: "Pigment Fading", image: "https://images.unsplash.com/photo-1625032543167-93361110004e?w=800", cause: "Carbon dioxide from tourists and fluctuating light levels causing 'fresco' flaking.", solution: "Implementation of a visitor-limit gate and cool LED fiber-optic lighting.", history: "The 'Ajanta of the South', containing world-famous Jain ceiling murals.", roadmap: ["Pigment Fixing", "Ventilation Control", "Fiber-optic Install"] },
    { id: 12, name: "Vodalur Vallalar", location: "Cuddalore", progress: 18, urgency: "Moderate", year: "1867 AD", condition: "Termite Infestation", image: "https://images.unsplash.com/photo-1616422323292-6f296d888365?w=800", cause: "Subterranean termites attacking the sacred teakwood rafters and door frames.", solution: "Inorganic timber treatment and replacement with seasoned Burmese teak.", history: "The site where Saint Ramalinga Adigalar preached universal compassion.", roadmap: ["Infestation Audit", "Timber Treatment", "Wood Carving Restoration"] },
    { id: 13, name: "Kanchi Iravatanesvara", location: "Kanchipuram", progress: 48, urgency: "Moderate", year: "720 AD", condition: "Sandstone Dusting", image: "https://images.unsplash.com/photo-1634704784915-aacf363b021f?w=800", cause: "Chemical reaction with urban smog turning sandstone into fine powder (pulverization).", solution: "Nano-lime surface hardening and creation of an urban green-buffer.", history: "A Pallava jewel with the most detailed miniature sculptures in Kanchipuram.", roadmap: ["Surface Hardening", "Pollution Monitoring", "Tree Planting Buffer"] },
    { id: 14, name: "Perambalur Chola", location: "Perambalur", progress: 14, urgency: "High", year: "1050 AD", condition: "Abandonment", image: "https://images.unsplash.com/photo-1544085311-11a028a6a145?w=800", cause: "Structural integrity is intact but secondary growth and bat nesting have halted entry.", solution: "Sanitization of inner sanctum and community heritage awareness program.", history: "Built during Rajendra Chola's reign, mirror-imaging the style of Gangaikonda Cholapuram.", roadmap: ["Interior Cleaning", "Bat-proofing", "Heritage Awareness"] },
    { id: 15, name: "Namakkal Cave Walls", location: "Namakkal", progress: 60, urgency: "Moderate", year: "8th Century", condition: "Oil Staining", image: "https://images.unsplash.com/photo-1621259072059-e1f409549f50?w=800", cause: "Centuries of oil-lamp soot and direct human touch have created a thick acidic film.", solution: "Eco-friendly clay-pack cleaning and installation of brass railings.", history: "Rock-cut cave temples showcasing the exquisite Adiyaman art style.", roadmap: ["Clay-pack Treatment", "Brass Railing Fix", "Lighting Design"] }
  ];

  const filtered = templeData.filter(t => 
    t.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    t.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const styles = {
    // Background color updated to solid cream
    container: { bgcolor: '#FFFDD0', minHeight: '100vh', py: { xs: 3, md: 6 } },
    doshamTheme: {
      background: 'linear-gradient(135deg, #1A1A1A 0%, #3E2723 100%)',
      accent: '#FFD700',
      textPrimary: '#FFFFFF',
      textSecondary: '#E0C097'
    },
    flipCard: { perspective: '1500px', height: '500px', cursor: 'pointer' },
    flipInner: (id) => ({ 
      position: 'relative', width: '100%', height: '100%', 
      transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)', 
      transformStyle: 'preserve-3d',
      transform: flippedCardId === id ? 'rotateY(180deg)' : 'none',
      '&:hover': { transform: !isMobile ? 'rotateY(180deg)' : (flippedCardId === id ? 'rotateY(180deg)' : 'none') }
    }),
    cardFace: { position: 'absolute', width: '100%', height: '100%', backfaceVisibility: 'hidden', borderRadius: '24px', bgcolor: 'white', display: 'flex', flexDirection: 'column', boxShadow: '0 8px 32px rgba(0,0,0,0.06)', border: '1px solid #EAE2D6', overflow: 'hidden' },
    backFace: { transform: 'rotateY(180deg)', p: 4, background: 'linear-gradient(135deg, #1A1A1A 0%, #3E2723 100%)', color: '#FFFFFF' },
    label: { color: '#FFD700', fontWeight: 900, fontSize: '0.7rem', letterSpacing: 1.5, mb: 0.5, textTransform: 'uppercase' }
  };

  return (
    <Box sx={styles.container}>
      <Container maxWidth="lg">
        <Typography variant={isMobile ? "h4" : "h2"} sx={{ textAlign: 'center', fontWeight: 900, color: '#3E2723', mb: 1, fontFamily: 'serif' }}>Heritage Restoration Registry</Typography>
        <Typography sx={{ textAlign: 'center', color: '#8B6508', mb: 5, fontWeight: 500 }}>Technical Survey of 15 At-Risk Sites in Tamil Nadu</Typography>

        <TextField 
          fullWidth placeholder="Filter by Temple Name or District..." 
          onChange={(e) => setSearchQuery(e.target.value)}
          sx={{ mb: 6, bgcolor: 'white', borderRadius: '12px', '& fieldset': { borderRadius: '12px' } }}
          InputProps={{ startAdornment: <InputAdornment position="start"><SearchIcon sx={{color: '#3E2723'}} /></InputAdornment> }}
        />

        <Grid container spacing={4}>
          {filtered.map((temple) => (
            <Grid item xs={12} sm={6} md={4} key={temple.id}>
              <Box sx={styles.flipCard} onClick={() => handleToggleFlip(temple.id)}>
                <Box className="flip-inner" sx={styles.flipInner(temple.id)}>
                  {/* FRONT */}
                  <Box sx={styles.cardFace}>
                    <CardMedia component="img" height="250" image={temple.image} />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Chip label={temple.urgency} size="small" color={temple.urgency === 'Critical' ? 'error' : 'warning'} sx={{ mb: 1.5, fontWeight: 800 }} />
                      <Typography variant="h6" sx={{ fontWeight: 800, color: '#3E2723', lineHeight: 1.2 }}>{temple.name}</Typography>
                      <Stack direction="row" spacing={1} alignItems="center" mt={1} color="text.secondary">
                        <LocationOnIcon fontSize="inherit" />
                        <Typography variant="caption" sx={{ fontWeight: 700 }}>{temple.location}</Typography>
                      </Stack>
                    </CardContent>
                    <Box sx={{ p: 3, mt: 'auto', bgcolor: '#FCFAFB' }}>
                      <Typography variant="caption" sx={{ fontWeight: 900 }}>Restoration Fund: {temple.progress}%</Typography>
                      <LinearProgress variant="determinate" value={temple.progress} sx={{ height: 6, borderRadius: 3, mt: 1, bgcolor: '#EEE', '& .MuiLinearProgress-bar': { bgcolor: '#3E2723' } }} />
                    </Box>
                  </Box>

                  {/* BACK */}
                  <Box sx={{ ...styles.cardFace, ...styles.backFace }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 900, color: '#FFD700', borderBottom: '2px solid rgba(255,215,0,0.3)', pb: 1, mb: 3 }}>SITE DOSSIER #{temple.id}</Typography>
                    <Box sx={{ mb: 2 }}>
                      <Typography sx={styles.label}>Structural Pathology</Typography>
                      <Typography variant="body2" sx={{ fontSize: '0.8rem', color: '#E0C097', fontStyle: 'italic' }}>"{temple.cause}"</Typography>
                    </Box>
                    <Box sx={{ mb: 2 }}>
                      <Typography sx={styles.label}>Restoration Mandate</Typography>
                      <Typography variant="body2" sx={{ fontSize: '0.8rem', fontWeight: 500 }}>{temple.solution}</Typography>
                    </Box>
                    <Grid container spacing={2} sx={{ mb: 3 }}>
                      <Grid item xs={6}><Typography sx={styles.label}>Registry Year</Typography><Typography variant="caption" sx={{ fontWeight: 700, color: '#FFF' }}>{temple.year}</Typography></Grid>
                      <Grid item xs={6}><Typography sx={styles.label}>Risk Factor</Typography><Typography variant="caption" sx={{ fontWeight: 700, color: '#FFF' }}>{temple.condition}</Typography></Grid>
                    </Grid>
                    <Button 
                      fullWidth variant="outlined" 
                      onClick={(e) => { e.stopPropagation(); setSelectedTemple(temple); }}
                      sx={{ mt: 'auto', borderColor: '#FFD700', color: '#FFD700', fontWeight: 900, borderRadius: '12px' }}
                    >
                      View Full History
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* DIALOG (Dosham Theme) */}
        <Dialog 
          open={!!selectedTemple} onClose={() => setSelectedTemple(null)} maxWidth="md" fullWidth fullScreen={isMobile}
          PaperProps={{ sx: { borderRadius: isMobile ? 0 : '24px', background: styles.doshamTheme.background, color: '#FFFFFF' } }}
        >
          {selectedTemple && (
            <>
              <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)', p: 4 }}>
                <Box>
                  <Typography variant={isMobile ? "h5" : "h4"} sx={{ fontWeight: 900, color: '#FFD700' }}>{selectedTemple.name}</Typography>
                  <Typography variant="subtitle1" sx={{ color: '#E0C097' }}>Archive — {selectedTemple.location}</Typography>
                </Box>
                <IconButton onClick={() => setSelectedTemple(null)} sx={{ color: 'white' }}><CloseIcon /></IconButton>
              </DialogTitle>
              <DialogContent sx={{ p: 4 }}>
                <Grid container spacing={4}>
                  <Grid item xs={12} md={6}>
                    <Typography variant="h6" sx={{ fontWeight: 800, mb: 2, display: 'flex', alignItems: 'center', gap: 1, color: '#FFD700' }}><HistoryEduIcon /> Historical Significance</Typography>
                    <Typography variant="body1" sx={{ color: '#E0C097', lineHeight: 1.8 }}>{selectedTemple.history}</Typography>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography variant="h6" sx={{ fontWeight: 800, mb: 2, display: 'flex', alignItems: 'center', gap: 1, color: '#FFD700' }}><EngineeringIcon /> Roadmap</Typography>
                    {selectedTemple.roadmap.map((step, i) => (
                      <Paper key={i} sx={{ p: 2, mb: 1.5, bgcolor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,215,0,0.2)', color: 'white' }}>
                        <Typography variant="body2" sx={{ fontWeight: 600 }}>0{i+1}. {step}</Typography>
                      </Paper>
                    ))}
                  </Grid>
                </Grid>
              </DialogContent>
              <DialogActions sx={{ p: 4 }}>
                <Button fullWidth variant="contained" sx={{ bgcolor: '#FFD700', color: '#000', py: 2, fontWeight: 900 }}>Contribute to Site Preservation</Button>
              </DialogActions>
            </>
          )}
        </Dialog>
      </Container>
    </Box>
  );
};

export default DecayingTemples;