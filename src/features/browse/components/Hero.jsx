import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <span className="block relative z-[1]">
      <div className="top-0 left-0 right-0 bg-black relative mb-5 pb-[40%] touch-pan-y select-none">
        <div className="bg-black h-[56.25vw] absolute w-full z-0">
          <div className="absolute top-0 right-0 bottom-0 left-0">
            <div className="absolute top-0 right-0 bottom-0 left-0 z-[2]">
              {/* img hero */}
              <div className="absolute top-0 right-0 bottom-0 left-0">
                <img
                  className="img-hero"
                  src="https://occ-0-2562-1740.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABV8KwsQtkjm0MUIi4CTyVLZzaxVZ3UXAqOLrQ1YZWQWBC3tyneXrc7IknEj8vBRJswgPCNrdWyF3-uLGzs_4eUKL_Cb2uFWFsVqO.webp?r=a1d"
                  alt=""
                />
                <div className="trailer-vignette"></div>
                <div className="hero-vignette"></div>
              </div>
              {/* maturity rating  */}
              <div className="flex flex-row items-center bottom-[35%] justify-end absolute right-0 z-10">
                <span className="flex flex-col items-end relative w-[2.4vw] h-[2.4vw] m-[0_1.1vw_0_0] text-[1.35rem]">
                  <button
                    aria-label="Repetir"
                    className="bg-transparent border-t-[1px] border-[1px] border-white/70 appearance-none flex items-center justify-center opacity-100 p-2 relative whitespace-nowrap rounded-[50%] select-none hover:bg-white/10"
                    type="button"
                  >
                    <div className="leading-[0]">
                      <div
                        className="flex items-center justify-center w-[1.2rem] h-[1.2rem]"
                        role="presentation"
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-full h-full"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M13.1747 3.07702C11.01 2.79202 8.81537 3.30372 6.99988 4.51679C5.18439 5.72987 3.8718 7.56158 3.30668 9.67065C2.74155 11.7797 2.96243 14.0223 3.92815 15.9806C4.89388 17.9389 6.53859 19.4794 8.55586 20.3149C10.5731 21.1505 12.8254 21.2242 14.893 20.5224C16.9606 19.8205 18.7025 18.391 19.7942 16.5L18.0622 15.5C17.2131 16.9708 15.8582 18.0826 14.2501 18.6285C12.642 19.1744 10.8902 19.1171 9.32123 18.4672C7.75224 17.8173 6.47302 16.6192 5.7219 15.096C4.97078 13.5729 4.79899 11.8287 5.23853 10.1883C5.67807 8.5479 6.69897 7.12324 8.11102 6.17973C9.52307 5.23623 11.23 4.83824 12.9137 5.05991C14.5974 5.28158 16.1432 6.10778 17.2629 7.3846C18.1815 8.43203 18.762 9.7241 18.9409 11.0921L17.5547 10.168L16.4453 11.8321L19.4453 13.8321C19.7812 14.056 20.2188 14.056 20.5547 13.8321L23.5547 11.8321L22.4453 10.168L20.9605 11.1578C20.784 9.27909 20.0201 7.49532 18.7666 6.06591C17.3269 4.42429 15.3395 3.36202 13.1747 3.07702Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </button>
                </span>
                <span className="flex items-center h-[2.4vw] text-[1.1vw] box-border bg-[#333333]/60 border-l-[3px] border-[#dcdcdc] p-[0.5vw_3.5vw_0.5vw_0.8vw]">
                  <span className="text-[1.1vw] text-ellipsis uppercase whitespace-nowrap unico overflow-hidden">
                    16+
                  </span>
                </span>
              </div>
            </div>
          </div>
          {/* title, info and button */}
          <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full">
            <div className="flex flex-col justify-end absolute top-0 bottom-[38%] left-[4%] w-[36%] z-10">
              <div className="transition-transform w-full">
                {/* title */}
                <div
                  style={{
                    transformOrigin: "left bottom",
                    transform: "scale(1) translate3d(0px, 0px, 0px)",
                    transitionDuration: "1300ms",
                    transitionDelay: "0ms",
                  }}
                >
                  <div className="mb-[1.2vw] min-h-[13.2vw] relative">
                    <img
                      alt="Arrow"
                      className="w-full border-0 origin-bottom-left "
                      src="https://occ-0-2562-1740.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABewiT7KuBtJv-tjCgRNIXflTjWnBgbvjIL16aPjdcWrj4_73w0fbGYYujOodp3FJT1Q_1m66J8qEigzU2Hx7SX9FMFstX_QrgIotuB8BaDiY.webp?r=839"
                      title="Arrow"
                    />
                  </div>
                </div>
                {/* info */}
                <div
                  className="opacity-100"
                  style={{
                    transform: "translate3d(0px, 0px, 0px)",
                    transitionDuration: "1300ms",
                    transitionDelay: "0ms",
                  }}
                >
                  <div
                    className="opacity-100"
                    style={{
                      transitionDuration: "600ms",
                      transitionDelay: "200ms",
                    }}
                  >
                    <div
                      className="m-[0.5vw_0_0] text-white text-[1.2vw] font-normal leading-normal w-full"
                      style={{ textShadow: "2px 2px 4px rgb(0 0 0 / 45%)" }}
                    >
                      Basada en las historietas de Flecha Verde, un próspero
                      playboy se transforma en un superhéroe que salva a la
                      ciudad de villanos, armado únicamente con un arco y
                      flechas.
                    </div>
                  </div>
                </div>
                {/* button layer */}
                <div className="flex relative leading-[88%] mt-[1.5vw] whitespace-nowrap z-10">
                  <Link
                    data-uia="play-button"
                    role="link"
                    aria-label="Reproducir"
                    className="flex shrink-0 items-center justify-center cursor-pointer no-underline bg-transparent "
                    to="/browse"
                  >
                    <button
                      className="flex items-center justify-center py-[8.640px] pl-[21.600px] pr-[22.400px] mr-4 mb-4 ml-0 bg-white text-black appearance-none border-0 rounded-[4px] cursor-pointer opacity-100 relative select-none whitespace-nowrap hover:bg-white/75"
                      tabIndex="-1"
                      type="button"
                    >
                      <div className="leading-[0px]">
                        <div
                          className="flex items-center justify-center"
                          role="presentation"
                        >
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-full h-full overflow-hidden"
                          >
                            <path
                              d="M4 2.69127C4 1.93067 4.81547 1.44851 5.48192 1.81506L22.4069 11.1238C23.0977 11.5037 23.0977 12.4963 22.4069 12.8762L5.48192 22.1849C4.81546 22.5515 4 22.0693 4 21.3087V2.69127Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div className="flex relative box-border w-4 h-full"></div>
                      <span className="block antialiased text-[1.2rem] font-medium leading-[1.7rem]">
                        Reproducir
                      </span>
                    </button>
                  </Link>
                  <button
                    className="flex shrink-0 items-center justify-center py-[8.640px] pl-[21.600px] pr-[22.400px] mr-4 mb-4 ml-0 bg-[#6d6d6e]/70 hover:bg-[#6d6d6e]/40 text-white appearance-none border-0 rounded-[4px] cursor-pointer opacity-100 relative select-none whitespace-nowrap"
                    data-uia="billboard-more-info"
                    type="button"
                  >
                    <div className="leading-[0px]">
                      <div
                        className="flex items-center justify-center"
                        role="presentation"
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-full h-full overflow-hidden"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM13 10V18H11V10H13ZM12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="flex relative box-border w-4 h-full"></div>
                    <span className="block antialiased text-[1.2rem] font-medium leading-[1.7rem]">
                      Más información
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </span>
  );
};
export default Hero;
