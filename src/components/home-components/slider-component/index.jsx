import React, { useEffect } from "react";
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
import { GetAnalytic } from "../../../redux/analytic";
import { useDispatch, useSelector } from "react-redux";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import CommonButton from "../../../common/button";

const SliderComponent = () => {
  const LangVal = () => {
    return window.localStorage.getItem("i18nextLng");
  };
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const getAnalytic = useSelector((state) => state.analytic.getanalytic?.Data);
  useEffect(() => {
    dispatch(GetAnalytic())
  }, [])
  console.log(getAnalytic)
  // format date api function
  const DateFormat = (date) => {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [day, month, year].join("/");
  };
  // format date api function
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
          {getAnalytic.map((elem) => (
            <SwiperSlide key={elem.id}>
              <img src={elem.img} alt="image" />
              <div className="slider-content">
                <p>{
                  LangVal() == "ru"
                    ? elem.title_ru
                    : LangVal() == "uz"
                      ? elem.title_uz
                      : LangVal() == "en"
                        ? elem.title_en
                        : elem.title_ru
                }</p>
                <CommonButton
                  style={{ display: "inline-block", marginRight: "auto" }}
                  type={"button"}
                >
                  <NavLink className="link" to="analytics">
                    {t("Home.1")}
                  </NavLink>
                </CommonButton>
                <div className="content-bottom">
                  <time>{elem.data_date}</time>
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
