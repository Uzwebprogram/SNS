import styled from "styled-components";

export const CardWrapper = styled.div`
  width: 100%;
  background: #1b1a1a;
  border: 1px solid #2c2c2c;
  border-radius: 15px;
  margin-bottom: 25px;
 

  .card-content {
    padding: 10px 20px;
    .p1 {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 500;
      font-size: 17px;
      line-height: 130%;
      letter-spacing: 0.01em;
      color: #ffffff;
    }
    .p2 {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 400;
      font-size: 15px;
      line-height: 130%;
      letter-spacing: 0.01em;
      color: #ffffff;
    }

    span,
    time {
      font-family: "Gilroy";
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 130%;
      letter-spacing: 0.01em;
      color: #aaaaaa;
    }
    span {
      margin-right: 10px;
    }
  }
  .card-img {
    padding: 2px;
    img {
      width: 100%;
    }
  }
`;
