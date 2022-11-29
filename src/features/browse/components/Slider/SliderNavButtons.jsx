import { useSwiper } from "swiper/react";

export const SliderButtonNext = ({ children }) => {
  const swiper = useSwiper();
  return <div onClick={() => swiper.slideNext()}>{children}</div>
};

export const SliderButtonPrev = ({ children }) => {
  const swiper = useSwiper();
  return <div onClick={() => swiper.slidePrev()}>{children}</div>
};
