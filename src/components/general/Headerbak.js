import React from 'react'

import { Box, Flex, Link, Image } from 'components/Base'
import { Container } from 'components/general'

// Logos
import logo from '@images/logo.png'
import logoRoatan from '@images/logo-roatan.png'
import logoWhite from '@images/logo-white.png'
import logoRoatanWhite from '@images/logo-roatan-white.png'

const utilityLinks = [
    {
        text: 'Platform',
        url: '/platform',
    },
    {
        text: 'About',
        url: '/about',
    },
    {
        text: 'Contact',
        url: '/contact',
    },
]

const mainLinks = [
    {
        text: 'Vision',
        url: '/vision',
    },
    {
        text: 'Business',
        url: '/business',
    },
    {
        text: 'Residencies',
        url: '/residencies',
    },
]

export const Header = ({ inverted, ...props }) => (
    <Box
        as="header"
        position="absolute"
        top={0}
        left={0}
        width="100%"
        backgroundImage={
            inverted &&
            'linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.00) 100%)'
        }
        zIndex="top"
        {...props}
    >
        <Container>
            <Flex
                justifyContent="space-between"
                alignItems="center"
                py={4}
                borderBottom="1px solid"
                borderColor={inverted ? 'white' : 'neutral.200'}
            >
                <Box>
                    <Link to="/" display="block" width="128px">
                        <Image src={inverted ? logoWhite : logo} />
                    </Link>
                </Box>

                <Box>
                    <Flex as="ul" alignItems="center" mx={-4}>
                        {utilityLinks.map(({ text, url }) => (
                            <Box as="li" px={4}>
                                <Link
                                    to={url}
                                    display="block"
                                    color={inverted ? 'white' : 'neutral.500'}
                                    fontWeight="bold"
                                    fontSize="xs"
                                    letterSpacing="0.8px"
                                    textTransform="uppercase"
                                    sx={{
                                        ':hover': {
                                            color: inverted
                                                ? 'neutral.200'
                                                : 'neutral.400',
                                        },
                                    }}
                                >
                                    {text}
                                </Link>
                            </Box>
                        ))}

                        <Box as="li" px={2}>
                            <Box
                                width="1px"
                                height={6}
                                bg={inverted ? 'white' : 'neutral.200'}
                            />
                        </Box>

                        <Box as="li" px={4}>
                            <Flex>
                                <Link
                                    to="/"
                                    display="block"
                                    px={2}
                                    py={1}
                                    color={inverted ? 'neutral.500' : 'white'}
                                    fontWeight="bold"
                                    fontSize="xs"
                                    letterSpacing="0.8px"
                                    textTransform="uppercase"
                                    lineHeight="none"
                                    bg={inverted ? 'white' : 'neutral.500'}
                                    boxShadow={1}
                                >
                                    EN
                                </Link>
                                <Link
                                    to="/es"
                                    display="block"
                                    px={2}
                                    py={1}
                                    fontWeight="bold"
                                    fontSize="xs"
                                    letterSpacing="0.8px"
                                    textTransform="uppercase"
                                    color={inverted && 'white'}
                                    lineHeight="none"
                                >
                                    ES
                                </Link>
                            </Flex>
                        </Box>
                    </Flex>
                </Box>
            </Flex>

            <Flex alignItems="center" py={4}>
                <Box>
                    <Link to="/" display="block" width="166px">
                        <Image src={inverted ? logoRoatanWhite : logoRoatan} />
                    </Link>
                </Box>

                <Box width="1px" height={12} mx={12} bg="neutral.200" />

                <Box position="relative" top="2px">
                    <Flex as="ul" mx={-6}>
                        {mainLinks.map(({ text, url }) => (
                            <Box as="li" px={6}>
                                <Link
                                    to={url}
                                    color={inverted ? 'white' : 'misc.blue.300'}
                                    fontWeight="bold"
                                    fontSize="lg"
                                    sx={{
                                        ':hover': {
                                            color: inverted
                                                ? 'neutral.200'
                                                : 'primary',
                                        },
                                    }}
                                >
                                    {text}
                                </Link>
                            </Box>
                        ))}
                    </Flex>
                </Box>
            </Flex>
        </Container>
    </Box>
)

export default Header
