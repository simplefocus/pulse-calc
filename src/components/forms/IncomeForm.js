import React from "react"

import {
    setInitialCash,
    setProfitModel,
    setSeasonal,
    setRecurringRevenue,
    setProjectRevenue,
    useGlobalState
} from "../../GlobalState"
import styled from "styled-components/macro"
import tw from "twin.macro"
import Radio from "../Radio"
import TextInput from "../TextInput"
import InputRightAddon from "../InputRightAddon"
import InputLeftAddon from "../InputLeftAddon"
import {Label, FormControl, RadioGroup} from "../forms/"


const IncomeForm = () => {
    const [initialCash] = useGlobalState("initialCash")
    const [profitModel] = useGlobalState("profitModel")
    const [seasonal] = useGlobalState("seasonal")
    const [recurringRevenue] = useGlobalState("recurringRevenue")
    const [projectRevenue] = useGlobalState("projectRevenue")

    const radioSelect = event => {
        setProfitModel(event)
    }

    const seasonalSet = value => {
        setSeasonal(value)
    }

    const setText = (type, event) => {
        console.log(type)
        if (type === "cash-on-hand") {
            setInitialCash(event.target.value)
        } else if (type === "revenue-recurring") {
            setRecurringRevenue(event.target.value)
        } else if (type === "revenue-project") {
            setProjectRevenue(event.target.value)
        }
    }

    return (
        <form
            css={`
                ${tw`flex max-w-1/2 pt-6`}
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
                        onChange={radioSelect}
                    />
                    <Radio
                        color="input-green"
                        inputName="fixed-model"
                        value="fixed"
                        label="Fixed"
                        checked={profitModel === "fixed"}
                        onClick={() => setProfitModel("fixed")}
                        onChange={radioSelect}
                    />
                </RadioGroup>
                <FormControl>
                    {profitModel === "fixed" && <InputLeftAddon label="$" />}
                    <TextInput inputName="profit-margin" onChange={setText} />
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
                        onChange={seasonalSet}
                    />
                    <Radio
                        color="input-green"
                        inputName="not-seasonal"
                        value="no"
                        label="No"
                        checked={seasonal === "no"}
                        onClick={() => setSeasonal("no")}
                        onChange={seasonalSet}
                    />
                </RadioGroup>
            </div>
        </form>
    )
}

export default IncomeForm
