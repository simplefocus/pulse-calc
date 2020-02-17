import React from "react"
import customTheme from "./theme"
import Stepper from "./Stepper"
import { ThemeProvider, CSSReset } from "@chakra-ui/core"

function App() {
    return (
        <ThemeProvider theme={customTheme}>
            <CSSReset />
            <Stepper />
        </ThemeProvider>
    )
}

export default App
