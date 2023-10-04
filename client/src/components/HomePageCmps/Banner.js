import React from "react";

const Banner = () => {
  const bannerStyle = {
    backgroundImage: `url(https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div
      className="h-auto text-white py-24 px-10 object-fill"
      style={bannerStyle}
    >
      <div className="md:w-1/2">
        <p className="font-bold text-sm uppercase">Services</p>
        <p className="text-3xl font-bold">Multimedia products</p>
        <p className="text-2xl mb-10 leading-none">
          Attractive designs for your brand
        </p>
        <a
          href="#"
          className="bg-purple-800 py-4 px-8 text-white font-bold uppercase text-xs rounded hover:bg-gray-200 hover:text-gray-800"
        >
          Contact us
        </a>
      </div>
    </div>
  );
};

export default Banner;