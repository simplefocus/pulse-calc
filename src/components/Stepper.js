import React, { useState } from "react"
import { Wizard, WizardStep } from "react-wizard-primitive"
import styled from "styled-components/macro"
import tw from "twin.macro"
import BarChartData from "./BarChartData"
import Button from "./Button"
import ChartForm from "./ChartForm"
import Header from "./Header"

const PageContainer = styled.div`
    ${tw`w-full p-4 md:p-8 lg:p-12`};
`
const StepperNav = styled.div`
    ${tw`flex w-full justify-between border-gray-200 border-solid border-b`};
`
const StepperNavHeading = styled.div`
    ${tw`cursor-pointer`}
    ${props => (props.isActive ? tw`text-black` : tw`text-disabled-gray`)}
`
const Stepper = () => {
    return (
        <>
            <Header />
            <PageContainer>
                <Wizard>
                    {({
                        activeStepIndex,
                        nextStep,
                        previousStep,
                        moveToStep
                    }) => (
                        <>
                            <StepperNav>
                                <StepperNavHeading
                                    onClick={() => moveToStep(0)}
                                    isActive={activeStepIndex == 0}
                                >
                                    Step 1<h3>Income</h3>
                                </StepperNavHeading>
                                <StepperNavHeading
                                    onClick={() => moveToStep(1)}
                                    isActive={activeStepIndex == 1}
                                >
                                    Step 2<h3>Expenses</h3>
                                </StepperNavHeading>
                                <StepperNavHeading
                                    onClick={() => moveToStep(2)}
                                    isActive={activeStepIndex == 2}
                                >
                                    Step 3<h3>Results</h3>
                                </StepperNavHeading>
                            </StepperNav>
                            <WizardStep>
                                {({ isActive }) => isActive && <ChartForm />}
                            </WizardStep>

                            <WizardStep>
                                {({ isActive }) => isActive && "Step 2"}
                            </WizardStep>

                            <WizardStep>
                                {({ isActive }) => isActive && <BarChartData />}
                            </WizardStep>
                            <div
                                css={`
                                    ${tw`flex justify-between mt-4`};
                                `}
                            >
                                {activeStepIndex > 0 && (
                                    <Button
                                        leftIcon
                                        disabled={activeStepIndex === 0}
                                        onClick={previousStep}
                                        label="Previous"
                                    />
                                )}

                                {activeStepIndex < 2 && (
                                    <Button
                                        rightIcon
                                        disabled={activeStepIndex === 3}
                                        onClick={nextStep}
                                        label="Continue"
                                        emphasis="to Expenses"
                                    />
                                )}
                            </div>
                        </>
                    )}
                </Wizard>
            </PageContainer>
        </>
    )
}

export default Stepper
