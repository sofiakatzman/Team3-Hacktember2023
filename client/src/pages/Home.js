import React from 'react';
import Video from '../components/Video/Video';
import CarouselDisplay from '../components/Carousel/CarouselDisplay';

const Home = () => {
  return (
    <div className="">
      * this space is for home page *
      <Video url='https://www.youtube.com/watch?v=LXb3EKWsInQ'/>
      <CarouselDisplay />
    </div> 
  );
};

export default Home;