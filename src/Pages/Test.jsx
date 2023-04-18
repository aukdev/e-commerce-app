// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper";

const Test = () => {
  return (
    <div className=" overflow-x-hidden overflow-y-scroll w-full pt-[100px] pb-[200px] grid grid-cols-3 gap-7">
      <div>
        <Swiper navigation={true} modules={[Navigation]} className=" w-full">
          <SwiperSlide className={` w-full`}>
            <img
              src="https://cdn.wallpapersafari.com/84/48/07yOHb.jpg"
              alt="girl"
              className=" w-full object-contain"
            />
          </SwiperSlide>
          <SwiperSlide className={` w-full`}>
            <img
              src="https://cdn.wallpapersafari.com/84/48/07yOHb.jpg"
              alt="girl"
              className=" w-full object-contain"
            />
          </SwiperSlide>
          <SwiperSlide className={` w-full`}>
            <img
              src="https://cdn.wallpapersafari.com/84/48/07yOHb.jpg"
              alt="girl"
              className=" w-full object-contain"
            />
          </SwiperSlide>
          <SwiperSlide className={` w-full`}>
            <img
              src="https://cdn.wallpapersafari.com/84/48/07yOHb.jpg"
              alt="girl"
              className=" w-full object-contain"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div>
        <Swiper navigation={true} modules={[Navigation]} className=" w-full">
          <SwiperSlide className={` w-full`}>
            <img
              src="https://cdn.wallpapersafari.com/84/48/07yOHb.jpg"
              alt="girl"
              className=" w-full object-contain"
            />
          </SwiperSlide>
          <SwiperSlide className={` w-full`}>
            <img
              src="https://cdn.wallpapersafari.com/84/48/07yOHb.jpg"
              alt="girl"
              className=" w-full object-contain"
            />
          </SwiperSlide>
          <SwiperSlide className={` w-full`}>
            <img
              src="https://cdn.wallpapersafari.com/84/48/07yOHb.jpg"
              alt="girl"
              className=" w-full object-contain"
            />
          </SwiperSlide>
          <SwiperSlide className={` w-full`}>
            <img
              src="https://cdn.wallpapersafari.com/84/48/07yOHb.jpg"
              alt="girl"
              className=" w-full object-contain"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div>
        <Swiper navigation={true} modules={[Navigation]} className=" w-full">
          <SwiperSlide className={` w-full`}>
            <img
              src="https://cdn.wallpapersafari.com/84/48/07yOHb.jpg"
              alt="girl"
              className=" w-full object-contain"
            />
          </SwiperSlide>
          <SwiperSlide className={` w-full`}>
            <img
              src="https://cdn.wallpapersafari.com/84/48/07yOHb.jpg"
              alt="girl"
              className=" w-full object-contain"
            />
          </SwiperSlide>
          <SwiperSlide className={` w-full`}>
            <img
              src="https://cdn.wallpapersafari.com/84/48/07yOHb.jpg"
              alt="girl"
              className=" w-full object-contain"
            />
          </SwiperSlide>
          <SwiperSlide className={` w-full`}>
            <img
              src="https://cdn.wallpapersafari.com/84/48/07yOHb.jpg"
              alt="girl"
              className=" w-full object-contain"
            />
          </SwiperSlide>
        </Swiper>
        <div>
          <h1>Heeee</h1>
        </div>
      </div>
      <div>
        <Swiper navigation={true} modules={[Navigation]} className=" w-full">
          <SwiperSlide className={` w-full`}>
            <img
              src="https://cdn.wallpapersafari.com/84/48/07yOHb.jpg"
              alt="girl"
              className=" w-full object-contain"
            />
          </SwiperSlide>
          <SwiperSlide className={` w-full`}>
            <img
              src="https://cdn.wallpapersafari.com/84/48/07yOHb.jpg"
              alt="girl"
              className=" w-full object-contain"
            />
          </SwiperSlide>
          <SwiperSlide className={` w-full`}>
            <img
              src="https://cdn.wallpapersafari.com/84/48/07yOHb.jpg"
              alt="girl"
              className=" w-full object-contain"
            />
          </SwiperSlide>
          <SwiperSlide className={` w-full`}>
            <img
              src="https://cdn.wallpapersafari.com/84/48/07yOHb.jpg"
              alt="girl"
              className=" w-full object-contain"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Test;
