import React, { createContext, useContext, useState, useMemo } from 'react'
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { darkTokens, lightTokens } from './tokens'

const ThemeCtx = createContext(null)

export function useAppTheme() {
    return useContext(ThemeCtx)
}

export function ThemeProvider({ children }) {
    const [isDark, setIsDark] = useState(true)
    const tokens = isDark ? darkTokens : lightTokens

    const muiTheme = useMemo(() => createTheme({
        palette: {
            mode: tokens.mode,
            background: { default: tokens.bg, paper: tokens.bgPaper },
            primary: { main: tokens.gold, light: tokens.goldBright, dark: tokens.goldDark },
            text: { primary: tokens.text, secondary: tokens.textMuted },
        },
        typography: {
            fontFamily: "'Inter', sans-serif",
            h1: { fontFamily: "'Cinzel', serif" },
            h2: { fontFamily: "'Cinzel', serif" },
            h3: { fontFamily: "'Cinzel', serif" },
            h4: { fontFamily: "'Cinzel', serif" },
            h5: { fontFamily: "'Cinzel', serif" },
            h6: { fontFamily: "'Cinzel', serif" },
        },
        shape: { borderRadius: 16 },
        components: {
            MuiCssBaseline: {
                styleOverrides: {
                    body: {
                        background: tokens.bg,
                        color: tokens.text,
                        overflowX: 'hidden',
                        scrollBehavior: 'smooth',
                        transition: 'background 0.5s ease, color 0.5s ease',
                    },
                    '::-webkit-scrollbar': { width: '4px' },
                    '::-webkit-scrollbar-track': { background: tokens.bgPaper },
                    '::-webkit-scrollbar-thumb': { background: tokens.scrollbar, borderRadius: '2px' },
                },
            },
            MuiCard: {
                styleOverrides: {
                    root: {
                        background: tokens.bgCard,
                        border: `1px solid ${tokens.border}`,
                        backdropFilter: 'blur(16px)',
                        transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)',
                    },
                },
            },
            MuiChip: {
                styleOverrides: {
                    root: {
                        fontFamily: "'Cinzel', serif",
                        fontSize: '10px',
                        letterSpacing: '0.8px',
                    },
                },
            },
        },
    }), [tokens])

    const toggle = () => setIsDark(p => !p)

    return (
        <ThemeCtx.Provider value={{ isDark, toggle, tokens }}>
            <MuiThemeProvider theme={muiTheme}>
                <CssBaseline />
                {children}
            </MuiThemeProvider>
        </ThemeCtx.Provider>
    )
}
