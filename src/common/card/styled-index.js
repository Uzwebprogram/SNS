import styled from "styled-components";

export const CardWrapper = styled.div`
  width: 100%;
  background: ${(props) => (props.bgColor ? "#1b1a1a" : "#fff")};
  border: 1px solid ${(props) => (props.isBorder ? "#2c2c2c" : "transparent")};
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
      color: ${(props) => (props.bgColor ? "#fff" : "#000")};
    }
    .p2 {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 400;
      font-size: 15px;
      line-height: 130%;
      letter-spacing: 0.01em;
      color: ${(props) => (props.bgColor ? "#fff" : "#000")};
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
