import { theme } from "@chakra-ui/core"

// Let's say you want to add custom colors
const customTheme = {
    ...theme,
    colors: {
        ...theme.colors,
        pulseGreen: "#32E179",
        paleGreen: "#EBFAF1",
        bgGray: "#F3F3F3"
    },
    fonts: {
        ...theme.fonts,
        heading: "Work Sans, sans-serif",
        body: "Work Sans, sans-serif"
    }
}

export default customTheme
