import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userContext } from "../Context/userContext";
import { logout } from "../api/userService";
import { toast } from "react-toastify";

const Navbar = () => {
  const { isLoggedIn, setUser,setIsLoggedIn } = useContext(userContext); // Add setUser to clear user state
  const navigate = useNavigate();
  
  const handleLogout = async () => {
    try {
      await logout();
      setUser(null); 
      setIsLoggedIn(false);
      toast.success("Logged Out Successfully");
      navigate('/');
    } catch (error) {
      console.log(error);
      toast.error("Logout failed");
    }
  };

  return (
    <nav className="flex justify-between items-center h-28 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-2xl border-b border-gray-700">
      {isLoggedIn ? (
        <>
          <div className="ml-8 lg:ml-20">
            <h1 className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 font-bold tracking-wide hover:from-purple-400 hover:to-blue-500 transition-all duration-300 cursor-pointer">
              User Details
            </h1>
          </div>
          <div className="mr-8 lg:mr-20">
            <button 
              onClick={handleLogout} 
              className="group relative px-7 py-2 text-white text-lg font-semibold rounded-lg bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-red-500/25"
            >
              <span className="relative z-10 text-[16px]">Logout</span>
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-red-400 to-red-500 opacity-0 group-hover:opacity-20 transition-opacity duration-200"></div>
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="ml-8 lg:ml-20">
            <h1 className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 font-bold tracking-wide hover:from-purple-400 hover:to-blue-500 transition-all duration-300 cursor-pointer">
              Home
            </h1>
          </div>
          <div className="flex gap-10 mr-8 lg:mr-20">
            <Link to="/login">
              <button className="group relative px-6 py-2 text-white text-lg font-semibold rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-blue-500/25">
                <span className="relative z-10">Login</span>
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-400 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-200"></div>
              </button>
            </Link>
            <Link to="/register">
              <button className="group relative px-6 py-2 text-white text-lg font-semibold rounded-lg border-2 border-purple-500 hover:bg-purple-500 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-purple-500/25">
                <span className="relative z-10">Register</span>
                <div className="absolute inset-0 rounded-lg bg-purple-400 opacity-0 group-hover:opacity-10 transition-opacity duration-200"></div>
              </button>
            </Link>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;