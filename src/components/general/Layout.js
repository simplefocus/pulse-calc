import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../config/theme'
import CSSReset from '../../config/CSSReset'
import GlobalStyles from '../../config/GlobalStyles'

import { Box } from 'components/Base'
import { Footer, Header } from 'components/general'
import { ScreenReader } from 'components/atoms'

export const Layout = ({ children, headerProps, footerProps, ...props }) => {
    return (
        <ThemeProvider theme={theme}>
            <CSSReset />
            <GlobalStyles />

            <ScreenReader as="a" href="#content">
                Skip to content
            </ScreenReader>

            <Box as="main" id="content" {...props}>
                {children}
            </Box>
        </ThemeProvider>
    )
}

export default Layout
