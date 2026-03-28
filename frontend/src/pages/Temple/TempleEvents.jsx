import { useState, useMemo } from 'react'
import {
    Box, Typography, Grid, Button, Stack,
    Card, CardMedia, CardContent, Chip, IconButton, Tooltip,
    useMediaQuery, useTheme,
} from '@mui/material'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import { EVENTS, FILTERS } from '../data/templeData'

/* ─────────────────────────────────────
   SECTION HEADER
───────────────────────────────────── */
function SectionHead({ eyebrow, title, accent, sub }) {
    return (
        <Box sx={{ textAlign: 'center', mb: { xs: 4, sm: 5, md: 7 } }}>
            <Typography sx={{
                fontFamily: "'Cinzel',serif", fontWeight: 600, color: '#b8860b',
                letterSpacing: '3px', textTransform: 'uppercase', mb: 1.5,
                fontSize: { xs: 8, sm: 9, md: 9.5 },
            }}>
                {eyebrow}
            </Typography>
            <Typography variant="h2" sx={{
                fontFamily: "'Cinzel',serif", fontWeight: 900, lineHeight: 1.1,
                color: '#fdf6e3', mb: 1.8,
                fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem', lg: '3rem' },
            }}>
                {title}{' '}
                <Box component="span" sx={{
                    background: 'linear-gradient(135deg,#b8860b,#daa520,#f5c842,#daa520,#b8860b)',
                    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                }}>
                    {accent}
                </Box>
            </Typography>
            <Typography sx={{
                fontFamily: "'Crimson Text',serif", fontStyle: 'italic',
                color: 'rgba(253,246,227,0.55)', maxWidth: 520, mx: 'auto', lineHeight: 1.8, mb: 2,
                fontSize: { xs: '0.9rem', sm: '1rem', md: '1.05rem' },
            }}>
                {sub}
            </Typography>
            <Box sx={{ width: 60, height: 2, background: 'linear-gradient(135deg,#daa520,#f5c842)', borderRadius: 1, mx: 'auto' }} />
        </Box>
    )
}

