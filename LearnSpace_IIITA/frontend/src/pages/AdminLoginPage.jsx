import { useState } from "react";
import { motion } from "framer-motion";
import { User, Loader } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import axios from "axios";

const LoginPage = () => {
  const [adminName, setAdminName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);
    try {
      // Call your admin login endpoint
      await axios.post("http://localhost:5000/api/admin/login", {
        name: adminName,
        email: process.env.REACT_APP_ADMIN_EMAIL, // optionally use an env variable for email
        password,
      });
      // On success, redirect to OTP verification page
      navigate("/otp-verification");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='max-w-md w-full bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden'
    >
      <div className='p-8'>
        <h2 className='text-3xl font-bold mb-6 text-center bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text'>
          Admin Login
        </h2>

        <form onSubmit={handleLogin}>
          <Input
            icon={User}
            type='text'
            placeholder='Admin Name'
            value={adminName}
            onChange={(e) => setAdminName(e.target.value)}
          />

          <Input
            icon={User}
            type='password'
            placeholder='Admin Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <p className='text-red-500 font-semibold mb-2'>{error}</p>}

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className='w-full py-3 px-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-lg shadow-lg hover:from-green-600 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-200'
            type='submit'
            disabled={isLoading}
          >
            {isLoading ? <Loader className='w-6 h-6 animate-spin mx-auto' /> : "Login"}
          </motion.button>
        </form>
      </div>
    </motion.div>
  );
};

export default LoginPage;
