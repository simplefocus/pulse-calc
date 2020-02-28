import React from "react"
import styled from "styled-components/macro"
import tw from "twin.macro"
import tailwind from "tailwind-config"
import config from "../../tailwind.config.js"

const theme = tailwind.theme(config)

const InputLeftAddon = props => {
    const { inputName, value, color, label, checked, onChange } = props
    return (
        <div
            css={`
                ${tw`z-10 flex items-center justify-center px-4 text-xl border select-none bg-input-gray border-input-border shadow-input`};
                height: 40px;
                margin-right: -1px;
                flex: 0 0 auto;
                white-space: nowrap;
                margin-left: -1px;
                border-right-color: transparent;
                border-top-left-radius: 3px;
                border-bottom-left-radius: 3px;
            `}
        >
            {label}
        </div>
    )
}
export default InputLeftAddon
