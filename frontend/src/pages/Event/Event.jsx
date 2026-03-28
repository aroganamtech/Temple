// import React, { useState, useEffect, useRef, useMemo } from 'react'
// import {
//     Box, Typography, Button, Stack, Grid,
//     AppBar, Toolbar, IconButton, Badge,
//     Card, CardMedia, CardContent, Chip, Tooltip,
//     LinearProgress, Avatar, Divider,
//     CssBaseline,
// } from '@mui/material'
// import { createTheme, ThemeProvider } from '@mui/material/styles'
// import NotificationsIcon from '@mui/icons-material/Notifications'
// import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
// import FavoriteIcon from '@mui/icons-material/Favorite'
// import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'

// /* ─────────────────────────────────────
//    THEME
// ───────────────────────────────────── */
// const theme = createTheme({
//     palette: {
//         mode: 'dark',
//         background: { default: '#1a1a1a', paper: '#111111' },
//         primary: { main: '#daa520', light: '#f5c842', dark: '#b8860b' },
//         text: { primary: '#fdf6e3', secondary: 'rgba(253,246,227,0.55)' },
//     },
//     typography: {
//         fontFamily: "'Inter', sans-serif",
//         h1: { fontFamily: "'Cinzel', serif" },
//         h2: { fontFamily: "'Cinzel', serif" },
//         h3: { fontFamily: "'Cinzel', serif" },
//         h4: { fontFamily: "'Cinzel', serif" },
//     },
//     shape: { borderRadius: 16 },
//     components: {
//         MuiCssBaseline: {
//             styleOverrides: {
//                 'html': { scrollBehavior: 'smooth' },
//                 'body': { background: '#1a1a1a', color: '#fdf6e3', overflowX: 'hidden', fontFamily: "'Inter', sans-serif" },
//                 '::-webkit-scrollbar': { width: '4px' },
//                 '::-webkit-scrollbar-track': { background: '#111111' },
//                 '::-webkit-scrollbar-thumb': { background: '#b8860b', borderRadius: '2px' },
//             },
//         },
//         MuiCard: { styleOverrides: { root: { backgroundImage: 'none' } } },
//     },
// })

// /* ─────────────────────────────────────
//    DATA
// ───────────────────────────────────── */
// const EVENTS = [
//     { id: 1, img: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&q=80', badge: 'Festival', deity: '🔱', title: 'Maha Shivaratri', tags: ['Shiva Pooja', 'All Night'], desc: 'The great night of Lord Shiva — an all-night vigil of devotion, fasting, and divine chanting.', date: 'Feb 26', time: '6:00 PM – 6:00 AM', location: 'Chidambaram Temple', prana: '+150 pts' },
//     { id: 2, img: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600&q=80', badge: 'Pooja', deity: '🪷', title: 'Saraswati Puja', tags: ['Learning', 'Blessings'], desc: 'Seek the blessings of Goddess Saraswati for wisdom, arts, and knowledge on this auspicious day.', date: 'Mar 2', time: '8:00 AM – 12:00 PM', location: 'Mylapore Temple', prana: '+80 pts' },
//     { id: 3, img: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&q=80', badge: 'Satsang', deity: '📿', title: 'Vedic Discourse', tags: ['Wisdom', 'Meditation'], desc: 'Join our revered Guru for an immersive session on the Bhagavad Gita and path to liberation.', date: 'Mar 8', time: '5:00 PM – 7:00 PM', location: 'Virtual + Chennai', prana: '+60 pts' },
//     { id: 4, img: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=80', badge: 'Seva', deity: '🌸', title: 'Annadanam Seva', tags: ['Community', 'Food'], desc: 'Participate in the sacred act of feeding 5,000 devotees as an offering to the divine.', date: 'Mar 15', time: '9:00 AM – 2:00 PM', location: 'Tirupati Temple', prana: '+200 pts' },
//     { id: 5, img: 'https://images.unsplash.com/photo-1609766857585-a8e6e4e2e517?w=600&q=80', badge: 'Festival', deity: '🪔', title: 'Karthigai Deepam', tags: ['Light Festival', 'Prayers'], desc: 'The festival of lights — thousands of lamps illuminate the sacred hills in divine splendour.', date: 'Mar 22', time: 'Dusk – Midnight', location: 'Thiruvannamalai', prana: '+120 pts' },
//     { id: 6, img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80', badge: 'Virtual', deity: '🕉', title: 'Online Abhishekam', tags: ['Virtual', 'Shiva'], desc: 'Participate in the sacred Abhishekam ritual from anywhere in the world via live stream.', date: 'Mar 28', time: '7:00 AM – 9:00 AM', location: 'Live Stream', prana: '+50 pts' },
//     { id: 7, img: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600&q=80', badge: 'Festival', deity: '🌺', title: 'Panguni Uthiram', tags: ['Murugan', 'Procession'], desc: 'The celestial wedding of Lord Murugan — a grand chariot procession through sacred streets.', date: 'Apr 5', time: 'All Day', location: 'Palani Temple', prana: '+180 pts' },
//     { id: 8, img: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&q=80', badge: 'Satsang', deity: '🎵', title: 'Carnatic Bhajan Night', tags: ['Music', 'Devotion'], desc: 'An evening of soul-stirring classical devotional music by renowned artists from Tamil Nadu.', date: 'Apr 10', time: '6:30 PM – 10:00 PM', location: 'Kapaleeshwarar Temple', prana: '+70 pts' },
//     { id: 9, img: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&q=80', badge: 'Pooja', deity: '🔱', title: 'Pradosham Pooja', tags: ['Shiva', 'Monthly'], desc: 'The sacred bi-monthly Pradosham — an auspicious time to worship Lord Shiva and seek blessings.', date: 'Apr 14', time: '5:30 PM – 7:30 PM', location: 'Multiple Temples', prana: '+90 pts' },
//     { id: 10, img: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=80', badge: 'Seva', deity: '📚', title: 'Vedic School Seva', tags: ['Education', 'Children'], desc: 'Volunteer to teach Vedic chanting and Sanskrit to underprivileged children at our gurukul.', date: 'Apr 20', time: '9:00 AM – 1:00 PM', location: 'Chennai Gurukul', prana: '+250 pts' },
//     { id: 11, img: 'https://images.unsplash.com/photo-1609766857585-a8e6e4e2e517?w=600&q=80', badge: 'Festival', deity: '🌙', title: 'Aadi Perukku', tags: ['Water Festival', 'Goddess'], desc: 'Celebrate the sacred rivers with offerings to Goddess Kaveri — a joyful water festival.', date: 'May 3', time: 'Morning', location: 'Kaveri River Banks', prana: '+100 pts' },
//     { id: 12, img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80', badge: 'Virtual', deity: '🧘', title: 'Meditation Retreat', tags: ['Wellness', 'Peace'], desc: 'A 3-day virtual meditation retreat guided by senior monks — find stillness in the divine.', date: 'May 10', time: '3 Days', location: 'Online', prana: '+300 pts' },
//     { id: 12, img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80', badge: 'Virtual', deity: '🧘', title: 'Meditation Retreat', tags: ['Wellness', 'Peace'], desc: 'A 3-day virtual meditation retreat guided by senior monks — find stillness in the divine.', date: 'May 10', time: '3 Days', location: 'Online', prana: '+300 pts' },
// ]

// const CAL_EVENTS = [
//     { day: '26', mon: 'Feb', name: 'Maha Shivaratri', detail: 'Chidambaram • All Night', icon: '🔱' },
//     { day: '02', mon: 'Mar', name: 'Saraswati Puja', detail: 'Mylapore • 8:00 AM', icon: '🪷' },
//     { day: '15', mon: 'Mar', name: 'Annadanam Seva', detail: 'Tirupati • 9:00 AM', icon: '🌸' },
//     { day: '22', mon: 'Mar', name: 'Karthigai Deepam', detail: 'Thiruvannamalai • Dusk', icon: '🪔' },
//     { day: '05', mon: 'Apr', name: 'Panguni Uthiram', detail: 'Palani • All Day', icon: '🌺' },
//     { day: '14', mon: 'Apr', name: 'Pradosham Pooja', detail: 'Multiple Temples • 5:30 PM', icon: '🔱' },
// ]

// const STORIES = [
//     { avatar: '🙏', name: 'Priya Sharma', badge: true, text: '"The virtual Darshan brought tears to my eyes. I felt the divine presence from 10,000 miles away."', likes: 248 },
//     { avatar: '🕉', name: 'Rajan Pillai', badge: false, text: '"Seva Match connected me with the perfect volunteer role. Annadanam changed my life."', likes: 183 },
//     { avatar: '🪷', name: 'Meena Krishnan', badge: true, text: '"Prana Points motivated me to attend more events. Now I have Guru Glow status!"', likes: 312 },
// ]

// const FILTERS = [
//     { label: '✦ All Events', value: 'all' },
//     { label: '🎊 Festivals', value: 'Festival' },
//     { label: '🧘 Satsangs', value: 'Satsang' },
//     { label: '🌸 Community Seva', value: 'Seva' },
//     { label: '🪔 Poojas', value: 'Pooja' },
//     { label: '🌐 Virtual', value: 'Virtual' },
// ]

// const ORBIT_DATA = [
//     { icon: '🔱', label: 'Shivaratri', angle: 0, r: 42 },
//     { icon: '🪷', label: 'Saraswati', angle: 72, r: 42 },
//     { icon: '🌸', label: 'Annadanam', angle: 144, r: 42 },
//     { icon: '🪔', label: 'Deepam', angle: 216, r: 42 },
//     { icon: '🌺', label: 'Panguni', angle: 288, r: 42 },
// ]

// const STATS = [
//     { icon: '🙏', val: '1.2M+', label: 'Devotees' },
//     { icon: '🪔', val: '340+', label: 'Events This Year' },
//     { icon: '🛕', val: '85', label: 'Partner Temples' },
//     { icon: '⭐', val: '4.9', label: 'Devotee Rating' },
//     { icon: '🌍', val: '42', label: 'Countries Reached' },
// ]

// const NAV_LINKS = [
//     { label: 'Home', href: '#home' },
//     { label: 'Events', href: '#events' },
//     { label: 'Calendar', href: '#calendar' },
//     { label: 'Seva', href: '#seva' },
//     { label: 'Community', href: '#devotees' },
// ]

// const FOOTER_COLS = [
//     { title: 'Explore', links: ['Temple Directory', 'Live Darshan', 'Festival Calendar', 'Virtual Poojas', 'Pilgrimage Tours'] },
//     { title: 'Community', links: ['Seva Opportunities', 'Devotee Stories', 'Guru Glow Program', 'Prana Points', 'Forums'] },
//     { title: 'Support', links: ['About Us', 'Contact', 'Privacy Policy', 'Terms of Service', 'Donate'] },
// ]

// const POLLS = [
//     { label: '🌅 Morning 6:00 AM', pct: 62 },
//     { label: '☀️ Noon 12:00 PM', pct: 24 },
//     { label: '🌙 Evening 7:00 PM', pct: 14 },
// ]

// const SEVA_TAGS = ['🍱 Annadanam', '📖 Teaching', '🎵 Music', '🌿 Gardening', '🏥 Medical']

// /* ─────────────────────────────────────
//    SHARED: SECTION HEADER
// ───────────────────────────────────── */
// function SectionHead({ eyebrow, title, accent, sub }) {
//     return (
//         <Box sx={{ textAlign: 'center', mb: { xs: 4, sm: 5, md: 7 } }}>
//             <Typography sx={{ fontFamily: "'Cinzel',serif", fontWeight: 600, color: '#b8860b', letterSpacing: '3px', textTransform: 'uppercase', mb: 1.5, fontSize: { xs: 8, sm: 9, md: 9.5 } }}>{eyebrow}</Typography>
//             <Typography variant="h2" sx={{ fontFamily: "'Cinzel',serif", fontWeight: 900, lineHeight: 1.1, color: '#fdf6e3', mb: 1.8, fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem', lg: '3rem' } }}>
//                 {title}{' '}
//                 <Box component="span" sx={{ background: 'linear-gradient(135deg,#b8860b,#daa520,#f5c842,#daa520,#b8860b)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{accent}</Box>
//             </Typography>
//             <Typography sx={{ fontFamily: "'Crimson Text',serif", fontStyle: 'italic', color: 'rgba(253,246,227,0.55)', maxWidth: 520, mx: 'auto', lineHeight: 1.8, mb: 2, fontSize: { xs: '0.9rem', sm: '1rem', md: '1.05rem' } }}>{sub}</Typography>
//             <Box sx={{ width: 60, height: 2, background: 'linear-gradient(135deg,#daa520,#f5c842)', borderRadius: 1, mx: 'auto' }} />
//         </Box>
//     )
// }

// /* ─────────────────────────────────────
//    NAVBAR
// ───────────────────────────────────── */
// function TempleNavbar() {
//     const navSx = {
//         logoIcon: {
//             width: 42, height: 42, borderRadius: '50%',
//             background: 'linear-gradient(135deg,#b8860b,#daa520,#f5c842,#daa520,#b8860b)',
//             display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18,
//             animation: 'logoGlow 3s ease-in-out infinite',
//             '@keyframes logoGlow': { '0%,100%': { boxShadow: '0 0 20px rgba(218,165,32,0.4)' }, '50%': { boxShadow: '0 0 40px rgba(218,165,32,0.9)' } },
//         },
//         navLink: {
//             fontFamily: "'Cinzel',serif", fontSize: 11.5, color: 'rgba(253,246,227,0.5)',
//             textDecoration: 'none', px: 1.8, py: 0.9, borderRadius: '50px', letterSpacing: '.8px',
//             minWidth: 0, textTransform: 'none',
//             '&:hover': { color: '#f5c842', background: 'rgba(218,165,32,0.1)' },
//         },
//         bellBtn: {
//             width: 38, height: 38, borderRadius: '50%', border: '1px solid rgba(218,165,32,0.2)',
//             background: 'rgba(218,165,32,0.06)', color: '#f5c842',
//             '&:hover': { background: 'rgba(218,165,32,0.15)', borderColor: '#daa520' },
//         },
//         ctaBtn: {
//             fontFamily: "'Cinzel',serif", fontSize: 11, fontWeight: 700, letterSpacing: '1px',
//             borderRadius: '50px', px: 2.5, py: 1,
//             background: 'linear-gradient(135deg,#daa520,#f5c842)', color: '#1a1a1a', textTransform: 'none',
//             boxShadow: '0 4px 20px rgba(218,165,32,0.35)',
//             '&:hover': { boxShadow: '0 8px 32px rgba(218,165,32,0.6)', transform: 'scale(1.05)' },
//         },
//     }
//     return (
//         <AppBar position="fixed" elevation={0} sx={{ background: 'rgba(17,17,17,0.85)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(218,165,32,0.2)' }}>
//             <Toolbar sx={{ px: { xs: 2, md: '5vw' }, py: 0.5, justifyContent: 'space-between', minHeight: '64px !important' }}>
//                 <Box component="a" href="#" sx={{ display: 'flex', alignItems: 'center', gap: 1.5, textDecoration: 'none' }}>
//                     <Box sx={navSx.logoIcon}>🕉</Box>
//                     <Box>
//                         <Typography sx={{ fontFamily: "'Cinzel',serif", fontWeight: 700, fontSize: 16, color: '#f5c842', letterSpacing: '2px', lineHeight: 1 }}>Darshan Journey</Typography>
//                         <Typography sx={{ fontSize: 8, color: 'rgba(218,165,32,0.5)', letterSpacing: '3px', textTransform: 'uppercase' }}>Sacred Temple Platform</Typography>
//                     </Box>
//                 </Box>
//                 <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 0.3 }}>
//                     {NAV_LINKS.map(link => (
//                         <Button key={link.label} href={link.href} sx={navSx.navLink}>{link.label}</Button>
//                     ))}
//                 </Box>
//                 <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2 }}>
//                     <IconButton sx={navSx.bellBtn}>
//                         <Badge badgeContent={3} color="warning" sx={{ '& .MuiBadge-badge': { fontSize: 9, minWidth: 16, height: 16, background: '#daa520', color: '#1a1a1a' } }}>
//                             <NotificationsIcon sx={{ fontSize: 17 }} />
//                         </Badge>
//                     </IconButton>
//                     <Button variant="contained" disableElevation sx={navSx.ctaBtn}>Join Darshan</Button>
//                 </Box>
//             </Toolbar>
//         </AppBar>
//     )
// }

