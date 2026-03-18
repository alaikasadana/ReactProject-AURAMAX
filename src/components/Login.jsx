import axios from "axios";
import { useState } from "react";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";


function Login() {

  const nav = useNavigate();

  const [data, setData] = useState({ name: "", password: "" });
  const [error, setError] = useState("");

  function inputdata(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  async function submitdata(e) {
    e.preventDefault();

    try {
      const res = await axios.get("http://localhost:3000/userdata");

      const user = res.data.find(function (u) {
        return u.name === data.name && u.password === data.password;
      });

      if (user) {
        alert("Login Successful");
        setError("");
        nav("/product"); 
      } else {
        setError("Invalid name or password");
      }

    } catch (err) {
      setError("Server Error");
    }
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">

      {/* Glow wrapper */}
      <div className="relative">


        {/* Login card */}
        <div className="relative bg-zinc-900 border border-zinc-800 rounded-2xl p-10 w-[420px] text-white shadow-xl">

          <h2 className="text-3xl font-bold text-center mb-2">
            Welcome Back
          </h2>

          <p className="text-gray-400 text-sm text-center mb-8">
            Login to your account
          </p>

          {/* FORM */}
          <form onSubmit={submitdata} className="flex flex-col gap-4">

            <input
              type="text"
              name="name"
              placeholder="Enter Name"
              onChange={inputdata}
              className="bg-black border border-zinc-700 rounded-md p-3 focus:outline-none focus:border-purple-500 transition"
            />

            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              onChange={inputdata}
              className="bg-black border border-zinc-700 rounded-md p-3 focus:outline-none focus:border-purple-500 transition"
            />

            {error && (
              <p className="text-red-400 text-sm">{error}</p>
            )}

            <button
              type="submit"
              className="bg-gradient-to-r from-purple-600 to-pink-500 py-3 rounded-md font-semibold mt-2 hover:opacity-90 transition"
            >
              Login
            </button>

          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-zinc-700"></div>
            <p className="text-gray-400 text-sm">or continue with</p>
            <div className="flex-1 h-px bg-zinc-700"></div>
          </div>

          {/* Social */}
          <div className="flex justify-center gap-6">

            <button className="p-3 bg-zinc-800 rounded-full hover:bg-zinc-700 transition">
              <FaGoogle />
            </button>

            <button className="p-3 bg-zinc-800 rounded-full hover:bg-zinc-700 transition">
              <FaRegCircleQuestion />
            </button>

            <button className="p-3 bg-zinc-800 rounded-full hover:bg-zinc-700 transition">
              <FaFacebook />
            </button>

          </div>

          {/* Signup link */}
          <p className="text-gray-400 text-sm mt-8 text-center">
            Don't have an account?
            <Link
              to="/signup"
              className="text-purple-400 ml-1 hover:underline"
            >
              Sign Up
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
}

export default Login;