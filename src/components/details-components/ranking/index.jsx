import React from "react";
import CommonButton from "../../../common/button";
import { WrapperPress } from "./styled-index";
import { Row, Col } from "react-grid-system";
import { useTranslation } from "react-i18next";

const RankingDetails = ({ isSelect }) => {
  const {t , i18n} = useTranslation();
  return (
    <>
      <WrapperPress style={isSelect == true ? {marginTop:0} : {marginTop: 20}}>
        <h2>{t("details.5")}</h2>
          <div>
            <Row className="row">
              <Col lg={6} md={8} sm={6} sx={6} className="col">
                <p>
                {t("details.0")}
                </p>
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
                <p>
                {t("details.1")}
                </p>
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
                <p>
                {t("details.2")}
                </p>
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
                <p>
                {t("details.3")}
                </p>
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
                <p>
                {t("details.4")}
                </p>
              </Col>
              <Col lg={6} md={4} sm={6} sx={6} className="col">
                <span>г. Ташкент, ул. Николя, дом 13/2</span>
              </Col>
            </Row>
            <hr />
          </div>
          <iframe style={{marginTop : "40px"}} width="100%" height="350" id="gmap_canvas" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2996.5214925859855!2d69.2630588!3d41.3192722!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x48a714abe43eb81d!2zTFVYSE9VU0UgLSDRgdGC0YPQtNC40Y8g0LTQuNC30LDQudC90LAg0Lgg0LDRgNGF0LjRgtC10LrRgtGD0YDQvdC-0LPQviDQv9GA0L7QtdC60YLQuNGA0L7QstCw0L3QuNGP!5e0!3m2!1sru!2s!4v1671194816522!5m2!1sru!2s" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
      </WrapperPress>
    </>
  );
};

export default RankingDetails;
