import React from "react";

function Card({ prop }) {
  return (
    <div>
      <div className="card bg-base-100 w-92 mx-2 my-8 shadow-xl hover:scale-105 hover:translate-y-2 dark:bg-slate-700 dark:text-white text-black">
        <figure>
          <img src={prop.image} alt="Shoes" className="h-56 w-full" />
        </figure>
        <div className="card-body h-52">
          <h2 className="card-title">
            {prop.name}
            <div className="badge badge-secondary">{prop.category}</div>
          </h2>
          <p> {prop.title} </p>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">${prop.price}</div>
            <div className="border-white border-[1px] rounded-full cursor-pointer hover:bg-secondary px-2 py-1 hover:textp-white">
              Products
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
