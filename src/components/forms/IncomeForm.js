import React from "react"

import styled from "styled-components/macro"
import tw from "twin.macro"
import Radio from "../Radio"
import TextInput from "../TextInput"
import InputRightAddon from "../InputRightAddon"
import InputLeftAddon from "../InputLeftAddon"
import {Label, FormControl, RadioGroup} from "../forms/"
import { dispatch, useGlobalState } from '../../state';

const IncomeForm = () => {
    const [initialCash] = useGlobalState("initialCash")
    const [profitModel] = useGlobalState("profitModel")
    const [seasonal] = useGlobalState("seasonal")
    const [recurringRevenue] = useGlobalState("recurringRevenue")
    const [projectRevenue] = useGlobalState("projectRevenue")
    const [profitMarginValue] = useGlobalState("profitMarginValue")
    const setProfitModel = event => dispatch({
        profitModel: event,
        type: 'setProfitModel'
    })

    const setSeasonal = value => dispatch({
        seasonal: value,
        type: 'setSeasonal'
    })

    const setText = (type, event) => {
        if (type === "cash-on-hand") {
            dispatch({
                initialCash: event.target.value,
                type: 'setInitialCash'
            })
        } else if (type === "revenue-recurring") {
            dispatch({
                recurringRevenue: event.target.value,
                type: 'setRecurringRevenue'
            })
        } else if (type === "revenue-project") {
            dispatch({
                projectRevenue: event.target.value,
                type: 'setProjectRevenue'
            })
        } else if (type === "profit-margin") {
            dispatch({
                profitMarginValue: event.target.value,
                type: 'setProfitMarginValue'
            })
        }
    }

    return (
        <form
            css={`
                ${tw`flex pt-6 max-w-1/2`}
            `}
        >
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
                        checked={profitModel === "percentage"}
                        onClick={() => setProfitModel("percentage")}
                        onChange={setProfitModel}
                    />
                    <Radio
                        color="input-green"
                        inputName="fixed-model"
                        value="fixed"
                        label="Fixed"
                        checked={profitModel === "fixed"}
                        onClick={() => setProfitModel("fixed")}
                        onChange={setProfitModel}
                    />
                </RadioGroup>
                <FormControl>
                    {profitModel === "fixed" && <InputLeftAddon label="$" />}
                    <TextInput inputName="profit-margin" onChange={setText} value={profitMarginValue}/>
                    {profitModel === "percentage" && (
                        <InputRightAddon label="%" />
                    )}
                </FormControl>

                <FormControl>
                    <Label htmlFor="cash-on-hand">Starting cash on hand</Label>
                    <InputLeftAddon label="$" />
                    <TextInput
                        placeholder="200,000"
                        inputName="cash-on-hand"
                        value={initialCash}
                        onChange={setText}
                    />
                </FormControl>

                <FormControl>
                    <Label htmlFor="revenue-recurring">
                        What percentage of your revenue is recurring?
                    </Label>
                    <TextInput
                        inputName="revenue-recurring"
                        value={recurringRevenue}
                        onChange={setText}
                    />
                    <InputRightAddon label="%" />
                </FormControl>

                <FormControl>
                    <Label htmlFor="revenue-project">
                        What percentage of your revenue is project-based?
                    </Label>
                    <TextInput
                        inputName="revenue-project"
                        value={projectRevenue}
                        onChange={setText}
                    />
                    <InputRightAddon label="%" />
                </FormControl>

                <Label>Is your business seasonal?</Label>
                <RadioGroup>
                    <Radio
                        color="input-green"
                        inputName="seasonal"
                        value="yes"
                        label="Yes"
                        checked={seasonal === "yes"}
                        onClick={() => setSeasonal("yes")}
                        onChange={setSeasonal}
                    />
                    <Radio
                        color="input-green"
                        inputName="not-seasonal"
                        value="no"
                        label="No"
                        checked={seasonal === "no"}
                        onClick={() => setSeasonal("no")}
                        onChange={setSeasonal}
                    />
                </RadioGroup>
            </div>
        </form>
    )
}

export default IncomeForm
