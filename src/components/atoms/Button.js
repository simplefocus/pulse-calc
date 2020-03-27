import React from 'react'
import { theme } from '../../config/theme'

import { Box, Button as PrimitiveButton } from 'components/Base'

export const Button = ({ children, isOutline, isLarge, color, ...props }) => {
    const sharedStyles = {
        position: 'relative',
        p: color === 'white' ? 0 : '2px',
        border: color === 'white' ? '2px solid' : 0,
        borderColor: color === 'white' ? 'white' : '',
        fontWeight: 'bold',
        fontSize: isLarge ? 'lg' : 'base',
        lineHeight: 'snug',
        bg: () => {
            switch (color) {
                case 'primary':
                    return 'primary'
                case 'white':
                    return 'white'
                default:
                    return 'primary'
            }
        },
        
        '.overlay': {
            content: '""',
            display: 'block',
            px: isLarge ? 8 : 6,
            py: isLarge ? 3 : 3,
        },
    }

    const variantStyles = isOutline
        ? // Outline styles
          {
              ...sharedStyles,
              color: () => {
                  switch (color) {
                      case 'blue':
                          return 'misc.blue.300'
                      case 'white':
                          return 'white'
                      default:
                          return 'secondary'
                  }
              },
              bg: color === 'white' && 'transparent',
              '.overlay': {
                  ...sharedStyles['.overlay'],
                  bg: color === 'white' ? 'transparent' : 'white',
              },
              ':hover': {
                  '.overlay': {
                      color: color === 'white' && 'neutral.500',
                      bg: 'neutral.100',
                  },
              },
          }
        : // Fill styles
          {
              ...sharedStyles,
              color: () => {
                  switch (color) {
                      case 'blue':
                          return 'white'
                      default:
                          return 'black'
                  }
              },
              boxShadow: 2,
              ':hover': {
                  color: color !== 'white' && 'neutral.100',
                  bg: color === 'white' && 'neutral.100',
                  boxShadow: 3,
                  transform: 'scale(1.05)'
              },
          }

    return (
        <PrimitiveButton sx={variantStyles} {...props}>
            <Box as="span" className="overlay">
                {children}
            </Box>
        </PrimitiveButton>
    )
}

export default Button
