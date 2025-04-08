
import React, { useState } from "react";

const LinearAlgebra = () => {
  // Replace these video IDs with your actual YouTube video IDs (one for each of the 50 videos)
  const videoIDs = [
    "_6oRqxY6O5w", // Video 1
    "yzuoyA2EJPA", // Video 2
    "5LCO26C-ggo", // Video 3
    "QZi8OqYSLgU", // Video 4
    "kSyYgXvBpQQ", // Video 5
    "9WjuLvPT_2A", // Video 6
    "pG-IAFOiOw4", // Video 7
    "itCTFw0d4hs", // Video 8
    "iF7ya80h1Rs", // Video 9
    "wGiJkeuJDcM", // Video 10
    "cwIIXBSEFX4", // Video 11
    "WBvroWQecEI", // Video 12
    "bJcGmEkiyz8", // Video 13
    "HZxJtGqkJLM", // Video 14
    "EL3fXu9FFII", // Video 15
    "NzuTxGGFcrg", // Video 16
    "KgZR5L9jTJA", // Video 17
    "jAH5rcWIyCE", // Video 18
    "NCsoLIlz_lU", // Video 19
    "bXeQILCHnVY", // Video 20
    "HnFFuXDi9p8", // Video 21
    "qIOCtAR0Qw0", // Video 22
    "3HoSPQmpzKc", // Video 23
    "TH2nvOymftc", // Video 24
    "CDKS5Se6r3Q", // Video 25
    "X7tLRj8Le-8", // Video 26
    "qMwnGmEXBpY", // Video 27
    "OM8zRM5v8U0",  // Video 28
    "XdmVCN8bCQs",  // Video 29
    "wmw4pbFIaV4",  // Video 30
    "DoHj2cPwz8U",  // Video 31
    "X1vBZcpHDXA",  // Video 32
    "xnPmAe09KQs",  // Video 33
    "5ezk6z98wEo",  // Video 34
    "vzj4E6F1O7M",  // Video 35
    "L-UcOD04rUQ",  // Video 36
    "QAawJJDWe5M",  // Video 37
    "OXMqPo1Spm4",  // Video 38
    "A0eX8tM0GLE",  // Video 39
    "MgrJMCzPJHU",  // Video 40
    "9E51guuulgU",  // Video 41
    "K0Q-TaQ2ZtA",  // Video 42
    "XMr7ddjxxr8",  // Video 43
    "iwLTbgKGuI8",  // Video 44
    "videoID45",  // Video 45
    "videoID46",  // Video 46
    "videoID47",  // Video 47
    "videoID48",  // Video 48
    "videoID49",  // Video 49
    "videoID50"   // Video 50
  ];

  // Provide a description for each video.
  const videoDescriptions = [
    "Vector Space-Concept and defintion in Hindi(Lecture-1)",
    "Vector Space-General Properties in Hindi(Lecture 2)",
    "Vector Space-Vector Subspace in Hindi (Lecture 3)",
    "Vector Space-Intersection and Union of Vector Subspaces in Hindi (Lecture 4)",
    "Vector Space-Concept of Linear sum,Direct Sum & Linear Span in Hindi (Lecture 4)",
    "Vector Space-Linear Independence and Dependence of Vector in Hindi (Lecture 6).",
    "Vector Space-Concepts of Basis,Finite dimensional Vector Space in Hindi (Lecture 7)",
    "Vector Space-Dimension of Sum of Subspace in Hindi (Lecture 8)",
    "Vector Space-Theorems on linear spac in Hindi (Lecture 9)",
    "Vector Space-Theorems On Linear Independence & Dependence in Hindi (Lecture 10)",
    "Vector Space-Existence & dimension theorem in Hindi (Lecture 11)",
    "Vecor Space-Extension theorem ,dim of subspace ,Exitence of Complementary space in Hindi (Lecture 12)",
    "Vector Space-Dimension of Sum of subspace(Proof of theorem) in Hindi(Lecture 13)",
    "Vector Space-Dimension of Ouotient Space(Proof of theorem) in Hindi (Lecture 14)",
    "Vector Space-Linear Transformation & its Properties in Hindi (Lecture 15)",
    "Vector Space-Kernal of Vector Space Homomorphism & theorems (Lecture 16)",
    "Vector Space-Isomorphism of Vector Sapces in Hindi (Lecture 17)",
    "Vector Space-Fundamental Theorem of Vector Sapce homomorphism in Hindi (Lecture 17)",
    "Vector Space-Matrix Representation of Linear Transformation in Hindi (Lecture 19)",
    "Vector Space-Inverse of Linear Transformation in Hindi (Lecture 20)",
    "Vector Space -Rank Nullity Theorem in Hindi (Lecture 21).",
    "Vecotor Space-Invertible,Singular & Nonsingular Linear Transformation in Hindi (Lecture 22)",
    "Vector Space-Numerical Questions on Rank Nullity theorem in Hindi(Lecture 23)",
    "Vector Space-Eigen Value & Vector of linear Transformation in Hindi (Lecture 24)",
    "Vector Space-Numerical Problem on Eigen Value & Vectors in Hindi (Lecure 25)",
    "Vector Space-Numerical Problem on Eigen Value & Eigen Vectors of Matrix in Hindi(Lecture 26)",
    "Vector Space/Matrix Theory-Diagonalization of Matrix in Hindi (Lecture 27)",
    "Inner Product Space || Definition",
    " Examples || Inner product space",
    "Properties of Inner Product",
    "Norms, distances, and metrics in vector spaces.",
    " Norm of a vector || Introduction",
    "Cauchy schwarz Inequality",
    "Triangle Inequality || Inner product space",
    "Inner Product Space is Metric Space.",
    "Normed Linear Space || Every Inner Product Space is Normed space",
    "Orthogonal vectors and Orthogonal complement.",
    "Theorem 1 || Orthogonal set of non zero vector is linearly independent",
    "Theorem 2 || Orthogonal vectors || Inner product space.",
    "Theorem 3 || Orthogonal vectors",
    " Example on Orthogonal Complement.",
    " Orthonormal set || Theorem.",
    "Bessel's Inequality |Orthonormal vectors.",
    " Gram-Schmidt Orthogonalization Process.",
    "Theorem || Gram Schmidt Orthogonalization",
    "The concept and applications of dual spaces.",
    "Introduction to tensor operations and their uses.",
    "High-dimensional vector space explorations.",
    "Handling sparsity in large matrices.",
    "Applying linear algebra in statistical analysis.",
    "Linking linear systems to differential equations."
  ];

  // Map the video IDs to video objects
  const videoData = videoIDs.map((videoId, index) => ({
    id: index + 1,
    title: `Linear Algebra Video ${index + 1}`,
    // Using the video ID to generate the thumbnail URL
    thumbnail: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
    // Using the video ID to generate the embed URL
    videoUrl: `https://www.youtube.com/embed/${videoId}`,
    description: videoDescriptions[index] // Use the corresponding description
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
        Linear Algebra - Video Lectures
      </h1>
      {/* Updated container: using grid to show 6 cards per row on larger screens */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {videoData.map((video) => (
          <div
            key={video.id}
            className="bg-gray-800 p-4 rounded-lg shadow-lg cursor-pointer flex flex-col items-center transform hover:scale-105 transition duration-300"
            onClick={() => openVideo(video)}
          >
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-32 object-cover rounded mb-2"
            />
            <h2 className="text-xl font-semibold text-center">{video.title}</h2>
            <p className="text-gray-400 text-center text-sm">{video.description}</p>
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
            <h2 className="text-2xl font-semibold mt-4">{selectedVideo.title}</h2>
            <p className="text-gray-400 mt-2">{selectedVideo.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default LinearAlgebra;
