import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import backgroundImage from './about.jpg';

function HomePage() {
  const location = useLocation();
  const [showArrow, setShowArrow] = useState(true);

  // Arrow style for triangle arrows.
  const arrowStyle = {
    width: 0,
    height: 0,
    borderLeft: "50px solid transparent",
    borderRight: "50px solid transparent",
    borderTop: "80px solid", // Color will be set per arrow.
    margin: "10px 0",
    animation: "moveArrow 2s infinite ease-in-out",
  };

  // Hide arrow if user scrolls down beyond 100px.
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 100) {
        setShowArrow(true);
      } else {
        setShowArrow(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="relative h-screen w-screen flex justify-center items-center overflow-x-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Inject custom keyframes for arrow animation */}
      <style>{`
        @keyframes moveArrow {
          0% { transform: translateY(-50px); opacity: 0; }
          50% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(50px); opacity: 0; }
        }
      `}</style>

      {/* Blur overlay (replaces the ::before pseudo-element) */}
      <div className="absolute inset-0 bg-black bg-opacity-50 blur"></div>

      {/* Content container */}
      <div className="relative z-10 text-center px-4">
        <div className="text-6xl font-bold mb-12">
          <span className="bg-gradient-to-r from-[#ff6347] via-[#1e90ff] to-[#32cd32] bg-clip-text text-transparent animate-pulse">
            Welcome to IIIT Learn Space
          </span>
        </div>
        {/* Scroll link (if needed) */}
        <a href="#amazing-feature" className="block"></a>
      </div>

      {/* Conditionally render arrow animation only on HomePage and only when near top */}
      {location.pathname === "/" && showArrow && (
        <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-20">
          <div style={{ ...arrowStyle, borderTopColor: "black" }}></div>
          <div style={{ ...arrowStyle, borderTopColor: "rgba(0, 0, 0, 0.7)", animationDelay: "0.3s" }}></div>
          <div style={{ ...arrowStyle, borderTopColor: "rgba(0, 0, 0, 0.5)", animationDelay: "0.6s" }}></div>
        </div>
      )}
    </div>
  );
}

export default HomePage;
