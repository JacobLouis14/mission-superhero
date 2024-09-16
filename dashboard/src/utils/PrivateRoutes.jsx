import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/Authprovider";

const PrivateRoutes = () => {
  const { authData, setAuthData } = useContext(AuthContext);

  const tokenToCheck = authData.token
    ? authData.token
    : sessionStorage.getItem("token");

  if (!tokenToCheck) return <Navigate to="/" />;

  return <Outlet />;
};

export default PrivateRoutes;
