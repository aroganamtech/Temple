// import React from "react";
// import {
//   Container,
//   Typography,
//   Grid,
//   Box,
//   Card,
//   CardContent,
// } from "@mui/material";
// import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
// import HistoryIcon from "@mui/icons-material/History";
// import AccessTimeIcon from "@mui/icons-material/AccessTime";

// const AboutUs = () => {
//   return (
//     <Box
//       sx={{
//         minHeight: "100vh",
//         backgroundImage:
//           "url('https://t3.ftcdn.net/jpg/03/10/74/64/360_F_310746463_XFnSSCNtiQmXYEGTjl2at2emzMNXZdZw.jpg')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//       }}
//     >
//       {/* Dark Overlay */}
//       <Box
//         sx={{
//           minHeight: "100vh",
//           backgroundColor: "rgba(0,0,0,0.6)",
//           py: 5,
//         }}
//       >
//         <Container maxWidth="lg">

//           {/* Title */}
//           <Typography
//             variant="h3"
//             align="center"
//             fontWeight="bold"
//             color="#FF9933"
//             gutterBottom
//           >
//             🛕 About Our Temple
//           </Typography>

//           <Typography align="center" color="grey.300" mb={5}>
//             Experience peace, devotion, and divine blessings
//           </Typography>

//           {/* Introduction Section */}
//           {/* <Box
//             sx={{
//               backgroundColor: "goldenrod",
//               borderRadius: 3,
//               p: 4,
//               mb: 5,
//             }}
//           >
//             <Typography variant="h5" fontWeight="bold" gutterBottom>
//               <AccountBalanceIcon sx={{ mr: 1 }} />
//               Introduction
//             </Typography>
//             <Typography color="text.secondary">
//               Our temple is a sacred place where devotees come to find peace and
//               spiritual happiness. It is known for its calm environment and divine blessings.
//             </Typography>
//           </Box> */}
//         <Box
//   sx={{
//     backgroundColor: "goldenrod",
//     borderRadius: 3,
//     p: 2,
//     mb: 5,
//     display: "flex",
//     gap: 2,
//     alignItems: "center",
//     flexDirection: "row", // 🔥 always row
//   }}
// >

//   {/* LEFT SIDE */}
//   <Box sx={{ width: "50%" }}>
//     {/* <Typography variant="h6" fontWeight="bold" gutterBottom>
//       <AccountBalanceIcon sx={{ mr: 1 }} />
//       Introduction
//     </Typography> */}

//     <Typography sx={{ fontSize: { xs: "10px", md: "13px" } }}>
//       Our temple is a sacred place where devotees come to find peace and spiritual happiness. 
//       It offers a calm and divine environment away from daily stress, 
//       helping people feel relaxed and connected to their inner self. 
//       Devotees visit the temple to pray, participate in poojas, and receive blessings for a happy and prosperous life.
//        The temple is also known for its rich traditions, beautiful festivals, and positive spiritual energy 
//        that creates a peaceful atmosphere for everyone who visits.
//     </Typography>
//   </Box>

//   {/* RIGHT SIDE */}
//   <Box sx={{ width: "50%", display: "flex", justifyContent: "center" }}>
//     <Box
//       component="img"
//       src="https://img.freepik.com/free-photo/ancient-temple-architecture_23-2151996317.jpg"
//       alt="Temple"
//       sx={{
//         width: "60%",
//         height: { xs: "100px", md: "200px" }, // smaller in mobile
//         objectFit: "cover",
//         borderRadius: 2,
//       }}
//     />
//   </Box>

// </Box>
//           {/* Cards Section */}
//           <Grid container spacing={4} mb={5}>
            
//             <Grid item xs={12} md={6}>
//               <Card
//                 sx={{
//                   borderRadius: 3,
//                   bgcolor: "#fff7e6", // light saffron
//                 }}
//               >
//                 <CardContent>
//                   <Typography variant="h6" fontWeight="bold" gutterBottom>
//                     <HistoryIcon sx={{ mr: 1, color: "#FF9933" }} />
//                     Temple History
//                   </Typography>
//                   <Typography color="text.secondary">
//                     This temple has a rich history and has been a spiritual center
//                     for many years. It is famous for its traditions and rituals.
//                   </Typography>
//                 </CardContent>
//               </Card>
//             </Grid>

