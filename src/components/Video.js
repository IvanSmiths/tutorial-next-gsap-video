
function Video() {
    return (
        <div className="video-section">
            <video src="/video.mp4" loop autoPlay muted></video>
            <div className='video-copy'>
                <h1>RED</h1>
            </div>
        </div>
    )
}

export default Video