import React from 'react';
import { 
  Box, Container, Typography, Grid, Card, CardMedia, 
  CardContent, Button, Chip, Stack, Divider 
} from '@mui/material';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GavelIcon from '@mui/icons-material/Gavel';

const Dosham = () => {
  const data = [
    { id: 1, name: "Thirunageswaram Rahu Bhagwan", remedy: "Rahu Dosha", location: "Kumbakonam", image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800", info: "The most famous temple where milk poured on the Rahu idol turns blue. It removes hurdles in career and health.", benefit: "Success in Career" },
    { id: 2, name: "Vaitheeswaran Koil", remedy: "Sevvai (Mars) Dosha", location: "Mayiladuthurai", image: "https://images.unsplash.com/photo-1600100397608-f09074aa9401?w=800", info: "Dedicated to Mars. It is believed that a dip in the holy tank cures skin diseases and marriage delays.", benefit: "Health & Marriage" },
    { id: 3, name: "Thirunallar Saneeswaran", remedy: "Sani (Saturn) Dosha", location: "Karaikal", image: "https://images.unsplash.com/photo-1590050752117-23a9d7fc2014?w=800", info: "The most powerful shrine for Saturn. A holy dip in the Nala Theertham washes away all bad luck (Karma).", benefit: "Relief from Hardship" },
    { id: 4, name: "Suryanar Koil", remedy: "Surya (Sun) Dosha", location: "Aduthurai", info: "The primary Navagraha temple for Sun. It helps in gaining power, fame, and resolving father-related issues.", image: "https://images.unsplash.com/photo-1621259072059-e1f409549f50?w=800", benefit: "Fame & Authority" },
    { id: 5, name: "Alangudi Guru Temple", remedy: "Guru (Jupiter) Dosha", location: "Kumbakonam", image: "https://images.unsplash.com/photo-1512100356956-c1b47f4b8a21?w=800", info: "Dedicated to Lord Dakshinamurthy. Essential for students and those seeking wisdom or child-birth.", benefit: "Wisdom & Wealth" },
    { id: 6, name: "Kanchanur Sukran", remedy: "Sukra (Venus) Dosha", location: "Kumbakonam", image: "https://images.unsplash.com/photo-1544085311-11a028a6a145?w=800", info: "Worshipped for wealth, luxury, and artistic success. Removes obstacles in luxury living and arts.", benefit: "Luxury & Prosperity" },
    { id: 7, name: "Thingalur Chandran", remedy: "Chandra (Moon) Dosha", location: "Thanjavur", image: "https://images.unsplash.com/photo-1548013146-72479768bbaa?w=800", info: "Removes mental stress and mother-related health issues. Improves focus and emotional stability.", benefit: "Mental Peace" },
    { id: 8, name: "Keezhaperumpallam Ketu", remedy: "Ketu Dosha", location: "Mayiladuthurai", image: "https://images.unsplash.com/photo-1621873264510-d009e5306ec4?w=800", info: "The shadow planet temple for Ketu. Worshipped to gain spiritual knowledge and cure chronic diseases.", benefit: "Spirituality" },
    { id: 9, name: "Tiruvenkadu Budhan", remedy: "Budha (Mercury) Dosha", location: "Sirkazhi", image: "https://images.unsplash.com/photo-1632766329480-49635b7501a4?w=800", info: "Specifically for education and communication skills. It is known as the Kashi of South India.", benefit: "Education Success" },
    { id: 10, name: "Srivilliputhur Andal", remedy: "Marriage (Sevvai)", location: "Srivilliputhur", image: "https://images.unsplash.com/photo-1630139191632-68937076e09e?w=800", info: "Famous for 'Garland Exchange' rituals to find a suitable life partner and remove marriage delays.", benefit: "Union of Couples" },
    { id: 11, name: "Uppiliappan Temple", remedy: "Vishu Dosha", location: "Kumbakonam", image: "https://images.unsplash.com/photo-1624716443425-455ef1131100?w=800", info: "A temple where salt is never used in food offerings. Removes negative vibrations and family disputes.", benefit: "Family Harmony" },
    { id: 12, name: "Thirupampuram", remedy: "Sarpa Dosha", location: "Kudavasal", image: "https://images.unsplash.com/photo-1621259182978-f09e5f24d90d?w=800", info: "One of the most powerful temples to remove Rahu-Ketu Sarpa Dosha and Naga Dosham.", benefit: "Ancestral Peace" },
    { id: 13, name: "Kalahasti (Nearby)", remedy: "Rahu-Ketu", location: "Border", image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800", info: "Known for the Vayu Lingam and the intense Rahu Ketu Sarpa Dosha Nivarthi pooja.", benefit: "Karmic Cleanse" },
    { id: 14, name: "Tiruchengode", remedy: "Ardhanareshwarar", location: "Namakkal", image: "https://images.unsplash.com/photo-1616422323292-6f296d888365?w=800", info: "Removes division between couples. Represents the equal status of male and female energy.", benefit: "Relationship Unity" },
    { id: 15, name: "Pataleeswarar", location: "Cuddalore", remedy: "Mental Health", image: "https://images.unsplash.com/photo-1590050752117-23a9d7fc2014?w=800", info: "Famous for 'Pancha Bhoota' rituals to stabilize the mind and body from depression.", benefit: "Strong Willpower" },
    { id: 16, name: "Nachiyar Koil", location: "Kumbakonam", remedy: "Kalasarpa Dosha", image: "https://images.unsplash.com/photo-1634704784915-aacf363b021f?w=800", info: "Home to the Kal-Garuda. Worshipped to overcome heavy astrological debt and legal issues.", benefit: "Legal Success" },
    { id: 17, name: "Kodumudi", location: "Erode", remedy: "Pithru Dosha", image: "https://images.unsplash.com/photo-1544085311-11a028a6a145?w=800", info: "Where the Trinity (Shiva, Vishnu, Brahma) exist together. Best for ancestral rituals.", benefit: "Blessings from Elders" },
    { id: 18, name: "Kanjanoor", location: "Thanjavur", remedy: "Sukra (Venus)", image: "https://images.unsplash.com/photo-1621259182978-f09e5f24d90d?w=800", info: "Specialized for Shukra dosha which affects beauty, love life, and material comfort.", benefit: "Luxurious Life" },
    { id: 19, name: "Marundeeswarar", location: "Chennai", remedy: "Physical Health", image: "https://images.unsplash.com/photo-1625032543167-93361110004e?w=800", info: "The God of Medicine. Removes health-related Doshas and grants longevity.", benefit: "Long Life" },
    { id: 20, name: "Thiruvidaimarudur", location: "Kumbakonam", remedy: "Brahmahathi Dosha", image: "https://images.unsplash.com/photo-1600100397608-f09074aa9401?w=800", info: "The ultimate temple to get rid of severe sins and mental hauntings.", benefit: "Ultimate Liberation" }
  ];

  return (
    <Box sx={{ bgcolor: '#0B0B0B', minHeight: '100vh', py: 8 }}>
      <Container>
        <Typography 
          variant="h3" 
          sx={{ color: '#D4AF37', fontWeight: 900, textAlign: 'center', mb: 2, textTransform: 'uppercase' }}
        >
          Dosha Parihara Centers
        </Typography>
        <Typography variant="body1" sx={{ color: '#B0B0B0', textAlign: 'center', mb: 6, maxWidth: '800px', mx: 'auto' }}>
          Explore the 20 sacred shrines of Tamil Nadu specifically dedicated to resolving astrological imbalances (Doshas) through ancient Vedic Pariharas.
        </Typography>

        <Grid container spacing={4}>
          {data.map((item) => (
            <Grid item xs={12} sm={6} lg={4} key={item.id} sx={{ display: 'flex' }}>
              <Card sx={{ 
                bgcolor: '#121212', 
                border: '1px solid #333', 
                borderRadius: '16px',
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                transition: '0.4s',
                '&:hover': { borderColor: '#D4AF37', transform: 'translateY(-10px)' }
              }}>
                <CardMedia component="img" height="200" image={item.image} alt={item.name} />
                
                <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', p: 3 }}>
                  <Stack direction="row" justifyContent="space-between" mb={2}>
                    <Chip 
                      icon={<AutoAwesomeIcon style={{ fontSize: '16px', color: 'black' }} />} 
                      label={item.remedy} 
                      sx={{ bgcolor: '#D4AF37', color: 'black', fontWeight: 900, fontSize: '12px' }} 
                    />
                    <Stack direction="row" spacing={0.5} sx={{ color: '#D4AF37' }}>
                       <LocationOnIcon fontSize="small" />
                       <Typography variant="caption" sx={{ fontWeight: 700 }}>{item.location}</Typography>
                    </Stack>
                  </Stack>

                  <Typography variant="h5" sx={{ color: 'white', fontWeight: 800, mb: 1.5 }}>
                    {item.name}
                  </Typography>

                  <Typography variant="body2" sx={{ color: '#B0B0B0', mb: 2, flexGrow: 1, lineHeight: 1.6 }}>
                    {item.info}
                  </Typography>

                  <Divider sx={{ bgcolor: '#333', my: 2 }} />

                  <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 3 }}>
                    <GavelIcon sx={{ color: '#D4AF37', fontSize: '18px' }} />
                    <Typography variant="body2" sx={{ color: 'white', fontWeight: 700 }}>
                      Benefit: <span style={{ color: '#D4AF37' }}>{item.benefit}</span>
                    </Typography>
                  </Stack>

                  <Button 
                    variant="contained" 
                    fullWidth 
                    sx={{ 
                      bgcolor: '#D4AF37', 
                      color: 'black', 
                      fontWeight: 900, 
                      py: 1.5,
                      borderRadius: '8px',
                      '&:hover': { bgcolor: '#F5C542' }
                    }}
                  >
                    Book Parihara Pooja
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

export default Dosham;