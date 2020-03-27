import React, { useEffect, useState } from "react"
import { useGlobalState } from "../../state"
import { convertToNumber, sum } from "utils"
import ChartContainer from "./BarChart"

const months = [
    { name: "M1" },
    { name: "M2" },
    { name: "M3" },
    { name: "M4" },
    { name: "M5" },
    { name: "M6" },
    { name: "M7" },
    { name: "M8" },
    { name: "M9" },
    { name: "M10" },
    { name: "M11" },
    { name: "M12" }
]

function prepareIncome(data) {
    let cleanedIncomeData = months.map((current, i) => ({
        name: current.name,
        in: Math.round(parseFloat(convertToNumber(data)) / 12)
    }))
    return cleanedIncomeData
}

function prepareExpenses(data) {
    let cleanedExpensesData = months.map((current, i) => ({
        name: current.name,
        out: Math.round(sum(data) / 12)
    }))
    return cleanedExpensesData
}

const BarChartData = () => {
    const [incomeData, setIncomeData] = useState(null)
    const [expensesData, setExpensesData] = useState(null)
    const [annualAverageIncome] = useGlobalState("annualAverageIncome")
    const [expenses] = useGlobalState("expenses")

    useEffect(() => {
        setIncomeData(prepareIncome(annualAverageIncome))
        setExpensesData(prepareExpenses(expenses))
    }, [annualAverageIncome, expenses])

    if (incomeData === null) {
        return <p>Loading...</p>
    }

    return (
        <div>
            <ChartContainer income={incomeData} expenses={expensesData} />
        </div>
    )
}

export default BarChartData
