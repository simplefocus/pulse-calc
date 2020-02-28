import React, { useState } from "react"
import styled from "styled-components/macro"
import tw from "twin.macro"
import TextInput from "../forms/TextInput"
import InputLeftAddon from "../forms/InputLeftAddon"
import { Label } from "../forms"
import { dispatch, useGlobalState } from "../../state"

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
        <div
            css={`
                ${tw`px-4 pt-6 my-4 md:px-8 lg:px-12`}
            `}
        >
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
                                        <TextInput
                                            inputName={key}
                                            value={expenses[key]}
                                            onChange={updateExpenses}
                                            onBlur={updateExpenses}
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
                                        <TextInput
                                            inputName={key}
                                            value={expenses[key]}
                                            onChange={updateExpenses}
                                            onBlur={updateExpenses}
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
        </div>
    )
}

export default ExpenseForm
