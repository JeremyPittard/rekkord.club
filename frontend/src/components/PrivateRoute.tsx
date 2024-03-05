import { Navigate, Outlet } from "react-router-dom";
import { UseSelector, useSelector } from "react-redux";

import React from "react";

const PrivateRoute = () => {
  const { userInfo } = useSelector((state: any) => state.auth);

  return userInfo ? <Outlet /> : <Navigate to="/signin" />;
};

export default PrivateRoute;
