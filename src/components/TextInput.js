import React from "react"
import styled from "styled-components/macro"
import tw from "twin.macro"
import tailwind from "tailwind-config"
import config from "../tailwind.config.js"

const theme = tailwind.theme(config)

const TextInput = props => {
    const { inputName, value, color, placeholder, onChange } = props
    return (
        <input
            css={`
                ${tw`block items-center bg-white border-input-border border border border-solid px-4 my-2 outline-none self-start`};
                height: 40px;
                transition: all 0.2s;
                &:focus,
                &:active {
                    ${tw`bg-input-gray`}
                }
            `}
            type="text"
            name={inputName}
            value={value}
            placeholder={placeholder}
            onChange={value => onChange(inputName, value)}
        />
    )
}
export default TextInput
