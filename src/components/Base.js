import React, { forwardRef } from 'react'
import styled from 'styled-components'
import css, { get } from '@styled-system/css'
import {
    system,
    compose,
    space,
    color,
    typography,
    layout,
    flexbox,
    grid,
    background,
    border,
    position,
    shadow,
} from 'styled-system'


const base = props => css(props.__css)
const sx = props => css(props.sx)
const variant = ({ theme, variant, tx = '' }) =>
    css(get(theme, 'variants.' + tx + '.' + variant))(theme)

export const Box = styled.div(
    base,
    variant,
    sx,
    props => props.css,
    system({
        textTransform: true,
        textDecoration: true,
        transform: true,
    }),
    compose(
        space,
        color,
        typography,
        layout,
        flexbox,
        grid,
        background,
        border,
        position,
        shadow
    )
)

export const Flex = forwardRef((props, ref) => (
    <Box
        ref={ref}
        tx="flex"
        {...props}
        __css={css({
            display: 'flex',
        })}
    />
))

export const Grid = forwardRef((props, ref) => (
    <Box
        ref={ref}
        tx="grid"
        {...props}
        __css={css({
            display: 'grid',
        })}
    />
))

export const Text = forwardRef((props, ref) => (
    <Box ref={ref} as="p" tx="texts" {...props} />
))

export const Heading = forwardRef((props, ref) => (
    <Box
        ref={ref}
        as="h2"
        tx="headings"
        variant="h2"
        __css={css({
            fontWeight: 'bold',
        })}
        {...props}
    />
))

export const Link = styled(({ href, to, isExternal, ...props }) =>
    // Check if link is/should be external
    isExternal ? (
        <Box
            as="a"
            href={href || to}
            rel="nofollow noopener"
            tx="links"
            {...props}
        />
    ) : (
        ''
    )
)(
    css({
        cursor: 'pointer',
    }),
    base,
    variant,
    sx,
    props => props.css,
    system({
        textTransform: true,
        textDecoration: true,
        transform: true,
    }),
    compose(
        space,
        color,
        typography,
        layout,
        flexbox,
        grid,
        background,
        border,
        position,
        shadow
    )
)


export const Divider = forwardRef((props, ref) => (
    <Box
        ref={ref}
        as="hr"
        tx="dividers"
        __css={css({
            height: 'px',
            my: 8,
            bg: 'neutral.300',
            border: 'none',
        })}
        {...props}
    />
))

export const Button = forwardRef((props, ref) => (
    <Box ref={ref} as="button" tx="buttons" {...props} />
))

export const Image = forwardRef((props, ref) => (
    <>
        {props.src ? (
            <Box
                ref={ref}
                as="img"
                tx="images"
                __css={css({
                    maxWidth: '100%',
                    border: 'none',
                })}
                {...props}
            />
        ) : (
            ''
        )}
    </>
))

export const SVG = ({ width = 16, height = 16, ...props }) => (
    <Box
        as="svg"
        xmlns="http://www.w3.org/2000/svg"
        // width={width || null}
        // height={height || null}
        width={width}
        height={height}
        viewBox={`0 0 ${parseInt(width, 10)} ${parseInt(height, 10)}`}
        fill="currentcolor"
        {...props}
    />
)

export const Code = forwardRef((props, ref) => {
    const sharedStyles = {
        m: '0',
        direction: 'ltr',
        fontFamily: 'mono',
        color: 'neutral.500',
        textAlign: 'left',
        fontSize: 'xs',
        fontWeight: 'normal',
        lineHeight: 'normal',
        textDecoration: 'none',
        whiteSpace: 'pre',
        wordSpacing: 'normal',
        wordBreak: 'normal',
        wordWrap: 'normal',
        tabSize: '4',
        hyphens: 'none',
        bg: 'neutral.100',
        borderRadius: 3,
    }

    return (
        <Box
            as="pre"
            // {...getMarginProps(props)}
            __css={css({
                ...sharedStyles,
                overflow: 'auto',
                p: 4,
                border: '1px solid',
                borderColor: 'neutral.200',
            })}
        >
            <Box
                ref={ref}
                as="code"
                tx="code"
                // {...omitMarginProps(props)}
                __css={css({
                    ...sharedStyles,
                })}
            />
        </Box>
    )
})
