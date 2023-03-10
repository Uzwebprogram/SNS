import React from "react";
import { Row, Col } from "react-grid-system";
import { Section } from "./styled-index";
import { ComponentContainer } from "./styled-index";
import Calling from "../calling";
import DetailsComentary from "./details-comentary";
import RankingDetails from "./ranking";

const DetailsComponents = () => {
  return (
    <>
      <Section>
        <ComponentContainer>
        <Row className="row">
            <Col lg={8} md={12} sm={12} sx={12} className="col">
                <RankingDetails/>
            </Col>
            <Col lg={4} md={12} sm={12} sx={12} className="col">
                <DetailsComentary/>
                <Calling/>
            </Col>
          </Row>
        </ComponentContainer>
      </Section>
    </>
  );
};

export default DetailsComponents;
