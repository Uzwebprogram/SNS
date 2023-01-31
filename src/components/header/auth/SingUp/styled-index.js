import styled from "styled-components";

export const Wrapper = styled.form`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 500px;
  margin: 10px 0;
  padding: 20px;
  @media only screen and (max-width: 826px) {
    padding: 16px;
    width: 300px;
  }
  @media only screen and (max-width: 425px) {
    padding: 5px;
  }
  @media only screen and (max-width: 375px) {
    padding: 5px;
  }
  @media only screen and (max-width: 320px) {
    padding: 5px;
  }

  label {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 120%;
    letter-spacing: 0.01em;
    color: #1f1f1f;
    margin: 10px 0;
    @media only screen and (max-width: 520px) {
      font-size: 16px;
    }
  }
  input {
    background: #fff;
    border: none;
    outline: none;
    border: 1px solid #cccccc;
    width: 100%;
    padding: 15px 20px;
    color: black;
    background-color: #f5f5f5;
    border-radius: 7px;
    @media only screen and (max-width: 826px) {
      width: 100%;
    }
  }
  input[type="radio"] {
    width: 3% !important;
  }

  span {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 120%;
    letter-spacing: 0.01em;
    color: #1e1e1e;
    @media only screen and (max-width: 520px) {
      font-size: 10px;
    }
  }
  button {
    background: #2f66b8;
    border-radius: 15px;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.01em;
    color: #ffffff;
    padding: 15px 40px;
    border: none;
    margin: 0 auto;
  }
`;
