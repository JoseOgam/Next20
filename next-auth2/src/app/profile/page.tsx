"use client";
import React from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const ProfilePage = () => {
  const router = useRouter();
  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      toast.success("Logout successfull");
      router.push("/login");
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center pt-56">
        <p>profile Page</p>
        <div>
          <button
            onClick={logout}
            className=" bg-blue-500 mt-4 hover:bg-blue-700 text-white font-bold rounded px-2 py-2"
          >
            LogOut
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
