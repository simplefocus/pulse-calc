import React from "react"
import { Flex, Box, Heading, Text } from "@chakra-ui/core"
import { ReactComponent as Logo } from '../logo.svg'

const Header = () => {

    return (
        <Box w={"100%"} p={[4, 8 , 12]} bg={"paleGreen"} maxH="35vh">
            <Logo/>
            <Box>
                <Heading as="h1" size="2xl">Cashflow Calculator</Heading>
                <Text maxW="40rem" letterSpacing="wide">Pretium nam euismod feugiat lobortis ornare justo donec phasellus volutpat est, id nec dis accumsan sapien aliquam nibh sodales dolor, tristique interdum enim tempor amet class tempus eget ad.</Text>
            </Box>
        </Box>
    )
}

export default Header