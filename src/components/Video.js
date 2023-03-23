
import { Bebas_Neue } from 'next/font/google'
const bebas = Bebas_Neue({ subsets: ['latin'], weight: ['400'] })

function Video() {
    return (
        <div className="video-section">
            <video src="/video.mp4" loop autoPlay muted></video>
            <div className='video-copy'>
                <h1 className={bebas.className}>RED</h1>
            </div>
        </div>
    )
}

export default Video