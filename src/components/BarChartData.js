import React, { useState, useEffect } from "react"
import { csv } from "d3-fetch"
import { ascending } from "d3-array"
import BarChart from "./BarChart"
import ChartForm from "./ChartForm"
import { Flex } from "@chakra-ui/core"
import { useGlobalState } from "../GlobalState"

const parseNA = string => (string === "NA" ? undefined : string)

function type(d) {
    return {
        genre: parseNA(d.genre),
        revenue: +d.revenue
    }
}

function filterData(data) {
    return data.filter(d => {
        return d.revenue > 0
    })
}

function prepareBarChartData(data) {
    let cleanedData = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]
    console.log(data)
    cleanedData = cleanedData.map((current, i) => ({
        start: data[0] * (i + 1),
        end: data[1] * ((i + 1) * 2)
    }))
    return cleanedData
}

const BarChartData = () => {
    const [barChartData, setBarChartData] = useState(null)
    const [initialCash] = useGlobalState("initialCash")
    const [cashFromCustomers] = useGlobalState("cashFromCustomers")

    useEffect(() => {
        // csv("/static/data/barchart.csv", type).then(data => {
        //     const dataClean = filterData(data)
        //     setBarChartData(
        //         prepareBarChartData(dataClean).sort((a, b) => {
        //             return ascending(a.genre, b.genre)
        //         })
        //     )
        // })
        // setBarChartData(prepareBarChartData([initialCash, cashFromCustomers]))
    }, [])

    useEffect(() => {
        let data = [initialCash, cashFromCustomers]
        setBarChartData(prepareBarChartData(data))
    }, [initialCash, cashFromCustomers])

    if (barChartData === null) {
        return <p>Loading...</p>
    }

    return (
        <Flex>
            <BarChart data={barChartData} />
        </Flex>
    )
}

export default BarChartData
