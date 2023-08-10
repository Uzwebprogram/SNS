import styled from "styled-components";

export const SliderWrapper = styled.div`
  margin-top: 50px;
  .swiper {
    width: 100%;
    height: 400px;
    border-radius: 15px;
    .link {
      text-decoration: none;
      color: #fff;
    }
    @media only screen and (max-width: 425px) {
      border-radius: 0;
    }
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    position: relative;
  }

  .slider-content {
    position: absolute;
    height: 100%;
    width: 55%;
    background: rgba(0, 0, 0, 0.6);
    right: 0;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    padding: 30px;

    @media only screen and (max-width: 425px) {
      width: 100%;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      padding: 15px;
    }

    p {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 600;
      font-size: 30px;
      line-height: 130%;
      letter-spacing: 0.01em;
      color: #ffffff;
      text-align: left;
      @media only screen and (max-width: 425px) {
        font-size: 31px;
      }
      @media only screen and (max-width: 375px) {
        font-size: 28px;
      }
      @media only screen and (max-width: 320px) {
        font-size: 25px;
      }
    }
  }
  .content-bottom {
    position: absolute;
    bottom: 50px;
    right: 40px;

    @media only screen and (max-width: 425px) {
      left: 315px;
      bottom: 50px;
    }
    @media only screen and (max-width: 375px) {
      left: 270px;
      bottom: 50px;
    }
    @media only screen and (max-width: 320px) {
      left: 230px;
      bottom: 50px;
    }

    time {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 15px;
      letter-spacing: 0.01em;
      color: #cccccc;
    }
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .swiper {
    margin-left: auto;
    margin-right: auto;
  }
  .swiper-button-next,
  .swiper-button-prev {
    color: #fff;
  }
  .swiper-pagination-bullet {
    background: #cccccc;
  }
  .swiper-pagination-bullet-active {
    background: #2f66b8;
  }
  @media only screen and (max-width: 425px) {
    .swiper-button-next,
    .swiper-button-prev {
      top: 70%;
    }
  }
`;