// /* ─────────────────────────────────────
//    HERO
// ───────────────────────────────────── */
// function useCountdown(targetISO) {
//     const [vals, setVals] = useState({ d: '00', h: '00', m: '00', s: '00' })
//     useEffect(() => {
//         const target = new Date(targetISO).getTime()
//         const tick = () => {
//             const diff = Math.max(0, target - Date.now())
//             const pad = n => String(Math.floor(n)).padStart(2, '0')
//             setVals({ d: pad(diff / 86400000), h: pad((diff % 86400000) / 3600000), m: pad((diff % 3600000) / 60000), s: pad((diff % 60000) / 1000) })
//         }
//         tick()
//         const id = setInterval(tick, 1000)
//         return () => clearInterval(id)
//     }, [targetISO])
//     return vals
// }

// function HeroCanvas() {
//     const ref = useRef(null)
//     useEffect(() => {
//         const cv = ref.current
//         const ctx = cv.getContext('2d')
//         let W, H, pts = [], raf
//         const resize = () => { W = cv.width = window.innerWidth; H = cv.height = window.innerHeight }
//         window.addEventListener('resize', resize); resize()
//         for (let i = 0; i < 120; i++) pts.push({ x: Math.random() * W, y: Math.random() * H, r: Math.random() * 2 + 0.3, vx: (Math.random() - .5) * .3, vy: -(Math.random() * .5 + .1), a: Math.random() * .8 + .1, da: Math.random() * .005 + .002, gold: Math.random() > .5 })
//         const draw = () => {
//             ctx.clearRect(0, 0, W, H)
//             pts.forEach(p => {
//                 p.x += p.vx; p.y += p.vy; p.a -= p.da
//                 if (p.a <= 0) { p.x = Math.random() * W; p.y = H + 5; p.a = Math.random() * .8 + .2 }
//                 if (p.x < 0) p.x = W; if (p.x > W) p.x = 0
//                 ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
//                 ctx.fillStyle = p.gold ? `rgba(218,165,32,${p.a * .6})` : `rgba(245,200,66,${p.a * .4})`
//                 ctx.fill()
//             })
//             raf = requestAnimationFrame(draw)
//         }
//         draw()
//         return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize) }
//     }, [])
//     return <canvas ref={ref} style={{ position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none' }} />
// }

// function CdBlock({ val, unit }) {
//     return (
//         <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', background: 'rgba(218,165,32,0.07)', border: '1px solid rgba(218,165,32,0.2)', borderRadius: '12px', px: 2, py: 1.5, minWidth: 64, backdropFilter: 'blur(10px)', boxShadow: '0 0 20px rgba(218,165,32,0.1)' }}>
//             <Typography sx={{ fontFamily: "'Cinzel',serif", fontSize: '1.8rem', fontWeight: 900, color: '#f5c842', lineHeight: 1 }}>{val}</Typography>
//             <Typography sx={{ fontSize: 8, color: 'rgba(218,165,32,0.5)', letterSpacing: '2px', textTransform: 'uppercase', mt: 0.5 }}>{unit}</Typography>
//         </Box>
//     )
// }

// function TempleHero() {
//     const { d, h, m, s } = useCountdown('2025-02-26T18:00:00')
//     return (
//         <Box component="section" id="home" sx={{ position: 'relative', width: '100%', height: 'calc(100vh - 64px)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', background: 'radial-gradient(ellipse at 50% 60%,rgba(218,165,32,0.08) 0%,transparent 65%),#111111' }}>
//             <HeroCanvas />
//             <Box sx={{ position: 'absolute', inset: 0, zIndex: 0, backgroundImage: "url('https://images.unsplash.com/photo-1587474260584-136574528ed5?w=1600&q=80')", backgroundSize: 'cover', backgroundPosition: 'center', opacity: .12, transform: 'scale(1.05)', animation: 'heroBgDrift 20s ease-in-out infinite alternate', '@keyframes heroBgDrift': { from: { transform: 'scale(1.05) translateY(0)' }, to: { transform: 'scale(1.1) translateY(-20px)' } } }} />
//             <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', zIndex: 2, pointerEvents: 'none' }}>
//                 <Box sx={{ width: 'min(70vw,700px)', height: 'min(70vw,700px)', borderRadius: '50%', border: '1px solid rgba(218,165,32,0.08)', position: 'relative', animation: 'mandalaSpin 60s linear infinite', '@keyframes mandalaSpin': { to: { transform: 'rotate(360deg)' } }, '&::before': { content: '""', position: 'absolute', inset: '8%', borderRadius: '50%', border: '1px solid rgba(218,165,32,0.06)', animation: 'mandalaSpin 40s linear infinite reverse' }, '&::after': { content: '""', position: 'absolute', inset: '18%', borderRadius: '50%', border: '1px solid rgba(218,165,32,0.1)', animation: 'mandalaSpin 25s linear infinite' } }}>
//                     <Box sx={{ position: 'absolute', inset: '28%', borderRadius: '50%', border: '1px dashed rgba(218,165,32,0.15)', animation: 'mandalaSpin 15s linear infinite reverse' }} />
//                     <Box sx={{ position: 'absolute', inset: '42%', borderRadius: '50%', background: 'radial-gradient(circle,rgba(218,165,32,0.15),transparent 70%)', animation: 'corePulse 4s ease-in-out infinite', '@keyframes corePulse': { '0%,100%': { transform: 'scale(1)', opacity: .6 }, '50%': { transform: 'scale(1.3)', opacity: 1 } } }} />
//                 </Box>
//             </Box>
//             {[{ icon: '🔱', top: '20%', left: '8%', delay: '0s', size: 'clamp(28px,4vw,48px)' }, { icon: '🪷', top: '25%', right: '8%', delay: '2s', size: 'clamp(28px,4vw,48px)' }, { icon: '🪔', bottom: '28%', left: '12%', delay: '1s', size: 'clamp(22px,3vw,36px)' }, { icon: '📿', bottom: '32%', right: '10%', delay: '3s', size: 'clamp(22px,3vw,36px)' }].map((item, i) => (
//                 <Box key={i} sx={{ position: 'absolute', zIndex: 3, fontSize: item.size, filter: 'drop-shadow(0 0 20px rgba(218,165,32,0.6))', animation: `deityFloat${i} 6s ease-in-out ${item.delay} infinite`, [`@keyframes deityFloat${i}`]: { '0%,100%': { transform: 'translateY(0) rotate(-3deg)' }, '50%': { transform: 'translateY(-18px) rotate(3deg)' } }, pointerEvents: 'none', top: item.top, left: item.left, right: item.right, bottom: item.bottom }}>{item.icon}</Box>
//             ))}
//             <Box sx={{ position: 'relative', zIndex: 5, textAlign: 'center', px: '20px', maxWidth: 900 }}>
//                 <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.2, background: 'rgba(218,165,32,0.08)', border: '1px solid rgba(218,165,32,0.25)', color: '#f5c842', fontFamily: "'Cinzel',serif", fontSize: 10, fontWeight: 600, letterSpacing: '3px', textTransform: 'uppercase', px: '22px', py: '7px', borderRadius: '50px', mb: 3, backdropFilter: 'blur(10px)', animation: 'fadeUp .8s ease forwards', '@keyframes fadeUp': { from: { opacity: 0, transform: 'translateY(24px)' }, to: { opacity: 1, transform: 'translateY(0)' } } }}>
//                     <Box sx={{ width: 5, height: 5, borderRadius: '50%', background: '#daa520', animation: 'pulse 2s infinite', '@keyframes pulse': { '0%,100%': { boxShadow: '0 0 0 0 rgba(218,165,32,.7)' }, '50%': { boxShadow: '0 0 0 6px rgba(218,165,32,0)' } } }} />
//                     Maha Shivaratri 2025 — Live Now
//                 </Box>
//                 <Typography sx={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(2.8rem,7vw,6.5rem)', fontWeight: 900, lineHeight: 1.05, color: '#fdf6e3', mb: 1, animation: 'fadeUp .8s .15s ease both' }}>
//                     Enter the<br />
//                     <Box component="span" sx={{ background: 'linear-gradient(135deg,#b8860b,#daa520,#f5c842,#daa520,#b8860b)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Divine Gateway</Box>
//                 </Typography>
//                 <Typography sx={{ fontFamily: "'Crimson Text',serif", fontStyle: 'italic', fontSize: 'clamp(1rem,2vw,1.25rem)', color: 'rgba(253,246,227,0.55)', lineHeight: 1.8, mb: 4.5, animation: 'fadeUp .8s .3s ease both' }}>
//                     Experience sacred temple events, live poojas, and spiritual journeys<br />from the comfort of your soul's home.
//                 </Typography>
//                 <Stack direction="row" alignItems="center" justifyContent="center" gap={0.8} mb={4.5} flexWrap="wrap" sx={{ animation: 'fadeUp .8s .45s ease both' }}>
//                     <Typography sx={{ fontFamily: "'Cinzel',serif", fontSize: 10, color: 'rgba(218,165,32,0.5)', letterSpacing: '2px', textTransform: 'uppercase', mr: 1 }}>Starts in</Typography>
//                     <CdBlock val={d} unit="Days" />
//                     <Typography sx={{ fontFamily: "'Cinzel',serif", fontSize: '1.5rem', color: '#b8860b', alignSelf: 'flex-start', mt: 1 }}>:</Typography>
//                     <CdBlock val={h} unit="Hours" />
//                     <Typography sx={{ fontFamily: "'Cinzel',serif", fontSize: '1.5rem', color: '#b8860b', alignSelf: 'flex-start', mt: 1 }}>:</Typography>
//                     <CdBlock val={m} unit="Mins" />
//                     <Typography sx={{ fontFamily: "'Cinzel',serif", fontSize: '1.5rem', color: '#b8860b', alignSelf: 'flex-start', mt: 1 }}>:</Typography>
//                     <CdBlock val={s} unit="Secs" />
//                     <Box sx={{ fontSize: 20, ml: 1, animation: 'flameDance 1s ease-in-out infinite alternate', '@keyframes flameDance': { from: { transform: 'scaleY(1) rotate(-3deg)' }, to: { transform: 'scaleY(1.15) rotate(3deg)' } } }}>🔥</Box>
//                 </Stack>
//                 <Stack direction="row" alignItems="center" justifyContent="center" gap={1.8} flexWrap="wrap" sx={{ animation: 'fadeUp .8s .6s ease both' }}>
//                     <Button variant="contained" disableElevation sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, px: '38px', py: '16px', borderRadius: '50px', border: 'none', background: 'linear-gradient(135deg,#b8860b,#daa520,#f5c842,#daa520,#b8860b)', color: '#1a1a1a', fontFamily: "'Cinzel',serif", fontWeight: 700, fontSize: 13, letterSpacing: '1px', textTransform: 'none', animation: 'heroPulse 2.5s ease-in-out infinite', '@keyframes heroPulse': { '0%,100%': { boxShadow: '0 0 0 0 rgba(218,165,32,0.5),0 10px 40px rgba(218,165,32,0.4)' }, '50%': { boxShadow: '0 0 0 12px rgba(218,165,32,0),0 10px 40px rgba(218,165,32,0.6)' } }, '&:hover': { transform: 'scale(1.05)' } }}>🙏 Join Virtual Darshan</Button>
//                     <Button variant="outlined" href="#events" sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.2, px: '32px', py: '16px', borderRadius: '50px', borderColor: 'rgba(218,165,32,0.3)', borderWidth: '1.5px', background: 'rgba(218,165,32,0.05)', backdropFilter: 'blur(12px)', color: '#f5c842', fontFamily: "'Cinzel',serif", fontSize: 13, letterSpacing: '1px', textTransform: 'none', '&:hover': { background: 'rgba(218,165,32,0.15)', borderColor: '#daa520', transform: 'scale(1.03)' } }}>📅 View All Events</Button>
//                 </Stack>
//             </Box>
//             <Box sx={{ position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)', zIndex: 5, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1, color: 'rgba(218,165,32,0.4)', fontSize: 10, letterSpacing: '2px', textTransform: 'uppercase', fontFamily: "'Cinzel',serif", animation: 'scrollBounce 2s ease-in-out infinite', '@keyframes scrollBounce': { '0%,100%': { transform: 'translateX(-50%) translateY(0)' }, '50%': { transform: 'translateX(-50%) translateY(8px)' } } }}>
//                 <Box sx={{ width: 1, height: 40, background: 'linear-gradient(180deg,#b8860b,transparent)' }} />
//                 Scroll to Explore
//             </Box>
//         </Box>
//     )
// }

// /* ─────────────────────────────────────
//    STATS BAR
// ───────────────────────────────────── */
// function TempleStatsBar() {
//     return (
//         <Box sx={{ background: 'rgba(218,165,32,0.06)', borderTop: '1px solid rgba(218,165,32,0.2)', borderBottom: '1px solid rgba(218,165,32,0.2)', py: 0, px: { xs: 2, md: '5vw' } }}>
//             {STATS.map((s, i) => (
//                 <React.Fragment key={s.label}>
//                     <Stack direction="row" alignItems="center" justifyContent="center" gap={2} sx={{ py: 2.2 }}>
//                         <Box sx={{ fontSize: 22, filter: 'drop-shadow(0 0 8px rgba(218,165,32,0.5))' }}>{s.icon}</Box>
//                         <Box sx={{ textAlign: 'center' }}>
//                             <Typography sx={{ fontFamily: "'Cinzel',serif", fontWeight: 700, fontSize: '1.3rem', color: '#f5c842', lineHeight: 1 }}>{s.val}</Typography>
//                             <Typography sx={{ fontSize: 10, color: 'rgba(218,165,32,0.5)', letterSpacing: '1.5px', textTransform: 'uppercase' }}>{s.label}</Typography>
//                         </Box>
//                     </Stack>
//                     {i < STATS.length - 1 && (
//                         <Box sx={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(218,165,32,0.5), transparent)', mx: 0 }} />
//                     )}
//                 </React.Fragment>
//             ))}
//         </Box>
//     )
// }

