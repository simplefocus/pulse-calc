import React from 'react'

import { Box } from 'components/Base'

export const Container = ({ children, ...props }) => (
    <Box width="full" maxWidth="xl" m="0 auto" px={8} {...props}>
        {children}
    </Box>
)

export default Container
