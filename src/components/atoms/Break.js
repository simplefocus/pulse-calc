import React from 'react'

import { Box } from 'components/Base'

export const Break = props => (
    <Box as="br" display={{ _: 'none', md: 'block' }} {...props} />
)

export default Break
