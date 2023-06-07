// import React from 'react';

import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Navigate } from "react-router-dom";

const HiddenRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <h1 className="text-center text-3xl text-green-500 mt-6">Loading...</h1>
    );
  }
  if (!user) {
    return children;
  }
  return <Navigate to={"/"}></Navigate>;
};

export default HiddenRoute;
