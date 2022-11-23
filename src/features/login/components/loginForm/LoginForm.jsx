import { useContext, useState } from "react";
import AuthContext from "../../../../auth/context/authentication/AuthContext";

const LoginForm = () => {
  const [errors, setErrors] = useState(true);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const { login } = useContext(AuthContext);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login();
  };

  return (
    <div className='bg-transparent mt-0 mx-auto mb-[-236px] max-w-[450px] min-h-screen text-[#333] before:content-[""] before:block before:h-[91px] '>
      <div className="min-h-[460px] min-w-[380px] mb-[90px] pt-[60px] px-[68px] pb-10 bg-[rgba(0,0,0,.75)] rounded flex flex-col w-full">
        <div className="grow">
          <h1 className="text-white text-[32px] font-medium mb-7">
            Inicia sesión
          </h1>
          <form onSubmit={handleSubmit} className="mb-0">
            <div className="pb-4 max-w-full">
              <div className="relative">
                <div className="border-0 rounded">
                  <label className="">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email o número de teléfono"
                      className="bg-[#333] border-0 rounded text-white w-full h-50px leading-[50px] px-5 pb-0"
                      autoComplete="email"
                      onChange={handleInputChange}
                    />
                    {errors.email && (
                      <p className="p-1 text-xs font-light text-orange-500">
                        Ingresa un email o un número de teléfono válido.
                      </p>
                    )}
                  </label>
                </div>
              </div>
            </div>
            <div className="pb-4 max-w-full">
              <div className="relative">
                <div className="border-0 rounded">
                  <label className="">
                    <input
                      type="password"
                      name="password"
                      placeholder="Contraseña"
                      className="bg-[#333] border-0 rounded text-white w-full h-50px leading-[50px] px-5 pb-0"
                      autoComplete="current-password"
                      onChange={handleInputChange}
                    />
                    {errors.password && (
                      <p className="p-1 text-xs font-light text-orange-500">
                        La contraseña debe tener entre 4 y 60 caracteres.
                      </p>
                    )}
                  </label>
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="max-w-full w-full rounded bg-[#e50914] py-3 font-semibold mt-6 mx-0 mb-3 text-white"
            >
              {loading ? "Cargando..." : "Inicia sesión"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default LoginForm;
