import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PinningHeader = () => {
  const [show, setShow] = useState(false);

  const handleFunc = () => {
    (window.scrollY > 80) ? setShow(true) : setShow(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => handleFunc());
    return () => {
      window.removeEventListener("scroll", handleFunc());
    };
  }, []);
  return (
    <div className="h-[70px] w-full">
      <div
        className={`top-0  left-0 z-[1] w-full ease-in-out transition-all duration-700 ${
          show ? "fixed bg-background-dark" : "relative bg-transparent"
        }`}
      >
        <div className="h-[68px] z-[2] bg-gradient-to-b from-[rgba(0,0,0,.7)] to-transparent text-sm flex items-center w-full py-0 px-[4%] ">
          <span className="mr-[25px] text-2xl fill-primary leading-normal">
            <Link to="/browse">
              <svg
                viewBox="0 0 111 30"
                data-uia="netflix-logo"
                className="h-[25px] w-[92px] p-0"
                aria-hidden="true"
                focusable="false"
              >
                <g id="netflix-logo">
                  <path
                    d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z"
                    id="Fill-14"
                  ></path>
                </g>
              </svg>
            </Link>
          </span>
          <ul className="flex items-center m-0 p-0">
            <li className="ml-5">
              <Link
                className="flex items-center font-medium h-full text-sm"
                to="/browse"
              >
                Inicio
              </Link>
            </li>
            <li className="ml-5">
              <Link
                className="flex items-center font-medium h-full"
                to="/browse/genre/83"
              >
                Series
              </Link>
            </li>
            <li className="ml-5">
              <Link
                className="flex items-center font-medium h-full"
                to="/browse/genre/34399"
              >
                Películas
              </Link>
            </li>
            <li className="ml-5">
              <Link
                className="flex items-center font-medium h-full"
                to="/latest"
              >
                Novedades populares
              </Link>
            </li>
            <li className="ml-5">
              <Link
                className="flex items-center font-medium h-full"
                to="/browse/my-list"
              >
                Mi lista
              </Link>
            </li>
            <li className="ml-5">
              <Link
                className="flex items-center font-medium h-full"
                to="/browse/original-audio"
              >
                Explora por idiomas
              </Link>
            </li>
          </ul>
          <div className="flex items-center flex-grow h-full justify-end absolute right-[4%] top-0">
            <div className="mr-[15px]">
              <div className="inline-block align-middle">
                <button
                  className="inline-block py-[1px] px-[6px]"
                  tabIndex="0"
                  aria-label="Buscar"
                  data-uia="search-box-launcher"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="search-icon"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M14 11C14 14.3137 11.3137 17 8 17C4.68629 17 2 14.3137 2 11C2 7.68629 4.68629 5 8 5C11.3137 5 14 7.68629 14 11ZM14.3623 15.8506C12.9006 17.7649 10.5945 19 8 19C3.58172 19 0 15.4183 0 11C0 6.58172 3.58172 3 8 3C12.4183 3 16 6.58172 16 11C16 12.1076 15.7749 13.1626 15.368 14.1218L24.0022 19.1352L22.9979 20.8648L14.3623 15.8506Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="mr-[15px]">
              <span className="notifications">
                <button
                  className="inline-block py-[1px] px-[6px]"
                  aria-haspopup="true"
                  aria-expanded="false"
                  aria-label="Notificaciones"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="Hawkins-Icon Hawkins-Icon-Standard"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M13 4.07092C16.3922 4.55624 18.9998 7.4736 18.9998 11V15.2538C20.0486 15.3307 21.0848 15.4245 22.107 15.5347L21.8926 17.5232C18.7219 17.1813 15.409 17 11.9998 17C8.59056 17 5.27764 17.1813 2.10699 17.5232L1.89258 15.5347C2.91473 15.4245 3.95095 15.3307 4.99978 15.2538V11C4.99978 7.47345 7.6076 4.55599 11 4.07086V2L13 2V4.07092ZM16.9998 15.1287V11C16.9998 8.23858 14.7612 6 11.9998 6C9.23836 6 6.99978 8.23858 6.99978 11V15.1287C8.64041 15.0437 10.3089 15 11.9998 15C13.6907 15 15.3591 15.0437 16.9998 15.1287ZM8.62568 19.3712C8.6621 20.5173 10.1509 22 11.9993 22C13.8477 22 15.3365 20.5173 15.373 19.3712C15.38 19.1489 15.1756 19 14.9531 19H9.04555C8.82308 19 8.61862 19.1489 8.62568 19.3712Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </button>
              </span>
            </div>
            <div>
              <div className="block text-xs relative z-0">
                <div className="flex items-center w-full">
                  <Link
                    role="button"
                    tabIndex="0"
                    aria-haspopup="true"
                    aria-expanded="false"
                    aria-label="Mi - Cuenta y configuración"
                  >
                    <span
                      className="flex items-center relative"
                      role="presentation"
                    >
                      <img
                        className="profile-icon"
                        src="http://occ-0-2562-1740.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABbZxbZFuACCeuHrTZUc2Bn9zLUZlIiWJYmFbne1JUnbNAxPYOCpJYrN8cGBUBnk1qIsl4od5_0UBLX6lPC5U3KdVWmWzqEs.png?r=54c"
                        alt=""
                      />
                    </span>
                  </Link>
                  <span
                    className="border-t-white border-x-transparent border-b-transparent border-solid border-t-[5px] border-x-[5px] border-b-[0px] h-0 ml-[10px] transition-transform"
                    role="presentation"
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PinningHeader;
