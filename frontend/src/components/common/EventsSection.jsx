import React, { useState, useMemo } from 'react'
import {
    Box, Typography, Grid, Button, Stack, Chip,
} from '@mui/material'
import { motion, AnimatePresence } from 'framer-motion'
import { useAppTheme } from '../theme/ThemeContext'
import { EVENTS, CATEGORIES, CATEGORY_ICONS } from '../data/events'
import EventCard from './EventCard'
import SectionHeader from './SectionHeader'

export default function EventsSection() {
    const { tokens } = useAppTheme()
    const [active, setActive] = useState('All')

    const filtered = useMemo(() =>
        active === 'All' ? EVENTS : EVENTS.filter(e => e.category === active),
        [active]
    )

    return (
        <Box
            component="section"
            id="events"
            sx={{
                py: 12, px: { xs: 2, md: '5vw' },
                background: tokens.bg,
                transition: 'background 0.5s ease',
            }}
        >
            <SectionHeader
                eyebrow="🪷 Sacred Gatherings"
                title="Upcoming"
                accent="Temple Events"
                sub="Immerse yourself in divine celebrations, ancient rituals, and spiritual journeys curated for every devotee."
                tokens={tokens}
            />

            {/* Filter buttons */}
            <Stack direction="row" justifyContent="center" flexWrap="wrap" gap={1.2} mb={2}>
                {CATEGORIES.map(cat => {
                    const isActive = active === cat
                    return (
                        <motion.div key={cat} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
                            <Button
                                onClick={() => setActive(cat)}
                                sx={{
                                    fontFamily: "'Cinzel',serif", fontSize: 11, letterSpacing: '.8px',
                                    borderRadius: '50px', px: 2.5, py: 1,
                                    border: `1px solid ${isActive ? 'transparent' : tokens.border}`,
                                    background: isActive ? tokens.gradBtn : tokens.glass,
                                    color: isActive ? (tokens.mode === 'dark' ? '#1a1a1a' : '#fff') : tokens.textMuted,
                                    fontWeight: isActive ? 700 : 400,
                                    backdropFilter: 'blur(10px)',
                                    boxShadow: isActive ? `0 8px 28px ${tokens.gold}44` : 'none',
                                    transform: isActive ? 'translateY(-2px)' : 'none',
                                    transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)',
                                    '&:hover': {
                                        background: isActive ? tokens.gradBtn : `${tokens.gold}18`,
                                        borderColor: isActive ? 'transparent' : tokens.gold,
                                        color: isActive ? (tokens.mode === 'dark' ? '#1a1a1a' : '#fff') : tokens.goldBright,
                                    },
                                }}
                            >
                                {CATEGORY_ICONS[cat]} {cat}
                            </Button>
                        </motion.div>
                    )
                })}
            </Stack>

            {/* Count */}
            <Typography
                sx={{
                    textAlign: 'center', mb: 5,
                    fontFamily: "'Cinzel',serif", fontSize: 11,
                    color: `${tokens.gold}66`, letterSpacing: '1.5px',
                }}
            >
                <Box component="span" sx={{ color: tokens.goldBright, fontWeight: 700, fontSize: 13 }}>
                    {filtered.length}
                </Box>{' '}
                events found
            </Typography>

            {/* Grid */}
            <AnimatePresence mode="wait">
                {filtered.length > 0 ? (
                    <motion.div
                        key={active}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Grid container spacing={2.5}>
                            {filtered.map((event, i) => (
                                <Grid item xs={12} sm={6} md={4} lg={3} key={event.id}>
                                    <EventCard event={event} index={i} />
                                </Grid>
                            ))}
                        </Grid>
                    </motion.div>
                ) : (
                    <motion.div
                        key="empty"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                    >
                        <Box sx={{ textAlign: 'center', py: 10 }}>
                            <Box sx={{
                                fontSize: 52, mb: 2,
                                filter: `drop-shadow(0 0 20px ${tokens.gold}66)`,
                                animation: 'floatIcon 3s ease-in-out infinite',
                                '@keyframes floatIcon': {
                                    '0%,100%': { transform: 'translateY(0)' },
                                    '50%': { transform: 'translateY(-10px)' },
                                },
                            }}>🙏</Box>
                            <Typography sx={{ fontFamily: "'Cinzel',serif", fontSize: 18, fontWeight: 700, color: tokens.goldBright, mb: 1 }}>
                                No events in this category yet
                            </Typography>
                            <Typography sx={{ fontFamily: "'Crimson Text',serif", fontStyle: 'italic', color: tokens.textMuted }}>
                                Check back soon — divine gatherings are being planned.
                            </Typography>
                        </Box>
                    </motion.div>
                )}
            </AnimatePresence>
        </Box>
    )
}
