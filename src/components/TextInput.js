import React from "react"
import styled from "styled-components/macro"
import tw from "twin.macro"
import tailwind from "tailwind-config"
import config from "../tailwind.config.js"

const theme = tailwind.theme(config)

const TextInput = props => {
    const { inputName, value, color, placeholder, onChange, onBlur, autoFocus } = props
    const blurIsFunction = (onBlur instanceof Function)
    const changeIsFunction = (onChange instanceof Function)
    return (
        <input
            css={`
                ${tw`items-center self-start block px-4 my-2 bg-white border border-solid outline-none border-input-border`};
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
            onBlur={blurIsFunction ? value => onBlur(inputName, value) : null}
            onChange={changeIsFunction ? value => onChange(inputName, value) : () => (console.log('foo'))}
            autoFocus={autoFocus}
        />
    )
}
export default TextInput
