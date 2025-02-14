import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Course from '../components/CourseSection.jsx'
import Footer from '../components/Footer.jsx';



function CoursesList() {
  return (
    <div className='dark:bg-slate-700 dark:text-white responsiveclass'>
      <Navbar />
      <Course />
      <Footer />

    </div>
  )
}

export default CoursesList;
