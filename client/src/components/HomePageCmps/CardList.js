import React, { useState, useEffect } from "react";
import ExploreCards from "./ExploreCards";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const CardList = () => {
  const [videos, setVideos] = useState([]);

  const getThumbnailUrl = (url) => {
    const videoIdMatch = url.match(/v=([^&]+)/);
    if (videoIdMatch && videoIdMatch[1]) {
      return `http://img.youtube.com/vi/${videoIdMatch[1]}/0.jpg`;
    }
    return '';
  };

  useEffect(() => {
    fetch("/api/content")
      .then((r) => r.json())
      .then((data) => {
        setVideos(data);
        console.log(data);
      });
  }, []);

  // Organize videos by genre
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
            {videosByGenre[genre].map((video, videoIndex) => (
              <div key={videoIndex} className="mx-1">
                <ExploreCards
                  title={video.title}
                  description={video.description}
                  imageUrl={getThumbnailUrl(video.url)} // Use getThumbnailUrl to generate image URL
                />
              </div>
            ))}
          </Carousel>
        </div>
      ))}
    </div>
  );
};

export default CardList;