/* ─────────────────────────────────────
   EVENT CARD
   Responsive image height & font sizes
   across 320px → 1440px+
───────────────────────────────────── */
function EventCard({ event, index }) {
    return (
        <Card sx={{
            position: 'relative', borderRadius: { xs: '14px', sm: '18px', md: '20px' },
            overflow: 'hidden',
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(218,165,32,0.2)',
            backdropFilter: 'blur(16px)',
            height: '100%', display: 'flex', flexDirection: 'column',
            cursor: 'pointer',
            transition: 'all .4s cubic-bezier(0.16,1,0.3,1)',
            opacity: 0,
            transform: 'translateY(30px) scale(0.97)',
            animation: `cardReveal .6s ease ${index * 0.07}s forwards`,
            '@keyframes cardReveal': { to: { opacity: 1, transform: 'translateY(0) scale(1)' } },
            '&:hover': {
                transform: { xs: 'none', md: 'translateY(-10px) scale(1.02)' },
                borderColor: '#daa520',
                boxShadow: '0 24px 60px rgba(218,165,32,0.25), 0 0 0 1px rgba(218,165,32,0.3)',
                '& .card-img': { transform: 'scale(1.06)' },
                '& .card-glow': { opacity: 1 },
            },
        }}>
            {/* ── Image ── */}
            <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                <CardMedia
                    component="img"
                    className="card-img"
                    image={event.img}
                    alt={event.title}
                    sx={{
                        objectFit: 'cover',
                        filter: 'brightness(.85) saturate(1.1)',
                        transition: 'transform .6s ease',
                        height: { xs: 160, sm: 175, md: 180, lg: 190 },
                    }}
                />
                {/* Gradient overlay */}
                <Box sx={{
                    position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                    background: 'linear-gradient(0deg,rgba(26,26,26,0.9) 0%,transparent 60%)',
                    zIndex: 1,
                }} />
                {/* Category badge */}
                <Box sx={{
                    position: 'absolute', top: { xs: 10, sm: 14 }, left: { xs: 10, sm: 14 }, zIndex: 2,
                    background: 'linear-gradient(135deg,#daa520,#f5c842)', color: '#1a1a1a',
                    fontFamily: "'Cinzel',serif", fontWeight: 700, letterSpacing: '1.5px',
                    textTransform: 'uppercase', borderRadius: '50px',
                    fontSize: { xs: 7.5, sm: 8.5 },
                    px: { xs: '9px', sm: '12px' }, py: { xs: '4px', sm: '5px' },
                }}>
                    {event.badge}
                </Box>
                {/* Prana points */}
                <Box sx={{
                    position: 'absolute', top: { xs: 10, sm: 14 }, right: { xs: 10, sm: 14 }, zIndex: 2,
                    background: 'rgba(26,26,26,0.8)', border: '1px solid rgba(218,165,32,0.3)',
                    color: '#f5c842', fontWeight: 600, borderRadius: '50px',
                    backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', gap: 0.5,
                    fontSize: { xs: 9, sm: 10 },
                    px: { xs: '8px', sm: '10px' }, py: { xs: '4px', sm: '5px' },
                }}>
                    ✨ {event.prana}
                </Box>
            </Box>

            {/* ── Card body ── */}
            <CardContent sx={{
                flex: 1, display: 'flex', flexDirection: 'column',
                position: 'relative', zIndex: 2,
                p: { xs: 1.8, sm: 2, md: 2.2 },
                pb: { xs: '14px !important', sm: '16px !important', md: '18px !important' },
            }}>
                {/* Deity icon */}
                <Typography sx={{
                    mb: 0.8, filter: 'drop-shadow(0 0 10px rgba(218,165,32,0.5))',
                    fontSize: { xs: 24, sm: 26, md: 28 },
                }}>
                    {event.deity}
                </Typography>

                {/* Title */}
                <Typography sx={{
                    fontFamily: "'Cinzel',serif", fontWeight: 700, color: '#fdf6e3',
                    mb: 0.8, lineHeight: 1.3,
                    fontSize: { xs: 12.5, sm: 13.5, md: 14 },
                }}>
                    {event.title}
                </Typography>

                {/* Tags */}
                <Stack direction="row" gap={0.6} flexWrap="wrap" mb={1.2}>
                    {event.tags?.map(t => (
                        <Chip key={t} label={t} size="small" sx={{
                            fontFamily: "'Cinzel',serif", letterSpacing: '.5px',
                            background: 'rgba(218,165,32,0.08)', border: '1px solid rgba(218,165,32,0.15)',
                            color: 'rgba(218,165,32,0.6)',
                            fontSize: { xs: 8.5, sm: 9.5 },
                            height: { xs: 19, sm: 22 },
                        }} />
                    ))}
                </Stack>

                {/* Description */}
                <Typography sx={{
                    fontFamily: "'Crimson Text',serif", fontStyle: 'italic',
                    color: 'rgba(253,246,227,0.55)', lineHeight: 1.6, flex: 1,
                    fontSize: { xs: 12, sm: 13 },
                    mb: { xs: 1.4, sm: 1.8 },
                    /* clamp to 3 lines on small screens */
                    display: '-webkit-box', WebkitLineClamp: { xs: 3, sm: 4, md: 'unset' },
                    WebkitBoxOrient: 'vertical', overflow: 'hidden',
                }}>
                    {event.desc}
                </Typography>

                {/* Info rows: date / time / location */}
                <Stack gap={0.6} sx={{ mb: 2 }}>
                    {[['📅', event.date], ['🕐', event.time], ['📍', event.location]].map(([icon, text], i) => (
                        <Stack key={i} direction="row" alignItems="center" gap={0.8}>
                            <Box sx={{ fontSize: { xs: 11, sm: 12 }, flexShrink: 0 }}>{icon}</Box>
                            <Typography sx={{
                                color: 'rgba(253,246,227,0.45)',
                                fontSize: { xs: 10, sm: 11 },
                                whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
                            }}>
                                {text}
                            </Typography>
                        </Stack>
                    ))}
                </Stack>

                {/* Footer: RSVP + bell */}
                <Stack direction="row" alignItems="center" gap={1} mt="auto">
                    <Button fullWidth variant="contained" disableElevation sx={{
                        background: 'linear-gradient(135deg,#daa520,#f5c842)', color: '#1a1a1a',
                        fontFamily: "'Cinzel',serif", fontWeight: 700, letterSpacing: '.8px',
                        borderRadius: '50px', textTransform: 'none',
                        fontSize: { xs: 9.5, sm: 10.5 },
                        py: { xs: 0.8, sm: 1 },
                        '&:hover': { boxShadow: '0 6px 24px rgba(218,165,32,0.5)', transform: 'scale(1.03)' },
                    }}>
                        RSVP / Join
                    </Button>
                    <Tooltip title="Set Reminder">
                        <IconButton sx={{
                            border: '1px solid rgba(218,165,32,0.2)',
                            background: 'rgba(218,165,32,0.06)', color: '#f5c842', flexShrink: 0,
                            width: { xs: 32, sm: 36 }, height: { xs: 32, sm: 36 },
                            '&:hover': { background: 'rgba(218,165,32,0.15)', borderColor: '#daa520' },
                        }}>
                            <NotificationsNoneIcon sx={{ fontSize: { xs: 13, sm: 15 } }} />
                        </IconButton>
                    </Tooltip>
                </Stack>
            </CardContent>

            {/* Hover glow overlay */}
            <Box className="card-glow" sx={{
                position: 'absolute', inset: 0, borderRadius: 'inherit',
                background: 'radial-gradient(circle at 50% 0%,rgba(218,165,32,0.08),transparent 60%)',
                opacity: 0, transition: 'opacity .4s', pointerEvents: 'none',
            }} />
        </Card>
    )
}

