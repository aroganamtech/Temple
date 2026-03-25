import React, { useState } from 'react';
import { 
  Box, Container, Typography, Grid, Avatar, Card, 
  CardContent, Stack, Chip, Button, Divider, Paper, 
  Dialog, DialogTitle, DialogContent, IconButton, List, ListItem, ListItemText, ListItemIcon
} from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import CloseIcon from '@mui/icons-material/Close';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import HandymanIcon from '@mui/icons-material/Handyman';
import CameraAltIcon from '@mui/icons-material/CameraAlt';

const Adiyargal = () => {
  const [selectedAdiyar, setSelectedAdiyar] = useState(null);

  // 15 Expanded Profiles of Modern Adiyargal
  const adiyargalList = [
    { id: 1, name: "Dr. Arulmozhi", role: "Chief Sthapathi", temples: 12, impact: "Structural Stability", avatar: "A", bio: "Expert in Agamic architecture and granite structural realignment. Led the 2024 Vengadampettai foundation project.", skills: ["Structural Audit", "Grouting", "Vastu Shastra"] },
    { id: 2, name: "Rajesh Kannan", role: "Uzhavar Pani Lead", temples: 45, impact: "Vegetation Clearing", avatar: "R", bio: "Specializes in the non-invasive removal of deep-rooted Banyan trees from temple Gopurams without damaging stone joints.", skills: ["Root Extraction", "Scaffolding", "Lime Mortar"] },
    { id: 3, name: "Meenakshi Iyer", role: "Heritage Philanthropist", temples: 8, impact: "Mural Conservation", avatar: "M", bio: "Focuses on funding the restoration of Chola-era vegetable dye paintings using eco-friendly preservation techniques.", skills: ["Fundraising", "Mural Research", "Sponsorship"] },
    { id: 4, name: "Senthil Kumar", role: "Digital Archivist", temples: 22, impact: "3D Preservation", avatar: "S", bio: "Uses LiDAR scanning to create digital twins of decaying temples before structural collapse for future reconstruction.", skills: ["3D Scanning", "Photogrammetry", "Data Archiving"] },
    { id: 5, name: "Kavitha Selvam", role: "Epigraphist", temples: 15, impact: "Inscription Reading", avatar: "K", bio: "Expert in reading Vatteluttu and Ancient Tamil scripts. Documents lost inscriptions for the State Archeological Dept.", skills: ["Script Reading", "Stampage", "Historical Mapping"] },
    { id: 6, name: "Madan Gowri", role: "Awareness Creator", temples: 30, impact: "Youth Engagement", avatar: "M", bio: "Uses social media to highlight 'forgotten' temples, bringing over 5,000 volunteers to local restoration sites.", skills: ["Storytelling", "Video Production", "Community Building"] },
    { id: 7, name: "Srinivasan", role: "Traditional Mason", temples: 18, impact: "Stone Carving", avatar: "S", bio: "One of the few remaining masons skilled in 'Nool Pidi' (thread alignment) for traditional temple reconstruction.", skills: ["Stone Chiseling", "Joint Fitting", "Temple Layout"] },
    { id: 8, name: "Deepa Raghavan", role: "Ritual Reviver", temples: 10, impact: "Daily Pooja Setup", avatar: "D", bio: "Works on 'Oru Kaala Pooja' schemes, ensuring that dormant temples are relit and daily rituals are performed sustainably.", skills: ["Community Coordination", "Trust Management", "Spiritual Logistics"] },
    { id: 9, name: "Vignesh Shivan", role: "Drone Specialist", temples: 25, impact: "Aerial Survey", avatar: "V", bio: "Conducts aerial thermal imaging to detect hidden cracks in temple ceilings that are invisible from the ground.", skills: ["Drone Pilot", "Thermal Mapping", "Damage Detection"] },
    { id: 10, name: "Anbuchelvan", role: "Local Volunteer", temples: 50, impact: "Ground Maintenance", avatar: "A", bio: "A local legend who has spent 20 years clearing silt and cleaning temple ponds (Pushkarani) across the delta region.", skills: ["Pond Cleaning", "Silt Removal", "General Labor"] },
    { id: 11, name: "Thara Ganesan", role: "Chemistry Conservator", temples: 14, impact: "Stone Hardening", avatar: "T", bio: "PhD in Material Science. Developed a specialized nano-lime solution to stop sandstone dusting in Kanchipuram temples.", skills: ["Chemical Cleaning", "Nano-coatings", "Lab Analysis"] },
    { id: 12, name: "Bala Murugan", role: "Woodwork Expert", temples: 9, impact: "Chariot Restoration", avatar: "B", bio: "Master craftsman specializing in the restoration of ancient wooden temple cars (Ther) and Vahanas.", skills: ["Wood Carving", "Termite Treatment", "Polishing"] },
    { id: 13, name: "Lakshmi Narayanan", role: "Legal Advisor", temples: 20, impact: "Encroachment Removal", avatar: "L", bio: "Provides pro-bono legal support to retrieve temple lands from illegal encroachments and document land deeds.", skills: ["Land Laws", "Documentation", "Legal Research"] },
    { id: 14, name: "Prakash Raj", role: "Lighting Designer", temples: 11, impact: "Eco-Lighting", avatar: "P", bio: "Installs non-heat emitting, UV-protected lighting systems to illuminate sculptures without damaging stone or murals.", skills: ["Electrical Design", "LED Tech", "Aesthetic Lighting"] },
    { id: 15, name: "Uma Maheshwari", role: "Plant Biologist", temples: 17, impact: "Invasive Species Control", avatar: "U", bio: "Researches specific bio-enzymes that prevent moss and algae growth on temple walls without corroding the stone.", skills: ["Biology", "Eco-enzymes", "Surface Protection"] }
  ];

  const styles = {
    hero: {
      background: 'linear-gradient(135deg, #1A1A1A 0%, #3E2723 100%)',
      py: 10, color: 'white', textAlign: 'center', borderRadius: '0 0 50px 50px', mb: 6
    },
    card: {
      borderRadius: '24px', transition: '0.4s', border: '1px solid #EAE2D6',
      '&:hover': { transform: 'translateY(-10px)', boxShadow: '0 15px 35px rgba(62,39,35,0.15)' }
    },
    modal: {
      '& .MuiPaper-root': { borderRadius: '24px', background: 'linear-gradient(135deg, #1A1A1A 0%, #3E2723 100%)', color: 'white' }
    }
  };

  return (
    <Box sx={{ bgcolor: '#F7F4F0', minHeight: '100vh', pb: 10 }}>
      {/* HEADER */}
      <Box sx={styles.hero}>
        <Container maxWidth="md">
          <Typography variant="overline" sx={{ letterSpacing: 5, color: '#FFD700', fontWeight: 900 }}>அடியார்கள்</Typography>
          <Typography variant="h2" sx={{ fontWeight: 900, mb: 1, fontFamily: 'serif' }}>The Adiyargal Collective</Typography>
          <Typography variant="body1" sx={{ opacity: 0.8 }}>15 Guardians of Tamil Heritage. Hover for status, Click for contribution.</Typography>
        </Container>
      </Box>

      <Container>
        <Grid container spacing={3}>
          {adiyargalList.map((adiyar) => (
            <Grid item xs={12} sm={6} md={4} lg={2.4} key={adiyar.id}>
              <Card sx={styles.card} elevation={0}>
                <CardContent sx={{ textAlign: 'center' }}>
                  <Avatar sx={{ width: 65, height: 65, mx: 'auto', mb: 2, bgcolor: '#3E2723', color: '#FFD700', border: '3px solid #FFD700', fontWeight: 900 }}>
                    {adiyar.avatar}
                  </Avatar>
                  <Typography variant="subtitle1" sx={{ fontWeight: 900, color: '#3E2723', lineHeight: 1.2 }}>{adiyar.name}</Typography>
                  <Typography variant="caption" sx={{ color: '#8B6508', fontWeight: 700, display: 'block', mb: 2 }}>{adiyar.role}</Typography>
                  
                  <Stack direction="row" justifyContent="center" spacing={1} sx={{ mb: 2 }}>
                    <Chip label={`${adiyar.temples} Sites`} size="small" sx={{ height: 20, fontSize: '0.65rem', fontWeight: 800, bgcolor: '#FDF5E6' }} />
                  </Stack>

                  <Button 
                    fullWidth variant="contained" 
                    onClick={() => setSelectedAdiyar(adiyar)}
                    sx={{ bgcolor: '#3E2723', color: 'white', borderRadius: '10px', textTransform: 'none', fontWeight: 700, '&:hover': { bgcolor: '#5D4037' } }}
                  >
                    View
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* DETAILS DIALOG */}
        <Dialog open={!!selectedAdiyar} onClose={() => setSelectedAdiyar(null)} maxWidth="sm" fullWidth sx={styles.modal}>
          {selectedAdiyar && (
            <>
              <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 4 }}>
                <Typography variant="h5" sx={{ fontWeight: 900, color: '#FFD700' }}>Adiyar Dossier</Typography>
                <IconButton onClick={() => setSelectedAdiyar(null)} sx={{ color: 'white' }}><CloseIcon /></IconButton>
              </DialogTitle>
              <DialogContent sx={{ p: 4, pt: 0 }}>
                <Stack direction="row" spacing={3} alignItems="center" mb={4}>
                  <Avatar sx={{ width: 100, height: 100, bgcolor: '#FFD700', color: '#000', fontSize: '2.5rem', fontWeight: 900 }}>{selectedAdiyar.avatar}</Avatar>
                  <Box>
                    <Typography variant="h4" fontWeight={900}>{selectedAdiyar.name} <VerifiedIcon color="info" sx={{ fontSize: 20 }} /></Typography>
                    <Typography variant="h6" sx={{ color: '#FFD700', opacity: 0.9 }}>{selectedAdiyar.role}</Typography>
                  </Box>
                </Stack>

                <Typography variant="subtitle2" sx={{ color: '#FFD700', letterSpacing: 1.5, mb: 1 }}>BACKGROUND & CONTRIBUTION</Typography>
                <Typography variant="body1" sx={{ color: '#E0C097', mb: 4, lineHeight: 1.7 }}>{selectedAdiyar.bio}</Typography>

                <Typography variant="subtitle2" sx={{ color: '#FFD700', letterSpacing: 1.5, mb: 2 }}>CORE EXPERTISE</Typography>
                <Grid container spacing={1} mb={4}>
                  {selectedAdiyar.skills.map((skill, index) => (
                    <Grid item key={index}>
                      <Chip label={skill} sx={{ bgcolor: 'rgba(255,215,0,0.1)', color: '#FFD700', border: '1px solid #FFD700', fontWeight: 700 }} />
                    </Grid>
                  ))}
                </Grid>

                <Paper sx={{ p: 3, bgcolor: 'rgba(255,255,255,0.05)', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <Stack direction="row" justifyContent="space-around">
                    <Box textAlign="center">
                      <MenuBookIcon sx={{ color: '#FFD700', mb: 1 }} />
                      <Typography variant="h6" fontWeight={900}>{selectedAdiyar.temples}</Typography>
                      <Typography variant="caption">SITES SAVED</Typography>
                    </Box>
                    <Box textAlign="center">
                      <WorkspacePremiumIcon sx={{ color: '#FFD700', mb: 1 }} />
                      <Typography variant="h6" fontWeight={900}>LEVEL 4</Typography>
                      <Typography variant="caption">HERITAGE RANK</Typography>
                    </Box>
                    <Box textAlign="center">
                      <HandymanIcon sx={{ color: '#FFD700', mb: 1 }} />
                      <Typography variant="h6" fontWeight={900}>100%</Typography>
                      <Typography variant="caption">SUCCESS RATE</Typography>
                    </Box>
                  </Stack>
                </Paper>
              </DialogContent>
            </>
          )}
        </Dialog>
      </Container>
    </Box>
  );
};

export default Adiyargal;