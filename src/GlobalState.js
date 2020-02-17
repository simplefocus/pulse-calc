import { createGlobalState } from "react-hooks-global-state"

const { setGlobalState, useGlobalState } = createGlobalState({
    initialCash: "",
    cashFromCustomers: "",
    months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
    person: {
        age: 20,
        firstName: "",
        lastName: ""
    }
})

export const countUp = () => {
    setGlobalState("count", v => v + 1)
}

export const countDown = () => {
    setGlobalState("count", v => v - 1)
}

export const setPersonFirstName = firstName => {
    setGlobalState("person", v => ({ ...v, firstName }))
}

export const setPersonLastName = lastName => {
    setGlobalState("person", v => ({ ...v, lastName }))
}

export const setPersonAge = age => {
    setGlobalState("person", v => ({ ...v, age }))
}

export const setInitialCash = amount => {
    setGlobalState("initialCash", v => amount)
}

export const setCashFromCustomers = amount => {
    setGlobalState("cashFromCustomers", v => amount)
}

export { useGlobalState }
