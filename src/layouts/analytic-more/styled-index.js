import styled from "styled-components";

export const Section = styled.div`
  padding: 50px 0;
  .dfs {
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media only screen and (max-width: 545px) {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
    }
  }

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

export const WrapperPress = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 20px -10px #cccccc;
  border-radius: 15px;
  padding: 25px;

  .analytic-img {
    margin-top: 20px;
    width: 100%;
  }
  @media only screen and (max-width: 425px) {
    margin-top: 0;
    border-radius: 0;
    box-shadow: none;

    .row {
      margin: 0 !important;
    }
  }

  h2 {
    font-family: "Gilroy";
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 130%;
    margin-top: 0;
    letter-spacing: 0.01em;
    color: #1e1e1e;
  }
  p {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
    letter-spacing: 0.01em;
    color: #1e1e1e;
    margin: 0;
  }

  .bold-p {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 130%;
    /* or 21px */
    letter-spacing: 0.01em;
    color: #1e1e1e;
    margin: 0 365px 20px 0;
    @media only screen and (max-width: 425px) {
      margin: 0 0 20px 0;
    }
  }
`;
