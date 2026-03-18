import axios from "axios";
import { useState } from "react";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";

function Signup() {

  const nav = useNavigate();

  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  });

  function inputdata(e) {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  }

  function submitdata(e) {
    e.preventDefault();
      

    axios.post("http://localhost:3000/userdata",data)
    
    .then(()=>{
      alert('Signup Successful !!')
    })

      

      nav("/login");
  }

  return (

    <div className="min-h-screen bg-black flex items-center justify-center px-4">

     
      <div className="relative">

   

        {/* Card */}
        <div className="relative bg-zinc-900 border border-zinc-800 rounded-2xl p-10 w-[420px] text-white shadow-xl">

          <h2 className="text-3xl font-bold text-center mb-2">
            Create Account
          </h2>

          <p className="text-gray-400 text-sm text-center mb-8">
            Sign up to get started
          </p>

          {/* FORM */}
          <form onSubmit={submitdata} className="flex flex-col gap-4">

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              onChange={inputdata}
              className="bg-black border border-zinc-700 rounded-md p-3 focus:outline-none focus:border-purple-500 transition"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              onChange={inputdata}
              className="bg-black border border-zinc-700 rounded-md p-3 focus:outline-none focus:border-purple-500 transition"
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={inputdata}
              className="bg-black border border-zinc-700 rounded-md p-3 focus:outline-none focus:border-purple-500 transition"
            />

            <button
              type="submit"
              className="bg-gradient-to-r from-purple-600 to-pink-500 py-3 rounded-md font-semibold mt-2 hover:opacity-90 transition"
            >
              Sign Up
            </button>

          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-zinc-700"></div>
            <p className="text-gray-400 text-sm">or continue with</p>
            <div className="flex-1 h-px bg-zinc-700"></div>
          </div>

          {/* Social Buttons */}
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

          {/* Login link */}
          <p className="text-gray-400 text-sm text-center mt-8">
            Already have an account?
            <Link
              to="/login"
              className="text-purple-400 ml-1 hover:underline"
            >
              Login
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
}

export default Signup;