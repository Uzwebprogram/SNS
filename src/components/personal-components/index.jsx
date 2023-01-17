import React from "react";
import { Row, Col } from "react-grid-system";
import { Section } from "./styled-index";
import { ComponentContainer } from "./styled-index";
import Information from "./information";
import Surway from "./surway";
import PersonalTab from "./personal-tab";

const PersonalComponent = () => {
  return (
    <>
      <Section>
        <ComponentContainer>
          <Row className="row">
            <Col lg={8} md={12} sm={12} sx={12} className="col">
              <Information />
            </Col>
            <Col lg={4} md={12} sm={12} sx={12} className="col">
              <PersonalTab isMargin />
              <Surway />
            </Col>
          </Row>
        </ComponentContainer>
      </Section>
    </>
  );
};

export default PersonalComponent;
