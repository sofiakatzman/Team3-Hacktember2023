import React from "react";

const ExploreCards = ({ title, description, imageUrl }) => {
  return (
    <div className="py-4">
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img
          className="w-full"
          src={imageUrl} // Provide the image URL here
          alt={title} // Use the title as alt text
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ExploreCards;