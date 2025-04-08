import { useState } from "react";
import { motion } from "framer-motion";
import { Loader } from "lucide-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const OTPVerification = () => {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState(null);
  const [isVerifying, setIsVerifying] = useState(false);
  const navigate = useNavigate();

  const handleVerify = async (e) => {
    e.preventDefault();
    setError(null);
    setIsVerifying(true);
    try {
      await axios.post("http://localhost:5000/api/admin/verify-otp", { otp });
      // On successful verification, redirect to admin panel (for example, "/admin/upload")
      navigate("/admin/upload");
    } catch (err) {
      setError(err.response?.data?.message || "OTP verification failed");
    } finally {
      setIsVerifying(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-md w-full bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden p-8 mx-auto mt-20"
    >
      <h2 className="text-3xl font-bold mb-6 text-center text-white">
        Enter OTP
      </h2>
      <form onSubmit={handleVerify}>
        <input
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          className="w-full p-3 mb-4 rounded border border-gray-300 focus:outline-none"
        />
        {error && <p className="text-red-500 font-semibold mb-2">{error}</p>}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="w-full py-3 px-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-lg shadow-lg hover:from-green-600 hover:to-emerald-700 focus:outline-none transition duration-200"
          disabled={isVerifying}
        >
          {isVerifying ? (
            <Loader className="w-6 h-6 animate-spin mx-auto" />
          ) : (
            "Verify OTP"
          )}
        </motion.button>
      </form>
    </motion.div>
  );
};

export default OTPVerification;
