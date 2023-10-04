import React from "react";
import ExploreCards from "./ExploreCards";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import image1 from "../Assets/Lesson 1 Thumb.png";
import image2 from "../Assets/Lesson 2 Thumb.png";
import image3 from "../Assets/Lesson 3 Thumb.png";

const CardList = () => {
  const cardsData = [
    {
      title: "Introduction to Chemistry Lesson 1",
      description:
        "Explore the basics of Chemistry and build a foundation so you can dive deeper in...",
      imageUrl: image1,
    },
    {
      title: "Atomic Structure Lesson 2",
      description: "Explore the basics of Chemistry and build a foundation so you can dive deeper in...",
      imageUrl: image2,
    },
    {
      title: "Chemical Bonding Lesson 3",
      description: "Explore the basics of Chemistry and build a foundation so you can dive deeper in...",
      imageUrl: image3,
    },
    {
      title: "Sunset Over the Ocean",
      description: "Test description for the forth card",
      imageUrl:
        "https://media.istockphoto.com/id/508215946/photo/lava-lake.jpg?s=2048x2048&w=is&k=20&c=WTPn11Gn3iHatWJyVPk0coU4naaT7crfjgtqhcznbq0=",
    },
  ];

  return (
    <div className="mx-48">
      <p className="text-left font-Poppins text-2xl font-semibold ">
        {" "}
        Chemistry{" "}
      </p>
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
          <div key={index} className="mx-1">
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
