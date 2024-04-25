"use client";
import React from "react";
import ReactPlayer from "react-player";
// import vid1 from "@/public/vid-1.mp4"

const VideoPlayer = () => {
  //video path
  let videosrc = "/vid-1.mp4";

  return (
    <div>
      {/* <h1>my custome player</h1> */}
      <ReactPlayer
        width="500px"
        height="400px"
        // url="https://www.youtube.com/watch?v=__6SH7kSllM"
        url={videosrc}
        controls={true}
        // playing={true}
        // light is usefull incase of dark mode
        light={false}
        // picture in picture
        pip={true}
      />
      {/* <source src="https://www.youtube.com/watch?v=__6SH7kSllM" type="video/mp4" /> */}
    </div>
  );
};

export default VideoPlayer;