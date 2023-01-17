import React, { useEffect } from "react";
import CommonButton from "../../../common/button";
import CommonCard from "../../../common/card";
import { WrapperPress } from "./styled-index";
import cardImg from "../../../assets/home-comp/cardimg.png";
import { Col, Row } from "react-grid-system";
import { GetUslugi } from "../../../redux/uslugi/index";
import { useDispatch, useSelector } from "react-redux";

const UslugiCard = () => {
  const LangVal = () => {
    return window.localStorage.getItem("i18nextLng");
  };

  const dispatch = useDispatch();
  const getUslugi = useSelector((state) => state.uslugi.getuslugi?.Data);

  useEffect(() => {
    dispatch(GetUslugi());
  }, []);

  return (
    <>
      <WrapperPress>
        <h2>Услуги</h2>

        <Row className="row">
          {getUslugi.map((elem) => (
            <Col lg={6} md={6} sm={12} sx={12} className="col">
              <CommonCard
                bgColor
                isBorder
                isTime={true}
                imgSrc={elem.img}
                text1={
                  LangVal() == "ru"
                    ? elem.title_ru
                    : LangVal() == "uz"
                    ? elem.title_uz
                    : LangVal() == "en"
                    ? elem.title_en
                    : elem.title_ru
                }
                text2={
                  LangVal() == "ru"
                    ? elem.description_ru
                    : LangVal() == "uz"
                    ? elem.description_uz
                    : LangVal() == "en"
                    ? elem.description_en
                    : elem.description_ru
                }
                spanText={"Российская газета"}
                time={"16/12/2021"}
              />
            </Col>
          ))}
        </Row>
        <CommonButton
          style={{
            color: "#1E1E1E",
            borderColor: "#1E1E1E",
            display: "inline-block",
            marginTop: "30px",
            padding: "8px 30px",
          }}
          type={"button"}
        >
          Все услуги
        </CommonButton>
      </WrapperPress>
    </>
  );
};

export default UslugiCard;
