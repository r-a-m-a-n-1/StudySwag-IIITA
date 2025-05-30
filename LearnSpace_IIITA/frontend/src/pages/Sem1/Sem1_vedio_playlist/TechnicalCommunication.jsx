import React, { useState } from "react";

const TechnicalCommunication = () => {
  // Generate 10 video items. Replace thumbnail, videoUrl, and description as needed.
  const videoData = Array.from({ length: 10 }, (_, index) => ({
    id: index + 1,
    title: `Technical Communication Video ${index + 1}`,
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "Learn effective technical writing and presentation techniques.",
  }));

  const [selectedVideo, setSelectedVideo] = useState(null);

  const openVideo = (video) => {
    setSelectedVideo(video);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  return (
    <div className="bg-black text-white w-full min-h-screen p-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        Technical Communication Skills - Video Lectures
      </h1>
      <div className="flex flex-col space-y-4">
        {videoData.map((video) => (
          <div
            key={video.id}
            className="bg-gray-800 p-4 rounded-lg shadow-lg cursor-pointer flex items-center space-x-4"
            onClick={() => openVideo(video)}
          >
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-32 h-20 object-cover rounded"
            />
            <div>
              <h2 className="text-2xl font-semibold">{video.title}</h2>
              <p className="text-gray-400">{video.description}</p>
            </div>
          </div>
        ))}
      </div>
      {selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="bg-gray-900 p-6 rounded-lg w-4/5 lg:w-3/5 xl:w-2/5">
            <button
              onClick={closeVideo}
              className="text-white text-lg font-bold mb-4"
            >
              Close ✖
            </button>
            <iframe
              className="w-full h-64 md:h-96"
              src={selectedVideo.videoUrl}
              title={selectedVideo.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <h2 className="text-2xl font-semibold mt-4">
              {selectedVideo.title}
            </h2>
            <p className="text-gray-400 mt-2">{selectedVideo.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default TechnicalCommunication;