/* ─────────────────────────────────────
   FILTER BUTTON
───────────────────────────────────── */
function FilterBtn({ label, isActive, onClick }) {
    return (
        <Button
            onClick={onClick}
            sx={{
                fontFamily: "'Cinzel',serif", letterSpacing: '.8px',
                borderRadius: '50px', textTransform: 'none',
                border: isActive ? '1px solid transparent' : '1px solid rgba(218,165,32,0.2)',
                background: isActive ? 'linear-gradient(135deg,#daa520,#f5c842)' : 'rgba(218,165,32,0.06)',
                backdropFilter: 'blur(10px)',
                color: isActive ? '#1a1a1a' : 'rgba(253,246,227,0.55)',
                fontWeight: isActive ? 700 : 400,
                boxShadow: isActive ? '0 8px 28px rgba(218,165,32,0.45)' : 'none',
                transform: isActive ? 'translateY(-2px)' : 'none',
                transition: 'all .3s cubic-bezier(0.16,1,0.3,1)',
                /* responsive sizing */
                fontSize: { xs: 9.5, sm: 10.5, md: 11 },
                px: { xs: '14px', sm: '18px', md: '22px' },
                py: { xs: '7px', sm: '8px', md: '9px' },
                '&:hover': {
                    background: isActive ? 'linear-gradient(135deg,#daa520,#f5c842)' : 'rgba(218,165,32,0.12)',
                    borderColor: isActive ? 'transparent' : '#daa520',
                    color: isActive ? '#1a1a1a' : '#f5c842',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 6px 20px rgba(218,165,32,0.2)',
                },
            }}
        >
            {label}
        </Button>
    )
}

