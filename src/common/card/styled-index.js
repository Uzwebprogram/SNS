import styled from "styled-components";

export const CardWrapper = styled.div`
  width: 100%;
  background: ${(props) => (props.bgColor ? "#fff" : "#1b1a1a")};
  border: 1px solid ${(props) => (props.isBorder ? "transparent" : "#2c2c2c")};
  border-radius: 15px;
  margin-bottom: 25px;

  .col {
    padding: 0 !important;
  }
  .col-content {
    padding-left: 0 !important;
  }

  .card-content {
    padding: 10px 20px;
    /* @media only screen and (max-width: 425px) {
      padding: 10px 0;
    } */
    .p1 {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 500;
      font-size: 17px;
      line-height: 130%;
      letter-spacing: 0.01em;
      color: ${(props) => (props.bgColor ? "#000" : "#fff")};
    }
    .p2 {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 400;
      font-size: 15px;
      line-height: 130%;
      letter-spacing: 0.01em;
      color: ${(props) => (props.bgColor ? "#000" : "#fff")};

      text-decoration: dotted;
    }

    span,
    time {
      font-family: "Montserrat";
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
    width: 100%;
    /* display: flex;
    align-items: center;
    justify-content: flex-end; */
    img {
      width: 100%;
      height: 100%;
      border-radius: 10px;
    }
  }
`;
