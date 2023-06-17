import React from "react";
import { Row, Col } from "react-grid-system";
import { Section } from "./styled-index";
import { ComponentContainer } from "./styled-index";
import Calling from "../calling";
import DetailsComentary from "./details-comentary";
import CompanyProfileCard from "./company-profile-card";

const RankingProfileComponents = () => {
  return (
    <>
      <Section>
        <ComponentContainer>
        <Row className="row">
            <Col lg={8} md={12} sm={12} sx={12} className="col">
                <CompanyProfileCard/>
            </Col>
            <Col lg={4} md={12} sm={12} sx={12} className="col">
                {/* <DetailsComentary/> */}
                <Calling/>
            </Col>
          </Row>
        </ComponentContainer>
      </Section>
    </>
  );
};

export default RankingProfileComponents;
