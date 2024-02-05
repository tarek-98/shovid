import React, { useEffect, useRef } from "react";
import "./product.css";

function Product({ product, setVideoRef, autoplay }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (autoplay) {
      videoRef.current.play();
    }
  }, [autoplay]);

  const onVideoPress = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };
  return (
    <div className="content">
      <div className="card-content">
        <video
          className="player"
          onClick={onVideoPress}
          ref={(ref) => {
            videoRef.current = ref;
            setVideoRef(ref);
          }}
          loop
          preload="auto"
          autoPlay={true}
          muted={true}
          controls={true}
          src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        ></video>
      </div>
    </div>
  );
}

export default Product;
