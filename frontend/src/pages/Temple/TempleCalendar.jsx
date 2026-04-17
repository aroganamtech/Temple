import React, { useEffect, useRef } from 'react'
import { Box, Typography, Stack, Grid } from '@mui/material'
import { CAL_EVENTS, ORBIT_DATA } from '../data/templeData'

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

function ChakraVisual() {
    const wrapRef = useRef(null)
    useEffect(() => {
        const wrap = wrapRef.current
        if (!wrap) return
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
            {/* Rings */}
            {[
                { w: '90%', h: '90%', border: '1px dashed rgba(218,165,32,0.2)', dur: '30s', dir: 'normal' },
                { w: '72%', h: '72%', border: '1px solid rgba(218,165,32,0.12)', dur: '20s', dir: 'reverse' },
                { w: '54%', h: '54%', border: '1px solid rgba(218,165,32,0.18)', dur: '14s', dir: 'normal' },
            ].map((r, i) => (
                <Box key={i} sx={{
                    position: 'absolute', borderRadius: '50%', border: r.border,
                    width: r.w, height: r.h,
                    animation: `chakraSpin${i} ${r.dur} linear infinite ${r.dir}`,
                    [`@keyframes chakraSpin${i}`]: { to: { transform: 'rotate(360deg)' } },
                }} />
            ))}
            {/* Center */}
            <Box sx={{
                width: 120, height: 120, borderRadius: '50%',
                background: 'radial-gradient(circle,rgba(218,165,32,0.2),rgba(218,165,32,0.05))',
                border: '2px solid rgba(218,165,32,0.4)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 48, zIndex: 2,
                animation: 'centerPulse 4s ease-in-out infinite',
                '@keyframes centerPulse': { '0%,100%': { boxShadow: '0 0 40px rgba(218,165,32,0.3)' }, '50%': { boxShadow: '0 0 80px rgba(218,165,32,0.6)' } },
            }}>🕉</Box>
        </Box>
    )
}

export default function TempleCalendar() {
    return (
        <Box component="section" id="calendar" sx={{
            py: '90px', px: { xs: 2, md: '5vw' },
            background: 'radial-gradient(ellipse at 50% 50%,rgba(218,165,32,0.05) 0%,transparent 70%),#111111',
            borderTop: '1px solid rgba(218,165,32,0.2)', borderBottom: '1px solid rgba(218,165,32,0.2)',
        }}>
            <SectionHead eyebrow="🌀 Celestial Calendar" title="Sacred" accent="Event Orbits" sub="Navigate the divine calendar — each golden orb holds a sacred event waiting to unfold." />
            <Grid container spacing={6} alignItems="center">
                <Grid item xs={12} md={6}><ChakraVisual /></Grid>
                <Grid item xs={12} md={6}>
                    <Stack gap={1.8}>
                        {CAL_EVENTS.map((e, i) => (
                            <Box key={i} sx={{
                                display: 'flex', alignItems: 'center', gap: 2,
                                background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(218,165,32,0.2)',
                                borderRadius: '16px', p: '16px 20px', cursor: 'pointer',
                                transition: 'all .3s',
                                '&:hover': { background: 'rgba(218,165,32,0.08)', borderColor: '#daa520', transform: 'translateX(6px)', '& .cal-arrow': { color: '#daa520', transform: 'translateX(4px)' } },
                            }}>
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
