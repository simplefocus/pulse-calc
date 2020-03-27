import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components/macro'

const Callout = ({ children }) => {
    return (
        <div
            css={[
                tw`w-full p-8 rounded bg-pale-green`,
                `p {
                    ${tw`mt-2`}
                }`,
            ]}
        >
            {children}
        </div>
    )
}
export default Callout
