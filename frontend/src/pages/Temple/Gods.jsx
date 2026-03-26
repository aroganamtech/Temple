import React, { useState } from 'react';
import { 
  Box, Container, Typography, Grid, CardMedia, 
  CardContent, Button, Stack, Divider,
  Dialog, DialogContent, IconButton, Slide
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import CloseIcon from '@mui/icons-material/Close';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import MenuBookIcon from '@mui/icons-material/MenuBook';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Gods = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const handleOpen = (temple) => {
    setSelected(temple);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelected(null);
  };

  const data = [
    { 
        id: 1, 
        name: "Meenakshi Amman", 
        location: "Madurai", 
        image: "https://www.poojn.in/wp-content/uploads/2025/03/Meenakshi-Amman-Temple-FAQs-Essential-Visitor-Information.jpeg.jpg", 
        info: "The spiritual heart of Madurai, dedicated to Goddess Meenakshi.", 
        history: "A masterpiece of Dravidian architecture, this temple features 14 majestic gopurams. Legend says the city was named 'Madurai' from the nectar (Madhu) that fell from Lord Shiva's hair. The 'Hall of Thousand Pillars' contains 985 uniquely carved pillars, and the temple serves as the geographical center of the ancient lotus-shaped city. The temple complex is a city within a city, featuring the sacred Golden Lotus tank where Indra is said to have bathed. The sculptures depict the 64 miracles of Lord Shiva, known as 'Thiruvilaiyadal.' The daily night ceremony, where the deity is carried in a palanquin, is a sensory experience of music and ritual that has continued for centuries." 
    },
    { 
        id: 2, 
        name: "Brihadeeswarar", 
        location: "Thanjavur", 
        image: "https://static.wixstatic.com/media/35364f_5b5ce4ffb5684f46922e67664a63fe93~mv2.jpg/v1/fill/w_980,h_653,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/35364f_5b5ce4ffb5684f46922e67664a63fe93~mv2.jpg", 
        info: "The 'Big Temple' built by Raja Raja Chola I in 1010 AD.", 
        history: "A UNESCO World Heritage site made entirely of granite. The 80-ton 'Kumbam' atop the tower was raised using a 6km long ramp. It is architectural genius that the main tower's shadow never falls on the ground at noon, and the structure was built without any binding mortar, relying solely on interlocking stones. The temple walls are adorned with Chola-era frescoes and inscriptions that detail the massive economy managed by the temple 1,000 years ago. It houses one of the largest monolith Nandi statues in India. The vimana (tower) is 216 feet high, making it one of the tallest of its kind in the world, standing as a testament to the supreme power of the Chola Empire." 
    },
    { 
        id: 3, 
        name: "Srirangam Temple", 
        location: "Trichy", 
        image: "https://c9admin.cottage9.com/uploads/2329/Ranganathaswamy-Temple-Srirangam.jpg", 
        info: "The foremost of the 108 Divya Desams, dedicated to Lord Ranganatha.", 
        history: "Spanning 156 acres, it is the world's largest functioning Hindu temple. It is enclosed by 7 concentric walls (Prakarams) and 21 gopurams. The white-washed Rajagopuram is the second tallest in Asia. During the 14th-century invasions, the main deity was hidden behind a temporary wall for decades to preserve its sanctity. The temple follows the Vaikhanasa Agama tradition and is the only temple where the deity is worshipped in a reclining posture on the serpent Adisesha. The complex includes many beautiful shrines and a museum of ancient artifacts. The Vaikunta Ekadasi festival attracts over a million devotees who pass through the 'Gate of Heaven' (Paramapada Vasal)." 
    },
    { 
        id: 4, 
        name: "Annamalaiyar", 
        location: "Tiruvannamalai", 
        image: "https://m.media-amazon.com/images/I/61kyS8avrNL._AC_UF894,1000_QL80_.jpg", 
        info: "Representing the element of Fire among the Pancha Bhoota Stalas.", 
        history: "Located at the foot of the sacred Arunachala hill. Legend says Lord Shiva appeared here as a column of fire to settle a dispute between Brahma and Vishnu. Every year during Karthigai Deepam, a giant lamp is lit on the hilltop, symbolizing the light of wisdom over the darkness of ego. The hill itself is considered a Shiva Lingam. Devotees perform 'Girivalam' (circumambulation) of the 14km path around the hill, especially on full moon nights. The temple has four massive gateway towers, with the Eastern 'Rajagopuram' reaching 217 feet. It has been a spiritual sanctuary for many saints, including Ramana Maharshi." 
    },
    { 
        id: 5, 
        name: "Ramanathaswamy", 
        location: "Rameswaram", 
        image: "https://stampedmoments.com/wp-content/uploads/2024/12/ramanathaswamy-temple-rameswaram.jpg", 
        info: "A Jyotirlinga site where Lord Rama is said to have prayed.", 
        history: "Famous for its magnificent outer corridor, the longest in the world, featuring 1,212 massive pillars. Pilgrims traditionally bathe in the 22 sacred wells (Theerthams) within the temple complex before worshipping the Lingam, which Sita Devi is said to have crafted from sand. The temple is one of the four Char Dham pilgrimage sites. Its architecture blend styles from the Pandya, Jaffna, and Vijayanagara periods. The corridors are painted with vivid murals depicting the Ramayana. Legend holds that Hanuman brought a Lingam from Kashi, but since Rama had already begun the puja with the sand Lingam, the Hanuman Lingam is traditionally worshipped first." 
    },
    { 
        id: 6, 
        name: "Kapaleeshwarar", 
        location: "Chennai", 
        image: "https://images.jdmagicbox.com/v2/comp/kapaleeswarar_koil/d6/044pxx44.xx44.230304205820.v6d6/catalogue/kapaleeswarar-koil-mylapore-chennai-temples-gxagomie8p.jpg", 
        info: "The cultural icon of Mylapore, dedicated to Lord Shiva.", 
        history: "The name originates from 'Kapalam' (skull) and 'Eshwarar' (Lord). Legend says Goddess Parvati worshipped Shiva here in the form of a peahen (Mayil), giving the area the name Mylapore. The temple is a vibrant hub for the annual Panguni Peruvizha festival and the Margazhi music season. The current structure was rebuilt by the Vijayanagara kings in the 16th century after the Portuguese destroyed the original seaside temple. The tank is one of the most picturesque in the state, surrounded by colorful houses. The gopuram is a classic example of Dravidian art, featuring hundreds of miniature figures from Hindu mythology, meticulously painted every 12 years during the Kumbhabhishekam." 
    },
    { 
        id: 7, 
        name: "Palani Murugan", 
        location: "Palani", 
        image: "https://www.astroved.com/us/wp-content/uploads/2025/01/palani-murugan-fdsk.jpg", 
        info: "One of the Six Abodes of Murugan, established by Sage Agastya.", 
        history: "The main idol is made of 'Navapashanam' (nine poisonous minerals) formulated by Siddha Bogar to create a permanent medicinal benefit for devotees. Lord Murugan is depicted here as 'Dhandayudhapani,' a renunciant who chose the hill after a dispute over a divine fruit. Devotees often carry 'Kavadi' and walk hundreds of miles barefoot to reach the shrine. The temple is situated on the Sivagiri hill and reached by climbing 689 steps or via a winch/cable car. The temple is world-famous for its 'Panchamirtham' prasadam, a sweet mixture of five ingredients. It is believed that milk or sandalwood paste poured over the idol gains medicinal properties, curing various ailments." 
    },
    { 
        id: 8, 
        name: "Chidambaram Nataraja", 
        location: "Chidambaram", 
        image: "https://magikindia.com/wp-content/uploads/2026/08/ch.jpg", 
        info: "Representing Ether (Space) and the Cosmic Dance of Shiva.", 
        history: "This is one of the few temples where Shiva is worshipped in human-form as a dancer (Nataraja) rather than a Lingam. The 'Chidambara Rahasyam' (Secret) is a curtained space representing the void, teaching that God is found in the empty space of the pure heart. The temple architecture is coded with spiritual science: the roof of the sanctum is made of 21,600 gold tiles, representing the number of breaths a human takes in a day. The 72,000 nails holding them represent the nadis in the body. The temple is managed by a private community of priests called Dikshitars. It is the site of the annual Natyanjali dance festival where dancers from across the globe perform for the Cosmic Dancer." 
    },
    { 
        id: 9, 
        name: "Kanchipuram Kamakshi", 
        location: "Kanchipuram", 
        image: "https://cdn.shopify.com/s/files/1/0525/5285/9819/files/81_1024x1024.jpg?v=1723119532", 
        info: "The supreme Shakti Peetha where Goddess Kamakshi resides.", 
        history: "Unlike other cities where temples have separate shrines for the Goddess, in Kanchipuram, Kamakshi is the sole presiding female deity. Adi Shankara installed the 'Sri Chakra' here to calm the fiery form of the Goddess into her present benevolent form. The temple's golden vimana is a sight to behold. It is a major center for the Sri Vidya tradition of worship. The deity is seated in the 'Padmasana' posture, holding a sugarcane bow and five flower arrows, representing the mind and the five senses. Kanchipuram is also known as the 'City of Thousand Temples' and 'Silk City,' with the Kamakshi temple serving as its spiritual foundation." 
    },
    { 
        id: 10, 
        name: "Tiruchendur Murugan", 
        location: "Tiruchendur", 
        image: "https://c9admin.cottage9.com/uploads/5017/thiruchendur-murugan-temple-a-historical-overview.jpg", 
        info: "The only seaside abode of Lord Murugan's six houses.", 
        history: "This temple commemorates 'Soorasamharam,' where Lord Murugan defeated the demon Surapadman. It is geographically unique as it sits on the shore of the Bay of Bengal. In 2004, while the Tsunami devastated the coast, the sea famously receded from this temple, leaving it untouched. The temple has a majestic 9-tiered Rajagopuram facing the sea, built in the 17th century. Unlike other temples where the entrance is via the eastern gate, here the main entrance is on the south. The temple's 'Nazhi Kinaru' is a 14-sq-ft well containing fresh water despite being situated only a few meters from the salty ocean. The Soorasamharam festival here is a massive spectacle involving thousands of devotees on the beach." 
    },
    { 
        id: 11, 
        name: "Ekambareswarar", 
        location: "Kanchipuram", 
        image: "https://inditales.com/wp-content/uploads/2018/11/ekambareswarar-temple-car.jpg", 
        info: "Representing the element Earth (Prithvi) in the Pancha Bhoota Stalas.", 
        history: "The temple is famous for its 3,500-year-old Mango tree (Sthala Vriksham), which bears fruits of four different tastes, representing the four Vedas. Legend says Goddess Parvati worshipped a Shiva Lingam made of sand under this tree to gain his grace. When the nearby river flooded, she embraced the Lingam to protect it, and the marks of her bangles are still seen on the idol. The temple covers 25 acres and has the tallest Rajagopuram in Kanchipuram (194 feet). The 'Aayiram Kaal Mandapam' or the 1,000-pillared hall was built by the Vijayanagara kings. The inner courtyard features 108 Rudraksha-shaped Lingams, a sight unique to this ancient Shiva temple." 
    },
    { 
        id: 12, 
        name: "Suchindram Temple", 
        location: "Kanyakumari", 
        image: "https://kanyakumaritourism.in/images/places-to-visit/headers/thanumalayan-suchindram-anjaneyar-temple-kanyakumari-tourism-entry-fee-timings-holidays-reviews-header.jpg", 
        info: "A rare temple dedicated to Sthanumalaya (Trinity).", 
        history: "The name 'Suchi' means purity; legend says Lord Indra was purified here after a curse. It features 'Musical Pillars' carved out of single granite blocks that emit different musical notes when struck. The temple is unique as the deity 'Sthanumalaya' represents Shiva (Sthanu), Vishnu (Mal), and Brahma (Ayan). The 134-foot gopuram is covered with detailed depictions of Puranic scenes. The temple also houses a massive 18-foot Hanuman statue, which was hidden underground for years to protect it from invaders and rediscovered in the 1930s. The 'Vattapalli Madam' within the temple is a fine example of Kerala-style architecture, reflecting the temple's location at the border of Tamil Nadu and Kerala." 
    },
    { 
        id: 13, 
        name: "Nellaiappar Temple", 
        location: "Tirunelveli", 
        image: "https://www.transindiatravels.com/wp-content/uploads/nellaiappar-temple-1.jpg", 
        info: "One of the five Copper Dance Halls of Lord Shiva.", 
        history: "Dating back to the 7th century, it is famous for the 'Thamira Sabha' (Copper Hall) featuring intricate wood carvings depicting the cosmic dance of Shiva. The temple also features 'Golden Lily Tank' and musical pillars that demonstrate the high acoustic engineering of the ancient Pandyas. The temple is a twin temple dedicated to Shiva (Nellaiappar) and Parvati (Kanthimathi Amman), connected by a beautiful corridor built in the 17th century. Legend says a devotee's paddy (Nel) was protected from rain by a fence (Veli) of fire provided by Shiva, giving the city the name Tirunelveli. The 'Ani Varoo' festival and the grand temple car are central to the city's cultural life." 
    },
    { 
        id: 14, 
        name: "Vellore Golden Temple", 
        location: "Vellore", 
        image: "https://www.sripuram.org/static/sripuram-org/golden-temple.webp", 
        info: "The Sripuram Mahalakshmi Temple, coated in 1,500kg of gold.", 
        history: "Surrounded by a star-shaped path that stretches for 1.8km, this modern marvel was built using pure gold foil—more gold than the Golden Temple of Amritsar. Every single detail was handcrafted by artisans. The path is designed to make devotees read spiritual messages before reaching the central shrine of Goddess Lakshmi. The temple is located in Sripuram, a spiritual park at the foot of green hills. It was inaugurated in 2007 by the spiritual leader Narayani Amma. The gold coating is applied in 9 to 15 layers of gold foil, manually placed by hundreds of goldsmiths. The temple is illuminated at night, creating a celestial glow that can be seen from several kilometers away, symbolizing prosperity and divine light." 
    },
    { 
        id: 15, 
        name: "Srivilliputhur Andal", 
        location: "Srivilliputhur", 
        image: "https://imagesvs.oneindia.com/img/2025/01/srivilliputhur-andal-temple-1736489102.jpg", 
        info: "The birthplace of Goddess Andal, the poet-saint.", 
        history: "The 11-tiered, 192-foot tall Rajagopuram is so iconic that it was adopted as the official emblem of the Government of Tamil Nadu. The temple is famous for its unique 'Palkova' (milk sweet) and the annual car festival. Andal is one of the 12 Alvars (Vaishnavite saints) and the only woman among them. Legend says she was found as a baby in the temple's tulsi garden. Her poems, 'Thiruppavai' and 'Nachiar Tirumozhi,' are sung in every Vishnu temple during the month of Margazhi. The temple features a 'Vatapatrasayi' shrine (Vishnu reclining on a leaf) and the shrine of Andal. The floral garlands worn by Andal are sent to the Tirumala Venkateswara Temple during the Brahmotsavam festival, a tradition continuing for centuries." 
    },
    { 
        id: 16, 
        name: "Sarangapani Temple", 
        location: "Kumbakonam", 
        image: "https://upload.wikimedia.org/wikipedia/commons/1/10/Gopuras_in_Kumbakonam_-_India.JPG", 
        info: "The largest Vishnu temple in Kumbakonam, shaped like a chariot.", 
        history: "Dedicated to Lord Sarangapani, the temple is designed as a chariot pulled by elephants and horses. It is considered one of the three most important Vishnu temples in South India. The gopuram is the tallest in Kumbakonam, visible for miles across the Cauvery delta. The temple is famous for its 'Utharayana' and 'Dakshinayana' gates, which are opened specifically during the winter and summer solstices. Legend says Vishnu descended to earth here in a chariot to marry Komalavalli. The temple carvings include 108 dance poses of Bharatanatyam. It is one of the 'Pancharanga Kshetrams' situated along the banks of the Cauvery, and the Mahamaham tank nearby is the site of a massive festival every 12 years." 
    },
    { 
        id: 17, 
        name: "Jambukeswarar", 
        location: "Trichy", 
        image: "https://sriramtravel.com/wp-content/uploads/2023/01/jambukeswarar-temple-trichy-piller.webp", 
        info: "Representing the element Water (Appu).", 
        history: "In this temple, an underground natural spring constantly flows through the sanctum sanctorum, keeping the deity submerged in water. Legend says Goddess Parvati made a Lingam out of water from the Cauvery river under a Jambu tree to perform penance. Shiva was so pleased that he taught her the Shiva Jnana. Because the Goddess (Akhilandeswari) learned from Shiva here, they are seated in an 'Upadesa' posture, and the temple doesn't perform a wedding ceremony for them. The temple has five enclosures with high walls and massive gopurams. It is an engineering marvel that the water level in the sanctum remains constant regardless of the season, showcasing the ancient hydraulic skills of the Chola builders." 
    },
    { 
        id: 18, 
        name: "Nagaraja Temple", 
        location: "Nagercoil", 
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/5b/d4/39/nagercoil-nagaraja-temple.jpg?w=1000&h=1000&s=1", 
        info: "Ancient temple dedicated to the Serpent King.", 
        history: "Unique for its thatched roof over the main shrine; despite several attempts to build a stone roof, the tradition of a simple thatched covering is maintained. The temple mud is considered sacred and is said to possess healing properties for skin and health issues. The presiding deity is Nagaraja (King of Snakes), and the temple is a major center for serpent worship. The surrounding pillars feature carvings of Jaina Tirthankaras, indicating the temple's pluralistic history. The main festival is in the Tamil month of Thai (January-February), where thousands of women offer milk and turmeric to the deities. The town of Nagercoil (Temple of the Snake) was named after this very shrine, which remains a peaceful, garden-like sanctuary." 
    },
    { 
        id: 19, 
        name: "Marudhamalai Murugan", 
        location: "Coimbatore", 
        image: "https://live.staticflickr.com/65535/50918639626_51ef494ee0_b.jpg", 
        info: "A hilltop abode of Lord Murugan in the Western Ghats.", 
        history: "Located at an altitude of 600 feet, the hill is famous for its abundance of medicinal herbs (Sanjeevini). It is said that Siddha Pambatti used the caves here for meditation and attained enlightenment. The hill offers a panoramic view of Coimbatore and is known for its cool, healing breeze. The temple architecture is modern but follows traditional Agama rules. Legend says a thirsty Siddha prayed for water, and Murugan struck the ground with his 'Vel' (spear), creating the Marudha Theertham spring. The temple is especially popular during the Thai Poosam festival. Devotees often visit the 'Pambatti Siddhar Cave' nearby, where a natural rock formation resembles a cobra, dedicated to the saint who protected the hill." 
    },
    { 
        id: 20, 
        name: "Samayapuram Mariamman", 
        location: "Trichy", 
        image: "https://img1.wsimg.com/isteam/ip/b214c617-ba96-4101-81a7-4e398ad4aa27/DSCN0452.jpg/:/rs=w:1280", 
        info: "The most powerful folk deity temple for healing.", 
        history: "Goddess Mariamman is considered the 'Mother' who heals all ailments, especially smallpox and measles. Every year, millions attend the 'Poo Choridhal' festival, where the Goddess is showered with flowers. Devotees also observe a 28-day fast during the 'Pachai Pattini Vridham' to seek her blessings, during which only liquid food is consumed. The temple was built by the Vijayanagara kings and later expanded by the Pandyas. The deity is made of sand and clay, and unlike other temples, no 'Abhishekam' (water pouring) is performed on the main idol; instead, it is performed on a smaller metal deity. It is the second wealthiest temple in Tamil Nadu, serving as a pillar of faith for rural and urban devotees alike." 
    }
  ];

  const styles = {
    bg: '#FDF5E6',
    primary: '#8B6508',
    secondary: '#A0522D',
    flipCard: {
      perspective: '1000px',
      '&:hover .flip-inner': { transform: 'rotateY(180deg)' },
      height: { xs: '420px', md: '460px' }, width: '100%', cursor: 'pointer', mb: 4
    },
    flipInner: {
      position: 'relative', width: '100%', height: '100%',
      transition: 'transform 0.8s', transformStyle: 'preserve-3d'
    },
    cardFace: {
      position: 'absolute', width: '100%', height: '100%',
      backfaceVisibility: 'hidden', borderRadius: '24px',
      overflow: 'hidden', display: 'flex', flexDirection: 'column',
      bgcolor: '#FFF', border: '2px solid #E0D7C6',
      boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
    }
  };

  return (
    <Box sx={{ bgcolor: styles.bg, minHeight: '100vh', py: { xs: 4, md: 8 } }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: { xs: 5, md: 8 } }}>
          <Typography variant="h2" sx={{ 
            color: styles.primary, 
            fontWeight: 900, 
            fontFamily: "'Playfair Display', serif", 
            fontSize: { xs: '2.5rem', md: '3.75rem' },
            mb: 2 
          }}>
            The 20 Sacred Temples
          </Typography>
          <Box sx={{ width: '80px', height: '4px', bgcolor: styles.secondary, mx: 'auto', mb: 3 }} />
          <Typography variant="h6" sx={{ 
            color: '#555', 
            maxWidth: '800px', 
            mx: 'auto', 
            lineHeight: 1.6,
            px: 2,
            fontSize: { xs: '1rem', md: '1.25rem' }
          }}>
            Explore the deep history, legends, and divine architecture of Tamil Nadu's heritage. <br />
          </Typography>
        </Box>

        {/* Grid of 20 Cards */}
        <Grid container spacing={3}>
          {data.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <Box sx={styles.flipCard}>
                <Box className="flip-inner" sx={styles.flipInner}>
                  
                  {/* FRONT SIDE */}
                  <Box sx={styles.cardFace}>
                    <CardMedia component="img" sx={{ height: { xs: 180, md: 220 } }} image={item.image} alt={item.name} />
                    <CardContent sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                      <Typography variant="h6" sx={{ color: styles.secondary, fontWeight: 800 }}>{item.name}</Typography>
                      <Stack direction="row" spacing={1} sx={{ color: '#888', mb: 2 }}>
                        <LocationOnIcon fontSize="small" />
                        <Typography variant="caption" sx={{ fontWeight: 600 }}>{item.location}, TN</Typography>
                      </Stack>
                      <Typography variant="body2" sx={{ color: '#555', flexGrow: 1, fontStyle: 'italic' }}>{item.info}</Typography>
                      <Button 
                        fullWidth variant="outlined" 
                        onClick={(e) => { e.stopPropagation(); handleOpen(item); }}
                        sx={{ mt: 2, color: styles.primary, borderColor: styles.primary, fontWeight: 900, borderRadius: '10px' }}
                      >
                        Read More
                      </Button>
                    </CardContent>
                  </Box>

                  {/* BACK SIDE */}
                  <Box sx={{ ...styles.cardFace, transform: 'rotateY(180deg)', bgcolor: styles.primary, color: 'white', p: 4, textAlign: 'center', justifyContent: 'center' }}>
                    <HistoryEduIcon sx={{ fontSize: 50, mb: 2, color: styles.bg }} />
                    <Typography variant="h5" sx={{ mb: 2, fontWeight: 800, fontFamily: "'Playfair Display'" }}>Temple Legend</Typography>
                    <Typography variant="body2" sx={{ fontStyle: 'italic', mb: 3, lineHeight: 1.6, fontSize: '0.9rem' }}>
                      {item.history.substring(0, 140)}...
                    </Typography>
                    <Button 
                      variant="contained" 
                      onClick={(e) => { e.stopPropagation(); handleOpen(item); }}
                      sx={{ bgcolor: styles.bg, color: styles.primary, fontWeight: 900, px: 4 }}
                    >
                      Full Details
                    </Button>
                  </Box>

                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* FULL DETAIL MODAL - Optimized for Responsiveness */}
        <Dialog 
          open={open} 
          onClose={handleClose} 
          TransitionComponent={Transition}
          maxWidth="md" 
          fullWidth
          scroll="paper"
          PaperProps={{ 
            sx: { 
              borderRadius: { xs: '16px', md: '24px' }, 
              bgcolor: styles.bg,
              margin: { xs: 2, md: 4 }
            } 
          }}
        >
          {selected && (
            <DialogContent sx={{ p: 0, position: 'relative' }}>
              <IconButton 
                onClick={handleClose} 
                sx={{ 
                  position: 'absolute', 
                  right: 16, 
                  top: 16, 
                  bgcolor: 'rgba(255,255,255,0.8)', 
                  zIndex: 10,
                  '&:hover': { bgcolor: 'white' }
                }}
              >
                <CloseIcon />
              </IconButton>
              
              <CardMedia 
                component="img" 
                sx={{ height: { xs: 250, md: 400 } }} 
                image={selected.image} 
              />

              <Box sx={{ p: { xs: 3, md: 5 } }}>
                <Typography variant="h3" sx={{ 
                  color: styles.primary, 
                  fontWeight: 900, 
                  fontFamily: "'Playfair Display', serif", 
                  mb: 1,
                  fontSize: { xs: '1.8rem', md: '3rem' }
                }}>
                  {selected.name}
                </Typography>
                
                <Typography variant="h6" sx={{ color: styles.secondary, mb: 3, display: 'flex', alignItems: 'center', gap: 1 }}>
                  <LocationOnIcon fontSize="small" /> {selected.location}, Tamil Nadu
                </Typography>
                
                <Divider sx={{ mb: 4 }} />
                
                <Stack direction="row" spacing={1} sx={{ mb: 2, color: styles.primary }}>
                   <MenuBookIcon />
                   <Typography variant="h6" sx={{ fontWeight: 800 }}>Complete History & Legend</Typography>
                </Stack>

                <Typography variant="body1" sx={{ 
                  lineHeight: 1.8, 
                  color: '#333', 
                  fontSize: { xs: '1rem', md: '1.1rem' }, 
                  textAlign: 'justify',
                  fontFamily: 'Georgia, serif'
                }}>
                  {selected.history}
                </Typography>
                
                <Box sx={{ mt: 5, p: 3, bgcolor: 'rgba(139, 101, 8, 0.05)', borderRadius: '12px', borderLeft: `5px solid ${styles.primary}` }}>
                   <Typography variant="body2" sx={{ fontWeight: 700, color: styles.primary }}>
                     <AutoAwesomeIcon sx={{ fontSize: 16, mr: 1, verticalAlign: 'middle' }} />
                     Spiritual Note: This temple is a living heritage site protected by the Archeological Survey of India and local HR&CE boards.
                   </Typography>
                </Box>

                <Button 
                  fullWidth 
                  variant="contained" 
                  sx={{ mt: 5, py: 2, bgcolor: styles.primary, borderRadius: '12px', fontWeight: 900, '&:hover': { bgcolor: styles.secondary } }} 
                  onClick={handleClose}
                >
                  Close Exploration
                </Button>
              </Box>
            </DialogContent>
          )}
        </Dialog>
      </Container>
    </Box>
  );
};

export default Gods;