import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import list from "../list.json";
import Card from "./Card";
import axios from "axios";

export default function Freebook() {
  const [list, setList] = React.useState([]);
  useEffect(() => {
    try {
      axios.get("http://localhost:3000/book").then((res) => {
        setList(res.data);
        console.log(res.data);
      });
    } catch (error) {
      res.status(500).json(error);
    }
  }, []);
  const filterdata = list.filter((data) => data.category === "free");

  // console.log(filterdata);
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <div className="container mx-auto px-9 xl:px-20 my-14 ">
        <div>
          <h1 className="text-2xl font-bold"> Free courses offered </h1>
        </div>
        <div>
          <p>
            Enhance your knowledge with our free courses on literature,
            storytelling, and book reviews. Dive into engaging lessons designed
            for book lovers, aspiring writers, and curious minds. Start learning
            today at no cost!{" "}
          </p>
        </div>
        <div>
          <Slider {...settings}>
            {filterdata.map((data) => (
              <Card prop={data} key={data.id} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
