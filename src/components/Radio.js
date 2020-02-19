import React from "react"
import styled from "styled-components/macro"
import tw from "twin.macro"
import tailwind from "tailwind-config"
import config from "../tailwind.config.js"
import svgToDataUri from "mini-svg-data-uri"

const theme = tailwind.theme(config)
const icon = iconColor =>
    `<svg viewBox="0 0 16 16" fill="${iconColor}" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="3"/></svg>`

const Radio = props => {
    const { inputName, value, color, label, checked, onChange } = props
    return (
        <label htmlFor={inputName}>
            <input
                css={`
                ${tw`appearance-none inline-block align-middle text-white select-none border-gray-200 border border border-solid rounded-full flex-shrink-0 mr-2`};
                height: 20px;
                width: 20px;
                color-adjust: exact;
                &:checked {
                    background-image: url("${svgToDataUri(
                        icon(theme.colors[color])
                    )}");
                    background-position: center;
                    background-size: 100% 100%;
                }
            `}
                type="radio"
                name={inputName}
                value={value}
                checked={checked}
                onChange={() => onChange(value)}
            />
            {label}
        </label>
    )
}
export default Radio
