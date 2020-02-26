import React from "react"
import tw from "twin.macro"
import styled from "styled-components/macro"
import { ReactComponent as Logo } from "../logo.svg"


const Heading = tw.h1`mt-8 mb-2 text-4xl font-sans font-bold`
const HeaderContainer = styled.div`
    ${tw`p-4 bg-pale-green md:p-8 lg:p-12`}
    min-height: 35vh;
    width: 100%;
`
const SubHeading = styled.p`
    max-width: 40rem
`

// const Paragraph = tw.p`flex items-center py-8 justify-center text-xl text-white bg-blue-500 max-w-40`

const Header = () => {
    return (
        <HeaderContainer>
            <Logo />
            <div>
                <Heading>Cashflow Calculator</Heading>
                <SubHeading>
                    Pretium nam euismod feugiat lobortis ornare justo donec
                    phasellus volutpat est, id nec dis accumsan sapien aliquam
                    nibh sodales dolor, tristique interdum enim tempor amet
                    class tempus eget ad.
                </SubHeading>
            </div>
        </HeaderContainer>
    )
}

export default Header
