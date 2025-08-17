import React from 'react'
import Navbar from '../Components/Navbar'

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Navbar /> 
      
      <div className="container mx-auto px-4 py-12 ">
        <div className="max-w-2xl mx-auto text-center mt-20">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
            JWT User Management System
          </h1>
          
          <p className="text-lg text-gray-300 mb-12">
            A simple demonstration of JSON Web Token authentication
          </p>
          
          <div className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 rounded-lg shadow-2xl border border-gray-600 p-8">
            <h2 className="text-xl font-semibold text-white mb-6">Features</h2>
            
            <div className="space-y-4 text-left">
              <div className="flex items-center">
                <span className="w-3 h-3 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full mr-4"></span>
                <span className="text-gray-200">User Registration</span>
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mr-4"></span>
                <span className="text-gray-200">User Login</span>
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 bg-gradient-to-r from-purple-400 to-purple-500 rounded-full mr-4"></span>
                <span className="text-gray-200">JWT Token Management</span>
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-400 rounded-full mr-4"></span>
                <span className="text-gray-200">Protected Routes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home