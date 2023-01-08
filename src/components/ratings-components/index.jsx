import React from "react";
import { Row, Col } from "react-grid-system";
import { Section } from "./styled-index";
import { WrapperContainer } from "../../style-App";
import Company from "./company/index";
import RetingScales from "./rating-scales/index";
import Calling from "../calling";

const RatingsComponent = () => {
  return (
    <>
      <Section>
        <WrapperContainer>
          <Row className="row">
            <Col lg={8} md={12} sm={12} sx={12} className="col">
              <Company />
            </Col>
            <Col lg={4} md={12} sm={12} sx={12} className="col">
              <RetingScales />
              <Calling />
            </Col>
          </Row>
        </WrapperContainer>
      </Section>
    </>
  );
};

export default RatingsComponent;
