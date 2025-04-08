import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const SubjectPapers = () => {
  const { subject } = useParams();
  const [papers, setPapers] = useState([]);

  useEffect(() => {
    const fetchPapers = async () => {
      const res = await axios.get(
        `http://localhost:5000/api/papers?subject=${subject}`
      );
      setPapers(res.data);
    };

    fetchPapers();
  }, [subject]);

  return (
    <div className="min-h-screen bg-black text-white py-12 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center capitalize">
        {subject.replace("-", " ")} - Previous Year Papers
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
        {papers.map((paper) => (
          <div
            key={paper._id}
            className="bg-gradient-to-br from-green-400 to-green-500 text-white shadow-xl rounded-xl w-60 h-60 flex flex-col justify-center items-center transition-all duration-300 transform hover:scale-110 hover:rotate-6 hover:shadow-2xl"
          >
            <h2 className="text-xl font-bold mb-2">{paper.year} Paper</h2>
            <a
              href={`http://localhost:5000/${paper.filePath}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-green-500 px-4 py-2 rounded"
            >
              View Paper
            </a>
            <a
              href={`http://localhost:5000/${paper.filePath}`}
              download
              className="mt-2 bg-white text-green-500 px-4 py-2 rounded"
            >
              Download
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubjectPapers;
