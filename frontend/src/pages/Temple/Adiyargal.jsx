import React, { useState } from 'react';
import { 
  Box, Container, Typography, Grid, Card, CardMedia, 
  CardContent, Button, Stack, Avatar, Divider, Fade 
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import ChurchIcon from '@mui/icons-material/Church';

const Adiyargal = () => {
  const [selectedSaint, setSelectedSaint] = useState(null);

  const data = [
    { 
      id: 1, 
      name: "Thirugnana Sambandar", 
      title: "The Child Saint", 
      temple: "Sirkazhi Sattainathar",
      image: "https://images.unsplash.com/photo-1544085311-11a028a6a145?w=800", 
      summary: "Received divine milk from Goddess Parvati at the age of three and sang the first Thevaram.",
      history: "At just three years old, while his father was bathing in the temple tank at Sirkazhi, Sambandar cried for milk. It is believed Goddess Parvati appeared and fed him 'Gnana-Paal' (Milk of Wisdom). When his father asked who fed him, the child pointed to the sky and sang his first hymn 'Thodudaiya Seviyan'. He traveled across Tamil Nadu on his father's shoulders, reviving Shaivism through thousands of musical verses."
    },
    { 
      id: 2, 
      name: "Appar (Thirunavukkarasar)", 
      title: "The King of Speech", 
      temple: "Tiruvadigai Veerattam",
      image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800", 
      summary: "Famous for his 'Uzhavarappani' (temple cleaning) and surviving trials by stone and fire.",
      history: "Originally a Jain monk, Appar returned to Shaivism after being cured of a stomach ailment by his sister’s prayers. The Pallava King, angry at his conversion, threw him into a lime kiln and later tied him to a stone and dropped him into the sea. Appar survived by chanting 'Namah Shivaya', and the stone floated like a boat. He spent his life cleaning temple premises with a small hoe, teaching that physical service is as great as prayer."
    },
    { 
      id: 3, 
      name: "Andal", 
      title: "The Goddess of Srivilliputhur", 
      temple: "Srivilliputhur Andal Temple",
      image: "https://images.unsplash.com/photo-1590050752117-23a9d7fc2014?w=800", 
      summary: "The only female Alwar who dreamt of marrying Lord Ranganatha himself.",
      history: "Andal was found as a baby under a Tulsi plant by Periyalwar. Growing up, she wore the flower garlands intended for the Lord to see if she was a fit bride for Him. Though her father was shocked, the Lord appeared in a dream saying He only wanted the garlands worn by Andal. She composed the 'Thiruppavai', a collection of 30 verses that are still sung every winter in Tamil Nadu to celebrate divine love."
    },
    { 
      id: 4, 
      name: "Sundarar", 
      title: "Friend of God", 
      temple: "Thiruvarur Tyagaraja",
      image: "https://images.unsplash.com/photo-1600100397608-f09074aa9401?w=800", 
      summary: "Known as 'Thambiran Thozhan'—Shiva himself walked as a messenger for him.",
      history: "Sundarar had a unique relationship with Shiva, treating Him as a close friend. When Sundarar fell in love with Paravai Nachiyar, Lord Shiva Himself walked through the streets of Thiruvarur as a messenger to arrange their marriage. His life demonstrates that God is not just a master to be feared, but a companion who participates in the joys and sorrows of a devotee's daily life."
    },
    { 
      id: 5, 
      name: "Karaikkal Ammaiyar", 
      title: "The Mother", 
      temple: "Thiruvalangadu",
      image: "https://images.unsplash.com/photo-1621259072059-e1f409549f50?w=800", 
      summary: "Renounced her beauty to become a 'ghoul' to serve Lord Shiva eternally.",
      history: "Born as Punitavati, she was exceptionally beautiful. After a miracle involving divine mangoes, she realized her life belonged only to Shiva. She prayed to lose her beauty so she could serve without distraction. Her wish was granted, and she turned into a skeletal figure. She walked to Mount Kailash on her hands, not wanting to step on the holy ground with her feet. Shiva welcomed her by calling her 'Amma' (Mother)."
    },
    { 
      id: 6, 
      name: "Kannappa Nayanar", 
      title: "The Hunter Saint", 
      temple: "Sri Kalahasti",
      image: "https://images.unsplash.com/photo-1512100356956-c1b47f4b8a21?w=800", 
      summary: "A simple hunter who offered his own eyes to stop the Shiva Lingam from bleeding.",
      history: "Thinnan was a hunter who knew nothing of Vedic rituals. He offered meat and water from his mouth to a Lingam in the forest. To test his love, Shiva made the Lingam’s eyes bleed. Thinnan immediately plucked out his own eye with an arrow to replace it. When the second eye bled, he placed his foot on the spot to mark it and was about to pluck his second eye when Shiva stopped him, granting him eternal liberation."
    },
    { 
      id: 7, 
      name: "Manikkavasagar", 
      title: "He whose words are Rubies", 
      temple: "Chidambaram Natarajar",
      image: "https://images.unsplash.com/photo-1621873264510-d009e5306ec4?w=800", 
      summary: "A powerful Prime Minister who gave up everything to write the Thiruvasagam.",
      history: "Once a high-ranking minister, he spent the king's money to build a temple for Shiva. When imprisoned, he was saved by Shiva’s miracles. He spent his later years in Chidambaram. When asked for the meaning of his poetry, he pointed to the statue of Lord Nataraja and disappeared into a flame. His work, 'Thiruvasagam', is considered the most emotional and soul-stirring literature in the Tamil language."
    },
    { 
      id: 8, 
      name: "Nammalwar", 
      title: "The Soul of Alwars", 
      temple: "Alwarthirunagari",
      image: "https://images.unsplash.com/photo-1632766329480-49635b7501a4?w=800", 
      summary: "Sat in a hollow of a tamarind tree in silence for 16 years until enlightenment.",
      history: "Born in a state of deep meditation, Nammalwar never spoke or ate for sixteen years. He sat under a tamarind tree until another saint, Madhurakavi Alwar, threw a stone and asked a philosophical question. Nammalwar spoke for the first time, delivering the essence of the four Vedas in four Tamil works (Tiruvaymoli). He is considered the 'Soul' of the twelve Alwars."
    },
    { 
      id: 9, 
      name: "Thirumular", 
      title: "The Great Mystic", 
      temple: "Thiruvavaduthurai",
      image: "https://images.unsplash.com/photo-1630139191632-68937076e09e?w=800", 
      summary: "A Yogi who lived for 3000 years, writing one verse of the Thirumandiram every year.",
      history: "Thirumular was a Himalayan yogi who entered the body of a dead cowherd named Mulan out of compassion for the crying cows. He stayed in that body and meditated under a Peepal tree. Every year, he would come out of samadhi and write one verse (song). Over 3,000 years, he completed the 'Thirumandiram', which explains the secrets of Yoga, Tantra, and the unity of God and Mankind ('Anbe Sivam')."
    },
    { 
      id: 10, 
      name: "Periyalwar", 
      title: "The Elder Alwar", 
      temple: "Srivilliputhur",
      image: "https://images.unsplash.com/photo-1624716443425-455ef1131100?w=800", 
      summary: "Sang 'Pallandu' to protect God Himself from the evil eye during a procession.",
      history: "He was a simple priest who won a great debate in the Pandyan court through divine grace. During a victory procession, he saw the Lord in the sky. Instead of asking for blessings for himself, he feared for the Lord's safety in the cruel world and sang 'Tirupallandu' (Long live the Lord). This 'reverse-devotion' where the devotee protects God is considered the highest form of love."
    },
    { 
      id: 11, 
      name: "Avvaiyar", 
      title: "The Wise Grandmother", 
      temple: "Many Murugan Temples",
      image: "https://images.unsplash.com/photo-1621259182978-f09e5f24d90d?w=800", 
      summary: "The legendary poetess who taught ethics through simple Tamil rhymes.",
      history: "Avvaiyar was a contemporary of many kings and saints. She chose to be an old woman so she could travel freely and teach wisdom. Her famous interaction with Lord Murugan (the 'Roasted or Unroasted Fruit' story) taught her that learning is never complete. Her works like 'Aathichoodi' remain the first books Tamil children read to learn ethics and the alphabet simultaneously."
    },
    { 
      id: 12, 
      name: "Sekkhizhar", 
      title: "The Historian of Saints", 
      temple: "Kunrathur",
      image: "https://images.unsplash.com/photo-1625032543167-93361110004e?w=800", 
      summary: "Compiled the Periya Puranam, documenting the lives of all 63 Nayanmars.",
      history: "A minister in the Chola court, Sekkhizhar was commissioned to write the history of Shaivite saints. He visited every temple associated with them to verify facts. He wrote the 'Periya Puranam' in the Chidambaram temple. It was so highly regarded that the Chola King himself sat on the floor while Sekkhizhar read the epic from the throne, symbolizing that history and devotion are higher than royalty."
    },
    { 
      id: 13, 
      name: "Arunagirinathar", 
      title: "Master of Rhythm", 
      temple: "Tiruvannamalai",
      image: "https://images.unsplash.com/photo-1616422323292-6f296d888365?w=800", 
      summary: "Transformed from a sinner to a saint after Lord Murugan saved his life.",
      history: "Living a life of debauchery, Arunagirinathar felt so much guilt that he jumped from the Vallala Gopuram of Tiruvannamalai to end his life. Lord Murugan caught him in His arms, touched his tongue with a spear, and gave him the first line for his songs. He went on to write the 'Thiruppugazh', a collection of 16,000 songs famous for their complex rhythms and divine music."
    },
    { 
      id: 14, 
      name: "Kulasekhara Alwar", 
      title: "The King Saint", 
      temple: "Mannarkoil / Tirupati",
      image: "https://images.unsplash.com/photo-1634704784915-aacf363b021f?w=800", 
      summary: "A Chera King who wished to be a stone step in the temple to be trodden by devotees.",
      history: "As a king, he loved the Ramayana so much that he once ordered his army to march when he heard Sita was captured in the story. Realizing his worldly duties were a distraction, he abdicated his throne. In his famous prayer, he asked to be born as a fish in the temple pond or a step at the entrance of the Tirumala temple so he could always be near the feet of the Lord and His devotees."
    },
    { 
      id: 15, 
      name: "Pattinathar", 
      title: "The Saint of Renunciation", 
      temple: "Thiruvottiyur",
      image: "https://images.unsplash.com/photo-1544085311-11a028a6a145?w=800", 
      summary: "Left his massive wealth after his son gave him a small note about a broken needle.",
      history: "A multi-millionaire merchant, he received a small box from his son. Inside was a broken needle and a note: 'Not even a broken needle will follow you in your final journey.' This sparked instant realization. He walked out of his mansion, wearing only a loincloth. His songs are deeply philosophical, focusing on the temporary nature of the human body and the ultimate truth of death and divinity."
    }
  ];

  // --- VIEW 1: BIOGRAPHY / HISTORY VIEW ---
  if (selectedSaint) {
    return (
      <Fade in={true} timeout={500}>
        <Box sx={{ bgcolor: '#0B0B0B', minHeight: '100vh', py: { xs: 4, md: 8 }, color: 'white' }}>
          <Container maxWidth="md">
            <Button 
              startIcon={<ArrowBackIcon />} 
              onClick={() => setSelectedSaint(null)}
              sx={{ color: '#D4AF37', mb: 4, fontWeight: 900 }}
            >
              Back to Adiyargal List
            </Button>
            
            <CardMedia 
              component="img" 
              image={selectedSaint.image} 
              sx={{ borderRadius: '30px', height: { xs: '300px', md: '500px' }, mb: 4, border: '1px solid #333' }} 
            />
            
            <Stack direction="row" spacing={2} alignItems="center" mb={2}>
              <Avatar sx={{ bgcolor: '#D4AF37', color: 'black', width: 60, height: 60, fontSize: '1.5rem', fontWeight: 900 }}>
                {selectedSaint.name[0]}
              </Avatar>
              <Box>
                <Typography variant="h2" sx={{ color: '#D4AF37', fontWeight: 900, fontSize: { xs: '2.5rem', md: '3.5rem' } }}>
                  {selectedSaint.name}
                </Typography>
                <Typography variant="h6" sx={{ color: '#B0B0B0', fontWeight: 600 }}>{selectedSaint.title}</Typography>
              </Box>
            </Stack>
            
            <Stack direction="row" spacing={1} sx={{ color: '#D4AF37', mb: 4 }}>
              <ChurchIcon fontSize="small" />
              <Typography variant="body1" sx={{ fontWeight: 700 }}>Associated with: {selectedSaint.temple}</Typography>
            </Stack>

            <Divider sx={{ bgcolor: '#333', mb: 5 }} />

            <Typography variant="h4" sx={{ mb: 3, display: 'flex', alignItems: 'center', gap: 2, fontWeight: 800 }}>
              <MenuBookIcon sx={{ color: '#D4AF37' }} /> Life & Miracles
            </Typography>
            
            <Typography variant="body1" sx={{ lineHeight: 2, fontSize: '1.2rem', color: '#E0E0E0', textAlign: 'justify', whiteSpace: 'pre-line' }}>
              {selectedSaint.history}
            </Typography>

            <Button 
              variant="contained" 
              startIcon={<AutoAwesomeIcon />}
              sx={{ mt: 6, bgcolor: '#D4AF37', color: 'black', fontWeight: 900, px: 6, py: 2, borderRadius: '15px' }}
            >
              Read Their Hymns
            </Button>
          </Container>
        </Box>
      </Fade>
    );
  }

  // --- VIEW 2: GRID LIST VIEW ---
  return (
    <Box sx={{ bgcolor: '#0B0B0B', minHeight: '100vh', py: 8 }}>
      <Container>
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h2" sx={{ color: '#D4AF37', fontWeight: 900, mb: 2, letterSpacing: '3px' }}>
            THE ADIYARGAL
          </Typography>
          <Typography variant="h6" sx={{ color: '#B0B0B0', fontWeight: 300, maxWidth: '700px', mx: 'auto' }}>
            Explore the lives of 15 divine saints whose devotion turned stones into singing monuments. Click a card to read their full story.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {data.map((item) => (
            <Grid item xs={12} sm={6} lg={4} key={item.id} sx={{ display: 'flex' }}>
              <Card 
                onClick={() => setSelectedSaint(item)}
                sx={{ 
                  bgcolor: '#1A1A1A', 
                  borderRadius: '24px', 
                  border: '1px solid #333',
                  display: 'flex',
                  flexDirection: 'column',
                  width: '100%',
                  cursor: 'pointer',
                  transition: '0.4s ease-in-out',
                  '&:hover': { transform: 'translateY(-15px)', borderColor: '#D4AF37', boxShadow: '0 10px 30px rgba(212,175,55,0.2)' }
                }}
              >
                <CardMedia component="img" height="230" image={item.image} alt={item.name} />
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography variant="h5" sx={{ color: 'white', fontWeight: 800, mb: 1 }}>{item.name}</Typography>
                  <Typography variant="caption" sx={{ color: '#D4AF37', fontWeight: 900, textTransform: 'uppercase', mb: 2, display: 'block' }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#B0B0B0', mb: 3, flexGrow: 1, minHeight: '60px' }}>
                    {item.summary}
                  </Typography>
                  
                  <Divider sx={{ bgcolor: '#333', mb: 2 }} />
                  
                  <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Typography variant="caption" sx={{ color: '#888' }}>History View</Typography>
                    <Button size="small" sx={{ color: '#D4AF37', fontWeight: 800 }}>Read More</Button>
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

export default Adiyargal;