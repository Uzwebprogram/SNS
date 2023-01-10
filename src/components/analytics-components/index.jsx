import React from "react";
import { Row, Col } from "react-grid-system";
import { Section } from "./styled-index";
import { WrapperContainer } from "../../style-App";
import Calling from "../calling";
import Analytics from "../home-components/analytics";
import Surway from "./surway";
import Modul from "./modul";

const AnalyticsComponent = () => {
  return (
    <>
      <Section>
        <WrapperContainer>
          <Row className="row">
            <Col lg={8} md={12} sm={12} sx={12} className="col">
              <Analytics isSelect={true} />
            </Col>
            <Col lg={4} md={12} sm={12} sx={12} className="col">
              <Surway />
              <Modul/>
              <Calling />
            </Col>
          </Row>
        </WrapperContainer>
      </Section>
    </>
  );
};

export default AnalyticsComponent;
