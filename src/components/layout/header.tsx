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
    style: (light: string, dark: string) => string
}) {
    return (
        <a
            className={`flex h-full items-center px-4 text-caption ease-navbar-moves ${style(
                'text-tangaroa',
                'text-[#FFFFFFCC]'
            )}  ${style('', 'hover:text-white')} focus:font-medium ${style(
                '',
                'focus:text-white'
            )} transition`}
            href="#"
        >
            {children}
        </a>
    )
}

export default function Header() {
    const [isHeroDone, setIsHeroDone] = useState<boolean>(false)
    const [isDarkTheme, setIsDarkTheme] = useState<boolean>(true)

    useEffect(() => {
        document.documentElement.classList.add('dark')

        const hero = document.getElementById('__hero')
        if (!hero) return

        document.addEventListener('scroll', () => {
            if (hero.getBoundingClientRect().bottom <= 0) {
                setIsDarkTheme(false)
            } else setIsDarkTheme(true)

            if (hero.getBoundingClientRect().bottom <= 0) setIsHeroDone(true)
            else setIsHeroDone(false)
        })
    }, [])

    const style = (light: string, dark: string) =>
        ` ${isDarkTheme ? dark : light} `

    return (
        <div className={style('bg-white', 'bg-black') + ' sticky top-0 z-20'}>
            <div
                className={
                    'h-10 lg:h-16 text-[#060F33] xxs:px-2 xs:px-4 sm:px-6 lg:px-32 xl:px-36 2xl:px-56 3xl:px-[272px] 4xl:px-[464px] 5xl:px-[784px] 6xl:px-[1224px]'
                }
            >
                <div className="flex h-full w-full items-center justify-between">
                    <div className="flex items-center">
                        <div className="mr-4 block lg:hidden">
                            <NavMenuIcon style={style} />
                        </div>
                        <div
                            className={`w-[102px] h-6 bg-cover ${style(
                                "bg-[url('/images/logo-group-horizontal-dark.svg')]",
                                "bg-[url('/images/logo-group-horizontal-light.svg')]"
                            )} transform transition ease-navbar-moves`}
                        />
                    </div>

                    <div className="flex h-full items-center">
                        <div className="hidden lg:block">
                            <div className="flex h-full items-center">
                                <Link style={style}>App</Link>
                                <Link style={style}>Home</Link>
                                <Link style={style}>Mupi</Link>
                                <Link style={style}>Contact us</Link>
                            </div>
                        </div>
                        <div className="mx-3 h-6 w-[1px] bg-gray-400 hidden lg:block" />
                        <div className="flex">
                            <div className="hidden lg:block">
                                <button className="group flex h-10 w-10 items-center justify-center rounded-3xl hover:bg-[#FFFFFF0D] focus:bg-[#FFFFFF0D] group transition transform">
                                    <LanguageIcon style={style} />
                                </button>
                            </div>
                            <Button
                                className={`h-8 lg:h-10 ${style(
                                    'text-neutrals-400',
                                    'text-white'
                                )} hover:text-white ease-navbar-moves ml-2 hover:bg-[#FFFFFF0D] hover:border-white hover:outline-white`}
                                variant="subtle"
                                size="sm"
                                iconPosition="right"
                                color="white"
                                icon={() => <ArrowDownIcon style={style} />}
                            >
                                <span
                                    className={style(
                                        'text-neutrals-400',
                                        'dark:text-white'
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
