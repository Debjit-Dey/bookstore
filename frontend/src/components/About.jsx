import React from "react";
import '../App.css';

const About = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 text-center py-24 dark:bg-slate-700 dark:text-white">
      <h1 className="text-4xl font-bold text-gray-800 mb-6 dark:bg-slate-700 dark:text-white">About Our Bookstore</h1>
      <p className="text-lg text-gray-600 leading-relaxed dark:bg-slate-700 dark:text-white">
        Welcome to our bookstore, your go-to destination for a diverse collection of books
        spanning multiple genres. Whether you're looking for fiction, non-fiction, self-help,
        or academic books, we have something for everyone. Our mission is to promote the love of reading
        by providing high-quality books at affordable prices.
      </p>
      <div className="mt-10">
        <img
          src="https://images.pexels.com/photos/1261180/pexels-photo-1261180.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Bookstore"
          className="rounded-lg shadow-lg mx-auto"
        />
      </div>
      <h2 className="text-2xl font-semibold text-gray-700 mt-8">Why Choose Us?</h2>
      <ul className="text-gray-600 mt-4 space-y-2 text-lg dark:bg-slate-700 dark:text-white">
        <li>📚 A vast collection of books across multiple genres</li>
        <li>📦 Fast and reliable book delivery</li>
        <li>💰 Affordable prices with exclusive discounts</li>
        <li>🌎 Supporting a community of book lovers</li>
      </ul>
    </div>
  );
};

export default About;
