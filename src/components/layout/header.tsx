import React, {useEffect, useState} from 'react'
import ArrowDownIcon from '../assets/icons/arrow-down'
import LanguageIcon from '../assets/icons/language'
import NavMenuIcon from '../assets/icons/nav-menu'
import {Button} from '../ui/button'

function Link({children}: { children: React.ReactNode }) {
    return (
        <a
            className="flex h-full items-center px-4 text-caption ease-navbar-moves text-tangaroa dark:text-[#FFFFFFCC]  dark:hover:text-white focus:font-medium dark:focus:text-white transition"
            href="#"
        >
            {children}
        </a>
    )
}

export default function Header() {
    const [isHeroDone, setIsHeroDone] = useState<boolean>(false)
    useEffect(() => {
        const hero = document.getElementById('__hero')
        if (!hero) return;

        document.addEventListener("scroll", () => {
            if (hero.getBoundingClientRect().bottom <= 0)
                setIsHeroDone(true)
            else
                setIsHeroDone(false)
        })
    }, [])


    return (
        <div
            className={"h-10 lg:h-16 bg-white dark:bg-black sticky top-0 text-[#060F33] xxs:px-2 xs:px-4 sm:px-6 lg:px-32 xl:px-36 2xl:px-56 3xl:px-[272px] 4xl:px-[464px] 5xl:px-[784px] 6xl:px-[1224px]"}>
            <div className="flex h-full w-full items-center justify-between">
                <div className="flex items-center">
                    <div className="mr-4 block lg:hidden">
                        <NavMenuIcon/>
                    </div>
                    <div
                        className={"w-[102px] h-6 bg-cover bg-[url('/images/logo-group-horizontal-dark.svg')] dark:bg-[url('/images/logo-group-horizontal-light.svg')] transform transition ease-navbar-moves"+(isHeroDone && ' scale-[1.6]')}/>
                </div>

                <div className="flex h-full items-center">
                    <div className="hidden lg:block">
                        <div className="flex h-full items-center">
                            <Link>Home</Link>
                            <Link>App</Link>
                            <Link>Mupi</Link>
                            <Link>Contact us</Link>
                        </div>
                    </div>
                    <div className="mx-3 h-6 w-[1px] bg-gray-400 hidden lg:block"/>
                    <div className="flex">
                        <div className="hidden lg:block">
                            <button
                                className="group flex h-10 w-10 items-center justify-center rounded-3xl hover:bg-[#FFFFFF0D] focus:bg-[#FFFFFF0D] group transition transform">
                                <LanguageIcon/>
                            </button>
                        </div>
                        <Button
                            className="h-8 lg:h-10 text-neutrals-400 dark:text-white hover:text-white ease-navbar-moves ml-2 hover:bg-[#FFFFFF0D] hover:border-white hover:outline-white"
                            variant="subtle"
                            size="sm"
                            iconPosition="right"
                            color="white"
                            icon={ArrowDownIcon}
                        >
                            <span className="text-neutrals-400 dark:text-white">
                                Get the Beta
                            </span>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
