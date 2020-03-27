import React from 'react'
import { ReactComponent as Logo } from 'components/images/logo-lockup.svg'
import { Flex } from 'components/Base'

export const Header = ({ children, icon, ...props }) => {

    return (
        <Flex
            alignItems="center"
            justifyContent={children ? "space-between" : "flex-end"}
            w="100"
            py={[4, 4, 8]}
            px={[4, 4, 8]}
        >
                {children}
                <Logo />
        </Flex>
    )
}

export default Header
