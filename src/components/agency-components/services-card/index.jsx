import React from "react";
import CommonButton from "../../../common/button";
import CommonCard from "../../../common/card";
import { WrapperPress } from "./styled-index";
import cardImg from "../../../assets/home-comp/cardimg.png";
import { Col, Row } from "react-grid-system";

const ServiesCard = () => {
  const arr = [1, 2];
  return (
    <>
      <WrapperPress>
        <h2>Услуги</h2>

        <Row className="row">
          {arr.map(() => (
            <Col lg={6} md={6} sm={12} sx={12} className='col'>
            <CommonCard
              bgColor
              isBorder
              isTime={true}
              imgSrc={cardImg}
              text1={"Кредитные рейтинги"}
              text2={
                "По итогам 10 месяцев 2022 года По итогам 10 месяцев 2022 года"
              }
              text3={"Выгрузка рейтинговых данных"}
              text4={"По итогам 10 месяцев 2022 года"}
              text5={"Рейтинг EGS"}
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

export default ServiesCard;
