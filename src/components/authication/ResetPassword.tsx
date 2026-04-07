"use client";
import Link from "next/link";
import React, { useState } from "react";

const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg p-6 md:mt-20 mt-30">
      <h2 className="text-2xl font-semibold text-center mb-2">
        Reset Password
      </h2>
      <p className="text-gray-500 text-center mb-6">Hello Jhon !</p>

      <div className="space-y-4">
        {/* Username */}

        {/* Password */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Current Password
          </label>

          <div className="flex">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="password"
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
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            New Password
          </label>

          <div className="flex">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="password"
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
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Confirm Password
          </label>

          <div className="flex">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="password"
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
        </div>

        {/* Button */}
        <Link href="/dashboard">
          <button className="w-full bg-[#8E54E9] cursor-pointer text-white py-3 rounded-lg hover:bg-[#a272f0] transition">
            Reset
          </button>
        </Link>
      </div>

      {/* Signup */}
      <Link href="/" className="text-center text-sm text-gray-500 mt-4">
        Remembered your password ?
        <a className="text-[#8E54E9]">
          Login
        </a>
      </Link>
    </div>
  );
};

export default ResetPassword;
