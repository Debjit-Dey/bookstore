import React from "react";
import { useAuth } from "../context/AuthProvider";
import toast from "react-hot-toast";

function LogoutUser() {
    const [authUser, setAuthUser] = useAuth();
    const handleLogOut = () => {
        localStorage.removeItem('user');
        setAuthUser(undefined);
        toast.success('Logged out successfully!');
        // window.location.reload();
    }
  return (
    <div>
      <button className="bg-pink-500 px-2 py-1 hover:scale-105 duration-300 text-white rounded-md hover:bg-pink-700"
      onClick={handleLogOut}
      >
        Logout
      </button>
    </div>
  );
}

export default LogoutUser;
