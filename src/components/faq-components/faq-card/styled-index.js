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

    .row {
      margin: 0 !important;
    }
  }

  .select-box {
    width: 100%;
    margin-bottom: 20px;
    select {
      width: 60%;
      border: 1px solid #cccccc;
      border-radius: 5px;
      outline: none;
      font-family: "Gilroy";
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
      /* identical to box height */
      letter-spacing: 0.01em;
      color: #1e1e1e;
      padding: 10px 30px 10px 10px;

      @media only screen and (max-width: 425px) {
        width: 100%;
      }
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

  .col {
    margin: 10px 0;
    a {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 130%;
      letter-spacing: 0.01em;
      color: #1e1e1e;
      margin: 0;
      text-decoration: none;
    }

    span {
      font-family: "Gilroy";
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 130%;
      letter-spacing: 0.01em;
      color: #616262;
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
  }

  .accordion-header {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 130%;
    letter-spacing: 0.01em;
    color: #1e1e1e;
  }

  .accor-p {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
    letter-spacing: 0.01em;
    color: #1e1e1e;
  }

  .accordion-item {
    border: none;
    border-bottom: 1px solid #cccccc;
  }

  .accordion-button:not(.collapsed) {
    color: #000;
    background-color: transparent;
    box-shadow: inset 0 -1px 0 rgb(0 0 0 / 13%);
  }
  .accordion-button:focus {
    box-shadow: none;
  }
  .accordion-button {
    padding: 1.5rem 1.25rem;
  }
`;
