import React from 'react'
import { Box, Typography, Stack, Divider } from '@mui/material'
import { motion } from 'framer-motion'
import { useAppTheme } from '../theme/ThemeContext'

const STATS = [
    { icon: '🙏', val: '1.2M+', label: 'Devotees' },
    { icon: '🪔', val: '340+', label: 'Events This Year' },
    { icon: '🛕', val: '85', label: 'Partner Temples' },
    { icon: '⭐', val: '4.9', label: 'Devotee Rating' },
    { icon: '🌍', val: '42', label: 'Countries Reached' },
]

export default function StatsBar() {
    const { tokens } = useAppTheme()
    return (
        <Box
            sx={{
                background: `${tokens.gold}0a`,
                borderTop: `1px solid ${tokens.border}`,
                borderBottom: `1px solid ${tokens.border}`,
                py: 2.5, px: { xs: 2, md: '5vw' },
                transition: 'background 0.5s ease',
            }}
        >
            <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-around"
                flexWrap="wrap"
                gap={2}
            >
                {STATS.map((s, i) => (
                    <React.Fragment key={s.label}>
                        {i > 0 && (
                            <Divider
                                orientation="vertical"
                                flexItem
                                sx={{ borderColor: tokens.border, display: { xs: 'none', sm: 'block' } }}
                            />
                        )}
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.08 }}
                        >
                            <Stack direction="row" alignItems="center" gap={1.5}>
                                <Box sx={{ fontSize: 22, filter: `drop-shadow(0 0 8px ${tokens.gold}88)` }}>
                                    {s.icon}
                                </Box>
                                <Box>
                                    <Typography
                                        sx={{
                                            fontFamily: "'Cinzel',serif", fontWeight: 700,
                                            fontSize: '1.25rem', color: tokens.goldBright, lineHeight: 1,
                                        }}
                                    >
                                        {s.val}
                                    </Typography>
                                    <Typography sx={{ fontSize: 10, color: `${tokens.gold}77`, letterSpacing: '1.5px', textTransform: 'uppercase' }}>
                                        {s.label}
                                    </Typography>
                                </Box>
                            </Stack>
                        </motion.div>
                    </React.Fragment>
                ))}
            </Stack>
        </Box>
    )
}
