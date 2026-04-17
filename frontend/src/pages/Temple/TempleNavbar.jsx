import React from 'react'
import {
    AppBar, Toolbar, Box, Typography, Button,
    IconButton, Badge,
} from '@mui/material'
import NotificationsIcon from '@mui/icons-material/Notifications'

const NAV_LINKS = [
    { label: 'Home', href: '#home' },
    { label: 'Events', href: '#events' },
    { label: 'Calendar', href: '#calendar' },
    { label: 'Seva', href: '#seva' },
    { label: 'Community', href: '#devotees' },
]

const sx = {
    logoIcon: {
        width: 42, height: 42, borderRadius: '50%',
        background: 'linear-gradient(135deg,#b8860b,#daa520,#f5c842,#daa520,#b8860b)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 18,
        animation: 'logoGlow 3s ease-in-out infinite',
        '@keyframes logoGlow': {
            '0%,100%': { boxShadow: '0 0 20px rgba(218,165,32,0.4)' },
            '50%': { boxShadow: '0 0 40px rgba(218,165,32,0.9)' },
        },
    },
    navLink: {
        fontFamily: "'Cinzel',serif", fontSize: 11.5,
        color: 'rgba(253,246,227,0.5)', textDecoration: 'none',
        px: 1.8, py: 0.9, borderRadius: '50px', letterSpacing: '.8px',
        minWidth: 0, textTransform: 'none',
        '&:hover': { color: '#f5c842', background: 'rgba(218,165,32,0.1)' },
    },
    bellBtn: {
        width: 38, height: 38, borderRadius: '50%',
        border: '1px solid rgba(218,165,32,0.2)',
        background: 'rgba(218,165,32,0.06)',
        color: '#f5c842',
        '&:hover': { background: 'rgba(218,165,32,0.15)', borderColor: '#daa520' },
    },
    ctaBtn: {
        fontFamily: "'Cinzel',serif", fontSize: 11, fontWeight: 700,
        letterSpacing: '1px', borderRadius: '50px', px: 2.5, py: 1,
        background: 'linear-gradient(135deg,#daa520,#f5c842)',
        color: '#1a1a1a', textTransform: 'none',
        boxShadow: '0 4px 20px rgba(218,165,32,0.35)',
        '&:hover': { boxShadow: '0 8px 32px rgba(218,165,32,0.6)', transform: 'scale(1.05)' },
    },
}

export default function TempleNavbar() {
    return (
        <AppBar
            position="fixed"
            elevation={0}
            sx={{
                background: 'rgba(17,17,17,0.85)',
                backdropFilter: 'blur(20px)',
                borderBottom: '1px solid rgba(218,165,32,0.2)',
            }}
        >
            <Toolbar sx={{ px: { xs: 2, md: '5vw' }, py: 0.5, justifyContent: 'space-between', minHeight: '64px !important' }}>

                {/* Logo */}
                <Box component="a" href="#" sx={{ display: 'flex', alignItems: 'center', gap: 1.5, textDecoration: 'none' }}>
                    <Box sx={sx.logoIcon}>🕉</Box>
                    <Box>
                        <Typography sx={{ fontFamily: "'Cinzel',serif", fontWeight: 700, fontSize: 16, color: '#f5c842', letterSpacing: '2px', lineHeight: 1 }}>
                            Darshan Journey
                        </Typography>
                        <Typography sx={{ fontSize: 8, color: 'rgba(218,165,32,0.5)', letterSpacing: '3px', textTransform: 'uppercase' }}>
                            Sacred Temple Platform
                        </Typography>
                    </Box>
                </Box>

                {/* Nav links */}
                <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 0.3 }}>
                    {NAV_LINKS.map(link => (
                        <Button key={link.label} href={link.href} sx={sx.navLink}>
                            {link.label}
                        </Button>
                    ))}
                </Box>

                {/* Right */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2 }}>
                    <IconButton sx={sx.bellBtn}>
                        <Badge badgeContent={3} color="warning" sx={{ '& .MuiBadge-badge': { fontSize: 9, minWidth: 16, height: 16, background: '#daa520', color: '#1a1a1a' } }}>
                            <NotificationsIcon sx={{ fontSize: 17 }} />
                        </Badge>
                    </IconButton>
                    <Button variant="contained" disableElevation sx={sx.ctaBtn}>
                        Join Darshan
                    </Button>
                </Box>

            </Toolbar>
        </AppBar>
    )
}