/* ─────────────────────────────────────
   MAIN SECTION
   Breakpoints:
   xs  → 1 col  (320–599px)   small/medium/large mobile
   sm  → 2 cols (600–767px)   large mobile landscape
   md  → 2 cols (768–1023px)  tablet portrait
   lg  → 3 cols (1024–1279px) tablet landscape / small desktop
   xl  → 4 cols (1280px+)     desktop
───────────────────────────────────── */
export default function TempleEvents() {
    const [active, setActive] = useState('all')

    const filtered = useMemo(() =>
        active === 'all' ? EVENTS : EVENTS.filter(e => e.badge === active),
        [active]
    )

    const handleFilter = (value) => {
        setActive(value)
        setTimeout(() => {
            document.getElementById('events')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 50)
    }

    return (
        <Box
            component="section"
            id="events"
            sx={{
                background: '#1a1a1a',
                py: { xs: '60px', sm: '70px', md: '90px' },
                px: { xs: '16px', sm: '24px', md: '5vw' },
            }}
        >
            <SectionHead
                eyebrow="🪷 Sacred Gatherings"
                title="Upcoming"
                accent="Temple Events"
                sub="Immerse yourself in divine celebrations, ancient rituals, and spiritual journeys curated for every devotee."
            />

            {/* ── Filter buttons ── */}
            <Stack
                direction="row"
                justifyContent="center"
                flexWrap="wrap"
                gap={{ xs: 0.8, sm: 1, md: 1.2 }}
                sx={{ mb: { xs: 2, sm: 2.5, md: 3 } }}
            >
                {FILTERS.map(f => (
                    <FilterBtn
                        key={f.value}
                        label={f.label}
                        isActive={active === f.value}
                        onClick={() => handleFilter(f.value)}
                    />
                ))}
            </Stack>

            {/* ── Event count ── */}
            <Typography sx={{
                textAlign: 'center', fontFamily: "'Cinzel',serif",
                color: 'rgba(218,165,32,0.4)', letterSpacing: '1.5px',
                mb: { xs: 3, sm: 3.5, md: 4 },
                fontSize: { xs: 10, sm: 11 },
            }}>
                <Box component="span" sx={{ color: '#f5c842', fontWeight: 700, fontSize: { xs: 12, sm: 13 } }}>
                    {filtered.length}
                </Box>{' '}events found
            </Typography>

            {/* ── Cards grid ── */}
            {filtered.length > 0 ? (
                <Grid container spacing={{ xs: 1.5, sm: 2, md: 2.5 }}>
                    {filtered.map((event, i) => (
                        <Grid
                            item
                            key={event.id}
                            xs={12}   /* 320–599px  → 1 card full width  */
                            sm={6}    /* 600–767px  → 2 cards per row     */
                            md={6}    /* 768–1023px → 2 cards (tablet)    */
                            lg={4}    /* 1024–1279px→ 3 cards (landscape) */
                            xl={3}    /* 1280px+    → 4 cards (desktop)   */
                        >
                            <EventCard event={event} index={i} />
                        </Grid>
                    ))}
                </Grid>
            ) : (
                <Box sx={{
                    display: 'flex', flexDirection: 'column',
                    alignItems: 'center', justifyContent: 'center',
                    py: { xs: '50px', md: '80px' }, gap: 1.8,
                }}>
                    <Box sx={{
                        filter: 'drop-shadow(0 0 20px rgba(218,165,32,0.4))',
                        animation: 'floatIcon 3s ease-in-out infinite',
                        '@keyframes floatIcon': {
                            '0%,100%': { transform: 'translateY(0)' },
                            '50%': { transform: 'translateY(-10px)' },
                        },
                        fontSize: { xs: 40, sm: 52 },
                    }}>🙏</Box>
                    <Typography sx={{
                        fontFamily: "'Cinzel',serif", fontWeight: 700, color: '#f5c842',
                        fontSize: { xs: 15, sm: 18 },
                    }}>
                        No events in this category yet
                    </Typography>
                    <Typography sx={{
                        fontFamily: "'Crimson Text',serif", fontStyle: 'italic',
                        color: 'rgba(253,246,227,0.55)',
                        fontSize: { xs: 13, sm: 14 },
                        textAlign: 'center',
                    }}>
                        Check back soon — divine gatherings are being planned.
                    </Typography>
                </Box>
            )}
        </Box>
    )
}
