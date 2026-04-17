import React, { useState, useEffect } from 'react'
import {
    Box, Typography, Grid, LinearProgress, Stack,
    Button, Chip, Avatar,
} from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import { motion } from 'framer-motion'
import { useAppTheme } from '../theme/ThemeContext'
import SectionHeader from './SectionHeader'

const POLLS = [
    { label: '🌅 Morning 6:00 AM', pct: 62 },
    { label: '☀️ Noon 12:00 PM', pct: 24 },
    { label: '🌙 Evening 7:00 PM', pct: 14 },
]

const STORIES = [
    { avatar: '🙏', name: 'Priya Sharma', guru: true, text: '"The virtual Darshan brought tears to my eyes. I felt the divine presence from 10,000 miles away."', likes: 248 },
    { avatar: '🕉', name: 'Rajan Pillai', guru: false, text: '"Seva Match connected me with the perfect volunteer role. Annadanam changed my life."', likes: 183 },
    { avatar: '🪷', name: 'Meena Krishnan', guru: true, text: '"Prana Points motivated me to attend more events. Now I have Guru Glow status!"', likes: 312 },
]

const SEVA_TAGS = ['🍱 Annadanam', '📖 Teaching', '🎵 Music', '🌿 Gardening', '🏥 Medical']

function NexusCard({ title, children, tokens }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ height: '100%' }}
        >
            <Box
                sx={{
                    height: '100%',
                    background: tokens.bgCard,
                    border: `1px solid ${tokens.border}`,
                    borderRadius: 3, p: 3,
                    backdropFilter: 'blur(16px)',
                    transition: 'all 0.3s',
                    '&:hover': { borderColor: tokens.gold, boxShadow: `0 16px 48px ${tokens.gold}22` },
                }}
            >
                <Typography sx={{ fontFamily: "'Cinzel',serif", fontSize: 14, fontWeight: 700, color: tokens.goldBright, mb: 2.5, display: 'flex', alignItems: 'center', gap: 1 }}>
                    {title}
                </Typography>
                {children}
            </Box>
        </motion.div>
    )
}

