import Lottie from 'react-lottie'
import * as animationData from '@/styles/lottie-files/check-animation.json'
import { useState } from 'react'

export default function Test() {
    const [isStopped, setIsStopped] = useState(false)
    const [isPaused, setIsPaused] = useState(false)

    const buttonStyle = {
        display: 'block',
        margin: '10px auto'
    }

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }

    return (
        <div>
            <Lottie
                options={defaultOptions}
                height={400}
                width={400}
                isStopped={isStopped}
                isPaused={isPaused}
            />
            <button style={buttonStyle} onClick={() => setIsStopped(true)}>
                stop
            </button>
            <button style={buttonStyle} onClick={() => setIsStopped(false)}>
                play
            </button>
            <button style={buttonStyle} onClick={() => setIsPaused(!isPaused)}>
                pause
            </button>
        </div>
    )
}
