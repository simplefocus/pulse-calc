import styled from "styled-components/macro"
import tw from "twin.macro"

export const Label = styled.label`
    ${tw`block w-full`}
`
export const FormControl = styled.div`
    ${tw`flex flex-wrap items-center max-w-306`}
`
export const RadioGroup = styled.div`
    ${tw`flex justify-between my-2`};
    max-width: 200px;
`
export const FormRow = styled.div`
    ${tw`flex flex-wrap items-start justify-between w-full my-4 border-b border-solid border-input-gray`}
`
export const Box = styled.div`
    ${tw`block my-6`}
`
