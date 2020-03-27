import React from 'react'

import { Box } from 'components/Base'

export const ScreenReader = props => (
    <Box
        as="span"
        __css={{
            overflow: 'hidden !important',
            position: 'absolute !important',
            width: '1px !important',
            height: '1px !important',
            margin: '0 !important',
            padding: '0 !important',
            border: '0 !important',
            clip: 'rect(1px, 1px, 1px, 1px)',

            ':active, :focus, :hover': {
                width: 'auto !important',
                height: 'auto !important',
                overflow: 'visible !important',
                clip: 'auto',
            },
        }}
        {...props}
    />
)

export default ScreenReader
