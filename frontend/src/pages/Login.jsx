import React, { useContext, useState } from 'react'
import { loginUser } from '../api/userService';
import { useNavigate } from 'react-router-dom';
import { userContext } from '../Context/userContext';
import { toast } from 'react-toastify';

const Login = () => {

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const navigate = useNavigate();

  const {setUser,setIsLoggedIn} = useContext(userContext);

  const  handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const data = await loginUser({email,password});
      setUser({id:data.id});
      setIsLoggedIn(true);
      navigate('/profile');
    } catch (error) {
      toast.error("Invalid Credentials");
    }
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center px-4'>
      <div className='bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 rounded-lg shadow-2xl border border-gray-600 p-8 w-full max-w-lg'>
        <div className='text-center mb-8'>
          <h2 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500'>
            Login
          </h2>
          <p className='text-gray-300 mt-2'>Welcome back to JWT System</p>
        </div>

        <div className='space-y-6'>

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
              placeholder='Enter your password'
            />
          </div>

          <button
            onClick={handleSubmit}
            className='w-full py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-semibold rounded-lg transform hover:scale-101 transition-all duration-400 shadow-lg hover:shadow-blue-200/25'
          >
            Login
          </button>
        </div>

        <div className='text-center mt-6'>
          <p className='text-gray-400'>
            Don't have an account?{' '}
            <a href='/register' className='text-purple-400 hover:text-purple-300 font-medium'>
              Register here
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
