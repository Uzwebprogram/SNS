import React from "react";
import SliderComponent from "./slider-component";
import { Row, Col } from "react-grid-system";
import { Section } from "./styled-index";
import { ComponentContainer } from "./styled-index";
import PressCenter from "./press-center";
import Comentary from "./comentary";
import News from "./news";
import Ranking from "./ranking";
import Analytics from "./analytics";
import Calling from "../calling";

const HomeComponent = () => {
  return (
    <>
      <Section>
        <ComponentContainer>
          <Row className="row">
            <Col lg={8} md={12} sm={12} sx={12} className="col">
              <SliderComponent />
              <Analytics />
              <Ranking />
            </Col>
            <Col lg={4} md={12} sm={12} sx={12} className="col">
              <PressCenter />
              <Comentary />
              <Calling/>
              {/* <News /> */}
            </Col>
          </Row>
        </ComponentContainer>
      </Section>
    </>
  );
};

export default HomeComponent;
