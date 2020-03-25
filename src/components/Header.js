import React from "react"
import tw from "twin.macro"
import styled from "styled-components/macro"
import { ReactComponent as Logo } from "../logo-lockup.svg"

const Header = props => {
    const { back } = props
    return (
        <div
            css={`
                ${tw`flex items-center justify-end w-full px-4 lg:px-8`}
                ${back
                    ? `
                    justify-content: space-between;
                    padding: 1rem 2rem;
                    @media screen and (max-width: 1025px) {
                        padding: 1rem;
                    }
                    `
                    : ""}
            `}
        >
            {back}
            <Logo />
        </div>
    )
}

export default Header