//             <Grid item xs={12} md={6}>
//               <Card
//                 sx={{
//                   borderRadius: 3,
//                   bgcolor: "#fff7e6",
//                 }}
//               >
//                 <CardContent>
//                   <Typography variant="h6" fontWeight="bold" gutterBottom>
//                     🛕 Main Deity
//                   </Typography>
//                   <Typography color="text.secondary">
//                     The temple is dedicated to a powerful deity who blesses devotees
//                     with health, success, and prosperity.
//                   </Typography>
//                 </CardContent>
//               </Card>
//             </Grid>

//           </Grid>

//           {/* Features */}
//           {/* <Box
//             sx={{
//               backgroundColor: "white",
//               borderRadius: 3,
//               p: 4,
//               mb: 5,
//             }}
//           >
//             <Typography variant="h5" fontWeight="bold" gutterBottom>
//               🌟 Temple Features
//             </Typography>
//             <Typography color="text.secondary">
//               • Beautiful architecture <br />
//               • Peaceful environment <br />
//               • Daily pooja rituals <br />
//               • Famous festivals and celebrations
//             </Typography>
//           </Box> */}

//           {/* Timings */}
//           {/* <Box
//             sx={{
//               backgroundColor: "white",
//               borderRadius: 3,
//               p: 4,
//               mb: 5,
//             }}
//           > */}
//             {/* <Typography variant="h5" fontWeight="bold" gutterBottom>
//               <AccessTimeIcon sx={{ mr: 1 }} />
//               Temple Timings
//             </Typography>
//             <Typography color="text.secondary">
//               Morning: 5:00 AM – 12:00 PM <br />
//               Evening: 4:00 PM – 9:00 PM
//             </Typography> */}
//           {/* </Box> */}

//           {/* Footer */}
//           <Typography align="center" color="grey.400">
//             "May divine blessings bring peace and happiness to your life"
//           </Typography>

//         </Container>
//       </Box>
//     </Box>
//   );
// };

// export default AboutUs;



// import React from "react";
// import { Box, Typography, Grid, Card, CardContent } from "@mui/material";

// const AboutUs = () => {
//   return (
//     <Box>


//       <Box
//         sx={{
//           height: "90vh",
//           backgroundImage: "url('https://t3.ftcdn.net/jpg/03/10/74/64/360_F_310746463_XFnSSCNtiQmXYEGTjl2at2emzMNXZdZw.jpg')",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           color: "#fff",
//           textAlign: "center"
//         }}
//       >
//         <Typography variant="h3" fontWeight="bold">
//           A Place Where Peace Meets Spirituality
//         </Typography>
//       </Box>

      
//       <Box sx={{ p: 5, textAlign: "center" }}>
//         <Typography variant="h4" gutterBottom>
//           Why This Temple?
//         </Typography>
//         <Typography>
//           This temple stands as a symbol of peace, faith, and devotion,
//           offering spiritual comfort to all devotees.
//         </Typography>
//       </Box>

    
//       <Box sx={{ p: 5 }}>
//         <Typography variant="h4" textAlign="center" gutterBottom>
//           Our Journey
//         </Typography>