// /* ─────────────────────────────────────
//    EVENTS
// ───────────────────────────────────── */
// function FilterBtn({ label, isActive, onClick }) {
//     return (
//         <Button onClick={onClick} sx={{ fontFamily: "'Cinzel',serif", letterSpacing: '.8px', borderRadius: '50px', textTransform: 'none', border: isActive ? '1px solid transparent' : '1px solid rgba(218,165,32,0.2)', background: isActive ? 'linear-gradient(135deg,#daa520,#f5c842)' : 'rgba(218,165,32,0.06)', backdropFilter: 'blur(10px)', color: isActive ? '#1a1a1a' : 'rgba(253,246,227,0.55)', fontWeight: isActive ? 700 : 400, boxShadow: isActive ? '0 8px 28px rgba(218,165,32,0.45)' : 'none', transform: isActive ? 'translateY(-2px)' : 'none', transition: 'all .3s cubic-bezier(0.16,1,0.3,1)', fontSize: { xs: 9.5, sm: 10.5, md: 11 }, px: { xs: '14px', sm: '18px', md: '22px' }, py: { xs: '7px', sm: '8px', md: '9px' }, '&:hover': { background: isActive ? 'linear-gradient(135deg,#daa520,#f5c842)' : 'rgba(218,165,32,0.12)', borderColor: isActive ? 'transparent' : '#daa520', color: isActive ? '#1a1a1a' : '#f5c842', transform: 'translateY(-2px)', boxShadow: '0 6px 20px rgba(218,165,32,0.2)' } }}>{label}</Button>
//     )
// }

// function EventCard({ event, index }) {
//     return (
//         <Card sx={{ position: 'relative', borderRadius: { xs: '14px', sm: '18px', md: '20px' }, overflow: 'hidden', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(218,165,32,0.2)', backdropFilter: 'blur(16px)', height: '100%', display: 'flex', flexDirection: 'column', cursor: 'pointer', transition: 'all .4s cubic-bezier(0.16,1,0.3,1)', opacity: 0, transform: 'translateY(30px) scale(0.97)', animation: `cardReveal .6s ease ${index * 0.07}s forwards`, '@keyframes cardReveal': { to: { opacity: 1, transform: 'translateY(0) scale(1)' } }, '&:hover': { transform: { xs: 'none', md: 'translateY(-10px) scale(1.02)' }, borderColor: '#daa520', boxShadow: '0 24px 60px rgba(218,165,32,0.25), 0 0 0 1px rgba(218,165,32,0.3)', '& .card-img': { transform: 'scale(1.06)' }, '& .card-glow': { opacity: 1 } } }}>
//             <Box sx={{ position: 'relative', overflow: 'hidden' }}>
//                 <CardMedia component="img" className="card-img" image={event.img} alt={event.title} sx={{ objectFit: 'cover', filter: 'brightness(.85) saturate(1.1)', transition: 'transform .6s ease', height: { xs: 160, sm: 175, md: 180, lg: 190 } }} />
//                 <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(0deg,rgba(26,26,26,0.9) 0%,transparent 60%)', zIndex: 1 }} />
//                 <Box sx={{ position: 'absolute', top: { xs: 10, sm: 14 }, left: { xs: 10, sm: 14 }, zIndex: 2, background: 'linear-gradient(135deg,#daa520,#f5c842)', color: '#1a1a1a', fontFamily: "'Cinzel',serif", fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', borderRadius: '50px', fontSize: { xs: 7.5, sm: 8.5 }, px: { xs: '9px', sm: '12px' }, py: { xs: '4px', sm: '5px' } }}>{event.badge}</Box>
//                 <Box sx={{ position: 'absolute', top: { xs: 10, sm: 14 }, right: { xs: 10, sm: 14 }, zIndex: 2, background: 'rgba(26,26,26,0.8)', border: '1px solid rgba(218,165,32,0.3)', color: '#f5c842', fontWeight: 600, borderRadius: '50px', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', gap: 0.5, fontSize: { xs: 9, sm: 10 }, px: { xs: '8px', sm: '10px' }, py: { xs: '4px', sm: '5px' } }}>✨ {event.prana}</Box>
//             </Box>
//             <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column', position: 'relative', zIndex: 2, p: { xs: 1.8, sm: 2, md: 2.2 }, pb: { xs: '14px !important', sm: '16px !important', md: '18px !important' } }}>
//                 <Typography sx={{ mb: 0.8, filter: 'drop-shadow(0 0 10px rgba(218,165,32,0.5))', fontSize: { xs: 24, sm: 26, md: 28 } }}>{event.deity}</Typography>
//                 <Typography sx={{ fontFamily: "'Cinzel',serif", fontWeight: 700, color: '#fdf6e3', mb: 0.8, lineHeight: 1.3, fontSize: { xs: 12.5, sm: 13.5, md: 14 } }}>{event.title}</Typography>
//                 <Stack direction="row" gap={0.6} flexWrap="wrap" mb={1.2}>
//                     {event.tags?.map(t => (
//                         <Chip key={t} label={t} size="small" sx={{ fontFamily: "'Cinzel',serif", letterSpacing: '.5px', background: 'rgba(218,165,32,0.08)', border: '1px solid rgba(218,165,32,0.15)', color: 'rgba(218,165,32,0.6)', fontSize: { xs: 8.5, sm: 9.5 }, height: { xs: 19, sm: 22 } }} />
//                     ))}
//                 </Stack>
//                 <Typography sx={{ fontFamily: "'Crimson Text',serif", fontStyle: 'italic', color: 'rgba(253,246,227,0.55)', lineHeight: 1.6, flex: 1, fontSize: { xs: 12, sm: 13 }, mb: { xs: 1.4, sm: 1.8 }, display: '-webkit-box', WebkitLineClamp: { xs: 3, sm: 4, md: 'unset' }, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{event.desc}</Typography>
//                 <Stack gap={0.6} sx={{ mb: 2 }}>
//                     {[['📅', event.date], ['🕐', event.time], ['📍', event.location]].map(([icon, text], i) => (
//                         <Stack key={i} direction="row" alignItems="center" gap={0.8}>
//                             <Box sx={{ fontSize: { xs: 11, sm: 12 }, flexShrink: 0 }}>{icon}</Box>
//                             <Typography sx={{ color: 'rgba(253,246,227,0.45)', fontSize: { xs: 10, sm: 11 }, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{text}</Typography>
//                         </Stack>
//                     ))}
//                 </Stack>
//                 <Stack direction="row" alignItems="center" gap={1} mt="auto">
//                     <Button fullWidth variant="contained" disableElevation sx={{ background: 'linear-gradient(135deg,#daa520,#f5c842)', color: '#1a1a1a', fontFamily: "'Cinzel',serif", fontWeight: 700, letterSpacing: '.8px', borderRadius: '50px', textTransform: 'none', fontSize: { xs: 9.5, sm: 10.5 }, py: { xs: 0.8, sm: 1 }, '&:hover': { boxShadow: '0 6px 24px rgba(218,165,32,0.5)', transform: 'scale(1.03)' } }}>RSVP / Join</Button>
//                     <Tooltip title="Set Reminder">
//                         <IconButton sx={{ border: '1px solid rgba(218,165,32,0.2)', background: 'rgba(218,165,32,0.06)', color: '#f5c842', flexShrink: 0, width: { xs: 32, sm: 36 }, height: { xs: 32, sm: 36 }, '&:hover': { background: 'rgba(218,165,32,0.15)', borderColor: '#daa520' } }}>
//                             <NotificationsNoneIcon sx={{ fontSize: { xs: 13, sm: 15 } }} />
//                         </IconButton>
//                     </Tooltip>
//                 </Stack>
//             </CardContent>
//             <Box className="card-glow" sx={{ position: 'absolute', inset: 0, borderRadius: 'inherit', background: 'radial-gradient(circle at 50% 0%,rgba(218,165,32,0.08),transparent 60%)', opacity: 0, transition: 'opacity .4s', pointerEvents: 'none' }} />
//         </Card>
//     )
// }

// function TempleEvents() {
//     const [active, setActive] = useState('all')
//     const filtered = useMemo(() => active === 'all' ? EVENTS : EVENTS.filter(e => e.badge === active), [active])
//     const handleFilter = (value) => {
//         setActive(value)
//         setTimeout(() => { document.getElementById('events')?.scrollIntoView({ behavior: 'smooth', block: 'start' }) }, 50)
//     }
//     return (
//         <Box component="section" id="events" sx={{ background: '#1a1a1a', py: { xs: '60px', sm: '70px', md: '90px' }, px: { xs: '16px', sm: '24px', md: '5vw' } }}>
//             <SectionHead eyebrow="🪷 Sacred Gatherings" title="Upcoming" accent="Temple Events" sub="Immerse yourself in divine celebrations, ancient rituals, and spiritual journeys curated for every devotee." />
//             <Stack direction="row" justifyContent="center" flexWrap="wrap" gap={{ xs: 0.8, sm: 1, md: 1.2 }} sx={{ mb: { xs: 2, sm: 2.5, md: 3 } }}>
//                 {FILTERS.map(f => <FilterBtn key={f.value} label={f.label} isActive={active === f.value} onClick={() => handleFilter(f.value)} />)}
//             </Stack>
//             <Typography sx={{ textAlign: 'center', fontFamily: "'Cinzel',serif", color: 'rgba(218,165,32,0.4)', letterSpacing: '1.5px', mb: { xs: 3, sm: 3.5, md: 4 }, fontSize: { xs: 10, sm: 11 } }}>
//                 <Box component="span" sx={{ color: '#f5c842', fontWeight: 700, fontSize: { xs: 12, sm: 13 } }}>{filtered.length}</Box>{' '}events found
//             </Typography>
//             {filtered.length > 0 ? (
//                 <Grid container spacing={{ xs: 2, sm: 2.5, md: 3 }} alignItems="stretch">
//                     {filtered.map((event, i) => (
//                         <Grid item key={event.id} xs={12} sm={6} md={3} lg={3}>
//                             <EventCard event={event} index={i} />
//                         </Grid>
//                     ))}
//                 </Grid>
//             ) : (
//                 <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', py: { xs: '50px', md: '80px' }, gap: 1.8 }}>
//                     <Box sx={{ filter: 'drop-shadow(0 0 20px rgba(218,165,32,0.4))', animation: 'floatIcon 3s ease-in-out infinite', '@keyframes floatIcon': { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } }, fontSize: { xs: 40, sm: 52 } }}>🙏</Box>
//                     <Typography sx={{ fontFamily: "'Cinzel',serif", fontWeight: 700, color: '#f5c842', fontSize: { xs: 15, sm: 18 } }}>No events in this category yet</Typography>
//                     <Typography sx={{ fontFamily: "'Crimson Text',serif", fontStyle: 'italic', color: 'rgba(253,246,227,0.55)', fontSize: { xs: 13, sm: 14 }, textAlign: 'center' }}>Check back soon — divine gatherings are being planned.</Typography>
//                 </Box>
//             )}
//         </Box>
//     )
// }

// /* ─────────────────────────────────────
//    CALENDAR
// ───────────────────────────────────── */
// function ChakraVisual() {
//     const wrapRef = useRef(null)
//     useEffect(() => {
//         const wrap = wrapRef.current
//         if (!wrap) return
//         const size = wrap.offsetWidth || 400
//         ORBIT_DATA.forEach(o => {
//             const el = document.createElement('div')
//             el.style.cssText = `position:absolute;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:4px;transition:transform .3s;`
//             el.innerHTML = `<div style="width:44px;height:44px;border-radius:50%;background:linear-gradient(135deg,#daa520,#f5c842);display:flex;align-items:center;justify-content:center;font-size:18px;box-shadow:0 0 20px rgba(218,165,32,0.5);border:2px solid rgba(218,165,32,0.4);">${o.icon}</div><span style="font-family:'Cinzel',serif;font-size:8px;color:#f5c842;letter-spacing:.5px;text-align:center;white-space:nowrap;text-shadow:0 0 10px rgba(218,165,32,0.8);">${o.label}</span>`
//             el.addEventListener('mouseenter', () => { el.style.transform = 'scale(1.2)' })
//             el.addEventListener('mouseleave', () => { el.style.transform = 'scale(1)' })
//             const rad = (o.angle - 90) * Math.PI / 180
//             const r = size * o.r / 100
//             el.style.left = (size / 2 + r * Math.cos(rad) - 22) + 'px'
//             el.style.top = (size / 2 + r * Math.sin(rad) - 22) + 'px'
//             wrap.appendChild(el)
//         })
//     }, [])
//     return (
//         <Box ref={wrapRef} sx={{ position: 'relative', width: '100%', aspectRatio: '1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//             {[{ w: '90%', h: '90%', border: '1px dashed rgba(218,165,32,0.2)', dur: '30s', dir: 'normal' }, { w: '72%', h: '72%', border: '1px solid rgba(218,165,32,0.12)', dur: '20s', dir: 'reverse' }, { w: '54%', h: '54%', border: '1px solid rgba(218,165,32,0.18)', dur: '14s', dir: 'normal' }].map((r, i) => (
//                 <Box key={i} sx={{ position: 'absolute', borderRadius: '50%', border: r.border, width: r.w, height: r.h, animation: `chakraSpin${i} ${r.dur} linear infinite ${r.dir}`, [`@keyframes chakraSpin${i}`]: { to: { transform: 'rotate(360deg)' } } }} />
//             ))}
//             <Box sx={{ width: 120, height: 120, borderRadius: '50%', background: 'radial-gradient(circle,rgba(218,165,32,0.2),rgba(218,165,32,0.05))', border: '2px solid rgba(218,165,32,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 48, zIndex: 2, animation: 'centerPulse 4s ease-in-out infinite', '@keyframes centerPulse': { '0%,100%': { boxShadow: '0 0 40px rgba(218,165,32,0.3)' }, '50%': { boxShadow: '0 0 80px rgba(218,165,32,0.6)' } } }}>🕉</Box>
//         </Box>
//     )
// }

