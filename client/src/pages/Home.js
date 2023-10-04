import React from "react";
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
    </>
  );
};

export default Home;
