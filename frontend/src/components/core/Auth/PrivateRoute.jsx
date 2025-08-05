import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function PrivateRoute({ childern }) {
  const { token } = useSelector((state) => {
    state.auth;
  });
  if (token !== null) return childern;
  else return <Navigate to={"/login"}></Navigate>;
}

export default PrivateRoute;
