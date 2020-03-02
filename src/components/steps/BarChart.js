import React, { useEffect } from "react"
import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from "recharts"
import styled from "styled-components/macro"
import tw from "twin.macro"

const formatYAxis = tickItem => {
    return Math.abs(tickItem) > 999
        ? "$" + Math.sign(tickItem) * (Math.abs(tickItem) / 1000).toFixed(1) + "k"
        : "$" + Math.sign(tickItem) * Math.abs(tickItem)
}

const ChartContainer = ({ income, expenses }) => {
    const mergedData = income.map((item, i) =>
        Object.assign({}, item, expenses[i])
    )
    console.log(mergedData)
    useEffect(() => {}, [mergedData])
    // http://recharts.org/en-US/examples/LineBarAreaComposedChart
    return (
        <ResponsiveContainer width="95%" height={450}>
            <ComposedChart
                data={mergedData}
                margin={{
                    top: 60,
                    right: 20,
                    bottom: 20,
                    left: 20
                }}
                barCategoryGap="10px"
                barGap="0"
            >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis dataKey="name" padding={{ left: 50 }} />
                <YAxis tickFormatter={formatYAxis} />
                <Tooltip />
                {/* <Legend /> */}
                {/* <Area
                        type="monotone"
                        dataKey="in"
                        fill="#8AC5F313"
                        stroke="#8AC5F340"
                    /> */}
                <Bar dataKey="in" barSize={20} fill="#19AC6C" />
                <Bar dataKey="out" barSize={20} fill="#F48889" />
                {/* <Line type="monotone" dataKey="uv" stroke="#8AC5F3" /> */}
            </ComposedChart>
        </ResponsiveContainer>
    )
}

export default ChartContainer
