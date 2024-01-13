"use client";
import Link from "next/link";
import React, { useState } from "react";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const onLogin = () => {
    console.log("Login was successfull");
  };
  return (
    <div className=" ">
      <div className="flex justify-center items-center pt-10">Login</div>
      <div className=" w-full">
        <form className="grid justify-center items-center ">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700
                     leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="email"
              value={user.email}
              onChange={(e: any) => setUser({ ...user, email: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700
                     leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="password"
              placeholder="password"
              value={user.password}
              onChange={(e: any) =>
                setUser({ ...user, password: e.target.value })
              }
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={onLogin}
            >
              LogIn
            </button>
            <Link
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#"
            >
              Forgot Password?
            </Link>
          </div>
        </form>
        <div className="flex items-center justify-center pt-12">
          <Link
            href="/signup"
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
          >
            don't have Account? register..
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;