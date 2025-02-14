import { useEffect, useState } from 'react'
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'
import './App.css'
import Home from './home/Home.jsx'
import Courses from './courses/CoursesList.jsx'
import Signup from './components/SignupForm.jsx'
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider'
import AboutPage from './AboutPage/AboutPage.jsx'
import ContactPage from './contactPage/ContactPage.jsx'




function App() {
  // const [count, setCount] = useState(0)
  const [authUser, setAuthUser] = useAuth();
  


  return (
    
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/courses" element={authUser?<Courses/> : <Navigate to={'/signup'} />} />
      <Route path='/signup' element = {<Signup/>} />
      <Route path="/about" element={<AboutPage/>} />
      <Route path="/contact" element={<ContactPage />} />
     </Routes>
     <Toaster />
    </BrowserRouter>
    
    
  )
}

export default App
