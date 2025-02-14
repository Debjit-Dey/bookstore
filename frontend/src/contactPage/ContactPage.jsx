import React from 'react'
import Navbar from '../components/Navbar'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

function ContactPage() {
  return (
    <div className='dark:bg-slate-700 dark:text-white responsiveclass'>
        <Navbar />
        <Contact />
        <Footer />
      
    </div>
  )
}

export default ContactPage
