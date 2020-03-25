import React, { useState } from "react"
import { fadeIn } from "react-animations"
import styled, { keyframes } from "styled-components/macro"
import tw from "twin.macro"
import { dispatch, useGlobalState } from "../../state"
import Callout from "../Callout"
const fadeInAnimation = keyframes`${fadeIn}`
const Fade = styled.div`
    ${tw`flex flex-wrap px-4 pt-6 mx-auto md:px-8 lg:px-0`}
    animation: 1s ${fadeInAnimation};
    max-width: 742px;
`

const Target = () => {
    return (
        <Fade>
            <Callout>
                <>
                    <p>
                        Based on your answers, you’d need to hold about{" "}
                        <strong>15% of your income</strong>, or{" "}
                        <strong>$XXX,XXX</strong> in cash-on-hand to operate
                        your business effectively.
                    </p>
                    <p>
                        Your safe zone is <strong>$XXX,XXX - $XXX,XXX</strong>
                    </p>
                    <div
                        css={`
                            ${tw`flex justify-end w-full font-bold text-input-green`}
                        `}
                    >
                        🤔{" "}
                        <span
                            css={`
                                ${tw`ml-2 border-b border-dotted border-input-green`}
                            `}
                        >
                            How do we know?
                        </span>
                    </div>
                </>
            </Callout>
            <h1 css={`${tw`my-8`}`}>
                Tell us a little more, and we’ll give you a model that you can
                use to manage your cashflow.
            </h1>
        </Fade>
    )
}

export default Target
