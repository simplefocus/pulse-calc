import styled from "styled-components/macro"
import tw from "twin.macro"

const AppStyles = styled.div.attrs()`
    & {
        h1 {
            ${tw`font-sans text-6xl text-dark`}
        }
        p {
            ${tw`text-gray-700 text-lg text-dark`}
        }
        h2 {
            ${tw`text-2xl text-dark`}
        }
        h3 {
            ${tw`text-xl font-bold`}
        }
        ul {
            ${tw`inline-flex text-dark`}
        }
        li {
            ${tw`mr-5 text-dark`}
        }
        a {
            ${tw`text-blue-500 hover:text-gray-500 hover:underline`}
        }
    }
`
export default AppStyles
