import styled from "styled-components/macro"
import tw from "twin.macro"

export const Label = styled.label`
    ${tw`font-bold block w-full`}
`
export const FormControl = styled.div`
    ${tw`flex flex-wrap items-center my-6`}
`
export const RadioGroup = styled.div`
    ${tw`flex justify-between my-2`};
    max-width: 200px;
`
