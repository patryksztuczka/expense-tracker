import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { GuestRoute, PrivateRoute } from "../auth";

import { routePaths } from "../constants";
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import GuestTemplate from "../templates/GuestTemplate/GuestTemplate";
import PrivateTemplate from "../templates/PrivateTemplate/PrivateTemplate";

const NavigationRoutes = () => {
  return (
    <Suspense fallback={null}>
      <Routes>
        // Private pages
        <Route element={<PrivateRoute />}>
          <Route element={<PrivateTemplate />}>
            <Route path={routePaths.home} element={<HomePage />} />
          </Route>
        </Route>
        // Guest pages
        <Route element={<GuestRoute />}>
          <Route element={<GuestTemplate />}>
            <Route path={routePaths.login} element={<LoginPage />} />
            <Route path={routePaths.signup} element={<SignUpPage />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
};

export default NavigationRoutes;
