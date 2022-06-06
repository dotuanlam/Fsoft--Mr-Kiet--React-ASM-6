import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { auth } from "../Firebase";
const PrivateRoute = () => {
  return (
    <div>
      {auth?.currentUser ? <Outlet /> : <Navigate to="/login" replace />}
    </div>
  );
};

export default PrivateRoute;
