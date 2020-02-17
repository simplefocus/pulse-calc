import React, { useEffect, useRef } from "react"
import { select } from "d3-selection"
import { max } from "d3-array"
import { scaleLinear, scaleBand } from "d3-scale"
import { axisLeft, axisBottom } from "d3-axis"
import { useGlobalState } from "../GlobalState"

// margin convention often used with D3
const margin = { top: 80, right: 60, bottom: 80, left: 100 }
const width = 800 - margin.left - margin.right
const height = 800 - margin.top - margin.bottom
const color = ["#00AD6A", "#080c16", "#F68787", "#23ea76"]

const BarChart = ({ data }) => {
    const d3svg = useRef(null)
    const [months] = useGlobalState("months")
    const isIterable = object =>
        object != null && typeof object[Symbol.iterator] === "function"

    useEffect(() => {
        if (data && d3svg.current) {
            console.log(data)
            let svg = select(d3svg.current)
            if (isIterable(data)) {
                // scales
                // const xMax = data[11].end
                const yMin = data[0].start
                const yMax = data[11].start

                const xScale = scaleBand()
                    .domain(months.map(m => m))
                    .rangeRound([0, width])
                    .padding(0.1)

                const yScale = scaleLinear()
                    .domain([yMin, yMax])
                    .range([height, 0])

                // append group translated to chart area
                svg.selectAll("g").remove()
                svg = svg
                    .append("g")
                    .attr(
                        "transform",
                        `translate(${margin.left}, ${margin.top})`
                    )
                    

                // draw header
                // svg.append("g")
                //     .attr("class", "bar-header")
                //     .attr("transform", `translate(0, ${-margin.top / 2})`)
                //     .append("text")
                //     .append("tspan")
                //     .text("Cash Flow Calculator")
                // draw bars
                svg.selectAll(".bar").remove()
                svg.selectAll(".bar")
                    .data(data)
                    .enter()
                    .append("rect")
                    .attr("class", "bar")
                    .attr("x", (d, i) => i * (width / 12))
                    .attr("y", d => yScale(d.start))
                    .attr("height", d => height - yScale(d.start))
                    .attr("width", xScale.bandwidth() / 2)
                    .style("fill", function(d, i) {
                        return color[i % 4] // use colors in sequence
                    })

                // draw axes
                const xAxis = axisBottom(xScale)
                const yAxis = axisLeft(yScale)
                let xAxisSVG = document.getElementById("xaxis")

                if (xAxisSVG != null) {
                    let svg = select(d3svg.current)
                    svg.select(".x.axis").call(xAxis)
                    svg.select(".y.axis").call(yAxis)
                } else {
                    svg.append("g")
                        .attr("class", "x axis")
                        .attr("id", "xaxis")
                        .attr(
                            "transform",
                            `translate(0,${height + margin.bottom / 3})`
                        )
                        .call(xAxis)

                    svg.append("g")
                        .attr("class", "y axis")
                        .attr("id", "yaxis")
                        .call(yAxis)
                }
                svg.exit().remove()
            }
        }
    }, [data])

    return (
        <>
            <svg
                className="bar-chart-container"
                width={width + margin.left + margin.right}
                height={height + margin.top + margin.bottom}
                role="img"
                ref={d3svg}
            ></svg>
        </>
    )
}

export default BarChart
