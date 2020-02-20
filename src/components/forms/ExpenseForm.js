import React from "react"

import { setExpenses, useGlobalState } from "../../GlobalState"
import styled from "styled-components/macro"
import tw from "twin.macro"
import TextInput from "../TextInput"
import InputLeftAddon from "../InputLeftAddon"
import { Label } from "../forms/"

const ExpenseForm = () => {
    const [expenses] = useGlobalState("expenses")

    return (
        <form display="flex" width="25%" pt={6}>
            <div
                css={`
                    ${tw`my-4`}
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
                        {Object.keys(expenses).map(key => (
                            <tr key={key}>
                                <td>{key}</td>
                                <td
                                    css={`
                                        ${tw`flex items-center`}
                                    `}
                                >
                                    <InputLeftAddon label="$" />
                                    <TextInput value={expenses[key]} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>Add Row+</tfoot>
                </table>
            </div>
        </form>
    )
}

export default ExpenseForm
