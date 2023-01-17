import React from "react";
import CommonButton from "../../../common/button";
import { WrapperPress } from "./styled-index";
import { Row, Col } from "react-grid-system";
import { useTranslation } from "react-i18next";

const Ranking = ({ isSelect }) => {
  const arr = [1, 2, 3, 4];
  const {t, i18n} = useTranslation()
  return (
    <>
      <WrapperPress
        style={isSelect == true ? { marginTop: 0 } : { marginTop: 20 }}
      >
        <h2>{t("Home.2")}</h2>
        {isSelect == true ? (
          <div className="select-box">
            <select>
              <option value="Все отрасли">Все отрасли</option>
              <option value="Все отрасли">Все отрасли</option>
              <option value="Все отрасли">Все отрасли</option>
              <option value="Все отрасли">Все отрасли</option>
            </select>
          </div>
        ) : null}
        {arr.map(() => (
          <div>
            <Row className="row">
              <Col lg={6} md={8} sm={6} sx={6} className="col">
                <p>
                  Рэнкинг лизинговых компаний России по итогам 9 месяцев 2022
                  года
                </p>
              </Col>
              <Col lg={6} md={4} sm={6} sx={6} className="col">
                <time>16/12/2021</time>
              </Col>
            </Row>
            <hr />
          </div>
        ))}

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
          {t("Home.3")}
        </CommonButton>
      </WrapperPress>
    </>
  );
};

export default Ranking;
