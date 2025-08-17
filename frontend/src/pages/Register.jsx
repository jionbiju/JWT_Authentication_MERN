import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { registerUser } from '../api/userService.js';
import {toast} from 'react-toastify'


const Register = () => {
    const [username,setUsername] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");
    
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(password !== confirmPassword){
          toast.error("Password does not match");
          return;
        }
        try {
           await registerUser({username,email,password});
           navigate('/login');
           toast.success("User successfully registered");

        } catch (error) {
            toast.error("Registration failed");
        }
        
    }

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center px-4'>
      <div className='bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 rounded-lg shadow-2xl border border-gray-600 p-8 w-full max-w-md'>
        <div className='text-center mb-8'>
          <h2 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500'>
            Register
          </h2>
          <p className='text-gray-300 mt-2'>Create your JWT account</p>
        </div>

        <div className='space-y-6'>
          <div>
            <label className='block text-gray-200 text-sm font-medium mb-2'>
              Username
            </label>
            <input
              type='text'
              name='username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className='w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors'
              placeholder='Choose a username'
            />
          </div>

          <div>
            <label className='block text-gray-200 text-sm font-medium mb-2'>
              Email
            </label>
            <input
              type='email'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors'
              placeholder='Enter your email'
            />
          </div>

          <div>
            <label className='block text-gray-200 text-sm font-medium mb-2'>
              Password
            </label>
            <input
              type='password'
              name='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors'
              placeholder='Create a password'
            />
          </div>

          <div>
            <label className='block text-gray-200 text-sm font-medium mb-2'>
              Confirm Password
            </label>
            <input
              type='password'
              name='confirmPassword'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className='w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors'
              placeholder='Confirm your password'
            />
          </div>

          <button
            onClick={handleSubmit}
            className='w-full py-3 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white font-semibold rounded-lg transform hover:scale-101 transition-all duration-400 shadow-lg hover:shadow-purple-200/25'
          >
            Register
          </button>
        </div>

        <div className='text-center mt-6'>
          <p className='text-gray-400'>
            Already have an account?{' '}
            <Link to="/login" className='text-blue-400 hover:text-blue-300 font-medium'>
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Register
