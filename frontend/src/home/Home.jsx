import React from 'react'
import Navbar from '../components/Navbar'
import Firstpage from '../components/Firstpage'
import Freebook from '../components/Freebook'
import '../App.css'
import Footer from '../components/Footer'

function Home() {
  return (
    <div className='dark:bg-slate-700 dark:text-white  responsiveclass'>
      <Navbar />
      <Firstpage />
      <Freebook/>
      <Footer />
      
    </div>
  )
}

export default Home
