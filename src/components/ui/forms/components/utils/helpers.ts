import { createElement } from 'react'

import clsxm from '../../../../../utils/clsxm'
import { IconPosition, InputTextProps, InputTextSizes } from './types'

export const disabledStyles =
    'disabled:cursor-not-allowed disabled:bg-neutrals-10 disabled:placeholder:text-neutrals-60 disabled:text-neutrals-60'

export function loadingIconSizes(size?: InputTextSizes) {
    switch (size) {
        case 'sm': {
            return 22
        }
        case 'md': {
            return 24
        }
        case 'lg': {
            return 28
        }
        default: {
            return 24
        }
    }
}

export function inputTextSizes(size?: InputTextSizes) {
    switch (size) {
        case 'sm': {
            return 'px-5 py-2.5 text-caption'
        }
        case 'md': {
            return 'px-6 py-3.5 text-callout'
        }
        case 'lg': {
            return 'px-6 py-4 text-body'
        }
        default: {
            return 'px-6 py-3.5 text-callout'
        }
    }
}

export function inputIconClasses(
    size?: InputTextSizes,
    iconPosition?: IconPosition
) {
    switch (size) {
        case 'sm': {
            return [
                iconPosition === 'right' ? 'ml-2 -mr-0.5' : '-ml-0.5 mr-2',
                'h-4 w-4'
            ]
        }
        case 'md': {
            return [
                iconPosition === 'right' ? 'ml-2 -mr-1' : '-ml-1 mr-2',
                'h-5 w-5'
            ]
        }
        case 'lg': {
            return [
                iconPosition === 'right' ? 'ml-3 -mr-1' : '-ml-1 mr-3',
                'h-6 w-6'
            ]
        }
        default: {
            return [
                iconPosition === 'right' ? 'ml-2 -mr-1' : '-ml-1 mr-2',
                'h-5 w-5'
            ]
        }
    }
}

export function renderIconPosition(iconPosition: 'left' | 'right' = 'left') {
    switch (iconPosition) {
        case 'left': {
            return 'left-0 pl-6'
        }
        case 'right': {
            return 'right-0 pr-6'
        }
        default: {
            return 'left-0 pl-6'
        }
    }
}

export function renderInputIcon({
    icon,
    iconPosition,
    size,
    additionalClasses
}: {
    icon?: InputTextProps['icon']
    size?: InputTextSizes
    iconPosition?: IconPosition
    additionalClasses?: string
}) {
    if (icon) {
        return createElement(icon, {
            className: clsxm(
                inputIconClasses(size, iconPosition),
                additionalClasses
            ),
            'aria-hidden': true,
            fill: 'currentColor'
        })
    }

    return null
}
