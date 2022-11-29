import { Link } from "react-router-dom";
import Card from "./Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { SliderButtonNext, SliderButtonPrev } from "./SliderNavButtons";
import { sliderProps } from "../../config/sliderProps";
import "swiper/css";

const Slider = ({ movies, titleSlider }) => {
  return (
    <div
      className="box-border my-[3vw] mx-0 outline-0 relative z-[1]"
      style={{ transition: "transform .54s cubic-bezier(.5,0,.1,1) 0s" }}
    >
      <h2 className="leading-[1.3] m-0 font-medium block text-[1.5em] m-bl">
        <Link
          className="inline-block text-[#e5e5e5] text-[1.4vw] font-medium m-[0_4%_0.5em] min-w-[6em] no-underline "
          href="/browse"
        >
          <div className="table-cell text-[1.4vw] leading-[1.25vw] align-bottom">
            {titleSlider}
          </div>
        </Link>
      </h2>
      <Swiper {...sliderProps} className="pl-[4%]">
        {movies.map((movie) => {
          return (
            <SwiperSlide key={movie.id}>
              <Card movie={movie} />
            </SwiperSlide>
          );
        })}
        <SliderButtonPrev>
          <span className="flex justify-center group text-center absolute top-0 right-0 bottom-0 left-[-2px] bg-transparent hover:bg-black/50 text-white rounded-tl-[4px] rounded-bl-[4px]  w-[4%] z-20">
            <b className="indicator-icon icon-rightCaret group-hover:text-[#D9D9D9] group-hover:block group-hover:font-medium group-hover:scale-125 self-center origin-[55%_50%] hidden text-[2.5vw] h-auto transition duration-1000 ease-out  before:content-['<']"></b>
          </span>
        </SliderButtonPrev>
        <SliderButtonNext>
          <span className="flex justify-center group text-center absolute top-0 right-0 bottom-0 bg-transparent hover:bg-black/50 text-white rounded-tl-[4px] rounded-bl-[4px] w-[4%] z-20">
            <b className="indicator-icon icon-rightCaret group-hover:text-[#D9D9D9] group-hover:block group-hover:font-medium group-hover:scale-125 self-center origin-[45%_50%] hidden text-[2.5vw] h-auto transition duration-1000 ease-out  before:content-['>']"></b>
          </span>
        </SliderButtonNext>
      </Swiper>
    </div>
  );
};

export default Slider;
