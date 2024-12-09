import { useRef } from "react";

function VideoPlayer() {
  const videoRef = useRef();
  return (
    <>
      <video
        src="./video.mp4"
        type="video/mp4"
        ref={videoRef}
        width="500"
        height="300"
        controls
      >
        {" "}
      </video>
      <div className="button">
        <button className="btn-play" onClick={() => videoRef.current.play()}>
          Play
        </button>
        <button className="btn-pause" onClick={() => videoRef.current.pause()}>
          Pause
        </button>
      </div>
    </>
  );
}

export default VideoPlayer;
