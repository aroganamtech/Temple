import React, { useState, useEffect } from 'react'
import {
    Box, Typography, Grid, Stack, LinearProgress,
    Button, Chip, Avatar,
} from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import { STORIES } from '../data/templeData'

const POLLS = [
    { label: '🌅 Morning 6:00 AM', pct: 62 },
    { label: '☀️ Noon 12:00 PM', pct: 24 },
    { label: '🌙 Evening 7:00 PM', pct: 14 },
]
const SEVA_TAGS = ['🍱 Annadanam', '📖 Teaching', '🎵 Music', '🌿 Gardening', '🏥 Medical']

function SectionHead({ eyebrow, title, accent, sub }) {
    return (
        <Box sx={{ textAlign: 'center', mb: 7 }}>
            <Typography sx={{ fontFamily: "'Cinzel',serif", fontSize: 9.5, fontWeight: 600, color: '#b8860b', letterSpacing: '3px', textTransform: 'uppercase', mb: 1.5 }}>{eyebrow}</Typography>
            <Typography variant="h2" sx={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.8rem,4vw,3rem)', fontWeight: 900, color: '#fdf6e3', mb: 1.8, lineHeight: 1.1 }}>
                {title}{' '}
                <Box component="span" sx={{ background: 'linear-gradient(135deg,#b8860b,#daa520,#f5c842,#daa520,#b8860b)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{accent}</Box>
            </Typography>
            <Typography sx={{ fontFamily: "'Crimson Text',serif", fontStyle: 'italic', color: 'rgba(253,246,227,0.55)', fontSize: '1.05rem', maxWidth: 520, mx: 'auto', lineHeight: 1.8, mb: 2 }}>{sub}</Typography>
            <Box sx={{ width: 60, height: 2, background: 'linear-gradient(135deg,#daa520,#f5c842)', borderRadius: 1, mx: 'auto' }} />
        </Box>
    )
}

function NexusCard({ title, children }) {
    return (
        <Box sx={{
            background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(218,165,32,0.2)',
            borderRadius: '20px', p: 3.5, height: '100%',
            transition: 'all .3s',
            '&:hover': { borderColor: '#daa520', boxShadow: '0 16px 48px rgba(218,165,32,0.15)' },
        }}>
            <Typography sx={{ fontFamily: "'Cinzel',serif", fontSize: 14, fontWeight: 700, color: '#f5c842', mb: 2.5, display: 'flex', alignItems: 'center', gap: 1 }}>
                {title}
            </Typography>
            {children}
        </Box>
    )
}

export default function TempleNexus() {
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
            <Grid container spacing={3}>

                {/* RSVP Counter */}
                <Grid item xs={12} md={4}>
                    <NexusCard title="🪔 Live RSVP Counter">
                        <Box sx={{ textAlign: 'center', py: 1.2 }}>
                            <Typography sx={{ fontFamily: "'Cinzel',serif", fontSize: '3.5rem', fontWeight: 900, color: '#f5c842', lineHeight: 1, display: 'block' }}>
                                {rsvp.toLocaleString()}
                            </Typography>
                            <Typography sx={{ fontSize: 11, color: 'rgba(253,246,227,0.55)', letterSpacing: '1px', textTransform: 'uppercase', mt: 0.8, display: 'block' }}>
                                Devotees Joined Today
                            </Typography>
                        </Box>
                        <LinearProgress variant="determinate" value={73} sx={{ my: 2, height: 6, borderRadius: 3, background: 'rgba(218,165,32,0.1)', '& .MuiLinearProgress-bar': { background: 'linear-gradient(135deg,#daa520,#f5c842)', borderRadius: 3 } }} />
                        <Stack direction="row" justifyContent="space-between" mb={1.8}>
                            {['0', '73% of daily goal', '3,900'].map(t => (
                                <Typography key={t} sx={{ fontSize: 9.5, color: 'rgba(218,165,32,0.4)', fontFamily: "'Cinzel',serif" }}>{t}</Typography>
                            ))}
                        </Stack>
                        <Stack direction="row" justifyContent="center" gap={0.8}>
                            {[0, 1, 2, 3, 4].map(i => (
                                <Box key={i} sx={{ fontSize: 18, animation: `diyaFlicker 1.5s ease-in-out ${i * .3}s infinite`, [`@keyframes diyaFlicker`]: { '0%,100%': { opacity: 1, transform: 'scale(1)' }, '50%': { opacity: .6, transform: 'scale(.9)' } } }}>🪔</Box>
                            ))}
                        </Stack>
                    </NexusCard>
                </Grid>

                {/* Poll */}
                <Grid item xs={12} md={4}>
                    <NexusCard title="🗳 Community Poll">
                        <Typography sx={{ fontFamily: "'Crimson Text',serif", fontStyle: 'italic', fontSize: 13, color: 'rgba(253,246,227,0.55)', mb: 2 }}>
                            "What is your preferred Aarti time?"
                        </Typography>
                        {POLLS.map((p, i) => (
                            <Box key={i} onClick={() => setSelectedPoll(i)} sx={{
                                display: 'flex', alignItems: 'center', gap: 1.2,
                                background: selectedPoll === i ? 'rgba(218,165,32,0.15)' : 'rgba(218,165,32,0.05)',
                                border: `1px solid ${selectedPoll === i ? '#daa520' : 'rgba(218,165,32,0.12)'}`,
                                borderRadius: '12px', p: '12px 16px', mb: 1.2, cursor: 'pointer',
                                transition: 'all .25s',
                                '&:hover': { background: 'rgba(218,165,32,0.12)', borderColor: '#daa520' },
                            }}>
                                <Typography sx={{ flex: 1, fontSize: 12, color: '#fdf6e3' }}>{p.label}</Typography>
                                <Box sx={{ flex: 1, height: 4, background: 'rgba(218,165,32,0.1)', borderRadius: 2, overflow: 'hidden' }}>
                                    <Box sx={{ height: '100%', width: `${p.pct}%`, background: 'linear-gradient(135deg,#daa520,#f5c842)', borderRadius: 2, transition: 'width .6s ease' }} />
                                </Box>
                                <Typography sx={{ fontFamily: "'Cinzel',serif", fontSize: 11, color: '#f5c842', minWidth: 32, textAlign: 'right' }}>{p.pct}%</Typography>
                            </Box>
                        ))}
                        <Typography sx={{ fontSize: 10, color: 'rgba(218,165,32,0.35)', mt: 1.5, fontFamily: "'Cinzel',serif", letterSpacing: '.5px' }}>4,218 devotees voted</Typography>
                    </NexusCard>
                </Grid>

                {/* Seva Match + Stories */}
                <Grid item xs={12} md={4}>
                    <NexusCard title="🌸 Seva Match">
                        <Box sx={{ background: 'rgba(218,165,32,0.05)', border: '1px solid rgba(218,165,32,0.15)', borderRadius: '14px', p: 2, mb: 2 }}>
                            <Typography sx={{ fontFamily: "'Cinzel',serif", fontSize: 12, color: '#f5c842', mb: 1.2, display: 'flex', alignItems: 'center', gap: 1 }}>🤖 Smart Seva Assistant</Typography>
                            <Typography sx={{ fontSize: 11, color: 'rgba(253,246,227,0.55)', mb: 1.2 }}>Select your interests:</Typography>
                            <Stack direction="row" flexWrap="wrap" gap={0.5} mb={1.5}>
                                {SEVA_TAGS.map(t => (
                                    <Chip key={t} label={t} size="small" clickable sx={{ fontFamily: "'Cinzel',serif", fontSize: 10, background: 'rgba(218,165,32,0.1)', border: '1px solid rgba(218,165,32,0.2)', color: '#f5c842', '&:hover': { background: 'rgba(218,165,32,0.2)' } }} />
                                ))}
                            </Stack>
                            <Button fullWidth variant="contained" disableElevation sx={{ mt: 1.5, background: 'linear-gradient(135deg,#daa520,#f5c842)', color: '#1a1a1a', fontFamily: "'Cinzel',serif", fontSize: 11, fontWeight: 700, letterSpacing: '.8px', borderRadius: '50px', textTransform: 'none', '&:hover': { boxShadow: '0 6px 24px rgba(218,165,32,0.4)' } }}>
                                Find My Seva Match ✨
                            </Button>
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

            </Grid >
        </Box >
    )
}
