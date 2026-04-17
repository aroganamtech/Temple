import React from 'react'
import { CssBaseline } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import TempleNavbar from './TempleNavbar'
import TempleHero from './TempleHero'
import TempleStatsBar from './TempleStatsBar'
import TempleEvents from './TempleEvents'
import TempleCalendar from './TempleCalendar'
import TempleNexus from './TempleNexus'
import TempleFooter from './TempleFooter'

const theme = createTheme({
    palette: {
        mode: 'dark',
        background: { default: '#1a1a1a', paper: '#111111' },
        primary: { main: '#daa520', light: '#f5c842', dark: '#b8860b' },
        text: { primary: '#fdf6e3', secondary: 'rgba(253,246,227,0.55)' },
    },
    typography: {
        fontFamily: "'Inter', sans-serif",
        h1: { fontFamily: "'Cinzel', serif" },
        h2: { fontFamily: "'Cinzel', serif" },
        h3: { fontFamily: "'Cinzel', serif" },
        h4: { fontFamily: "'Cinzel', serif" },
    },
    shape: { borderRadius: 16 },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                'html': { scrollBehavior: 'smooth' },
                'body': { background: '#1a1a1a', color: '#fdf6e3', overflowX: 'hidden', fontFamily: "'Inter', sans-serif" },
                '::-webkit-scrollbar': { width: '4px' },
                '::-webkit-scrollbar-track': { background: '#111111' },
                '::-webkit-scrollbar-thumb': { background: '#b8860b', borderRadius: '2px' },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: { backgroundImage: 'none' },
            },
        },
    },
})

export default function TempleApp() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <TempleNavbar />
            <TempleHero />
            <TempleStatsBar />
            <TempleEvents />
            <TempleCalendar />
            <TempleNexus />
            <TempleFooter />
        </ThemeProvider>
    )
}
