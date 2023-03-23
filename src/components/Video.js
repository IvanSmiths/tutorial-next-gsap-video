import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { Bebas_Neue } from 'next/font/google'

const bebas = Bebas_Neue({ subsets: ['latin'], weight: ['400'] })

function Video() {
    gsap.registerPlugin(ScrollTrigger);

    const videoRef = useRef(null)
    const redRef = useRef(null)
    const triggerRef = useRef(null)

    useEffect(() => {
        const tl = gsap.timeline(
            {
                scrollTrigger: {
                    trigger: triggerRef.current,
                    scrub: true,
                    start: "top center",
                    end: "bottom top",
                },
            }
        );
        tl.to(
            redRef.current,
            {
                translateY: -300
            },
            0
        );
        tl.to(
            videoRef.current,
            {
                filter: "grayscale(80%)"
            },
            0
        );
    }, [])

    return (
        <div ref={triggerRef} className="video-section">
            <video ref={videoRef} src="/video.mp4" loop autoPlay muted></video>
            <div className='video-copy'>
                <h1 ref={redRef} className={bebas.className}>RED</h1>
            </div>
        </div>
    )
}

export default Video