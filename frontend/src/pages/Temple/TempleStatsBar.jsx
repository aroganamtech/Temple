import React from 'react'
import { Box, Typography, Stack } from '@mui/material'

const STATS = [
    { icon: '🙏', val: '1.2M+', label: 'Devotees' },
    { icon: '🪔', val: '340+', label: 'Events This Year' },
    { icon: '🛕', val: '85', label: 'Partner Temples' },
    { icon: '⭐', val: '4.9', label: 'Devotee Rating' },
    { icon: '🌍', val: '42', label: 'Countries Reached' },
]

export default function TempleStatsBar() {
    return (
        <Box sx={{
            background: 'rgba(218,165,32,0.06)',
            borderTop: '1px solid rgba(218,165,32,0.2)',
            borderBottom: '1px solid rgba(218,165,32,0.2)',
            py: 2.5, px: { xs: 2, md: '5vw' },
        }}>
            <Stack direction="row" alignItems="center" justifyContent="space-around" flexWrap="wrap" gap={2}>
                {STATS.map((s, i) => (
                    <React.Fragment key={s.label}>
                        {i > 0 && (
                            <Box sx={{ width: 1, height: 36, background: 'rgba(218,165,32,0.2)', display: { xs: 'none', sm: 'block' } }} />
                        )}
                        <Stack direction="row" alignItems="center" gap={1.5}>
                            <Box sx={{ fontSize: 22, filter: 'drop-shadow(0 0 8px rgba(218,165,32,0.5))' }}>{s.icon}</Box>
                            <Box>
                                <Typography sx={{ fontFamily: "'Cinzel',serif", fontWeight: 700, fontSize: '1.3rem', color: '#f5c842', lineHeight: 1 }}>
                                    {s.val}
                                </Typography>
                                <Typography sx={{ fontSize: 10, color: 'rgba(218,165,32,0.5)', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
                                    {s.label}
                                </Typography>
                            </Box>
                        </Stack>
                    </React.Fragment>
                ))}
            </Stack>
        </Box>
    )
}
