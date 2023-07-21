import React, { useEffect, useState } from "react";
import CommonButton from "../../../common/button";
import CommonCard from "../../../common/card";
import { NavLink } from "react-router-dom";
import { WrapperPress } from "./styled-index";
import { Col, Row } from "react-grid-system";
import { GetAnalytic } from "../../../redux/analytic";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const Analytics = ({ isSelect, isBtn, isMargin }) => {
  const { t, i18n } = useTranslation();
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

  const LangVal = () => {
    return window.localStorage.getItem("i18nextLng");
  };

  const dispatch = useDispatch();
  const getAnalytic = useSelector((state) => state.analytic.getanalytic?.Data);
  // console.log(getAnalytic)


  const [sorts, setSorts] = useState("");

  let arr = [];
  const Handlechange = (e) => {
    setSorts(e.target.value);
  };

  useEffect(() => {
    dispatch(GetAnalytic());
  }, []);

  getAnalytic?.map((elem) => {
    if (!arr.includes(elem.category_name)) {
      arr.push(elem.category_name);
    }
  });

  return (
    <>
      <WrapperPress isMargin={isMargin}>
        <h2>{t("Home.1")}</h2>
        {isSelect == true ? (
          <div className="select-box">
            <select onChange={Handlechange}>
            <option value="">{t("Select.1")}</option>
              {arr.map((elem, index) => (
                <option key={index} value={elem}>
                  {elem}
                </option>
              ))}
            </select>
            <CommonButton
              style={{
                color: "#FFFFFF",
                borderColor: "#FFFFFF",
                display: "inline-block",
                padding: "8px 30px",
              }}
              type={"button"}
            >
              {t("Calling.5")}
            </CommonButton>
          </div>
        ) : null}
        <Row className="row">
          {getAnalytic.map((elem) =>
            sorts == elem.category_name || sorts == "" ? (
              <Col lg={12} md={12} sm={12} sx={12} className="col">
                <a className="link" target={"_blank"} href={elem.analitka_pdf}>
                  <CommonCard
                    id={elem.id}
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
                    spanText={elem.data_date}
                    // time={DateFormat(elem.date)}
                  />
                </a>
              </Col>
            ) : null
          )}
        </Row>
        {isBtn == true ? null : (
          <CommonButton
            style={{
              color: "#fff",
              borderColor: "#fff",
              display: "inline-block",
              marginTop: "30px",
              padding: "8px 30px",
            }}
            type={"button"}
          >
           <NavLink className='links' to='/analytics'> {t("Home.3")}</NavLink>
          </CommonButton>
        )}
      </WrapperPress>
    </>
  );
};

export default Analytics;
