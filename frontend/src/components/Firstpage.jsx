import React from "react";
// import Front from "../../public/front.jpg";

function Firstpage() {
  return (
    <div className="flex md:flex-row flex-col-reverse align-center justify-center pt-8  w-full ">
      <div className="w-full md:w-1/2  md:pl-20 px-10">
        <h1 className="text-3xl md:text-4xl bold md:pt-24 mt-10 md:mt-0 ">
          Welcome to Your Ultimate Book Haven!
          <br />
          Discover something {" "}
          <span className="text-pink-500">
             new every day
          </span>{" "}
        </h1>
        <p className="mt-10">
          Explore a vast collection of books across different genres, from
          timeless classics to the latest bestsellers. Whether you're a
          passionate reader or just starting your literary journey, we have
          something for everyone. Find your next great read today!
        </p>
      </div>
      <div className="w-full md:w-1/2">
        <img
          src="/front.jpg"
          alt=""
          className="w-[60%] mx-auto rounded-md lg:mt-20 md:mt-28 mt-16"
        />
      </div>
    </div>
  );
}

export default Firstpage;
