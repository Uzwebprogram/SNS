import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-between;
  align-items: center;
  margin-left: auto;
  padding: 0.5px 0px;
  background-color: white;

  .tel-none {
    @media only screen and (max-width: 425px) {
      display: none;
    }
  }
  @media only screen and (max-width: 720px) {
    width: 100%;
    .logo-insta {
      display: none;
    }
    .logo-tg {
      display: none;
    }
  }
  a {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    display: flex;
    align-items: flex-end;
    letter-spacing: 0.01em;
    color: #616262;
    text-decoration: none;
  }
  @media only screen and (max-width: 920px) {
    width: 100%;
  }
  @media only screen and (max-width: 380px) {
    a {
      font-size: 10px !important;
    }
    font-size: 10px !important;
  }
  a i {
    color: #616262;
    font-size: 20px;
    @media only screen and (max-width: 560px) {
      font-size: 15px !important;
    }
  }
  button {
    background-color: transparent;
    border: none;
    display: flex;
    align-items: center;
    cursor: pointer;
    p {
      margin: 0;
      padding: 0;
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
      letter-spacing: 0.01em;
      color: #1e1e1e;
      @media only screen and (max-width: 560px) {
        font-size: 12px;
      }
    }
    i {
      font-size: 24px;
      margin-right: 5px;
      @media only screen and (max-width: 560px) {
        font-size: 18px;
      }
    }
  }
`;
export const Section = styled.div`
  background-color: white;
`;
