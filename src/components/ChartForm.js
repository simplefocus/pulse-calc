import React, { useState, useEffect } from "react"

import {
    setInitialCash,
    setCashFromCustomers,
    useGlobalState
} from "../GlobalState"
import styled from "styled-components/macro"
import tw from "twin.macro"
import Radio from "./Radio"
import TextInput from "./TextInput"
import InputRightAddon from "./InputRightAddon"
import InputLeftAddon from "./InputLeftAddon"

const Label = styled.label`
    ${tw`font-bold block w-full`}
`
const FormControl = styled.div`
    ${tw`flex flex-wrap relative items-center`}
`
const RadioGroup = styled.div`
    ${tw`flex justify-between my-2`};
    max-width: 200px;
`
const ChartForm = () => {
    const [initialCash] = useGlobalState("initialCash")
    const [cashFromCustomers] = useGlobalState("cashFromCustomers")
    const [profitModel, setProfitModel] = useState("percentage")
    const [profitMargin, setprofitMargin] = useState(null)

    const radioSelect = event => {
        setProfitModel(event)
    }

    const setText = (type, event) => {
        console.log(type)
        if (type == "cash-balance") {
            setInitialCash(event.target.value)
        }
        if (type == "customer-cash") {
            setCashFromCustomers(event.target.value)
        }
    }

    return (
        <form display="flex" width="25%" pt={6}>
            <div
                css={`
                    ${tw`my-4`}
                `}
            >
                <Label>Desired Profit Margin</Label>
                <RadioGroup>
                    <Radio
                        color="input-green"
                        inputName="percentage-model"
                        value="percentage"
                        label="Percentage"
                        checked={profitModel == "percentage"}
                        onClick={() => setProfitModel("percentage")}
                        onChange={radioSelect}
                    />
                    <Radio
                        color="input-green"
                        inputName="fixed-model"
                        value="fixed"
                        label="Fixed"
                        checked={profitModel == "fixed"}
                        onClick={() => setProfitModel("fixed")}
                        onChange={radioSelect}
                    />
                </RadioGroup>
                <div
                    css={`
                        ${tw`flex items-center`};
                        max-width: 200px;
                    `}
                >
                    {profitModel == "fixed" && <InputLeftAddon label="$" />}
                    <TextInput inputName="profit-margin" />
                    {profitModel == "percentage" && (
                        <InputRightAddon label="%" />
                    )}
                </div>

                <FormControl>
                    <Label htmlFor="cash-balance">Starting cash balance</Label>
                    <InputLeftAddon label="$" />
                    <TextInput
                        placeholder="200,000"
                        inputName="cash-balance"
                        value={initialCash}
                        onChange={setText}
                    />
                </FormControl>

                <FormControl>
                    <Label htmlFor="cash-balance">Other value</Label>
                    <InputLeftAddon label="$" />
                    <TextInput
                        placeholder="15,000"
                        inputName="customer-cash"
                        value={cashFromCustomers}
                        onChange={setText}
                    />
                </FormControl>
            </div>
        </form>
    )
}

export default ChartForm
