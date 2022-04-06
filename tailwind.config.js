const { fontFamily, fontSize } = require('tailwindcss/defaultTheme')

function withOpacityValue(variable) {
    return ({ opacityValue }) => {
        if (opacityValue === undefined) {
            return `rgb(var(${variable}))`
        }
        return `rgb(var(${variable}) / ${opacityValue})`
    }
}

module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        screens: {
            xxs: '320px',
            xs: '375px',
            xs1: '425px',
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1440px',
            '3xl': '1536px',
            '4xl': '1920px',
            '5xl': '2560px',
            '6xl': '3440px'
        },
        fontSize: {
            heading1: ['80px', { lineHeight: '96px', letterSpacing: '-0.5px' }],
            heading2: ['64px', { lineHeight: '77px', letterSpacing: '-0.5px' }],
            heading3: ['48px', { lineHeight: '58px', letterSpacing: '-0.5px' }],
            'large-title1': [
                '34px',
                { lineHeight: '44px', letterSpacing: '-0.25px' }
            ],
            'large-title2': [
                '32px',
                { lineHeight: '42px', letterSpacing: '-0.25px' }
            ],
            title1: ['28px', { lineHeight: '39px', letterSpacing: '-0.25px' }],
            title2: ['24px', '34px'],
            title3: ['20px', '28px'],
            subheadline: ['18px', '25px'],
            body: ['17px', '24px'],
            'body-reading': ['17px', '26px'],
            callout: ['16px', '22px'],
            'callout-reading': ['16px', '24px'],
            caption: ['14px', '21px'],
            'caption-reading': ['14px', '25px'],
            caption2: ['12px', '18px'],
            caption3: ['10px', '15px'],
            caption4: ['8px', '12px'],
            ...fontSize
        },
        extend: {
            fontFamily: {
                sans: ['"Circular XX TT"', ...fontFamily.sans]
            },
            transitionTimingFunction: {
                'navbar-moves': 'cubic-bezier(0.25, 0.1, 0.25, 1)'
            },
            // Customize it on globals.css :root
            colors: {
                'brand-main': {
                    100: withOpacityValue('--tw-color-brand-main-100'),
                    200: withOpacityValue('--tw-color-brand-main-200'),
                    300: withOpacityValue('--tw-color-brand-main-300'),
                    400: withOpacityValue('--tw-color-brand-main-400'),
                    500: withOpacityValue('--tw-color-brand-main-500'),
                    600: withOpacityValue('--tw-color-brand-main-600'),
                    700: withOpacityValue('--tw-color-brand-main-700')
                },
                'brand-light': {
                    100: withOpacityValue('--tw-color-brand-light-100'),
                    200: withOpacityValue('--tw-color-brand-light-200'),
                    300: withOpacityValue('--tw-color-brand-light-300'),
                    400: withOpacityValue('--tw-color-brand-light-400'),
                    500: withOpacityValue('--tw-color-brand-light-500'),
                    600: withOpacityValue('--tw-color-brand-light-600'),
                    700: withOpacityValue('--tw-color-brand-light-700')
                },
                neutrals: {
                    0: withOpacityValue('--tw-color-neutrals-0'),
                    10: withOpacityValue('--tw-color-neutrals-10'),
                    20: withOpacityValue('--tw-color-neutrals-20'),
                    30: withOpacityValue('--tw-color-neutrals-30'),
                    40: withOpacityValue('--tw-color-neutrals-40'),
                    50: withOpacityValue('--tw-color-neutrals-50'),
                    60: withOpacityValue('--tw-color-neutrals-60'),
                    70: withOpacityValue('--tw-color-neutrals-70'),
                    80: withOpacityValue('--tw-color-neutrals-80'),
                    90: withOpacityValue('--tw-color-neutrals-90'),
                    100: withOpacityValue('--tw-color-neutrals-100'),
                    200: withOpacityValue('--tw-color-neutrals-200'),
                    300: withOpacityValue('--tw-color-neutrals-300'),
                    400: withOpacityValue('--tw-color-neutrals-400'),
                    500: withOpacityValue('--tw-color-neutrals-500'),
                    600: withOpacityValue('--tw-color-neutrals-600'),
                    700: withOpacityValue('--tw-color-neutrals-700'),
                    800: withOpacityValue('--tw-color-neutrals-800')
                },
                'semantic-positive1': {
                    100: withOpacityValue('--tw-color-semantic-positive1-100'),
                    200: withOpacityValue('--tw-color-semantic-positive1-200'),
                    300: withOpacityValue('--tw-color-semantic-positive1-300'),
                    400: withOpacityValue('--tw-color-semantic-positive1-400'),
                    500: withOpacityValue('--tw-color-semantic-positive1-500'),
                    600: withOpacityValue('--tw-color-semantic-positive1-600'),
                    700: withOpacityValue('--tw-color-semantic-positive1-700')
                },
                'semantic-positive2': {
                    100: withOpacityValue('--tw-color-semantic-positive2-100'),
                    200: withOpacityValue('--tw-color-semantic-positive2-200'),
                    300: withOpacityValue('--tw-color-semantic-positive2-300'),
                    400: withOpacityValue('--tw-color-semantic-positive2-400'),
                    500: withOpacityValue('--tw-color-semantic-positive2-500'),
                    600: withOpacityValue('--tw-color-semantic-positive2-600'),
                    700: withOpacityValue('--tw-color-semantic-positive2-700')
                },
                'semantic-negative1': {
                    100: withOpacityValue('--tw-color-semantic-negative1-100'),
                    200: withOpacityValue('--tw-color-semantic-negative1-200'),
                    300: withOpacityValue('--tw-color-semantic-negative1-300'),
                    400: withOpacityValue('--tw-color-semantic-negative1-400'),
                    500: withOpacityValue('--tw-color-semantic-negative1-500'),
                    600: withOpacityValue('--tw-color-semantic-negative1-600'),
                    700: withOpacityValue('--tw-color-semantic-negative1-700')
                },
                'semantic-negative2': {
                    100: withOpacityValue('--tw-color-semantic-negative2-100'),
                    200: withOpacityValue('--tw-color-semantic-negative2-200'),
                    300: withOpacityValue('--tw-color-semantic-negative2-300'),
                    400: withOpacityValue('--tw-color-semantic-negative2-400'),
                    500: withOpacityValue('--tw-color-semantic-negative2-500'),
                    600: withOpacityValue('--tw-color-semantic-negative2-600'),
                    700: withOpacityValue('--tw-color-semantic-negative2-700')
                },
                'semantic-warning1': {
                    100: withOpacityValue('--tw-color-semantic-warning1-100'),
                    200: withOpacityValue('--tw-color-semantic-warning1-200'),
                    300: withOpacityValue('--tw-color-semantic-warning1-300'),
                    400: withOpacityValue('--tw-color-semantic-warning1-400'),
                    500: withOpacityValue('--tw-color-semantic-warning1-500'),
                    600: withOpacityValue('--tw-color-semantic-warning1-600'),
                    700: withOpacityValue('--tw-color-semantic-warning1-700')
                },
                'semantic-warning2': {
                    100: withOpacityValue('--tw-color-semantic-warning2-100'),
                    200: withOpacityValue('--tw-color-semantic-warning2-200'),
                    300: withOpacityValue('--tw-color-semantic-warning2-300'),
                    400: withOpacityValue('--tw-color-semantic-warning2-400'),
                    500: withOpacityValue('--tw-color-semantic-warning2-500'),
                    600: withOpacityValue('--tw-color-semantic-warning2-600'),
                    700: withOpacityValue('--tw-color-semantic-warning2-700')
                },
                'semantic-alert': {
                    100: withOpacityValue('--tw-color-semantic-alert-100'),
                    200: withOpacityValue('--tw-color-semantic-alert-200'),
                    300: withOpacityValue('--tw-color-semantic-alert-300'),
                    400: withOpacityValue('--tw-color-semantic-alert-400'),
                    500: withOpacityValue('--tw-color-semantic-alert-500'),
                    600: withOpacityValue('--tw-color-semantic-alert-600'),
                    700: withOpacityValue('--tw-color-semantic-alert-700')
                },
                'accent-mariner': {
                    100: withOpacityValue('--tw-color-mariner-100'),
                    200: withOpacityValue('--tw-color-mariner-200'),
                    300: withOpacityValue('--tw-color-mariner-300'),
                    400: withOpacityValue('--tw-color-mariner-400'),
                    500: withOpacityValue('--tw-color-mariner-500'),
                    600: withOpacityValue('--tw-color-mariner-600'),
                    700: withOpacityValue('--tw-color-mariner-700')
                },
                'extension-sulu': {
                    100: withOpacityValue('--tw-color-extension-sulu-100'),
                    200: withOpacityValue('--tw-color-extension-sulu-200'),
                    300: withOpacityValue('--tw-color-extension-sulu-300'),
                    400: withOpacityValue('--tw-color-extension-sulu-400'),
                    500: withOpacityValue('--tw-color-extension-sulu-500'),
                    600: withOpacityValue('--tw-color-extension-sulu-600'),
                    700: withOpacityValue('--tw-color-extension-sulu-700')
                },
                'extension-mantis': {
                    100: withOpacityValue('--tw-color-extension-mantis-100'),
                    200: withOpacityValue('--tw-color-extension-mantis-200'),
                    300: withOpacityValue('--tw-color-extension-mantis-300'),
                    400: withOpacityValue('--tw-color-extension-mantis-400'),
                    500: withOpacityValue('--tw-color-extension-mantis-500'),
                    600: withOpacityValue('--tw-color-extension-mantis-600'),
                    700: withOpacityValue('--tw-color-extension-mantis-700')
                },
                'extension-lagoon': {
                    100: withOpacityValue('--tw-color-extension-lagoon-100'),
                    200: withOpacityValue('--tw-color-extension-lagoon-200'),
                    300: withOpacityValue('--tw-color-extension-lagoon-300'),
                    400: withOpacityValue('--tw-color-extension-lagoon-400'),
                    500: withOpacityValue('--tw-color-extension-lagoon-500'),
                    600: withOpacityValue('--tw-color-extension-lagoon-600'),
                    700: withOpacityValue('--tw-color-extension-lagoon-700')
                },
                'extension-torquoise': {
                    100: withOpacityValue('--tw-color-extension-torquoise-100'),
                    200: withOpacityValue('--tw-color-extension-torquoise-200'),
                    300: withOpacityValue('--tw-color-extension-torquoise-300'),
                    400: withOpacityValue('--tw-color-extension-torquoise-400'),
                    500: withOpacityValue('--tw-color-extension-torquoise-500'),
                    600: withOpacityValue('--tw-color-extension-torquoise-600'),
                    700: withOpacityValue('--tw-color-extension-torquoise-700')
                },
                'extensio-orchid': {
                    100: withOpacityValue('--tw-color-extension-orchid-100'),
                    200: withOpacityValue('--tw-color-extension-orchid-200'),
                    300: withOpacityValue('--tw-color-extension-orchid-300'),
                    400: withOpacityValue('--tw-color-extension-orchid-400'),
                    500: withOpacityValue('--tw-color-extension-orchid-500'),
                    600: withOpacityValue('--tw-color-extension-orchid-600'),
                    700: withOpacityValue('--tw-color-extension-orchid-700')
                },
                'extension-sunglo': {
                    100: withOpacityValue('--tw-color-extension-sunglo-100'),
                    200: withOpacityValue('--tw-color-extension-sunglo-200'),
                    300: withOpacityValue('--tw-color-extension-sunglo-300'),
                    400: withOpacityValue('--tw-color-extension-sunglo-400'),
                    500: withOpacityValue('--tw-color-extension-sunglo-500'),
                    600: withOpacityValue('--tw-color-extension-sunglo-600'),
                    700: withOpacityValue('--tw-color-extension-sunglo-700')
                },
                'extension-buttercup': {
                    100: withOpacityValue('--tw-color-extension-buttercup-100'),
                    200: withOpacityValue('--tw-color-extension-buttercup-200'),
                    300: withOpacityValue('--tw-color-extension-buttercup-300'),
                    400: withOpacityValue('--tw-color-extension-buttercup-400'),
                    500: withOpacityValue('--tw-color-extension-buttercup-500'),
                    600: withOpacityValue('--tw-color-extension-buttercup-600'),
                    700: withOpacityValue('--tw-color-extension-buttercup-700')
                },
                'extension-corn': {
                    100: withOpacityValue('--tw-color-extension-corn-100'),
                    200: withOpacityValue('--tw-color-extension-corn-200'),
                    300: withOpacityValue('--tw-color-extension-corn-300'),
                    400: withOpacityValue('--tw-color-extension-corn-400'),
                    500: withOpacityValue('--tw-color-extension-corn-500'),
                    600: withOpacityValue('--tw-color-extension-corn-600'),
                    700: withOpacityValue('--tw-color-extension-corn-700')
                },
                black: withOpacityValue('--tw-color-black'),
                white: withOpacityValue('--tw-color-white'),
                tangaroa: withOpacityValue('--tw-color-tangaroa'),
                guide: {
                    1: withOpacityValue('--tw-color-guide-1'),
                    2: withOpacityValue('--tw-color-guide-2'),
                    3: withOpacityValue('--tw-color-guide-3'),
                    4: withOpacityValue('--tw-color-guide-4'),
                    5: withOpacityValue('--tw-color-guide-5'),
                    6: withOpacityValue('--tw-color-guide-6'),
                    7: withOpacityValue('--tw-color-guide-7'),
                    8: withOpacityValue('--tw-color-guide-8'),
                    9: withOpacityValue('--tw-color-guide-9'),
                    10: withOpacityValue('--tw-color-guide-10'),
                    11: withOpacityValue('--tw-color-guide-11'),
                    12: withOpacityValue('--tw-color-guide-12'),
                    13: withOpacityValue('--tw-color-guide-13'),
                    14: withOpacityValue('--tw-color-guide-14'),
                    15: withOpacityValue('--tw-color-guide-15'),
                    16: withOpacityValue('--tw-color-guide-16'),
                    17: withOpacityValue('--tw-color-guide-17')
                },
                'recycling-yellow': {
                    100: withOpacityValue('--tw-color-recycling-yellow-100'),
                    200: withOpacityValue('--tw-color-recycling-yellow-200'),
                    300: withOpacityValue('--tw-color-recycling-yellow-300'),
                    400: withOpacityValue('--tw-color-recycling-yellow-400'),
                    500: withOpacityValue('--tw-color-recycling-yellow-500'),
                    600: withOpacityValue('--tw-color-recycling-yellow-600'),
                    700: withOpacityValue('--tw-color-recycling-yellow-700')
                },
                'recycling-green': {
                    100: withOpacityValue('--tw-color-recycling-green-100'),
                    200: withOpacityValue('--tw-color-recycling-green-200'),
                    300: withOpacityValue('--tw-color-recycling-green-300'),
                    400: withOpacityValue('--tw-color-recycling-green-400'),
                    500: withOpacityValue('--tw-color-recycling-green-500'),
                    600: withOpacityValue('--tw-color-recycling-green-600'),
                    700: withOpacityValue('--tw-color-recycling-green-700')
                },
                'recycling-blue': {
                    100: withOpacityValue('--tw-color-recycling-blue-100'),
                    200: withOpacityValue('--tw-color-recycling-blue-200'),
                    300: withOpacityValue('--tw-color-recycling-blue-300'),
                    400: withOpacityValue('--tw-color-recycling-blue-400'),
                    500: withOpacityValue('--tw-color-recycling-blue-500'),
                    600: withOpacityValue('--tw-color-recycling-blue-600'),
                    700: withOpacityValue('--tw-color-recycling-blue-700')
                },
                'recycling-brown': {
                    100: withOpacityValue('--tw-color-recycling-brown-100'),
                    200: withOpacityValue('--tw-color-recycling-brown-200'),
                    300: withOpacityValue('--tw-color-recycling-brown-300'),
                    400: withOpacityValue('--tw-color-recycling-brown-400'),
                    500: withOpacityValue('--tw-color-recycling-brown-500'),
                    600: withOpacityValue('--tw-color-recycling-brown-600'),
                    700: withOpacityValue('--tw-color-recycling-brown-700')
                },
                'recycling-shady': {
                    100: withOpacityValue('--tw-color-recycling-shady-100'),
                    200: withOpacityValue('--tw-color-recycling-shady-200'),
                    300: withOpacityValue('--tw-color-recycling-shady-300'),
                    400: withOpacityValue('--tw-color-recycling-shady-400'),
                    500: withOpacityValue('--tw-color-recycling-shady-500'),
                    600: withOpacityValue('--tw-color-recycling-shady-600'),
                    700: withOpacityValue('--tw-color-recycling-shady-700')
                },
                'recycling-grey': {
                    100: withOpacityValue('--tw-color-recycling-grey-100'),
                    200: withOpacityValue('--tw-color-recycling-grey-200'),
                    300: withOpacityValue('--tw-color-recycling-grey-300'),
                    400: withOpacityValue('--tw-color-recycling-grey-400'),
                    500: withOpacityValue('--tw-color-recycling-grey-500'),
                    600: withOpacityValue('--tw-color-recycling-grey-600'),
                    700: withOpacityValue('--tw-color-recycling-grey-700')
                }
            }
        },
        keyframes: {
            flicker: {
                '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
                    opacity: 0.99,
                    filter: 'drop-shadow(0 0 1px rgba(252, 211, 77)) drop-shadow(0 0 15px rgba(245, 158, 11)) drop-shadow(0 0 1px rgba(252, 211, 77))'
                },
                '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
                    opacity: 0.4,
                    filter: 'none'
                }
            }
        },
        animation: {
            flicker: 'flicker 3s linear infinite'
        }
    },
    plugins: [require('@tailwindcss/forms')]
}
