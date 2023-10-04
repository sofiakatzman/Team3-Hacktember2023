import React from "react";
import { useNavigate } from 'react-router-dom';


const ExploreCards = ({ title, description, imageUrl, id }) => {
  const nav = useNavigate()
  return (
    <div className="py-4">
      <div
        className="max-w-sm rounded overflow-hidden shadow-lg"
        style={{ height: "400px" }}
        onClick={()=> nav(`/video/${id}`)}
      >
        <img className="w-full h-60 object-cover" src={imageUrl} alt={title} />
        <div className="px-6 py-4 h-48 overflow-y-auto">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ExploreCards;
