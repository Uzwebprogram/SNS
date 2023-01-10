import React from "react";
import { Row, Col } from "react-grid-system";
import { Section } from "./styled-index";
import { WrapperContainer } from "../../style-App";
import Calling from "../calling";
import Ranking from "../home-components/ranking/index";
import PressCenter from "../home-components/press-center/index";
import RankingCard from "./ranking-card";

const RankingComponent = () => {
  return (
    <>
      <Section>
        <WrapperContainer>
          <Row className="row">
            <Col lg={8} md={12} sm={12} sx={12} className="col">
              <Ranking isSelect={true} />
              <RankingCard />
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

export default RankingComponent;
