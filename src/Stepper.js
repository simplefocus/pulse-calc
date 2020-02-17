import React from "react"
import { useWizard } from "react-wizard-primitive"
import ChartForm from "./components/ChartForm"
import BarChartData from "./components/BarChartData"
import { Flex, Box, Button, Heading } from "@chakra-ui/core"
import Header from "./components/Header"
const Stepper = () => {
    const wizard = useWizard()
    const step1 = wizard.getStep()
    const step2 = wizard.getStep()
    const step3 = wizard.getStep()

    return (
        <Flex flexWrap="wrap">
            <Header />

            <Box p={[4, 8, 12]} w={"100%"}>
                <Flex
                    w={"100%"}
                    justifyContent="space-between"
                    borderBottom="1px solid"
                    borderColor="gray"
                >
                    <Box
                        onClick={() => wizard.moveToStep(0)}
                        color={!step1.isActive && "gray.300"}
                        cursor="pointer"
                    >
                        Step 1
                        <Heading as="h3" size="lg">
                            Income
                        </Heading>
                    </Box>
                    <Box
                        onClick={() => wizard.moveToStep(1)}
                        color={!step2.isActive && "gray.300"}
                        cursor="pointer"
                    >
                        Step 2
                        <Heading as="h3" size="lg">
                            Expenses
                        </Heading>
                    </Box>
                    <Box
                        onClick={() => wizard.moveToStep(2)}
                        color={!step3.isActive && "gray.300"}
                        cursor="pointer"
                    >
                        Step 3
                        <Heading as="h3" size="lg">
                            Results
                        </Heading>
                    </Box>
                </Flex>
                {step1.isActive && <ChartForm />}
                {step2.isActive && "Step 2"}
                {step3.isActive && <BarChartData />}
                <Box mt={4} w={"100%"}>
                    {wizard.activeStepIndex > 0 && (
                        <Button
                            bg={"pulseGreen"}
                            leftIcon="arrow-back"
                            disabled={wizard.activeStepIndex === 0}
                            onClick={wizard.previousStep}
                        >
                            Previous
                        </Button>
                    )}

                    {wizard.activeStepIndex < 2 && (
                        <Button
                            bg={"pulseGreen"}
                            rightIcon="arrow-forward"
                            disabled={wizard.activeStepIndex === 3}
                            onClick={wizard.nextStep}
                        >
                            Next
                        </Button>
                    )}
                </Box>
            </Box>
        </Flex>
    )
}

export default Stepper
