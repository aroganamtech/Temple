import React, { useEffect, useRef, useState } from 'react'
import { Box, Typography, Button, Chip, Stack } from '@mui/material'
import { motion } from 'framer-motion'
import { useAppTheme } from '../theme/ThemeContext'

function useCountdown(target) {
    const [diff, setDiff] = useState(Math.max(0, target - Date.now()))
    useEffect(() => {
        const id = setInterval(() => setDiff(Math.max(0, target - Date.now())), 1000)
        return () => clearInterval(id)
    }, [target])
    const d = Math.floor(diff / 86400000)
    const h = Math.floor((diff % 86400000) / 3600000)
    const m = Math.floor((diff % 3600000) / 60000)
    const s = Math.floor((diff % 60000) / 1000)
    const p = n => String(n).padStart(2, '0')
    return [p(d), p(h), p(m), p(s)]
}

function ParticleCanvas({ tokens }) {
    const ref = useRef(null)
    useEffect(() => {
        const cv = ref.current
        const ctx = cv.getContext('2d')
        let W, H, pts = [], raf

        const resize = () => {
            W = cv.width = window.innerWidth
            H = cv.height = window.innerHeight
        }
        window.addEventListener('resize', resize)
        resize()

        for (let i = 0; i < 100; i++) {
            pts.push({
                x: Math.random() * W, y: Math.random() * H,
                r: Math.random() * 1.8 + 0.3,
                vx: (Math.random() - 0.5) * 0.25,
                vy: -(Math.random() * 0.45 + 0.1),
                a: Math.random() * 0.7 + 0.1,
                da: Math.random() * 0.004 + 0.002,
            })
        }

        const draw = () => {
            ctx.clearRect(0, 0, W, H)
            pts.forEach(p => {
                p.x += p.vx; p.y += p.vy; p.a -= p.da
                if (p.a <= 0) { p.x = Math.random() * W; p.y = H + 5; p.a = Math.random() * 0.7 + 0.2 }
                if (p.x < 0) p.x = W; if (p.x > W) p.x = 0
                ctx.beginPath()
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
                ctx.fillStyle = `rgba(218,165,32,${p.a * 0.55})`
                ctx.fill()
            })
            raf = requestAnimationFrame(draw)
        }
        draw()
        return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize) }
    }, [])

    return (
        <canvas
            ref={ref}
            style={{ position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none' }}
        />
    )
}

const CDBlock = ({ val, unit, tokens }) => (
    <Box
        sx={{
            display: 'flex', flexDirection: 'column', alignItems: 'center',
            background: `${tokens.gold}12`,
            border: `1px solid ${tokens.border}`,
            borderRadius: 2, px: 2, py: 1.5, minWidth: 64,
            backdropFilter: 'blur(10px)',
            boxShadow: `0 0 20px ${tokens.gold}18`,
        }}
    >
        <Typography sx={{ fontFamily: "'Cinzel',serif", fontSize: '1.8rem', fontWeight: 900, color: tokens.goldBright, lineHeight: 1 }}>
            {val}
        </Typography>
        <Typography sx={{ fontSize: 8, color: `${tokens.gold}80`, letterSpacing: '2px', textTransform: 'uppercase', mt: 0.5 }}>
            {unit}
        </Typography>
    </Box>
)

const fadeUp = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0 } }

