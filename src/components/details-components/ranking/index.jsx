import React from "react";
import { WrapperPress } from "./styled-index";
import { Row, Col } from "react-grid-system";
import { useTranslation } from "react-i18next";

const RankingDetails = ({ isSelect }) => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <WrapperPress
        style={isSelect == true ? { marginTop: 0 } : { marginTop: 20 }}
      >
        <h2>{t("details.5")}</h2>
        <div>
          <Row className="row">
            <Col lg={6} md={8} sm={6} sx={6} className="col">
              <p>{t("details.0")}</p>
            </Col>
            <Col lg={6} md={4} sm={6} sx={6} className="col">
              <span>306298843</span>
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
              <span>+998 (94)-636-11-47</span>
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
              <span>70220</span>
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
              <span>info@snsratings.uz</span>
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
              <span>{t("Footer.17")}</span>
            </Col>
          </Row>
          <hr />
        </div>
        <iframe
          style={{ marginTop: "40px" }}
          width="100%"
          height="350"
          id="gmap_canvas"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2996.3973050607333!2d69.3214937!3d41.3219732!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef4fb24a7eef5%3A0x6d968a38e10e5517!2zNS3QuSDQv9GALiDRg9C70LjRhtGLINCR0YPQt9Cx0L7Qt9C-0YAsINCi0LDRiNC60LXQvdGC!5e0!3m2!1sru!2s!4v1690525188854!5m2!1sru!2s"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
        ></iframe>
      </WrapperPress>
    </>
  );
};

export default RankingDetails;
