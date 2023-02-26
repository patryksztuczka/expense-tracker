import { Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { GuestRoute, PrivateRoute } from "../auth";
import { routePaths } from "../constants";
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import GuestTemplate from "../templates/GuestTemplate/GuestTemplate";
import PrivateTemplate from "../templates/PrivateTemplate/PrivateTemplate";

const NavigationRoutes = () => {
  const location = useLocation();
  return (
    <Suspense fallback={null}>
      <AnimatePresence mode="wait">
        <Routes key={location.pathname} location={location}>
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
      </AnimatePresence>
    </Suspense>
  );
};

export default NavigationRoutes;
