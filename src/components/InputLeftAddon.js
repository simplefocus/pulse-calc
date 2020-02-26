import React from "react"
import styled from "styled-components/macro"
import tw from "twin.macro"
import tailwind from "tailwind-config"
import config from "../tailwind.config.js"

const theme = tailwind.theme(config)

const InputLeftAddon = props => {
    const { inputName, value, color, label, checked, onChange } = props
    return (
        <div
            css={`
                ${tw`flex items-center justify-center px-4 text-xl border select-none bg-input-gray border-input-border`};
                height: 40px;
                margin-left: -1px;
                flex: 0 0 auto;
                white-space: nowrap;
                margin-left: -1px;
                border-right-color: transparent;
            `}
        >
            {label}
        </div>
    )
}
export default InputLeftAddon
