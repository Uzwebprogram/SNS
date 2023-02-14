import React from "react";
import { Row, Col } from "react-grid-system";
import { Section } from "./styled-index";
import { ComponentContainer } from "./styled-index";
import Calling from "../calling";
import Ranking from "../home-components/ranking/index";
import PressCenter from "../home-components/press-center/index";
import RankingCard from "./ranking-card";

const RankingComponent = () => {
  return (
    <>
      <Section id="rankin">
        <ComponentContainer>
          <Row className="row">
            <Col lg={8} md={12} sm={12} sx={12} className="col">
              <Ranking isSelect={true} isBtn={true} />
            </Col>
            <Col lg={4} md={12} sm={12} sx={12} className="col">
              <RankingCard />
              <PressCenter />
              <Calling />
            </Col>
          </Row>
        </ComponentContainer>
      </Section>
    </>
  );
};

export default RankingComponent;
