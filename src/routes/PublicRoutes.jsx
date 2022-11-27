import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../auth/context/authentication/AuthContext";

const PublicRoutes = ({ children }) => {
  const { auth } = useContext(AuthContext);
  return auth.isAuth ? <Navigate to="/browser" /> : children;
};
export default PublicRoutes;