import React from 'react'
import {
    Card, CardMedia, CardContent, Box, Typography,
    Chip, Stack, Button, IconButton, Tooltip,
} from '@mui/material'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import { motion } from 'framer-motion'
import { useAppTheme } from '../theme/ThemeContext'

export default function EventCard({ event, index }) {
    const { tokens, isDark } = useAppTheme()

    return (
        <motion.div
            initial={{ opacity: 0, y: 32, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
            whileHover={{ y: -10, scale: 1.02 }}
            style={{ height: '100%' }}
        >
            <Card
                sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                    overflow: 'hidden',
                    background: tokens.bgCard,
                    border: `1px solid ${tokens.border}`,
                    backdropFilter: 'blur(16px)',
                    borderRadius: 3,
                    cursor: 'pointer',
                    transition: 'border-color 0.35s, box-shadow 0.35s',
                    '&:hover': {
                        borderColor: tokens.gold,
                        boxShadow: `0 24px 60px ${tokens.gold}33, 0 0 0 1px ${tokens.gold}44`,
                    },
                }}
            >
                {/* Image */}
                <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                    <CardMedia
                        component="img"
                        image={event.img}
                        alt={event.title}
                        sx={{
                            height: 175,
                            objectFit: 'cover',
                            filter: isDark ? 'brightness(0.82) saturate(1.1)' : 'brightness(0.9) saturate(1.05)',
                            transition: 'transform 0.6s ease',
                            '&:hover': { transform: 'scale(1.06)' },
                        }}
                    />
                    {/* Gradient overlay */}
                    <Box sx={{
                        position: 'absolute', inset: 0,
                        background: 'linear-gradient(0deg,rgba(0,0,0,0.75) 0%,transparent 55%)',
                    }} />
                    {/* Category badge */}
                    <Chip
                        label={event.category}
                        size="small"
                        sx={{
                            position: 'absolute', top: 12, left: 12,
                            background: tokens.gradBtn,
                            color: isDark ? '#1a1a1a' : '#fff',
                            fontFamily: "'Cinzel',serif", fontSize: 8.5,
                            fontWeight: 700, letterSpacing: '1.5px',
                            height: 22,
                        }}
                    />
                    {/* Prana points */}
                    <Box
                        sx={{
                            position: 'absolute', top: 12, right: 12,
                            background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(8px)',
                            border: `1px solid ${tokens.border}`,
                            borderRadius: '50px', px: 1.2, py: 0.4,
                            display: 'flex', alignItems: 'center', gap: 0.5,
                        }}
                    >
                        <AutoAwesomeIcon sx={{ fontSize: 11, color: tokens.goldBright }} />
                        <Typography sx={{ fontFamily: "'Cinzel',serif", fontSize: 10, color: tokens.goldBright, fontWeight: 600 }}>
                            +{event.prana} pts
                        </Typography>
                    </Box>
                </Box>

                <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column', p: 2, pb: '16px !important' }}>
                    {/* Deity + title */}
                    <Typography sx={{ fontSize: 26, mb: 0.5, filter: `drop-shadow(0 0 8px ${tokens.gold}88)` }}>
                        {event.deity}
                    </Typography>
                    <Typography
                        sx={{
                            fontFamily: "'Cinzel',serif", fontWeight: 700, fontSize: 14,
                            color: tokens.text, mb: 0.8, lineHeight: 1.3,
                        }}
                    >
                        {event.title}
                    </Typography>

                    {/* Tags */}
                    <Stack direction="row" gap={0.6} flexWrap="wrap" mb={1}>
                        {event.tags.map(t => (
                            <Chip
                                key={t} label={t} size="small"
                                sx={{
                                    background: `${tokens.gold}12`,
                                    border: `1px solid ${tokens.gold}28`,
                                    color: `${tokens.gold}cc`,
                                    fontSize: 9, height: 20,
                                    fontFamily: "'Cinzel',serif", letterSpacing: '.5px',
                                }}
                            />
                        ))}
                    </Stack>

                    {/* Description */}
                    <Typography
                        sx={{
                            fontFamily: "'Crimson Text',serif", fontStyle: 'italic',
                            fontSize: 12.5, color: tokens.textMuted, lineHeight: 1.65,
                            mb: 1.5, flex: 1,
                        }}
                    >
                        {event.desc}
                    </Typography>

                    {/* Info rows */}
                    <Stack gap={0.6} mb={2}>
                        {[
                            { icon: <CalendarTodayIcon sx={{ fontSize: 11 }} />, text: event.date },
                            { icon: <AccessTimeIcon sx={{ fontSize: 11 }} />, text: event.time },
                            { icon: <LocationOnIcon sx={{ fontSize: 11 }} />, text: event.location },
                        ].map((row, i) => (
                            <Stack key={i} direction="row" alignItems="center" gap={0.8}>
                                <Box sx={{ color: `${tokens.gold}88` }}>{row.icon}</Box>
                                <Typography sx={{ fontSize: 11, color: tokens.textMuted }}>{row.text}</Typography>
                            </Stack>
                        ))}
                    </Stack>

                    {/* Footer */}
                    <Stack direction="row" gap={1} alignItems="center">
                        <Button
                            fullWidth
                            variant="contained"
                            size="small"
                            sx={{
                                background: tokens.gradBtn,
                                color: isDark ? '#1a1a1a' : '#fff',
                                fontFamily: "'Cinzel',serif", fontSize: 10.5,
                                fontWeight: 700, letterSpacing: '.8px',
                                borderRadius: '50px', py: 0.9,
                                boxShadow: 'none',
                                '&:hover': { boxShadow: `0 6px 24px ${tokens.gold}55` },
                            }}
                        >
                            RSVP / Join
                        </Button>
                        <Tooltip title="Set Reminder">
                            <IconButton
                                size="small"
                                sx={{
                                    border: `1px solid ${tokens.border}`,
                                    background: tokens.glass,
                                    color: tokens.goldBright,
                                    width: 34, height: 34, flexShrink: 0,
                                    '&:hover': { background: `${tokens.gold}22`, borderColor: tokens.gold },
                                }}
                            >
                                <NotificationsNoneIcon sx={{ fontSize: 15 }} />
                            </IconButton>
                        </Tooltip>
                    </Stack>
                </CardContent>

                {/* Hover glow overlay */}
                <Box
                    sx={{
                        position: 'absolute', inset: 0, borderRadius: 3, pointerEvents: 'none',
                        background: `radial-gradient(circle at 50% 0%, ${tokens.gold}10, transparent 60%)`,
                        opacity: 0,
                        transition: 'opacity 0.4s',
                        '.MuiCard-root:hover &': { opacity: 1 },
                    }}
                />
            </Card>
        </motion.div>
    )
}
