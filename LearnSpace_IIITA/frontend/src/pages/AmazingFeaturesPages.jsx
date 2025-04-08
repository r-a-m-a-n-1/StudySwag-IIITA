import React, { useState, useEffect } from "react";
import logoSupport from './vedio.png'; // Logo for Free Support
import logoLectures from './vedio.png'; // Logo for Best Video Lectures
import logoNotes from './lecture.png'; // Logo for Study Material and Notes

const AmazingFeaturePage = () => {
  const fullText = "Amazing Features";
  const [displayedText, setDisplayedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    if (textIndex < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayedText(fullText.slice(0, textIndex + 1));
        setTextIndex(textIndex + 1);
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [textIndex, fullText]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black p-8">
      {/* Dynamic Typewriter Heading */}
      <h1
        style={{
          marginTop: "50px",
          fontSize: "2.5rem",
          color: "#38a169",
        }}
        className="font-bold mb-8"
      >
        {displayedText}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1: Free Support */}
        <div
          className="bg-gradient-to-br from-pink-600 to-purple-700 text-white shadow-lg rounded-lg text-center border border-transparent p-8 transition-transform duration-300 transform hover:scale-110 hover:shadow-2xl"
          style={{ height: "400px" }}
        >
          <img src={logoSupport} alt="Free Support Logo" className="w-24 h-24 mx-auto mb-4" />
          <h5 className="text-xl font-semibold mb-2">Free Support</h5>
          <p>
            My platform provides study material, video lectures, previous year papers, and assignments.
            We also have a support team to resolve student issues related to study content.
          </p>
        </div>

        {/* Card 2: Best Video Lectures */}
        <div
          className="bg-gradient-to-br from-pink-600 to-purple-700 text-white shadow-lg rounded-lg text-center border border-transparent p-8 transition-transform duration-300 transform hover:scale-110 hover:shadow-2xl"
          style={{ height: "400px" }}
        >
          <img src={logoLectures} alt="Best Video Lectures Logo" className="w-24 h-24 mx-auto mb-4" />
          <h5 className="text-xl font-semibold mb-2">Best Video Lectures</h5>
          <p>
            My website provides all video lectures according to your semester.
            These lectures are perfectly aligned with your academic course, eliminating the need to search elsewhere.
            My platform solves this problem.
          </p>
        </div>

        {/* Card 3: Study Material and Notes */}
        <div
          className="bg-gradient-to-br from-pink-600 to-purple-700 text-white shadow-lg rounded-lg text-center border border-transparent p-8 transition-transform duration-300 transform hover:scale-110 hover:shadow-2xl"
          style={{ height: "400px" }}
        >
          <img src={logoNotes} alt="Study Material and Notes Logo" className="w-24 h-24 mx-auto mb-4" />
          <h5 className="text-xl font-semibold mb-2">Study Material and Notes</h5>
          <p>
            All lecture notes, study materials, and papers are arranged in the best manner so that you don’t have trouble finding them.
            And there’s much more!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AmazingFeaturePage;
