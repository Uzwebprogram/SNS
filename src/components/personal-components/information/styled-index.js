import styled from "styled-components";

export const WrapperPress = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 20px -10px #cccccc;
  border-radius: 15px;
  padding: 25px;

  hr {
    margin: 0;
  }

  .header-div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .flex {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #cccccc;
    padding: 10px 0;
  }

  .line {
    /* margin-top: 50px; */
    h2 {
      margin: 10px 0;
    }

    h4 {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 110%;
      letter-spacing: 0.01em;
      color: #1e1e1e;
      margin: 20px 0;
    }
    p {
      margin: 20px 0;
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 130%;
      letter-spacing: 0.01em;
      color: #1e1e1e;
    }

    hr {
      margin: 0;
    }
  }
  .reting-box {
    margin-top: 0;
  }

  .edit-btn {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #fcfcfc;
    border: 1px solid #cccccc;
    border-radius: 20px;
    padding: 5px 15px;
    margin-top: -30px;

    i {
      margin-left: 10px;
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
