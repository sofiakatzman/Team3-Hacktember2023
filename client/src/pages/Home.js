import React from "react";
import Video from "../components/Video/Video";
import Explore from "../components/HomePageCmps/Explore";

const Home = () => {
  const backgroundImageUrl =
    "https://media.cnn.com/api/v1/images/stellar/prod/221128140051-mauna.jpg?c=16x9&q=w_850,c_fill";

  return (
    <>
      <div
        className="bg-cover bg-center h-auto text-white py-40 px-10 object-fill"
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      >
        <div className="md:w-1/2">
          <p className="font-bold text-sm uppercase">Services</p>
          <p className="text-3xl font-bold">Multimedia products</p>
          <p className="text-2xl mb-10 leading-none">
            Attractive designs for your brand
          </p>
          <a
            href="#"
            className="bg-blue-500 py-4 px-8 text-white font-bold uppercase text-xs rounded hover:bg-gray-200 hover:text-gray-800"
          >
            Continue
          </a>
        </div>
      </div>
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
