import "./App.css";

import { lazy, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { isRefreshing } from "./redux/auth/Selectors";
import { refreshUser } from "./redux/auth/operations";
import { RestrictedRoute } from "./page/RestrictedRoute/RestrictedRoute";
import { PrivateRoute } from "./page/PrivateRoute/PrivateRoute";
import { Toaster } from "react-hot-toast";
const PageContacts = lazy(() => import("./page/PageContacts/PageContacts"));
const RegistrationPage = lazy(() =>
  import("./page/RegistrationPage/RegistrationPage")
);
const LoginPage = lazy(() => import("./page/LoginPage/LoginPage"));
const HomePage = lazy(() => import("./page/HomePage/HomePage"));

function App() {
  const dispatch = useDispatch();
  const isRefresh = useSelector(isRefreshing);
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefresh ? (
    <p>refreshing user</p>
  ) : (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                component={<RegistrationPage />}
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                component={<LoginPage />}
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute component={<PageContacts />} redirectTo="/login" />
            }
          />
        </Routes>
      </Layout>
      <Toaster position="top-right" />
    </>
  );
}

export default App;
