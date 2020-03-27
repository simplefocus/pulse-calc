import styled from 'styled-components/macro'
import tw from 'twin.macro'

export const EmojiWrapper = styled.span.attrs({ role: 'img' })`
    ${props =>
        props.fontSize ? `font-size: ${props.fontSize}px` : `font-size: 44px;`}
    ${props => (props.fullWidth ? tw`block w-full` : '')}
`

export default EmojiWrapper
