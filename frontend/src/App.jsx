import { useEffect, useState } from 'react'
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'
import './App.css'
import Home from './home/Home'
import Courses from './courses/courses'
import Signup from './components/signup'
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider'




function App() {
  // const [count, setCount] = useState(0)
  const [authUser, setAuthUser] = useAuth();
  


  return (
    
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/courses" element={authUser?<Courses/> : <Navigate to={'/signup'} />} />
      <Route path='/signup' element = {<Signup/>} />
     </Routes>
     <Toaster />
    </BrowserRouter>
    
    
  )
}

export default App
