import React from "react";
import { Row, Col } from "react-grid-system";
import { Section } from "./styled-index";
import { ComponentContainer } from "./styled-index";
import PressCenter from "../home-components/press-center/index";
import Calling from "../calling";
import DisclosureCard from "./disclosure-card/index";

const DisclosureComponent = () => {
  return (
    <>
      <Section>
        <ComponentContainer>
          <Row className="row">
            <Col lg={8} md={12} sm={12} sx={12} className="col">
              <DisclosureCard />
            </Col>
            <Col lg={4} md={12} sm={12} sx={12} className="col">
              <PressCenter />
              <Calling />
            </Col>
          </Row>
        </ComponentContainer>
      </Section>
    </>
  );
};

export default DisclosureComponent;
