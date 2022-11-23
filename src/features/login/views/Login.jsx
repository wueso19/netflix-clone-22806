import backgroundLogin from "../assets/background-login.jpg";
import websiteSmall from "../assets/website_small.jpg";
import websiteMedium from "../assets/website_medium.jpg";
import websiteLarge from "../assets/website_large.jpg";
import Header from "../components/header/Header";
import LoginForm from "../components/loginForm/LoginForm";

const Login = () => {

  return (
      <div className="bg-black text-white m-0 min-h-full p-0 relative z-0">
        <div className="bg-cover block h-full min-h-screen overflow-hidden absolute w-full opacity-50 z-[-1]">
          <img
            src={backgroundLogin}
            // srcSet={` ${websiteSmall} w1000, ${websiteMedium} w1500, ${websiteLarge} w1800`}
            className="min-h-full min-w-full max-w-none"
          />
        </div>
        <Header />
        <LoginForm />
      </div>
  );
};
export default Login;
