import React from "react";
import Video from "../components/Video/Video";
import Explore from "../components/HomePageCmps/Explore";
import Banner from "../components/HomePageCmps/Banner";

const Home = () => {
  const backgroundImageUrl =
    "https://media.cnn.com/api/v1/images/stellar/prod/221128140051-mauna.jpg?c=16x9&q=w_850,c_fill";

  return (
    <>
     <Banner/>
      <div className="justify-center flex py-4">
        <Explore />
      </div>
      {/* <div className="w-[1080px] h-[417px] bg-zinc-300 rounded-[5px]">
        * this space is for home page *
        <Video url="https://www.youtube.com/watch?v=LXb3EKWsInQ" />
      </div> */}
    </>
  );
};

export default Home;
