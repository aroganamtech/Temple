import React, { useState } from 'react';
import { 
  Box, Container, Typography, Grid, CardMedia, 
  CardContent, Button, Chip, Stack, Divider, Fade, Paper
} from '@mui/material';
// Corrected Icon Imports
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AssignmentIcon from '@mui/icons-material/Assignment';
import CheckCircleIcon from '@mui/icons-material/CheckCircle'; // Fixed this line
import InfoIcon from '@mui/icons-material/Info';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

const Dosham = () => {
  const [selectedDosha, setSelectedDosha] = useState(null);

  const data = [
    { 
      id: 1, 
      name: "Thirunageswaram Rahu", 
      remedy: "Rahu Dosha", 
      location: "Kumbakonam", 
      image: "https://www.divinvite.com/assets/img/1415x1900/Thirunageswaram_Raghu_Spl_Pooja_Abhishekam.jpg", 
      info: "Blue Milk Abishekam ritual for Rahu.",
      benefit: "Removal of Fear & Career Hurdles",
      pariharam: "The primary ritual is 'Pal Abishekam' (Milk Offering) during Rahu Kalam. The milk miraculously turns blue upon touching the deity. It is recommended to wear dark blue clothes.",
      materials: ["2 Liters Fresh Milk", "Silver Naga Idol", "Black Gram (Ulundu)", "Blue Flowers"],
      steps: ["Perform Sankalpam with your Gothra", "Observe the Milk Abishekam during Rahu Kaal", "Circumambulate the shrine 9 times", "Donate black gram at the exit"]
    },
    { 
      id: 2, 
      name: "Vaitheeswaran Koil", 
      remedy: "Sevvai (Mars) Dosha", 
      location: "Mayiladuthurai", 
      image: "https://images.squarespace-cdn.com/content/v1/60c027648e42cf0145427ccf/1672237111260-0K0AGHGNVYSJTS7U99WL/Screenshot_20221228-194117.jpg", 
      info: "Salt and Jaggery ritual for health and marriage.",
      benefit: "Marriage & Skin Health",
      pariharam: "Dissolve jaggery and salt in the 'Siddhamirtham' temple tank. Offer red vastram (clothes) and red oleander flowers to Angaraka.",
      materials: ["Jaggery", "Sea Salt", "Red Silk Cloth", "Red Oleander Flowers"],
      steps: ["Bath in the holy tank", "Dissolve Jaggery in the water", "Offer Red flowers to the deity", "Light 5 Ghee lamps"]
    },
    { 
      id: 3, 
      name: "Thirunallar Saneeswaran", 
      remedy: "Sani (Saturn) Dosha", 
      location: "Karaikal", 
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVsRp5-ESphiMtM7CUJLFgMBE83OiI6dcZRA&s", 
      info: "The ultimate bath ritual for Sani.",
      benefit: "Debt & Misfortune Relief",
      pariharam: "Take a head bath in 'Nala Theertham' and leave the old clothes behind. Offer 'Ellu Deepam' (Gingelly oil lamps wrapped in black cloth).",
      materials: ["Gingelly Oil", "Black Cloth", "Sesame Seeds", "Curd Rice for Donation"],
      steps: ["Nala Theertham holy dip", "Discard old clothing", "Light Sesame oil lamps", "Annadhanam (Food donation)"]
    },
    { id: 4, name: "Suryanar Koil", remedy: "Surya Dosha", location: "Aduthurai", image: "https://hblimg.mmtcdn.com/content/hubble/img/ttd_images/mmt/activities/m_Kumbakonam_Suryanar_koil_temple_2_p_672_640.jpg", info: "Wheat and Red Flower ritual.", benefit: "Success", pariharam: "Perform Archanai with red lotus. Offer Wheat as the primary grain. Walk around 9 shrines in sequence.", materials: ["Wheat (Godhumai)", "Red Lotus", "Jaggery", "Copper Vessel"], steps: ["Wheat grain offering", "9-shrine sequence walk", "Aditya Hrudayam chanting"] },
    { id: 5, name: "Alangudi Guru", remedy: "Guru Dosha", location: "Kumbakonam", image: "https://famoustemplesofindia.com/wp-content/uploads/2024/05/Alangudi-Guru-Temple-2-768x1024.jpg", info: "Yellow cloth and Chickpea ritual.", benefit: "Wisdom", pariharam: "Offer yellow silk cloth and garlands made of 'Kondakadalai' (Chickpeas). Light 24 ghee lamps.", materials: ["Chickpeas", "Yellow Silk", "Ghee", "Yellow Flowers"], steps: ["Yellow cloth offering", "Chickpea garland pooja", "24 Ghee lamps"] },
    { id: 6, name: "Kanchanur Sukran", remedy: "Sukra Dosha", location: "Kumbakonam", image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjh5suzdsler-Xq15vKX7kHrWUaaURhbpRj77UOUBauzpgTtFttjQ674CqP5d1gmW_zhJ1ypCIfJWQnNNB0F7N_YB8CufiRCGnE8srmFhLjFzUmtCmy5p2Z_KskhMakGBx0zNsWdhdTWwJ-/s1600/karpagam.jpg", info: "White Lotus and Beans ritual.", benefit: "Wealth", pariharam: "Offer white lotus and 'Mochai' beans. Light lamps with white cotton wicks. Donate white silk.", materials: ["Field Beans (Mochai)", "White Lotus", "White Silk Cloth", "Sandalwood Paste"], steps: ["White Lotus Archanai", "Mochai grain offering", "Camphor Harathi"] },
    { id: 7, name: "Thingalur Chandran", remedy: "Chandra Dosha", location: "Thanjavur", image: "https://templeconnect.com/wp-content/uploads/2022/03/Kailasanathar-Chandran-Temple-Thingalur-Kumbakonam-Tamil-Nadu.png", info: "Raw rice and White Arali ritual.", benefit: "Peace", pariharam: "Offer raw rice mixed with jaggery. Perform pooja with 'Vellai Arali' (White Oleander) flowers.", materials: ["Raw Rice", "Jaggery", "White Oleander", "Milk"], steps: ["Rice/Jaggery offering", "Monday fasting", "White flower pooja"] },
    { id: 8, name: "Keezhaperumpallam", remedy: "Ketu Dosha", location: "Mayiladuthurai", image: "https://kethutemple.org/images/Festivals/Fas1.jpg", info: "Multi-colored cloth ritual.", benefit: "Clarity", pariharam: "Offer 'Kollu' (Horse Gram) and multi-colored clothes. Perform Abishekam with tender coconut water.", materials: ["Horse Gram", "Multi-colored Cloth", "Tender Coconut", "Camphor"], steps: ["Horse Gram offering", "Coconut water Abishekam", "Dhyanam"] },
    { id: 9, name: "Tiruvenkadu", remedy: "Budha Dosha", location: "Sirkazhi", image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhE2q6YWBWdFrzdg1JYQdrSDCL0lPKS2I_tymgLX31XKSvFlihyZz0x8tgwVVXH-BJ_sYkI8l-3ZEm5GB3TK3Eoxle2oK8fhxEJsC-BlqL-C8RKqXf4fJ0GB3P4_F9p3OCisvDBIpw5GAYj/s320/budhan+sthalam.jpg", info: "Green gram offering.", benefit: "Intellect", pariharam: "Offer Green Gram and green silk. Perform pooja with Tulsi on Wednesdays.", materials: ["Green Gram", "Green Silk Cloth", "Tulsi Leaves", "Honey"], steps: ["Green Gram offering", "Wednesday fasting", "Tulsi Archanai"] },
    { id: 10, name: "Srivilliputhur", remedy: "Marriage", location: "Srivilliputhur", image: "https://m.media-amazon.com/images/I/91mUsIn6sML._AC_UF1000,1000_QL80_.jpg", info: "Garland exchange ritual.", benefit: "Union", pariharam: "Devotees offer a garland to Goddess Andal, which is then worn by the devotee. Tie a yellow thread.", materials: ["Andal Garland", "Yellow Thread", "Turmeric", "Kumkum"], steps: ["Garland exchange", "Tulsi garden prayer", "Yellow thread tying"] },
    { id: 11, name: "Uppiliappan", remedy: "Family Feuds", location: "Kumbakonam", image: "https://southguruholidays.com/wp-content/uploads/2025/05/TIRUVINNAGAR-Uppiliappan-Koil-min.jpg", info: "Salt-less food offering.", benefit: "Harmony", pariharam: "Take a vow not to use salt for a day. Offer 'Pulihora' made without salt to the deity.", materials: ["Salt-free Tamarind Rice", "Tulsi", "Fresh Fruits", "Ghee"], steps: ["Salt-less fasting", "Salt-free food offering", "Family prayer"] },
    { id: 12, name: "Thirupampuram", remedy: "Naga Dosha", location: "Kudavasal", image: "https://i0.wp.com/www.rvatemples.com/wp-content/uploads/2018/04/Screenshot_1-20.png?fit=439%2C513&ssl=1", info: "Rahu-Ketu Naga Prathishta.", benefit: "Protection", pariharam: "Perform combined Rahu-Ketu Shanti pooja. Offer a silver snake idol.", materials: ["Silver Snake Idol", "Milk", "Saffron", "Flowers"], steps: ["Combined Shanti Pooja", "Silver Snake donation", "9-round walk"] },
    { id: 13, name: "Sri Kalahasti", remedy: "Sarpa Dosha", location: "Chittoor", image: "https://tirumalahills.wordpress.com/wp-content/uploads/2016/03/hindu-temples-guide-sri-kalahasti.jpg?w=640", info: "Rahu-Ketu Mandal Pooja.", benefit: "Karmic Cleanse", pariharam: "Sit in the designated hall for the Rahu-Ketu pooja. Touch the silver idols provided by the temple.", materials: ["Pooja Ticket", "Silver Idols (Provided)", "Flowers", "Coconut"], steps: ["Ticket pooja", "Idol ritual", "Ganges water bath"] },
    { id: 14, name: "Tiruchengode", remedy: "Relationship", location: "Namakkal", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAWxGOw5eMxhw2YC0PAf8ugiAWjl8Z5EUOsA&s", info: "Ghee Abishekam.", benefit: "Unity", pariharam: "Couples offer a single garland to Ardhanareshwarar. Offer ghee for the eternal lamp.", materials: ["Ghee", "Large Flower Garland", "Honey", "Vibhuthi"], steps: ["Couple garland offering", "Akhanda Deepam ghee", "Hill prayer"] },
    { id: 15, name: "Pataleeswarar", remedy: "Anxiety", location: "Cuddalore", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZo0-DlEoAZ22yfLxPaUMBhoTOWRYcIOSxAw&s", info: "Vanni leaf ritual.", benefit: "Mental Peace", pariharam: "Perform Archanai with Vanni leaves. Offer curd rice here is the main food remedy.", materials: ["Vanni Leaves", "Curd Rice", "Earthen Lamps", "Ghee"], steps: ["Vanni leaf archanai", "Curd rice donation", "Silent meditation"] },
    { id: 16, name: "Nachiyar Koil", remedy: "Legal Issues", location: "Kumbakonam", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGO7CgWpbqoUUI9udc34rZya8vNd05mn5QXQ&s", info: "Kal-Garuda ritual.", benefit: "Legal Success", pariharam: "Pray to Stone Garuda. Offer 'Sundal' (Chickpeas) on Thursdays.", materials: ["Boiled Chickpeas", "Yellow Flowers", "Tulsi", "Betel Leaves"], steps: ["Thursday Sundal offering", "Legal prayer", "Yellow garland"] },
    { id: 17, name: "Kodumudi", remedy: "Pithru Dosha", location: "Erode", image: "https://lh3.googleusercontent.com/proxy/cik2TUJwHTcwRvbWNel7-I0-3CSHIwNSAZuwhNCAEeVE9HF77-x_huA2SygERRMrUzd3n9iRLrsAE2td0avqTh99NRr-KakFCw", info: "Kaveri tharpanam.", benefit: "Blessings", pariharam: "Perform 'Tharpanam' (Ancestral rites) at the river confluence.", materials: ["Sesame Seeds", "Dharba Grass", "Raw Rice", "Pipal Seedling"], steps: ["River Tharpanam", "Pipal tree worship", "Trinity shrine visit"] },
    { id: 18, name: "Kanjanoor", remedy: "Material Loss", location: "Thanjavur", image: "https://i.ytimg.com/vi/I2iGiSnRFSg/sddefault.jpg", info: "White silk offering.", benefit: "Recovery", pariharam: "Offer white silk and diamond-shaped sugar candy. Donate sweets to women.", materials: ["White Silk", "Sugar Candy (Kalkandu)", "Sweets", "White Roses"], steps: ["White silk pooja", "Sugar candy offering", "Donation"] },
    { id: 19, name: "Marundeeswarar", remedy: "Illness", location: "Chennai", image: "https://www.bvashram.org/wp-content/uploads/2021/03/thiruvanmiyur-4.jpg", info: "Sacred Ash ritual.", benefit: "Healing", pariharam: "Apply 'Vibhuthi' mixed with medicinal herbs for 48 days. Offer honey.", materials: ["Honey", "Sacred Ash", "Medicinal Herbs", "Milk"], steps: ["Honey Abishekam", "Mandala Vibhuthi usage", "Agastya cave visit"] },
    { id: 20, name: "Thiruvidaimarudur", remedy: "Severe Sins", location: "Kumbakonam", image: "https://cdn.ibcstack.com/article/a6f1c68d-ec1c-4ab0-a987-c05a9282be3c/25-679476328db55.webp", info: "Specific exit ritual.", benefit: "Liberation", pariharam: "Enter East and exit West gate to leave the Dosha behind.", materials: ["Ghee Lamps", "Coconut", "Flowers", "Vibhuthi"], steps: ["Enter East Gate", "West Gate Exit only", "Deep silence prayer"] }
  ];

  const styles = {
    bg: '#FDF5E6',
    primary: '#8B6508',
    secondary: '#A0522D',
    flipCard: {
      perspective: '1000px',
      '&:hover .flip-inner': { transform: 'rotateY(180deg)' },
      height: '450px', width: '100%', mb: 4, cursor: 'pointer'
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
      boxShadow: '0 4px 15px rgba(0,0,0,0.05)'
    },
    h1: { fontFamily: "'Playfair Display', serif", fontWeight: 900, color: '#8B6508' },
    h2: { fontFamily: "'Poppins', sans-serif", fontWeight: 700, color: '#A0522D' },
  };

  if (selectedDosha) {
    return (
      <Fade in={true} timeout={500}>
        <Box sx={{ bgcolor: styles.bg, minHeight: '100vh', py: { xs: 4, md: 8 } }}>
          <Container maxWidth="md">
            <Button startIcon={<ArrowBackIcon />} onClick={() => setSelectedDosha(null)} sx={{ color: styles.primary, mb: 4, fontWeight: 900 }}>
              Back to List
            </Button>
            
            <Typography variant="h2" sx={{ ...styles.h1, mb: 1, fontSize: { xs: '26px', md: '40px' } }}>{selectedDosha.remedy} Pariharam</Typography>
            <Typography variant="h5" sx={{ color: styles.secondary, mb: 4, fontSize: '1.2rem' }}>{selectedDosha.name} - {selectedDosha.location}</Typography>

            <Grid container spacing={3}>
              <Grid item xs={12} md={5}>
                 <CardMedia component="img" image={selectedDosha.image} sx={{ borderRadius: '24px', height: {xs: '250px', md: '450px'}, objectFit: 'cover' }} />
              </Grid>
              
              <Grid item xs={12} md={7}>
                 <Stack spacing={3}>
                    {/* Ritual Procedure */}
                    <Paper elevation={0} sx={{ p: 3, borderRadius: '15px', border: '1px solid #E0D7C6' }}>
                       <Typography variant="h6" sx={{ ...styles.h2, display: 'flex', alignItems: 'center', gap: 1, mb: 2, fontSize: '18px' }}>
                          <SettingsSuggestIcon sx={{color: styles.primary}} /> Procedure
                       </Typography>
                       <Typography variant="body2" sx={{ lineHeight: 1.7, color: '#444' }}>{selectedDosha.pariharam}</Typography>
                    </Paper>

                    {/* Materials Needed */}
                    <Paper elevation={0} sx={{ p: 3, borderRadius: '15px', border: '1px solid #E0D7C6', bgcolor: '#FFFBF2' }}>
                       <Typography variant="h6" sx={{ ...styles.h2, display: 'flex', alignItems: 'center', gap: 1, mb: 2, fontSize: '18px' }}>
                          <ShoppingBagIcon sx={{color: styles.primary}} /> Materials Required
                       </Typography>
                       <Grid container spacing={1}>
                          {selectedDosha.materials.map((item, idx) => (
                             <Grid item xs={6} key={idx}>
                                <Typography variant="caption" sx={{ display: 'flex', alignItems: 'center', gap: 1, fontWeight: 600 }}>
                                   • {item}
                                </Typography>
                             </Grid>
                          ))}
                       </Grid>
                    </Paper>

                    {/* Steps Checklist */}
                    <Paper elevation={0} sx={{ p: 3, borderRadius: '15px', border: '1px solid #E0D7C6' }}>
                       <Typography variant="h6" sx={{ ...styles.h2, fontSize: '18px', mb: 2 }}>Execution Steps:</Typography>
                       {selectedDosha.steps.map((step, idx) => (
                          <Stack key={idx} direction="row" spacing={1} sx={{ mb: 1.5 }}>
                             <CheckCircleIcon sx={{ color: '#2E7D32', fontSize: '18px' }} />
                             <Typography variant="body2" sx={{fontSize: '13px'}}>{step}</Typography>
                          </Stack>
                       ))}
                    </Paper>
                 </Stack>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Fade>
    );
  }

  return (
    <Box sx={{ bgcolor: styles.bg, minHeight: '100vh', py: {xs: 4, md: 8} }}>
      <Container>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h2" sx={{...styles.h1, fontSize: {xs: '28px', md: '40px'}}}>Pariharam Ritual Guide</Typography>
          <Box sx={{ width: '60px', height: '4px', bgcolor: styles.primary, mx: 'auto', mt: 2, mb: 2 }} />
          <Typography sx={{ color: '#555', fontSize: '0.9rem' }}>
            Hover for the Ritual Preview. Click for the full Checklist and Materials list.
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {data.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <Box sx={styles.flipCard} onClick={() => setSelectedDosha(item)}>
                <Box className="flip-inner" sx={styles.flipInner}>
                  
                  {/* FRONT FACE */}
                  <Box sx={styles.cardFace}>
                    <CardMedia component="img" height="200" image={item.image} />
                    <CardContent sx={{ p: 3, flexGrow: 1 }}>
                      <Chip label={item.remedy} sx={{ mb: 2, bgcolor: styles.secondary, color: 'white', fontWeight: 700, borderRadius: '4px' }} />
                      <Typography variant="h6" sx={{ ...styles.h2, fontSize: '17px', mb: 1 }}>{item.name}</Typography>
                      <Typography variant="body2" sx={{ color: '#666', mb: 2, height: '40px', overflow: 'hidden' }}>{item.info}</Typography>
                      <Divider sx={{ my: 1.5 }} />
                      <Stack direction="row" alignItems="center" spacing={1}>
                         <AssignmentIcon sx={{fontSize: '16px', color: styles.primary}} />
                         <Typography variant="caption" sx={{fontWeight: 700}}>Benefit: {item.benefit}</Typography>
                      </Stack>
                    </CardContent>
                  </Box>

                  {/* BACK FACE */}
                  <Box sx={{ ...styles.cardFace, transform: 'rotateY(180deg)', bgcolor: styles.primary, color: 'white', p: 3, textAlign: 'center', justifyContent: 'center' }}>
                    <SettingsSuggestIcon sx={{ fontSize: 40, mb: 2 }} />
                    <Typography variant="h6" sx={{ fontWeight: 800, mb: 1 }}>The Pariharam</Typography>
                    <Typography variant="body2" sx={{ fontSize: '13px', lineHeight: 1.6, mb: 3 }}>
                      {item.pariharam}
                    </Typography>
                    <Button variant="contained" sx={{ bgcolor: 'white', color: styles.primary, fontWeight: 900, textTransform: 'none' }}>
                      View Checklist
                    </Button>
                  </Box>

                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Dosham;