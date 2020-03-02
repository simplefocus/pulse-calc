import React from "react"
import MaskedInput from "react-text-mask"
import createNumberMask from "text-mask-addons/dist/createNumberMask"
import styled from "styled-components/macro"
import tw from "twin.macro"
import tailwind from "tailwind-config"
import config from "../../tailwind.config.js"

const defaultMaskOptions = {
    prefix: "",
    suffix: "",
    includeThousandsSeparator: true,
    thousandsSeparatorSymbol: ",",
    allowDecimal: true,
    decimalSymbol: ".",
    decimalLimit: 2, // how many digits allowed after the decimal
    integerLimit: 7, // limit length of integer numbers
    allowNegative: false,
    allowLeadingZeroes: false
}

const CurrencyInput = ({ maskOptions, ...inputProps }) => {
    const {
        inputName,
        value,
        color,
        placeholder,
        onChange,
        onBlur,
        autoFocus,
        small,
        xSmall
    } = inputProps
    const blurIsFunction = onBlur instanceof Function
    const changeIsFunction = onChange instanceof Function
    const currencyMask = createNumberMask({
        ...defaultMaskOptions,
        ...maskOptions
    })

    return (
        <MaskedInput
            css={`
                ${tw`items-center self-start block px-4 my-2 bg-white border border-solid outline-none border-input-border shadow-input`};
                height: 40px;
                transition: all 0.2s;
                &:focus,
                &:active {
                    ${tw`bg-input-gray`}
                }
                border: 1px solid #e0e0e0;
                border-radius: 3px;
                ${small ? `max-width: 158px` : ``}
                ${xSmall ? `max-width: 91px` : ``}
            `}
            // name={inputName}
            // value={value}
            // placeholder={placeholder}
            // onBlur={blurIsFunction ? value => onBlur(inputName, value) : null}
            // onChange={
            //     changeIsFunction
            //         ? value => onChange(inputName, value)
            //         : () => console.log("foo")
            // }
            // autoFocus={autoFocus}
            mask={currencyMask}
            {...inputProps}
        />
    )
}

export default CurrencyInput
