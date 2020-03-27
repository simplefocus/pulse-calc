export const theme = {
    breakpoints: [
        '30rem', // xs / 480px
        '40rem', // sm / 640px
        '48rem', // md / 768px
        '64rem', // lg / 1024px
        '80rem', // xl / 1280px
    ],
    colors: {
        transparent: 'transparent',
        black: '#222222',
        white: '#ffffff',
        primary: '#32E179',
        secondary: '#EBFAF1',
        misc: {
            onyx: '#080C16',
            orange: '#FCB033',
            green: '#97B581',
            yellow: '#FFD426',
            blue: {
                100: '#35D5F0',
                200: '#21B9E3',
                300: '#016F9E',
                400: '#034C6D',
            },
        },
        neutral: {
            100: '#F7F8F9',
            200: '#ECEEF0',
            300: '#D0D2D3',
            400: '#A8A8A8',
            500: '#3F4246',
        },
        gray: {
            100: '#ff0000',
            200: '#ff0000',
            300: '#ff0000',
            400: '#ff0000',
            500: '#ff0000',
            600: '#ff0000',
            700: '#ff0000',
            800: '#ff0000',
            900: '#ff0000',
        },
        gradient: {
            lightBlue: 'linear-gradient(90deg, #21B9E3 0%, #35D5F0 100%)',
            blue: 'linear-gradient(90deg, #016F9E 0%, #21B9E3 100%)',
            darkBlue: 'linear-gradient(180deg, #1F4E85 0%, #016F9E 100%)',
            orange: 'linear-gradient(90deg, #ED8822 0%, #FCB033 100%)',
            neutral: 'linear-gradient(180deg, #FFFFFF 0%, #F7F8F9 100%)',
        },
    },
    space: {
        auto: 'auto',
        px: '1px',
        em: '1em',
        0: '0',
        1: '0.25rem',
        2: '0.5rem',
        3: '0.75rem',
        4: '1rem',
        5: '1.25rem',
        6: '1.5rem',
        8: '2rem',
        10: '2.5rem',
        12: '3rem',
        16: '4rem',
        20: '5rem',
        24: '6rem',
        32: '8rem',
        40: '10rem',
        48: '12rem',
        56: '14rem',
        64: '16rem',
        80: '20rem',
        96: '24rem',
        128: '32rem',
        160: '40rem',
        192: '48rem',
        224: '56rem',
        256: '64rem',
        vw: '100vw',
        vh: '100vh',
        full: '100%',
    },
    // sizes: {
    //     auto: 'auto',
    //     px: '1px',
    //     em: '1em',
    //     0: '0',
    //     1: '0.25rem',
    //     2: '0.5rem',
    //     3: '0.75rem',
    //     4: '1rem',
    //     5: '1.25rem',
    //     6: '1.5rem',
    //     8: '2rem',
    //     10: '2.5rem',
    //     12: '3rem',
    //     16: '4rem',
    //     20: '5rem',
    //     24: '6rem',
    //     32: '8rem',
    //     40: '10rem',
    //     48: '12rem',
    //     56: '14rem',
    //     64: '16rem',
    //     80: '20rem',
    //     96: '24rem',
    //     128: '32rem',
    //     160: '40rem',
    //     192: '48rem',
    //     224: '56rem',
    //     256: '64rem',
    //     vw: '100vw',
    //     vh: '100vh',
    //     full: '100%',
    // },
    fonts: {
        sans: 'Works Sans, sans-serif',
        serif: 'Works Sans, sans-serif',
        mono:
            'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
    },
    fontSizes: {
        xxs: '0.625rem', // 10px
        xs: '0.75rem', // 12px
        sm: '0.875rem', // 14px
        base: '1rem', // 16px
        lg: '1.125rem', // 18px
        xl: '1.5rem', // 24px
        '2xl': '2rem', // 32px
        '3xl': '2.5rem', // 40px
        '4xl': '3rem', // 48px
        '5xl': '4rem', // 64px
        '6xl': '5rem', // 80px
    },
    fontWeights: {
        // hairline: '100',
        // thin: '200',
        // light: '300',
        normal: '400',
        // medium: '500',
        // semibold: '600',
        bold: '700',
        // extrabold: '800',
        // black: '900',
    },
    lineHeights: {
        none: '1',
        tight: '1.15',
        snug: '1.375',
        normal: '1.5',
        relaxed: '1.625',
        loose: '2',
    },
    letterSpacings: {
        tightest: '-0.03em',
        tighter: '-0.02em',
        tight: '-0.01em',
        normal: '0',
        wide: '1.6px',
    },
    borders: {
        none: '0',
        1: '1px solid',
        2: '2px solid',
        4: '4px solid',
        8: '8px solid',
    },
    borderWidths: {
        0: '0px',
        1: '1px',
        2: '2px',
        4: '4px',
        8: '8px',
    },
    radii: {
        none: '0',
        3: '3px',
        5: '5px',
        8: '8px',
        16: '16px',
        100: '100%',
        full: '9999px',
    },
    shadows: {
        none: 'none',
        1: '0 16px 64px 0 rgba(0,0,0,0.02), 0 8px 32px 0 rgba(0,0,0,0.04), 0 4px 16px 0 rgba(0,0,0,0.04), 0 2px 8px 0 rgba(0,0,0,0.04), 0 1px 4px 0 rgba(0,0,0,0.04)',
        2: '0 16px 32px 0 rgba(0,0,0,0.08), 0 8px 16px 0 rgba(0,0,0,0.07), 0 4px 10px 0 rgba(0,0,0,0.06), 0 2px 6px 0 rgba(0,0,0,0.04), 0 1px 2px 0 rgba(0,0,0,0.04)',
        3: '0 32px 64px 0 rgba(0,0,0,0.08), 0 16px 32px 0 rgba(0,0,0,0.08), 0 8px 16px 0 rgba(0,0,0,0.08), 0 4px 8px 0 rgba(0,0,0,0.08), 0 1px 4px 0 rgba(0,0,0,0.02)',
        input: 'inset 0 2px 4px 0 #ECEEF0',
        outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
    },
    zIndices: {
        auto: 'auto',
        bottom: '-9999',
        0: '0',
        10: '10',
        20: '20',
        30: '30',
        40: '40',
        50: '50',
        top: '9999',
    },
    variants: {
        general: {},
        flex: {},
        grid: {},
        texts: {
            display: {
                fontSize: 'xl',
            },
            large: {
                fontSize: 'lg',
            },
            small: {
                fontSize: 'sm',
            },
            fine: {
                fontSize: 'xs',
            },
        },
        headings: {
            display1: {
                fontSize: '6xl',
                letterSpacings: 'tightest',
                lineHeight: 'none',
            },
            display2: {
                fontSize: '5xl',
                letterSpacings: 'tighter',
                lineHeight: 'none',
            },
            h1: {
                fontSize: '4xl',
                letterSpacings: 'tightest',
                lineHeight: 'none',
            },
            h2: {
                fontSize: '3xl',
                letterSpacings: 'tighter',
                lineHeight: 'tight',
            },
            h3: {
                fontSize: '2xl',
                letterSpacings: 'tight',
                lineHeight: 'tight',
            },
            h4: {
                fontSize: 'xl',
                lineHeight: 'tight',
            },
            h5: {
                fontSize: 'base',
            },
            h6: {
                fontSize: 'xs',
                letterSpacings: 'wide',
                textTransform: 'uppercase',
            },
        },
        links: {},
        dividers: {},
        buttons: {},
        images: {},
        forms: {
            label: {},
            input: {},
            textarea: {},
            select: {},
            radio: {},
            checkbox: {},
            switch: {},
            slider: {},
        },
    },
}

// Breakpoint aliases
theme.breakpoints.xs = theme.breakpoints[0]
theme.breakpoints.sm = theme.breakpoints[1]
theme.breakpoints.md = theme.breakpoints[2]
theme.breakpoints.lg = theme.breakpoints[3]
theme.breakpoints.xl = theme.breakpoints[4]

// Sizes
theme.sizes = {
    ...theme.space,
    xs: theme.breakpoints.xs,
    sm: theme.breakpoints.sm,
    md: theme.breakpoints.md,
    lg: theme.breakpoints.lg,
    xl: theme.breakpoints.xl,
}

export default theme
