import React, { useState, useEffect } from "react"
import { csv } from "d3-fetch"
import { ascending } from "d3-array"
import ChartContainer from "./BarChart"
import { dispatch, useGlobalState } from "../state"

function sum(obj) {
    var sum = 0
    for (var el in obj) {
        if (obj.hasOwnProperty(el)) {
            if (obj[el] !== "") {
                sum += parseFloat(obj[el])
            }
        }
    }
    return sum
}

function prepareIncome(data) {
    console.log(data)
    let cleanedIncomeData = [
        { name: "Jan" },
        { name: "Feb" },
        { name: "Mar" },
        { name: "Apr" },
        { name: "May" },
        { name: "Jun" },
        { name: "Jul" },
        { name: "Aug" },
        { name: "Sep" },
        { name: "Oct" },
        { name: "Nov" },
        { name: "Dec" }
    ]
    cleanedIncomeData = cleanedIncomeData.map((current, i) => ({
        name: current.name,
        in: Math.round(parseFloat(data) / 12)
    }))
    // console.log(cleanedData)
    return cleanedIncomeData
}

function prepareExpenses(data) {
    let cleanedExpensesData = [
        { name: "Jan" },
        { name: "Feb" },
        { name: "Mar" },
        { name: "Apr" },
        { name: "May" },
        { name: "Jun" },
        { name: "Jul" },
        { name: "Aug" },
        { name: "Sep" },
        { name: "Oct" },
        { name: "Nov" },
        { name: "Dec" }
    ]
    cleanedExpensesData = cleanedExpensesData.map((current, i) => ({
        name: current.name,
        out: Math.round(sum(data) / 12)
    }))
    // console.log(cleanedData)
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
    }, [])


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
