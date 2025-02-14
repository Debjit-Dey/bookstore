import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Login() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.EmailRequired,
      password: data.PassRequired,
    };
    // console.log(userInfo);

    try {
      await axios
        .post("https://bookstore-q3gd.onrender.com/user/login", userInfo)
        .then((res) => {
          console.log(res.data);
          if (res.data) {
            // alert("User created successfully");
            localStorage.setItem(
              "user",
              JSON.stringify(res.data.userWithoutPass)
            );
            document.querySelector("#my_modal_3").close();
            // window.location.reload();
            navigate(from, { replace: true });
            toast.success("User logged in successfully!");
          }

          setTimeout(() => {
            window.location.reload();
          }, 1200);
        });
    } catch (error) {
      // alert("User already exists");
      // console.log(error);
      if (error.response) {
        toast.error(error.response.data.message);
        // toast.error('User already exists!');
      }
    }
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal dark:bg-slate-700 dark:text-white">
        <div className="modal-box bg-slate-100 dark:bg-slate-700 dark:text-white">
          <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
            {/* if there is a button in form, it will close the modal */}
            <button
              className="btn btn-sm  btn-ghost absolute right-2 top-2"
              onClick={() => {
                document.querySelector("#my_modal_3").close();
              }}
            >
              ✕
            </button>

            <h3 className="font-bold text-xl">Login</h3>
            <p className="py-4">Email</p>
            <input
              {...register("EmailRequired", { required: true })}
              type="email"
              className="input input-bordered w-full outline-none dark:bg-slate-600 dark:text-white"
              placeholder="Email"
            />
            {errors.EmailRequired && (
              <span className="text-red-600">This field is required</span>
            )}
            <p className="py-4">Password</p>
            <input
              {...register("PassRequired", { required: true })}
              type="password"
              className="input input-bordered w-full outline-none dark:bg-slate-600 dark:text-white"
              placeholder="Password"
            />
            {errors.PassRequired && (
              <span className="text-red-600">This field is required</span>
            )}
            <div className="flex justify-between items-center my-3">
              <button
                type="submit"
                className="bg-pink-600 px-4 py-1 rounded-md"
              >
                Login
              </button>
              <p className="mx-2">
                Not Registered?{" "}
                <Link to="/signup" className="text-blue-600 underline">
                  signup
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
