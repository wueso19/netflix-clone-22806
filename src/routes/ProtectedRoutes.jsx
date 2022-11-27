import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../auth/context/authentication/AuthContext";

const ProtectedRoutes = ({ children, URL }) => {
  const { auth } = useContext(AuthContext);

  if (auth.isAuth) {
    return children;
  }
  return <Navigate to={URL} />;
};
export default ProtectedRoutes;