// function TempleCalendar() {
//     return (
//         <Box component="section" id="calendar" sx={{ py: '90px', px: { xs: 2, md: '5vw' }, background: 'radial-gradient(ellipse at 50% 50%,rgba(218,165,32,0.05) 0%,transparent 70%),#111111', borderTop: '1px solid rgba(218,165,32,0.2)', borderBottom: '1px solid rgba(218,165,32,0.2)' }}>
//             <SectionHead eyebrow="🌀 Celestial Calendar" title="Sacred" accent="Event Orbits" sub="Navigate the divine calendar — each golden orb holds a sacred event waiting to unfold." />
//             <Grid container spacing={6} alignItems="center">
//                 {/* Chakra visual — LEFT */}
//                 <Grid item xs={12} md={5}>
//                     <Box sx={{ width: '100%', maxWidth: 420, mx: 'auto' }}>
//                         <ChakraVisual />
//                     </Box>
//                 </Grid>
//                 {/* Event list — RIGHT */}
//                 <Grid item xs={12} md={7}>
//                     <Stack gap={1.8}>
//                         {CAL_EVENTS.map((e, i) => (
//                             <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 2, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(218,165,32,0.2)', borderRadius: '16px', p: '16px 20px', cursor: 'pointer', transition: 'all .3s', '&:hover': { background: 'rgba(218,165,32,0.08)', borderColor: '#daa520', transform: 'translateX(6px)', '& .cal-arrow': { color: '#daa520', transform: 'translateX(4px)' } } }}>
//                                 <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', background: 'rgba(218,165,32,0.1)', border: '1px solid rgba(218,165,32,0.2)', borderRadius: '12px', px: '14px', py: '8px', minWidth: 52 }}>
//                                     <Typography sx={{ fontFamily: "'Cinzel',serif", fontSize: '1.4rem', fontWeight: 900, color: '#f5c842', lineHeight: 1 }}>{e.day}</Typography>
//                                     <Typography sx={{ fontSize: 8.5, color: 'rgba(218,165,32,0.5)', letterSpacing: '1.5px', textTransform: 'uppercase', fontFamily: "'Cinzel',serif" }}>{e.mon}</Typography>
//                                 </Box>
//                                 <Box sx={{ flex: 1 }}>
//                                     <Typography sx={{ fontFamily: "'Cinzel',serif", fontSize: 13, fontWeight: 700, color: '#fdf6e3', mb: 0.5 }}>{e.name}</Typography>
//                                     <Typography sx={{ fontSize: 11, color: 'rgba(253,246,227,0.55)' }}>{e.detail}</Typography>
//                                 </Box>
//                                 <Box sx={{ fontSize: 22 }}>{e.icon}</Box>
//                                 <Box className="cal-arrow" sx={{ color: 'rgba(218,165,32,0.3)', fontSize: 16, transition: 'all .3s' }}>›</Box>
//                             </Box>
//                         ))}
//                     </Stack>
//                 </Grid>
//             </Grid>
//         </Box>
//     )
// }

// /* ─────────────────────────────────────
//    NEXUS
// ───────────────────────────────────── */
// function NexusCard({ title, children }) {
//     return (
//         <Box sx={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(218,165,32,0.2)', borderRadius: '20px', p: 3.5, width: '100%', display: 'flex', flexDirection: 'column', transition: 'all .3s', '&:hover': { borderColor: '#daa520', boxShadow: '0 16px 48px rgba(218,165,32,0.15)' } }}>
//             <Typography sx={{ fontFamily: "'Cinzel',serif", fontSize: 14, fontWeight: 700, color: '#f5c842', mb: 2.5, display: 'flex', alignItems: 'center', gap: 1 }}>{title}</Typography>
//             {children}
//         </Box>
//     )
// }

// function TempleNexus() {
//     const [rsvp, setRsvp] = useState(2700)
//     const [selectedPoll, setSelectedPoll] = useState(0)
//     const [liked, setLiked] = useState({})

//     useEffect(() => {
//         const id = setInterval(() => {
//             setRsvp(p => { if (p >= 2847) { clearInterval(id); return 2847 } return p + Math.floor(Math.random() * 3) + 1 })
//         }, 80)
//         return () => clearInterval(id)
//     }, [])

//     return (
//         <Box component="section" id="devotees" sx={{ py: '90px', px: { xs: 2, md: '5vw' }, background: '#1a1a1a' }}>
//             <SectionHead eyebrow="🔱 Devotee Nexus" title="Community" accent="Sacred Space" sub="Connect, share, and grow together in the divine light of community seva." />
//             <Grid container spacing={3} alignItems="stretch">
//                 {/* Column 1 — Live RSVP */}
//                 <Grid item xs={12} md={4} sx={{ display: 'flex' }}>
//                     <NexusCard title="🪔 Live RSVP Counter">
//                         <Box sx={{ textAlign: 'center', py: 2 }}>
//                             <Typography sx={{ fontFamily: "'Cinzel',serif", fontSize: '3.5rem', fontWeight: 900, color: '#f5c842', lineHeight: 1, display: 'block' }}>{rsvp.toLocaleString()}</Typography>
//                             <Typography sx={{ fontSize: 11, color: 'rgba(253,246,227,0.55)', letterSpacing: '1px', textTransform: 'uppercase', mt: 0.8, display: 'block' }}>Devotees Joined Today</Typography>
//                         </Box>
//                         <LinearProgress variant="determinate" value={73} sx={{ my: 2, height: 6, borderRadius: 3, background: 'rgba(218,165,32,0.1)', '& .MuiLinearProgress-bar': { background: 'linear-gradient(135deg,#daa520,#f5c842)', borderRadius: 3 } }} />
//                         <Stack direction="row" justifyContent="space-between" mb={1.8}>
//                             {['0', '73% of daily goal', '3,900'].map(t => <Typography key={t} sx={{ fontSize: 9.5, color: 'rgba(218,165,32,0.4)', fontFamily: "'Cinzel',serif" }}>{t}</Typography>)}
//                         </Stack>
//                         <Stack direction="row" justifyContent="center" gap={0.8} sx={{ mt: 'auto', pt: 2 }}>
//                             {[0, 1, 2, 3, 4].map(i => <Box key={i} sx={{ fontSize: 18, animation: `diyaFlicker 1.5s ease-in-out ${i * .3}s infinite`, [`@keyframes diyaFlicker`]: { '0%,100%': { opacity: 1, transform: 'scale(1)' }, '50%': { opacity: .6, transform: 'scale(.9)' } } }}>🪔</Box>)}
//                         </Stack>
//                     </NexusCard>
//                 </Grid>

//                 {/* Column 2 — Community Poll */}
//                 <Grid item xs={12} md={4} sx={{ display: 'flex' }}>
//                     <NexusCard title="🗳 Community Poll">
//                         <Typography sx={{ fontFamily: "'Crimson Text',serif", fontStyle: 'italic', fontSize: 13, color: 'rgba(253,246,227,0.55)', mb: 2 }}>"What is your preferred Aarti time?"</Typography>
//                         {POLLS.map((p, i) => (
//                             <Box key={i} onClick={() => setSelectedPoll(i)} sx={{ display: 'flex', alignItems: 'center', gap: 1.2, background: selectedPoll === i ? 'rgba(218,165,32,0.15)' : 'rgba(218,165,32,0.05)', border: `1px solid ${selectedPoll === i ? '#daa520' : 'rgba(218,165,32,0.12)'}`, borderRadius: '12px', p: '12px 16px', mb: 1.2, cursor: 'pointer', transition: 'all .25s', '&:hover': { background: 'rgba(218,165,32,0.12)', borderColor: '#daa520' } }}>
//                                 <Typography sx={{ flex: 1, fontSize: 12, color: '#fdf6e3' }}>{p.label}</Typography>
//                                 <Box sx={{ flex: 1, height: 4, background: 'rgba(218,165,32,0.1)', borderRadius: 2, overflow: 'hidden' }}>
//                                     <Box sx={{ height: '100%', width: `${p.pct}%`, background: 'linear-gradient(135deg,#daa520,#f5c842)', borderRadius: 2, transition: 'width .6s ease' }} />
//                                 </Box>
//                                 <Typography sx={{ fontFamily: "'Cinzel',serif", fontSize: 11, color: '#f5c842', minWidth: 32, textAlign: 'right' }}>{p.pct}%</Typography>
//                             </Box>
//                         ))}
//                         <Typography sx={{ fontSize: 10, color: 'rgba(218,165,32,0.35)', mt: 'auto', pt: 2, fontFamily: "'Cinzel',serif", letterSpacing: '.5px' }}>4,218 devotees voted</Typography>
//                     </NexusCard>
//                 </Grid>

//                 {/* Column 3 — Seva Match */}
//                 <Grid item xs={12} md={4} sx={{ display: 'flex' }}>
//                     <NexusCard title="🌸 Seva Match">
//                         <Box sx={{ background: 'rgba(218,165,32,0.05)', border: '1px solid rgba(218,165,32,0.15)', borderRadius: '14px', p: 2, mb: 2 }}>
//                             <Typography sx={{ fontFamily: "'Cinzel',serif", fontSize: 12, color: '#f5c842', mb: 1.2, display: 'flex', alignItems: 'center', gap: 1 }}>🤖 Smart Seva Assistant</Typography>
//                             <Typography sx={{ fontSize: 11, color: 'rgba(253,246,227,0.55)', mb: 1.2 }}>Select your interests:</Typography>
//                             <Stack direction="row" flexWrap="wrap" gap={0.5} mb={1.5}>
//                                 {SEVA_TAGS.map(t => <Chip key={t} label={t} size="small" clickable sx={{ fontFamily: "'Cinzel',serif", fontSize: 10, background: 'rgba(218,165,32,0.1)', border: '1px solid rgba(218,165,32,0.2)', color: '#f5c842', '&:hover': { background: 'rgba(218,165,32,0.2)' } }} />)}
//                             </Stack>
//                             <Button fullWidth variant="contained" disableElevation sx={{ mt: 1.5, background: 'linear-gradient(135deg,#daa520,#f5c842)', color: '#1a1a1a', fontFamily: "'Cinzel',serif", fontSize: 11, fontWeight: 700, letterSpacing: '.8px', borderRadius: '50px', textTransform: 'none', '&:hover': { boxShadow: '0 6px 24px rgba(218,165,32,0.4)' } }}>Find My Seva Match ✨</Button>
//                         </Box>
//                         <Typography sx={{ fontFamily: "'Cinzel',serif", fontSize: 14, fontWeight: 700, color: '#f5c842', mb: 1.5, display: 'flex', alignItems: 'center', gap: 1 }}>📜 Devotee Stories</Typography>
//                         {STORIES.map((s, i) => (
//                             <Box key={i} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, pb: 1.8, mb: 1.8, borderBottom: i < STORIES.length - 1 ? '1px solid rgba(218,165,32,0.08)' : 'none' }}>
//                                 <Avatar sx={{ width: 40, height: 40, background: 'linear-gradient(135deg,#daa520,#f5c842)', fontSize: 16, border: '2px solid rgba(218,165,32,0.3)', flexShrink: 0 }}>{s.avatar}</Avatar>
//                                 <Box sx={{ flex: 1 }}>
//                                     <Stack direction="row" alignItems="center" gap={0.8} mb={0.5}>
//                                         <Typography sx={{ fontFamily: "'Cinzel',serif", fontSize: 11.5, fontWeight: 700, color: '#f5c842' }}>{s.name}</Typography>
//                                         {s.badge && <Chip label="Guru Glow" size="small" sx={{ background: 'linear-gradient(135deg,#daa520,#f5c842)', color: '#1a1a1a', fontSize: 8, height: 16, fontWeight: 700 }} />}
//                                     </Stack>
//                                     <Typography sx={{ fontFamily: "'Crimson Text',serif", fontStyle: 'italic', fontSize: 12.5, color: 'rgba(253,246,227,0.55)', lineHeight: 1.6, mb: 0.8 }}>{s.text}</Typography>
//                                     <Stack direction="row" gap={1.5}>
//                                         <Box onClick={() => setLiked(p => ({ ...p, [i]: !p[i] }))} sx={{ display: 'flex', alignItems: 'center', gap: 0.5, cursor: 'pointer', fontSize: 11, color: liked[i] ? '#f5c842' : 'rgba(218,165,32,0.4)', transition: 'color .2s' }}>
//                                             <FavoriteIcon sx={{ fontSize: 12 }} /> {s.likes + (liked[i] ? 1 : 0)}
//                                         </Box>
//                                         <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, cursor: 'pointer', fontSize: 11, color: 'rgba(218,165,32,0.4)' }}>
//                                             <ChatBubbleOutlineIcon sx={{ fontSize: 12 }} /> Reply
//                                         </Box>
//                                     </Stack>
//                                 </Box>
//                             </Box>
//                         ))}
//                     </NexusCard>
//                 </Grid>
//             </Grid>
//         </Box>
//     )
// }

// /* ─────────────────────────────────────
//    FOOTER
// ───────────────────────────────────── */
// function TempleFooter() {
//     return (
//         <Box component="footer" sx={{ background: '#111111', borderTop: '1px solid rgba(218,165,32,0.2)', pt: '60px', pb: '30px', px: { xs: 2, md: '5vw' } }}>
//             <Grid container spacing={5} mb={6}>
//                 <Grid item xs={12} md={4}>
//                     <Box component="a" href="#" sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, textDecoration: 'none', mb: 2 }}>
//                         <Box sx={{ width: 42, height: 42, borderRadius: '50%', background: 'linear-gradient(135deg,#b8860b,#daa520,#f5c842,#daa520,#b8860b)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, boxShadow: '0 0 20px rgba(218,165,32,0.5)' }}>🕉</Box>
//                         <Box>
//                             <Typography sx={{ fontFamily: "'Cinzel',serif", fontWeight: 700, fontSize: 16, color: '#f5c842', letterSpacing: '2px', lineHeight: 1 }}>Darshan Journey</Typography>
//                             <Typography sx={{ fontSize: 8, color: 'rgba(218,165,32,0.5)', letterSpacing: '3px', textTransform: 'uppercase' }}>Sacred Temple Platform</Typography>
//                         </Box>
//                     </Box>
//                     <Typography sx={{ fontFamily: "'Crimson Text',serif", fontStyle: 'italic', fontSize: 13, color: 'rgba(253,246,227,0.55)', lineHeight: 1.8, maxWidth: 280, mb: 2.5 }}>
//                         Connecting millions of devotees to sacred temple experiences, live poojas, and spiritual journeys across India and the world.
//                     </Typography>
//                     <Stack direction="row" gap={1.2}>
//                         {['📘', '📸', '🐦', '▶️'].map(icon => (
//                             <IconButton key={icon} size="small" sx={{ width: 36, height: 36, border: '1px solid rgba(218,165,32,0.2)', background: 'rgba(218,165,32,0.06)', fontSize: 14, '&:hover': { background: 'rgba(218,165,32,0.15)', borderColor: '#daa520' } }}>{icon}</IconButton>
//                         ))}
//                     </Stack>
//                 </Grid>
//                 {FOOTER_COLS.map(col => (
//                     <Grid item xs={6} sm={4} md={8 / 3} key={col.title}>
//                         <Typography sx={{ fontFamily: "'Cinzel',serif", fontSize: 12, fontWeight: 700, color: '#f5c842', letterSpacing: '1.5px', textTransform: 'uppercase', mb: 2.2 }}>{col.title}</Typography>
//                         <Stack gap={1.3}>
//                             {col.links.map(link => (
//                                 <Typography key={link} component="a" href="#" sx={{ fontSize: 12.5, color: 'rgba(253,246,227,0.55)', textDecoration: 'none', fontFamily: "'Crimson Text',serif", transition: 'color .2s', '&:hover': { color: '#f5c842' } }}>{link}</Typography>
//                             ))}
//                         </Stack>
//                     </Grid>
//                 ))}
//             </Grid>
//             <Divider sx={{ borderColor: 'rgba(218,165,32,0.2)', mb: 3 }} />
//             <Stack direction="row" justifyContent="space-between" alignItems="center" flexWrap="wrap" gap={1.5}>
//                 <Typography sx={{ fontSize: 11, color: 'rgba(218,165,32,0.35)', fontFamily: "'Cinzel',serif", letterSpacing: '.5px' }}>© 2025 Darshan Journey. All rights reserved. 🕉 Om Namah Shivaya</Typography>
//                 <Box sx={{ fontSize: 20, filter: 'drop-shadow(0 0 8px rgba(218,165,32,0.5))' }}>🪷</Box>
//             </Stack>
//         </Box>
//     )
// }

