// import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Nav = ({ route, setBg }) => {
  const { user } = useContext(AuthContext);
  const { label } = route;
  if (!user && label === "Add a Toy") {
    return false;
  } else if (!user && label === "My Toys") {
    return false;
  }
  return (
    <li className="block lg:inline md:mx-3">
      <NavLink
        onClick={setBg}
        className={({ isActive, isPending }) =>
          isActive
            ? "active"
            : isPending
            ? "pending"
            : "text-[#757575] navLink px-4 py-3 md:px-4 md:py-3 lg:px-0 lg:py-0 xl:px-4 xl:py-3 text-lg md:text-lg lg:text-base xl:text-lg md:inline block"
        }
        to={route.path}
      >
        {route.label}
      </NavLink>
    </li>
  );
};

export default Nav;
