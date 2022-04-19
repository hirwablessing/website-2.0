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
        if (size == 'lg') return 'h-[250px] w-[492px]'
        else if (size == 'md') return 'h-[250px] w-[323px]'
        else return 'h-[288px] w-[201px]'
    }

    return (
        <div
            className={
                'text-black text-[80px] flex justify-center items-center absolute rounded-[24px] ' +
                formatWidths()
            }
            style={{ backgroundColor: bgColor, top: top, left: left }}
        >
            {number}
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
                className="h-screen relative bg-[#F7F9FC] dark:bg-black overflow-hidden -mt-10 lg:-mt-16"
                id="__hero"
            >
                <div
                    className="h-[2350px] w-[2820px] bg-black will-change-transform mx-auto"
                    id={'__container'}
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)'
                    }}
                >
                    <div id="__division" className="relative">
                        <div id="__texts">
                            <div className="absolute top-[1024px] text-[20px] left-[1197px] h-[302px] text-center w-[427px]">
                                <div
                                    className="text-opacity-40 text-white"
                                    style={{ lineHeight: '2,8' }}
                                >
                                    #hashtag
                                </div>
                                <div
                                    className="text-[64px] text-white font-medium tracking-[-0.5px]"
                                    style={{ lineHeight: 1.2 }}
                                >
                                    <div>You can</div>
                                    <div>be the change.</div>
                                    <div>You decide.</div>
                                </div>
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
                        <div id="__yellows">
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
                        <div id="__reds">
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
                        <div id="__blues">
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
        </>
    )
}
