import styled from "styled-components";

export const WrapperPress = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 20px -10px #cccccc;
  border-radius: 15px;
  padding: 25px;
  margin-top: ${(props) => (props.isMargin ? "20px" : "0")};

  .uslugi-wrapper {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #2f66b8;
    border-radius: 10px;
    margin-bottom: 10px;
    overflow-y: hidden;
    cursor: pointer;
  }
  .uslugi-box {
    width: 100%;
    padding: 10px;
  }

  .arrow-box {
    background: #2f66b8;
    height: 100% !important;
    padding: 22px 20px;

    i {
      font-size: 35px;
      color: #fff;
    }
  }

  .links {
    color: #000;
    text-decoration: none;
  }

  @media only screen and (max-width: 768px) {
    margin-top: 20px;
  }
  @media only screen and (max-width: 425px) {
    border-radius: 0;
    box-shadow: none;

    .col {
      padding: 0 !important;
    }
  }
  h2 {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 130%;
    margin-top: 0;
    letter-spacing: 0.01em;
    color: #1e1e1e;
  }

  h4 {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 100%;
    margin-top: 0;
    letter-spacing: 0.01em;
    color: #1e1e1e;
  }

  .scales-div:nth-child(1) {
    margin-bottom: 40px;
  }
  .scales-div {
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
