import React from "react"
import { useWizard } from "react-wizard-primitive"
import styled from "styled-components/macro"
import tw from "twin.macro"
import BarChartData from "./steps/BarChartData"
import Link from "./Link"
import Button from "./forms/Button"
import Start from "./steps/Start"
import Target from "./steps/Target"
import ExpenseForm from "./steps/ExpenseForm"
import PageContainer from "./PageContainer"
import { ReactComponent as Chart } from "../chart.svg"
import Header from "./Header"

const StepperNav = styled.div`
    ${tw`flex flex-col justify-start w-full p-4 pr-12 text-white border-l-8 border-solid lg:w-1/4 border-pulse-green bg-pulse-black`};
    p,
    h3 {
        ${tw`text-white`}
    }
    h3 {
        ${tw`text-2xl!`}
    }
    ul {
        ${tw`flex lg:flex-col lg:pt-12`}

        li {
            ${tw`lg:mb-6`}
        }
    }
    max-width: 250px;
`
const IntroContainer = styled.div`
    ${tw`flex flex-col justify-between w-full pt-4 pl-12 bg-white`};
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
    ${tw`block w-full mb-4`};
    font-size: 44px;
`
const StepperNavHeading = styled.div`
    ${tw`font-bold cursor-pointer`}
    ${props =>
        props.isActive
            ? tw`text-white`
            : tw`text-transparent-green`}
        font-size: 21px;
    strong {
        ${tw`block text-pulse-green`};
    }
`
const StepperFooter = styled.div`
    ${tw`absolute bottom-0 left-0 right-0 flex justify-end w-full p-4 bg-pale-green`};
`
const StepperWrapper = styled.div`
    ${tw`relative flex-grow w-full bg-white lg:w-3/4`};
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
                {step1.isActive && <Start />}
                {step2.isActive && <Target />}
                {step3.isActive && <BarChartData />}

                {wizard.activeStepIndex >= 1 && (
                    <div
                        css={`
                            ${tw`lg:ml-12 lg:mb-8`}
                        `}
                    >
                        <Button
                            disabled={wizard.activeStepIndex === 4}
                            onClick={wizard.nextStep}
                            label="Continue"
                        />
                    </div>
                )}

                <StepperFooter>
                    <small>©2020 Pulseapp.com, Inc. All Rights Reserved</small>
                </StepperFooter>
            </StepperWrapper>
        </PageContainer>
    )
}

export default Stepper
