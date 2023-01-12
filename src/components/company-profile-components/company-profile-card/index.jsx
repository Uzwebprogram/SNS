import React from "react";
import { WrapperPress } from "./styled-index";
import { Row, Col } from "react-grid-system";
import { useTranslation } from "react-i18next";

const CompanyProfileCard = ({ isSelect }) => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <WrapperPress
        style={isSelect == true ? { marginTop: 0 } : { marginTop: 20 }}
      >
        <h2>АО "РФК-БАНК"</h2>
        <div>
          <h3>Реквизиты</h3>
          <hr className="hr" />
          <Row className="row">
            <Col lg={6} md={8} sm={6} sx={6} className="col">
              <p>{t("details.0")}</p>
            </Col>
            <Col lg={6} md={4} sm={6} sx={6} className="col">
              <span>0411015060</span>
            </Col>
          </Row>
          <hr />
        </div>
        <div>
          <Row className="row">
            <Col lg={6} md={8} sm={6} sx={6} className="col">
              <p>{t("details.1")}</p>
            </Col>
            <Col lg={6} md={4} sm={6} sx={6} className="col">
              <span>+998 (90) 000 00 00</span>
            </Col>
          </Row>
          <hr />
        </div>
        <div>
          <Row className="row">
            <Col lg={6} md={8} sm={6} sx={6} className="col">
              <p>{t("details.2")}</p>
            </Col>
            <Col lg={6} md={4} sm={6} sx={6} className="col">
              <span>0411015060</span>
            </Col>
          </Row>
          <hr />
        </div>
        <div>
          <Row className="row">
            <Col lg={6} md={8} sm={6} sx={6} className="col">
              <p>{t("details.3")}</p>
            </Col>
            <Col lg={6} md={4} sm={6} sx={6} className="col">
              <span>sns.info@gmail.ru</span>
            </Col>
          </Row>
          <hr />
        </div>
        <div>
          <Row className="row">
            <Col lg={6} md={8} sm={6} sx={6} className="col">
              <p>{t("details.4")}</p>
            </Col>
            <Col lg={6} md={4} sm={6} sx={6} className="col">
              <span>г. Ташкент, ул. Николя, дом 13/2</span>
            </Col>
          </Row>
          <hr />
        </div>
        <div className="table-box">
          <h3>Рейтинги компании</h3>
          <hr className="hr" />

          <p>Рейтинги кредитоспособности нефинансовых компаний</p>

          <table className="table">
            <thead>
              <tr>
                <th>Рейтинг</th>
                <th>Прогноз</th>
                <th>Обновлен</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>byBBB+</td>
                <td>Стабильный</td>
                <td>16/12/2021</td>
              </tr>
              <tr>
                <td>byBBB+</td>
                <td>Развивающийся</td>
                <td>16/12/2021</td>
              </tr>
            </tbody>
          </table>
        </div>
      </WrapperPress>
    </>
  );
};

export default CompanyProfileCard;
