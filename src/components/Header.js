import React from "react"
import tw from "twin.macro"
import styled from "styled-components/macro"
import { ReactComponent as Logo } from "../logo.svg"


const Heading = tw.h1`mb-2 font-sans font-bold`

const HeaderContainer = styled.div`
    ${tw`p-4 mx-auto bg-pale-green md:p-8 lg:p-12 lg:px-16`}
    width: 90%;
    max-width: 1102px;
`
const SubHeading = styled.p`
    max-width: 50rem
`

const Header = () => {
    return (
        <HeaderContainer>
            <div>
                <div css={`${tw`flex justify-between`}`}>
                <Heading>Take The Agency Cash Quiz</Heading> <Logo />
                </div>
                <SubHeading>
                    <strong>How much cash does your agency need to be able to operate effectively?</strong> Take our agency cash quiz, and we'll tell you. In addition, we'll give you proven advice for managing your cash, reinvesting, taking cash out and planning for unexpected expenses.
                </SubHeading>
            </div>
        </HeaderContainer>
    )
}

export default Header
