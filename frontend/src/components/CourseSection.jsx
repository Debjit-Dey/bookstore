import React, { useEffect, useState } from "react";
// import list from '../list.json'
import Card from "./Card";
import { Link } from "react-router-dom";
import "../App.css";
import axios from "axios";

function CourseSection() {
  const [list, setList] = useState([]);
  useEffect(() => {
    try {
      axios.get("https://bookstore-q3gd.onrender.com/book").then((res) => {
        setList(res.data);
        console.log(res.data);
      });
    } catch (error) {
      res.status(500).json(error);
    }
  }, []);

  return (
    <>
      <div className="container mx-auto py-24  text-center px-8">
        <div className="my-8">
          <h1 className="font-bold text-3xl">
            We are delighted to have you{" "}
            <span className="text-pink-600">here!</span>
          </h1>
          <p className="my-4">
            Welcome to our bookstore, where stories come to life and knowledge
            knows no bounds. Whether you're an avid reader, a curious learner,
            or just looking for your next great adventure, we have something
            special for you. Dive into our diverse collection, explore
            bestsellers, and discover hidden literary gems. Enjoy your journey
            through the world of books!
          </p>
        </div>

        <Link
          to="/"
          className="bg-pink-500 px-4 py-1 hover:scale-105 duration-300 text-white rounded-md hover:bg-pink-700"
        >
          Back
        </Link>
        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4">
          {list.map((data) => (
            <Card prop={data} key={data.id} />
          ))}
        </div>
      </div>
    </>
  );
}

export default CourseSection;
