import React from "react"
import { useWizard } from "react-wizard-primitive"
import styled from "styled-components/macro"
import tw from "twin.macro"
import BarChartData from "./steps/BarChartData"
import Link from "./Link"
import Button from "./forms/Button"
import IncomeForm from "./steps/IncomeForm"
import ExpenseForm from "./steps/ExpenseForm"
import PageContainer from "./PageContainer"
import { ReactComponent as Chart } from "../chart.svg"
import Header from "./Header"

const StepperNav = styled.div`
    ${tw`flex flex-col justify-start w-1/3 p-4 pr-12 text-white border-l-8 border-solid border-pulse-green bg-pulse-black`};
    min-width: 250px;
    max-width: 250px;
    p,
    h3 {
        ${tw`text-white`}
    }
    h3 {
        ${tw`text-2xl!`}
    }
    ul {
        ${tw`flex flex-col lg:pt-12`}

        li {
            ${tw`lg:mb-6`}
        }
    }
`
const IntroContainer = styled.div`
    ${tw`flex flex-col flex-wrap justify-between w-full pt-4 pl-12 bg-white`};
    height: calc(100vh - 41px);
    h1 {
        ${tw`mb-8`}
    }
    p {
        ${tw`mb-8`}
    }
    p,
    h1 {
        max-width: 45rem;
    }
`
const EmojiWrapper = styled.span.attrs({ role: "img" })`
    ${tw`block`};
    font-size: 44px;
    width: 100%;
`
const StepperNavHeading = styled.div`
    ${tw`font-bold cursor-pointer`}
    ${props =>
        props.isActive
            ? tw`text-white`
            : tw`text-gray-400`}
        font-size: 21px;
    strong {
        ${tw`block text-pulse-green`};
    }
`
const StepperFooter = styled.div`
    ${tw`flex justify-end w-full p-4 bg-pale-green`};
`
const StepperWrapper = styled.div`
    ${tw`w-full bg-white`};
    p {
        ${tw`text-lg text-gray-700 text-dark`}
    }
`

const Stepper = () => {
    const wizard = useWizard()
    const step0 = wizard.getStep({ routeTitle: "intro" })
    const step1 = wizard.getStep({ routeTitle: "start" })
    const step2 = wizard.getStep({ routeTitle: "target" })
    const step3 = wizard.getStep({ routeTitle: "results" })

    return (
        <PageContainer>
            <StepperNav>
                <p>Agency</p>
                <h3>Cashflow Calculator</h3>
                <ul>
                    <li>
                        <StepperNavHeading
                            onClick={() => wizard.moveToStep(1)}
                            isActive={step1.isActive}
                        >
                            <strong>01</strong> Start
                        </StepperNavHeading>
                    </li>
                    <li>
                        <StepperNavHeading
                            onClick={() => wizard.moveToStep(2)}
                            isActive={step2.isActive}
                        >
                            <strong>02</strong> Target
                        </StepperNavHeading>
                    </li>
                    <li>
                        <StepperNavHeading
                            onClick={() => wizard.moveToStep(3)}
                            isActive={step3.isActive}
                        >
                            <strong>03</strong> Results
                        </StepperNavHeading>
                    </li>
                </ul>
            </StepperNav>
            <StepperWrapper>
                {wizard.activeStepIndex >= 1 && (
                    <Header
                        back={
                            <Link
                                onClick={wizard.previousStep}
                                label="Back"
                                leftIcon
                            />
                        }
                    />
                )}
                {step0.isActive && (
                    <IntroContainer>
                        <Header />
                        <div>
                            <EmojiWrapper aria-label="Dollar Emoji">
                                💸
                            </EmojiWrapper>
                            <h1>
                                How much cash does your agency need to operate
                                effectively?
                            </h1>
                            <p>
                                Take our 2-minute survey, and we'll tell you. In
                                addition, we'll give you proven advice for
                                managing your cash, reinvesting, taking cash out
                                and planning for unexpected expenses.
                            </p>
                            <Button
                                rightIcon
                                disabled={wizard.activeStepIndex === 3}
                                onClick={wizard.nextStep}
                                label="Get Started"
                            />
                        </div>
                        <div
                            css={`
                                ${tw`flex justify-end w-full`}
                            `}
                        >
                            <Chart />
                        </div>
                    </IntroContainer>
                )}
                {step1.isActive && (
                    <>
                        <IncomeForm />
                    </>
                )}
                {step2.isActive && <ExpenseForm />}
                {step3.isActive && <BarChartData />}

                {wizard.activeStepIndex >= 1 && (
                    <Button
                        disabled={wizard.activeStepIndex === 4}
                        onClick={wizard.nextStep}
                        label="Continue"
                    />
                )}

                <StepperFooter></StepperFooter>
            </StepperWrapper>
        </PageContainer>
    )
}

export default Stepper