export default function DevoteeNexus() {
    const { tokens, isDark } = useAppTheme()
    const [rsvp, setRsvp] = useState(2700)
    const [selectedPoll, setSelectedPoll] = useState(0)
    const [likedStories, setLikedStories] = useState({})

    useEffect(() => {
        const id = setInterval(() => {
            setRsvp(p => {
                if (p >= 2847) { clearInterval(id); return 2847 }
                return p + Math.floor(Math.random() * 3) + 1
            })
        }, 80)
        return () => clearInterval(id)
    }, [])

    return (
        <Box
            component="section"
            id="devotees"
            sx={{
                py: 12, px: { xs: 2, md: '5vw' },
                background: tokens.bg,
                transition: 'background 0.5s ease',
            }}
        >
            <SectionHeader
                eyebrow="🔱 Devotee Nexus"
                title="Community"
                accent="Sacred Space"
                sub="Connect, share, and grow together in the divine light of community seva."
                tokens={tokens}
            />

            <Grid container spacing={3}>
                {/* RSVP Counter */}
                <Grid item xs={12} md={4}>
                    <NexusCard title="🪔 Live RSVP Counter" tokens={tokens}>
                        <Box sx={{ textAlign: 'center', py: 1 }}>
                            <Typography sx={{ fontFamily: "'Cinzel',serif", fontSize: '3.2rem', fontWeight: 900, color: tokens.goldBright, lineHeight: 1 }}>
                                {rsvp.toLocaleString()}
                            </Typography>
                            <Typography sx={{ fontSize: 11, color: tokens.textMuted, letterSpacing: '1px', textTransform: 'uppercase', mt: 0.5 }}>
                                Devotees Joined Today
                            </Typography>
                        </Box>
                        <LinearProgress
                            variant="determinate"
                            value={73}
                            sx={{
                                my: 2, height: 6, borderRadius: 3,
                                background: `${tokens.gold}18`,
                                '& .MuiLinearProgress-bar': { background: tokens.gradBtn, borderRadius: 3 },
                            }}
                        />
                        <Stack direction="row" justifyContent="space-between" mb={2}>
                            {['0', '73% of daily goal', '3,900'].map(t => (
                                <Typography key={t} sx={{ fontSize: 9.5, color: `${tokens.gold}55`, fontFamily: "'Cinzel',serif" }}>{t}</Typography>
                            ))}
                        </Stack>
                        <Stack direction="row" justifyContent="center" gap={1}>
                            {[0, 1, 2, 3, 4].map(i => (
                                <Box key={i} sx={{
                                    fontSize: 18,
                                    animation: `diyaFlicker 1.5s ease-in-out ${i * 0.3}s infinite`,
                                    '@keyframes diyaFlicker': {
                                        '0%,100%': { opacity: 1, transform: 'scale(1)' },
                                        '50%': { opacity: 0.5, transform: 'scale(0.88)' },
                                    },
                                }}>🪔</Box>
                            ))}
                        </Stack>
                    </NexusCard>
                </Grid>

                {/* Poll */}
                <Grid item xs={12} md={4}>
                    <NexusCard title="🗳 Community Poll" tokens={tokens}>
                        <Typography sx={{ fontFamily: "'Crimson Text',serif", fontStyle: 'italic', fontSize: 13, color: tokens.textMuted, mb: 2 }}>
                            "What is your preferred Aarti time?"
                        </Typography>
                        {POLLS.map((p, i) => (
                            <Box
                                key={i}
                                onClick={() => setSelectedPoll(i)}
                                sx={{
                                    display: 'flex', alignItems: 'center', gap: 1.5,
                                    background: selectedPoll === i ? `${tokens.gold}18` : `${tokens.gold}08`,
                                    border: `1px solid ${selectedPoll === i ? tokens.gold : tokens.border}`,
                                    borderRadius: 2, p: 1.5, mb: 1.2, cursor: 'pointer',
                                    transition: 'all 0.25s',
                                    '&:hover': { background: `${tokens.gold}14`, borderColor: tokens.gold },
                                }}
                            >
                                <Typography sx={{ flex: 1, fontSize: 12, color: tokens.text }}>{p.label}</Typography>
                                <Box sx={{ flex: 1, height: 4, background: `${tokens.gold}18`, borderRadius: 2, overflow: 'hidden' }}>
                                    <Box sx={{ height: '100%', width: `${p.pct}%`, background: tokens.gradBtn, borderRadius: 2, transition: 'width 0.6s ease' }} />
                                </Box>
                                <Typography sx={{ fontFamily: "'Cinzel',serif", fontSize: 11, color: tokens.goldBright, minWidth: 32, textAlign: 'right' }}>
                                    {p.pct}%
                                </Typography>
                            </Box>
                        ))}
                        <Typography sx={{ fontSize: 10, color: `${tokens.gold}44`, mt: 1.5, fontFamily: "'Cinzel',serif", letterSpacing: '.5px' }}>
                            4,218 devotees voted
                        </Typography>
                    </NexusCard>
                </Grid>

                {/* Seva Match + Stories */}
                <Grid item xs={12} md={4}>
                    <NexusCard title="🌸 Seva Match & Stories" tokens={tokens}>
                        {/* Seva match */}
                        <Box sx={{ background: `${tokens.gold}08`, border: `1px solid ${tokens.border}`, borderRadius: 2, p: 2, mb: 2.5 }}>
                            <Typography sx={{ fontFamily: "'Cinzel',serif", fontSize: 11.5, color: tokens.goldBright, mb: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
                                🤖 Smart Seva Assistant
                            </Typography>
                            <Typography sx={{ fontSize: 11, color: tokens.textMuted, mb: 1.2 }}>Select your interests:</Typography>
                            <Stack direction="row" flexWrap="wrap" gap={0.8} mb={1.5}>
                                {SEVA_TAGS.map(t => (
                                    <Chip
                                        key={t} label={t} size="small" clickable
                                        sx={{
                                            fontFamily: "'Cinzel',serif", fontSize: 9.5,
                                            background: `${tokens.gold}10`,
                                            border: `1px solid ${tokens.border}`,
                                            color: tokens.goldBright,
                                            '&:hover': { background: `${tokens.gold}22` },
                                        }}
                                    />
                                ))}
                            </Stack>
                            <Button
                                fullWidth size="small" variant="contained"
                                sx={{
                                    background: tokens.gradBtn,
                                    color: isDark ? '#1a1a1a' : '#fff',
                                    fontFamily: "'Cinzel',serif", fontSize: 10.5,
                                    fontWeight: 700, letterSpacing: '.8px',
                                    borderRadius: '50px',
                                    '&:hover': { boxShadow: `0 6px 24px ${tokens.gold}55` },
                                }}
                            >
                                Find My Seva Match ✨
                            </Button>
                        </Box>

                        {/* Stories */}
                        <Typography sx={{ fontFamily: "'Cinzel',serif", fontSize: 12, fontWeight: 700, color: tokens.goldBright, mb: 1.5 }}>
                            📜 Devotee Stories
                        </Typography>
                        {STORIES.map((s, i) => (
                            <Box key={i} sx={{ display: 'flex', gap: 1.5, pb: 1.5, mb: 1.5, borderBottom: i < STORIES.length - 1 ? `1px solid ${tokens.border}` : 'none' }}>
                                <Avatar sx={{ width: 36, height: 36, background: tokens.gradBtn, fontSize: 16, border: `2px solid ${tokens.border}` }}>
                                    {s.avatar}
                                </Avatar>
                                <Box sx={{ flex: 1 }}>
                                    <Stack direction="row" alignItems="center" gap={0.8} mb={0.4}>
                                        <Typography sx={{ fontFamily: "'Cinzel',serif", fontSize: 11, fontWeight: 700, color: tokens.goldBright }}>
                                            {s.name}
                                        </Typography>
                                        {s.guru && (
                                            <Chip label="Guru Glow" size="small" sx={{ background: tokens.gradBtn, color: isDark ? '#1a1a1a' : '#fff', fontSize: 7.5, height: 16, fontWeight: 700 }} />
                                        )}
                                    </Stack>
                                    <Typography sx={{ fontFamily: "'Crimson Text',serif", fontStyle: 'italic', fontSize: 12, color: tokens.textMuted, lineHeight: 1.55, mb: 0.6 }}>
                                        {s.text}
                                    </Typography>
                                    <Stack direction="row" gap={1.5}>
                                        <Box
                                            onClick={() => setLikedStories(p => ({ ...p, [i]: !p[i] }))}
                                            sx={{ display: 'flex', alignItems: 'center', gap: 0.5, cursor: 'pointer', fontSize: 11, color: likedStories[i] ? tokens.goldBright : `${tokens.gold}55`, transition: 'color 0.2s' }}
                                        >
                                            <FavoriteIcon sx={{ fontSize: 12 }} /> {s.likes + (likedStories[i] ? 1 : 0)}
                                        </Box>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, cursor: 'pointer', fontSize: 11, color: `${tokens.gold}55` }}>
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
