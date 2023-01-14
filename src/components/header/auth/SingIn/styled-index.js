import styled from "styled-components";

   
export const Wrapper = styled.form`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  margin: 10px 0;
  padding: 40px;
  @media only screen and (max-width:826px) {
    padding: 16px;
    width: 300px;
    }

  label {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 120%;
    letter-spacing: 0.01em;
    color: #1F1F1F;
    margin: 10px 0;
    @media only screen and (max-width:520px) {
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
    background-color: #F5F5F5;
    border-radius: 7px;
    @media only screen and (max-width:826px) {
    width: 90%;
    }
  }
  input[type="radio"]{
    width: 3% !important;
  }

  span {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 120%;
    letter-spacing: 0.01em;
    color: #1E1E1E;
    @media only screen and (max-width:520px) {
    font-size: 10px;
    }
  }
  button{
    background: #2F66B8;
    border-radius: 15px;
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.01em;
    color: #FFFFFF;
    padding: 15px 40px;
    border: none;
    margin: 0 auto;
}
`