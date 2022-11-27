import { useReducer } from "react";
import AuthContext from "./AuthContext";
import {
  authReducer,
  initAuthReducer,
  TYPES,
} from "../../reducers/authReducer";

const AuthProvider = ({ children }) => {
  const [auth, dispatch] = useReducer(authReducer, {}, initAuthReducer);

  const login = async () => {
    try {
      const state = {
        // user,
        // token,
        isAuth: true,
      };

      dispatch({
        type: TYPES.LOGIN,
        // payload: {
        //   user,
        //   token,
        // },
      });
      localStorage.setItem("Authorization", JSON.stringify(state));
    } catch (error) {
      window.localStorage.removeItem("Authorization");
    }
  };

  const logout = () => {
    if (window.confirm("¿Esta seguro que desea cerrar sesión?")) {
      window.localStorage.removeItem("Authorization");
      dispatch({ type: TYPES.LOGOUT });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        auth,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
