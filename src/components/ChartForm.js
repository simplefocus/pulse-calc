import React, { useState, useEffect } from "react"
import {
    NumberInput,
    FormControl,
    FormLabel,
    Flex,
    Input,
    InputGroup,
    InputLeftAddon,
    InputRightAddon
} from "@chakra-ui/core"
import {
    setInitialCash,
    setCashFromCustomers,
    useGlobalState
} from "../GlobalState"

import * as a from "../utils"

const ChartForm = () => {
    const [initialCash] = useGlobalState("initialCash")
    const [cashFromCustomers] = useGlobalState("cashFromCustomers")

    return (
        <form display="flex" width="25%" pt={6}>
            <FormControl>
                <FormLabel htmlFor="cash-balance">
                    Starting cash balance
                </FormLabel>
                <InputGroup>
                    <InputLeftAddon bg="bgGray" children="$" />
                    <Input
                        maxW="200px"
                        alignSelf="flex-start"
                        value={initialCash}
                        onChange={event => setInitialCash(event.target.value)}
                        id="cash-balance"
                        step={1000}
                        placeholder="10000"
                    />
                </InputGroup>

                <FormLabel htmlFor="profit-margin">
                    Desired profit margin
                </FormLabel>
                <InputGroup>
                    <InputRightAddon bg="bgGray" children="%" />
                    <Input
                        maxW="200px"
                        alignSelf="flex-start"
                        // value={cashFromCustomers}
                        // onChange={event => setCashFromCustomers(event)}
                        id="profit-margin"
                    />
                </InputGroup>

                <FormLabel htmlFor="cash-from-customers">
                    Cash received from customers
                </FormLabel>
                <InputGroup>
                    <InputLeftAddon bg="bgGray" children="$" />
                    <Input
                        maxW="200px"
                        alignSelf="flex-start"
                        value={cashFromCustomers}
                        onChange={event => setCashFromCustomers(event.target.value)}
                        id="cash-from-customers"
                        step={1000}
                        placeholder="1000"
                    />
                </InputGroup>
            </FormControl>
        </form>
    )
}

export default ChartForm
