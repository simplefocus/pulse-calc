import React from "react"
import { useWizard } from "react-wizard-primitive"
import styled from "styled-components/macro"
import tw from "twin.macro"
import BarChartData from "./BarChartData"
import Button from "./Button"
import IncomeForm from "./forms/IncomeForm"
import ExpenseForm from "./forms/ExpenseForm"

const PageContainer = styled.div`
    ${tw`w-full p-4 md:p-8 lg:p-12`};
`
const StepperNav = styled.div`
    ${tw`flex w-full justify-between border-gray-200 border-solid border-b`};
`
const StepperNavHeading = styled.div`
    ${tw`cursor-pointer`}
    ${props => (props.isActive ? tw`text-black` : tw`text-gray-300`)}
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
                    Step 1<h3>Income</h3>
                </StepperNavHeading>
                <StepperNavHeading
                    onClick={() => wizard.moveToStep(1)}
                    isActive={step2.isActive}
                >
                    Step 2<h3>Expenses</h3>
                </StepperNavHeading>
                <StepperNavHeading
                    onClick={() => wizard.moveToStep(2)}
                    isActive={step3.isActive}
                >
                    Step 3<h3>Results</h3>
                </StepperNavHeading>
            </StepperNav>

            {step1.isActive && <IncomeForm />}
            {step2.isActive && <ExpenseForm />}
            {step3.isActive && <BarChartData />}

            <div
                css={`
                    ${tw`flex justify-between mt-4`};
                `}
            >
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
            </div>
        </PageContainer>
    )
}

export default Stepper
