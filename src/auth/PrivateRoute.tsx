import { Outlet, Navigate } from "react-router-dom";

import { useAuth } from "../context/AuthContext/AuthContext";
import { routePaths } from "../constants";

const PrivateRoute = () => {
  const auth = useAuth();
  console.log("PrivateRoute", { auth });

  return auth?.session?.user ? <Outlet /> : <Navigate to={routePaths.login} />;
};

export default PrivateRoute;
