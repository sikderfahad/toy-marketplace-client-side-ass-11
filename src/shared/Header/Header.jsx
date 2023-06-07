import { useContext, useState } from "react";
import "./Header.css";
import Nav from "../Nav/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnchor, faPowerOff } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/img/logo.png";
import { Link, Navigate, useNavigate } from "react-router-dom";
import avatar from "../../assets/img/Avatar.png";
import { VscSignOut } from "react-icons/vsc";
import { AuthContext } from "../../provider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    user?.displayName && setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const navigate = useNavigate();

  const handledLoginBtn = () => navigate("/login");

  const [loginToggle, setLoginToggle] = useState(true);

  const routes = [
    { path: "/", label: "Home" },
    { path: "/all-toyes", label: "All Toyes" },
    { path: "/add-toyes", label: "Add Toyes" },
    { path: "/my-toyes", label: "My Toyes" },

    { path: "/blog", label: "Blog" },
  ];

  const [open, setOpen] = useState(false);

  const [isBg, setIsBg] = useState(false);

  const setHeaderBg = () => setIsBg(!isBg);

  const handledLogout = () => {
    logOut()
      .then(() => {
        <Navigate to={"/login"}></Navigate>;
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <header className={`md:py-5 py-4 header relative`}>
      <nav
        className={`md:w-10/12 w-11/12 mx-auto  ${
          user ? "grid md:grid-cols-3 gap-5 grid-cols-2" : "flex"
        } items-center justify-between`}
      >
        <div className="logo">
          <img className="w-[100px] md:w-auto" src={logo} alt="" />
        </div>

        <div className="mebubar">
          <div
            className={`lg:hidden ${user ? "text-right" : "text-center"}`}
            onMouseEnter={() => setOpen(!open)}
            onMouseLeave={() => setOpen(!open)}
            onClick={() => setOpen(!open)}
          >
            <span className="text-2xl inline">
              {open ? (
                <FontAwesomeIcon icon={faAnchor}></FontAwesomeIcon>
              ) : (
                <FontAwesomeIcon icon={faPowerOff}></FontAwesomeIcon>
              )}
            </span>
          </div>
          <ul
            className={`lg:static text-center  z-[999] absolute right-0 ${
              open ? "top-24 md:top-12" : "-top-96"
            }  lg:bg-transparent bg-gray-200 p-4 rounded-md duration-200`}
          >
            {routes.map((route, idx) => (
              <Nav route={route} key={idx} setBg={setHeaderBg}></Nav>
            ))}
          </ul>
        </div>

        {!user ? (
          <div
            className="text-right"
            onClick={() => setLoginToggle(!loginToggle)}
          >
            {loginToggle ? (
              <button
                onClick={handledLoginBtn}
                className="relative w-[150px] inline-flex items-center justify-center p-0.5  overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
              >
                <span className="relative w-full text-xl font-semibold md:px-8 px-5 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Login
                </span>
              </button>
            ) : (
              <Link to={"/register"}>
                <button className="relative w-[150px] inline-flex items-center justify-center p-0.5  overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                  <span className="relative w-full text-xl font-semibold md:px-8 px-5 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Sign up
                  </span>
                </button>
              </Link>
            )}
          </div>
        ) : (
          <div className={`flex items-center gap-4 ${user && "mx-auto"}`}>
            <div
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="w-[150px] h-[80px] flex items-center justify-center duration-200"
            >
              {!isHover ? (
                <div className=" duration-200">
                  {user?.photoURL ? (
                    <img
                      className="w-[75px] h-[75px] duration-200 rounded-full"
                      src={user?.photoURL}
                      alt=""
                    />
                  ) : (
                    <img
                      className="w-[75px] h-[75px] duration-200"
                      src={avatar}
                      alt=""
                    />
                  )}
                </div>
              ) : (
                <h1 className="gradient-title duration-200 text-xl font-semibold">
                  {user?.displayName && user.displayName}
                </h1>
              )}
            </div>
            <button onClick={handledLogout} title="Click to Logout">
              <VscSignOut className="text-5xl text-red-600" />
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
