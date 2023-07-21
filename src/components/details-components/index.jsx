import React from "react";
import { Row, Col } from "react-grid-system";
import { Section } from "./styled-index";
import { ComponentContainer } from "./styled-index";
import Calling from "../calling";
import DetailsComentary from "./details-comentary";
import RankingDetails from "./ranking";
import PressCenter from '../../components/home-components/press-center/index'

const DetailsComponents = () => {
  return (
    <>
      <Section>
        <ComponentContainer>
          <Row className="row">
            <Col lg={8} md={12} sm={12} sx={12} className="col">
              <RankingDetails />
            </Col>
            <Col lg={4} md={12} sm={12} sx={12} className="col">
              <PressCenter styles={{marginTop: "20px"}} />
            </Col>
          </Row>
        </ComponentContainer>
      </Section>
    </>
  );
};

export default DetailsComponents;
