import styled from "styled-components";

export const Section = styled.div`
  padding: 30px 0;
  padding-top: 150px;
  .row {
    margin: 0;
  }

  @media only screen and (max-width: 425px) {
  padding-top: 85px;
    .col {
      padding: 0 !important;
    }
  }
`;
