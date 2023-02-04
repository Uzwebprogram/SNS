import styled from "styled-components";

export const Section = styled.div`
  padding: 10px 0;
  background-color: #2f66b8;
  .ant-input {
    :hover {
      border: 1px solid white;
      outline: none;
    }
    :active {
      border: 1px solid white;
      outline: none;
    }
    border: 1px solid white;
    border-radius: 25px;
    outline: none;
  }
  .ant-btn {
    :hover {
      border: transparent;
    }
    border: 2px solid white;
    border-top-right-radius: 25px !important;
    border-bottom-right-radius: 25px !important;
    padding-bottom: 7px !important;
  }
  @media only screen and (max-width: 920px) {
    .search {
      display: none;
    }
  }
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .links {
    p {
      margin: 0;
    }
  }

  .active {
    p {
      margin: 0;
      border-bottom: 2px solid #fff;
    }
  }

  .Auth{
    button {
    background-color: transparent;
    border: none;
    display: flex;
    align-items: center;
    cursor: pointer;
    p {
      margin: 0;
      padding: 0;
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
      letter-spacing: 0.01em;
      color: #1e1e1e;
      @media only screen and (max-width: 560px) {
        font-size: 12px;
      }
    }
    i {
      font-size: 24px;
      margin-right: 5px;
      color: white;
      @media only screen and (max-width: 560px) {
        font-size: 18px;
      }
    }
  }
  }
  .modals {
    position: absolute;
    width: 100%;
    height: 100vh;
    background: transparent;
    top: 100%;
    left: 0;
    z-index: 1000;
  }
  .navlink {
    text-decoration: none;
    color: #000;
    border: none;
    background: transparent;
    outline: none;
  }
  .modal-contents {
    background: #fff;
    margin-left: 13%;
    width: 350px;
    padding: 20px;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    box-shadow: 0 3px 8px #888888;
  }
  .nomodals {
    display: none;
  }
  ul {
    display: flex;
    text-decoration: none;
    list-style-type: none;
    width: 50%;
    justify-content: space-between;
    margin: 0;
    padding: 0;
    @media only screen and (max-width: 920px) {
      display: none;
    }
    li {
      margin: 0;
      padding: 0;
      display: flex;
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
  .Auth{
    background-color: transparent;
    border: none;
    display: flex;
    align-items: center;
    cursor: pointer;
    @media only screen and (max-width: 920px) {
      display: none;
    }
    i {
      font-weight: 400;
      font-size: 24px;
      color: white;
    }
  }
`;
export const MobileDiv = styled.div`
  display: none;
  @media only screen and (max-width: 920px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 25%;
    .AuthMobile{
    background-color: transparent;
    border: none;
    display: flex;
    align-items: center;
    cursor: pointer;
    i {
      font-weight: 400;
      font-size: 24px;
      color: white;
    }
  }
  }

`;
