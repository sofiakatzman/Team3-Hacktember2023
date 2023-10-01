import React, { useState } from 'react'
import ReactPlayer from 'react-player/youtube'

const Video = ({url}) => {
//video must be muted in order to auto play, so once it starts state is updated and unmutes it
const [muted, setMuted] = useState(true)
const [isPlaying, setIsPlaying] = useState(true)

    return(
        <div>
            <ReactPlayer url={url} controls={true} muted={muted} playing={isPlaying} onStart={()=>setMuted(false)} playsinline={true} onEnded={()=>console.log("video ended") }/>
            {/* test play / pause button */}
            remote:
            <button onClick={()=>setIsPlaying(!isPlaying)}>{isPlaying ? "[ pause ]" : "[ play ]"}</button>
            <button onClick={()=>setMuted(!muted)}>{muted ? "[ unmute] " : "[ mute ]"}</button>

        </div>
    )
};

export default Video;