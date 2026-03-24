import React from 'react';
import { 
  Box, Container, Typography, Grid, Card, 
  CardMedia, CardContent, Button, Stack, Rating 
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Gods = () => {
  const data = [
    { id: 1, name: "Meenakshi Amman", location: "Madurai", image: "https://lh3.googleusercontent.com/p/AF1QipN9L5-vGkQxKxY5_O9v6_R1N4Xf_8_2_7_6_1_2=s1600-w800", info: "A historic Hindu temple located on the southern bank of the Vaigai River." },
    { id: 2, name: "Brihadeeswarar", location: "Thanjavur", image: "https://lh3.googleusercontent.com/p/AF1QipN7_f1_7_x_x_x_x_x_x_x_x_x_x_x_x_x=s1600-w800", info: "Built by Raja Raja Chola I, it is one of the largest South Indian temples." },
    { id: 3, name: "Srirangam Temple", location: "Trichy", image: "https://lh3.googleusercontent.com/p/AF1QipM_7_x_x_x_x_x_x_x_x_x_x_x_x_x_x_x=s1600-w800", info: "The largest functioning Hindu temple in the world." },
    { id: 4, name: "Annamalaiyar", location: "Tiruvannamalai", image: "https://lh3.googleusercontent.com/p/AF1QipP_7_x_x_x_x_x_x_x_x_x_x_x_x_x_x_x=s1600-w800", info: "Dedicated to the deity Shiva, it is significant to the Hindu sect of Saivism." },
    { id: 5, name: "Ramanathaswamy", location: "Rameswaram", image: "https://lh3.googleusercontent.com/p/AF1QipO_7_x_x_x_x_x_x_x_x_x_x_x_x_x_x_x=s1600-w800", info: "Known for its magnificent corridors and sacred water tanks." },
    { id: 6, name: "Kapaleeshwarar", location: "Chennai", image: "https://lh3.googleusercontent.com/p/AF1QipN_7_x_x_x_x_x_x_x_x_x_x_x_x_x_x_x=s1600-w800", info: "An ancient temple of Shiva located in Mylapore, Chennai." },
    { id: 7, name: "Palani Murugan", location: "Palani", image: "https://lh3.googleusercontent.com/p/AF1QipQ_7_x_x_x_x_x_x_x_x_x_x_x_x_x_x_x=s1600-w800", info: "One of the Six Abodes of Murugan, located on a hill." },
    { id: 8, name: "Chidambaram Nataraja", location: "Chidambaram", image: "https://lh3.googleusercontent.com/p/AF1QipR_7_x_x_x_x_x_x_x_x_x_x_x_x_x_x_x=s1600-w800", info: "Dedicated to Nataraja – Shiva as the lord of dance." },
    { id: 9, name: "Kanchipuram Kamakshi", location: "Kanchipuram", image: "https://lh3.googleusercontent.com/p/AF1QipS_7_x_x_x_x_x_x_x_x_x_x_x_x_x_x_x=s1600-w800", info: "An ancient Hindu Temple dedicated to Kamakshi, one of the forms of Lalitha Maha Tripura Sundari." },
    { id: 10, name: "Tiruchendur Murugan", location: "Tiruchendur", image: "https://lh3.googleusercontent.com/p/AF1QipT_7_x_x_x_x_x_x_x_x_x_x_x_x_x_x_x=s1600-w800", info: "The only one of the six abodes of Murugan located near the sea." },
    { id: 11, name: "Ekambareswarar", location: "Kanchipuram", image: "https://lh3.googleusercontent.com/p/AF1QipU_7_x_x_x_x_x_x_x_x_x_x_x_x_x_x_x=s1600-w800", info: "Largest temple in Kanchipuram, dedicated to Lord Shiva." },
    { id: 12, name: "Suchindram Temple", location: "Kanyakumari", image: "https://lh3.googleusercontent.com/p/AF1QipV_7_x_x_x_x_x_x_x_x_x_x_x_x_x_x_x=s1600-w800", info: "Famous for its musical pillars and the 18-foot tall Hanuman statue." },
    { id: 13, name: "Nellaiappar Temple", location: "Tirunelveli", image: "https://lh3.googleusercontent.com/p/AF1QipW_7_x_x_x_x_x_x_x_x_x_x_x_x_x_x_x=s1600-w800", info: "One of the largest Shiva temples in Tamil Nadu." },
    { id: 14, name: "Vellore Golden Temple", location: "Vellore", image: "https://lh3.googleusercontent.com/p/AF1QipX_7_x_x_x_x_x_x_x_x_x_x_x_x_x_x_x=s1600-w800", info: "Spiritual park situated at the foot of a small range of green hills." },
    { id: 15, name: "Srivilliputhur Andal", location: "Srivilliputhur", image: "https://lh3.googleusercontent.com/p/AF1QipY_7_x_x_x_x_x_x_x_x_x_x_x_x_x_x_x=s1600-w800", info: "The tower of this temple is used in the Government of Tamil Nadu seal." },
    { id: 16, name: "Sarangapani Temple", location: "Kumbakonam", image: "https://lh3.googleusercontent.com/p/AF1QipZ_7_x_x_x_x_x_x_x_x_x_x_x_x_x_x_x=s1600-w800", info: "A Hindu temple dedicated to Vishnu, located in Kumbakonam." },
    { id: 17, name: "Jambukeswarar", location: "Trichy", image: "https://lh3.googleusercontent.com/p/AF1Qip1_7_x_x_x_x_x_x_x_x_x_x_x_x_x_x_x=s1600-w800", info: "Represents the element of water (Appu), one of the Pancha Bhoota Stalams." },
    { id: 18, name: "Nagaraja Temple", location: "Nagercoil", image: "https://lh3.googleusercontent.com/p/AF1Qip2_7_x_x_x_x_x_x_x_x_x_x_x_x_x_x_x=s1600-w800", info: "Famous for the presiding deity Nagaraja, the King of Serpents." },
    { id: 19, name: "Marudhamalai Murugan", location: "Coimbatore", image: "https://lh3.googleusercontent.com/p/AF1Qip3_7_x_x_x_x_x_x_x_x_x_x_x_x_x_x_x=s1600-w800", info: "A popular hill temple dedicated to Hindu god Murugan." },
    { id: 20, name: "Samayapuram Mariamman", location: "Trichy", image: "https://lh3.googleusercontent.com/p/AF1Qip4_7_x_x_x_x_x_x_x_x_x_x_x_x_x_x_x=s1600-w800", info: "One of the wealthiest and most popular temples in Tamil Nadu." }
  ];

  return (
    <Box sx={{ bgcolor: '#0B0B0B', minHeight: '100vh', py: 8 }}>
      <Container>
        <Typography 
          variant="h3" 
          sx={{ color: '#D4AF37', fontWeight: 900, textAlign: 'center', mb: 6, letterSpacing: '1px' }}
        >
          Sacred Deities of Tamil Nadu
        </Typography>

        <Grid container spacing={4}>
          {data.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.id} sx={{ display: 'flex' }}>
              <Card sx={{ 
                bgcolor: '#1E1E1E', 
                borderRadius: '16px', 
                border: '1px solid #333',
                display: 'flex',
                flexDirection: 'column', 
                width: '100%',
                transition: '0.3s',
                '&:hover': { transform: 'translateY(-10px)', borderColor: '#D4AF37' }
              }}>
                <CardMedia 
                  component="img" 
                  height="220" 
                  image={item.image} 
                  alt={item.name} 
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <Stack direction="row" justifyContent="space-between" alignItems="flex-start" mb={1}>
                    <Typography variant="h6" sx={{ color: 'white', fontWeight: 800, lineHeight: 1.2 }}>
                      {item.name}
                    </Typography>
                    <Rating value={5} size="small" readOnly sx={{ color: '#D4AF37' }} />
                  </Stack>

                  <Stack direction="row" spacing={1} sx={{ color: '#D4AF37', mb: 2 }}>
                    <LocationOnIcon fontSize="small" />
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>{item.location}</Typography>
                  </Stack>

                  <Typography variant="body2" sx={{ color: '#B0B0B0', mb: 3, flexGrow: 1 }}>
                    {item.info}
                  </Typography>

                  <Button 
                    fullWidth 
                    sx={{ 
                      bgcolor: '#D4AF37', 
                      color: 'black', 
                      fontWeight: 900, 
                      py: 1.5,
                      '&:hover': { bgcolor: '#F5C542' } 
                    }}
                  >
                    View Rituals
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Gods;