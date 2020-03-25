import styled from "styled-components/macro"
import tw from "twin.macro"

const AppStyles = styled.div.attrs()`
    & {
        min-height: 100vh;
        h1 {
            ${tw`font-sans text-3xl font-bold leading-tight text-dark`}
        }
        h2 {
            ${tw`text-2xl text-dark`}
        }
        h3 {
            ${tw`text-xl font-bold leading-tight`}
        }
        ul {
            ${tw`inline-flex text-dark`}
        }
        li {
            ${tw`mr-5 text-dark`}
        }
        /* a {
            ${tw`underline cursor-pointer text-input-green hover:text-gray-500 hover:underline`}
        } */
    }
`
export default AppStyles
