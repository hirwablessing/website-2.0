import { useEffect } from 'react'
import ArrowRightIcon from '@/components/assets/icons/arrow-right'
import Image from 'next/image'
import BasicArrowDown from './assets/icons/arrow-basic-down'

type CardProps = {
    number?: number
    size?: 'lg' | 'md' | 'sm'
    bgColor?: '#FF334E' | '#FFF12D' | '#2D73FF'
    top?: number
    left?: number
}

const CardContainer = ({
    number = 10,
    bgColor = '#FFF12D',
    size = 'sm',
    top = 0,
    left = 0
}: CardProps) => {
    const formatWidths = () => {
        if (size == 'lg') return 'h-[310px] w-[452px]'
        else if (size == 'md') return 'h-[310px] w-[412px]'
        else return 'h-[348px] w-[261px]'
    }

    return (
        <div
            className={
                'text-black text-[80px] p-[30px] absolute ' + formatWidths()
            }
            style={{ top: top - 30, left: left - 30 }}
        >
            <div
                className="h-full w-full rounded-[24px] flex justify-center items-center"
                style={{ backgroundColor: bgColor }}
            >
                {number}
            </div>
        </div>
    )
}

export default function Hero() {
    useEffect(() => {
        let container = document.getElementById('__container') as HTMLDivElement

        let yellows = document.getElementById('__yellows') as HTMLDivElement
        let blues = document.getElementById('__blues') as HTMLDivElement
        let reds = document.getElementById('__reds') as HTMLDivElement
        let texts = document.getElementById('__texts') as HTMLDivElement

        if (
            container == null ||
            yellows == null ||
            blues == null ||
            reds == null ||
            texts == null
        )
            return

        const handleMouseMove = (e: MouseEvent) => {
            // let [x, y] = [
            //     -e.pageX +window.innerWidth,
            //     -e.pageY
            // ]
            //
            // // console.clear();
            // container.style.transform = `translate(${x}px, ${y}px)`
        }

        document.addEventListener('mousemove', handleMouseMove)
    }, [])

    return (
        <>
            <div
                className="h-screen w-screen relative bg-[#F7F9FC] dark:bg-black overflow-hidden -mt-10 lg:-mt-16"
                id="__hero"
            >
                <div className="h-screen w-screen">
                    <div className="h-screen w-screen">
                        <div id={'__container h-screen w-screen'}>
                            <div
                                id="__division"
                                className="h-[102vh] w-[102vw] bg-black relative"
                            >
                                <div id="__texts" className="canvas">
                                    <div className="absolute top-[1024px] text-[20px] left-[1197px] h-[302px] text-center w-[427px]">
                                        <p
                                            className="text-opacity-40 text-white"
                                            style={{ lineHeight: '2,8' }}
                                        >
                                            #hashtag
                                        </p>
                                        <h2
                                            className="text-[64px] text-white font-medium tracking-[-0.5px]"
                                            style={{ lineHeight: 1.2 }}
                                        >
                                            <span className="block">
                                                You can
                                            </span>
                                            <span className="block">
                                                be the change.
                                            </span>
                                            <span className="block">
                                                You decide.
                                            </span>
                                        </h2>
                                        <div className="flex items-center justify-center mt-[26px]">
                                            <div className="font-medium text-opacity-40 text-white">
                                                Get the Beta
                                            </div>
                                            <div>
                                                <ArrowRightIcon />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    id="__yellows"
                                    className="h-[2350px] w-[2820px] canvas"
                                >
                                    <CardContainer
                                        bgColor={'#FFF12D'}
                                        number={14}
                                        size="md"
                                        top={313}
                                        left={796}
                                    />
                                    <CardContainer
                                        bgColor={'#FFF12D'}
                                        number={16}
                                        size="md"
                                        top={365}
                                        left={1936}
                                    />
                                    <CardContainer
                                        bgColor={'#FFF12D'}
                                        number={7}
                                        size="md"
                                        top={663}
                                        left={1084}
                                    />
                                    <CardContainer
                                        bgColor={'#FFF12D'}
                                        number={7}
                                        size="md"
                                        top={1103}
                                        left={710}
                                    />
                                    <CardContainer
                                        bgColor={'#FFF12D'}
                                        number={7}
                                        size="sm"
                                        top={1103}
                                        left={1784}
                                    />
                                    <CardContainer
                                        bgColor={'#FFF12D'}
                                        number={7}
                                        size="sm"
                                        top={1831}
                                        left={627}
                                    />

                                    <CardContainer
                                        bgColor={'#FFF12D'}
                                        number={7}
                                        size="sm"
                                        top={1865}
                                        left={1680}
                                    />
                                </div>
                                <div
                                    id="__reds"
                                    className="h-[2350px] w-[2820px] canvas"
                                >
                                    <CardContainer
                                        bgColor={'#FF334E'}
                                        number={15}
                                        size="lg"
                                        top={265}
                                        left={1296}
                                    />
                                    <CardContainer
                                        bgColor={'#FF334E'}
                                        number={7}
                                        size="lg"
                                        top={753}
                                        left={467}
                                    />
                                    <CardContainer
                                        bgColor={'#FF334E'}
                                        number={7}
                                        size="sm"
                                        top={715}
                                        left={1640}
                                    />

                                    <CardContainer
                                        bgColor={'#FF334E'}
                                        number={7}
                                        size="sm"
                                        top={1443}
                                        left={1027}
                                    />
                                    <CardContainer
                                        bgColor={'#FF334E'}
                                        number={7}
                                        size="md"
                                        top={1467}
                                        left={1384}
                                    />

                                    <CardContainer
                                        bgColor={'#FF334E'}
                                        number={7}
                                        size="lg"
                                        top={1847}
                                        left={1032}
                                    />
                                </div>
                                <div
                                    id="__blues"
                                    className="h-[2350px] w-[2820px] canvas"
                                >
                                    <CardContainer
                                        bgColor={'#2D73FF'}
                                        number={13}
                                        size="sm"
                                        top={349}
                                        left={391}
                                    />
                                    <CardContainer
                                        bgColor={'#2D73FF'}
                                        number={17}
                                        size="sm"
                                        top={405}
                                        left={2436}
                                    />

                                    <CardContainer
                                        bgColor={'#2D73FF'}
                                        number={17}
                                        size="md"
                                        top={753}
                                        left={2045}
                                    />

                                    <CardContainer
                                        bgColor={'#2D73FF'}
                                        number={17}
                                        size="sm"
                                        top={1093}
                                        left={305}
                                    />
                                    <CardContainer
                                        bgColor={'#2D73FF'}
                                        number={17}
                                        size="md"
                                        top={1143}
                                        left={2141}
                                    />

                                    <CardContainer
                                        bgColor={'#2D73FF'}
                                        number={17}
                                        size="md"
                                        top={1481}
                                        left={527}
                                    />

                                    <CardContainer
                                        bgColor={'#2D73FF'}
                                        number={17}
                                        size="lg"
                                        top={1491}
                                        left={1852}
                                    />

                                    <CardContainer
                                        bgColor={'#2D73FF'}
                                        number={17}
                                        size="lg"
                                        top={1889}
                                        left={2037}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-[100px] absolute bottom-0 w-full bg-gradient-to-t from-[#0A0912B8] to-[#0A091200] flex flex-col justify-center items-center text-white">
                <div className="text-caption">Scroll down</div>
                <div className="w-4 h-4">
                    <BasicArrowDown />
                </div>
            </div>
        </>
    )
}
