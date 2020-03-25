import styled from "styled-components/macro"
import tw from "twin.macro"

export const Label = styled.label`
    ${tw`block w-full`}
    small {
        ${tw`text-small-gray`}   
    }
`
export const FormControl = styled.div`
    ${tw`flex flex-wrap items-center`}
    small {
        ${tw`block w-full`}
    }
`
export const RadioGroup = styled.div`
    ${tw`flex justify-between my-2`};
    max-width: 200px;
`
export const FormRow = styled.div`
    ${tw`flex flex-wrap items-start justify-between w-full my-4`}
`
export const Box = styled.div`
    ${tw`block my-6`}
`