//         <Grid container spacing={3} justifyContent="center">
//           {["Beginning", "Devotion", "Today"].map((title, index) => (
//             <Grid item xs={12} sm={6} md={3} key={index}>
//               <Card sx={{ p: 2, textAlign: "center", "&:hover": { transform: "scale(1.05)" }, transition: "0.3s" }}>
//                 <CardContent>
//                   <Typography variant="h6">{title}</Typography>
//                   <Typography variant="body2">
//                     {title === "Beginning" && "Established many years ago"}
//                     {title === "Devotion" && "Thousands of devotees visit"}
//                     {title === "Today" && "A peaceful spiritual place"}
//                   </Typography>
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Box>

      
//       <Box sx={{ p: 5, textAlign: "center", backgroundColor: "#f5f5f5" }}>
//         <Typography variant="h4">Feel the Temple</Typography>
//         <Typography>
//           Every devotee experiences peace, positivity, and divine blessings.
//         </Typography>
//       </Box>

  
//       <Box sx={{ p: 5 }}>
//         <Typography variant="h4" textAlign="center" gutterBottom>
//           What People Believe
//         </Typography>

//         <Grid container spacing={3} justifyContent="center">
//           {["🙏 Wishes come true", "🪔 Brings peace", "💖 Removes negativity"].map((text, i) => (
//             <Grid item xs={12} sm={6} md={3} key={i}>
//               <Card sx={{ p: 2, textAlign: "center" }}>
//                 <CardContent>
//                   <Typography>{text}</Typography>
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Box>


//       <Box sx={{ p: 5 }}>
//         <Typography variant="h4" textAlign="center" gutterBottom>
//           Temple Glimpse
//         </Typography>

//         <Grid container spacing={2}>
//           {["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg"].map((img, i) => (
//             <Grid item xs={12} sm={6} md={3} key={i}>
//               <Box
//                 component="img"
//                 src={`/${img}`}
//                 sx={{ width: "100%", borderRadius: 2 }}
//               />
//             </Grid>
//           ))}
//         </Grid>
//       </Box>

      
//       <Box sx={{ p: 5 }}>
//         <Typography variant="h4" textAlign="center" gutterBottom>
//           What Makes Us Special?
//         </Typography>

//         <Grid container spacing={3} justifyContent="center">
//           {["✨ Ancient Temple", "🪔 Daily Rituals", "🙏 Powerful Deity"].map((text, i) => (
//             <Grid item xs={12} sm={6} md={3} key={i}>
//               <Card sx={{ p: 2, textAlign: "center" }}>
//                 <CardContent>
//                   <Typography>{text}</Typography>
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Box>

      
//       <Box sx={{ p: 5, textAlign: "center", backgroundColor: "#222", color: "#fff" }}>
//         <Typography variant="h5">
//           May this temple bring peace and prosperity to your life 🙏
//         </Typography>
//       </Box>

//     </Box>
//   );
// };

// export default AboutUs;


import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Button
} from "@mui/material";

