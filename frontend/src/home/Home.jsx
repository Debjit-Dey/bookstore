import React from 'react'
import Navbar from '../components/Navbar'
import Firstpage from '../components/Firstpage'
import Freebook from '../components/Freebook'
import Footer from '../components/footer'
import '../App.css'

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
