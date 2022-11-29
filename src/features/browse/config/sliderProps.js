import { Navigation } from "swiper";

export const sliderProps = {
  spaceBetween: -55,
  slidesPerView: 6,
  slidesPerGroup: 6,
  // onSlideChange: () => console.log("slide change"),
  // onSwiper: (swiper) => console.log(swiper),
  modules: [Navigation],

  breakpoints: {
    720: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: -50,
    },
    1190: {
      slidesPerView: 5,
      slidesPerGroup: 5,
      spaceBetween: 0,
    },
    1290: {
      slidesPerView: 6,
      slidesPerGroup: 6,
      spaceBetween: 50,
    },
    1350: {
      slidesPerView: 6,
      slidesPerGroup: 6,
      spaceBetween: 0,
    },
    1420: {
      slidesPerView: 6,
      slidesPerGroup: 6,
      spaceBetween: -55,
    },
  },
};
