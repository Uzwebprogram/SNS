import styled from "styled-components";

export const WrapperPress = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 20px -10px #cccccc;
  border-radius: 15px;
  padding: 25px;
  @media only screen and (max-width: 425px) {
    margin-top: 0;
    border-radius: 0;
    box-shadow: none;
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
    margin-bottom: 30px;
  }

  p {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0.01em;
    color: #1e1e1e;
  }
`;