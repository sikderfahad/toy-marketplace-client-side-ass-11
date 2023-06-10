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
    <li className="block md:inline md:mx-3">
      <NavLink
        onClick={setBg}
        className={({ isActive, isPending }) =>
          isActive
            ? "active"
            : isPending
            ? "pending"
            : "text-[#757575] navLink md:inline block"
        }
        to={route.path}
      >
        {route.label}
      </NavLink>
    </li>
  );
};

export default Nav;
