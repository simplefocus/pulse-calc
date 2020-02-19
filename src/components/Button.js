import React from "react"
import styled from "styled-components/macro"
import tw from "twin.macro"
import tailwind from "tailwind-config"
import config from "../tailwind.config.js"
import svgToDataUri from "mini-svg-data-uri"

const theme = tailwind.theme(config)
const arrowRight = () =>
    `<svg height="14" viewBox="0 0 13 14" width="13" xmlns="http://www.w3.org/2000/svg"><text fill="#062c27" fill-rule="evenodd" font-family="WorkSans-Bold, Work Sans" font-size="18" font-weight="bold" transform="translate(-202 -4)"><tspan x="202" y="17">→</tspan></text></svg>`

const arrowLeft = () =>
    `<svg height="14" viewBox="0 0 13 14" width="13" xmlns="http://www.w3.org/2000/svg"><text fill="#062c27" fill-rule="evenodd" font-family="WorkSans-Bold, Work Sans" font-size="18" font-weight="bold" transform="translate(-202 -4)"><tspan x="202" y="17">→</tspan></text></svg>`

const Button = props => {
    const {
        inputName,
        label,
        emphasis,
        rightIcon,
        leftIcon,
        onClick,
        disabled
    } = props

    return (
        <button
            name={inputName}
            css={`
                ${tw`appearance-none outline-none inline-block bg-pulse-green py-4 px-6`}
                transition: .1s ease;
                :hover:not(:disabled) {
                    transform: scale(1.05);
                }
                &:disabled {
                    ${tw`bg-pale-green cursor-not-allowed`}
                    color: #062C2730;
                    strong {
                        color: #062c2730;
                    }
                }
                ${rightIcon
                    ? `background-image: url("${svgToDataUri(arrowRight())}");
                        background-repeat: no-repeat;
                        background-position: 87% center;
                        background-size: 14px 21px;
                        padding-right: 3rem;
                    `
                    : ""}
                ${leftIcon
                    ? `background-image: url("${svgToDataUri(arrowLeft())}");
                    background-repeat: no-repeat;
                        background-position: 7% center;
                        background-size: 14px 21px;
                        padding-left: 3.25rem;
                            `
                    : ""}
            `}
            disabled={disabled}
            onClick={onClick}
        >
            {label} <strong>{emphasis}</strong>
        </button>
    )
}
export default Button
