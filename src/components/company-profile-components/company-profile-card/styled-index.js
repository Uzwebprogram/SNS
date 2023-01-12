import styled from "styled-components";

export const WrapperPress = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 20px -10px #cccccc;
  border-radius: 15px;
  padding: 25px;
  margin-top: 20px;
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

  h3 {
    font-family: "Gilroy";
    font-style: normal;
    font-weight: 600;
    font-size: 25px;
    line-height: 110%;
    /* or 27px */
    letter-spacing: 0.01em;
    color: #1e1e1e;
    margin-top: 30px;
  }

  .table-box {
    margin-top: 90px;
    width: 100%;

    p {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 110%;
      /* identical to box height, or 18px */
      letter-spacing: 0.01em;
      text-decoration-line: underline;
      color: #1e1e1e;
      margin-top: 30px;
    }

    .table {
      width: 67.5%;

      tbody,
      td,
      tfoot,
      th,
      thead,
      tr {
        border: none;
      }

      th {
        font-family: "Gilroy";
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 17px;
        letter-spacing: 0.01em;
        color: #1e1e1e;
      }

      td {
        font-family: "Gilroy";
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 130%;
        letter-spacing: 0.01em;
        color: #2c2c2c;
      }
    }
  }

  .hr {
    background: #000;
    border-radius: 10px;
    height: 2px;
  }

  .col {
    margin: 10px 0;
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

    span {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 110%;
      letter-spacing: 0.01em;
      color: #1e1e1e;
      display: flex;
    }
  }
  .press-content:last-child {
    hr {
      display: none;
    }
  }
`;
