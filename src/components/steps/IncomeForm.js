import React from "react"
import { fadeIn, fadeOutLeft } from "react-animations"
import styled, { keyframes } from "styled-components/macro"
import tw from "twin.macro"
import { dispatch, useGlobalState } from "../../state"
import { Box, FormControl, FormRow, Label, RadioGroup } from "../forms"
import CurrencyInput from "../forms/CurrencyInput"
import InputLeftAddon from "../forms/InputLeftAddon"
import InputRightAddon from "../forms/InputRightAddon"
import Radio from "../forms/Radio"
import TextInput from "../forms/TextInput"
import Header from "../Header"

const fadeInAnimation = keyframes`${fadeIn}`

const Fade = styled.div`
    ${tw`flex flex-wrap px-4 pt-6 md:px-8 lg:px-12`}
    animation: 1s ${fadeInAnimation};
`

const IncomeForm = () => {
    const [initialCash] = useGlobalState("initialCash")
    const [profitModel] = useGlobalState("profitModel")
    const [seasonal] = useGlobalState("seasonal")
    const [recurringRevenue] = useGlobalState("recurringRevenue")
    const [annualAverageIncome] = useGlobalState("annualAverageIncome")
    const [profitMarginValue] = useGlobalState("profitMarginValue")

    const setProfitModel = event =>
        dispatch({
            profitModel: event,
            type: "setProfitModel",
        })

    const setSeasonal = value =>
        dispatch({
            seasonal: value,
            type: "setSeasonal",
        })

    const setText = (type, event) => {
        if (type === "cash-on-hand") {
            dispatch({
                initialCash: event.target.value,
                type: "setInitialCash",
            })
        } else if (type === "revenue-recurring") {
            dispatch({
                recurringRevenue: event.target.value,
                type: "setRecurringRevenue",
            })
        } else if (type === "revenue-project") {
            dispatch({
                projectRevenue: event.target.value,
                type: "setProjectRevenue",
            })
        } else if (type === "profit-margin") {
            dispatch({
                profitMarginValue: event.target.value,
                type: "setProfitMarginValue",
            })
        } else if (type === "annual-average-income") {
            dispatch({
                annualAverageIncome: event.target.value,
                type: "setAnnualAverageIncome",
            })
        }
    }

    return (
        <Fade>
            <h1>Let's start with some numbers.</h1>
            <FormRow>
                <Box>
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
                            inputName="cash-model"
                            value="cash"
                            label="Cash"
                            checked={profitModel === "cash"}
                            onClick={() => setProfitModel("cash")}
                            onChange={setProfitModel}
                        />
                    </RadioGroup>

                    <FormControl>
                        {profitModel === "cash" && <InputLeftAddon label="$" />}
                        <TextInput
                            inputName="profit-margin"
                            onChange={setText}
                            value={profitMarginValue}
                            small
                        />
                        {profitModel === "percentage" && (
                            <InputRightAddon label="%" />
                        )}
                        <span
                            css={`
                                ${tw`md:ml-2`}
                            `}
                        >
                            per year
                        </span>
                    </FormControl>
                </Box>
                <Box>
                    <FormControl>
                        <Label htmlFor="cash-on-hand">
                            How much cash are you starting with?
                        </Label>
                        <InputLeftAddon label="$" />
                        <TextInput
                            placeholder="200,000"
                            inputName="cash-on-hand"
                            value={initialCash}
                            onChange={setText}
                        />
                    </FormControl>
                </Box>
            </FormRow>
            <FormRow>
                <Box>
                    <FormControl>
                        <Label htmlFor="revenue-recurring">
                            What percentage of your revenue is recurring?
                        </Label>
                        <TextInput
                            inputName="revenue-recurring"
                            value={recurringRevenue}
                            onChange={setText}
                            xSmall
                        />
                        <InputRightAddon label="%" />
                    </FormControl>
                </Box>
                <Box>
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
                </Box>
            </FormRow>

            <FormRow>
                <Box
                    css={`
                        ${tw`w-1/3`}
                    `}
                >
                    <FormControl>
                        <Label htmlFor="annual-average-income">
                            What's your average annual income?
                        </Label>
                        <InputLeftAddon label="$" />
                        <CurrencyInput
                            value={annualAverageIncome}
                            onChange={e => {
                                setText("annual-average-income", e)
                            }}
                        />
                    </FormControl>
                </Box>
                <Box
                    css={`
                        ${tw`w-1/3`}
                    `}
                >
                    <FormControl>
                        <Label htmlFor="revenue-recurring">
                            How much do you make in a good month?
                        </Label>
                        <InputLeftAddon label="$" />
                        <TextInput
                            inputName="revenue-recurring"
                            value={recurringRevenue}
                            onChange={setText}
                        />
                    </FormControl>
                </Box>
                <Box
                    css={`
                        ${tw`w-1/3`}
                    `}
                >
                    <FormControl>
                        <Label htmlFor="revenue-recurring">
                            How much do you make in a bad month?
                        </Label>
                        <InputLeftAddon label="$" />
                        <TextInput
                            inputName="revenue-recurring"
                            value={recurringRevenue}
                            onChange={setText}
                        />
                    </FormControl>
                </Box>
            </FormRow>
        </Fade>
    )
}

export default IncomeForm
