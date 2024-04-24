import styled from "styled-components";

export const Section = styled.div`
  padding: 30px 0;
   .row {
    margin: 0 !important;
  }

  @media only screen and (max-width: 425px) {
    .col {
      padding: 0 !important;
    }
  }
`;
export const ComponentContainer = styled.div`
  max-width: 1230px;
  width: 100%;
  margin: 0 auto;
  @media only screen and (max-width: 1221px) {
    width: 95%;
  }
  @media only screen and (max-width: 425px) {
    width: 100%;
  }
`;
