import React, { useEffect } from "react";
import CommonButton from "../../../common/button";
import CommonCard from "../../../common/card";
import { WrapperPress } from "./styled-index";
import cardImg from "../../../assets/home-comp/cardimg.png";
import { Col, Row } from "react-grid-system";
import { GetAnalytic } from "../../../redux/analytic";
import { useDispatch, useSelector } from "react-redux";

const Analytics = ({ isSelect }) => {
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
  const arr = [1, 2, 3, 4];
  const LangVal = () => {
    return window.localStorage.getItem("i18nextLng");
  };

  const dispatch = useDispatch();
  const getAnalytic = useSelector((state) => state.analytic.getanalytic?.Data);
  console.log(getAnalytic);

  useEffect(() => {
    dispatch(GetAnalytic());
  }, []);
  return (
    <>
      <WrapperPress>
        <h2>Аналитика</h2>
        {isSelect == true ? (
          <div className="select-box">
            <select>
              <option value="Все отрасли">Все отрасли</option>
              <option value="Все отрасли">Все отрасли</option>
              <option value="Все отрасли">Все отрасли</option>
              <option value="Все отрасли">Все отрасли</option>
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
              Поделиться
            </CommonButton>
          </div>
        ) : null}
        <Row className="row">
          {getAnalytic.map((elem) => (
            <Col lg={6} md={6} sm={12} sx={12} className="col">
              <CommonCard
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
                time={DateFormat(elem.date)}
              />
            </Col>
          ))}
        </Row>
        <CommonButton
          style={{
            color: "#FFFFFF",
            borderColor: "#FFFFFF",
            display: "inline-block",
            marginTop: "30px",
            padding: "8px 30px",
          }}
          type={"button"}
        >
          Посмотреть все
        </CommonButton>
      </WrapperPress>
    </>
  );
};

export default Analytics;
