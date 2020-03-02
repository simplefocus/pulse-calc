import React, { useState } from "react"
import { fadeIn } from "react-animations"
import styled, { keyframes } from "styled-components/macro"
import tw from "twin.macro"
import { dispatch, useGlobalState } from "../../state"
import { Label } from "../forms"
import CurrencyInput from "../forms/CurrencyInput"
import InputLeftAddon from "../forms/InputLeftAddon"
import TextInput from "../forms/TextInput"

const fadeInAnimation = keyframes`${fadeIn}`

const Fade = styled.div`
    ${tw`flex flex-wrap px-4 pt-6 md:px-8 lg:px-12`}
    animation: 1s ${fadeInAnimation}
`
const PretendLink = styled.span`
    ${tw`font-bold underline transition-colors duration-75 ease-linear cursor-pointer text-input-green hover:text-pulse-green`};
`

const ExpenseForm = () => {
    const [expenses] = useGlobalState("expenses")
    const [itemAdded, setItemAdded] = useState(false)

    const updateExpenses = (name, event) => {
        dispatch({
            type: "setExpenses",
            key: name,
            value: event.target.value
        })
    }

    const addExepense = key => {
        key = Math.round(Math.random() * 1000) + "-temp"
        dispatch({
            type: "setExpenses",
            key: key,
            value: ""
        })
    }

    const updateExpenseName = (name, newName) => {
        if (newName.target.value !== "") {
            dispatch({
                type: "setExpenseName",
                key: name,
                newName: newName.target.value,
                value: ""
            })
            setItemAdded(true)
        }
    }
    let lastExpense = Object.keys(expenses).length - 1

    return (
        <Fade>
            <Label
                css={`
                    ${tw`mb-6`}
                `}
            >
                How much do you spend annually in these categories?
            </Label>
            <table>
                <tbody>
                    {Object.keys(expenses).map((key, i) => (
                        <tr key={key}>
                            {key.includes("-temp") && (
                                <>
                                    <td
                                        css={`
                                            ${tw`p-2`}
                                        `}
                                    >
                                        <TextInput
                                            inputName={key}
                                            onChange={() => {
                                                console.log(key)
                                            }}
                                            onBlur={updateExpenseName}
                                            placeholder="Type something"
                                            autoFocus
                                        />
                                    </td>
                                    <td
                                        css={`
                                            ${tw`flex items-center p-2`}
                                        `}
                                    >
                                        <InputLeftAddon label="$" />
                                        <CurrencyInput
                                            name={key}
                                            value={expenses[key]}
                                            onChange={(e) => {updateExpenses(key, e)}}
                                            onBlur={(e) => {updateExpenses(key, e)}}
                                        />
                                    </td>
                                </>
                            )}

                            {!key.includes("-temp") && (
                                <>
                                    <td
                                        css={`
                                            ${tw`p-2`}
                                            min-width: 233px
                                        `}
                                    >
                                        {key}
                                    </td>
                                    <td
                                        css={`
                                            ${tw`flex items-center p-2`}
                                        `}
                                    >
                                        <InputLeftAddon label="$" />
                                        <CurrencyInput
                                            name={key}
                                            value={expenses[key]}
                                            onChange={(e) => {updateExpenses(key, e)}}
                                            onBlur={(e) => {updateExpenses(key, e)} }
                                            autoFocus={
                                                i === lastExpense && itemAdded
                                                    ? true
                                                    : false
                                            }
                                        />
                                    </td>
                                </>
                            )}
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td>
                            <PretendLink onClick={addExepense}>
                                Add Row+
                            </PretendLink>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </Fade>
    )
}

export default ExpenseForm
