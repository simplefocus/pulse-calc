import { createStore } from "react-hooks-global-state"
import { produce } from "immer"


export const { dispatch, useGlobalState } = createStore(
    (state, action) =>
        produce(state, draft => {
            switch (action.type) {
                case "increment":
                    draft.count += 1
                    break
                case "decrement":
                    draft.count -= 1
                    break
                case "setSeasonal":
                    draft.seasonal = action.seasonal
                    break
                case "setProfitModel":
                    draft.profitModel = action.profitModel
                    break
                case "setInitialCash":
                    draft.initialCash = action.initialCash
                    break
                case "setRecurringRevenue":
                    draft.recurringRevenue = action.recurringRevenue
                    break
                case "setProjectRevenue":
                    draft.projectRevenue = action.projectRevenue
                    break
                case "setProfitMarginValue":
                    draft.profitMarginValue = action.profitMarginValue
                    break
                case "setExpenses":
                    draft.expenses[action.key] = action.value
                    break
                case "setExpenseName":
                    draft.expenses[action.newName] = draft.expenses[action.key]
                    delete draft.expenses[action.key]
                    break
                case "setAnnualAverageIncome":
                    draft.annualAverageIncome = action.annualAverageIncome
                    break
                default:
                    console.log('No action passed')
            }
        }),
    {
        initialCash: "",
        profitModel: "percentage",
        recurringRevenue: "",
        projectRevenue: "",
        seasonal: "yes",
        profitMarginValue: "",
        annualAverageIncome: "",
        months: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "June",
            "July",
            "Aug",
            "Sept",
            "Oct",
            "Nov",
            "Dec"
        ],
        expenses: {
            "Compensation and Payroll": "",
            Contractors: "",
            Admin: "",
            "Sales & Marketing": "",
            "Rent & Facility": "",
            Software: ""
        }
    }
)
