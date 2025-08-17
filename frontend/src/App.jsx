import React from 'react'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import { ToastContainer } from 'react-toastify';


const App = () => {
  return (
    <div>
    <ToastContainer position='bottom-right'/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/profile' element={<Profile/>}/>

    </Routes>
    </div>
  )
}

export default App
