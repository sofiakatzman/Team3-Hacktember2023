import React from "react";
import ExploreCards from "./ExploreCards";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

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
    {
      title: "Sunset Over the Ocean",
      description: "Test description for the forth card",
      imageUrl:
        "https://media.istockphoto.com/id/508215946/photo/lava-lake.jpg?s=2048x2048&w=is&k=20&c=WTPn11Gn3iHatWJyVPk0coU4naaT7crfjgtqhcznbq0=",
    },
  ];

  return (
    <div className="p-4">
      <Carousel
        showThumbs={false}
        showArrows={true}
        showStatus={false}
        showIndicators={false}
        dynamicHeight={false}
        emulateTouch={true}
        swipeable={true}
        centerMode={true}
        centerSlidePercentage={33.3}
      >
        {cardsData.map((card, index) => (
          <div key={index} className="mx-4">
            <ExploreCards
              title={card.title}
              description={card.description}
              imageUrl={card.imageUrl}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};
export default CardList;
