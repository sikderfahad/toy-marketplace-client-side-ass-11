import { useContext, useState } from "react";
import { TiWarningOutline } from "react-icons/ti";
import { BsFillHouseCheckFill, BsGithub } from "react-icons/bs";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router-dom";
import googleIcon from "../../assets/img/google.png";
import "./Login.css";
import useTitle from "../../Custom/UseTitle/useTitle";
import { AuthContext } from "../../provider/AuthProvider";
import { ToastMsgError, ToastMsgSuc } from "../../components/Toast/ToastMsg";

const Login = () => {
  useTitle("Login");
  const location = useLocation();
  const from = location?.state?.from;
  // console.log(from, location);

  const navigate = useNavigate();

  const { googleUser, githubUser, loginWithEmailPass } =
    useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [login, setLogin] = useState(false);
  const [show, setShow] = useState(false);

  const loginToggle = () => {
    setLogin(!login);
  };

  const handledGoogleSignIn = () => {
    googleUser()
      .then((res) => {
        const signedUser = res.user;
        console.log(signedUser);
        navigate(from);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handledGithubSignIn = () => {
    githubUser()
      .then((res) => {
        const signedUser = res.user;
        console.log(signedUser);
        navigate(from);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handledLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    setError("");
    setSuccess("");

    loginWithEmailPass(email, password)
      .then((res) => {
        const signedUser = res.user;

        signedUser && ToastMsgSuc("Your login successful!");

        signedUser && setSuccess("You login successful!");
        console.log(signedUser);
        navigate(from);
      })
      .catch((error) => {
        console.log(error.message);

        const passMissing = error.message.includes("missing-password");
        passMissing &&
          setError("Password is missing! Please enter a valid Password");
        passMissing && ToastMsgError("Password is missing!");

        const userNotFound = error.message.includes("user-not-found");
        userNotFound && setError("User not found! Please enter a valid Email");
        userNotFound && ToastMsgError("User not found! ");

        const invalidEmail = error.message.includes("invalid-email");
        invalidEmail && setError("Invalid Email! Please enter a valid Email");
        invalidEmail && ToastMsgError("Invalid Email! ");

        const wrongPassword = error.message.includes("wrong-password");
        wrongPassword && setError("Wrong Password! Please try again");
        wrongPassword && ToastMsgError("Wrong Password!");

        const networkFaild = error.message.includes("network-request-faild");
        networkFaild && setError("No Internet! Please check your connectivity");
        networkFaild && ToastMsgError("No Internet!");
      });
  };

  return (
    <div className="py-12 xl:h-[100vh] bg-black">
      <div className="xl:w-4/12 lg:5/12 pb-6 md:w-1/2 w-11/12 mx-auto flex flex-col gap-3 md:gap-7 relative top-6 lg:top-10 lg:pb-8 ">
        <h1 className="text-center text-xl md:text-2xl lg:text-3xl xl:text-5xl font-bold text-white mb-3">
          Let{"'"}s connect our universe{" "}
        </h1>
        {/* flex items-center gap-4 */}
        {error && (
          <div className="w-fit py-2 px-1 md:px-4 md:py-4 rounded text-base font-medium bg-red-500 text-white text-center mx-auto">
            <h1>
              <TiWarningOutline className="text-2xl md:text-3xl inline" />{" "}
              {error}
            </h1>
          </div>
        )}

        {success && (
          <div className="w-fit py-2 px-1 md:px-4 md:py-4 rounded text-base font-medium bg-green-500 text-white text-center mx-auto">
            <h1>
              <BsFillHouseCheckFill className="text-2xl md:text-3xl inline" />{" "}
              {success}
            </h1>
          </div>
        )}

        {!login && (
          <div className="text-center w-full md:w-11/12 lg:w-7/12 flex flex-col items-center justify-center mx-auto gap-2">
            <button
              onClick={handledGithubSignIn}
              className="relative w-full flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-lg font-medium text-white rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 dark:text-white focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
            >
              <span className="flex w-full items-center justify-center gap-4 relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 dark:bg-gray-900 rounded-md group-hover:bg-black">
                <BsGithub className="text-3xl" />
                Countinue With GitHub
              </span>
            </button>

            <button
              onClick={handledGoogleSignIn}
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
          <div className="w-full md:w-[320px] mx-auto">
            <form
              onSubmit={handledLogin}
              className="flex flex-col gap-4"
              action=""
            >
              <div className="flex items-center w-full md:max-w-[320px] login-box">
                <input
                  className="w-full p-3 border border-gray-100 rounded-lg bg-transparent text-white "
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                />
              </div>
              <div className="flex items-center w-full md:max-w-[320px] login-box relative">
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
            to={"/register"}
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
