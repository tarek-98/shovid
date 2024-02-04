import React from "react";

function Product() {
  return (
    <div>
      <div className="body-content">
        <video
          className="player"
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
