import React, { useEffect, useState } from "react";
import Login from "./Login";
import { useAuth } from "../context/AuthProvider.jsx";
import Logout from './LogoutUser.jsx';


function Navbar() {
  const [sticky, setSticky] =useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme')? localStorage.getItem('theme') : 'light')
  useEffect(() => {
    const handleScroll = () => {
      // console.log(window.scrollY)
      if (window.scrollY > 100) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


 
  useEffect(()=>{
    const element = document.documentElement
    console.log(theme)
    if(theme === 'dark'){
      element.classList.add('dark')
      document.body.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    }
    else{
      element.classList.remove('dark')
      document.body.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  },[theme])

  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    
    <>
      <div
        className={`dark:bg-slate-700 dark:text-white z-50 w-full fixed top-0 left-0 ${
          sticky
            ? "sticky-navbar bg-base-200 shadow-2xl  transition-all duration-300 ease-in-out "
            : " "
        }`}
      >
        <div className="navbar bg-base-100 dark:bg-slate-700 dark:text-white">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="ml-2  click:scale-110 lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow dark:bg-slate-700 dark:text-white"
              >
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/courses">Course</a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
                <li>
                  <a href="/about">About</a>
                </li>
              </ul>
            </div>
            <a className="btn btn-ghost text-lg md:text-2xl font-bold mr-2">BookStore</a>
          </div>
          <div className="navbar-end gap-1 md:gap-3">
            <div className=" navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
              <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/courses">Course</a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
                <li>
                  <a href="/about">About</a>
                </li>
              </ul>
            </div>
            <label className="border hidden md:flex items-center gap-0 md:gap-2 rounded-md">
              <input
                type="text"
                className=" outline-none px-2 py-2 rounded-md dark:bg-slate-700 dark:text-white"
                placeholder="Search"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-6 w-6 opacity-70 pr-2 cursor-pointer font-extrabold"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>

            <label className="swap swap-rotate">
              {/* this hidden checkbox controls the state */}
              <input
                type="checkbox"
                className="theme-controller"
                value="synthwave"
              />

              {/* sun icon */}
              <svg
                className="swap-off h-7 w-7 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                onClick={()=>setTheme(theme === 'dark'? 'light' : 'dark')}
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                className="swap-on h-7 w-7 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                onClick={()=>setTheme(theme === 'light'? 'dark' : 'light')}
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
            {authUser ? ( <Logout />) :
            (<div className="navbar-end md:flex">
              <a className="bg-slate-200 px-2 py-1 hover:scale-105 duration-300  rounded-md dark:bg-slate-800 dark:text-white " onClick={()=>document.getElementById('my_modal_3').showModal()}>Login</a>
              <Login />
            </div>)}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