// /* ─────────────────────────────────────
//    ROOT APP
// ───────────────────────────────────── */
// export default function EventsPage() {
//     return (
//         <ThemeProvider theme={theme}>
//             <CssBaseline />
//             <Box sx={{ pt: '64px' }}>
//                 <TempleHero />
//                 <TempleStatsBar />
//                 <TempleEvents />
//                 <TempleCalendar />
//                 <TempleNexus />
//             </Box>
//         </ThemeProvider>
//     )
// }


// new events section


import React, { useState, useEffect, useRef, useMemo } from 'react'
import {
    Box, Typography, Button, Stack, Grid,
    AppBar, Toolbar, IconButton, Badge,
    Card, CardMedia, CardContent, Chip, Tooltip,
    LinearProgress, Avatar, Divider,
    CssBaseline,
} from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import NotificationsIcon from '@mui/icons-material/Notifications'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'

/* ─────────────────────────────────────
   THEME
───────────────────────────────────── */
const theme = createTheme({
    palette: {
        mode: 'dark',
        background: { default: '#1a1a1a', paper: '#111111' },
        primary: { main: '#daa520', light: '#f5c842', dark: '#b8860b' },
        text: { primary: '#fdf6e3', secondary: 'rgba(253,246,227,0.55)' },
    },
    typography: {
        fontFamily: "'Inter', sans-serif",
        h1: { fontFamily: "'Cinzel', serif" },
        h2: { fontFamily: "'Cinzel', serif" },
        h3: { fontFamily: "'Cinzel', serif" },
        h4: { fontFamily: "'Cinzel', serif" },
    },
    shape: { borderRadius: 16 },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                'html': { scrollBehavior: 'smooth' },
                'body': { background: '#1a1a1a', color: '#fdf6e3', overflowX: 'hidden', fontFamily: "'Inter', sans-serif" },
                '::-webkit-scrollbar': { width: '4px' },
                '::-webkit-scrollbar-track': { background: '#111111' },
                '::-webkit-scrollbar-thumb': { background: '#b8860b', borderRadius: '2px' },
            },
        },
        MuiCard: { styleOverrides: { root: { backgroundImage: 'none' } } },
    },
})

