import React, { useEffect, useState } from 'react'
// import list from '../list.json'
import Card from './Card'
import { Link } from 'react-router-dom'
import '../App.css'
import axios from "axios";

function Course() {

  const [list, setList] = useState([]);
  useEffect(()=>{
    try {
      axios.get("http://localhost:3000/book").then((res) => {
        setList(res.data);
        console.log(res.data);
      });
      
    } catch (error) {
      res.status(500).json(error);
    }
  },[])

  return (
    <>
        <div className='container mx-auto py-24  text-center px-8'>
            <div className='my-8'>
                <h1 className='font-bold text-3xl'>We are delighted to have you <span className='text-pink-600'>here!</span></h1>
                <p className='my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia non delectus molestias atque, assumenda praesentium aut quis. Laudantium, sed ratione perferendis nemo in odio saepe iusto dicta, iure assumenda eum! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium quaerat delectus, aliquam architecto ex debitis, modi incidunt expedita temporibus harum sunt officia provident reprehenderit dignissimos quia quibusdam nulla consectetur necessitatibus.</p>
            </div>
            <Link to= "/" className='bg-pink-500 px-4 py-1 hover:scale-105 duration-300 text-white rounded-md hover:bg-pink-700'>Back</Link>
            <div className='grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4'>
                {list.map((data) =>
                <Card prop = {data} key = {data.id} />
                )}
            </div>

        </div>
      
    </>
  )
}

export default Course
