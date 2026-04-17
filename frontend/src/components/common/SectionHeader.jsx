import React from 'react'
import { Box, Typography } from '@mui/material'
import { motion } from 'framer-motion'

export default function SectionHeader({ eyebrow, title, accent, sub, tokens }) {
    return (
        <Box sx={{ textAlign: 'center', mb: 6 }}>
            <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <Typography
                    sx={{
                        fontFamily: "'Cinzel',serif", fontSize: 9.5, fontWeight: 600,
                        color: tokens.goldDark, letterSpacing: '3px', textTransform: 'uppercase',
                        mb: 1.5,
                    }}
                >
                    {eyebrow}
                </Typography>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.1 }}
            >
                <Typography
                    variant="h2"
                    sx={{
                        fontSize: 'clamp(1.8rem,4vw,3rem)', fontWeight: 900,
                        color: tokens.text, mb: 1.5, lineHeight: 1.1,
                    }}
                >
                    {title}{' '}
                    <Box
                        component="span"
                        sx={{
                            background: tokens.gradFull,
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}
                    >
                        {accent}
                    </Box>
                </Typography>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <Typography
                    sx={{
                        fontFamily: "'Crimson Text',serif", fontStyle: 'italic',
                        color: tokens.textMuted, fontSize: '1.05rem',
                        maxWidth: 520, mx: 'auto', lineHeight: 1.8, mb: 2,
                    }}
                >
                    {sub}
                </Typography>
                <Box sx={{ width: 60, height: 2, background: tokens.gradBtn, borderRadius: 1, mx: 'auto' }} />
            </motion.div>
        </Box>
    )
}
