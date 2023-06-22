import styled from "styled-components";

export const Wrapper = styled.div`
  display: none;
  @media only screen and (max-width: 991px) {
    display: block;
    position: fixed;
    width: 100%;
    background: #2f66b8;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
    border-radius: 0px 0px 15px 15px;
    height: auto;
    z-index: 110;
    top: ${(props) => (props.open ? "0px" : "-1000px")};
    transition: 1s;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
    padding-bottom: 20px  ;
    .Top {
      padding: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      span {
        color: white;
        font-size: 40px;
      }
    }
    ul {
      display: flex;
      flex-direction: column;
      list-style-type: none;
      text-decoration: none;
      margin: 0;
      padding: 0;
      margin-top: 5px;
      margin-left: 20px;
      .drop_li{
        margin-top: 20px;
      }
      li {
        margin: 0;
        padding: 0;
        p {
          margin: 0;
          padding: 0;
          font-family: "Montserrat";
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          line-height: 17px;
          letter-spacing: 0.01em;
          color: #ffffff;
        }
      }
    }
    .flags {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 35%;
      margin-top: 20px;
      margin-left: 20px;
      button {
        background-color: transparent;
        border: transparent;
        img {
          border-radius: 5px;
        }
      }
    }
    p {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 135%;
      letter-spacing: 0.01em;
      color: #ffffff;
      width: 50%;
      margin-top: 15px;
      margin-left: 20px;
    }
    a {
      font-family: "Rubik";
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 120%;
      letter-spacing: 0.01em;
      color: #ffffff;
      text-decoration: none;
      margin-left: 20px;
    }
  }
`;
export const Overlay = styled.div`
  display: ${(props) => (props.open ? "block" : "none")};
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100vh;
`;
