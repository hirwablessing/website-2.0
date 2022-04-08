import { useEffect } from 'react'
import ArrowRightIcon from '@/components/assets/icons/arrow-right'

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
        if (size == 'lg') return 'h-[25px] w-[49.2px]'
        else if (size == 'md') return 'h-[25px] w-[32.3px]'
        else return 'h-[28.8px] w-[20.1px]'
    }

    return (
        <div
            className={
                'text-black text-[12px] flex justify-center items-center absolute rounded-[2.4px] ' +
                formatWidths()
            }
            style={{ backgroundColor: bgColor, top: top / 10, left: left / 10 }}
        >
            {number}
        </div>
    )
}

export default function Hero() {
    useEffect(() => {
        let division = document.getElementById('__division') as HTMLDivElement
        if (!division) return

        // document.addEventListener('mousemove', e => {
        //     let [x, y] = [
        //         2350 / 2 - (e.clientY * 2350) / window.innerHeight,
        //         2820 / 2 - (e.clientX * 2820) / window.innerWidth
        //     ]
        //     // console.clear();
        //     division.style.transform = `translate(${x / 10}px, ${y / 10}px)`
        // })
    }, [])

    return (
        <>
            <div
                className="h-screen bg-[#F7F9FC] dark:bg-black overflow-hidden flex items-center justify-center -mt-10 lg:-mt-16"
                id="__hero"
            >
                <div className="h-[235px] w-[282px] scale-[10] bg-black  will-change-transform">
                    <div id="__division" className="relative">
                        <CardContainer
                            bgColor={'#2D73FF'}
                            number={13}
                            size="sm"
                            top={349}
                            left={391}
                        />
                        <CardContainer
                            bgColor={'#FFF12D'}
                            number={14}
                            size="md"
                            top={313}
                            left={796}
                        />
                        <CardContainer
                            bgColor={'#FF334E'}
                            number={15}
                            size="lg"
                            top={265}
                            left={1296}
                        />
                        <CardContainer
                            bgColor={'#FFF12D'}
                            number={16}
                            size="md"
                            top={365}
                            left={1936}
                        />
                        <CardContainer
                            bgColor={'#2D73FF'}
                            number={17}
                            size="sm"
                            top={405}
                            left={2436}
                        />

                        <CardContainer
                            bgColor={'#FF334E'}
                            number={7}
                            size="lg"
                            top={753}
                            left={467}
                        />
                        <CardContainer
                            bgColor={'#FFF12D'}
                            number={7}
                            size="md"
                            top={663}
                            left={1084}
                        />
                        <CardContainer
                            bgColor={'#FF334E'}
                            number={7}
                            size="sm"
                            top={715}
                            left={1640}
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
                            bgColor={'#2D73FF'}
                            number={17}
                            size="lg"
                            top={1491}
                            left={1852}
                        />

                        <CardContainer
                            bgColor={'#FFF12D'}
                            number={7}
                            size="sm"
                            top={1831}
                            left={627}
                        />
                        <CardContainer
                            bgColor={'#FF334E'}
                            number={7}
                            size="lg"
                            top={1847}
                            left={1032}
                        />
                        <CardContainer
                            bgColor={'#FFF12D'}
                            number={7}
                            size="sm"
                            top={1865}
                            left={1680}
                        />
                        <CardContainer
                            bgColor={'#2D73FF'}
                            number={17}
                            size="lg"
                            top={1889}
                            left={2037}
                        />

                        <div className="absolute top-[102.4px] text-[2px] left-[119.7px] h-[30.2px] text-center w-[42.7px]">
                            <div
                                className="text-opacity-40 text-white"
                                style={{ lineHeight: '2.8' }}
                            >
                                #hashtag
                            </div>
                            <div
                                className="text-[6.4px] text-white font-medium tracking-[-0.05px]"
                                style={{ lineHeight: 1.2 }}
                            >
                                <div>You can</div>
                                <div>be the change.</div>
                                <div>You decide.</div>
                            </div>
                            <div className="flex items-center justify-center mt-[2.6px]">
                                <div className="font-medium text-opacity-40 text-white">
                                    Get the Beta
                                </div>
                                <div>
                                    <ArrowRightIcon />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
