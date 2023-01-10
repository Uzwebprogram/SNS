import React from "react";
import { Row, Col } from "react-grid-system";
import { Section } from "./styled-index";
import { WrapperContainer } from "../../style-App";
import PressCenter from "../home-components/press-center";
import Calling from "../calling";
import UslugiCard from "./uslugi-card";

const UslugiComponent = () => {
  return (
    <>
      <Section>
        <WrapperContainer>
          <Row className="row">
            <Col lg={8} md={12} sm={12} sx={12} className="col">
              <UslugiCard />
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

export default UslugiComponent;
