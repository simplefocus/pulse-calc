import React, { useState } from "react"
import { useWizard } from "react-wizard-primitive"
import styled from "styled-components/macro"
import tw from "twin.macro"
import BarChartData from "./steps/BarChartData"
import Button from "./forms/Button"
import IncomeForm from "./steps/IncomeForm"
import ExpenseForm from "./steps/ExpenseForm"

const PageContainer = styled.div`
    ${tw`w-full mx-auto bg-white`};
    width: 90%;
    max-width: 1102px;
    box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.08);
    border: 1px solid #d6dae5;
`
const StepperNav = styled.div`
    ${tw`flex justify-start w-full p-4 border-b border-gray-200 border-solid bg-input-gray`};
`
const StepperNavHeading = styled.div`
    ${tw`ml-3 cursor-pointer`}
    ${props => (props.isActive ? tw`text-black` : tw`text-gray-300`)}
`
const StepperFooter = styled.div`
 ${tw`flex justify-end p-4 mt-4 bg-input-gray`};
`
const Stepper = () => {
    const wizard = useWizard()
    const step1 = wizard.getStep()
    const step2 = wizard.getStep()
    const step3 = wizard.getStep()

    return (
        <PageContainer>
            <StepperNav>
                <StepperNavHeading
                    onClick={() => wizard.moveToStep(0)}
                    isActive={step1.isActive}
                >
                    Step 1: <strong>Income</strong>
                </StepperNavHeading>
                <StepperNavHeading
                    onClick={() => wizard.moveToStep(1)}
                    isActive={step2.isActive}
                >
                    Step 2: <strong>Expenses</strong>
                </StepperNavHeading>
                <StepperNavHeading
                    onClick={() => wizard.moveToStep(2)}
                    isActive={step3.isActive}
                >
                    Step 3: <strong>Results</strong>
                </StepperNavHeading>
            </StepperNav>

                {step1.isActive && <IncomeForm />}
                {step2.isActive && <ExpenseForm />}
                {step3.isActive && <BarChartData />}
                
            <StepperFooter>
                {wizard.activeStepIndex > 0 && (
                    <Button
                        leftIcon
                        disabled={wizard.activeStepIndex === 0}
                        onClick={wizard.previousStep}
                        label="Previous"
                    />
                )}

                {wizard.activeStepIndex < 2 && (
                    <Button
                        rightIcon
                        disabled={wizard.activeStepIndex === 3}
                        onClick={wizard.nextStep}
                        label="Continue"
                        emphasis="to Expenses"
                    />
                )}
            </StepperFooter>
        </PageContainer>
    )
}

export default Stepper
