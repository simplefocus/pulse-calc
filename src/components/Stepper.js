import { Button, Link } from 'components/atoms'
import { Box, Heading, Text, Flex } from 'components/Base'
import { EmojiWrapper, Header } from 'components/general'
import React from 'react'
import { useWizard } from 'react-wizard-primitive'
import styled from 'styled-components/macro'
import tw from 'twin.macro'
import { ReactComponent as Chart } from '../chart.svg'
import PageContainer from './PageContainer'
import BarChartData from './steps/BarChartData'
import Start from './steps/Start'
import Target from './steps/Target'

const StepperNav = styled.div`
    ${tw`flex flex-col justify-start w-full p-4 pr-12 text-white border-l-8 border-solid lg:w-1/4 border-pulse-green bg-pulse-black lg:max-w-250`};
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
`
const IntroContainer = styled.div`
    ${tw`flex flex-col justify-between w-full px-4 pt-4 bg-white lg:pl-12`};
    height: calc(100vh - 41px);
    p {
        ${tw`mb-8`}
    }
    p,
    h1 {
        max-width: 45rem;
    }
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
    const step0 = wizard.getStep({ routeTitle: 'intro' })
    const step1 = wizard.getStep({ routeTitle: 'start' })
    const step2 = wizard.getStep({ routeTitle: 'target' })
    const step3 = wizard.getStep({ routeTitle: 'results' })

    return (
        <PageContainer>
            <StepperNav>
                <p>Agency</p>
                <Heading as="h3">Cashflow Calculator</Heading>
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
                    <Header>
                        <Link onClick={wizard.previousStep} leftIcon>
                            Back
                        </Link>
                    </Header>
                )}
                {step0.isActive && (
                    <IntroContainer>
                        <Header />
                        <div>
                            <EmojiWrapper fullWidth aria-label="Dollar Emoji">
                                💸
                            </EmojiWrapper>
                            <Heading as="h1" mb="8">
                                How much cash does your agency need to operate
                                effectively?
                            </Heading>
                            <Text as="p">
                                Take our 2-minute survey, and we'll tell you. In
                                addition, we'll give you proven advice for
                                managing your cash, reinvesting, taking cash out
                                and planning for unexpected expenses.
                            </Text>
                            <Button
                                isLarge
                                rightIcon
                                disabled={wizard.activeStepIndex === 3}
                                onClick={wizard.nextStep}
                            >
                                Get Started
                            </Button>
                        </div>
                        <Flex justifyContent="flex-end" w="100">
                            <Chart />
                        </Flex>
                    </IntroContainer>
                )}
                {step1.isActive && <Start />}
                {step2.isActive && <Target />}
                {step3.isActive && <BarChartData />}

                {wizard.activeStepIndex >= 1 && (
                    <Box
                        ml={[4, 'auto', 'auto']}
                        mr={[0, 'auto', 'auto']}
                        mb="24"
                        maxWidth="742px"
                    >
                        <Button
                            disabled={wizard.activeStepIndex === 4}
                            onClick={wizard.nextStep}
                        >
                            Continue
                        </Button>
                    </Box>
                )}

                <StepperFooter>
                    <small>©2020 Pulseapp.com, Inc. All Rights Reserved</small>
                </StepperFooter>
            </StepperWrapper>
        </PageContainer>
    )
}

export default Stepper
