import styled from "styled-components";

export const WrapperPress = styled.div`
  background: #151515;
  box-shadow: 0px 4px 20px -10px #cccccc;
  border-radius: 15px;
  padding: 25px;
  margin-top: 20px;
  @media only screen and (max-width: 425px) {
    margin-top: 0;
    border-radius: 0;
  }

  .card-wrapper {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  h2 {
    font-family: "Gilroy";
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 130%;
    margin-top: 0;
    letter-spacing: 0.01em;
    color: #fff;
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
      font-family: "Gilroy";
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
