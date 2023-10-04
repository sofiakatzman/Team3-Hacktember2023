import React from "react";
import ExploreCards from "./ExploreCards"; // Import your ExploreCards component

const CardList = () => {
  const cardsData = [
    {
      title: "The Coldest Sunset",
      description: "Test description for the second card.",
      imageUrl:
        "https://media.istockphoto.com/id/508215946/photo/lava-lake.jpg?s=2048x2048&w=is&k=20&c=WTPn11Gn3iHatWJyVPk0coU4naaT7crfjgtqhcznbq0=",
    },
    {
      title: "Another Sunset",
      description: "Test description for the second card.",
      imageUrl:
        "https://media.istockphoto.com/id/508215946/photo/lava-lake.jpg?s=2048x2048&w=is&k=20&c=WTPn11Gn3iHatWJyVPk0coU4naaT7crfjgtqhcznbq0=",
    },
    {
      title: "Sunset Over the Ocean",
      description: "Test description for the third card",
      imageUrl:
        "https://media.istockphoto.com/id/508215946/photo/lava-lake.jpg?s=2048x2048&w=is&k=20&c=WTPn11Gn3iHatWJyVPk0coU4naaT7crfjgtqhcznbq0=",
    },
  ];

  return (
    <div className="display flex p-4">
      {cardsData.map((card, index) => (
        <div
          key={index}
          className={`mx-8 ${index !== 0 ? "border-l border-gray-300" : ""}`}
        >
          <ExploreCards
            title={card.title}
            description={card.description}
            imageUrl={card.imageUrl}
          />
        </div>
      ))}
    </div>
  );
};

export default CardList;
