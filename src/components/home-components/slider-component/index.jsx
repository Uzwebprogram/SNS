import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { SliderWrapper } from "./styled-index";
import sliderImg from "../../../assets/home-comp/laptopslider.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import CommonButton from "../../../common/button";

const SliderComponent = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <>
      <SliderWrapper>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {arr.map(() => (
            <SwiperSlide>
              <img src={sliderImg} alt="" />
              <div className="slider-content">
                <p>
                  Долгая нагрузка корпоративного сектора: кому сейчас лекго?
                </p>
                <CommonButton
                  style={{ display: "inline-block", marginRight: "auto" }}
                  type={"button"}
                >
                  Аналитика
                </CommonButton>
                <div className="content-bottom">
                  <time>08.08.28</time>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </SliderWrapper>
    </>
  );
};

export default SliderComponent;
