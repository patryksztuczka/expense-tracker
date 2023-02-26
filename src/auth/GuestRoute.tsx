import { Outlet, Navigate } from "react-router-dom";

import { useAuth } from "../context/AuthContext/AuthContext";
import { routePaths } from "../constants";

const GuestRoute = () => {
  const auth = useAuth();
  console.log("GuestRoute", { auth });
  return auth?.session?.user ? <Navigate to={routePaths.home} /> : <Outlet />;
};

export default GuestRoute;
