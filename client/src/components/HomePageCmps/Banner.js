import React from "react";

const Banner = () => {

  const backgroundImageUrl =
    "https://media.cnn.com/api/v1/images/stellar/prod/221128140051-mauna.jpg?c=16x9&q=w_850,c_fill";
  return (
    <>
      <div
        className="bg-cover bg-center h-auto text-white py-40 px-48 object-fill"
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      >
        <div className="md:w-1/2">
          <p className="font-bold text-sm uppercase">Welcome to EduGuide</p>
          <p className="text-3xl font-bold">Your Personal Guide to Higher Learning</p>
          <p className="text-2xl mb-10 leading-none">
          Elevate your learning by asking our AI chatbot, Edu any question you can think of. Edu is with you while watching any video, ready to offer you guidance on your educational journey.
          </p>
          <a
            href="/videos"
            className="bg-blue-500 py-4 px-8 text-white font-bold uppercase text-xs rounded hover:bg-gray-200 hover:text-gray-800"
          >
            Discover More!
          </a>
        </div>
      </div>
    </>
  );
};

export default Banner;