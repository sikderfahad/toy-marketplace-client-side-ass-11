// import React from 'react';

import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  // console.log(location.pathname);

  if (loading) {
    return (
      <h1 className="text-center text-3xl text-green-500 mt-6">Loading...</h1>
    );
  }

  if (user) {
    return children;
  }
  return (
    <Navigate to={"/login"} state={{ from: location.pathname }}></Navigate>
  );
};

export default PrivateRoute;
