import React from 'react';
import Video from '../components/Video/Video';

const Home = () => {
  return (
    <div className="w-[1080px] h-[417px] bg-zinc-300 rounded-[5px]">
      * this space is for home page *
      <Video url='https://www.youtube.com/watch?v=LXb3EKWsInQ'/>
    </div>
  );
};

export default Home;