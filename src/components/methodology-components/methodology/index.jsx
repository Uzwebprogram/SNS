import React from "react";
import CommonButton from "../../../common/button";
import { WrapperPress } from "./styled-index";
import { Row, Col } from "react-grid-system";

const Methodology = ({ isSelect }) => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  return (
    <>
      <WrapperPress>
        <h2>Методология</h2>

        <div className="select-box">
          <select>
            <option value="Действующие методолгия">
              Действующие методолгия
            </option>
            <option value="Действующие методолгия">
              Действующие методолгия
            </option>
            <option value="Действующие методолгия">
              Действующие методолгия
            </option>
            <option value="Действующие методолгия">
              Действующие методолгия
            </option>
          </select>
        </div>

        {arr.map(() => (
          <div>
            <Row className="row">
              <Col lg={8} md={8} sm={6} sx={6} className="col">
                <a href="cardimg.png" download>
                  Рэнкинг лизинговых компаний России по итогам 9 месяцев 2022
                  года. pdf
                </a>
              </Col>
              <Col lg={4} md={4} sm={6} sx={6} className="col">
                <span>164.67kb</span>
              </Col>
            </Row>
            <hr />
          </div>
        ))}
       
      </WrapperPress>
    </>
  );
};

export default Methodology;
