// import React from "react";

import { useState } from "react";
import { TiWarningOutline } from "react-icons/ti";
import { BsFillHouseCheckFill, BsGithub } from "react-icons/bs";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import googleIcon from "../../assets/img/google.png";
import "./Login.css";
import useTitle from "../../Custom/UseTitle/useTitle";

const Login = () => {
  useTitle("Login");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [login, setLogin] = useState(false);
  const [show, setShow] = useState(false);

  const loginToggle = () => {
    setLogin(!login);
  };

  return (
    <div className="h-[100vh] bg-black">
      <div className="md:w-4/12 w-10/12 mx-auto flex flex-col gap-7 relative top-[150px] ">
        <h1 className="text-center text-5xl font-bold text-white">
          Let's connect our universe{" "}
        </h1>

        {error && (
          <div className="w-fit p-4 flex items-center gap-4 rounded text-lg font-medium bg-red-500 text-white text-center mx-auto">
            <TiWarningOutline className="text-3xl" /> {error}
          </div>
        )}

        {success && (
          <div className="w-fit p-4 rounded flex items-center gap-4 text-lg font-medium bg-green-500 text-white text-center mx-auto">
            <BsFillHouseCheckFill className="text-3xl" /> {success}
          </div>
        )}

        {!login && (
          <div className="text-center w-7/12 flex flex-col items-center justify-center mx-auto gap-2">
            <button
              // onClick={gitHubSignIn}
              className="relative w-full flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-lg font-medium text-white rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 dark:text-white focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
            >
              <span className="flex w-full items-center justify-center gap-4 relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 dark:bg-gray-900 rounded-md group-hover:bg-black">
                <BsGithub className="text-3xl" />
                Countinue With GitHub
              </span>
            </button>

            <button
              // onClick={googleSignIn}
              className="relative w-full flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-lg font-medium text-white rounded-lg group bg-gradient-to-br from-pink-600 to-orange-500 group-hover:from-pink-600 group-hover:to-orange-500 dark:text-white focus:ring-2 focus:outline-none focus:ring-pink-300 dark:focus:ring-orange-800"
            >
              <span className="flex w-full items-center justify-center gap-4 relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 dark:bg-gray-900 rounded-md group-hover:bg-black">
                <img className="w-[30px]" src={googleIcon} alt="" />
                Countinue With Google
              </span>
            </button>

            <button
              onClick={loginToggle}
              className="text-[#3291ff] btn-other-signup-option text-lg"
            >
              Countinue with Email →
            </button>
          </div>
        )}

        {login && (
          <div className="w-100% w-[320px] mx-auto">
            <form
              // onSubmit={handledLogin}
              className="flex flex-col gap-4"
              action=""
            >
              <div className="flex items-center max-w-[320px] login-box">
                <input
                  className="w-full p-3 border border-gray-100 rounded-lg bg-transparent text-white "
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                />
              </div>
              <div className="flex items-center max-w-[320px] login-box relative">
                <input
                  className="w-full p-3 border border-gray-100  rounded-lg bg-transparent text-white "
                  type={`${!show ? "password" : "text"}`}
                  name="password"
                  placeholder="Password"
                  required
                />
                <span
                  className="absolute text-white text-xl p-3 right-0 cursor-pointer"
                  onClick={() => setShow(!show)}
                >
                  {!show ? <FaEye /> : <FaEyeSlash />}
                </span>
              </div>

              <button className="bg-white text-base font-semibold w-full grid grid-cols-[2fr,5fr] text-left items-center text-black p-3 rounded-lg hover:bg-transparent hover:text-white border">
                <MdOutlineMailOutline className="text-2xl" /> Login with Email
              </button>
              <button
                onClick={loginToggle}
                className="text-[#3291ff] btn-other-signup-option w-fit mx-auto "
              >
                ← Other Sign Up Options
              </button>
            </form>
          </div>
        )}
        <p className="text-center text-[#888]">
          By joining, you agree to our{" "}
          <Link className="text-white hover:border-b">Terms of Service</Link>{" "}
          and <Link className="text-white hover:border-b">Privacy Policy</Link>
        </p>

        <p className="text-white text-center">
          Dont have an Account?{" "}
          <Link
            className="text-[#3291ff] hover:underline"
            style={{ TextDecoder: "underline" }}
            to={"/signup"}
          >
            {" "}
            Please Signup →
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
