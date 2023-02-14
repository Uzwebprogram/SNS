import React from "react";
import { Row, Col } from "react-grid-system";
import { Section } from "./styled-index";
import { ComponentContainer } from "./styled-index";
import Calling from "../calling";
import RatingScalesCard from "./rating-scales-card/index";

const RatingScalesComponent = () => {
  return (
    <>
      <Section>
        <ComponentContainer>
          <Row className="row">
            <Col lg={8} md={12} sm={12} sx={12} className="col">
              <RatingScalesCard />
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

export default RatingScalesComponent;
