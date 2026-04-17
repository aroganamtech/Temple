import React from 'react'
import { Box, Typography, Grid, Stack, IconButton, Divider } from '@mui/material'

const FOOTER_COLS = [
    { title: 'Explore', links: ['Temple Directory', 'Live Darshan', 'Festival Calendar', 'Virtual Poojas', 'Pilgrimage Tours'] },
    { title: 'Community', links: ['Seva Opportunities', 'Devotee Stories', 'Guru Glow Program', 'Prana Points', 'Forums'] },
    { title: 'Support', links: ['About Us', 'Contact', 'Privacy Policy', 'Terms of Service', 'Donate'] },
]

export default function TempleFooter() {
    return (
        <Box component="footer" sx={{ background: '#111111', borderTop: '1px solid rgba(218,165,32,0.2)', pt: '60px', pb: '30px', px: { xs: 2, md: '5vw' } }}>
            <Grid container spacing={5} mb={6}>

                {/* Brand */}
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
                            <IconButton key={icon} size="small" sx={{ width: 36, height: 36, border: '1px solid rgba(218,165,32,0.2)', background: 'rgba(218,165,32,0.06)', fontSize: 14, '&:hover': { background: 'rgba(218,165,32,0.15)', borderColor: '#daa520' } }}>
                                {icon}
                            </IconButton>
                        ))}
                    </Stack>
                </Grid>

                {/* Link columns */}
                {FOOTER_COLS.map(col => (
                    <Grid item xs={6} sm={4} md={8 / 3} key={col.title}>
                        <Typography sx={{ fontFamily: "'Cinzel',serif", fontSize: 12, fontWeight: 700, color: '#f5c842', letterSpacing: '1.5px', textTransform: 'uppercase', mb: 2.2 }}>
                            {col.title}
                        </Typography>
                        <Stack gap={1.3}>
                            {col.links.map(link => (
                                <Typography key={link} component="a" href="#" sx={{ fontSize: 12.5, color: 'rgba(253,246,227,0.55)', textDecoration: 'none', fontFamily: "'Crimson Text',serif", transition: 'color .2s', '&:hover': { color: '#f5c842' } }}>
                                    {link}
                                </Typography>
                            ))}
                        </Stack>
                    </Grid>
                ))}
            </Grid>

            <Divider sx={{ borderColor: 'rgba(218,165,32,0.2)', mb: 3 }} />

            <Stack direction="row" justifyContent="space-between" alignItems="center" flexWrap="wrap" gap={1.5}>
                <Typography sx={{ fontSize: 11, color: 'rgba(218,165,32,0.35)', fontFamily: "'Cinzel',serif", letterSpacing: '.5px' }}>
                    © 2025 Darshan Journey. All rights reserved. 🕉 Om Namah Shivaya
                </Typography>
                <Box sx={{ fontSize: 20, filter: 'drop-shadow(0 0 8px rgba(218,165,32,0.5))' }}>🪷</Box>
            </Stack>
        </Box>
    )
}
