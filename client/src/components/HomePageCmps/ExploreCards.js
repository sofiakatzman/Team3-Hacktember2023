import React from "react";

const ExploreCards = ({ title, description, imageUrl }) => {
  return (
    <div className="py-4">
      <div
        className="max-w-sm rounded overflow-hidden shadow-lg"
        style={{ height: "400px" }}
      >
        <img className="w-full h-40 object-cover" src={imageUrl} alt={title} />
        <div className="px-6 py-4 h-48 overflow-y-auto">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ExploreCards;
