import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Videos = () => {
  const [videos, setVideos] = useState([]);
  const [filteredVideos, setFilteredVideos] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    fetch("/api/content")
      .then(r => r.json())
      .then(data => {
        setVideos(data);
        setFilteredVideos(data);
      })
  }, []);

  useEffect(() => {
    // Filter videos based on the selected genre
    if (selectedGenre === 'All') {
      setFilteredVideos(videos);
    } else {
      const filtered = videos.filter(
        (video) => video.genre === selectedGenre
      );
      setFilteredVideos(filtered);
    }
  }, [selectedGenre, videos]);

  useEffect(() => {
    // Filter videos based on the search query
    if (searchQuery.trim() === '') {
      setFilteredVideos(videos);
    } else {
      const filtered = videos.filter(video =>
        video.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredVideos(filtered);
    }
  }, [searchQuery, videos]);

  // Function to generate YouTube thumbnail URL
  const getThumbnailUrl = (url) => {
    const videoIdMatch = url.match(/v=([^&]+)/);
    if (videoIdMatch && videoIdMatch[1]) {
      return `http://img.youtube.com/vi/${videoIdMatch[1]}/0.jpg`;
    }
    return '';
  };

  // Function to open the video in a new page or component
  const openVideo = (videoId) => {
    navigate(`/video/${videoId}`);
  };

  return (
    <div className="bg-cover bg-center h-auto text-black py-10 px-5 object-fill">
      <div className="md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto">
        <h1 className="text-center text-zinc-800 text-4xl font-semibold pb-5">All Videos</h1>
        <div className="mb-6 flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
          <div className="w-full md:w-1/2">
            <label htmlFor="genre" className="font-semibold">Filter by Genre:</label>
            <select
              id="genre"
              className="w-full p-2 border border-gray-300 rounded"
              value={selectedGenre}
              onChange={(e) => setSelectedGenre(e.target.value)}
            >
              <option value="All">All</option>
              <option value="Math">Math</option>
              <option value="Science">Science</option>
              <option value="English">English</option>
              <option value="History">History</option>
            </select>
          </div>
          <div className="w-full md:w-1/2">
            <label htmlFor="search" className="font-semibold">Search:</label>
            <input
              id="search"
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by title"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredVideos.length > 0 ? (
            filteredVideos.map(video => {
              const thumbnailUrl = getThumbnailUrl(video.video);
              return (
                <div
                  key={video.id}
                  className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer"
                  onClick={() => openVideo(video.id)}
                >
                  {thumbnailUrl && (
                    <div
                      style={{
                        backgroundImage: `url(${thumbnailUrl})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        paddingBottom: '56.25%', // 16:9 aspect ratio
                      }}
                    ></div>
                  )}
                  <div className="p-4">
                    <h2 className="text-lg font-semibold mb-2">{video.title}</h2>
                    <p className="text-sm">{video.description}</p>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="text-center text-gray-500">No videos yet</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Videos;