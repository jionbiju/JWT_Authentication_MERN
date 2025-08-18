import React, { useContext, useEffect, useState } from "react";
import { userContext } from "../Context/userContext";
import Navbar from "../Components/Navbar";
import { getUserById } from "../api/userService";


const Profile = () => {
  const { user } = useContext(userContext);
  const [email,setEmail] = useState('');
  const [username,setUsername] = useState('');
  const [id,setId] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await getUserById(user.id);
        setEmail(data.email);
        setUsername(data.username);
        setId(data._id);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser();

  },[])



  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Navbar />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-lg mx-auto mt-20 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 rounded-lg shadow-2xl border border-gray-600 p-8">
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6 text-center">
            Profile
          </h1>

          <div className="space-y-4 text-gray-200 text-lg">
            <p>
              <span className="font-semibold text-blue-400">User ID:</span>{" "}
              {id}
            </p>
            <p>
              <span className="font-semibold text-purple-400">Username:</span>{" "}
              {username}
            </p>
            <p>
              <span className="font-semibold text-blue-300">Email:</span>{" "}
              {email}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
