import React from 'react'
import Navbar from '../components/Navbar'
import Course from '../components/course'
import Footer from '../components/Footer';



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
