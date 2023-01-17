import React from "react";
import { Col, Row } from "react-grid-system";
import CommonButton from "../../../common/button";
import { WrapperPress } from "./styled-index";
import Table from "./table";
import { useTranslation } from "react-i18next";

const Company = () => {
  const {t, i18n} = useTranslation()
  return (
    <>
      <WrapperPress>
        <h2>{t("Rating.0")}</h2>
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
            <Col lg={4} className="col col-media">
              <div className="radio-box">
                <input
                  type="radio"
                  id="radio1"
                  name="radio-name1"
                  value="Только отозванные"
                />
                <label for="radio1">{t("Rating.1")}</label>
              </div>
              <div className="radio-box">
                <input
                  type="radio"
                  id="radio2"
                  name="radio-name2"
                  value="Только под наблюдением"
                />
                <label for="radio2">{t("Rating.2")}</label>
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
                {t("Rating.3")}
              </CommonButton>
            </Col>
          </Row>
        </form>
        <Row className="row">
          <Col lg={12} md={12} sm={12} className="col">
            <Table />
          </Col>
        </Row>
      </WrapperPress>
    </>
  );
};

export default Company;
