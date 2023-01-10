import React from "react";
import { Row, Col } from "react-grid-system";
import { Section } from "./styled-index";
import { WrapperContainer } from "../../style-App";
import Calling from "../calling";
import PressCenter from "../home-components/press-center/index";
import AgencyCard from "./agency-card/index";
import ServiesCard from "./services-card/index";
const AgencyComponents = () => {
  return (
    <>
      <Section>
        <WrapperContainer>
          <Row className="row">
            <Col lg={8} md={12} sm={12} sx={12} className="col">
              <AgencyCard />
              <ServiesCard />
            </Col>
            <Col lg={4} md={12} sm={12} sx={12} className="col">
              <PressCenter />
              <Calling />
            </Col>
          </Row>
        </WrapperContainer>
      </Section>
    </>
  );
};

export default AgencyComponents;
