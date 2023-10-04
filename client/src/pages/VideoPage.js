import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Video from '../components/Video/Video';

const VideoPage = () => {
  const [video, setVideo] = useState(null);
  const { videoId } = useParams(); 

  useEffect(() => {
    // Fetch all video data (assuming it's a list)
    fetch('/api/content')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to fetch video data: ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        // Find the video in the data based on its ID
        // Extract the video ID from URL parameters
        const selectedVideo = data.find((video) => video.id === Number(videoId));
        console.log(data)
        console.log(selectedVideo)
        if (selectedVideo) {
          setVideo(selectedVideo); // Set the video data in the state
        } else {
          console.error(`Video with ID ${videoId} not found.`);
        }
      })
      .catch((error) => {
        console.error('Error fetching video:', error);
      });
  }, [videoId]);

  return (
    <div>
      <h1>Video Page</h1>
      {video ? (
        <div>
          {/* Display video using your Video component */}
          <Video url={video.video} />
          <h2>{video.title}</h2>
          <p>{video.description}</p>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default VideoPage;