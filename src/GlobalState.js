import { createGlobalState } from "react-hooks-global-state"

const { setGlobalState, useGlobalState, getGlobalState } = createGlobalState({
    initialCash: "",
    profitModel: "percentage",
    recurringRevenue: "",
    projectRevenue: "",
    seasonal: "yes",
    months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
    expenses: {
        "Compensation and Payroll" : "",
        "Contractors" : "",
        "Admin" : "",
        "Sales & Marketing" : "",
        "Rent & Facility" : "",
        "Software" : ""
    }
})

// export const setPersonFirstName = firstName => {
//     setGlobalState("person", v => ({ ...v, firstName }))
// }

// export const setPersonLastName = lastName => {
//     setGlobalState("person", v => ({ ...v, lastName }))
// }

// export const setPersonAge = age => {
//     setGlobalState("person", v => ({ ...v, age }))
// }

export const setInitialCash = amount => {
    setGlobalState("initialCash", v => amount)
}

export const setProfitModel = amount => {
    setGlobalState("profitModel", v => amount)
}

export const setRecurringRevenue = amount => {
    setGlobalState("recurringRevenue", v => amount)
}

export const setProjectRevenue = amount => {
    setGlobalState("projectRevenue", v => amount)
}

export const setSeasonal = bool => {
    setGlobalState("seasonal", v => bool)
}
export const setExpenses = (type, value) => {
    let prev = getGlobalState("expenses")
    if (type in prev) {
        // prev[type] = value
        setGlobalState("expenses", v => ({ ...v.type, value }))
    }
    // setGlobalState("expenses", v => object)
}

export { useGlobalState }
