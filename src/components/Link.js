import React from "react"
import styled from "styled-components/macro"
import tw from "twin.macro"
import svgToDataUri from "mini-svg-data-uri"

const arrowLeft = () =>
    `<svg width="12" height="11" xmlns="http://www.w3.org/2000/svg"><text transform="rotate(-180 6 8)" fill="#464951" fill-rule="evenodd" font-family="WorkSans-Regular, Work Sans" font-size="16" opacity=".8"><tspan x="0" y="16">→</tspan></text></svg>`

const Link = props => {
    const {
        inputName,
        label,
        emphasis,
        rightIcon,
        leftIcon,
        onClick,
        disabled,
    } = props

    return (
        <span
            css={`
                ${tw`no-underline cursor-pointer text-dark hover:underline hover:text-input-green`}
                transition: .1s ease;
                :hover:not(:disabled) {
                    background-position: 0% 7px;
                }
                &:disabled {
                    ${tw`cursor-not-allowed bg-pale-green`}
                    color: #062C2730;
                    strong {
                        color: #062c2730;
                    }
                }
                ${leftIcon
                    ? `background-image: url("${svgToDataUri(arrowLeft())}");
                        background-repeat: no-repeat;
                        background-position: 7% 7px;
                        background-size: 12px 11px;
                        padding-left: 1.5rem;
                            `
                    : ""}
            `}
            disabled={disabled}
            onClick={onClick}
        >
            {label} {emphasis}
        </span>
    )
}
export default Link