export default function Hero() {
    const { tokens, isDark } = useAppTheme()
    const [d, h, m, s] = useCountdown(new Date('2025-02-26T18:00:00').getTime())

    return (
        <Box
            id="home"
            component="section"
            sx={{
                position: 'relative', width: '100%', height: '100vh',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                overflow: 'hidden',
                background: `${tokens.heroRadial}, ${tokens.bgPaper}`,
                transition: 'background 0.5s ease',
            }}
        >
            {/* BG image */}
            <Box
                sx={{
                    position: 'absolute', inset: 0, zIndex: 0,
                    backgroundImage: "url('https://images.unsplash.com/photo-1587474260584-136574528ed5?w=1600&q=80')",
                    backgroundSize: 'cover', backgroundPosition: 'center',
                    opacity: isDark ? 0.1 : 0.07,
                    transform: 'scale(1.05)',
                    animation: 'bgDrift 20s ease-in-out infinite alternate',
                    '@keyframes bgDrift': {
                        from: { transform: 'scale(1.05) translateY(0)' },
                        to: { transform: 'scale(1.1) translateY(-20px)' },
                    },
                }}
            />

            {/* Mandala rings */}
            {[0, 1, 2].map(i => (
                <Box key={i} sx={{
                    position: 'absolute', top: '50%', left: '50%',
                    transform: 'translate(-50%,-50%)',
                    width: `${70 - i * 14}vw`, height: `${70 - i * 14}vw`,
                    maxWidth: `${700 - i * 140}px`, maxHeight: `${700 - i * 140}px`,
                    borderRadius: '50%',
                    border: `1px ${i === 0 ? 'dashed' : 'solid'} ${tokens.gold}${['14', '0d', '1a'][i]}`,
                    animation: `spin${i} ${[60, 40, 25][i]}s linear infinite ${i === 1 ? 'reverse' : ''}`,
                    [`@keyframes spin${i}`]: { to: { transform: 'translate(-50%,-50%) rotate(360deg)' } },
                    zIndex: 2, pointerEvents: 'none',
                }} />
            ))}

            {/* Glow core */}
            <Box sx={{
                position: 'absolute', top: '50%', left: '50%',
                transform: 'translate(-50%,-50%)',
                width: 200, height: 200, borderRadius: '50%',
                background: `radial-gradient(circle, ${tokens.gold}28, transparent 70%)`,
                animation: 'corePulse 4s ease-in-out infinite',
                '@keyframes corePulse': {
                    '0%,100%': { transform: 'translate(-50%,-50%) scale(1)', opacity: 0.6 },
                    '50%': { transform: 'translate(-50%,-50%) scale(1.4)', opacity: 1 },
                },
                zIndex: 2, pointerEvents: 'none',
            }} />

            <ParticleCanvas tokens={tokens} />

            {/* Floating deities */}
            {[
                { icon: '🔱', top: '20%', left: '7%', delay: 0 },
                { icon: '🪷', top: '22%', right: '7%', delay: 2 },
                { icon: '🪔', bottom: '28%', left: '11%', delay: 1 },
                { icon: '📿', bottom: '30%', right: '9%', delay: 3 },
            ].map((d, i) => (
                <Box
                    key={i}
                    sx={{
                        position: 'absolute', zIndex: 3, fontSize: 'clamp(26px,3.5vw,44px)',
                        filter: `drop-shadow(0 0 18px ${tokens.gold}99)`,
                        animation: `deityFloat${i} 6s ease-in-out ${d.delay}s infinite`,
                        [`@keyframes deityFloat${i}`]: {
                            '0%,100%': { transform: 'translateY(0) rotate(-3deg)' },
                            '50%': { transform: 'translateY(-16px) rotate(3deg)' },
                        },
                        pointerEvents: 'none',
                        top: d.top, left: d.left, right: d.right, bottom: d.bottom,
                    }}
                >
                    {d.icon}
                </Box>
            ))}

            {/* Content */}
            <Box sx={{ position: 'relative', zIndex: 5, textAlign: 'center', px: 2, maxWidth: 860 }}>
                <motion.div variants={fadeUp} initial="hidden" animate="show" transition={{ duration: 0.7, delay: 0.1 }}>
                    <Chip
                        label="🔴  Maha Shivaratri 2025 — Live Now"
                        sx={{
                            fontFamily: "'Cinzel',serif", fontSize: 10, letterSpacing: '2px',
                            background: `${tokens.gold}14`, border: `1px solid ${tokens.gold}44`,
                            color: tokens.goldBright, mb: 3, height: 32,
                            '& .MuiChip-label': { px: 2 },
                        }}
                    />
                </motion.div>

                <motion.div variants={fadeUp} initial="hidden" animate="show" transition={{ duration: 0.7, delay: 0.2 }}>
                    <Typography
                        variant="h1"
                        sx={{
                            fontSize: 'clamp(2.6rem,7vw,6rem)', fontWeight: 900, lineHeight: 1.06,
                            color: tokens.text, mb: 1,
                        }}
                    >
                        Enter the{' '}
                        <Box component="span" sx={{ background: tokens.gradFull, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                            Divine Gateway
                        </Box>
                    </Typography>
                </motion.div>

                <motion.div variants={fadeUp} initial="hidden" animate="show" transition={{ duration: 0.7, delay: 0.35 }}>
                    <Typography
                        sx={{
                            fontFamily: "'Crimson Text',serif", fontStyle: 'italic',
                            fontSize: 'clamp(1rem,1.8vw,1.2rem)', color: tokens.textMuted,
                            lineHeight: 1.85, mb: 4,
                        }}
                    >
                        Experience sacred temple events, live poojas, and spiritual journeys<br />
                        from the comfort of your soul's home.
                    </Typography>
                </motion.div>

                {/* Countdown */}
                <motion.div variants={fadeUp} initial="hidden" animate="show" transition={{ duration: 0.7, delay: 0.5 }}>
                    <Stack direction="row" alignItems="center" justifyContent="center" gap={1} mb={4} flexWrap="wrap">
                        <Typography sx={{ fontFamily: "'Cinzel',serif", fontSize: 10, color: `${tokens.gold}80`, letterSpacing: '2px', mr: 1 }}>
                            STARTS IN
                        </Typography>
                        <CDBlock val={d} unit="Days" tokens={tokens} />
                        <Typography sx={{ fontFamily: "'Cinzel',serif", fontSize: '1.4rem', color: `${tokens.gold}55`, alignSelf: 'flex-start', mt: 1 }}>:</Typography>
                        <CDBlock val={h} unit="Hours" tokens={tokens} />
                        <Typography sx={{ fontFamily: "'Cinzel',serif", fontSize: '1.4rem', color: `${tokens.gold}55`, alignSelf: 'flex-start', mt: 1 }}>:</Typography>
                        <CDBlock val={m} unit="Mins" tokens={tokens} />
                        <Typography sx={{ fontFamily: "'Cinzel',serif", fontSize: '1.4rem', color: `${tokens.gold}55`, alignSelf: 'flex-start', mt: 1 }}>:</Typography>
                        <CDBlock val={s} unit="Secs" tokens={tokens} />
                        <Box sx={{ fontSize: 22, animation: 'flameDance 1s ease-in-out infinite alternate', '@keyframes flameDance': { from: { transform: 'scaleY(1) rotate(-3deg)' }, to: { transform: 'scaleY(1.15) rotate(3deg)' } } }}>🔥</Box>
                    </Stack>
                </motion.div>

                {/* CTAs */}
                <motion.div variants={fadeUp} initial="hidden" animate="show" transition={{ duration: 0.7, delay: 0.65 }}>
                    <Stack direction="row" justifyContent="center" gap={1.5} flexWrap="wrap">
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                            <Button
                                variant="contained"
                                sx={{
                                    background: tokens.gradBtn, color: isDark ? '#1a1a1a' : '#fff',
                                    fontFamily: "'Cinzel',serif", fontWeight: 700, fontSize: 13, letterSpacing: '1px',
                                    borderRadius: '50px', px: 4, py: 1.8,
                                    boxShadow: `0 0 0 0 ${tokens.gold}80`,
                                    animation: 'heroPulse 2.5s ease-in-out infinite',
                                    '@keyframes heroPulse': {
                                        '0%,100%': { boxShadow: `0 0 0 0 ${tokens.gold}80, 0 10px 40px ${tokens.gold}55` },
                                        '50%': { boxShadow: `0 0 0 14px ${tokens.gold}00, 0 10px 40px ${tokens.gold}88` },
                                    },
                                }}
                            >
                                🙏 Join Virtual Darshan
                            </Button>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                            <Button
                                variant="outlined"
                                href="#events"
                                sx={{
                                    borderColor: `${tokens.gold}55`, color: tokens.goldBright,
                                    fontFamily: "'Cinzel',serif", fontSize: 13, letterSpacing: '1px',
                                    borderRadius: '50px', px: 3.5, py: 1.8,
                                    backdropFilter: 'blur(12px)',
                                    background: `${tokens.gold}08`,
                                    '&:hover': { borderColor: tokens.gold, background: `${tokens.gold}18` },
                                }}
                            >
                                📅 View All Events
                            </Button>
                        </motion.div>
                    </Stack>
                </motion.div>
            </Box>

            {/* Scroll hint */}
            <Box
                sx={{
                    position: 'absolute', bottom: 28, left: '50%', transform: 'translateX(-50%)',
                    zIndex: 5, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1,
                    color: `${tokens.gold}66`, fontSize: 10, letterSpacing: '2px',
                    fontFamily: "'Cinzel',serif", textTransform: 'uppercase',
                    animation: 'scrollBounce 2s ease-in-out infinite',
                    '@keyframes scrollBounce': {
                        '0%,100%': { transform: 'translateX(-50%) translateY(0)' },
                        '50%': { transform: 'translateX(-50%) translateY(8px)' },
                    },
                }}
            >
                <Box sx={{ width: 1, height: 40, background: `linear-gradient(180deg,${tokens.gold}88,transparent)` }} />
                Scroll to Explore
            </Box>
        </Box>
    )
}
