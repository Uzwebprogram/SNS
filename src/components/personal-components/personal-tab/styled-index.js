import styled from "styled-components";

export const WrapperPress = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 20px -10px #cccccc;
  border-radius: 15px;
  /* padding: 25px; */
  margin-top: ${(props) => (props.isMargin ? "0" : "20px")};

  .bgBlue {
    background: #2f66b8;
    p {
      font-family: "Gilroy";
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 130%;
      letter-spacing: 0.01em;
      color: #ffffff;
    }
  }

  .black > p {
    font-family: "Gilroy";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 130%;
    letter-spacing: 0.01em;
    color: #1e1e1e;
  }

  div {
    padding: 11px 20px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    @media only screen and (max-width: 425px) {
      border-radius: 0;
    }
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
`;
