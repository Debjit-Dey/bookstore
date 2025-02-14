import React from 'react'
import Navbar from '../components/Navbar'
import About from '../components/About'
import Footer from '../components/Footer'

function AboutPage() {
  return (
    <div className='dark:bg-slate-700 dark:text-white responsiveclass'>
        <Navbar />
        <About />
        <Footer />
      
    </div>
  )
}

export default AboutPage
