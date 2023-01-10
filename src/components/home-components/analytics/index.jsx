import React from "react";
import CommonButton from "../../../common/button";
import CommonCard from "../../../common/card";
import { WrapperPress } from "./styled-index";
import cardImg from "../../../assets/home-comp/cardimg.png";
import { Col, Row } from "react-grid-system";

const Analytics = ({ isSelect }) => {
  const arr = [1, 2, 3, 4];
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
          {arr.map(() => (
            <Col lg={6} md={6} sm={12} sx={12}>
              <CommonCard
                imgSrc={cardImg}
                text1={
                  "Консолидированные бюджеты регионов: устойчивость вопреки санкциям"
                }
                text2={
                  "По итогам 10 месяцев 2022 года консолидированные бюджеты 77 регионов продемонстрировали..."
                }
                spanText={"Российская газета"}
                time={"16/12/2021"}
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