const AboutUs = () => {
  const [search, setSearch] = useState("");
  const [selectedTemple, setSelectedTemple] = useState(null);

  const temples = [
    {
      name: "Meenakshi Temple",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/3/3f/Meenakshi_Amman_Temple.jpg",
      intro: "A famous temple located in Madurai.",
      details:
        "Meenakshi Temple is dedicated to Goddess Meenakshi and is one of the most historic temples in India."
    },
    {
      name: "Tirupati Temple",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/6/6e/Tirumala_Temple.jpg",
      intro: "One of the richest temples in the world.",
      details:
        "Tirupati Balaji Temple is dedicated to Lord Venkateswara and visited by millions of devotees."
    }
  ];

  return (
    <Box>

      {/* 🔥 Hero Section */}
      <Box
        sx={{
          height: "90vh",
          backgroundImage:
            "url('https://t3.ftcdn.net/jpg/03/10/74/64/360_F_310746463_XFnSSCNtiQmXYEGTjl2at2emzMNXZdZw.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          textAlign: "center"
        }}
      >
        <Typography variant="h3" fontWeight="bold">
          A Place Where Peace Meets Spirituality
        </Typography>
      </Box>

      {/* 🪔 Why Temple */}
      <Box sx={{ p: 5, textAlign: "center" }}>
        <Typography variant="h4">Why This Temple?</Typography>
        <Typography>
          This temple stands as a symbol of peace, faith, and devotion.
        </Typography>
      </Box>

      {/* 📜 Journey */}
      <Box sx={{ p: 5 }}>
        <Typography variant="h4" textAlign="center">
          Our Journey
        </Typography>

        <Grid container spacing={3} justifyContent="center">
          {["Beginning", "Devotion", "Today"].map((title, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  p: 2,
                  textAlign: "center",
                  transition: "0.3s",
                  "&:hover": { transform: "scale(1.05)" }
                }}
              >
                <CardContent>
                  <Typography variant="h6">{title}</Typography>
                  <Typography>
                    {title === "Beginning" && "Established many years ago"}
                    {title === "Devotion" && "Thousands of devotees visit"}
                    {title === "Today" && "A peaceful spiritual place"}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* 💫 Feel */}
      <Box sx={{ p: 5, textAlign: "center", backgroundColor: "#f5f5f5" }}>
        <Typography variant="h4">Feel the Temple</Typography>
        <Typography>
          Every devotee experiences peace and divine blessings.
        </Typography>
      </Box>

      {/* 🙏 Beliefs */}
      <Box sx={{ p: 5 }}>
        <Typography variant="h4" textAlign="center">
          What People Believe
        </Typography>

        <Grid container spacing={3} justifyContent="center">
          {["🙏 Wishes come true", "🪔 Brings peace", "💖 Removes negativity"].map(
            (text, i) => (
              <Grid item xs={12} sm={6} md={3} key={i}>
                <Card sx={{ p: 2, textAlign: "center" }}>
                  <CardContent>
                    <Typography>{text}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            )
          )}
        </Grid>
      </Box>

      {/* 🖼️ Temple Images */}
      <Box sx={{ p: 5 }}>
        <Typography variant="h4" textAlign="center">
          Temple Glimpse
        </Typography>

        <Grid container spacing={2}>
          {[
            "https://source.unsplash.com/300x200/?temple",
            "https://source.unsplash.com/300x200/?hindu-temple",
            "https://source.unsplash.com/300x200/?india-temple",
            "https://source.unsplash.com/300x200/?spiritual"
          ].map((img, i) => (
            <Grid item xs={12} sm={6} md={3} key={i}>
              <Box
                component="img"
                src={img}
                sx={{ width: "100%", borderRadius: 2 }}
              />
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* 🔍 SEARCH SECTION */}
      <Box sx={{ p: 5, textAlign: "center" }}>
        <Typography variant="h4">Search Famous Temples</Typography>

        <TextField
          label="Search Temple..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{ mt: 2, mb: 4, width: "300px" }}
        />

        <Grid container spacing={3} justifyContent="center">
          {temples
            .filter((t) =>
              t.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((temple, i) => (
              <Grid item xs={12} sm={6} md={3} key={i}>
                <Card>
                  <Box
                    component="img"
                    src={temple.image}
                    sx={{ width: "100%", height: 150 }}
                  />
                  <CardContent>
                    <Typography variant="h6">{temple.name}</Typography>
                    <Typography>{temple.intro}</Typography>

                    <Button
                      variant="contained"
                      sx={{ mt: 2 }}
                      onClick={() => setSelectedTemple(temple)}
                    >
                      View More
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
        </Grid>
      </Box>

      {/* 📖 VIEW MORE */}
      {selectedTemple && (
        <Box sx={{ p: 5, textAlign: "center", backgroundColor: "#eee" }}>
          <Typography variant="h4">{selectedTemple.name}</Typography>

          <Box
            component="img"
            src={selectedTemple.image}
            sx={{ width: 300, my: 2 }}
          />

          <Typography>{selectedTemple.details}</Typography>

          <Button
            variant="outlined"
            sx={{ mt: 2 }}
            onClick={() => setSelectedTemple(null)}
          >
            Close
          </Button>
        </Box>
      )}
{/* 
      {/* 🔚 Footer */}
       {/* <Box sx={{ p: 5, textAlign: "center", background: "#222", color: "#fff" }}>
        <Typography variant="h5">
          May this temple bring peace and prosperity 🙏
        </Typography>
      </Box> */}
    </Box>
   );
 };

export default AboutUs;