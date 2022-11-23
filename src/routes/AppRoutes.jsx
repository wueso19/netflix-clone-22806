import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../common/layout/Layout";
import Login from "../features/login/views/Login";
import Browse from "../features/browse/views/Browse";
import Home from "../features/home/views/Home";
import ProtectedRoutes from "./ProtectedRoutes";
import PublicRoutes from "./PublicRoutes";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <PublicRoutes>
              <Home />
            </PublicRoutes>
          }
        />
        <Route
          path="/login/*"
          element={
            <PublicRoutes>
              <Login />
            </PublicRoutes>
          }
        />
        <Route
          path="*"
          element={
            <ProtectedRoutes URL="/login">
              <Browse />
            </ProtectedRoutes>
          }
        />
        <Route path="*" element={<h1 className="text-3xl font-bold">404</h1>} />
      </Routes>
    </BrowserRouter>
  );
};
export default AppRoutes;
