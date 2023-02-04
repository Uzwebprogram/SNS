import React, { useEffect } from "react";
import CommonButton from "../../../common/button";
import CommonCard from "../../../common/card";
import { WrapperPress } from "./styled-index";
import cardImg from "../../../assets/home-comp/cardimg.png";
import { Col, Row } from "react-grid-system";
import { GetUslugi } from "../../../redux/uslugi/index";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

const UslugiCard = ({ isMargin, isBtn }) => {
  const LangVal = () => {
    return window.localStorage.getItem("i18nextLng");
  };

  const dispatch = useDispatch();
  const getUslugi = useSelector((state) => state.uslugi.getuslugi?.Data);

  useEffect(() => {
    dispatch(GetUslugi());
  }, []);

  const { t, i18n } = useTranslation();

  return (
    <>
      <WrapperPress isMargin={isMargin}>
        <h2>{t("Uslugi.0")}</h2>

        <Row className="row">
          {getUslugi.map((elem) => (
            <Col lg={12} md={12} sm={12} sx={12} className="col">
              <div className="uslugi-wrapper">
                <div className="uslugi-box">
                  <h4>
                    {LangVal() == "ru"
                      ? elem.title_ru
                      : LangVal() == "uz"
                      ? elem.title_uz
                      : LangVal() == "en"
                      ? elem.title_en
                      : elem.title_ru}
                  </h4>
                  <p>
                    {LangVal() == "ru"
                      ? elem.description_ru
                      : LangVal() == "uz"
                      ? elem.description_uz
                      : LangVal() == "en"
                      ? elem.description_en
                      : elem.description_ru}
                  </p>
                  <time>16/12/2021</time>
                </div>
                <div className="arrow-box">
                  <i class="bx bx-chevron-right"></i>
                </div>
              </div>
            </Col>
          ))}
        </Row>
        {isBtn == true ? (
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
            <NavLink className="links" to="/uslugi">
              {t("Uslugi.1")}
            </NavLink>
          </CommonButton>
        ) : null}
      </WrapperPress>
    </>
  );
};

export default UslugiCard;
