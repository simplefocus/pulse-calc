import React from 'react'

import { Flex, Link, Image } from 'components/Base'
import { Label } from 'components/atoms'


const arrowLeft = () =>
    `<svg width="12" height="11" xmlns="http://www.w3.org/2000/svg"><text transform="rotate(-180 6 8)" fill="#464951" fill-rule="evenodd" font-family="WorkSans-Regular, Work Sans" font-size="16" opacity=".8"><tspan x="0" y="16">→</tspan></text></svg>`

export const LinkArrow = ({ icon, children, sx, ...props }) => {
    return (
        <Link
            sx={{
                ...sx,
                ':hover': {
                    span: {
                        color: 'primary',
                    },
                },
            }}
            {...props}
        >
            <Flex alignItems="center">
                <Image
                    src={icon ? arrowLeft : ""}
                    width={4}
                    mr={2}
                />
                <Label display="block" color="primary">
                    {children}
                </Label>
            </Flex>
        </Link>
    )
}

export default LinkArrow
