import React from "react"
import { fadeIn } from "react-animations"
import styled, { keyframes } from "styled-components/macro"
import tw from "twin.macro"
import { dispatch, useGlobalState } from "../../state"
import { Box, FormControl, FormRow, Label, RadioGroup } from "../forms"
import CurrencyInput from "../forms/CurrencyInput"
import InputLeftAddon from "../forms/InputLeftAddon"
import InputRightAddon from "../forms/InputRightAddon"
import Radio from "../forms/Radio"
import TextInput from "../forms/TextInput"

const fadeInAnimation = keyframes`${fadeIn}`

const Fade = styled.div`
    ${tw`flex flex-wrap px-4 pt-6 md:px-8 lg:px-12`}
    animation: 1s ${fadeInAnimation};
`

const Start = () => {
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
            <FormRow
                css={`
                    ${tw`justify-start`}
                `}
            >
                <Label htmlFor="cash-on-hand">
                    Tell us about your trailing twelve months.
                </Label>
                <Box
                    css={`
                        ${tw`lg:mt-0 lg:w-1/4`}
                    `}
                >
                    <FormControl>
                        <InputLeftAddon label="$" />
                        <TextInput
                            placeholder="200,000"
                            inputName="cash-on-hand"
                            value={initialCash}
                            onChange={setText}
                            small
                        />
                        <small>Total revenue</small>
                    </FormControl>
                </Box>
                <Box
                    css={`
                        ${tw`lg:mt-0 lg:w-1/4`}
                    `}
                >
                    <FormControl>
                        {profitModel === "cash" && <InputLeftAddon label="$" />}
                        <TextInput
                            inputName="profit-margin"
                            onChange={setText}
                            value={profitMarginValue}
                            xSmall
                        />
                        {profitModel === "percentage" && (
                            <InputRightAddon label="%" />
                        )}
                        <small>Profit margin</small>
                    </FormControl>
                </Box>
            </FormRow>
            <FormRow>
                <Box>
                    <FormControl>
                        <Label htmlFor="revenue-recurring">
                            Roughly how much of your revenue was recurring?
                            <small>Subscriptions, retainers, etc.</small>
                        </Label>
                        <TextInput
                            inputName="revenue-recurring"
                            value={recurringRevenue}
                            onChange={setText}
                            small
                        />
                        <InputRightAddon label="%" />
                    </FormControl>
                </Box>
            </FormRow>
            <FormRow>
                <Box>
                    <Label>
                        Did any single client make up more than 15% of that
                        revenue?
                    </Label>
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
                </Box>
            </FormRow>
            <FormRow>
                <Box>
                    <Label>
                        Did any single client make up more than 30% of that
                        revenue?
                    </Label>
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
                </Box>
            </FormRow>
        </Fade>
    )
}

export default Start
