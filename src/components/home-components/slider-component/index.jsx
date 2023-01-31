import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { SliderWrapper } from "./styled-index";
import sliderImg from "../../../assets/home-comp/laptopslider.png";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import slider1 from "../../../assets/home-comp/slider1.png";
import slider2 from "../../../assets/home-comp/slider2.png";
import slider3 from "../../../assets/home-comp/slider3.png";
import slider4 from "../../../assets/home-comp/slider4.jpg";
import slider5 from "../../../assets/home-comp/slider5.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import CommonButton from "../../../common/button";

const SliderComponent = () => {
  const { t, i18n } = useTranslation();
  const dataSlider = [
    {
      id: 1,
      title: `${t("Home.8")}`,
      imgUrl: slider1,
    },
    {
      id: 2,
      title: `${t("Home.9")}`,
      imgUrl: slider2,
    },
    {
      id: 3,
      title: `${t("Home.10")}`,
      imgUrl: slider3,
    },
    {
      id: 4,
      title: `${t("Home.11")}`,
      imgUrl: slider4,
    },
    {
      id: 5,
      title: `${t("Home.12")}`,
      imgUrl: slider5,
    },
  ];

  return (
    <>
      <SliderWrapper id="home">
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
          {dataSlider.map((elem) => (
            <SwiperSlide key={elem.id}>
              <img src={elem.imgUrl} alt="image" />
              <div className="slider-content">
                <p>{elem.title}</p>
                <CommonButton
                  style={{ display: "inline-block", marginRight: "auto" }}
                  type={"button"}
                >
                  <NavLink className="link" to="analytics">
                    {t("Home.1")}
                  </NavLink>
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
