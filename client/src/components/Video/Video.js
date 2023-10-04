import React, { useState } from 'react';
import ReactPlayer from 'react-player/youtube';
import LOGO_PLAY from '../../assets/LOGO_PLAY.png';
import LOGO_PAUSE from '../../assets/LOGO_PAUSE.png';
import LOGO_HOME from '../../assets/LOGO_HOME.png';
import { useNavigate } from 'react-router-dom';

const Video = ({ url }) => {
  // Video must be muted in order to auto-play, so once it starts, state is updated and unmutes it
  const [muted, setMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const nav = useNavigate()

  const handlePlayPauseClick = () => {
    setIsPlaying(!isPlaying);
  };

  // const handleMuteClick = () => {
  //   setMuted(!muted);
  // };

  const handleHomeClick = () => {
    nav("/")
  };

  return (
    <div>
      <ReactPlayer
        url={url}
        controls={false}
        muted={muted}
        playing={isPlaying}
        onStart={() => setMuted(false)}
        playsinline={true}
        onEnded={() => console.log("video ended")}
        width="100%"
        height="100%"
        style={{ position: 'fixed', top: 0, left: 0 }}
      />
      {/* Play/Pause button */}
      <button
        className="fixed z-50 w-36 h-36 bg-blue-500 rounded-full bottom-52 right-10"
        onClick={handlePlayPauseClick}
      >
        <img
          src={isPlaying ? LOGO_PAUSE : LOGO_PLAY}
          alt="play-pause-logo"
          className="w-full h-full object-cover rounded-full"
        />
      </button>
      {/* Mute button */}
      {/* <button
        className="fixed z-50 w-16 h-16 bg-blue-500 rounded-full bottom-10 right-28"
        onClick={handleMuteClick}
      > */}
        {/* <img
          src={muted ? LOGO_MUTE : LOGO_UNMUTE}
          alt="mute-unmute-logo"
          className="w-full h-full object-cover rounded-full"
        /> */}
      {/* </button> */}
      {/* Home button */}
      <button
        className="fixed z-50 w-36 h-36 bg-blue-500 rounded-full bottom-96 right-10"
        onClick={handleHomeClick}
      >
        <img
          src={LOGO_HOME}
          alt="home-logo"
          className="w-full h-full object-cover rounded-full"
        />
      </button>
    </div>
  );
};

export default Video;