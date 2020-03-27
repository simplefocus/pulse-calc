import React from 'react'

import { Text, Divider } from 'components/Base'

export const Label = ({ size, hasDivider, ...props }) => {
    const styles = {
        color: 'neutral.400',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: 'wide',
        fontSize: () => {
            switch (size) {
                case 'large':
                    return 'base'
                case 'small':
                    return 'xs'
                case 'fine':
                    return 'xxs'
                default:
                    return 'sm'
            }
        },
    }

    return (
        <>
            {hasDivider && <Divider mt={0} mb={2} />}
            <Text sx={styles} {...props} />
        </>
    )
}

export default Label
