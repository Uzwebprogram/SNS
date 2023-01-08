import styled from "styled-components";

export const WrapperPress = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 20px -10px #cccccc;
  border-radius: 15px;
  padding: 25px;
  margin-top: 20px;
  @media only screen and (max-width: 425px) {
    border-radius: 0;
    box-shadow: none;
  }
  h2 {
    font-family: "Gilroy";
    font-style: normal;
    font-weight: 600;
    font-size: 25px;
    line-height: 130%;
    margin-top: 0;
    letter-spacing: 0.01em;
    color: #1e1e1e;
  }

  .call-div {
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    a {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 130%;
      text-decoration: none;
      letter-spacing: 0.01em;
      color: #1e1e1e;
    }
  }

  .scales-div {
    margin-bottom: 20px;

    input {
      border: 1px solid #cccccc;
      border-radius: 5px;
      font-family: "Gilroy";
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
      letter-spacing: 0.01em;
      color: #1e1e1e;
      outline: none;
      padding: 10px 40px 10px 10px;
    }
    p {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 130%;
      letter-spacing: 0.01em;
      color: #1e1e1e;
    }
  }
  .press-content:last-child {
    hr {
      display: none;
    }
  }
`;
