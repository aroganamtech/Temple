import React, { useEffect, useRef, useState } from 'react'
import { Box, Typography, Button, Stack } from '@mui/material'

/* ── Countdown hook ── */
function useCountdown(targetISO) {
    const [vals, setVals] = useState({ d: '00', h: '00', m: '00', s: '00' })
    useEffect(() => {
        const target = new Date(targetISO).getTime()
        const tick = () => {
            const diff = Math.max(0, target - Date.now())
            const pad = n => String(Math.floor(n)).padStart(2, '0')
            setVals({
                d: pad(diff / 86400000),
                h: pad((diff % 86400000) / 3600000),
                m: pad((diff % 3600000) / 60000),
                s: pad((diff % 60000) / 1000),
            })
        }
        tick()
        const id = setInterval(tick, 1000)
        return () => clearInterval(id)
    }, [targetISO])
    return vals
}

/* ── Particle canvas ── */
function HeroCanvas() {
    const ref = useRef(null)
    useEffect(() => {
        const cv = ref.current
        const ctx = cv.getContext('2d')
        let W, H, pts = [], raf
        const resize = () => { W = cv.width = window.innerWidth; H = cv.height = window.innerHeight }
        window.addEventListener('resize', resize); resize()
        for (let i = 0; i < 120; i++) pts.push({
            x: Math.random() * W, y: Math.random() * H,
            r: Math.random() * 2 + 0.3,
            vx: (Math.random() - .5) * .3, vy: -(Math.random() * .5 + .1),
            a: Math.random() * .8 + .1, da: Math.random() * .005 + .002,
            gold: Math.random() > .5,
        })
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

/* ── Countdown block ── */
function CdBlock({ val, unit }) {
    return (
        <Box sx={{
            display: 'flex', flexDirection: 'column', alignItems: 'center',
            background: 'rgba(218,165,32,0.07)', border: '1px solid rgba(218,165,32,0.2)',
            borderRadius: '12px', px: 2, py: 1.5, minWidth: 64,
            backdropFilter: 'blur(10px)', boxShadow: '0 0 20px rgba(218,165,32,0.1)',
        }}>
            <Typography sx={{ fontFamily: "'Cinzel',serif", fontSize: '1.8rem', fontWeight: 900, color: '#f5c842', lineHeight: 1 }}>
                {val}
            </Typography>
            <Typography sx={{ fontSize: 8, color: 'rgba(218,165,32,0.5)', letterSpacing: '2px', textTransform: 'uppercase', mt: 0.5 }}>
                {unit}
            </Typography>
        </Box>
    )
}

export default function TempleHero() {
    const { d, h, m, s } = useCountdown('2025-02-26T18:00:00')

    return (
        <Box
            component="section"
            id="home"
            sx={{
                position: 'relative', width: '100%', height: '100vh',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                overflow: 'hidden',
                background: 'radial-gradient(ellipse at 50% 60%,rgba(218,165,32,0.08) 0%,transparent 65%),#111111',
            }}
        >
            <HeroCanvas />

            {/* BG image */}
            <Box sx={{
                position: 'absolute', inset: 0, zIndex: 0,
                backgroundImage: "url('https://images.unsplash.com/photo-1587474260584-136574528ed5?w=1600&q=80')",
                backgroundSize: 'cover', backgroundPosition: 'center',
                opacity: .12, transform: 'scale(1.05)',
                animation: 'heroBgDrift 20s ease-in-out infinite alternate',
                '@keyframes heroBgDrift': { from: { transform: 'scale(1.05) translateY(0)' }, to: { transform: 'scale(1.1) translateY(-20px)' } },
            }} />

            {/* Mandala rings */}
            <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', zIndex: 2, pointerEvents: 'none' }}>
                <Box sx={{
                    width: 'min(70vw,700px)', height: 'min(70vw,700px)', borderRadius: '50%',
                    border: '1px solid rgba(218,165,32,0.08)', position: 'relative',
                    animation: 'mandalaSpin 60s linear infinite',
                    '@keyframes mandalaSpin': { to: { transform: 'rotate(360deg)' } },
                    '&::before': { content: '""', position: 'absolute', inset: '8%', borderRadius: '50%', border: '1px solid rgba(218,165,32,0.06)', animation: 'mandalaSpin 40s linear infinite reverse' },
                    '&::after': { content: '""', position: 'absolute', inset: '18%', borderRadius: '50%', border: '1px solid rgba(218,165,32,0.1)', animation: 'mandalaSpin 25s linear infinite' },
                }}>
                    <Box sx={{ position: 'absolute', inset: '28%', borderRadius: '50%', border: '1px dashed rgba(218,165,32,0.15)', animation: 'mandalaSpin 15s linear infinite reverse' }} />
                    <Box sx={{ position: 'absolute', inset: '42%', borderRadius: '50%', background: 'radial-gradient(circle,rgba(218,165,32,0.15),transparent 70%)', animation: 'corePulse 4s ease-in-out infinite', '@keyframes corePulse': { '0%,100%': { transform: 'scale(1)', opacity: .6 }, '50%': { transform: 'scale(1.3)', opacity: 1 } } }} />
                </Box>
            </Box>

            {/* Floating deities */}
            {[
                { icon: '🔱', top: '20%', left: '8%', delay: '0s', size: 'clamp(28px,4vw,48px)' },
                { icon: '🪷', top: '25%', right: '8%', delay: '2s', size: 'clamp(28px,4vw,48px)' },
                { icon: '🪔', bottom: '28%', left: '12%', delay: '1s', size: 'clamp(22px,3vw,36px)' },
                { icon: '📿', bottom: '32%', right: '10%', delay: '3s', size: 'clamp(22px,3vw,36px)' },
            ].map((d, i) => (
                <Box key={i} sx={{
                    position: 'absolute', zIndex: 3, fontSize: d.size,
                    filter: 'drop-shadow(0 0 20px rgba(218,165,32,0.6))',
                    animation: `deityFloat${i} 6s ease-in-out ${d.delay} infinite`,
                    [`@keyframes deityFloat${i}`]: { '0%,100%': { transform: 'translateY(0) rotate(-3deg)' }, '50%': { transform: 'translateY(-18px) rotate(3deg)' } },
                    pointerEvents: 'none',
                    top: d.top, left: d.left, right: d.right, bottom: d.bottom,
                }}>
                    {d.icon}
                </Box>
            ))}

            {/* Hero content */}
            <Box sx={{ position: 'relative', zIndex: 5, textAlign: 'center', px: '20px', maxWidth: 900 }}>

                {/* Eyebrow */}
                <Box sx={{
                    display: 'inline-flex', alignItems: 'center', gap: 1.2,
                    background: 'rgba(218,165,32,0.08)', border: '1px solid rgba(218,165,32,0.25)',
                    color: '#f5c842', fontFamily: "'Cinzel',serif", fontSize: 10, fontWeight: 600,
                    letterSpacing: '3px', textTransform: 'uppercase',
                    px: '22px', py: '7px', borderRadius: '50px', mb: 3,
                    backdropFilter: 'blur(10px)',
                    animation: 'fadeUp .8s ease forwards',
                    '@keyframes fadeUp': { from: { opacity: 0, transform: 'translateY(24px)' }, to: { opacity: 1, transform: 'translateY(0)' } },
                }}>
                    <Box sx={{ width: 5, height: 5, borderRadius: '50%', background: '#daa520', animation: 'pulse 2s infinite', '@keyframes pulse': { '0%,100%': { boxShadow: '0 0 0 0 rgba(218,165,32,.7)' }, '50%': { boxShadow: '0 0 0 6px rgba(218,165,32,0)' } } }} />
                    Maha Shivaratri 2025 — Live Now
                </Box>

                {/* Title */}
                <Typography sx={{
                    fontFamily: "'Cinzel',serif", fontSize: 'clamp(2.8rem,7vw,6.5rem)',
                    fontWeight: 900, lineHeight: 1.05, color: '#fdf6e3', mb: 1,
                    animation: 'fadeUp .8s .15s ease both',
                }}>
                    Enter the<br />
                    <Box component="span" sx={{ background: 'linear-gradient(135deg,#b8860b,#daa520,#f5c842,#daa520,#b8860b)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                        Divine Gateway
                    </Box>
                </Typography>

                {/* Sub */}
                <Typography sx={{
                    fontFamily: "'Crimson Text',serif", fontStyle: 'italic',
                    fontSize: 'clamp(1rem,2vw,1.25rem)', color: 'rgba(253,246,227,0.55)',
                    lineHeight: 1.8, mb: 4.5,
                    animation: 'fadeUp .8s .3s ease both',
                }}>
                    Experience sacred temple events, live poojas, and spiritual journeys<br />
                    from the comfort of your soul's home.
                </Typography>

                {/* Countdown */}
                <Stack direction="row" alignItems="center" justifyContent="center" gap={0.8} mb={4.5} flexWrap="wrap"
                    sx={{ animation: 'fadeUp .8s .45s ease both' }}>
                    <Typography sx={{ fontFamily: "'Cinzel',serif", fontSize: 10, color: 'rgba(218,165,32,0.5)', letterSpacing: '2px', textTransform: 'uppercase', mr: 1 }}>
                        Starts in
                    </Typography>
                    <CdBlock val={d} unit="Days" />
                    <Typography sx={{ fontFamily: "'Cinzel',serif", fontSize: '1.5rem', color: '#b8860b', alignSelf: 'flex-start', mt: 1 }}>:</Typography>
                    <CdBlock val={h} unit="Hours" />
                    <Typography sx={{ fontFamily: "'Cinzel',serif", fontSize: '1.5rem', color: '#b8860b', alignSelf: 'flex-start', mt: 1 }}>:</Typography>
                    <CdBlock val={m} unit="Mins" />
                    <Typography sx={{ fontFamily: "'Cinzel',serif", fontSize: '1.5rem', color: '#b8860b', alignSelf: 'flex-start', mt: 1 }}>:</Typography>
                    <CdBlock val={s} unit="Secs" />
                    <Box sx={{ fontSize: 20, ml: 1, animation: 'flameDance 1s ease-in-out infinite alternate', '@keyframes flameDance': { from: { transform: 'scaleY(1) rotate(-3deg)' }, to: { transform: 'scaleY(1.15) rotate(3deg)' } } }}>🔥</Box>
                </Stack>

                {/* CTAs */}
                <Stack direction="row" alignItems="center" justifyContent="center" gap={1.8} flexWrap="wrap"
                    sx={{ animation: 'fadeUp .8s .6s ease both' }}>
                    <Button variant="contained" disableElevation sx={{
                        display: 'inline-flex', alignItems: 'center', gap: 1.5,
                        px: '38px', py: '16px', borderRadius: '50px', border: 'none',
                        background: 'linear-gradient(135deg,#b8860b,#daa520,#f5c842,#daa520,#b8860b)',
                        color: '#1a1a1a', fontFamily: "'Cinzel',serif", fontWeight: 700, fontSize: 13,
                        letterSpacing: '1px', textTransform: 'none',
                        animation: 'heroPulse 2.5s ease-in-out infinite',
                        '@keyframes heroPulse': { '0%,100%': { boxShadow: '0 0 0 0 rgba(218,165,32,0.5),0 10px 40px rgba(218,165,32,0.4)' }, '50%': { boxShadow: '0 0 0 12px rgba(218,165,32,0),0 10px 40px rgba(218,165,32,0.6)' } },
                        '&:hover': { transform: 'scale(1.05)' },
                    }}>
                        🙏 Join Virtual Darshan
                    </Button>
                    <Button variant="outlined" href="#events" sx={{
                        display: 'inline-flex', alignItems: 'center', gap: 1.2,
                        px: '32px', py: '16px', borderRadius: '50px',
                        borderColor: 'rgba(218,165,32,0.3)', borderWidth: '1.5px',
                        background: 'rgba(218,165,32,0.05)', backdropFilter: 'blur(12px)',
                        color: '#f5c842', fontFamily: "'Cinzel',serif", fontSize: 13,
                        letterSpacing: '1px', textTransform: 'none',
                        '&:hover': { background: 'rgba(218,165,32,0.15)', borderColor: '#daa520', transform: 'scale(1.03)' },
                    }}>
                        📅 View All Events
                    </Button>
                </Stack>
            </Box>

            {/* Scroll hint */}
            <Box sx={{
                position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)',
                zIndex: 5, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1,
                color: 'rgba(218,165,32,0.4)', fontSize: 10, letterSpacing: '2px',
                textTransform: 'uppercase', fontFamily: "'Cinzel',serif",
                animation: 'scrollBounce 2s ease-in-out infinite',
                '@keyframes scrollBounce': { '0%,100%': { transform: 'translateX(-50%) translateY(0)' }, '50%': { transform: 'translateX(-50%) translateY(8px)' } },
            }}>
                <Box sx={{ width: 1, height: 40, background: 'linear-gradient(180deg,#b8860b,transparent)' }} />
                Scroll to Explore
            </Box>
        </Box>
    )
}
