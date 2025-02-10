import React from "react";
import VideoHeader from "../../components/header/VideoHeader";
import VideoFooter from "../../components/footer/VideoFooter";

const Video = () => {
  return (
    <>
      <VideoHeader />
      <div className="flex justify-center p-4">
        <div className="relative w-full md:w-3/4 xl:w-2/3 pb-[56.25%] border rounded-lg overflow-hidden shadow-lg">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/rfscVS0vtbw?si=uZgGxEGJSNq6sNLI"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <VideoFooter />
    </>
  );
};

export default Video;
