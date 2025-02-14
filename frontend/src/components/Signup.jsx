import React,{useEffect, useState} from "react";
import axios from "axios";
import Login from "../components/Login";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";


function Signup() {
  const [theme, setTheme] = useState(localStorage.getItem('theme')? localStorage.getItem('theme') : 'light')
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
    },[])

  const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.NameRequired,
      email: data.EmailRequired,
      password: data.PassRequired,
    };

    try {
      await axios
        .post("https://bookstore-q3gd.onrender.com/user/signup", userInfo)
        .then((res) => {
          console.log(res.data);
          if (res.data) {
            // alert("User created successfully");
            toast.success("User created successfully!");
            localStorage.setItem("user", JSON.stringify(res.data.user));
            // <Navigate to="/ " />
            navigate(from, { replace: true });
            setTimeout(() => {
              window.location.reload();
            }, 1200);
          }
        });
    } catch (error) {
      // alert("User already exists");
      // console.log(error);
      toast.error("User already exists!");
    }

  };

  return (
    <div className="flex justify-center items-center h-screen dark:bg-slate-600 dark:text-white">
      <div className="w-96 flex align-middle justify-center p-4 rounded-md shadow-lg bg-slate-100 mx-4 dark:bg-slate-700 dark:text-white">
        <div className="relative dark:bg-slate-700 dark:text-white">
          <form onSubmit={handleSubmit(onSubmit)} className="dark:bg-slate-700 dark:text-white">
            {/* Close Button */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>

            <h3 className="font-bold text-xl">Signup</h3>

            {/* Name Field */}
            <label className="block py-2">Name</label>
            <input
              {...register("NameRequired", { required: true })}
              type="text"
              className="input input-bordered w-full outline-none dark:bg-slate-600 dark:text-white"
              placeholder="Name"
            />
            {errors.NameRequired && (
              <span className="text-red-600">This field is required</span>
            )}

            {/* Email Field */}
            <label className="block py-2">Email</label>
            <input
              {...register("EmailRequired", { required: true })}
              type="email"
              className="input input-bordered w-full outline-none dark:bg-slate-600 dark:text-white"
              placeholder="Email"
            />
            {errors.EmailRequired && (
              <span className="text-red-600">This field is required</span>
            )}

            {/* Password Field */}
            <label className="block py-2">Password</label>
            <input
              {...register("PassRequired", { required: true })}
              type="password"
              className="input input-bordered w-full outline-none dark:bg-slate-600 dark:text-white"
              placeholder="Password"
            />
            {errors.PassRequired && (
              <span className="text-red-600">This field is required</span>
            )}

            {/* Signup Button and Login Link */}
            <div className="flex justify-between items-center my-3">
              <button
                type="submit"
                className="bg-pink-600 px-4 py-1 rounded-md"
              >
                Signup
              </button>

              <div className="text-sm mx-2">
                <span>Already have an account? </span>
                <button
                  className="text-blue-600 underline cursor-pointer"
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  Login
                </button>
              </div>
            </div>
          </form>

          {/* Login Modal (Moved outside the form) */}
          <Login />
        </div>
      </div>
    </div>
  );
}

export default Signup;
