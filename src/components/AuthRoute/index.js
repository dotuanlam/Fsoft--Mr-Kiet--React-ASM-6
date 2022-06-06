import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { auth } from "../Firebase";
const AuthRoute = () => {
  return (
    <div>{auth?.currentUser ? <Navigate to="/" replace /> : <Outlet />}</div>
  );
};

export default AuthRoute;
