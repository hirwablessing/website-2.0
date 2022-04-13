import React, { useEffect, useState } from 'react'
import ArrowDownIcon from '../assets/icons/arrow-down'
import LanguageIcon from '../assets/icons/language'
import NavMenuIcon from '../assets/icons/nav-menu'
import { Button } from '../ui/button'

function Link({
    children,
    style
}: {
    children: React.ReactNode
    style: (
        light: string,
        dark: string,
        normal?: string,
        enlarged?: string
    ) => string
}) {
    return (
        <a
            className={`flex h-full items-center px-4 ease-navbar-moves ${style(
                'text-tangaroa text-opacity-[0.8]',
                'text-[#FFFFFFCC]',
                'text-caption',
                'text-callout'
            )}  ${style(
                'hover:text-neutrals-400',
                'hover:text-white'
            )} active:font-medium ${style('', 'active:text-white')} transition`}
            href="#"
        >
            {children}
        </a>
    )
}

type HeaderProps = {
    isDark?: boolean
    isEnlarged?: boolean
}

export default function Header({
    isDark = false,
    isEnlarged = false
}: HeaderProps) {
    const [isHeroDone, setIsHeroDone] = useState<boolean>(false)
    const [isDarkTheme, setIsDarkTheme] = useState<boolean>(isDark)

    useEffect(() => {
        // document.documentElement.classList.add('dark')
        //
        // const hero = document.getElementById('__hero')
        // if (!hero) return
        //
        // document.addEventListener('scroll', () => {
        //     if (hero.getBoundingClientRect().bottom <= 0) {
        //         setIsDarkTheme(false)
        //     } else setIsDarkTheme(true)
        //
        //     if (hero.getBoundingClientRect().bottom <= 0) setIsHeroDone(true)
        //     else setIsHeroDone(false)
        // })
    }, [])

    const style = (light = '', dark = '', normal = '', enlarged = '') => {
        return ` ${isDarkTheme ? dark : light} ${
            isEnlarged ? enlarged : normal
        }`
    }

    return (
        <div
            className={
                style('bg-white', 'bg-black') + ' sticky top-0 z-20 mt-5'
            }
        >
            <div
                className={`${style(
                    '',
                    '',
                    'h-10 lg:h-16',
                    'h-16 lg:h-20'
                )} text-[#060F33] xxs:px-2 xs:px-4 sm:px-6 lg:px-32 xl:px-36 2xl:px-56 3xl:px-[272px] 4xl:px-[464px] 5xl:px-[784px] 6xl:px-[1224px]`}
            >
                <div className="flex h-full w-full items-center justify-between">
                    <div className="flex items-center">
                        <div className="block lg:hidden h-8 w-8 lg:h-10 lg:w-10 mr-2">
                            <div className="h-full w-full flex items-center justify-center">
                                <NavMenuIcon style={style} />
                            </div>
                        </div>
                        <div
                            className={`bg-cover ${style(
                                "bg-[url('/images/logo-group-horizontal-dark.svg')]",
                                "bg-[url('/images/logo-group-horizontal-light.svg')]",
                                'w-[103px] h-6',
                                'w-[137px] h-8'
                            )} transform transition ease-navbar-moves`}
                        />
                    </div>

                    <div className="flex h-full items-center">
                        <div className="hidden lg:block">
                            <div className="flex h-full items-center">
                                <Link style={style}>Home</Link>
                                <Link style={style}>App</Link>
                                <Link style={style}>Mupi</Link>
                                <Link style={style}>Contact us</Link>
                            </div>
                        </div>
                        <div className="mx-3 h-6 w-[1px] bg-gray-400 hidden lg:block" />
                        <div className="flex">
                            <div className="hidden lg:block">
                                <button
                                    className={`group flex h-10 w-10 items-center justify-center rounded-3xl ${style(
                                        'hover:bg-tangaroa hover:bg-opacity-5 active:bg-tangaroa active:bg-opacity-5',
                                        'hover:bg-[#FFFFFF0D] active:bg-[#FFFFFF0D]'
                                    )} group transition transform`}
                                >
                                    <LanguageIcon style={style} />
                                </button>
                            </div>
                            <Button
                                className={`${style(
                                    'text-neutrals-400',
                                    'text-white border-opacity-50',
                                    'h-8 lg:h-10',
                                    'h-10 lg:h-12'
                                )} ease-navbar-moves ml-2  p-0 border-[1px] pl-5 pr-3.5`}
                                variant="subtle"
                                iconPosition="right"
                                icon={() => <ArrowDownIcon style={style} />}
                            >
                                <span
                                    className={style(
                                        'text-neutrals-400',
                                        'text-white',
                                        'text-caption2',
                                        'text-caption'
                                    )}
                                >
                                    Get the Beta
                                </span>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
