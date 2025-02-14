import React from "react";

const Contact = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 text-center pt-28 dark:bg-slate-700 dark:text-white">
      <h1 className="text-4xl font-bold text-gray-800 mb-6 dark:bg-slate-700 dark:text-white">Contact Us</h1>
      <p className="text-lg text-gray-600 leading-relaxed dark:bg-slate-700 dark:text-white">
        Have any questions or need assistance? Feel free to reach out to us. We are here to help
        you with book recommendations, order inquiries, and more. Your satisfaction is our priority!
      </p>
      <div className="mt-10">
        <img
          src="https://img.freepik.com/free-vector/call-center-operators-flat-composition_1284-22947.jpg?t=st=1739548218~exp=1739551818~hmac=022be7fb2775094d40023df10ae209d9aeedae805ed040aec2bbf468d82b4106&w=740"
          alt="Contact Us"
          className="rounded-lg shadow-lg mx-auto"
        />
      </div>
      <h2 className="text-2xl font-semibold text-gray-700 mt-8 dark:bg-slate-700 dark:text-white">Get in Touch</h2>
      <ul className="text-gray-600 mt-4 space-y-2 text-lg dark:bg-slate-700 dark:text-white">
        <li>📧 Email: support@bookstore.com</li>
        <li>📞 Phone: +91 9144100375</li>
        <li>📍 Address: GJUS&T , Hisar, Haryana</li>
        <li>🕒 Business Hours: Mon - Fri, 9 AM - 6 PM</li>
      </ul>
    </div>
  );
};

export default Contact;
