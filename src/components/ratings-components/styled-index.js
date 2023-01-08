import styled from "styled-components";

export const Section = styled.div`
  padding: 30px 0;

  .row {
    margin: 0;
  }

  @media only screen and (max-width: 425px) {
    .col {
      padding: 0 !important;
    }
  }
`;
