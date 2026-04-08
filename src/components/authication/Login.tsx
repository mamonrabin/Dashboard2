"use client";
import Link from "next/link";
import React, { useState } from "react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg p-6 md:mt-20 mt-30">
      <h2 className="text-2xl font-semibold text-center mb-2">Sign In</h2>
      <p className="text-gray-500 text-center mb-6">Welcome back Admin !</p>

      <div className="space-y-4">
        {/* Username */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            User Name
          </label>
          <input
            type="text"
            placeholder="almamon757@gmail.com"
            className="w-full px-4 py-3 border rounded-lg outline-none"
          />
        </div>

        {/* Password */}
        <div>
          <Link href="/reset-password" className="block text-sm font-medium text-gray-700 mb-1">
            Password
            <a className="float-right text-[#8E54E9] text-sm">
              Forget password ?
            </a>
          </Link>

          <div className="flex">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="123456789"
              className="w-full px-4 py-3 border rounded-l-lg outline-none"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="px-4 border border-l-0 rounded-r-lg bg-gray-100"
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>

          {/* Remember */}
          <div className="mt-2 flex items-center">
            <input type="checkbox" className="mr-2" />
            <span className="text-sm text-gray-500">Remember password ?</span>
          </div>
        </div>

        {/* Button */}
        <Link href="/dashboard">
          <button className="w-full bg-[#8E54E9] cursor-pointer text-white py-3 rounded-lg hover:bg-[#a272f0] transition">
            Sign In
          </button>
        </Link>
      </div>

      {/* Signup */}
      <p className="text-center text-sm text-gray-500 mt-4">
        Dont have an account?{" "}
        <a href="#" className="text-[#576EE6]">
          Sign Up
        </a>
      </p>

      {/* Divider */}
      {/* <div className="flex items-center my-4">
        <div className="grow h-px bg-gray-300"></div>
        <span className="px-3 text-gray-400 text-sm">OR</span>
        <div className="grow h-px bg-gray-300"></div>
      </div> */}
    </div>
  );
};

export default Login;
