import React, { useState } from "react";
import axios from "axios";
import AdminNavbar from "../components/AdminNavbar";

const AdminPanel = () => {
  const [subject, setSubject] = useState("");
  const [year, setYear] = useState("");
  const [file, setFile] = useState(null);

  const handleUpload = async (e) => {
    e.preventDefault();

    if (!subject || !year || !file) {
      alert("Please fill all fields.");
      return;
    }

    const formData = new FormData();
    formData.append("subject", subject);
    formData.append("year", year);
    formData.append("file", file);

    try {
      await axios.post("http://localhost:5000/api/upload", formData);
      alert("Paper uploaded successfully!");
    } catch (err) {
      alert("Failed to upload paper!");
    }
  };

  return (
    <div>
      <AdminNavbar />
      <div className="flex items-center justify-center h-screen bg-gray-100 pt-16">
        <form
          onSubmit={handleUpload}
          className="bg-white shadow-lg rounded-lg p-8 w-96"
        >
          <h2 className="text-2xl font-bold mb-6">Admin Panel - Upload Paper</h2>
          <select
            className="w-full p-2 mb-4 border"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          >
            <option value="">Select Subject</option>
            <option value="engineering-physics">Engineering Physics</option>
            <option value="fundamental-electrical">
              Fundamental Electrical & Electronics
            </option>
            <option value="linear-algebra">Linear Algebra</option>
            <option value="problem-solving">Problem Solving with Programming</option>
            <option value="technical-communication">Technical Communication</option>
            <option value="professional-ethics">Professional Ethics</option>
          </select>

          <input
            type="number"
            placeholder="Enter Year"
            className="w-full p-2 mb-4 border"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />

          <input
            type="file"
            accept="application/pdf"
            className="w-full p-2 mb-4 border"
            onChange={(e) => setFile(e.target.files[0])}
          />

          <button
            type="submit"
            className="bg-blue-500 text-white w-full py-2 rounded"
          >
            Upload Paper
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminPanel;
