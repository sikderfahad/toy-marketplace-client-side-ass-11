// import React from 'react';

import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Navigate } from "react-router-dom";
import Spinner from "../../components/Spinner/Spinner";

const HiddenRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <Spinner></Spinner>;
  }
  if (!user) {
    return children;
  }
  return <Navigate to={"/"}></Navigate>;
};

export default HiddenRoute;