/* ─────────────────────────────────────
   DATA
───────────────────────────────────── */
const EVENTS = [
    { id: 1, img: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&q=80', badge: 'Festival', deity: '🔱', title: 'Maha Shivaratri', tags: ['Shiva Pooja', 'All Night'], desc: 'The great night of Lord Shiva — an all-night vigil of devotion, fasting, and divine chanting.', date: 'Feb 26', time: '6:00 PM – 6:00 AM', location: 'Chidambaram Temple', prana: '+150 pts' },
    { id: 2, img: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600&q=80', badge: 'Pooja', deity: '🪷', title: 'Saraswati Puja', tags: ['Learning', 'Blessings'], desc: 'Seek the blessings of Goddess Saraswati for wisdom, arts, and knowledge on this auspicious day.', date: 'Mar 2', time: '8:00 AM – 12:00 PM', location: 'Mylapore Temple', prana: '+80 pts' },
    { id: 3, img: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&q=80', badge: 'Satsang', deity: '📿', title: 'Vedic Discourse', tags: ['Wisdom', 'Meditation'], desc: 'Join our revered Guru for an immersive session on the Bhagavad Gita and path to liberation.', date: 'Mar 8', time: '5:00 PM – 7:00 PM', location: 'Virtual + Chennai', prana: '+60 pts' },
    { id: 4, img: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=80', badge: 'Seva', deity: '🌸', title: 'Annadanam Seva', tags: ['Community', 'Food'], desc: 'Participate in the sacred act of feeding 5,000 devotees as an offering to the divine.', date: 'Mar 15', time: '9:00 AM – 2:00 PM', location: 'Tirupati Temple', prana: '+200 pts' },
    { id: 5, img: 'https://images.unsplash.com/photo-1609766857585-a8e6e4e2e517?w=600&q=80', badge: 'Festival', deity: '🪔', title: 'Karthigai Deepam', tags: ['Light Festival', 'Prayers'], desc: 'The festival of lights — thousands of lamps illuminate the sacred hills in divine splendour.', date: 'Mar 22', time: 'Dusk – Midnight', location: 'Thiruvannamalai', prana: '+120 pts' },
    { id: 6, img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80', badge: 'Virtual', deity: '🕉', title: 'Online Abhishekam', tags: ['Virtual', 'Shiva'], desc: 'Participate in the sacred Abhishekam ritual from anywhere in the world via live stream.', date: 'Mar 28', time: '7:00 AM – 9:00 AM', location: 'Live Stream', prana: '+50 pts' },
    { id: 7, img: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600&q=80', badge: 'Festival', deity: '🌺', title: 'Panguni Uthiram', tags: ['Murugan', 'Procession'], desc: 'The celestial wedding of Lord Murugan — a grand chariot procession through sacred streets.', date: 'Apr 5', time: 'All Day', location: 'Palani Temple', prana: '+180 pts' },
    { id: 8, img: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&q=80', badge: 'Satsang', deity: '🎵', title: 'Carnatic Bhajan Night', tags: ['Music', 'Devotion'], desc: 'An evening of soul-stirring classical devotional music by renowned artists from Tamil Nadu.', date: 'Apr 10', time: '6:30 PM – 10:00 PM', location: 'Kapaleeshwarar Temple', prana: '+70 pts' },
    { id: 9, img: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&q=80', badge: 'Pooja', deity: '🔱', title: 'Pradosham Pooja', tags: ['Shiva', 'Monthly'], desc: 'The sacred bi-monthly Pradosham — an auspicious time to worship Lord Shiva and seek blessings.', date: 'Apr 14', time: '5:30 PM – 7:30 PM', location: 'Multiple Temples', prana: '+90 pts' },
    { id: 10, img: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=80', badge: 'Seva', deity: '📚', title: 'Vedic School Seva', tags: ['Education', 'Children'], desc: 'Volunteer to teach Vedic chanting and Sanskrit to underprivileged children at our gurukul.', date: 'Apr 20', time: '9:00 AM – 1:00 PM', location: 'Chennai Gurukul', prana: '+250 pts' },
    { id: 11, img: 'https://images.unsplash.com/photo-1609766857585-a8e6e4e2e517?w=600&q=80', badge: 'Festival', deity: '🌙', title: 'Aadi Perukku', tags: ['Water Festival', 'Goddess'], desc: 'Celebrate the sacred rivers with offerings to Goddess Kaveri — a joyful water festival.', date: 'May 3', time: 'Morning', location: 'Kaveri River Banks', prana: '+100 pts' },
    { id: 12, img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80', badge: 'Virtual', deity: '🧘', title: 'Meditation Retreat', tags: ['Wellness', 'Peace'], desc: 'A 3-day virtual meditation retreat guided by senior monks — find stillness in the divine.', date: 'May 10', time: '3 Days', location: 'Online', prana: '+300 pts' },
]

const CAL_EVENTS = [
    { day: '26', mon: 'Feb', name: 'Maha Shivaratri', detail: 'Chidambaram • All Night', icon: '🔱' },
    { day: '02', mon: 'Mar', name: 'Saraswati Puja', detail: 'Mylapore • 8:00 AM', icon: '🪷' },
    { day: '15', mon: 'Mar', name: 'Annadanam Seva', detail: 'Tirupati • 9:00 AM', icon: '🌸' },
    { day: '22', mon: 'Mar', name: 'Karthigai Deepam', detail: 'Thiruvannamalai • Dusk', icon: '🪔' },
    { day: '05', mon: 'Apr', name: 'Panguni Uthiram', detail: 'Palani • All Day', icon: '🌺' },
    { day: '14', mon: 'Apr', name: 'Pradosham Pooja', detail: 'Multiple Temples • 5:30 PM', icon: '🔱' },
]

const STORIES = [
    { avatar: '🙏', name: 'Priya Sharma', badge: true, text: '"The virtual Darshan brought tears to my eyes. I felt the divine presence from 10,000 miles away."', likes: 248 },
    { avatar: '🕉', name: 'Rajan Pillai', badge: false, text: '"Seva Match connected me with the perfect volunteer role. Annadanam changed my life."', likes: 183 },
    { avatar: '🪷', name: 'Meena Krishnan', badge: true, text: '"Prana Points motivated me to attend more events. Now I have Guru Glow status!"', likes: 312 },
]

const FILTERS = [
    { label: '✦ All Events', value: 'all' },
    { label: '🎊 Festivals', value: 'Festival' },
    { label: '🧘 Satsangs', value: 'Satsang' },
    { label: '🌸 Community Seva', value: 'Seva' },
    { label: '🪔 Poojas', value: 'Pooja' },
    { label: '🌐 Virtual', value: 'Virtual' },
]

const ORBIT_DATA = [
    { icon: '🔱', label: 'Shivaratri', angle: 0, r: 42 },
    { icon: '🪷', label: 'Saraswati', angle: 72, r: 42 },
    { icon: '🌸', label: 'Annadanam', angle: 144, r: 42 },
    { icon: '🪔', label: 'Deepam', angle: 216, r: 42 },
    { icon: '🌺', label: 'Panguni', angle: 288, r: 42 },
]

const STATS = [
    { icon: '🙏', val: '1.2M+', label: 'Devotees' },
    { icon: '🪔', val: '340+', label: 'Events This Year' },
    { icon: '🛕', val: '85', label: 'Partner Temples' },
    { icon: '⭐', val: '4.9', label: 'Devotee Rating' },
    { icon: '🌍', val: '42', label: 'Countries Reached' },
]

const NAV_LINKS = [
    { label: 'Home', href: '#home' },
    { label: 'Events', href: '#events' },
    { label: 'Calendar', href: '#calendar' },
    { label: 'Seva', href: '#seva' },
    { label: 'Community', href: '#devotees' },
]

const FOOTER_COLS = [
    { title: 'Explore', links: ['Temple Directory', 'Live Darshan', 'Festival Calendar', 'Virtual Poojas', 'Pilgrimage Tours'] },
    { title: 'Community', links: ['Seva Opportunities', 'Devotee Stories', 'Guru Glow Program', 'Prana Points', 'Forums'] },
    { title: 'Support', links: ['About Us', 'Contact', 'Privacy Policy', 'Terms of Service', 'Donate'] },
]

const POLLS = [
    { label: '🌅 Morning 6:00 AM', pct: 62 },
    { label: '☀️ Noon 12:00 PM', pct: 24 },
    { label: '🌙 Evening 7:00 PM', pct: 14 },
]

const SEVA_TAGS = ['🍱 Annadanam', '📖 Teaching', '🎵 Music', '🌿 Gardening', '🏥 Medical']

/* ─────────────────────────────────────
   SHARED: SECTION HEADER
───────────────────────────────────── */
function SectionHead({ eyebrow, title, accent, sub }) {
    return (
        <Box sx={{ textAlign: 'center', mb: { xs: 4, sm: 5, md: 7 } }}>
            <Typography sx={{ fontFamily: "'Cinzel',serif", fontWeight: 600, color: '#b8860b', letterSpacing: '3px', textTransform: 'uppercase', mb: 1.5, fontSize: { xs: 8, sm: 9, md: 9.5 } }}>{eyebrow}</Typography>
            <Typography variant="h2" sx={{ fontFamily: "'Cinzel',serif", fontWeight: 900, lineHeight: 1.1, color: '#fdf6e3', mb: 1.8, fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem', lg: '3rem' } }}>
                {title}{' '}
                <Box component="span" sx={{ background: 'linear-gradient(135deg,#b8860b,#daa520,#f5c842,#daa520,#b8860b)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{accent}</Box>
            </Typography>
            <Typography sx={{ fontFamily: "'Crimson Text',serif", fontStyle: 'italic', color: 'rgba(253,246,227,0.55)', maxWidth: 520, mx: 'auto', lineHeight: 1.8, mb: 2, fontSize: { xs: '0.9rem', sm: '1rem', md: '1.05rem' } }}>{sub}</Typography>
            <Box sx={{ width: 60, height: 2, background: 'linear-gradient(135deg,#daa520,#f5c842)', borderRadius: 1, mx: 'auto' }} />
        </Box>
    )
}

/* ─────────────────────────────────────
   NAVBAR
───────────────────────────────────── */
function TempleNavbar() {
    const navSx = {
        logoIcon: {
            width: 42, height: 42, borderRadius: '50%',
            background: 'linear-gradient(135deg,#b8860b,#daa520,#f5c842,#daa520,#b8860b)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18,
            animation: 'logoGlow 3s ease-in-out infinite',
            '@keyframes logoGlow': { '0%,100%': { boxShadow: '0 0 20px rgba(218,165,32,0.4)' }, '50%': { boxShadow: '0 0 40px rgba(218,165,32,0.9)' } },
        },
        navLink: {
            fontFamily: "'Cinzel',serif", fontSize: 11.5, color: 'rgba(253,246,227,0.5)',
            textDecoration: 'none', px: 1.8, py: 0.9, borderRadius: '50px', letterSpacing: '.8px',
            minWidth: 0, textTransform: 'none',
            '&:hover': { color: '#f5c842', background: 'rgba(218,165,32,0.1)' },
        },
        bellBtn: {
            width: 38, height: 38, borderRadius: '50%', border: '1px solid rgba(218,165,32,0.2)',
            background: 'rgba(218,165,32,0.06)', color: '#f5c842',
            '&:hover': { background: 'rgba(218,165,32,0.15)', borderColor: '#daa520' },
        },
        ctaBtn: {
            fontFamily: "'Cinzel',serif", fontSize: 11, fontWeight: 700, letterSpacing: '1px',
            borderRadius: '50px', px: 2.5, py: 1,
            background: 'linear-gradient(135deg,#daa520,#f5c842)', color: '#1a1a1a', textTransform: 'none',
            boxShadow: '0 4px 20px rgba(218,165,32,0.35)',
            '&:hover': { boxShadow: '0 8px 32px rgba(218,165,32,0.6)', transform: 'scale(1.05)' },
        },
    }
    return (
        <AppBar position="fixed" elevation={0} sx={{ background: 'rgba(17,17,17,0.85)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(218,165,32,0.2)' }}>
            <Toolbar sx={{ px: { xs: 2, md: '5vw' }, py: 0.5, justifyContent: 'space-between', minHeight: '64px !important' }}>
                <Box component="a" href="#" sx={{ display: 'flex', alignItems: 'center', gap: 1.5, textDecoration: 'none' }}>
                    <Box sx={navSx.logoIcon}>🕉</Box>
                    <Box>
                        <Typography sx={{ fontFamily: "'Cinzel',serif", fontWeight: 700, fontSize: 16, color: '#f5c842', letterSpacing: '2px', lineHeight: 1 }}>Darshan Journey</Typography>
                        <Typography sx={{ fontSize: 8, color: 'rgba(218,165,32,0.5)', letterSpacing: '3px', textTransform: 'uppercase' }}>Sacred Temple Platform</Typography>
                    </Box>
                </Box>
                <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 0.3 }}>
                    {NAV_LINKS.map(link => (
                        <Button key={link.label} href={link.href} sx={navSx.navLink}>{link.label}</Button>
                    ))}
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2 }}>
                    <IconButton sx={navSx.bellBtn}>
                        <Badge badgeContent={3} color="warning" sx={{ '& .MuiBadge-badge': { fontSize: 9, minWidth: 16, height: 16, background: '#daa520', color: '#1a1a1a' } }}>
                            <NotificationsIcon sx={{ fontSize: 17 }} />
                        </Badge>
                    </IconButton>
                    <Button variant="contained" disableElevation sx={navSx.ctaBtn}>Join Darshan</Button>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

/* ─────────────────────────────────────
   HERO
───────────────────────────────────── */
function useCountdown(targetISO) {
    const [vals, setVals] = useState({ d: '00', h: '00', m: '00', s: '00' })
    useEffect(() => {
        const target = new Date(targetISO).getTime()
        const tick = () => {
            const diff = Math.max(0, target - Date.now())
            const pad = n => String(Math.floor(n)).padStart(2, '0')
            setVals({ d: pad(diff / 86400000), h: pad((diff % 86400000) / 3600000), m: pad((diff % 3600000) / 60000), s: pad((diff % 60000) / 1000) })
        }
        tick()
        const id = setInterval(tick, 1000)
        return () => clearInterval(id)
    }, [targetISO])
    return vals
}

function HeroCanvas() {
    const ref = useRef(null)
    useEffect(() => {
        const cv = ref.current
        const ctx = cv.getContext('2d')
        let W, H, pts = [], raf
        const resize = () => { W = cv.width = window.innerWidth; H = cv.height = window.innerHeight }
        window.addEventListener('resize', resize); resize()
        for (let i = 0; i < 120; i++) pts.push({ x: Math.random() * W, y: Math.random() * H, r: Math.random() * 2 + 0.3, vx: (Math.random() - .5) * .3, vy: -(Math.random() * .5 + .1), a: Math.random() * .8 + .1, da: Math.random() * .005 + .002, gold: Math.random() > .5 })
        const draw = () => {
            ctx.clearRect(0, 0, W, H)
            pts.forEach(p => {
                p.x += p.vx; p.y += p.vy; p.a -= p.da
                if (p.a <= 0) { p.x = Math.random() * W; p.y = H + 5; p.a = Math.random() * .8 + .2 }
                if (p.x < 0) p.x = W; if (p.x > W) p.x = 0
                ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
                ctx.fillStyle = p.gold ? `rgba(218,165,32,${p.a * .6})` : `rgba(245,200,66,${p.a * .4})`
                ctx.fill()
            })
            raf = requestAnimationFrame(draw)
        }
        draw()
        return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize) }
    }, [])
    return <canvas ref={ref} style={{ position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none' }} />
}

function CdBlock({ val, unit }) {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', background: 'rgba(218,165,32,0.07)', border: '1px solid rgba(218,165,32,0.2)', borderRadius: '12px', px: 2, py: 1.5, minWidth: 64, backdropFilter: 'blur(10px)', boxShadow: '0 0 20px rgba(218,165,32,0.1)' }}>
            <Typography sx={{ fontFamily: "'Cinzel',serif", fontSize: '1.8rem', fontWeight: 900, color: '#f5c842', lineHeight: 1 }}>{val}</Typography>
            <Typography sx={{ fontSize: 8, color: 'rgba(218,165,32,0.5)', letterSpacing: '2px', textTransform: 'uppercase', mt: 0.5 }}>{unit}</Typography>
        </Box>
    )
}

function TempleHero() {
    const { d, h, m, s } = useCountdown('2025-02-26T18:00:00')
    return (
        <Box component="section" id="home" sx={{ position: 'relative', width: '100%', height: 'calc(100vh - 64px)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', background: 'radial-gradient(ellipse at 50% 60%,rgba(218,165,32,0.08) 0%,transparent 65%),#111111' }}>
            <HeroCanvas />
            <Box sx={{ position: 'absolute', inset: 0, zIndex: 0, backgroundImage: "url('https://images.unsplash.com/photo-1587474260584-136574528ed5?w=1600&q=80')", backgroundSize: 'cover', backgroundPosition: 'center', opacity: .12, transform: 'scale(1.05)', animation: 'heroBgDrift 20s ease-in-out infinite alternate', '@keyframes heroBgDrift': { from: { transform: 'scale(1.05) translateY(0)' }, to: { transform: 'scale(1.1) translateY(-20px)' } } }} />
            <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', zIndex: 2, pointerEvents: 'none' }}>
                <Box sx={{ width: 'min(70vw,700px)', height: 'min(70vw,700px)', borderRadius: '50%', border: '1px solid rgba(218,165,32,0.08)', position: 'relative', animation: 'mandalaSpin 60s linear infinite', '@keyframes mandalaSpin': { to: { transform: 'rotate(360deg)' } }, '&::before': { content: '""', position: 'absolute', inset: '8%', borderRadius: '50%', border: '1px solid rgba(218,165,32,0.06)', animation: 'mandalaSpin 40s linear infinite reverse' }, '&::after': { content: '""', position: 'absolute', inset: '18%', borderRadius: '50%', border: '1px solid rgba(218,165,32,0.1)', animation: 'mandalaSpin 25s linear infinite' } }}>
                    <Box sx={{ position: 'absolute', inset: '28%', borderRadius: '50%', border: '1px dashed rgba(218,165,32,0.15)', animation: 'mandalaSpin 15s linear infinite reverse' }} />
                    <Box sx={{ position: 'absolute', inset: '42%', borderRadius: '50%', background: 'radial-gradient(circle,rgba(218,165,32,0.15),transparent 70%)', animation: 'corePulse 4s ease-in-out infinite', '@keyframes corePulse': { '0%,100%': { transform: 'scale(1)', opacity: .6 }, '50%': { transform: 'scale(1.3)', opacity: 1 } } }} />
                </Box>
            </Box>
            {[{ icon: '🔱', top: '20%', left: '8%', delay: '0s', size: 'clamp(28px,4vw,48px)' }, { icon: '🪷', top: '25%', right: '8%', delay: '2s', size: 'clamp(28px,4vw,48px)' }, { icon: '🪔', bottom: '28%', left: '12%', delay: '1s', size: 'clamp(22px,3vw,36px)' }, { icon: '📿', bottom: '32%', right: '10%', delay: '3s', size: 'clamp(22px,3vw,36px)' }].map((item, i) => (
                <Box key={i} sx={{ position: 'absolute', zIndex: 3, fontSize: item.size, filter: 'drop-shadow(0 0 20px rgba(218,165,32,0.6))', animation: `deityFloat${i} 6s ease-in-out ${item.delay} infinite`, [`@keyframes deityFloat${i}`]: { '0%,100%': { transform: 'translateY(0) rotate(-3deg)' }, '50%': { transform: 'translateY(-18px) rotate(3deg)' } }, pointerEvents: 'none', top: item.top, left: item.left, right: item.right, bottom: item.bottom }}>{item.icon}</Box>
            ))}
            <Box sx={{ position: 'relative', zIndex: 5, textAlign: 'center', px: '20px', maxWidth: 900 }}>
                <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.2, background: 'rgba(218,165,32,0.08)', border: '1px solid rgba(218,165,32,0.25)', color: '#f5c842', fontFamily: "'Cinzel',serif", fontSize: 10, fontWeight: 600, letterSpacing: '3px', textTransform: 'uppercase', px: '22px', py: '7px', borderRadius: '50px', mb: 3, backdropFilter: 'blur(10px)', animation: 'fadeUp .8s ease forwards', '@keyframes fadeUp': { from: { opacity: 0, transform: 'translateY(24px)' }, to: { opacity: 1, transform: 'translateY(0)' } } }}>
                    <Box sx={{ width: 5, height: 5, borderRadius: '50%', background: '#daa520', animation: 'pulse 2s infinite', '@keyframes pulse': { '0%,100%': { boxShadow: '0 0 0 0 rgba(218,165,32,.7)' }, '50%': { boxShadow: '0 0 0 6px rgba(218,165,32,0)' } } }} />
                    Maha Shivaratri 2025 — Live Now
                </Box>
                <Typography sx={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(2.8rem,7vw,6.5rem)', fontWeight: 900, lineHeight: 1.05, color: '#fdf6e3', mb: 1, animation: 'fadeUp .8s .15s ease both' }}>
                    Enter the<br />
                    <Box component="span" sx={{ background: 'linear-gradient(135deg,#b8860b,#daa520,#f5c842,#daa520,#b8860b)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Divine Gateway</Box>
                </Typography>
                <Typography sx={{ fontFamily: "'Crimson Text',serif", fontStyle: 'italic', fontSize: 'clamp(1rem,2vw,1.25rem)', color: 'rgba(253,246,227,0.55)', lineHeight: 1.8, mb: 4.5, animation: 'fadeUp .8s .3s ease both' }}>
                    Experience sacred temple events, live poojas, and spiritual journeys<br />from the comfort of your soul's home.
                </Typography>
                <Stack direction="row" alignItems="center" justifyContent="center" gap={0.8} mb={4.5} flexWrap="wrap" sx={{ animation: 'fadeUp .8s .45s ease both' }}>
                    <Typography sx={{ fontFamily: "'Cinzel',serif", fontSize: 10, color: 'rgba(218,165,32,0.5)', letterSpacing: '2px', textTransform: 'uppercase', mr: 1 }}>Starts in</Typography>
                    <CdBlock val={d} unit="Days" />
                    <Typography sx={{ fontFamily: "'Cinzel',serif", fontSize: '1.5rem', color: '#b8860b', alignSelf: 'flex-start', mt: 1 }}>:</Typography>
                    <CdBlock val={h} unit="Hours" />
                    <Typography sx={{ fontFamily: "'Cinzel',serif", fontSize: '1.5rem', color: '#b8860b', alignSelf: 'flex-start', mt: 1 }}>:</Typography>
                    <CdBlock val={m} unit="Mins" />
                    <Typography sx={{ fontFamily: "'Cinzel',serif", fontSize: '1.5rem', color: '#b8860b', alignSelf: 'flex-start', mt: 1 }}>:</Typography>
                    <CdBlock val={s} unit="Secs" />
                    <Box sx={{ fontSize: 20, ml: 1, animation: 'flameDance 1s ease-in-out infinite alternate', '@keyframes flameDance': { from: { transform: 'scaleY(1) rotate(-3deg)' }, to: { transform: 'scaleY(1.15) rotate(3deg)' } } }}>🔥</Box>
                </Stack>
                <Stack direction="row" alignItems="center" justifyContent="center" gap={1.8} flexWrap="wrap" sx={{ animation: 'fadeUp .8s .6s ease both' }}>
                    <Button variant="contained" disableElevation sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, px: '38px', py: '16px', borderRadius: '50px', border: 'none', background: 'linear-gradient(135deg,#b8860b,#daa520,#f5c842,#daa520,#b8860b)', color: '#1a1a1a', fontFamily: "'Cinzel',serif", fontWeight: 700, fontSize: 13, letterSpacing: '1px', textTransform: 'none', animation: 'heroPulse 2.5s ease-in-out infinite', '@keyframes heroPulse': { '0%,100%': { boxShadow: '0 0 0 0 rgba(218,165,32,0.5),0 10px 40px rgba(218,165,32,0.4)' }, '50%': { boxShadow: '0 0 0 12px rgba(218,165,32,0),0 10px 40px rgba(218,165,32,0.6)' } }, '&:hover': { transform: 'scale(1.05)' } }}>🙏 Join Virtual Darshan</Button>
                    <Button variant="outlined" href="#events" sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.2, px: '32px', py: '16px', borderRadius: '50px', borderColor: 'rgba(218,165,32,0.3)', borderWidth: '1.5px', background: 'rgba(218,165,32,0.05)', backdropFilter: 'blur(12px)', color: '#f5c842', fontFamily: "'Cinzel',serif", fontSize: 13, letterSpacing: '1px', textTransform: 'none', '&:hover': { background: 'rgba(218,165,32,0.15)', borderColor: '#daa520', transform: 'scale(1.03)' } }}>📅 View All Events</Button>
                </Stack>
            </Box>
            <Box sx={{ position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)', zIndex: 5, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1, color: 'rgba(218,165,32,0.4)', fontSize: 10, letterSpacing: '2px', textTransform: 'uppercase', fontFamily: "'Cinzel',serif", animation: 'scrollBounce 2s ease-in-out infinite', '@keyframes scrollBounce': { '0%,100%': { transform: 'translateX(-50%) translateY(0)' }, '50%': { transform: 'translateX(-50%) translateY(8px)' } } }}>
                <Box sx={{ width: 1, height: 40, background: 'linear-gradient(180deg,#b8860b,transparent)' }} />
                Scroll to Explore
            </Box>
        </Box>
    )
}

/* ─────────────────────────────────────
   STATS BAR
───────────────────────────────────── */
function TempleStatsBar() {
    return (
        <Box sx={{ background: 'rgba(218,165,32,0.06)', borderTop: '1px solid rgba(218,165,32,0.2)', borderBottom: '1px solid rgba(218,165,32,0.2)', py: 3, px: { xs: 2, md: '5vw' } }}>
            <Stack 
                direction={{ xs: 'column', md: 'row' }} 
                justifyContent="space-between" 
                alignItems="center" 
                divider={<Divider orientation="vertical" flexItem sx={{ borderColor: 'rgba(218,165,32,0.2)', display: { xs: 'none', md: 'block' } }} />}
                spacing={{ xs: 3, md: 0 }}
            >
                {STATS.map((s) => (
                    <Stack key={s.label} direction="row" alignItems="center" gap={2} sx={{ flex: 1, justifyContent: 'center' }}>
                        <Box sx={{ fontSize: 24, filter: 'drop-shadow(0 0 8px rgba(218,165,32,0.5))' }}>{s.icon}</Box>
                        <Box>
                            <Typography sx={{ fontFamily: "'Cinzel',serif", fontWeight: 700, fontSize: '1.4rem', color: '#f5c842', lineHeight: 1 }}>{s.val}</Typography>
                            <Typography sx={{ fontSize: 9, color: 'rgba(218,165,32,0.5)', letterSpacing: '1.5px', textTransform: 'uppercase' }}>{s.label}</Typography>
                        </Box>
                    </Stack>
                ))}
            </Stack>
        </Box>
    )
}

/* ─────────────────────────────────────
   EVENTS
───────────────────────────────────── */
function FilterBtn({ label, isActive, onClick }) {
    return (
        <Button onClick={onClick} sx={{ fontFamily: "'Cinzel',serif", letterSpacing: '.8px', borderRadius: '50px', textTransform: 'none', border: isActive ? '1px solid transparent' : '1px solid rgba(218,165,32,0.2)', background: isActive ? 'linear-gradient(135deg,#daa520,#f5c842)' : 'rgba(218,165,32,0.06)', backdropFilter: 'blur(10px)', color: isActive ? '#1a1a1a' : 'rgba(253,246,227,0.55)', fontWeight: isActive ? 700 : 400, boxShadow: isActive ? '0 8px 28px rgba(218,165,32,0.45)' : 'none', transform: isActive ? 'translateY(-2px)' : 'none', transition: 'all .3s cubic-bezier(0.16,1,0.3,1)', fontSize: { xs: 9.5, sm: 10.5, md: 11 }, px: { xs: '14px', sm: '18px', md: '22px' }, py: { xs: '7px', sm: '8px', md: '9px' }, '&:hover': { background: isActive ? 'linear-gradient(135deg,#daa520,#f5c842)' : 'rgba(218,165,32,0.12)', borderColor: isActive ? 'transparent' : '#daa520', color: isActive ? '#1a1a1a' : '#f5c842', transform: 'translateY(-2px)', boxShadow: '0 6px 20px rgba(218,165,32,0.2)' } }}>{label}</Button>
    )
}

function EventCard({ event, index }) {
    return (
        <Card sx={{ position: 'relative', borderRadius: { xs: '14px', sm: '18px', md: '20px' }, overflow: 'hidden', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(218,165,32,0.2)', backdropFilter: 'blur(16px)', height: '100%', width:'320px', display: 'flex', flexDirection: 'column', cursor: 'pointer', transition: 'all .4s cubic-bezier(0.16,1,0.3,1)', opacity: 0, transform: 'translateY(30px) scale(0.97)', animation: `cardReveal .6s ease ${index * 0.07}s forwards`, '@keyframes cardReveal': { to: { opacity: 1, transform: 'translateY(0) scale(1)' } }, '&:hover': { transform: { xs: 'none', md: 'translateY(-10px) scale(1.02)' }, borderColor: '#daa520', boxShadow: '0 24px 60px rgba(218,165,32,0.25), 0 0 0 1px rgba(218,165,32,0.3)', '& .card-img': { transform: 'scale(1.06)' }, '& .card-glow': { opacity: 1 } } }}>
            <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                <CardMedia component="img" className="card-img" image={event.img} alt={event.title} sx={{ objectFit: 'cover', filter: 'brightness(.85) saturate(1.1)', transition: 'transform .6s ease', height: { xs: 160, sm: 175, md: 180, lg: 190 } }} />
                <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(0deg,rgba(26,26,26,0.9) 0%,transparent 60%)', zIndex: 1 }} />
                <Box sx={{ position: 'absolute', top: { xs: 10, sm: 14 }, left: { xs: 10, sm: 14 }, zIndex: 2, background: 'linear-gradient(135deg,#daa520,#f5c842)', color: '#1a1a1a', fontFamily: "'Cinzel',serif", fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', borderRadius: '50px', fontSize: { xs: 7.5, sm: 8.5 }, px: { xs: '9px', sm: '12px' }, py: { xs: '4px', sm: '5px' } }}>{event.badge}</Box>
                <Box sx={{ position: 'absolute', top: { xs: 10, sm: 14 }, right: { xs: 10, sm: 14 }, zIndex: 2, background: 'rgba(26,26,26,0.8)', border: '1px solid rgba(218,165,32,0.3)', color: '#f5c842', fontWeight: 600, borderRadius: '50px', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', gap: 0.5, fontSize: { xs: 9, sm: 10 }, px: { xs: '8px', sm: '10px' }, py: { xs: '4px', sm: '5px' } }}>✨ {event.prana}</Box>
            </Box>
            <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column', position: 'relative', zIndex: 2, p: { xs: 1.8, sm: 2, md: 2.2 }, pb: { xs: '14px !important', sm: '16px !important', md: '18px !important' } }}>
                <Typography sx={{ mb: 0.8, filter: 'drop-shadow(0 0 10px rgba(218,165,32,0.5))', fontSize: { xs: 24, sm: 26, md: 28 } }}>{event.deity}</Typography>
                <Typography sx={{ fontFamily: "'Cinzel',serif", fontWeight: 700, color: '#fdf6e3', mb: 0.8, lineHeight: 1.3, fontSize: { xs: 12.5, sm: 13.5, md: 14 } }}>{event.title}</Typography>
                <Stack direction="row" gap={0.6} flexWrap="wrap" mb={1.2}>
                    {event.tags?.map(t => (
                        <Chip key={t} label={t} size="small" sx={{ fontFamily: "'Cinzel',serif", letterSpacing: '.5px', background: 'rgba(218,165,32,0.08)', border: '1px solid rgba(218,165,32,0.15)', color: 'rgba(218,165,32,0.6)', fontSize: { xs: 8.5, sm: 9.5 }, height: { xs: 19, sm: 22 } }} />
                    ))}
                </Stack>
                <Typography sx={{ fontFamily: "'Crimson Text',serif", fontStyle: 'italic', color: 'rgba(253,246,227,0.55)', lineHeight: 1.6, flex: 1, fontSize: { xs: 12, sm: 13 }, mb: { xs: 1.4, sm: 1.8 }, display: '-webkit-box', WebkitLineClamp: { xs: 3, sm: 4, md: 'unset' }, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{event.desc}</Typography>
                <Stack gap={0.6} sx={{ mb: 2 }}>
                    {[['📅', event.date], ['🕐', event.time], ['📍', event.location]].map(([icon, text], i) => (
                        <Stack key={i} direction="row" alignItems="center" gap={0.8}>
                            <Box sx={{ fontSize: { xs: 11, sm: 12 }, flexShrink: 0 }}>{icon}</Box>
                            <Typography sx={{ color: 'rgba(253,246,227,0.45)', fontSize: { xs: 10, sm: 11 }, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{text}</Typography>
                        </Stack>
                    ))}
                </Stack>
                <Stack direction="row" alignItems="center" gap={1} mt="auto">
                    <Button fullWidth variant="contained" disableElevation sx={{ background: 'linear-gradient(135deg,#daa520,#f5c842)', color: '#1a1a1a', fontFamily: "'Cinzel',serif", fontWeight: 700, letterSpacing: '.8px', borderRadius: '50px', textTransform: 'none', fontSize: { xs: 9.5, sm: 10.5 }, py: { xs: 0.8, sm: 1 }, '&:hover': { boxShadow: '0 6px 24px rgba(218,165,32,0.5)', transform: 'scale(1.03)' } }}>RSVP / Join</Button>
                    <Tooltip title="Set Reminder">
                        <IconButton sx={{ border: '1px solid rgba(218,165,32,0.2)', background: 'rgba(218,165,32,0.06)', color: '#f5c842', flexShrink: 0, width: { xs: 32, sm: 36 }, height: { xs: 32, sm: 36 }, '&:hover': { background: 'rgba(218,165,32,0.15)', borderColor: '#daa520' } }}>
                            <NotificationsNoneIcon sx={{ fontSize: { xs: 13, sm: 15 } }} />
                        </IconButton>
                    </Tooltip>
                </Stack>
            </CardContent>
            <Box className="card-glow" sx={{ position: 'absolute', inset: 0, borderRadius: 'inherit', background: 'radial-gradient(circle at 50% 0%,rgba(218,165,32,0.08),transparent 60%)', opacity: 0, transition: 'opacity .4s', pointerEvents: 'none' }} />
        </Card>
    )
}

function TempleEvents() {
    const [active, setActive] = useState('all')
    const filtered = useMemo(() => active === 'all' ? EVENTS : EVENTS.filter(e => e.badge === active), [active])
    const handleFilter = (value) => {
        setActive(value)
        setTimeout(() => { document.getElementById('events')?.scrollIntoView({ behavior: 'smooth', block: 'start' }) }, 50)
    }
    return (
        <Box component="section" id="events" sx={{ background: '#1a1a1a', py: { xs: '60px', sm: '70px', md: '90px' }, px: { xs: '16px', sm: '24px', md: '5vw' } }}>
            <SectionHead eyebrow="🪷 Sacred Gatherings" title="Upcoming" accent="Temple Events" sub="Immerse yourself in divine celebrations, ancient rituals, and spiritual journeys curated for every devotee." />
            <Stack direction="row" justifyContent="center" flexWrap="wrap" gap={{ xs: 0.8, sm: 1, md: 1.2 }} sx={{ mb: { xs: 2, sm: 2.5, md: 3 } }}>
                {FILTERS.map(f => <FilterBtn key={f.value} label={f.label} isActive={active === f.value} onClick={() => handleFilter(f.value)} />)}
            </Stack>
            <Typography sx={{ textAlign: 'center', fontFamily: "'Cinzel',serif", color: 'rgba(218,165,32,0.4)', letterSpacing: '1.5px', mb: { xs: 3, sm: 3.5, md: 4 }, fontSize: { xs: 10, sm: 11 } }}>
                <Box component="span" sx={{ color: '#f5c842', fontWeight: 700, fontSize: { xs: 12, sm: 13 } }}>{filtered.length}</Box>{' '}events found
            </Typography>
            {filtered.length > 0 ? (
                <Grid container spacing={{ xs: 2, sm: 2.5, md: 3 }} alignItems="stretch">
                    {filtered.map((event, i) => (
                        <Grid item key={event.id} xs={12} sm={6} md={3}>
                            <EventCard event={event} index={i} />
                        </Grid>
                    ))}
                </Grid>
            ) : (
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', py: { xs: '50px', md: '80px' }, gap: 1.8 }}>
                    <Box sx={{ filter: 'drop-shadow(0 0 20px rgba(218,165,32,0.4))', animation: 'floatIcon 3s ease-in-out infinite', '@keyframes floatIcon': { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } }, fontSize: { xs: 40, sm: 52 } }}>🙏</Box>
                    <Typography sx={{ fontFamily: "'Cinzel',serif", fontWeight: 700, color: '#f5c842', fontSize: { xs: 15, sm: 18 } }}>No events in this category yet</Typography>
                    <Typography sx={{ fontFamily: "'Crimson Text',serif", fontStyle: 'italic', color: 'rgba(253,246,227,0.55)', fontSize: { xs: 13, sm: 14 }, textAlign: 'center' }}>Check back soon — divine gatherings are being planned.</Typography>
                </Box>
            )}
        </Box>
    )
}

/* ─────────────────────────────────────
   CALENDAR
───────────────────────────────────── */
function ChakraVisual() {
    const wrapRef = useRef(null)
    useEffect(() => {
        const wrap = wrapRef.current
        if (!wrap) return
        wrap.innerHTML = '' // Clear to prevent duplicates on re-render
        const size = wrap.offsetWidth || 400
        ORBIT_DATA.forEach(o => {
            const el = document.createElement('div')
            el.style.cssText = `position:absolute;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:4px;transition:transform .3s;`
            el.innerHTML = `<div style="width:44px;height:44px;border-radius:50%;background:linear-gradient(135deg,#daa520,#f5c842);display:flex;align-items:center;justify-content:center;font-size:18px;box-shadow:0 0 20px rgba(218,165,32,0.5);border:2px solid rgba(218,165,32,0.4);">${o.icon}</div><span style="font-family:'Cinzel',serif;font-size:8px;color:#f5c842;letter-spacing:.5px;text-align:center;white-space:nowrap;text-shadow:0 0 10px rgba(218,165,32,0.8);">${o.label}</span>`
            el.addEventListener('mouseenter', () => { el.style.transform = 'scale(1.2)' })
            el.addEventListener('mouseleave', () => { el.style.transform = 'scale(1)' })
            const rad = (o.angle - 90) * Math.PI / 180
            const r = size * o.r / 100
            el.style.left = (size / 2 + r * Math.cos(rad) - 22) + 'px'
            el.style.top = (size / 2 + r * Math.sin(rad) - 22) + 'px'
            wrap.appendChild(el)
        })
    }, [])
    return (
        <Box ref={wrapRef} sx={{ position: 'relative', width: '100%', aspectRatio: '1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {[{ w: '90%', h: '90%', border: '1px dashed rgba(218,165,32,0.2)', dur: '30s', dir: 'normal' }, { w: '72%', h: '72%', border: '1px solid rgba(218,165,32,0.12)', dur: '20s', dir: 'reverse' }, { w: '54%', h: '54%', border: '1px solid rgba(218,165,32,0.18)', dur: '14s', dir: 'normal' }].map((r, i) => (
                <Box key={i} sx={{ position: 'absolute', borderRadius: '50%', border: r.border, width: r.w, height: r.h, animation: `chakraSpin${i} ${r.dur} linear infinite ${r.dir}`, [`@keyframes chakraSpin${i}`]: { to: { transform: 'rotate(360deg)' } } }} />
            ))}
            <Box sx={{ width: 120, height: 120, borderRadius: '50%', background: 'radial-gradient(circle,rgba(218,165,32,0.2),rgba(218,165,32,0.05))', border: '2px solid rgba(218,165,32,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 48, zIndex: 2, animation: 'centerPulse 4s ease-in-out infinite', '@keyframes centerPulse': { '0%,100%': { boxShadow: '0 0 40px rgba(218,165,32,0.3)' }, '50%': { boxShadow: '0 0 80px rgba(218,165,32,0.6)' } } }}>🕉</Box>
        </Box>
    )
}

function TempleCalendar() {
    return (
        <Box component="section" id="calendar" sx={{ py: '90px', px: { xs: 2, md: '5vw' }, background: 'radial-gradient(ellipse at 50% 50%,rgba(218,165,32,0.05) 0%,transparent 70%),#111111', borderTop: '1px solid rgba(218,165,32,0.2)', borderBottom: '1px solid rgba(218,165,32,0.2)' }}>
            <SectionHead eyebrow="🌀 Celestial Calendar" title="Sacred" accent="Event Orbits" sub="Navigate the divine calendar — each golden orb holds a sacred event waiting to unfold." />
            <Grid container spacing={6} alignItems="center">
                <Grid item xs={12} md={5}>
                    <Box sx={{ width: '100%', maxWidth: 420, mx: 'auto' }}>
                        <ChakraVisual />
                    </Box>
                </Grid>
                <Grid item xs={12} md={7}>
                    <Stack gap={1.8}>
                        {CAL_EVENTS.map((e, i) => (
                            <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 2, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(218,165,32,0.2)', borderRadius: '16px', p: '16px 20px', cursor: 'pointer', transition: 'all .3s', '&:hover': { background: 'rgba(218,165,32,0.08)', borderColor: '#daa520', transform: 'translateX(6px)', '& .cal-arrow': { color: '#daa520', transform: 'translateX(4px)' } } }}>
                                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', background: 'rgba(218,165,32,0.1)', border: '1px solid rgba(218,165,32,0.2)', borderRadius: '12px', px: '14px', py: '8px', minWidth: 52 }}>
                                    <Typography sx={{ fontFamily: "'Cinzel',serif", fontSize: '1.4rem', fontWeight: 900, color: '#f5c842', lineHeight: 1 }}>{e.day}</Typography>
                                    <Typography sx={{ fontSize: 8.5, color: 'rgba(218,165,32,0.5)', letterSpacing: '1.5px', textTransform: 'uppercase', fontFamily: "'Cinzel',serif" }}>{e.mon}</Typography>
                                </Box>
                                <Box sx={{ flex: 1 }}>
                                    <Typography sx={{ fontFamily: "'Cinzel',serif", fontSize: 13, fontWeight: 700, color: '#fdf6e3', mb: 0.5 }}>{e.name}</Typography>
                                    <Typography sx={{ fontSize: 11, color: 'rgba(253,246,227,0.55)' }}>{e.detail}</Typography>
                                </Box>
                                <Box sx={{ fontSize: 22 }}>{e.icon}</Box>
                                <Box className="cal-arrow" sx={{ color: 'rgba(218,165,32,0.3)', fontSize: 16, transition: 'all .3s' }}>›</Box>
                            </Box>
                        ))}
                    </Stack>
                </Grid>
            </Grid>
        </Box>
    )
}

/* ─────────────────────────────────────
   NEXUS
───────────────────────────────────── */
function NexusCard({ title, children }) {
    return (
        <Box sx={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(218,165,32,0.2)', borderRadius: '20px', p: 3.5, width: '100%', display: 'flex', flexDirection: 'column', transition: 'all .3s', '&:hover': { borderColor: '#daa520', boxShadow: '0 16px 48px rgba(218,165,32,0.15)' } }}>
            <Typography sx={{ fontFamily: "'Cinzel',serif", fontSize: 14, fontWeight: 700, color: '#f5c842', mb: 2.5, display: 'flex', alignItems: 'center', gap: 1 }}>{title}</Typography>
            {children}
        </Box>
    )
}

function TempleNexus() {
    const [rsvp, setRsvp] = useState(2700)
    const [selectedPoll, setSelectedPoll] = useState(0)
    const [liked, setLiked] = useState({})

    useEffect(() => {
        const id = setInterval(() => {
            setRsvp(p => { if (p >= 2847) { clearInterval(id); return 2847 } return p + Math.floor(Math.random() * 3) + 1 })
        }, 80)
        return () => clearInterval(id)
    }, [])

    return (
        <Box component="section" id="devotees" sx={{ py: '90px', px: { xs: 2, md: '5vw' }, background: '#1a1a1a' }}>
            <SectionHead eyebrow="🔱 Devotee Nexus" title="Community" accent="Sacred Space" sub="Connect, share, and grow together in the divine light of community seva." />
            <Grid container spacing={3} alignItems="stretch">
                <Grid item xs={12} md={4} sx={{ display: 'flex' }}>
                    <NexusCard title="🪔 Live RSVP Counter">
                        <Box sx={{ textAlign: 'center', py: 2 }}>
                            <Typography sx={{ fontFamily: "'Cinzel',serif", fontSize: '3.5rem', fontWeight: 900, color: '#f5c842', lineHeight: 1, display: 'block' }}>{rsvp.toLocaleString()}</Typography>
                            <Typography sx={{ fontSize: 11, color: 'rgba(253,246,227,0.55)', letterSpacing: '1px', textTransform: 'uppercase', mt: 0.8, display: 'block' }}>Devotees Joined Today</Typography>
                        </Box>
                        <LinearProgress variant="determinate" value={73} sx={{ my: 2, height: 6, borderRadius: 3, background: 'rgba(218,165,32,0.1)', '& .MuiLinearProgress-bar': { background: 'linear-gradient(135deg,#daa520,#f5c842)', borderRadius: 3 } }} />
                        <Stack direction="row" justifyContent="space-between" mb={1.8}>
                            {['0', '73% of daily goal', '3,900'].map(t => <Typography key={t} sx={{ fontSize: 9.5, color: 'rgba(218,165,32,0.4)', fontFamily: "'Cinzel',serif" }}>{t}</Typography>)}
                        </Stack>
                        <Stack direction="row" justifyContent="center" gap={0.8} sx={{ mt: 'auto', pt: 2 }}>
                            {[0, 1, 2, 3, 4].map(i => <Box key={i} sx={{ fontSize: 18, animation: `diyaFlicker 1.5s ease-in-out ${i * .3}s infinite`, [`@keyframes diyaFlicker`]: { '0%,100%': { opacity: 1, transform: 'scale(1)' }, '50%': { opacity: .6, transform: 'scale(.9)' } } }}>🪔</Box>)}
                        </Stack>
                    </NexusCard>
                </Grid>

                <Grid item xs={12} md={4} sx={{ display: 'flex' }}>
                    <NexusCard title="🗳 Community Poll">
                        <Typography sx={{ fontFamily: "'Crimson Text',serif", fontStyle: 'italic', fontSize: 13, color: 'rgba(253,246,227,0.55)', mb: 2 }}>"What is your preferred Aarti time?"</Typography>
                        {POLLS.map((p, i) => (
                            <Box key={i} onClick={() => setSelectedPoll(i)} sx={{ display: 'flex', alignItems: 'center', gap: 1.2, background: selectedPoll === i ? 'rgba(218,165,32,0.15)' : 'rgba(218,165,32,0.05)', border: `1px solid ${selectedPoll === i ? '#daa520' : 'rgba(218,165,32,0.12)'}`, borderRadius: '12px', p: '12px 16px', mb: 1.2, cursor: 'pointer', transition: 'all .25s', '&:hover': { background: 'rgba(218,165,32,0.12)', borderColor: '#daa520' } }}>
                                <Typography sx={{ flex: 1, fontSize: 12, color: '#fdf6e3' }}>{p.label}</Typography>
                                <Box sx={{ flex: 1, height: 4, background: 'rgba(218,165,32,0.1)', borderRadius: 2, overflow: 'hidden' }}>
                                    <Box sx={{ height: '100%', width: `${p.pct}%`, background: 'linear-gradient(135deg,#daa520,#f5c842)', borderRadius: 2, transition: 'width .6s ease' }} />
                                </Box>
                                <Typography sx={{ fontFamily: "'Cinzel',serif", fontSize: 11, color: '#f5c842', minWidth: 32, textAlign: 'right' }}>{p.pct}%</Typography>
                            </Box>
                        ))}
                        <Typography sx={{ fontSize: 10, color: 'rgba(218,165,32,0.35)', mt: 'auto', pt: 2, fontFamily: "'Cinzel',serif", letterSpacing: '.5px' }}>4,218 devotees voted</Typography>
                    </NexusCard>
                </Grid>

                <Grid item xs={12} md={4} sx={{ display: 'flex' }}>
                    <NexusCard title="🌸 Seva Match">
                        <Box sx={{ background: 'rgba(218,165,32,0.05)', border: '1px solid rgba(218,165,32,0.15)', borderRadius: '14px', p: 2, mb: 2 }}>
                            <Typography sx={{ fontFamily: "'Cinzel',serif", fontSize: 12, color: '#f5c842', mb: 1.2, display: 'flex', alignItems: 'center', gap: 1 }}>🤖 Smart Seva Assistant</Typography>
                            <Typography sx={{ fontSize: 11, color: 'rgba(253,246,227,0.55)', mb: 1.2 }}>Select your interests:</Typography>
                            <Stack direction="row" flexWrap="wrap" gap={0.5} mb={1.5}>
                                {SEVA_TAGS.map(t => <Chip key={t} label={t} size="small" clickable sx={{ fontFamily: "'Cinzel',serif", fontSize: 10, background: 'rgba(218,165,32,0.1)', border: '1px solid rgba(218,165,32,0.2)', color: '#f5c842', '&:hover': { background: 'rgba(218,165,32,0.2)' } }} />)}
                            </Stack>
                            <Button fullWidth variant="contained" disableElevation sx={{ mt: 1.5, background: 'linear-gradient(135deg,#daa520,#f5c842)', color: '#1a1a1a', fontFamily: "'Cinzel',serif", fontSize: 11, fontWeight: 700, letterSpacing: '.8px', borderRadius: '50px', textTransform: 'none', '&:hover': { boxShadow: '0 6px 24px rgba(218,165,32,0.4)' } }}>Find My Seva Match ✨</Button>
                        </Box>
                        <Typography sx={{ fontFamily: "'Cinzel',serif", fontSize: 14, fontWeight: 700, color: '#f5c842', mb: 1.5, display: 'flex', alignItems: 'center', gap: 1 }}>📜 Devotee Stories</Typography>
                        {STORIES.map((s, i) => (
                            <Box key={i} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, pb: 1.8, mb: 1.8, borderBottom: i < STORIES.length - 1 ? '1px solid rgba(218,165,32,0.08)' : 'none' }}>
                                <Avatar sx={{ width: 40, height: 40, background: 'linear-gradient(135deg,#daa520,#f5c842)', fontSize: 16, border: '2px solid rgba(218,165,32,0.3)', flexShrink: 0 }}>{s.avatar}</Avatar>
                                <Box sx={{ flex: 1 }}>
                                    <Stack direction="row" alignItems="center" gap={0.8} mb={0.5}>
                                        <Typography sx={{ fontFamily: "'Cinzel',serif", fontSize: 11.5, fontWeight: 700, color: '#f5c842' }}>{s.name}</Typography>
                                        {s.badge && <Chip label="Guru Glow" size="small" sx={{ background: 'linear-gradient(135deg,#daa520,#f5c842)', color: '#1a1a1a', fontSize: 8, height: 16, fontWeight: 700 }} />}
                                    </Stack>
                                    <Typography sx={{ fontFamily: "'Crimson Text',serif", fontStyle: 'italic', fontSize: 12.5, color: 'rgba(253,246,227,0.55)', lineHeight: 1.6, mb: 0.8 }}>{s.text}</Typography>
                                    <Stack direction="row" gap={1.5}>
                                        <Box onClick={() => setLiked(p => ({ ...p, [i]: !p[i] }))} sx={{ display: 'flex', alignItems: 'center', gap: 0.5, cursor: 'pointer', fontSize: 11, color: liked[i] ? '#f5c842' : 'rgba(218,165,32,0.4)', transition: 'color .2s' }}>
                                            <FavoriteIcon sx={{ fontSize: 12 }} /> {s.likes + (liked[i] ? 1 : 0)}
                                        </Box>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, cursor: 'pointer', fontSize: 11, color: 'rgba(218,165,32,0.4)' }}>
                                            <ChatBubbleOutlineIcon sx={{ fontSize: 12 }} /> Reply
                                        </Box>
                                    </Stack>
                                </Box>
                            </Box>
                        ))}
                    </NexusCard>
                </Grid>
            </Grid>
        </Box>
    )
}

/* ─────────────────────────────────────
   FOOTER
───────────────────────────────────── */
function TempleFooter() {
    return (
        <Box component="footer" sx={{ background: '#111111', borderTop: '1px solid rgba(218,165,32,0.2)', pt: '60px', pb: '30px', px: { xs: 2, md: '5vw' } }}>
            <Grid container spacing={5} mb={6}>
                <Grid item xs={12} md={4}>
                    <Box component="a" href="#" sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, textDecoration: 'none', mb: 2 }}>
                        <Box sx={{ width: 42, height: 42, borderRadius: '50%', background: 'linear-gradient(135deg,#b8860b,#daa520,#f5c842,#daa520,#b8860b)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, boxShadow: '0 0 20px rgba(218,165,32,0.5)' }}>🕉</Box>
                        <Box>
                            <Typography sx={{ fontFamily: "'Cinzel',serif", fontWeight: 700, fontSize: 16, color: '#f5c842', letterSpacing: '2px', lineHeight: 1 }}>Darshan Journey</Typography>
                            <Typography sx={{ fontSize: 8, color: 'rgba(218,165,32,0.5)', letterSpacing: '3px', textTransform: 'uppercase' }}>Sacred Temple Platform</Typography>
                        </Box>
                    </Box>
                    <Typography sx={{ fontFamily: "'Crimson Text',serif", fontStyle: 'italic', fontSize: 13, color: 'rgba(253,246,227,0.55)', lineHeight: 1.8, maxWidth: 280, mb: 2.5 }}>
                        Connecting millions of devotees to sacred temple experiences, live poojas, and spiritual journeys across India and the world.
                    </Typography>
                    <Stack direction="row" gap={1.2}>
                        {['📘', '📸', '🐦', '▶️'].map(icon => (
                            <IconButton key={icon} size="small" sx={{ width: 36, height: 36, border: '1px solid rgba(218,165,32,0.2)', background: 'rgba(218,165,32,0.06)', fontSize: 14, '&:hover': { background: 'rgba(218,165,32,0.15)', borderColor: '#daa520' } }}>{icon}</IconButton>
                        ))}
                    </Stack>
                </Grid>
                {FOOTER_COLS.map(col => (
                    <Grid item xs={6} sm={4} md={8 / 3} key={col.title}>
                        <Typography sx={{ fontFamily: "'Cinzel',serif", fontSize: 12, fontWeight: 700, color: '#f5c842', letterSpacing: '1.5px', textTransform: 'uppercase', mb: 2.2 }}>{col.title}</Typography>
                        <Stack gap={1.3}>
                            {col.links.map(link => (
                                <Typography key={link} component="a" href="#" sx={{ fontSize: 12.5, color: 'rgba(253,246,227,0.55)', textDecoration: 'none', fontFamily: "'Crimson Text',serif", transition: 'color .2s', '&:hover': { color: '#f5c842' } }}>{link}</Typography>
                            ))}
                        </Stack>
                    </Grid>
                ))}
            </Grid>
            <Divider sx={{ borderColor: 'rgba(218,165,32,0.2)', mb: 3 }} />
            <Stack direction="row" justifyContent="space-between" alignItems="center" flexWrap="wrap" gap={1.5}>
                <Typography sx={{ fontSize: 11, color: 'rgba(218,165,32,0.35)', fontFamily: "'Cinzel',serif", letterSpacing: '.5px' }}>© 2025 Darshan Journey. All rights reserved. 🕉 Om Namah Shivaya</Typography>
                <Box sx={{ fontSize: 20, filter: 'drop-shadow(0 0 8px rgba(218,165,32,0.5))' }}>🪷</Box>
            </Stack>
        </Box>
    )
}

/* ─────────────────────────────────────
   ROOT APP
───────────────────────────────────── */
export default function EventsPage() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box sx={{ pt: '64px' }}>
                <TempleNavbar />
                <TempleHero />
                <TempleStatsBar />
                <TempleEvents />
                <TempleCalendar />
                <TempleNexus />
                <TempleFooter />
            </Box>
        </ThemeProvider>
    )
}
