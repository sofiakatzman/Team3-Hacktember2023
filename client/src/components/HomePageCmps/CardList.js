import React, { useState, useEffect } from "react";
import ExploreCards from "./ExploreCards";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
// import seedData from "./SeedData";

const CardList = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch("/api/content")
      .then((r) => r.json())
      .then((data) => setVideos(data))
      .catch((error) => console.error("Error fetching data:", error)); // Handle fetch errors
  }, []);

  const getThumbnailUrl = (url) => {
    const videoIdMatch = url.match(/v=([^&]+)/);
    if (videoIdMatch && videoIdMatch[1]) {
      return `http://img.youtube.com/vi/${videoIdMatch[1]}/0.jpg`;
    }
    return "";
  };

  const videosByGenre = videos.reduce((acc, video) => {
    if (!acc[video.genre]) {
      acc[video.genre] = [];
    }
    acc[video.genre].push(video);
    return acc;
  }, {});

  return (
    <div className="mx-48">
      {Object.keys(videosByGenre).map((genre, index) => (
        <div key={index}>
          <p className="text-left font-Poppins text-2xl font-semibold ">{genre}</p>
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
            {videosByGenre[genre] && videosByGenre[genre].length > 0 ? (
              videosByGenre[genre].map((video, videoIndex) => (
                <div key={videoIndex} className="mx-1">
                  <ExploreCards
                    id={video.id}
                    title={video.title}
                    description={video.description}
                    imageUrl={getThumbnailUrl(video.video)} // Use getThumbnailUrl to generate image URL
                  />
                </div>
              ))
            ) : (
              <p>No videos available for this genre</p>
            )}
          </Carousel>
        </div>
      ))}
    </div>
  );
};

export default CardList;