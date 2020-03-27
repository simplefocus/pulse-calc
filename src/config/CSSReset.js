import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    html,
    body {
        box-sizing: border-box;
        overflow-x: hidden;
        min-width: 320px;
        max-width: 100%;
        margin: 0;
        font-family: ${props => props.theme.fonts.sans};
        color: ${props => props.theme.colors.neutral[500]};
    }
`

export default GlobalStyles