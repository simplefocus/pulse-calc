import React from "react"
import styled from "styled-components/macro"
import tw from "twin.macro"
import tailwind from "tailwind-config"
import config from "../tailwind.config.js"

const theme = tailwind.theme(config)

const InputRightAddon = props => {
    const { inputName, value, color, label, checked, onChange } = props
    return (
        <div
            css={`
                ${tw`flex items-center text-xl justify-center bg-input-gray px-4 select-none border border-input-border`};
                height: 40px;
                margin-left: -1px;
                flex: 0 0 auto;
                white-space: nowrap;
                margin-left: -1px;
                border-left-color: transparent;
            `}
        >
            {label}
        </div>
    )
}
export default InputRightAddon
