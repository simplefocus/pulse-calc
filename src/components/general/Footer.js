import React from 'react'

import { Box, Flex, Text, Link, Image } from 'components/Base'
import { Container } from 'components/general'

const FooterBlock = ({ heading, links, ...props }) => (
    <Box as="ul" {...props}>
        <Box as="li" pb={2} fontSize="sm" fontWeight="bold">
            {heading}
        </Box>

        {links.map(({ text, url }, idx) => (
            <Box as="li" key={idx} lineHeight="none" pb={2}>
                <Link
                    to={url}
                    fontSize="sm"
                    sx={{ ':hover': { textDecoration: 'underline' } }}
                >
                    {text}
                </Link>
            </Box>
        ))}
    </Box>
)

export const Footer = ({ hideCTA, ...props }) => {

    return (
        <>

            <Box
                position="relative"
                width="vw"
                height="50vmax"
                maxHeight="800px"
            >
                <Image
                    style={{
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        width: '100%',
                        height: '100%',
                    }}
                />
            </Box>

            <Box as="footer" py={32} {...props}>
                <Container>
                    <Flex mx={-4}>
                        <Box width={1 / 4} px={4}>
                            <FooterBlock
                                heading="Próspera"
                                links={[
                                    {
                                        text:
                                            'Sustainable Development Platform',
                                        url: '/platform',
                                    },
                                    {
                                        text: 'About Us',
                                        url: '/about',
                                    },
                                ]}
                            />
                        </Box>

                        <Box width={1 / 4} px={4}>
                            <FooterBlock
                                heading="Roatán"
                                links={[
                                    {
                                        text: 'Doing Business',
                                        url: '/business',
                                    },
                                    {
                                        text: 'Residencies',
                                        url: '/residencies',
                                    },
                                ]}
                            />
                        </Box>

                        <Box width={1 / 4} px={4}>
                            <FooterBlock
                                heading="Contact Us"
                                links={[
                                    {
                                        text: 'Partnership Application',
                                        url: '/partnership-form',
                                    },
                                    {
                                        text: 'Newsletter Signup',
                                        url: '/newsletter',
                                    },
                                ]}
                            />
                        </Box>
                    </Flex>

                    <Text variant="small" mt={24}>
                        &copy; {new Date().getFullYear()} Honduras Próspera -
                        Fine print and any{' '}
                        <Link to="/policy" textDecoration="underline">
                            policy links
                        </Link>
                    </Text>
                </Container>
            </Box>
        </>
    )
}

export default Footer
