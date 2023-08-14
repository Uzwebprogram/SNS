import styled from "styled-components";

export const WrapperPress = styled.div`
  background: #151515;
  box-shadow: 0px 4px 20px -10px #cccccc;
  border-radius: 15px;
  padding: 25px;
  margin-top: ${(props) => (props.isMargin ? "0" : "20px")};

  .link {
    text-decoration: none;
  }
  .links {
    color: #fff;
    text-decoration: none;
  }
  @media only screen and (max-width: 425px) {
    margin-top: 0;
    border-radius: 0;
    padding-top: 15px;

    .row {
      margin-left: 0 !important;
    }
  }

  .col {
    @media only screen and (max-width: 320px) {
      padding: 0 !important;
    }
  }

  .card-wrapper {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  h2 {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 130%;
    margin-top: 0;
    letter-spacing: 0.01em;
    color: #fff;
    margin-bottom: 10px;
    padding-left: 20px;

    @media only screen and (max-width: 425px) {
      padding-left:0 ;
    }
  }

  .select-box {
    width: 100%;
    margin-bottom: 20px;
    padding: 0 18px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media only screen and (max-width: 425px) {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      flex-direction: column;
      padding: 0;
    }
    select {
      width: 75%;
      background: #1b1a1a;
      border: 1px solid #2c2c2c;
      border-radius: 5px;
      outline: none;
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
      /* identical to box height */
      letter-spacing: 0.01em;
      color: #ffffff;
      padding: 10px 30px 10px 10px;

      @media only screen and (max-width: 425px) {
        width: 100%;
        margin-bottom: 20px;
      }
    }
  }

  .press-content {
    p {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 130%;
      letter-spacing: 0.01em;
      color: #1e1e1e;
    }

    time {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 130%;
      /* identical to box height, or 16px */

      letter-spacing: 0.01em;

      color: #616262;
    }
  }
  .press-content:last-child {
    hr {
      display: none;
    }
  }
`;
