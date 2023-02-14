import React from "react";
import { Row, Col } from "react-grid-system";
import { Section } from "./styled-index";
import { ComponentContainer } from "./styled-index";
import Calling from "../calling";
import RatingNeededCard from "./rating-needed-card/index";

const RatingNeededComponent = () => {
  return (
    <>
      <Section>
        <ComponentContainer>
          <Row className="row">
            <Col lg={8} md={12} sm={12} sx={12} className="col">
              <RatingNeededCard />
            </Col>
            <Col lg={4} md={12} sm={12} sx={12} className="col">
              <Calling isMargin />
            </Col>
          </Row>
        </ComponentContainer>
      </Section>
    </>
  );
};

export default RatingNeededComponent;
