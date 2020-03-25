import styled from "styled-components/macro"
import tw from "twin.macro"

const PageContainer = styled.div`
    ${tw`flex flex-wrap w-full bg-white lg:flex-no-wrap`};
    box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.08);
    min-height: 100vh;
`
export default PageContainer
