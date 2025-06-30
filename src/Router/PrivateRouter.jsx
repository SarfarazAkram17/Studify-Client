import React from "react";
import { Navigate, useLocation } from "react-router";
import Lottie from "lottie-react";
import lottieLoading from "../assets/loading.json";
import useAuth from "../Hooks/useAuth";

const PrivateRouter = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useAuth();

  if (loading) {
    return <Lottie loop={true} animationData={lottieLoading} className="h-[40vh] w-auto"></Lottie>;
  }

  if (!user) {
    return <Navigate state={location.pathname} to="/login"></Navigate>;
  }

  return children;
};

export default PrivateRouter;
