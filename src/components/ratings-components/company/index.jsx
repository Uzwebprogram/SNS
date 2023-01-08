import React from "react";
import { Col, Row } from "react-grid-system";
import CommonButton from "../../../common/button";
import { WrapperPress } from "./styled-index";
import Table from "./table";

const Company = () => {
  return (
    <>
      <WrapperPress>
        <h2>Рейтинги компаний</h2>
        <form>
          <Row className="row">
            <Col lg={8} className="col">
              <select>
                <option value="Все отрасли">Все отрасли</option>
                <option value="Все отрасли">Все отрасли</option>
                <option value="Все отрасли">Все отрасли</option>
                <option value="Все отрасли">Все отрасли</option>
                <option value="Все отрасли">Все отрасли</option>
              </select>
              <div className="input-group">
                <input type="search" placeholder="Название компании" />
                <i class="bx bx-search"></i>
              </div>
            </Col>
            <Col lg={4} className="col">
              <div className="radio-box">
                <input
                  type="radio"
                  id="radio1"
                  name="radio-name1"
                  value="Только отозванные"
                />
                <label for="radio1">Только отозванные</label>
              </div>
              <div className="radio-box">
                <input
                  type="radio"
                  id="radio2"
                  name="radio-name2"
                  value="Только под наблюдением"
                />
                <label for="radio2">Только под наблюдением</label>
              </div>
              <CommonButton
                style={{
                  color: "#1E1E1E",
                  borderColor: "#1E1E1E",
                  display: "inline-block",
                  marginTop: "12px",
                  padding: "8px 50px",
                }}
                type={"button"}
              >
                Поделиться
              </CommonButton>
            </Col>
          </Row>
        </form>
        <Row>
          <Col lg={12} md={12} sm={12}>
            <Table />
          </Col>
        </Row>
      </WrapperPress>
    </>
  );
};

export default Company;
