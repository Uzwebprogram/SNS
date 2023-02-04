import React from "react";
import { CardWrapper } from "./styled-index";
import { Row, Col } from "react-grid-system";

const CommonCard = ({
  imgSrc,
  text1,
  text2,
  spanText,
  bgColor,
  time,
  isBorder,
  isTime,
}) => {
  return (
    <>
      <CardWrapper bgColor={bgColor} isBorder={isBorder}>
        <Row className="row">
          <Col className="col-content" lg={8} md={8} sm={12}>
            <div className="card-content">
              <p className="p1">{text1}</p>
              <p className="p2">{text2}</p>
              {isTime == true ? null : (
                <div>
                  <span>{spanText}</span>
                  <time>{time}</time>
                </div>
              )}
            </div>
          </Col>
          <Col className="col" lg={4} md={4} sm={12}>
            <div className="card-img">
              <img src={imgSrc} alt="image" />
            </div>
          </Col>
        </Row>
      </CardWrapper>
    </>
  );
};

export default CommonCard;
