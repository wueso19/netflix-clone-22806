
import AuthProvider from "./auth/context/authentication/authProvider";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
};
export default App;
